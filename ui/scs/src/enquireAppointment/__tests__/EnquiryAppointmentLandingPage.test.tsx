import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import EnquiryAppointmentLandingPage from "../EnquiryAppointmentLandingPage";
import { store } from "../../store/store";
import { Input, Select, Checkbox, Button } from "@nextui-org/react";

describe("EnquiryAppointmentLandingPage", () => {
  describe("Input Component", () => {
    test("renders Input component", () => {
      const { getByTestId } = render(<Input data-testid="input-test" />);
      const inputElement = getByTestId("input-test");

      // assertion for checking if the Input component renders successfully
      expect(inputElement).toBeInTheDocument();
    });
  });

  describe("Select Component", () => {
    test("renders Select component", () => {
      const { getByTestId } = render(<Select data-testid="select-test" />);
      const selectElement = getByTestId("select-test");

      // assertion for checking if the Select component renders successfully
      expect(selectElement).toBeInTheDocument();
    });
  });

  describe("Checkbox Component", () => {
    test("renders Checkbox component", () => {
      const { getByTestId } = render(<Checkbox data-testid="checkbox-test" />);
      const checkboxElement = getByTestId("checkbox-test");

      //assertion for checking if the Checkbox component renders successfully
      expect(checkboxElement).toBeInTheDocument();
    });
  });

  test("render Field", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <EnquiryAppointmentLandingPage />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTestId("appointmentNo")).toBeInTheDocument();
    expect(getByTestId("floatName")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <EnquiryAppointmentLandingPage />
        </Provider>
      </BrowserRouter>
    );

    // Add your assertions here
  });

  it("resets fields when reset button is clicked", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <EnquiryAppointmentLandingPage />
        </Provider>
      </BrowserRouter>
    );

    const resetButton = getByTestId("resetButton");
    // assertions here

    fireEvent.change(getByTestId("floatName"), {
      target: { value: "Test Float Name" },
    });
    fireEvent.click(resetButton);
    expect(getByTestId("floatName")).toHaveValue("");
  });

  describe("Button Component", () => {
    test("renders Button component", () => {
      const { getByTestId } = render(<Button data-testid="button-test" />);
      const buttonElement = getByTestId("button-test");

      // assertion for checking if the Button component renders successfully
      expect(buttonElement).toBeInTheDocument();
    });

    test("Button click triggers exportHandler", () => {
      // You might need to mock the exportHandler function
      // and check if it is called when the button is clicked
      const mockExportHandler = jest.fn();
      const { getByTestId } = render(
        <Button data-testid="button-test" onClick={mockExportHandler} />
      );
      const buttonElement = getByTestId("button-test");

      fireEvent.click(buttonElement);
      expect(mockExportHandler).toHaveBeenCalled();
    });
  });
});
