import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import VehicalParticularPopUp from "../VehicalParticularPopUp";
import VehicalParticular from "../VehicalParticular";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("Vehicle Particulars", () => {
  it("renders Correctly", () => {
    render(
      <Provider store={store}>
        <VehicalParticularPopUp />
      </Provider>
    );
  });

  it("renders the fields", () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <VehicalParticularPopUp />
      </Provider>
    );
    waitFor(() => {
      expect(queryByTestId("VehicalParticularPopUpLabelPop")).toBeDefined();
      expect(queryByTestId("VehicalParticularPopUpValuePop")).toBeDefined();
    });
  });
  const { queryByTestId } = render(
    <Provider store={store}>
      <Provider store={store}>
        <VehicalParticular />
      </Provider>
      <Provider store={store}>
        <VehicalParticularPopUp />
      </Provider>
    </Provider>
  );
  waitFor(() => {
    expect(queryByTestId("vehicleParticularsLabel")).toBeDefined();
    expect(queryByTestId("vehicleParticularsValue")).toBeDefined();
    expect(queryByTestId("VehicalParticularPopUpLabelPop")).toBeDefined();
    expect(queryByTestId("VehicalParticularPopUpValuePop")).toBeDefined();
  });
});
