import React from "react";
import Context from "../Context/Context";
import moment from "moment";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Schedule(props) {
  const goBack = () => props.history.goBack();

  //create a bad route(conflicting times or time isn't available)
  const onSubmit = (evt, context) => {
    evt.preventDefault();

    const name = evt.target.name.value;
    const email = evt.target.email.value;
    const number = evt.target.number.value;

    const street = evt.target.street.value;
    const city = evt.target.city.value;
    const state = evt.target.state.value;
    const zip = evt.target.zip.value;

    const date = evt.target.date.value;
    const time = evt.target.time.value;
    const dateTime = { date, time };

    console.log(date, time, dateTime, "this is dateTime");

    context.setDisplayDate(moment(date).format("LL"));
    context.setDisplayTime(time);

    const dt = new Date(`${date}T${time}`);
    const dts = dt.toISOString(); // <== this value is the required format for the SQL table
    console.log(dts);
    context.setDatabaseDate(dts);

    if (dt<= new Date()) {
      alert('please select a later time')
    }
    else {
      const userData = {
        user_name: name,
        user_email: email,
        user_number: number,
        user_street: street,
        user_city: city,
        user_state: state,
        user_zip: zip,
      };
      context.addUser(userData);
      console.log(userData);
      props.history.push("/cart");
    }
  };

  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        console.log(context.date);
        return (
          <div>
            <Nav />
            <section>
              <h3>{context.abc}Book Your Appointment!</h3>
              <form
                className="datetimecontainer"
                onSubmit={(evt) => onSubmit(evt, context)}
              >
                <label>Contact Info</label>
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
                <label>Address: </label>
                <p>
                  Please fill this out if you want us to come to your location
                </p>
                <p>
                  <input type="text" name="street" placeholder="Street" />
                </p>
                <p>
                  <input type="text" name="city" placeholder="City" />
                </p>
                <p>
                  <input type="text" name="state" placeholder="State" />
                </p>
                <p>
                  <input type="number" name="zip" placeholder="Zip" />
                </p>
                <p>
                  <label>Schedule a Date: </label>
                  <br />
                  <input required type="date" name="date" />
                </p>
                <p>
                  <label>Schedule a Time: </label>
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
            <Footer />
          </div>
        );
      }}
    </Context.Consumer>
  );
}

export default Schedule;
