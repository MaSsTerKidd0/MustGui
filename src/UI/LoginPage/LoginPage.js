import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Make sure this points to the correct CSS file with your styles

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(username, password);
    navigate('/home');
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <img src='/assets/pictures/person_icon.png' alt="Login Image" className="person-icon"/>
        <div className="input-group">
          <input 
            className="input" 
            type="text" 
            id="username" 
            name="username" 
            required 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-group">
          <input 
            className="input" 
            type="password" 
            id="password" 
            name="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
