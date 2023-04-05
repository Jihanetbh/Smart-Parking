import React from "react";
import logo from "./logo512.png";
import "./contact.css";

function contact() {
  const phone = "+212 771325766";
  const email = "abdelhamidnajmi10@gmail.com";
  const address = "INPT, Av Allal Al Fassi, Rabat, Morocco";

  return (
    <div className="contact">
      <div className="top-bar">
        <a href="/home">
          <button className="top-bar-button">Home</button>
        </a>
        <a href="/book">
          <button className="top-bar-button">Book</button>
        </a>
        <a href="/account">
          <button className="top-bar-button">Account</button>
        </a>
        <a href="/about">
          <button className="top-bar-button">About</button>
        </a>
        <a href="/contact">
          <button className="top-bar-button">Contact</button>
        </a>
        <a href="/signin">
          <button className="top-bar-button">Sign Out</button>
        </a>
      </div>
      <img src={logo} alt="Logo" className="img" />
      <div className="contact-text">
        <h1>Contact Us</h1>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
      </div>
    </div>
  );
}

export default contact;
