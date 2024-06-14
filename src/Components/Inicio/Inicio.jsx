import { Container, Row, Col,Button } from 'react-bootstrap';
import './Inicio.css';
import { useAuth0 } from '@auth0/auth0-react';
import ComoFunciona from '../Comofunciona/ComoFunciona';
import { Link } from 'react-router-dom';

const Inicio = () => {

const { loginWithRedirect } = useAuth0();
  return (
    <>
        <div className='contenidoInicio'>
            <Container>
            <Row className="align-items-center">
                <Col md={6} >
                <div>
                    <h1 className='titulo'>Bienvenid@ a</h1>
                    <h1 className='titulo'  > EleccionesBot!</h1>
                    <p>En EleccionesBot, nos dedicamos a implificar el acceso a información relevante sobre procesos electorales. </p>
                </div>
                <Button variant="success" size="lg" onClick={loginWithRedirect}>Ingresa aquí a EleccionesBot </Button>
                </Col>
                <Col md={6}>
                    <img 
                        src="/Imagenes/Main.jpg"
                        alt="S"
                        className="img-fluid imagenInicio"
                    />
                </Col>
            </Row>
            </Container>
        </div>
        <Container className='contenidoChatbot'>
        <Row className="align-items-center textoChatbot">
                <Col md={6} >
                    <h1 className='chatbotTitulo'>¡Conoce a nuestro Chatbot Aqui!</h1>
                </Col>
                <Col md={6} >
                    <p>Tienes dudas sobre las propuestas del Plebiscito Constitucional 2023 en Chile? ¡Accede a nuestro chatbot aquí para obtener respuestas rápidas y precisas! Estamos aquí para proporcionarte información clara y precisa sobre las propuestas en consideración para que puedas tomar decisiones informadas en este proceso electoral.</p>
                </Col>
            </Row>
            <div className="d-flex justify-content-center imagenChatbot">
                <img src="/Imagenes/Asistente.jpg" alt="Imagen" className="img-fluid" style={{ width: '370px', height: '370px' }} />
            </div>
        </Container>
        <ComoFunciona /> 
        <div className="footer">
  <Container>
    <Row>
      <Col md={4}>
        <h3>Acerca de Nosotros</h3>
        <p><Link as={Link} to="/¿Como-funciona?"className="footer-link" >¿Cómo funciona?</Link></p>
        <p><Link as={Link} to="/¿Quienes-somos?" className="footer-link">¿Quiénes somos?</Link></p>
      </Col>
      <Col md={7}>
        <h3>Contactos</h3>
        <p>Correo: eleccionesbot@gmail.com</p>
        <p>Teléfono: +56975287098</p>
      </Col>
    </Row> <div className="d-flex justify-content-center">
        <h7> 2024 EleccionesBot Todos los derechos reservados.</h7>
    </div>

  </Container>
</div>

    </>
  );
};

export default Inicio;
