import React from "react";
import Context from "../Context/Context";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function MassagePrices(props) {
  const goBack = () => props.history.goBack();

  const onSubmit = (e, context) => {
    e.preventDefault();
    console.log(context.treatment);
    if (context.treatment > 0) {
      props.history.push("/schedule");
    } else {
      context.setError("Please choose a service");
    }
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
        return (
          <div className="pricing">
            <Nav />
            <section className="pricingSection">
              <h3>PRICING</h3>
              <p className="pricingHighlight">{context.error}</p>
              <form
                onSubmit={(e) => onSubmit(e, context)}
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
                        value={context.name}
                        checked={t.id == context.treatment}
                      />
                      {t.display_name}-{" "}
                      <span className="pricingHighlight">${t.price}</span>
                    </label>
                  </p>
                ))}
                <button onClick={goBack} type="cancel">
                  BACK
                </button>{" "}
                <button type="submit">SCHEDULE</button>
              </form>
            </section>
            <Footer />
          </div>
        );
      }}
    </Context.Consumer>
  );
}
