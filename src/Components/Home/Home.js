import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <header>
        <Nav />
      </header>
      <div className="bg-text">SPA HOUSE</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
