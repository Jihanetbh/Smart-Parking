import logo from './SP.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to SmartParking</h1>
        <div className="button-container">
        <a href="/signup"><button className="button">Sign up</button></a>     
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
