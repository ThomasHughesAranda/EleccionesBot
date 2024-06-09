import './styleprueba.css';
import { Container } from 'react-bootstrap';

const Main = () => {
  return (

      <body>
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
        
      </body>

    
  );
}

export default Main;
