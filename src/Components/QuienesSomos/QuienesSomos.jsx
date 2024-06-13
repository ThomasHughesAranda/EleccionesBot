import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import './styleEquipo.css';
import './styleQuienesSomos.css';

const ChatbotDescription = () => {
    return (
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h2 className="text-center mb-4">¡Conoce a nuestro chatbot aquí!</h2>
            <p className="lead text-center">EleccionesBot es una innovadora plataforma web diseñada para ayudarte a comprender los sucesos constitucionales con documentos actualizados.</p>
            <p className="text-center">Nuestro objetivo es simplificar el acceso a información relevante, proporcionando a los usuarios una herramienta para evaluar diferentes opciones y tomar decisiones de manera informada.</p>
          </Col>
        </Row>
      </Container>
    );
};

const Contactanos = () => {
  return (
    <Container className="Contactanos mt-5">
      <Row>
        <Col md={6} className="order-md-1 order-2"> {/* Columna para el texto */}
          <h2 className="mb-4">Para obtener mas informacion:</h2>
          <p className="lead"> - Contactanos a traves de nuestro correo electronico: </p>
          <p className="lead"> eleccionesbot@gmail.com </p>
        </Col>
      </Row>
    </Container>
  );
};

const EquipoDesarrollo = () => {
  return (
    <Container className="EquipoDesarrollo mt-5">
        <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '200px' }}>
            <h2 className="mb-4">Conoce al Equipo de Desarrollo</h2>
        </div>
      <Row>
        <Col md={6} className="order-md-1 order-2"> {/* Columna para el texto */}
          <p className="lead"> - Thomas Hughes</p>
          <p className="lead"> CEO y Desarrollador Web Full Stack</p>
        </Col>
        <Col md={6}>
        <p className="lead"> - Sebastian Bahamondes</p>
        <p className="lead"> CEO y Desarrollador Web Full Stack</p>
        </Col>
      </Row>
    </Container>
  );
};

const QuienesSomos = () => {
  return (
    <div>
      <ChatbotDescription />
      <EquipoDesarrollo />
      <Contactanos />
    </div>
  );
};

export default QuienesSomos;

