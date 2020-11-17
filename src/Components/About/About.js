import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <div className="about">
      <header>
        <Nav />
      </header>
      <section className="aboutSection">
        <h3>About Evi</h3>
        <p>
          I am a Licensed Massage Therapist, Licensed Esthetician and Licensed
          Nail Technician trained and certified in the State of California. I
          was also trained and certified by Suavislash in Hong Kong for Eyelash
          Extensions. My services include Massage, Skin Care, Nail Care and
          Eyelash Extensions. I am currently located in South Pasadena, CA
          providing services at the comfort of your own home or at my home
          studio for a reduced price.
        </p>
        <h3>Spa Services At The Comfort Of Your Own Home</h3>
        <p>
          To provide a space of tranquility, wellness and beauty to carry you
          away from the stress of your daily life.{" "}
        </p>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
