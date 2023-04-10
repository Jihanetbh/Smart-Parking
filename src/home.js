import SP from './SP.svg';
import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="top-bar">
        <div className="logo">
          <img src={SP} alt="Smart Parking Logo" style={{ height: "50px" }} />
        </div>
        <div className="nav-links">
          <a href="/home">
            <button className="top-bar-button" >Home</button>
          </a>
          <a href="/book">
            <button className="top-bar-button" >Book</button>
          </a>
          <a href="/account">
            <button className="top-bar-button" >Account</button>
          </a>
          <a href="/about">
            <button className="top-bar-button" >About</button>
          </a>
          <a href="/contact">
            <button className="top-bar-button" >Contact</button>
          </a>
          <a href="/signin">
            <button className="top-bar-button" >Sign Out</button>
          </a>
        </div>
      </div>
      <div className="hero-section">
        <h1>Welcome to Smart Parking</h1>
        <p>Find and reserve parking spots in seconds!</p>
        <a href="/book">
        <button className="hero-button">Book Now</button>   
        </a>
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
