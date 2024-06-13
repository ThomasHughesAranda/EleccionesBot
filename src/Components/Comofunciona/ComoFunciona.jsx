import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styleimagenfuncion.css';
const ComoFuncionachatbot = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h2 className="text-center mb-4">En que consiste nuestro Chatbot</h2>
          <p className="lead text-center">EleccionesBot es una plataforma que simplifica información crucial sobre procesos electorales.</p>
          <p className="text-center">Utilizando Inteligencia Artificial a través de un chatbot, brinda a los usuarios respuestas inmediatas a sus consultas y dudas relacionadas con elecciones, propuestas constitucionales y más.</p>
          <p className="text-center">La plataforma se basa en los programas electorales oficiales, garantizando la veracidad de la información obtenida de la Biblioteca Nacional Digital de Chile. EleccionesBot es tu aliado confiable para entender y participar activamente en el proceso democrático.</p>
        </Col>
      </Row>
    </Container>
  );
};

const ComoFuncionaPasoAPaso = () => {
  return (
    <Container className="ComoFuncionaPasoAPaso mt-5">
      <Row>
        <Col md={6} className="order-md-1 order-2"> {/* Columna para el texto */}
          <h2 className="mb-4">Sigue los siguientes Pasos:</h2>
          <p className="lead"> - Inicia sesión con el botón de Iniciar Sesión en la parte superior derecha de la pantalla. </p>
          <p className="lead"> - Te aparecera el Inicio de sesion en la imagen que puede apreciar. </p>
          <p className="lead"> - Tiene la facilidad de iniciar con su Cuenta Google para tener acceso mas rapido a nuestro Chat.</p>
          <p className="lead"> - Aqui puede apreciar un ejemplo de nuestro ChatBot.</p>
          <img src="/Fotos/demostracionChatbot.png" alt="" className="ejemplochat" />
        </Col>
        <Col md={6} className="text-center order-md-2 order-1"> {/* Columna para la imagen */}
          <img src="/Fotos/loginpagina.png" alt="" className="loginpagina" />
        </Col>
      </Row>
    </Container>
  );
};


const ComoFunciona = () => {
    return (
      <div>
        <ComoFuncionachatbot />
        <ComoFuncionaPasoAPaso />
      </div>
    );
    
  }

export default ComoFunciona;

  