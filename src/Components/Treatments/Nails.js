import React from "react";
import { Link } from "react-router-dom";

export default function Nails() {
  return (
    <div>
      <h3>Nails</h3>
      <div className="services">
        <h4>Manicure</h4>
        <p></p>
        <Link to={{ pathname: `/pricing/massage` }}>
          <button>Next Step</button>
        </Link>{" "}
      </div>
      <div className="services">
        <h4>Pedicure</h4>
        <p></p>
        <Link to={{ pathname: `/pricing/massage` }}>
          <button>Next Step</button>
        </Link>{" "}
      </div>
      <div className="services">
        <h4>Gel Manicure</h4>
        <p></p>
        <Link to={{ pathname: `/pricing/massage` }}>
          <button>Next Step</button>
        </Link>{" "}
      </div>
    </div>
  );
}
