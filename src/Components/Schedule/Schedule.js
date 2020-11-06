import React from "react";
import { Link } from "react-router-dom";

export default function Schedule() {
  //create a bad route(conflicting times or time isn't available)
  return (
    <div>
      <section>
        <h3>Book Your Appointment!</h3>
        <button type="cancel">Back</button>{" "}
        <Link to="/cart">
          <button type="submit">Add To Cart</button>
        </Link>
      </section>
    </div>
  );
}
