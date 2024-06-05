import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaxiMeterTestStandard from "../TaxiMeterTestStandard";
describe("TaxiMeterTestStandard", () => {
  test("renders correctly", () => {
    const { getByText } = render(<TaxiMeterTestStandard />);
    expect(getByText("Testing Speed")).toBeInTheDocument();
    expect(getByText("Test 1 Acceptance range")).toBeInTheDocument();
    expect(getByText("Test 2 Acceptance range")).toBeInTheDocument();
    expect(getByText("Test 3 Acceptance range")).toBeInTheDocument();
    expect(getByText("Test 4 Acceptance range")).toBeInTheDocument();
  });

  test("handles button click", () => {
    const { getByText } = render(<TaxiMeterTestStandard />);
    const saveButton = getByText("Save");
    const cancelButton = getByText("Cancel");

    fireEvent.click(saveButton);
    fireEvent.click(cancelButton);
  });
});
