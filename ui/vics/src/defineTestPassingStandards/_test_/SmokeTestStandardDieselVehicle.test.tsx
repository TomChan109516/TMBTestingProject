import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SmokeTestStandardDieselVehicle from "../SmokeTestStandardDieselVehicle";

describe("SmokeTestStandardDieselVehicle", () => {
  test("renders input fields", () => {
    const { getByTestId } = render(<SmokeTestStandardDieselVehicle />);

    const maxFATTestInput = getByTestId("Max number of FAT Test");
    expect(maxFATTestInput).toBeInTheDocument();

    const consecutivePassesInput = getByTestId("Consecutive passes required");
    expect(consecutivePassesInput).toBeInTheDocument();

    const smokeLevelInput = getByTestId("Smoke Level not greater than");
    expect(smokeLevelInput).toBeInTheDocument();

    const maxRPMUsedInput = getByTestId("% of Max RPM Used");
    expect(maxRPMUsedInput).toBeInTheDocument();
  });

  test("renders save and cancel buttons", () => {
    const { getByText } = render(<SmokeTestStandardDieselVehicle />);
    const saveButton = getByText("Save");
    expect(saveButton).toBeInTheDocument();
    const cancelButton = getByText("Cancel");
    expect(cancelButton).toBeInTheDocument();
  });

  test("clicking save button triggers save action", () => {
    const { getByText } = render(<SmokeTestStandardDieselVehicle />);
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
  });

  test("clicking cancel button triggers cancel action", () => {
    const { getByText } = render(<SmokeTestStandardDieselVehicle />);
    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);
  });
});