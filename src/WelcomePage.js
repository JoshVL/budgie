import React from 'react';
import './WelcomePage.css';
import logo from './logo.svg';
import { GoogleLogin } from 'react-google-login';

const WelcomePage = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  console.log(clientId);
  const responseGoogle = (response) => {
    console.log("THE ONE PIECE IS REAL");
  };

  const responseGoogleFail = (response) => {
    console.log("Google OAuth failed")
  }

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
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogleFail}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default WelcomePage;