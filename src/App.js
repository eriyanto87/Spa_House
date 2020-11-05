import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Header />
      </header>
      <main>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
