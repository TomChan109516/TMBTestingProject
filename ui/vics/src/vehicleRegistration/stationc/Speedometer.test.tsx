import { render, screen, fireEvent } from "@testing-library/react";
import Speedometer from "./Speedometer";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "@testing-library/jest-dom";
describe("Speedometer", () => {
  let store;

  beforeEach(() => {
    store = createStore(() => ({
      submissionConfirmation: {
        speedometer: {
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

  test("renders Speedometer component", () => {
    render(
      <Provider store={store}>
        <Speedometer />
      </Provider>
    );
    const speedometerElement = screen.getByText(/Testing Speed/i);
    expect(speedometerElement).toBeInTheDocument();
  });

  test("selects radio button", () => {
    render(
      <Provider store={store}>
        <Speedometer />
      </Provider>
    );
    const passRadioButton = screen.getByLabelText(/PASS/i);
    fireEvent.click(passRadioButton);
    expect(passRadioButton.checked).toBe(true);
  });

  test("disables submit button when no radio button is selected", () => {
    render(
      <Provider store={store}>
        <Speedometer />
      </Provider>
    );
    const submitButton = screen.getByTestId("submit");
    expect(submitButton).toBeDisabled();
  });

  test("enables submit button when radio button is selected", () => {
    render(
      <Provider store={store}>
        <Speedometer />
      </Provider>
    );
    const passRadioButton = screen.getByLabelText(/PASS/i);
    fireEvent.click(passRadioButton);
    const submitButton = screen.getByTestId("submit");
    expect(submitButton).toBeEnabled();
  });
});
