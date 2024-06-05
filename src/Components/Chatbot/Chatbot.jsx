import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Container, ListGroup, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [threadId, setThreadId] = useState(null);
    const [loading, setLoading] = useState(false); 
    const [inputDisabled, setInputDisabled] = useState(false); 

    // Obtener el thread al iniciar el chatbot
    useEffect(() => {
        axios.get('http://localhost:8000/thread')
            .then(response => {
                setThreadId(response.data.threadId);
            })
            .catch(error => {
                console.error("Error al crear el hilo:", error);
            });
    }, []);

    const handleMessageSend = () => {
        const newMessage = document.getElementById("message-input").value;
        if (!newMessage || !threadId) return;

        // Agregar el mensaje del usuario a la lista de mensajes
        setMessages([...messages, { role: 'user', content: newMessage }]);
        document.getElementById("message-input").value = '';

        // Carga de respuesta del servidor 
        setLoading(true);
        setInputDisabled(true);


        // Envia el mensaje al backend
        axios.post('http://localhost:8000/message', { message: newMessage, threadId })
            .then(response => {
                if (Array.isArray(response.data.messages)) {
                    const assistantMessages = response.data.messages[0].flat().map(msg => ({
                        role: 'assistant',
                        content: msg.type === 'text' ? msg.text.value : 'Mensaje no reconocido'
                    }));
                    setMessages(prevMessages => [...prevMessages, ...assistantMessages]);
                } else {
                    console.error("Respuesta inesperada:", response.data);
                }
            })
            .catch(error => {
                console.error("Error al enviar el mensaje:", error);
            })
            .finally(() => {
                // Spinner y inputdisabled desaparecen si hay respuesta o error
                setLoading(false);
                setInputDisabled(false);

            });
    };  

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleMessageSend();
        }
    };

    return (
        <div className="Chatbot">
            <Container fluid="md">
                <Card>
                    <Card.Body className="chat">
                        <ListGroup variant="flush">
                            {messages.map((message, index) => (
                                <ListGroup.Item key={index} style={{ backgroundColor: message.role === 'user' ? '#F3F1EB' : '#E0E0E0' }}>
                                    {message.content}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                    <Card.Footer style={{ backgroundColor: '#F3F1EB' }}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                id="message-input"
                                placeholder="Escriba su consulta aquí..."
                                onKeyPress={handleKeyPress}
                                disabled={inputDisabled}
                            />
                            <Button variant="dark" id="button-addon2" onClick={handleMessageSend} disabled={inputDisabled}>
                                {loading ? ( // Muestra Spinner mientras carga el mensaje del asistente
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        style={{ marginRight: '5px' }}
                                    />
                                ) : (
                                    'Enviar'
                                )}
                            </Button>
                        </InputGroup>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default Chatbot;
