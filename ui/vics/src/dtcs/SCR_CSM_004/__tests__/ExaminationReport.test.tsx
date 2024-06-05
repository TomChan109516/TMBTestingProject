import { render, screen, fireEvent } from "@testing-library/react";
import ExaminationReport from "../ExaminationReport";
import React from "react";

describe("ExaminationReport", () => {
  test("renders submit button", () => {
    render(<ExaminationReport />);
    const submitButton = screen.getByText(/Submit Test Result \/Remote Authorisation/i);
    expect(submitButton).toBeInTheDocument();
  });

  test("opens RSConfirm component on submit button click", () => {
    render(<ExaminationReport />);
    const submitButton = screen.getByText(/Submit Test Result \/Remote Authorisation/i);
    fireEvent.click(submitButton);
    const rsConfirmComponent = screen.getByTestId("rs-confirm");
    expect(rsConfirmComponent).toBeInTheDocument();
  });

  // Add more tests for other functionality as needed
  describe("ExaminationReport", () => {
  test("renders submit button", () => {
    render(<ExaminationReport />);
    const submitButton = screen.getByText(/Submit Test Result \/Remote Authorisation/i);
    expect(submitButton).toBeInTheDocument();
  });

  test("opens RSConfirm component on submit button click", () => {
    render(<ExaminationReport />);
    const submitButton = screen.getByText(/Submit Test Result \/Remote Authorisation/i);
    fireEvent.click(submitButton);
    const rsConfirmComponent = screen.getByTestId("rs-confirm");
    expect(rsConfirmComponent).toBeInTheDocument();
  });
});
});