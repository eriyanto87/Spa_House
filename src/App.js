import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Treatments from "./Components/Treatments/Treatments";
import Massage from "./Components/Treatments/Massage";
import Pricing from "./Components/Pricing/Pricing";
import Schedule from "./Components/Schedule/Schedule";
import Confirmation from "./Components/Confirmation/Confirmation";
import Cart from "./Components/Cart/Cart";
import Gallery from "./Components/Gallery/Gallery";
import Context from "./Components/Context/Context";
import { API_ENDPOINT } from "./config";

class App extends Component {
  state = {
    showModal: false,
    users: [],
    confirmations: [],
    treatments: [],
    treatment: 1,
    displayDate: "",
    displayTime: "",
    databaseDate: "",
    setTreatment: (id) => this.setState({ treatment: id }),
    setDatabaseDate: (dts) => this.setState({ databaseDate: dts }),
    setDisplayDate: (date) => this.setState({ displayDate: date }),
    setDisplayTime: (time) => this.setState({ displayTime: time }),
    addUser: (user) => {
      fetch(`${API_ENDPOINT}/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((userData) => {
          this.setState({ users: [...this.state.users, userData] });
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
    addConfirmation: (confirmation) => {
      fetch(`${API_ENDPOINT}/confirmation`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(confirmation),
      })
        .then((res) => res.json())
        .then((confirmationsData) => {
          this.setState({
            confirmations: [...this.state.confirmations, confirmationsData],
          });
        });
    },
    getConfirmation: () => {
      fetch(`${API_ENDPOINT}/confirmation`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            confirmations: [this.state.confirmations, data],
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addTreatments: (treatments) => {
      this.setState({ treatments: [...this.state.treatments, treatments] });
    },
    getTreatment: () => {
      fetch(`${API_ENDPOINT}/treatments`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            treatments: data,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  };

  componentDidMount() {
    this.state.getTreatment();
    this.state.getConfirmation();
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        <div>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/treatments" component={Treatments} />
            <Route exact path="/treatments/massage" component={Massage} />
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/cart" component={Cart} />
            <Route path="/gallery" component={Gallery} />
          </main>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
