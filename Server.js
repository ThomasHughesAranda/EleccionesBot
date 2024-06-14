const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { OpenAI } = require('openai');
const { OPENAI_API_KEY, ASSISTANT_ID,VECTOR_ID,RECT_APP_AUTH0_ADMIN_USER_ID } = process.env;
const app = express();
const pool = require('./db');

app.use(express.json());
app.use(cors());

// Configuración Api de OpenAI
const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    defaultHeaders: {
        'OpenAI-Beta': 'assistants=v2'
    }
});


// Llamado a Asisstente de Api de OpenAI 
const assistantId = ASSISTANT_ID;
let pollingInterval;

const vectorStore = await openai.beta.vectorStores.retrieve(VECTOR_ID);

assistant= await openai.beta.assistants.update(assistantId {
    tool_resources: { file_search: { vector_store_ids: [vectorStore.id] } },
});
  
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
    if(status === 'completed') {
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


// Endpoint OpenAI
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
        // Run the assistant
        runAssistant(threadId).then(run => {
            const runId = run.id;           
            // Estado
            pollingInterval = setInterval(() => {
                checkingStatus(res, threadId, runId);
            }, 5000);
        });
    });
});

// Endpoint Base de Datos
//Endpoint registrar usuario a tabla Users
app.post('/users', async (req, res) => {
    const { email, name } = req.body;
    try {
        const query = 'INSERT INTO Users (email,name) VALUES ($1, $2) ON CONFLICT (email) DO NOTHING';
        const values = [email, name];
        // Usa el pool para hacer el query
        await pool.query(query, values);
        res.status(201).send('Datos insertados correctamente a la tabla usuarios');
    } catch (error) {
        console.error('Error al insertar datos:', error);
        res.status(500).send('Error al insertar datos a la tabla usuarios');
    }
});
//Endpoint ingresar mensaje a tabla Messages
app.post('/messagesUsers', async (req, res) => {
    const { messageUser, emailUser } = req.body;
    try {
        const query = 'INSERT INTO Messages (messageUser, emailUser) VALUES ($1, $2)';
        const values = [messageUser, emailUser];
        // Usa el pool para hacer el query
        await pool.query(query, values);
        res.status(201).send('Datos insertados correctamente a la tabla messages');
    } catch (error) {
        console.error('Error al insertar datos:', error);
        res.status(500).send('Error al insertar datos a la tabla messages');
    }
});  
//Endpoint obtener mensajes de tabla Messages
app.get('/messagesUsers', async (req, res) => {
    try {
        const query = 'SELECT * FROM Messages';
        const response = await pool.query(query);
        res.status(200).json({
            message: 'Datos obtenidos correctamente de la tabla messages',
            data: response.rows
        });
    } catch (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).send('Error al obtener datos de la tabla messages');
    }
});

app.get('/admin/:id', (req, res) => {
    const id = req.params.id;
    if (id === RECT_APP_AUTH0_ADMIN_USER_ID) {
        res.json({ autorizado: true });
    } else {
        res.json({ autorizado: false });
    }
});


app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});