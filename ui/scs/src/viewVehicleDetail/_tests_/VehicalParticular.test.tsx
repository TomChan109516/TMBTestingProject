import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import VehicleParticulars from "../VehicalParticular";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("Vehicle Particulars", () => {
  it("renders Correctly", () => {
    render(
      <Provider store={store}>
        <VehicleParticulars />
      </Provider>
    );
  });

  it("renders the fields", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <VehicleParticulars />
      </Provider>
    );
    waitFor(() => {
      expect(queryByTestId("vehicleParticularsLabel")).toBeDefined();
      expect(queryByTestId("vehicleParticularsValue")).toBeDefined();
    });
  });
});
