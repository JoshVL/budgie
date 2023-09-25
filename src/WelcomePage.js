import React from 'react';
import './WelcomePage.css';
import logo from './logo.svg';

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Budgie</h1>
      <p>Your simple budget buddy</p>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="logo-svg"
      >
        <image href={logo} width="100" height="100" />
      </svg>
      <div className="buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
};

export default WelcomePage;