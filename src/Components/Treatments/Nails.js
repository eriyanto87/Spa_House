import React from "react";
import { Link } from "react-router-dom";

export default function Nails() {
  return (
    <div>
      <section className="service">
        <div className="services">
          <h4>Manicure</h4>
          <p>
            A treatment of the hands involving shaping, removal of the cuticles,
            and softening of the skin and nail polishing.
          </p>
          <Link to={{ pathname: `/pricing` }}>
            <button>Next Step</button>
          </Link>{" "}
        </div>
        <div className="services">
          <h4>Pedicure</h4>
          <p>
            {" "}
            A treatment that includes foot soaking, foot scrubbing with a pumice
            stone or foot file, nail clipping, nail shaping, foot and calf
            massage, moisturizer and nail polishing(optional).
          </p>
          <Link to={{ pathname: `/pricing` }}>
            <button>Next Step</button>
          </Link>{" "}
        </div>
        <div className="serviceslast">
          <h4>Gel Manicure</h4>
          <p>
            A service that uses a gel-based polish and requires a UV or LED
            light to cure the polish and lock it onto your nails. It usually
            last longer than regular nail polish. A gel manicure includes
            everything in a regular manicure
          </p>
          <Link to={{ pathname: `/pricing` }}>
            <button>Next Step</button>
          </Link>{" "}
        </div>
      </section>
    </div>
  );
}
