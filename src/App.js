import logo from './logo.svg';
import './App.css';

function App() {
  const handleSignUpClick = () => {
    console.log('Sign up button clicked');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to SmarParking</h1>
        <div className="button-container">
          <button className="button" onClick={handleSignUpClick}>Sign up</button>
          <a href="/signin"><button className="button">Sign in</button></a>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact info:
        </a>
      </header>
    </div>
  );
}

export default App;
