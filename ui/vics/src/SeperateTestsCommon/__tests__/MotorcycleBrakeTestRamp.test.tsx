import React from "react";
import { render } from "@testing-library/react";
import MotorcycleBrakeTestRamp from "../MotorcycleBrakeTestRamp";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("MotorcycleBrakeTestRamp", () => {
  test("renders the component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MotorcycleBrakeTestRamp />
        </Provider>
      </BrowserRouter>
    );
  });
});
