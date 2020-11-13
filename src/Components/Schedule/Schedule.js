import React from "react";
import Context from "../Context/Context";

function Schedule(props) {
  const goBack = () => props.history.goBack();

  //create a bad route(conflicting times or time isn't available)
  const onSubmit = (evt, context) => {
    evt.preventDefault();
    console.log("submit button works");
    console.log("Date:", evt.target.date.value);
    console.log("Time:", evt.target.time.value);
    console.log("name", evt.target.name.value);
    console.log("email", evt.target.email.value);
    console.log("number", evt.target.number.value);

    const name = evt.target.name.value;
    const email = evt.target.email.value;
    const number = evt.target.number.value;

    const date = evt.target.date.value;
    const time = evt.target.time.value;
    // const myStandardTime = milToStandard(time);

    console.log(date, time);

    context.setDisplayDate(date);
    context.setDisplayTime(time);

    const dt = new Date(`${date}T${time}`);
    const dts = dt.toISOString(); // <== this value is the required format for the SQL table
    console.log(dts);
    context.setDatabaseDate(dts);

    const userData = {
      user_name: name,
      user_email: email,
      user_number: number,
    };
    context.addUser(userData);
    console.log(userData);
    props.history.push("/cart");
  };

  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        console.log(context.date);
        return (
          <div>
            <section>
              <h3>{context.abc}Book Your Appointment!</h3>
              <form
                className="datetimecontainer"
                onSubmit={(evt) => onSubmit(evt, context)}
              >
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
                    name="number"
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
                  <input required type="date" name="date" />
                </p>
                <p>
                  <label>Pick a Time: </label>
                  <br />
                  <input required type="time" name="time" />
                </p>
                <button onClick={goBack} type="cancel">
                  Back
                </button>{" "}
                <button id="cart" type="submit">
                  Cart
                </button>
              </form>
            </section>
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default Schedule;
