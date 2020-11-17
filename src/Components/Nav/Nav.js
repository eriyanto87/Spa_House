import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
        <li>
          <Link to="/treatments">Treatments </Link>
        </li>
        <li>
          <Link to="/pricing">Pricing </Link>
        </li>
        <li>
          <Link to="/contact">Contact Us </Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        {/* <li>
          {" "}
          <Link to="/cart">
            <i className="fas fa-shopping-cart">Cart</i>
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
