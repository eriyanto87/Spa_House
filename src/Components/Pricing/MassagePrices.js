import React from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

export default function MassagePrices() {
  let history = useHistory();
  const goBack = () => history.goBack();
  return (
    <div>
      <section>
        <h3>Massage Pricing</h3>
        <input type="radio" id="60" value="99" />
        <label for="one-hour">60 minutes: $99</label>
        <input type="radio" id="90" value="139" />
        <label for="one-hour">90 minutes: $139</label>
        <br />
        <button onClick={goBack} type="cancel">
          Back
        </button>
        <Link to="/schedule">
          <button>Schedule</button>
        </Link>
      </section>
    </div>
  );
}
