import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import SddTestStandards from "../SddTestStandards";

describe("SddTestStandards", () => {
  test("renders the input field", () => {
    render(<SddTestStandards />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("calls closePopup function when Save button is clicked", () => {
    const closePopupMock = jest.fn();
    render(<SddTestStandards closePopup={closePopupMock} />);
    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);
    expect(closePopupMock).toHaveBeenCalledWith(false);
  });

  test("calls closePopup function when Cancel button is clicked", () => {
    const closePopupMock = jest.fn();
    render(<SddTestStandards closePopup={closePopupMock} />);
    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(closePopupMock).toHaveBeenCalledWith(false);
  });
});