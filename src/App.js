import './App.css';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import Chatbot from './Components/Chatbot/Chatbot';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import ProtectedRoutes  from './Components/Auth0/ProtectedRoutes';
import ComoFunciona from './Components/Como-funciona/Como-funciona';
import Admin from './Components/Admin/Admin';
import AdminProtectedRoutes from './Components/Auth0/AdminProtectedRoutes';
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
          <Route path="/Inicio" element= {<Main/>} />      
          <Route path="/¿Como-funciona?" element= {<ComoFunciona/>} />  
        </Routes>
      </BrowserRouter>
  );
}

export default App;