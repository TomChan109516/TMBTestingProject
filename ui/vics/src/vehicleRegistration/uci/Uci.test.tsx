import { render, screen, fireEvent } from "@testing-library/react";
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import "@testing-library/jest-dom";
import Uci from "./Uci";

describe("Uci Component", () => {

    let store;
 
  beforeEach(() => {
    store = createStore(() => ({
      submissionConfirmation: {
        uci: {
          isAccepted: false
        }
      },
      login:{
        userID: "",
      },
      data:{
        regdata: {},
      }
 
    }));
  });

    test("renders Uci component", () => {
        render(  <Provider store={store}>
            <Uci />
          </Provider>);
        const uciComponent = screen.getByText(/Total no. of fixed axles/i);
        expect(uciComponent).toBeInTheDocument();
    });

    test("clicking on Test Start button changes button name to Retest", () => {
        render(  <Provider store={store}>
            <Uci />
          </Provider>);
        const testStartButton = screen.getByText("Test Start");
        fireEvent.click(testStartButton);
        const retestButton = screen.getByText("Retest");
        expect(retestButton).toBeInTheDocument();
    });

    test("clicking on Submit button without selecting a result should disable the button", () => {
        render(  <Provider store={store}>
            <Uci />
          </Provider>);
        const submitButton = screen.getByText("Submit");
        fireEvent.click(submitButton);
        expect(submitButton).toBeDisabled();
    });


});
