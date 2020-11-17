import React from "react";
import img1 from "../../images/massage-sushi1.jpg";
import img2 from "../../images/home-massage-3.png";
import img3 from "../../images/home-massage-dtla.png";
import img4 from "../../images/massage-mothersday2.jpg";
import img5 from "../../images/massage-office.jpg";
import img6 from "../../images/massage-sushi2.jpg";
import img7 from "../../images/home-massage2.png";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Gallery() {
  return (
    <div className="gallery">
      <Nav />
      <Header />
      <img src={img1} alt="massage with dtla view" />
      <img src={img2} alt="massage with dtla view" />
      <img src={img3} alt="massage with dtla view" />
      <img src={img4} alt="massage with dtla view" />
      <img src={img5} alt="massage with dtla view" />
      <img src={img6} alt="massage with dtla view" />
      <img src={img7} alt="massage with dtla view" />
      <Footer />
    </div>
  );
}
