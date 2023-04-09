import spLogo from './splogo.png';
import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="top-bar">
        <div className="logo">
          <img src={spLogo} alt="Smart Parking Logo" style={{ height: "150px" }} />
        </div>
        <div className="nav-links">
          <a href="/home">
            <button className="top-bar-button" style={{ height: "150px" }}>Home</button>
          </a>
          <a href="/book">
            <button className="top-bar-button" style={{ height: "150px" }}>Book</button>
          </a>
          <a href="/account">
            <button className="top-bar-button" style={{ height: "150px" }}>Account</button>
          </a>
          <a href="/about">
            <button className="top-bar-button" style={{ height: "150px" }}>About</button>
          </a>
          <a href="/contact">
            <button className="top-bar-button" style={{ height: "150px" }}>Contact</button>
          </a>
          <a href="/signin">
            <button className="top-bar-button" style={{ height: "150px" }}>Sign Out</button>
          </a>
        </div>
      </div>
      <div className="hero-section">
        <h1>Welcome to Smart Parking</h1>
        <p>Find and reserve parking spots in seconds!</p>
        <button className="hero-button">Book Now</button>
      </div>
      <div className="info-section">
        <div className="info-card">
          <img src="icon1.png" alt="Icon 1" />
          <h3>Easy to Use</h3>
          <p>Our platform is user-friendly and makes parking a breeze.</p>
        </div>
        <div className="info-card">
          <img src="icon2.png" alt="Icon 2" />
          <h3>Secure</h3>
          <p>
            Your safety is our top priority, and our platform is designed with the latest security measures.
          </p>
        </div>
        <div className="info-card">
          <img src="icon3.png" alt="Icon 3" />
          <h3>Convenient</h3>
          <p>Our service allows you to find and reserve parking spots from anywhere, at any time.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
