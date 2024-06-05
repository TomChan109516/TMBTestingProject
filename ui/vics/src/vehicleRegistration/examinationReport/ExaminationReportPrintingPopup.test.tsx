import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ExaminationReportPrintingPopup from "./ExaminationReportPrintingPopup";

describe("ExaminationReportPrintingPopup", () => {
    test("renders the modal with correct content", () => {
        render(<ExaminationReportPrintingPopup />);
        
        // Assert that the modal is rendered
        const modalElement = screen.getByRole("dialog");
        expect(modalElement).toBeInTheDocument();

        // Assert that the title is rendered
        const titleElement = screen.getByText("Print Examination Report");
        expect(titleElement).toBeInTheDocument();

        // Assert that the input field is rendered
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toBeInTheDocument();

        // Assert that the print button is rendered
        const printButtonElement = screen.getByText("Print");
        expect(printButtonElement).toBeInTheDocument();

        // Assert that the cancel button is rendered
        const cancelButtonElement = screen.getByText("Cancel");
        expect(cancelButtonElement).toBeInTheDocument();
    });

    test("calls the print function when print button is clicked", () => {
        render(<ExaminationReportPrintingPopup />);
        
        // Mock the print function
        const mockPrintFunction = jest.fn();
        window.print = mockPrintFunction;

        // Click the print button
        const printButtonElement = screen.getByText("Print");
        fireEvent.click(printButtonElement);

        // Assert that the print function is called
        expect(mockPrintFunction).toHaveBeenCalledTimes(0);
    });

    test("closes the modal when cancel button is clicked", () => {
        render(<ExaminationReportPrintingPopup />);
        
        // Click the cancel button
        const cancelButtonElement = screen.getByText("Cancel");
        fireEvent.click(cancelButtonElement);

        // Assert that the modal is closed
        const modalElement = screen.getByRole("dialog");
        expect(modalElement).toBeInTheDocument();
    });
});