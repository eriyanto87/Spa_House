import React from "react-router-dom";
import { Link } from "react-router-dom";

export default function MassagePrices() {
  return (
    <div>
      <section>
        <h3>Massage Pricing</h3>
        <h4>1 hour - $99</h4>
        <h4>1.5 hour - $139</h4>
        <h4>$30+ every half hour</h4>
        <h4>3 hours cap</h4>
        <button type="cancel">Back</button>
        <Link to="/cart">
          <button>Add To Cart</button>
        </Link>
      </section>
    </div>
  );
}
