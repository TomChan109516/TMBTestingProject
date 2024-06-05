import { fireEvent, render, screen } from "@testing-library/react";
import AddTestReason from "../ExaminationReport/AddTestReason";
import React from "react";

test("renders AddTestReason component", () => {
  render(<AddTestReason showAddTestReason={true} closeAddTestReason={() => {}} />);
  const componentElement = screen.getByText(/Add Abort\/Suspend Test Reason/i);
  expect(componentElement).toBeInTheDocument();
});

test("calls closeAddTestReason function when Cancel button is clicked", () => {
  const closeAddTestReason = jest.fn();
  render(<AddTestReason showAddTestReason={true} closeAddTestReason={closeAddTestReason} />);
  const cancelButtonElement = screen.getByText(/Cancel/i);
  fireEvent.click(cancelButtonElement);
  expect(closeAddTestReason).toHaveBeenCalledTimes(1);
});

