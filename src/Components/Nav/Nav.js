import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">Home </Link>
      {"  "}
      <Link to="/treatments">Scheduling{"&"}Treatments </Link>
      {"  "}
      <Link to="/contact">Contact Us </Link>
    </div>
  );
}
