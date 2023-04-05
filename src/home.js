import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="top-bar">
        <a href="/home"><button className="top-bar-button">Home</button></a>
        <a href="/book"><button className="top-bar-button">Book</button></a>
        <a href="/account"><button className="top-bar-button">Account</button></a>
        <a href="/about"><button className="top-bar-button">About</button></a>
        <a href="/contact"><button className="top-bar-button">Contact</button></a>
        <a href="/signin"><button className="top-bar-button">Sign Out</button></a>
      </div>
    </div>
  );
}

export default Home;