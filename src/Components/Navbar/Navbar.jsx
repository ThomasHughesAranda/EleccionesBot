import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';

const NavbarOffcanvas = () => {
  // Obtener el primer elemento de la lista
  const expand = false;

  return (
    <Navbar expand={expand} className="bg-dark mb-3">
      <Container fluid>
        <Navbar.Brand href="#" className="text-light">EleccionesBot</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='bg-light'/>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              EleccionesBot
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-dark">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" className="text-light">Inicio</Nav.Link>
              <Nav.Link href="#action2" className="text-light">¿Cómo funciona?</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
                className="text-light"
              >
                <NavDropdown.Item href="#action3" className="text-light">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="text-light">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="text-light">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarOffcanvas;

