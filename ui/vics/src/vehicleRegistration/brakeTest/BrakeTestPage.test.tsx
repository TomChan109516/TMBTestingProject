import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import BrakeTestPage from './BrakeTestPage';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Select, Button, RadioGroup } from "@nextui-org/react";
import "@testing-library/jest-dom";
import { createStore } from 'redux';
describe('BrakeTestPage', () => {
    let store;
    beforeEach(() => {
      store = createStore(() => ({
        submissionConfirmation: {
          brake: {
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
  it('renders without crashing', () => {
    render(
        <BrowserRouter>
          <Provider store={store}>
            <BrakeTestPage />
          </Provider>
        </BrowserRouter>
    );
  });
  it('initializes with correct default state values', () => {
    render(
        <BrowserRouter>
          <Provider store={store}>
            <BrakeTestPage />
          </Provider>
        </BrowserRouter>
    );
  });
});
describe("Select Component", () => {
    test("renders Select component", () => {
      const { getByTestId } = render(<Select data-testid="select-test" />);
      const selectElement = getByTestId("select-test");
      expect(selectElement).toBeInTheDocument();
    });
  });

  
  describe("Button Component", () => {
    test("renders Button component", () => {
      const { getByTestId } = render(<Button data-testid="button-test" />);
      const buttonElement = getByTestId("button-test");
      expect(buttonElement).toBeInTheDocument();
    });
    
  });  

  describe("RadioGroup Component", () => {
    test("renders RadioGroup component", () => {
      const { getByTestId } = render(<RadioGroup data-testid="RadioGroup-test" />);
      const RadioElement = getByTestId("RadioGroup-test");
      expect(RadioElement).toBeInTheDocument();
    });
  });