import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Context from "../Context/Context";
import Schedule from "./Schedule";

describe("Schedule component", () => {
  const contextValues = {
    setDisplayDate: () => {},
    setDisplayTime: () => {},
    setDatabaseDate: () => {},
    addUser: () => {},
  };

  it("Schedule Snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Context.Provider value={contextValues}>
            <Schedule />
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
          <Schedule />
        </Context.Provider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
