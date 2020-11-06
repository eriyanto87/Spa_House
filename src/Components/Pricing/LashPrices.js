import React from "react";
import { Link } from "react-router-dom";

export default function LashPrices() {
  return (
    <div>
      <section>
        <h3>Lash Prices</h3>
        <h3>Classic </h3>
        <h4>Fullset: $99 (100 pcs and up)</h4>
        <h4>Refill: $79 (80 pcs and under)</h4>
        <p>*Has to be within 3 weeks of your fullset appointment</p>
        <h4>Bottom Lashes: $15</h4>
        <button type="cancel">Cancel</button>{" "}
        <Link to="/cart">
          <button type="submit">Add To Cart</button>
        </Link>
      </section>
    </div>
  );
}
