import React from "react";
import { render } from "@testing-library/react";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import BrakeTestLane from "../BrakeTestLane";

describe("BrakeTestLane", () => {
  test("renders the component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <BrakeTestLane />
        </Provider>
      </BrowserRouter>
    );
  });
});
