import React from "react";


/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */

// import "../index.css";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Import the CSS file

export const LandingPage = () => {
  return (
    <div id="webcrumbs">
      <div className="landing-container">
        <div className="background-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            className="animated-circle"
          >
            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="rgba(0, 173, 181, 1)" />
                <stop offset="100%" stopColor="rgba(57, 62, 70, 1)" />
              </linearGradient>
            </defs>
            <circle cx="400" cy="400" r="350" fill="url(#gradient)" />
          </svg>
        </div>
        <div className="content">
          <h1 className="title">
            <span className="typing-animation">Welcome to SmartLogin</span>
          </h1>
          <p className="description">
            Seamlessly manage your accounts with our secure and fast
            authentication platform.
          </p>
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
