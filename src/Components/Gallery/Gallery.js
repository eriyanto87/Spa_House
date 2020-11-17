import React from "react";
import img1 from "../../images/massage-sushi3.jpg";
import img2 from "../../images/home-massage-3.png";
import img3 from "../../images/home-massage-dtla.png";
import img4 from "../../images/massage-mothersday2.jpg";
import img5 from "../../images/massage-office.jpg";
import img6 from "../../images/massage-sushi2.jpg";
import img7 from "../../images/home-massage2.png";
import img8 from "../../images/home-massageedit.png";
import img9 from "../../images/sushi-bday.png";
import img10 from "../../images/massage-sushi1.jpg";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Gallery() {
  return (
    <div className="gallery">
      <Nav />
      <Header />
      <img src={img1} alt="chair massage at a dog birthday party" />
      <img src={img2} alt="massage at home" />
      <img src={img3} alt="massage with dtla view" />
      <img src={img4} alt="chair massage for a mother's day gift" />
      <img src={img5} alt="chair massage at an office" />
      <img src={img6} alt="chair massage at a dog birthday party" />
      <img src={img7} alt="massage at home" />
      <img src={img8} alt="massage at home" />
      <img src={img9} alt="sushi birthday" />
      <img src={img10} alt="massage at sushi birthday" />
      <Footer />
    </div>
  );
}
