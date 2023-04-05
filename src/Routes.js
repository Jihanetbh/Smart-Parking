import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import SignIn from "./signin";
import SignUp from "./signup";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Account from "./account";
import Book from "./book";

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/account" component={Account} />
      <Route path="/book" component={Book} />
    </Router>
  );
}

export default Routes;
