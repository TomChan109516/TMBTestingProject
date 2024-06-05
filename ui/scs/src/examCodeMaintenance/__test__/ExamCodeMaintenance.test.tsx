import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  render,
  fireEvent,
} from "@testing-library/react";
import { store } from "../../store/store";
import ExamCodeMaintenance from "../ExamCodeMaintenance";
import { Input, Button, Select } from "@nextui-org/react";

describe("VehicleMergeLinkSearch", () => {
  describe("Input Component", () => {
    test("renders Input component", () => {
      const { getByTestId } = render(<Input data-testid="input-test" />);
      const inputElement = getByTestId("input-test");
      expect(inputElement).toBeInTheDocument();
    });
  });

  test("render Field", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ExamCodeMaintenance />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTestId("Exam Code")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ExamCodeMaintenance />
        </Provider>
      </BrowserRouter>
    );
  });

  it("resets fields when reset button is clicked", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ExamCodeMaintenance />
        </Provider>
      </BrowserRouter>
    );

    const resetButton = getByTestId("resetButton");
    fireEvent.click(resetButton);
    expect(getByTestId("input-test")).toHaveValue("");
  });

  describe("Select Component", () => {
    test("renders Select component", () => {
      const examTypes = [
        { value: "Select.." },
        { value: "Primary" },
        { value: "Supplementary" },
      ];
      const { getByTestId } = render(
        <Select data-testid="select-test" items={examTypes} />
      );
      const selectElement = getByTestId("select-test");
      expect(selectElement).toBeInTheDocument();
      expect(selectElement.value).toBe("");
      fireEvent.change(selectElement, { target: { value: "Primary" } });
      expect(selectElement.value).toBe("Primary");

    });
  });

  describe("Button Component", () => {
    test("renders Button component", () => {
      const { getByTestId } = render(<Button data-testid="button-test" />);
      const buttonElement = getByTestId("button-test");
      expect(buttonElement).toBeInTheDocument();
    });

    test("clicking create new exam code button shows modal", () => {
      const { getByText } = render(
        <BrowserRouter>
          <Provider store={store}>
            <ExamCodeMaintenance />
          </Provider>
        </BrowserRouter>
      );
      const createButton = getByText("Create New Exam Code");
      fireEvent.click(createButton);
      expect(getByText("New Exam Code Details")).toBeInTheDocument();
    });

    test("Button click triggers exportHandler", () => {
      const mockExportHandler = jest.fn();
      const { getByTestId } = render(
        <Button data-testid="button-test" onClick={mockExportHandler} />
      );
      const buttonElement = getByTestId("button-test");
      fireEvent.click(buttonElement);
      expect(mockExportHandler).toHaveBeenCalled();
    });
  });

  test("clicking Create New Exam Code button shows modal", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ExamCodeMaintenance />
        </Provider>
      </BrowserRouter>
    );
    const createButton = getByText("Create New Exam Code");
    fireEvent.click(createButton, "click");
    expect(getByText("Exam Code Information")).toBeInTheDocument(); // Modal title
  });

  test("reset button resets input fields", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ExamCodeMaintenance />
        </Provider>
      </BrowserRouter>
    );

    const resetButton = getByTestId("resetButton");
    const inputElement = getByTestId("input-test");
    fireEvent.change(inputElement, { target: { value: "Test" } });
    fireEvent.click(resetButton);
    expect(inputElement).toHaveValue("");
  });

  test("search button calls search function", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ExamCodeMaintenance />
        </Provider>
      </BrowserRouter>
    );
    const searchButton = getByTestId("button-test");
    fireEvent.click(searchButton);
  });
});
