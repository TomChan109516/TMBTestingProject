import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReactivateReason from "../ReactivateReason";

describe("ReactivateReason", () => {
  it("should render the modal with the correct content", () => {
    render(<ReactivateReason setIsReactivateReason={() => {}} />);
    
    expect(screen.getByText("Reactivate User Role")).toBeInTheDocument();

    expect(
      screen.getByText("Do you confirm to Reactivate this Skip Test Reason?")
    ).toBeInTheDocument();

    expect(screen.getByText("Code:")).toHaveTextContent("555");

    expect(screen.getByText("Yes")).toBeInTheDocument();

    expect(screen.getByText("No")).toBeInTheDocument();
  });

  it("should call setIsReactivateReason with false when the modal is closed", () => {
    const setIsReactivateReason = jest.fn();
    render(<ReactivateReason setIsReactivateReason={setIsReactivateReason} />);
    fireEvent.click(screen.getByTestId("close-button"));
    expect(setIsReactivateReason).toHaveBeenCalledWith(false);
  });
});