import { render, fireEvent } from "@testing-library/react";
import MPVVehicleExaminarion from "../MPVVehicleExamination";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Checkbox, Button } from "@nextui-org/react";
import { store } from "../../../../store/store";

describe("MPVVehicleExmination", () => {
  test("renders the component", () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MPVVehicleExaminarion />
        </Provider>
      </BrowserRouter>
    );
    expect(getByText("Vehicle Class")).toBeInTheDocument();
    expect(getByText("Sub Class")).toBeInTheDocument();
  });
  test("searches for appointment", () => {
    const search = jest.fn();
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <MPVVehicleExaminarion />
        </Provider>
      </BrowserRouter>
    );
    const chassisNoElement = getByTestId("chassisno");
    fireEvent.change(chassisNoElement, {
      target: { value: "1234567890" },
    });
    const floatNameElement = getByTestId("floatname");
    fireEvent.change(floatNameElement, {
      target: { value: "Master" },
    });
  });
  describe("Checkbox Component", () => {
    test("renders Checkbox component", () => {
      const { getByTestId } = render(<Checkbox data-testid="checkbox-test" />);
      const checkboxElement = getByTestId("checkbox-test");
      expect(checkboxElement).toBeInTheDocument();
    });
  });

  describe("Button Component", () => {
    test("renders Button component", () => {
      const { getByTestId } = render(<Button data-testid="cancelButton" />);
      const buttonElement = getByTestId("cancelButton");
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
