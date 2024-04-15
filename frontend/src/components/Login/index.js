import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (userType === 'donor') {
      // Implement donor login logic here
      console.log('Donor login:', email, password);
      navigate('/list');
    } else if (userType === 'receiver') {
      // Implement receiver login logic here
      console.log('Receiver login:', email, password);
      navigate('/status');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <input
              type="radio"
              value="donor"
              checked={userType === 'donor'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Donor
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="receiver"
              checked={userType === 'receiver'}
              onChange={(e) => setUserType(e.target.value)}
            />
            Receiver
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;