import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <Button variant="secondary"  onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar sesión
    </Button>
  );
};

export default Logout;
