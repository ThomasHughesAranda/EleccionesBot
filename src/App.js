import './App.css';
import Chatbot from './Components/Chatbot/Chatbot';
import Navbar from './Components/Navbar/Navbar';
//import Main from './Components/Main/Main';
import { Auth0Provider } from '@auth0/auth0-react';
//import LandingPage from './Components/LandingPage/LandingPage';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  return (
    <Auth0Provider 
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <Navbar />
      <Chatbot />
    </Auth0Provider>
  );
}

export default App;

