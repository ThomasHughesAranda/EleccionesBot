const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { OpenAI } = require('openai');
const { OPENAI_API_KEY, ASSISTANT_ID } = process.env;
const app = express();

app.use(express.json());
app.use(cors());

// Configuración Api de OpenAI
const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

// Llamado a Asisstente de Api de OpenAI 
const assistantId = ASSISTANT_ID;
let pollingInterval;

// funcion que crea de un thread o hilo
async function createThread() {
    console.log('Creando un nuevo hilo...');
    const thread = await openai.beta.threads.create();
    return thread;
}

//funcion asincronica para agregar mensaje al thread
async function addMessage(threadId, message) {
    console.log('Agregando un nuevo mensaje al thread: ' + threadId);
    const response = await openai.beta.threads.messages.create(
        threadId,
        {
            role: "user",
            content: message
        }
    );
    return response;
}

//Funcion para correr el assistant
async function runAssistant(threadId) {
    console.log('Corriendo el asistente para el hilo: ' + threadId)
    const response = await openai.beta.threads.runs.create(
        threadId,
        { 
          assistant_id: assistantId,
        }
      );

    return response;
}

// Verificar el estado de ejecución del asistente
async function checkingStatus(res, threadId, runId) {
    const runObject = await openai.beta.threads.runs.retrieve(
        threadId,
        runId
    );
    const status = runObject.status;
    console.log('Estado actual: ' + status);
    if(status == 'completed') {
        clearInterval(pollingInterval);
        const messagesList = await openai.beta.threads.messages.list(threadId);
        let messages = []
        messagesList.body.data.forEach(message => {
            messages.push(message.content);
        });
        res.json({ messages });
    }
    else if(status === 'requires_action') {
        console.log('Requiere acción... buscando una función')
        if(runObject.required_action.type === 'submit_tool_outputs') {
            console.log('submit tool outputs ... ')
            const tool_calls = await runObject.required_action.submit_tool_outputs.tool_calls
            const parsedArgs = JSON.parse(tool_calls[0].function.arguments);
            console.log('Query to search for: ' + parsedArgs.query)
            const apiResponse = await getSearchResult(parsedArgs.query)
            const run = await openai.beta.threads.runs.submitToolOutputs(
                threadId,
                runId,
                {
                  tool_outputs: [
                    {
                      tool_call_id: tool_calls[0].id,
                        output: JSON.stringify(apiResponse)
                    },
                  ],
                }
            )
            console.log('Ejecución después de enviar los resultados de la herramienta: ' + run.status)
        }
    }
}

//Server endpoints
// Endpoint para crear un nuevo hilo
app.get('/thread', (req, res) => {
    createThread().then(thread => {
        res.json({ threadId: thread.id });
    });
})

// Endpoint para agregar un mensaje al hilo
app.post('/message', (req, res) => {
    const { message, threadId } = req.body;
    addMessage(threadId, message).then(message => {
        // res.json({ messageId: message.id });
        // Run the assistant
        runAssistant(threadId).then(run => {
            const runId = run.id;           
            // Check the status
            pollingInterval = setInterval(() => {
                checkingStatus(res, threadId, runId);
            }, 5000);
        });
    });
});



app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});