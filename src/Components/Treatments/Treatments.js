import React from "react";
import Massage from "./Massage";
import Skin from "./Skin";
import Lash from "./Lash";
import Nails from "./Nails";

export default function Treatments() {
  //onchange
  //default value
  //context
  const [state, setState] = React.useState("massage");

  return (
    <div>
      <section>
        <h3>Treatments</h3>
        <select
          onChange={(e) => {
            setState(e.target.value);
          }}
          name="treatments"
          id="treatment"
        >
          <option value="massage">Massage</option>
          <option value="skincare">Skin Care</option>
          <option value="nailcare">Nail Care</option>
          <option value="lash">Eyelash Extensions</option>
        </select>
        {/* <Link to="/treatments/massage">
          <button>Massage</button>{" "}
        </Link>
        <button>Skin Care</button> <button>Nail Care</button>{" "}
        <button>Lash Extensions</button>{" "} */}
      </section>
      <hr />
      <section>
        {state === "massage" && <Massage />}
        {state === "skincare" && <Skin />}
        {state === "nailcare" && <Nails />}
        {state === "lash" && <Lash />}
      </section>
    </div>
  );
}
