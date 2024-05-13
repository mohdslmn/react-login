import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LoginPage.css'; 
import { FaEye, FaUser, FaLock, FaGoogle, FaGithub } from 'react-icons/fa'; 

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'user123' && password === 'pass123') {
      onLogin();
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <div className="social-login">
          <button className="google-btn">
            <FaGoogle className='gIcon'/> Continue with Google
          </button>
          <button className="github-btn">
            <FaGithub className='gIcon'/> Continue with GitHub
          </button>
        </div>
        <div className="input-group">
          <div className="input-with-icon">
            <FaUser className="input-icon" />
            <input
              type="text"
              className="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-with-icon">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              className="username"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              <FaEye />
            </span>
          </div>
          <a href="/forgot-password" className="forgot-password">Forgot password?</a>
        </div>
        <div className="signup-option">
        <p>Dont have an account? <a href="/signup">Create one</a></p>
      </div>
        <button className="login-btn" onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;

