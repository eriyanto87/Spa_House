import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Treatments from "./Components/Treatments/Treatments";
import Massage from "./Components/Treatments/Massage";
import MassagePrices from "./Components/Pricing/MassagePrices";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Header />
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/treatments" component={Treatments} />
        <Route exact path="/treatments/massage" component={Massage} />
        <Route exact path="/pricing/massage" component={MassagePrices} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
