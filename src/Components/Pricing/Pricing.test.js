import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Context from "../Context/Context";
import Pricing from "./Pricing";

describe("Pricing component", () => {
  const contextValues = {
    setError: () => {},
    setTreatment: () => {},
    getTreatment: () => {},
    treatments: [],
  };

  it("Pricing Snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Context.Provider value={contextValues}>
            <Pricing />
          </Context.Provider>
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <Context.Provider value={contextValues}>
          <Pricing />
        </Context.Provider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
