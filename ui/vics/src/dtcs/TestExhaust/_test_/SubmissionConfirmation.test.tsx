import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SubmissionConfirmation from "../SubmissionConfirmation";
describe("SubmissionConfirmation", () => {
  it("renders without crashing", () => {
    render(<SubmissionConfirmation closeSubmissionConfirmationt={jest.fn()} />);
  });

  it("renders the correct header", () => {
    render(<SubmissionConfirmation closeSubmissionConfirmationt={jest.fn()} />);
    expect(screen.getByText("Close Lane")).toBeInTheDocument();
  });

  it('renders the "Confirm" and "No" buttons', () => {
    render(<SubmissionConfirmation closeSubmissionConfirmationt={jest.fn()} />);
    expect(screen.getByText("Confirm")).toBeInTheDocument();
    expect(screen.getByText("No")).toBeInTheDocument();
  });

  it('calls closeSubmissionConfirmationt with false when "No" button is clicked', () => {
    const closeSubmissionConfirmationt = jest.fn();
    render(
      <SubmissionConfirmation
        closeSubmissionConfirmationt={closeSubmissionConfirmationt}
      />
    );

    fireEvent.click(screen.getByText("No"));
    expect(closeSubmissionConfirmationt).toHaveBeenCalledWith(false);
  });

  // Add more tests as needed...
});
