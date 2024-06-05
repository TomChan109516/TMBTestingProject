import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "@testing-library/jest-dom";
import ExhaustMain from "./ExhaustMain";

describe("ExhaustMain", () => {
  let store;

  beforeEach(() => {
    store = createStore(() => ({
      submissionConfirmation: {
        exhaust: {
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
  test("renders the component", () => {
    render(
      <Provider store={store}>
        <ExhaustMain />
      </Provider>
    );
  });

  test("updates selectedResult state when radio button is clicked", () => {
    render(
      <Provider store={store}>
        <ExhaustMain />
      </Provider>
    );
    const radio = screen.getByLabelText("FAIL");
    fireEvent.click(radio);
  });

  test("updates showSubmitPopup state when Submit button is clicked", () => {
    render(
      <Provider store={store}>
        <ExhaustMain />
      </Provider>
    );
    const submitButton = screen.getByText("Submit");
    fireEvent.click(submitButton);
  });
});
