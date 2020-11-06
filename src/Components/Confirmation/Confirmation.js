import React from "react";
import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <div>
      <section>
        <h3>Your Appointment is confirmed!</h3>
        <p>placeholder</p>
        <h3>How To Prep For Your Appointment</h3>
        <h4>Massage</h4>
        <h4>Lash</h4>
        <h4>Nails</h4>
        <h4>Skin</h4>
        <Link to="/">
          <h3>Home</h3>
        </Link>
      </section>
    </div>
  );
}
