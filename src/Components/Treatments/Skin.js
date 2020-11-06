import React from "react";
import { Link } from "react-router-dom";

export default function Skin() {
  return (
    <div>
      <h3>Skin</h3>
      <div className="services">
        <h4>Facials</h4>
        <p></p>
        <button>Pricing</button>{" "}
        <Link to={{ pathname: "/schedule" }}>
          <button>Book</button>
        </Link>
      </div>
      <div className="services">
        <h4>Waxing</h4>
        <p></p>
        <button>Pricing</button>{" "}
        <Link to={{ pathname: "/schedule" }}>
          <button>Book</button>
        </Link>
      </div>
    </div>
  );
}
