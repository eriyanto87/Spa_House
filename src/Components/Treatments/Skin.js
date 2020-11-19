import React from "react";
import { Link } from "react-router-dom";

export default function Skin() {
  return (
    <div>
      <h3>Skin</h3>
      <div className="services">
        <h4>Facials</h4>
        <p></p>
        <Link to={{ pathname: `/pricing` }}>
          <button>Next Step</button>
        </Link>{" "}
      </div>
      <div className="services">
        <h4>Waxing</h4>
        <p></p>
        <Link to={{ pathname: `/pricing` }}>
          <button>Next Step</button>
        </Link>{" "}
      </div>
    </div>
  );
}
