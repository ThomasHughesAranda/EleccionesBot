import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';


const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();
  if (isLoading) {
    
    return <div>Cargando...</div>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/Inicio" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoutes;