import React, { useState } from 'react';
// import axios from 'axios';
import './Login.css'; // Utilisez le même fichier CSS pour garder la cohérence
import { Link } from 'react-router-dom';

const Register = ({onClose}) => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        username,
        password,
      });

      if (response.data.success) {
        setSuccessMessage('Inscription réussie. Vous pouvez maintenant vous connecter.');
        setusername('');
        setPassword('');
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
  };

  return (
        <div className="login-container">
        <div className="login-box">
          <button className=' btn btn-danger justify-content-right text-end mb-4' onClick={onClose}>x</button>
            <h1>Creer un utilisateur</h1>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}

            <form onSubmit={handleRegister}>
            <div className="form-group">
                <label htmlFor="username">Nom d'utilisateur</label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="Entrez votre username"
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
                    placeholder="Entrez votre mot de passe"
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
                Enregistrer
            </button>
            </form>

        </div>
        </div>
  );
};

export default Register;
