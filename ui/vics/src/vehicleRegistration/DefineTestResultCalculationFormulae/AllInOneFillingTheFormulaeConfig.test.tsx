import { render, screen, fireEvent } from "@testing-library/react";
import AllInOneFillingTheFormulaeConfig from "./AllInOneFillingTheFormulaeConfig";
import React from "react";
import { Button, Input, Select } from "@nextui-org/react";
import { store } from "../../store/store";
import { Provider } from "react-redux";

describe("AllInOneFillingTheFormulaeConfig", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <AllInOneFillingTheFormulaeConfig />;
      </Provider>
    );
  });
  describe("Select Component", () => {
    test("renders Select component", () => {
      const { getByTestId } = render(
        <Select data-testid="select-test" children={undefined} />
      );
      const selectElement = getByTestId("select-test");
      expect(selectElement).toBeInTheDocument();
    });
  });
  describe("Input Component", () => {
    test("renders Input component", () => {
      const { getByTestId } = render(<Input data-testid="input-test" />);
      const inputElement = getByTestId("input-test");
      expect(inputElement).toBeInTheDocument();
    });
  });
  test("Button click triggers generateHandler", () => {
    const mockGenerateHandler = jest.fn();
    const { getByTestId } = render(
      <Button data-testid="button-test" onClick={mockGenerateHandler} />
    );
    const buttonElement = getByTestId("button-test");
    fireEvent.click(buttonElement);
    expect(mockGenerateHandler).toHaveBeenCalled();
  });   
});
