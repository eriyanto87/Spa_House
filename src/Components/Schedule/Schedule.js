import React from "react";
import Context from "../Context/Context";
import moment from "moment";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Schedule(props) {
  const goBack = (e, context) => {
    //set treatment back to 0 when the back button is pressed
    context.setTreatment(0);
    props.history.goBack();
  };

  const onSubmit = (evt, context) => {
    evt.preventDefault();

    const name = evt.target.name.value;
    const email = evt.target.email.value;
    const number = evt.target.number.value;

    const street = evt.target.street.value;
    const city = evt.target.city.value;
    const state = evt.target.state.value;
    //changed the zip code to integer
    const zip = Number(evt.target.zip.value);

    const date = evt.target.date.value;
    const time = evt.target.time.value;

    context.setDisplayDate(moment(date).format("LL"));
    context.setDisplayTime(time);

    const dt = new Date(`${date}T${time}`);
    const dts = dt.toISOString();

    //create a bad route(conflicting times or time isn't available)
    for (let i = 0; i < context.confirmations.length; i++) {
      const dtds = dt.toLocaleDateString();
      if (
        new Date(
          context.confirmations[i].appointment_date
        ).toLocaleDateString() == dtds
      ) {
        alert("Date already booked - Please select a different date");
        return;
      }
    }

    //cannot book prior to today
    if (dt <= new Date()) {
      alert("please select a later time");
    } else {
      const userData = {
        user_name: name,
        user_email: email,
        user_number: number,
        user_street: street,
        user_city: city,
        user_state: state,
        user_zip: zip,
      };
      context.setDatabaseDate(dts);
      context.addUser(userData);
      props.history.push("/cart");
    }
  };

  return (
    <Context.Consumer>
      {(context) => {
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
                <button onClick={(e) => goBack(e, context)} type="cancel">
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
