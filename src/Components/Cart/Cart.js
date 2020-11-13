import React from "react";
import Context from "../Context/Context";
import API_ENDPOINT from "../../config";

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

    const cartData = {
      user_id: context.users[0].id,
      treatment_id: context.treatment,
      appointment_date: context.databaseDate,
    };

    console.log(cartData);
    context.addCart(cartData);
    props.history.push("/confirmation");
  };

  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);

        const name = context.treatments.filter(
          (t) => t.id == context.treatment
        );
        console.log(context.treatments);
        console.log(context.treatment);
        console.log(name);

        return (
          <div>
            <section>
              <h3>Cart</h3>
              <form onSubmit={(e) => onSubmit(e, context)}>
                <p>
                  {name[0].display_name} : ${name[0].price}
                </p>
                <p> Your appointment date and time:</p>
                {context.displayDate} {context.displayTime}
                <div>
                  <p>
                    <label>Comments:</label>
                  </p>
                  <textarea
                    name="comments"
                    placeholder="Is there anything I need to know prior to the service? etc: any injuries? are you pregnant? any skin issues such as skin burn, etc"
                  />
                </div>
                <hr />
                <button onClick={goBack}>Back</button>{" "}
                <button type="submit">Confirmation</button>
              </form>
            </section>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
