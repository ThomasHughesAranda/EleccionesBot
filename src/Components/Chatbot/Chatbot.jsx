import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);

    const handleMessageSend = () => {
        const newMessage = document.getElementById("message-input").value;
        setMessages([...messages, newMessage]);
        document.getElementById("message-input").value = '';
    };

    return (
        <div className="Chatbot">
            <Container fluid="md">
                <Card>
                    <Card.Header className="chat-header" style={{backgroundColor: '#93DFCA'}}>EleccionesBot </Card.Header>
                    <Card.Body className="chat">
                            <ListGroup variant="flush" >
                                {messages.map((message, index) => (
                                    <ListGroup.Item style={{backgroundColor: '#F3F1EB'}} key={index}>{message}</ListGroup.Item>
                                ))}
                            </ListGroup>
                    </Card.Body>
               
                    <Card.Footer style={{backgroundColor: '#F3F1EB'}} >                          
                        <InputGroup className="mb-3" >
                            <Form.Control
                                id="message-input"
                                placeholder="Escriba su consulta aquí..."
                            />
                            <Button variant="dark" id="button-addon2" onClick={handleMessageSend}>
                                Enviar
                            </Button>
                        </InputGroup>
                    </Card.Footer> 
                </Card>
            </Container>
        </div>
    );
};

export default Chatbot;
