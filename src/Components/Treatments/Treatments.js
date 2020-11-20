import React from "react";
import Massage from "./Massage";
import Skin from "./Skin";
import Lash from "./Lash";
import Nails from "./Nails";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

export default function Treatments() {
  const [state, setState] = React.useState("massage");

  return (
    <div>
      <Nav />
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
        {state === "massage" && <Massage />}
        {state === "skincare" && <Skin />}
        {state === "nailcare" && <Nails />}
        {state === "lash" && <Lash />}
      </section>
      <Footer />
    </div>
  );
}
