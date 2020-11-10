import React from "react";
import { Link } from "react-router-dom";

export default function Schedule() {
  //create a bad route(conflicting times or time isn't available)
  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("Date:", evt.target.date.value);
    console.log("Time:", evt.target.time.value);
  };
  return (
    <div>
      <section>
        <h3>Book Your Appointment!</h3>
        <form className="datetimecontainer" onSubmit={onSubmit}>
          <p>
            <input
              required
              placeholder="Name is required"
              type="text"
              name="name"
            />
          </p>
          <p>
            <input
              required
              placeholder="Phone number is required"
              type="text"
              name="phone number"
            />
          </p>
          <p>
            <input
              placeholder="Enter your email address here"
              type="text"
              name="email"
            />
          </p>
          <p>
            <label>Schedule a Date: </label>
            <br />
            <input type="date" name="date" />
          </p>
          <p>
            <label>Pick a Time: </label>
            <br />
            <input type="time" name="time" />
          </p>
          <button type="cancel">Back</button>{" "}
          <Link to="/cart">
            <button type="submit">Cart</button>
          </Link>
        </form>
      </section>
    </div>
  );
}
