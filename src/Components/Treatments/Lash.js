import React from "react";
import { Link } from "react-router-dom";

export default function Lash() {
  return (
    <div>
      <h3>Lash</h3>
      <div className="services">
        <h4>Classic</h4>
        <p>
          A technique in which a single extension is applied to one, isolated
          natural lash.
        </p>
        <Link to={"/pricing/lash"}>
          <button>Pricing</button>{" "}
        </Link>
        <Link to={{ pathname: "/cart" }}>
          <button>Add To Cart</button>
        </Link>
      </div>
    </div>
  );
}
