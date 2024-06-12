import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const AdminProtectedRoutes = ({ children }) => {
    const { isAuthenticated, isLoading ,user} = useAuth0();
    const location = useLocation();
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
    if (isLoading ) {
        return <div>Cargando...</div>;
    }
    if (!isAuthenticated ) {
        return <Navigate to="/Inicio" state={{ from: location }} replace />;
    }
    checkAuthorization();
    console.log('isAuthorized:', isAuthorized);
    return children;
};

export default AdminProtectedRoutes;