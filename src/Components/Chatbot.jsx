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
            <Container >
                <Card>
                    <header className="chat-header">
                        <Card.Header >EleccionesBot</Card.Header>
                    </header>
                    <section className="chat">
                        <div className="chat-feed">
                            <ListGroup variant="flush">
                                {messages.map((message, index) => (
                                    <ListGroup.Item key={index}>{message}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>
                    </section>
                </Card>
                <InputGroup className="mb-3 " custom-input-group >
                    <Form.Control
                        id="message-input"
                        placeholder="Escriba su consulta aquí..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleMessageSend}>
                        Enviar
                    </Button>
                </InputGroup>
            </Container>
        </div>
    );
};

export default Chatbot;
