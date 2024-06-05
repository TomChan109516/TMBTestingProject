import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import SearchCentre from "../SearchCentre";
import { store } from "../../../store/store";
import { Input, Select, Checkbox, Button } from "@nextui-org/react";

describe("EnquiryAppointmentLandingPage", () => {
  describe("Select Component", () => {
    test("renders Select component", () => {
      const { getByTestId } = render(<Select data-testid="select-test" />);
      const selectElement = getByTestId("select-test");

      // assertion for checking if the Select component renders successfully
      expect(selectElement).toBeInTheDocument();
    });
  });

  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchCentre />
        </Provider>
      </BrowserRouter>
    );

    // Add your assertions here
  });

  describe("Button Component", () => {
    test("renders Button component", () => {
      const { getByTestId } = render(<Button data-testid="button-test" />);
      const buttonElement = getByTestId("button-test");

      // assertion for checking if the Button component renders successfully
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
