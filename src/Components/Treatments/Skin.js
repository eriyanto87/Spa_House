import React from "react";
import { Link } from "react-router-dom";

export default function Skin() {
  return (
    <div>
      <section className="service">
        <div className="services">
          <h4>Facials</h4>
          <p>
            {" "}
            Relaxing cleansing process that exfoliates, hydrates, and nourishes
            the skin. Facials are a gentle, relaxing treatment that is perfect
            for the majority of skin types. During the treatment, the face is
            usually steamed, cleaned, and exfoliated.
          </p>
          <Link to={{ pathname: `/pricing` }}>
            <button>Next Step</button>
          </Link>{" "}
        </div>
        <div className="serviceslast">
          <h4>Waxing</h4>
          <p> Available Upon Request. Pricing in currently unavailable.</p>
          <Link to={{ pathname: `/pricing` }}>
            <button>Next Step</button>
          </Link>{" "}
        </div>
      </section>
    </div>
  );
}
