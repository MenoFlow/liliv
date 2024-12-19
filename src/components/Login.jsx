import React, { useState } from 'react';
// import axios from 'axios';
import './Login.css';

const Login = ({setIsAuthenticated}) => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Redirection vers le tableau de bord ou autre
    console.log('Login réussi');

    // Stocker une valeur
    sessionStorage.setItem('username', username);
    setIsAuthenticated(true)
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Se connecter</h1>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur ou username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'cacher' : 'voir'}
              </span>
            </div>
          </div>

          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>
    
      </div>
    </div>
  );
};

export default Login;
