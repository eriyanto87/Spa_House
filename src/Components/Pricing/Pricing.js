import React from "react";
import Context from "../Context/Context";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

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
          <div className="pricing">
            <Nav />
            <section>
              <h3>Pricing</h3>
              <form
                onSubmit={onSubmit}
                onChange={(e) => getTreatmentId(e, context)}
              >
                {context.treatments.map((t, i) => (
                  <p className="pricingContainer" key={i}>
                    <label>
                      <input
                        className="price"
                        type="radio"
                        id={t.id}
                        name="price"
                      />
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
            <Footer />
          </div>
        );
      }}
    </Context.Consumer>
  );
}
