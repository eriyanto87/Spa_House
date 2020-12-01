import React, { useState } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Contact() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/mvovqrnk",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch((r) => {
        handleServerResponse(false, "Please fill out all fields", form);
      });
  };
  return (
    <div className="contact">
      <Nav />
      <section className="contactSection">
        <h3>Contact Us</h3>
        <form className="signup-form" onSubmit={handleOnSubmit}>
          <div>
            <input
              placeholder="First Name"
              type="text"
              name="first-name"
              id="first-name"
            />
          </div>
          <div>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              placeholder="Email"
              type="text"
              name="username"
              id="username"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Enter Your Message Here"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button type="submit" disabled={serverState.submitting}>
            SEND
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </section>
      <Footer />
    </div>
  );
}
