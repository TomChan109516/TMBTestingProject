import { fireEvent, render, screen } from "@testing-library/react";
import FinalVerificationOfVehicle from "./FinalVerificationOfVehicle";
import React from "react";
import { BrowserRouter } from "react-router-dom";

describe("FinalVerificationOfVehicle", () => {
  it("renders the component", () => {
    render(
      <BrowserRouter>
        <FinalVerificationOfVehicle setIcondown={undefined} />
      </BrowserRouter>
    );
  });

  it("triggers the setIcondown function when IconChevronsUp is clicked", () => {
    const setIcondown = jest.fn();
    render(
      <BrowserRouter>
        <FinalVerificationOfVehicle setIcondown={setIcondown} />
      </BrowserRouter>
    );
    const iconChevronsUp = screen.getByTestId("iconChevronsUp");
    fireEvent.click(iconChevronsUp);
    setIcondown();
    expect(setIcondown).toHaveBeenCalled();
  });
});
