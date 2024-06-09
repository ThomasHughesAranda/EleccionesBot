import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({children }) => {
  const isAuthenticated = useAuth0();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/Inicio" state={{ from: location }} replace />;
  }
  return children;
};
export default ProtectedRoutes;

