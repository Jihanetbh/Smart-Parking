import SP from "./SP.svg";
import "./book.css";
import "./book12.js"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Book() {

   return (
    <Router>
      <div className="book">
        <BookTopBar />      
        <Switch>
          <Route path="/book1">
            <BookASpot />
          </Route>
          <Route path="/book">
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
      <h1>Choose your parking</h1>
      <h2>Other parking lots will be added sooner. Stay tuned!!!</h2>
      <div className="img-container">
        <div>
          <ClickableImage
            src="./carrefourparkimg.jpg"
            alt="Image 1"
            text="Carrefour Parking"
            link="/book1"
          />
        </div>
        <div>
          <ClickableImage 
            src="./marjaneparkimg.jpg"
            alt="Image 2"
            text="Marjane Parking"
            link="/book1"
          />
        </div>
      </div>
    </div>
  );
}

function ClickableImage(props) {
  return (
    <div className="image-container">
      <Link to={props.link}>
        <img className="image-shape"
        src={props.src} 
        alt={props.alt} />
        <div className="text-overlay">
          <p>{props.text}</p>
        </div>
      </Link>
    </div>
  );
}

function BookASpot() {
  return (
    <div>
      <h1>Book a spot</h1>
      <div className="form">
        <form >
          <label>
            Driver's name:
            <input type="text" name="name" />
          </label>
          <label>
            Car Model:
            <input type="text" name="car_model" />
          </label>
          <label>
            Vehicle Number:
            <input type="text" name="veh_num" />
          </label>
          <Link to={"./book12"}>
            <button type="submit">Book</button>
          </Link>
        </form>
      </div>
    </div>
  );
}



export default Book;