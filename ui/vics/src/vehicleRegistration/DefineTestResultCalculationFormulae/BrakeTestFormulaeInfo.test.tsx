import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import BrakeTestFormulaeInfo from "./BrakeTestFormulaeInfo";

describe("BrakeTestFormulaeInfo", () => {
  it("renders the component correctly", () => {
    render(<BrakeTestFormulaeInfo />);

    expect(screen.getByText("Service Brake")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls the handleClose function when Cancel button is clicked", () => {
    const handleClose = jest.fn();
    render(<BrakeTestFormulaeInfo handleClose={handleClose} />);

    fireEvent.click(screen.getByText("Cancel"));

    expect(handleClose).toHaveBeenCalled();
  });
});
