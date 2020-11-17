import React from "react";
import { Link } from "react-router-dom";
import Context from "../Context/Context";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Confirmation() {
  return (
    <Context.Consumer>
      {(context) => {
        const latestUserIndex = context.users.length - 1;
        return (
          <div>
            <Nav />
            <section>
              <h3> {context.users[latestUserIndex].user_name}, </h3>
              <p>
                Your appoinment is set at {context.displayTime} on{" "}
                {context.displayDate}
              </p>
            </section>
            <Footer />
          </div>
        );
      }}
    </Context.Consumer>
  );
}
