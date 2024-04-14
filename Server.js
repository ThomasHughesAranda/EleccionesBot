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

openai.beta.assistants.retrieve("asst_A0uu0dkrl9sIXInopXdRYQNk")
    .then(assistant => {
        console.log(assistant);
    })
    .catch(error => {
        console.error("Error retrieving assistant:", error);
    });

app.listen(PORT, () => console.log('El servidor está corriendo en el puerto ' + PORT));
