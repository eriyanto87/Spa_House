import React from "react";
import Context from "../Context/Context";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Cart(props) {
  const goBack = () => props.history.goBack();

  // const onSubmit (get comments)
  //go to confirmation page
  // const comment
  //POST
  const onSubmit = (e, context) => {
    e.preventDefault();
    console.log("cart button works");

    const comments = e.target.comments.value;
    console.log(comments);
    console.log(context.users.length - 1, "latest user");
    const latestUserIndex = context.users.length - 1;

    const cartData = {
      user_id: context.users[latestUserIndex].id,
      treatment_id: context.treatment,
      appointment_date: context.databaseDate,
    };

    console.log(cartData);
    context.addConfirmation(cartData);
    props.history.push("/confirmation");
  };

  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);

        const name = context.treatments.filter(
          (t) => t.id == context.treatment
        );
        return (
          <div>
            <header>
              <Nav />
            </header>

            <section>
              <h3>Cart</h3>
              <form onSubmit={(e) => onSubmit(e, context)}>
                <p className="clientInfo">{name[0].display_name}</p>
                <h4> Your appointment date and time:</h4>
                <p className="clientInfo">
                  {context.displayDate} {context.displayTime}
                </p>
                <div>
                  <p>
                    <label>Comments:</label>
                  </p>
                  <textarea
                    name="comments"
                    placeholder="Is there anything I need to know prior to the service? etc: any injuries? are you pregnant? any skin issues such as skin burn, etc"
                  />
                  <h4>Total:</h4>
                  <h3 className="clientInfo">${name[0].price}</h3>
                </div>
                <hr />
                <button onClick={goBack}>Back</button>{" "}
                <button type="submit">Confirmation</button>
              </form>
            </section>
            <footer>
              <Footer />
            </footer>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
