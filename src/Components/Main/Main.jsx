import React from 'react';
import Chatbot from '../Chatbot/Chatbot'; // Importa el componente Chatbot
import './styleprueba.css';
import { Container } from 'react-bootstrap';


const Main = () => {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Elecciones Bot</title>
      </head>
      <body>
        <header className="banner">
          <div className="container">
            <button className="logo">EleccionesBot</button>
            <nav className="navigation">
              <ul>
                <li><button>¿Cómo funciona?</button></li>
                <li><button>¿Quiénes somos?</button></li>
              </ul>
            </nav>
          </div>
        </header>
      <Container>
        <main className="content">
          <div className="intro">
            <h1>Bienvenid@ a</h1>
            <h2> EleccionesBot!</h2>
            <p>En EleccionesBot, nos dedicamos a </p>
            <p>simplificar el acceso a información </p>
            <p>relevante sobre procesos electorales. </p>
            <button className="button">Comienza ahora</button>
          </div>

          
        </main>

        <footer className="footer">
          <p>&copy; 2024 EleccionesBot. Todos los derechos reservados.</p>
        </footer>
      </Container>
        <script src="script.js"></script>
      </body>
      {/* Agrega el componente Chatbot fuera del cuerpo del HTML */}
      <Chatbot />
    </html>
    
  );
}

export default Main;
