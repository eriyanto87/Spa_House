import React from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <section>
        <h3>Cart</h3>
        <p>Service#1</p>
        <div>
          <p>
            <label>Comments:</label>
          </p>
          <textarea placeholder="Is there anything I need to know prior to the service? etc: any injuries? are you pregnant? any skin issues such as skin burn, etc" />
        </div>
        <button>delete</button>
        <hr />
        <button>Back</button>
        <Link to="/confirmation">
          {" "}
          <button type="submit">Confirmation</button>
        </Link>
      </section>
    </div>
  );
}
