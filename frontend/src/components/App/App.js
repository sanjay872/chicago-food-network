// import logo from './logo.svg';
import React, {useState} from 'react';
import "./App.css";
import { useHistory } from 'react-router-dom';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // const history = useHistory();

  const redirectToURL = () => {
    // Redirect to the desired URL
    // history.push('/register');
    window.location.href = '/register';

  };

  const handleListPage = () => {
    // Redirect to the desired URL
    // history.push('/register');
    window.location.href = '/list';
  };

  const handleLogin = () => {
    window.location.href = '/login';
  }


  return (
    <div className='img-container'>
      <h1 className="title">Chicago Food Network</h1>
      <button style={{display: 'block', margin: '10px'}} onClick={redirectToURL}>Register</button>
      <button style={{display: 'block', margin: '10px'}} onClick={handleListPage}>Find Receivers</button>
      <button style={{display: 'block', margin: '10px'}} onClick={handleLogin}> Login</button>
    </div>
  );
}

export default App;
