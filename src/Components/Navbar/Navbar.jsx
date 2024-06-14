import { Navbar as BootstrapNavbar, Nav, Container} from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import Login from '../Auth0/Login';
import Logout from '../Auth0/Logout';
import './Navbar.css'; 
import { useState } from 'react';
import axios from 'axios';
const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  console.log('isAuthenticated:', isAuthenticated);
 

  const [isAuthorized, setIsAuthorized] = useState(false);

  const checkAuthorization = async () => {
      const id = user.sub;
      try {
        const response = await axios.get(`http://localhost:8000/admin/${id}`);
        if (response.data.autorizado === true) {
          setIsAuthorized(true);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
  };
  

  return (
    <BootstrapNavbar bg="light" expand="lg" className="custom-navbar">
      <Container className="contenedor">
      <img src="/Imagenes/Asistente.jpg" alt="Asistente" className="img-fluid" />
        <BootstrapNavbar.Brand as={Link} to="/Inicio" className="brand">
          EleccionesBot
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
            {isAuthenticated?(
              checkAuthorization(),
                <Nav>
                {isAuthorized && (
                  <Nav.Link as={Link} to="/Admin" className="nav-link">Panel de Administrador</Nav.Link>
                )}
              </Nav>
            ):(
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/¿Como-funciona?" className="nav-link">¿Cómo funciona?</Nav.Link>
                <Nav.Link as={Link} to="/¿Quienes-somos?" className="nav-link">¿Quiénes somos?</Nav.Link>
              </Nav>
            )}  
          <Nav> 
              {isAuthenticated ? <Logout /> : <Login />}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
