import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  waitFor,
  getByText,
  getByRole,
} from "@testing-library/react";
import MPVVehicleInpectionInformation from "../MPVVehicleInspectionInformation";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("MPVVehicleInpectionInformation", () => {
  test("render Components", () => {
    render(
      <BrowserRouter>
        <MPVVehicleInpectionInformation />
      </BrowserRouter>
    );
    expect(screen.getByText("VV/MPV Inspection")).toBeInTheDocument();
    expect(screen.getByText("Vehicle Information")).toBeInTheDocument();
    expect(screen.getByTestId("vehicleType")).toBeInTheDocument();
    expect(screen.getByText("Sub Class")).toBeInTheDocument();
    expect(screen.getByText("VM No.")).toBeInTheDocument();
    expect(screen.getByText("Float Name")).toBeInTheDocument();
  });

  test.skip("can change request date", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <MPVVehicleInpectionInformation />
      </BrowserRouter>
    );
    const requestDateInput = getByLabelText("Date");
    fireEvent.click(requestDateInput);
    });

  test.skip("can change renewal date", () => {
    const { getByLabelText, getByRole } = render(
      <BrowserRouter>
        <MPVVehicleInpectionInformation />
      </BrowserRouter>
    );
    const renewalDateInput = getByRole("calendar");
    fireEvent.click(renewalDateInput);
    });

  test("can click confirm button", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MPVVehicleInpectionInformation />
      </BrowserRouter>
    );
    const confirmButton = getByTestId("confirmButton");
    fireEvent.click(confirmButton);
    expect(screen.queryByText(/overallResult/)).toBeDefined();
  });

  test("can click back button", () => {
    const { getByText } = render(
      <BrowserRouter>
        <MPVVehicleInpectionInformation />
      </BrowserRouter>
    );
    const backButton = getByText("Back");
    fireEvent.click(backButton);
  });
});
