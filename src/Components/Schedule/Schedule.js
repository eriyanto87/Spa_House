import React from "react";
import Context from "../Context/Context";

function Schedule(props) {
  const goBack = () => props.history.goBack();

  const milToStandard = (value) => {
    if (value !== null && value !== undefined) {
      //If value is passed in
      if (value.indexOf("AM") > -1 || value.indexOf("PM") > -1) {
        //If time is already in standard time then don't format.
        return value;
      } else {
        if (value.length == 8) {
          //If value is the expected length for military time then process to standard time.
          var hour = value.substring(0, 2); //Extract hour
          var minutes = value.substring(3, 5); //Extract minutes
          var identifier = "AM"; //Initialize AM PM identifier

          if (hour == 12) {
            //If hour is 12 then should set AM PM identifier to PM
            identifier = "PM";
          }
          if (hour == 0) {
            //If hour is 0 then set to 12 for standard time 12 AM
            hour = 12;
          }
          if (hour > 12) {
            //If hour is greater than 12 then convert to standard 12 hour format and set the AM PM identifier to PM
            hour = hour - 12;
            identifier = "PM";
          }
          return hour + ":" + minutes + " " + identifier; //Return the constructed standard time
        } else {
          //If value is not the expected length than just return the value as is
          return value;
        }
      }
    }
  };

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
