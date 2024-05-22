import React, { useState } from 'react';
import { Button, Form, InputGroup, Container, ListGroup, Card } from 'react-bootstrap';
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
