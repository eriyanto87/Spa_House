import React from "react";
import { Link, useHistory } from "react-router-dom";
import Context from "../Context/Context";
import { API_ENDPOINT } from "../../config";

function Schedule() {
  let history = useHistory();
  const goBack = () => history.goBack();
  //create a bad route(conflicting times or time isn't available)
  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log("Date:", evt.target.date.value);
    console.log("Time:", evt.target.time.value);
  };
  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        return (
          <div>
            <section>
              <h3>{context.abc}Book Your Appointment!</h3>
              <form className="datetimecontainer" onSubmit={onSubmit}>
                <p>
                  <input
                    required
                    placeholder="Name is required"
                    type="text"
                    name="name"
                  />
                </p>
                <p>
                  <input
                    required
                    placeholder="Phone number is required"
                    type="text"
                    name="phone number"
                  />
                </p>
                <p>
                  <input
                    placeholder="Enter your email address here"
                    type="text"
                    name="email"
                  />
                </p>
                <p>
                  <label>Schedule a Date: </label>
                  <br />
                  <input type="date" name="date" />
                </p>
                <p>
                  <label>Pick a Time: </label>
                  <br />
                  <input type="time" name="time" />
                </p>
                <button onClick={goBack} type="cancel">
                  Back
                </button>{" "}
                <Link to="/cart">
                  <button type="submit">Cart</button>
                </Link>
              </form>
            </section>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default Schedule;
