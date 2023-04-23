import React, { useState } from "react";
import "./book.css";

function Book() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [assignedSpot, setAssignedSpot] = useState(null);

  const handleCheckboxChange = (event) => {
    setIsDisabled(event.target.checked);
  };

  const handleSearch = () => {
    // Send a request to the server to get free spots
    const url = "http://localhost:3000/parking-spots";

    fetch(url)
      .then((response) => response.json())
      .then((spots) => {
        const freeSpots = spots.filter((spot) => {
          if (isDisabled && !spot.is_taken && spot.is_disabled) {
            // Only return free disabled spots if isDisabled is checked
            return true;
          } else if (!isDisabled && !spot.is_taken && !spot.is_disabled) {
            // Only return free non-disabled spots if isDisabled is not checked
            return true;
          }
          return false;
        });
        if (freeSpots.length > 0) {
          const randomSpot =
            freeSpots[Math.floor(Math.random() * freeSpots.length)];
          setAssignedSpot(randomSpot.spot_number);
        } else {
          setAssignedSpot(null);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="book">
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
      <div className="form">
        <label>
          <input
            type="checkbox"
            checked={isDisabled}
            onChange={handleCheckboxChange}
          />
          Need a spot for disabled persons
        </label>
        <br></br>
        <button onClick={handleSearch}>Search</button>
        {assignedSpot && (
          <p>The spot {assignedSpot} has been assigned to you.</p>
        )}
      </div>
    </div>
  );
}

export default Book;
