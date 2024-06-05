import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddModifyDefectPopup from "../AddModifyDefectPopup";

describe("AddModifyDefectPopup", () => {
    test("renders the component", () => {
        render(<AddModifyDefectPopup />);
        // Add your assertions here
    });

    test("displays the correct title", () => {
        render(<AddModifyDefectPopup />);
        const titleElement = screen.getByText("Add/Modify Defect - Location code");
        expect(titleElement).toBeInTheDocument();
    });

    test("renders the input fields", () => {
        render(<AddModifyDefectPopup />);
        const locationIdInput = screen.getByPlaceholderText("011");
        const locationNameEnTextarea = screen.getByPlaceholderText("NEARSIDE MIDDLE(LOWER)");
        const locationNameChTextarea = screen.getByPlaceholderText("CHINESE TEXT");

        expect(locationIdInput).toBeInTheDocument();
        expect(locationNameEnTextarea).toBeInTheDocument();
        expect(locationNameChTextarea).toBeInTheDocument();
    });

    test("calls the onClose function when Cancel button is clicked", () => {
        const onCloseMock = jest.fn();
        render(<AddModifyDefectPopup onClose={onCloseMock} />);
        const cancelButton = screen.getByText("Cancel");
        fireEvent.click(cancelButton);
        expect(onCloseMock).toHaveBeenCalled();
    });

    // Add more test cases as needed
});
