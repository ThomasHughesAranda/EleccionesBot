import './App.css';
import { BrowserRouter,  Route, Routes  } from 'react-router-dom';
import Chatbot from './Components/Chatbot/Chatbot';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import ProtectedRoutes  from './Components/Auth0/ProtectedRoutes';

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
            <Route path="/Inicio" element= {<Main/>} />      
        </Routes>
      </BrowserRouter>
  );
}

export default App;