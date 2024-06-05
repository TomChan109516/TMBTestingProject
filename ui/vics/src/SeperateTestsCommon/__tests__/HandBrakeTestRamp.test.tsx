import React from "react";
import { render } from "@testing-library/react";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import HandBrakeTestRamp from "../HandBrakeTestRamp";

describe("BrakeTestLane", () => {
  test("renders the component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HandBrakeTestRamp />
        </Provider>
      </BrowserRouter>
    );
  });
});
