import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();
    setError('');

    if (!username) {
      setError('Please enter a username');
      return;
    }

    if (!email) {
      setError('Please enter an email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!password) {
      setError('Please enter a password');
      return;
    }

    if (password.length < 6) {
      setError('Password should be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Handle sign up logic here
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label className="label" htmlFor="username">Username</label>
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">Email</label>
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
          <label className="label" htmlFor="password">Password</label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="input"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign in here</Link></p>
    </div>
  );
}

export default SignUp;
