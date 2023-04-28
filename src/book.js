import SP from './SP.svg';
import React from "react";
import "./book.css";


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="book">
        <BookTopBar />      
        <Switch>
          <Route path="/account">
            <RegistrationForm />
          </Route>
          <Route path="/">
            <BookPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function BookTopBar(){
  return(
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
  )
}
function BookPage() {
  return (
    <div>
      <ClickableImage
        src="./carrefourparkimg.jpg"
        alt="Image 1"
        text="Carrefour Parking"
        link="/account"
      />
      <ClickableImage
        src="./marjaneparkimg.jpg"
        alt="Image 2"
        text="Marjane Parking"
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
    <div>
      <h1>Registration Form</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;