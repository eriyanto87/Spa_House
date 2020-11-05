import React from "react";

export default function Contact() {
  return (
    <div>
      <section>
        <h3>Contact Us</h3>
        <form class="signup-form">
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
            />
          </div>
          <div>
            <textarea
              placeholder="Enter Your Message Here"
              type="message"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button type="submit">SEND</button>
        </form>
      </section>
    </div>
  );
}
