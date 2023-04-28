import SP from './SP.svg';
import React from "react";
import "./account.css";

function account() {
  return (
    <div className="account">
      <div className="top-bar">
        <div className="logo">
          <img src={SP} alt="Smart Parking Logo" style={{ height: "50px" }} />
        </div>
        <div className="nav-links">
        <a href="/home"><button className="top-bar-button">Home</button></a>
        <a href="/book"><button className="top-bar-button">Book</button></a>
        <a href="/account"><button className="top-bar-button">Account</button></a>
        <a href="/about"><button className="top-bar-button">About</button></a>
        <a href="/contact"><button className="top-bar-button">Contact</button></a>
        <a href="/signin"><button className="top-bar-button">Sign Out</button></a>
      </div>
      </div>
    </div>
  );
}

export default account;
