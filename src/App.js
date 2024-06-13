import './App.css';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import Chatbot from './Components/Chatbot/Chatbot';
import Navbar from './Components/Navbar/Navbar';
import ProtectedRoutes  from './Components/Auth0/ProtectedRoutes';
import ComoFunciona from './Components/Comofunciona/ComoFunciona';
import Admin from './Components/Admin/Admin';
import AdminProtectedRoutes from './Components/Auth0/AdminProtectedRoutes';
import Inicio from './Components/Inicio/Inicio';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <ProtectedRoutes>
              <Chatbot/>
            </ProtectedRoutes>
          }/> 
          <Route path="/Admin" element={
           <AdminProtectedRoutes>
              <Admin/>
           </AdminProtectedRoutes>
          }/>
          <Route path="/Inicio" element= {<Inicio/>} />
          <Route path="/¿Como-funciona?" element= {<ComoFunciona/>} />  
        </Routes>
      </BrowserRouter>
  );
}

export default App;