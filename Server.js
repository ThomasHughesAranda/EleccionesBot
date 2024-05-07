const PORT = 8000;
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const obtenerAsistente = async () => {
    try {
        const assistant = await openai.beta.assistants.retrieve("asst_A0uu0dkrl9sIXInopXdRYQNk");
        return assistant;
    } catch (error) {
        console.error("Error retrieving assistant:", error);
        throw error;
    }
};

//Create thread
const crearThread = async () => {
    try {
        const thread = await openai.beta.threads.create();
        return thread;
    } catch (error) {
        console.error('Error al crear el hilo:', error);
        throw error;
    }
};

//Create message
const createMessage = async (thread) => {
    try {
       const message = await openai.beta.threads.messages.create(thread.id, {
            role: 'user',
            content: 'Quiero saber más sobre la propuesta de constitucion'
        });
        console.log(message.content[0].text);
        console.log(message);
    } catch (error) {
        console.error('Error al crear el mensaje:', error);
    }
};

const retrieveRun = async (run) => {
    try {
        let keepRetrievingRun;
        while (run.status !== "completed") {
            keepRetrievingRun = await openai.beta.threads.runs.retrieve(
              run.thread_id,
              run.id
            );
            console.log(`Run status: ${keepRetrievingRun.status}`);
            if (keepRetrievingRun.status === "completed") {
              console.log("\n");
              break;
            }
          }
    } catch (error) {
        console.error('Error al recuperar el hilo:', error)
        throw error;
    }
};

//Run assistant
const runAssistant = async () => {
    try {
        // Crear un nuevo hilo
        const thread = await crearThread();
        // Obtener el objeto del asistente
        const assistant = await obtenerAsistente();
        // Ejecutar el asistente en el hilo creado
        const run = await openai.beta.threads.runs.create(thread.id,{
            assistant_id: assistant.id,
            instructions: 'Credencial usuario',           
        });
        await retrieveRun(run);
        createMessage(thread);
    } catch (error) {
        console.error('Error al ejecutar el asistente:', error);
        throw error;
    }
};

runAssistant();

app.listen(PORT, () => console.log('El servidor está corriendo en el puerto ' + PORT));
