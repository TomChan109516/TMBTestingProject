import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, createStore } from "@reduxjs/toolkit";
import LightingConfigPopup from "../LightingConfigPopup";

describe("LightingConfigPopup", () => {
  let store;

  beforeEach(() => {
    store = createStore(() => ({
      LightingConfig: {
        ht: {
          isAccepted: false,
        },
      },
      login: {
        userID: "",
      },
      data: {
        regdata: {},
      },
    }));
  });

  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <LightingConfigPopup />
      </Provider>
    );
  });

  it("handles save button click", async () => {
    const { getByText } = render(
      <Provider store={store}>
        <LightingConfigPopup />
      </Provider>
    );

    fireEvent.click(getByText("Save"));
    expect(getByText("Save")).toBeInTheDocument();
  });
});
