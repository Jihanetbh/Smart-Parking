import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./book.css"

function Book() {
  return (
    <Router>
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
        <Switch>
          <Route path="/account">
            <RegistrationForm />
          </Route>
          <Route path="/">
            <BookPage />
          </Route>
        </Switch>
      
    </Router>
  );
}

function BookPage() {
  return (
    <div className='parkings'>
      <ClickableImage
        src="./images/img1.jpg"
        alt="Image 1"
        text="Parking Carrefour"
        link="/account"
      />
      <ClickableImage
        src="./images/img1.jpg"
        alt="Image 2"
        text="Parking Marjane"
        link="/account"
      />
    </div>
  );
}

function ClickableImage(props) {
  return (
    <Link to={props.link}>
      <img src={props.src} alt={props.alt} />
      <p>{props.text}</p>
    </Link>
  );
}

function RegistrationForm() {
  return (
    <div className="container">
      <h1>Pass</h1>
      <h2>Single entry and exit</h2>
      <form className="regisform">
        <label>
          Driver name:
          <input type="text" name="name" />
        </label>
        <label>
          Car model:
          <input type="text" name="model" />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone"/>
        </label>
        <label>
          Vehicle Number:
          <input type="text" name="plaque" />
        </label>
        <button type="Confirm">Confirm</button>
      </form>
    </div>
  );
}

export default Book;

