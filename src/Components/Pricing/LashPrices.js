import React from "react";
import { Link } from "react-router-dom";

export default function LashPrices() {
  return (
    <div>
      <section>
        <h3>Lash Prices</h3>
        <h3>Classic </h3>
        <p>
          <input type="radio" id="fullset" value="79" />{" "}
          <label for="one-hour">Full Set: $99</label>
        </p>
        <input type="radio" id="fill" value="59" />
        <label for="one-hour">Refill: $79</label>
        <br />
        <button type="cancel">Cancel</button>
        <Link to="/schedule">
          <button type="submit">Schedule</button>
        </Link>
      </section>
    </div>
  );
}
