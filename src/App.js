import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Treatments from "./Components/Treatments/Treatments";
import Massage from "./Components/Treatments/Massage";
import MassagePrices from "./Components/Pricing/MassagePrices";
import LashPrices from "./Components/Pricing/LashPrices";
import Schedule from "./Components/Schedule/Schedule";
import Confirmation from "./Components/Confirmation/Confirmation";
import Cart from "./Components/Cart/Cart";

class App extends Component {
  render() {
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
          <Route exact path="/pricing/lash" component={LashPrices} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/confirmation" component={Confirmation} />
          <Route path="/cart" component={Cart} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
