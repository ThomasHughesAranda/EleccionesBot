import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Login from '../Auth0/Login';
import Logout from '../Auth0/Logout';
import './Navbar.css'; 

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  console.log('isAuthenticated:', isAuthenticated);
  return (
    <BootstrapNavbar bg="light" expand="lg" className="custom-navbar">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/Inicio" className="brand">
          EleccionesBot
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/¿Como-funciona?" className="nav-link">¿Cómo funciona?</Nav.Link>
            <Nav.Link as={Link} to="/¿Quienes-somos?" className="nav-link">¿Quiénes somos?</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated? <Logout /> : <Login />}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
