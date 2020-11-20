import React from "react";
import { Link } from "react-router-dom";

export default function Lash() {
  return (
    <div>
      <section class="service">
        <div className="services">
          <h4>Classic</h4>
          <p>
            A technique in which a single extension is applied to one, isolated
            natural lash.
          </p>
          <Link to={{ pathname: `/pricing` }}>
            <button>Next Step</button>
          </Link>{" "}
        </div>
      </section>
    </div>
  );
}
