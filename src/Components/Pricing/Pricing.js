import React from "react";
import Context from "../Context/Context";

export default function MassagePrices(props) {
  const goBack = () => props.history.goBack();

  const onSubmit = (e) => {
    e.preventDefault();
    props.history.push("/schedule");
  };

  const getTreatmentId = (e, context) => {
    const treatmentId = e.target.id;
    console.log(treatmentId);
    context.setTreatment(treatmentId);
    console.log(context.treatment);
  };

  return (
    <Context.Consumer>
      {(context) => {
        console.log(context);
        console.log(context.treatment);
        return (
          <div>
            <section>
              <h3>Massage Pricing</h3>
              <form
                className="pricing"
                onSubmit={onSubmit}
                onChange={(e) => getTreatmentId(e, context)}
              >
                {context.treatments.map((t, i) => (
                  <p key={i} className="price">
                    <input type="radio" id={t.id} name="price" />
                    <label>
                      {t.display_name}: ${t.price}
                    </label>
                  </p>
                ))}
                <button onClick={goBack} type="cancel">
                  Back
                </button>{" "}
                <button type="submit">Schedule</button>
              </form>
            </section>
          </div>
        );
      }}
    </Context.Consumer>
  );
}
