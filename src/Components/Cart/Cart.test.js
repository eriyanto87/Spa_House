import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Context from "../Context/Context";
import Cart from "./Cart";

describe("Cart component", () => {
  const contextValues = {
    users: [
      {
        user_name: "",
      },
    ],
    addConfirmation: () => {},
    treatments: [
      {
        display_name: "",
      },
    ],
    displayTime: "",
    displayDate: "",
  };

  it("Cart Snapshot", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Context.Provider value={contextValues}>
            <Cart />
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
          <Cart />
        </Context.Provider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
