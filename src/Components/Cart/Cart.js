import React from "react";
import Context from "../Context/Context";
import API_ENDPOINT from "../../config";

export default function Cart(props) {
  const goBack = () => props.history.goBack();

  // const onSubmit (get comments)
  // const comment
  //POST

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
              <p>
                {name[0].display_name} : ${name[0].price}
              </p>
              <p> Your appointment date and time:</p>
              {context.displayDate} {context.displayTime}
              <div>
                <p>
                  <label>Comments:</label>
                </p>
                <textarea placeholder="Is there anything I need to know prior to the service? etc: any injuries? are you pregnant? any skin issues such as skin burn, etc" />
              </div>
              <hr />
              <button onClick={goBack}>Back</button>{" "}
              <button type="submit">Confirmation</button>
            </section>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
