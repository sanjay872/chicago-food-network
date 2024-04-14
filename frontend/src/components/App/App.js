// import logo from './logo.svg';
import React from 'react';
import "./App.css";
import { useHistory } from 'react-router-dom';

function App() {
  // const history = useHistory();

  const redirectToURL = () => {
    // Redirect to the desired URL
    // history.push('/register');
    window.location.href = '/register';

  };

  const listPage = () => {
    // Redirect to the desired URL
    // history.push('/register');
    window.location.href = '/list';

  };


  return (
    <div>
      <h1 className="title">Chicago Food Network</h1>
      <button onClick={redirectToURL}>Register</button>
      <button onClick={listPage}>Find Receivers</button>
    </div>
  );
}

export default App;
