import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

function SignUp() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();

    // Send a POST request to the server to sign up the user
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((response) => {
        if (response.status === 200) {
          // Sign up successful, redirect to home page
          window.location.href = "/home";
        } else {
          // Sign up failed, display error message
          setError("Failed to sign up. Please try again.");
        }
      })
      .catch((error) => {
        // Error occurred while sending request, display error message
        setError("An error occurred while signing up");
      });
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/signin">Sign in here</Link>
      </p>
      <Link to="/signin">
        <button className="button">Sign in</button>
      </Link>
    </div>
  );
}

export default SignUp;
