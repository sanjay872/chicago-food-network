// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import App from '../App/App';
import DonorRegister from '../DonorRegister';
import ReceiverRegister from '../ReceiverRegister';
import './index.css';

function Register() {
    const [userType, setUserType] = useState(null);

    const handleUserType = (event) => {
        setUserType(event.target.value);
    };
  return (
    <div>
      <h1 className='title'>Chicago Food Network</h1>
      <h2 className='title'>Register</h2>
      <div style={{ marginLeft: '100px'}}>
        <p style={{ display: 'inline', paddingRight:'20px'}}>Type of User</p>
        <label style={{ paddingRight:'15px'}}>
          <input
            type="radio"
            value="donor"
            checked={userType === "donor"}
            onChange={handleUserType}
          />
          Donor
        </label>

        <label>
          <input
            type="radio"
            value="receiver"
            checked={userType === "receiver"}
            onChange={handleUserType}
          />
          Receiver
        </label>
        {}
      </div>
      {userType === "receiver" && <ReceiverRegister/>}
      {userType === "donor" && <DonorRegister />}
    </div>
  );
}

export default Register;
