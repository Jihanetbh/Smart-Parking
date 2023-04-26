import React, { useState } from "react";
import "./book.css";

function Book() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [assignedSpot, setAssignedSpot] = useState(null);
  const [bookingStart, setBookingStart] = useState("");
  const [bookingEnd, setBookingEnd] = useState("");
  const [error, setError] = useState("");

  const handleCheckboxChange = (event) => {
    setIsDisabled(event.target.checked);
  };

  const handleSearch = () => {
    if (bookingStart && bookingEnd) {
      // Get the values of the datetime-local inputs
      const bookingStart = document.getElementById("booking-start").value;
      const bookingEnd = document.getElementById("booking-end").value;

      // Check if booking start time is later than booking end time
      if (new Date(bookingStart) > new Date(bookingEnd)) {
        // Set an error message and return without searching for spots
        setError("Booking start time cannot be later than booking end time");
        return;
      }

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
            // Send a POST request to book the selected spot
            const data = {
              spot_number: randomSpot.spot_number,
              booking_start: bookingStart,
              booking_end: bookingEnd,
            };
            fetch("http://localhost:3000/book", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Failed to book spot");
                }
              })
              .catch((error) => console.error(error));
          } else {
            setAssignedSpot(null);
          }
        })
        .catch((error) => console.error(error));
    }
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
        <br />
        <label>
          Booking Start:
          <input
            type="datetime-local"
            id="booking-start"
            name="booking-start"
            value={bookingStart}
            onChange={(e) => setBookingStart(e.target.value)}
          />
        </label>
        <br />
        <label>
          Booking End:
          <input
            type="datetime-local"
            id="booking-end"
            name="booking-end"
            value={bookingEnd}
            onChange={(e) => setBookingEnd(e.target.value)}
          />
        </label>
        {bookingStart > bookingEnd && (
          <p style={{ color: "red" }}>Start date must be before end date.</p>
        )}
        <br />
        <button onClick={handleSearch}>Search</button>
        {assignedSpot && (
          <p>The spot {assignedSpot} has been assigned to you.</p>
        )}
      </div>
    </div>
  );
}

export default Book;
