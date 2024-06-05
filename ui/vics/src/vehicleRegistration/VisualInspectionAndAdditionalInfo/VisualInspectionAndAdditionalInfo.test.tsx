import React from "react"
import { render, screen, fireEvent } from "@testing-library/react";
import VisualInspectionAndAdditionalInfo from "./VisualInspectionAndAdditionalInfo";
describe("VisualInspectionAndAdditionalInfo", () => {
  test("renders modal with correct content", () => {
    render(<VisualInspectionAndAdditionalInfo setIsVisualInspectionAndAdditionalInfo={() => {}} />);
    const modalElement = screen.getByRole("dialog");
    expect(modalElement).toBeInTheDocument();
    const headingElement = screen.getByText("Other Checklist");
    expect(headingElement).toBeInTheDocument();
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });
  test("calls setIsVisualInspectionAndAdditionalInfo when Quit button is clicked", () => {
    const setIsVisualInspectionAndAdditionalInfoMock = jest.fn();
    render(<VisualInspectionAndAdditionalInfo setIsVisualInspectionAndAdditionalInfo={setIsVisualInspectionAndAdditionalInfoMock} />);
    const quitButton = screen.getByText("Quit");
    fireEvent.click(quitButton);
    expect(setIsVisualInspectionAndAdditionalInfoMock).toHaveBeenCalledWith(false);
  });
});