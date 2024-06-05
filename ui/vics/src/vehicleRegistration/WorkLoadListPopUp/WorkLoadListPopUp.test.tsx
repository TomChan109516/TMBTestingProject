import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WorkLoadListPopUp from "./WorkLoadListPopUp";

describe("WorkLoadListPopUp", () => {
  it("renders correctly", () => {
    render(<WorkLoadListPopUp />);
    expect(screen.getByText("Workload List")).toBeInTheDocument();
    expect(screen.getByText("231020151942")).toBeInTheDocument();
  });
  it("calls closeWorkLoadListPopUp when Cancel button is clicked", () => {
    const closeWorkLoadListPopUp = jest.fn();
    render(<WorkLoadListPopUp closeWorkLoadListPopUp={closeWorkLoadListPopUp} />);
    fireEvent.click(screen.getByText("Cancel"));
    expect(closeWorkLoadListPopUp).toHaveBeenCalled();
  });
});