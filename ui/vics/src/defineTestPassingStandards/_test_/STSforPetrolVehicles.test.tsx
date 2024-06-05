import { render, screen, fireEvent } from "@testing-library/react";

import React from "react";
import STSforPetrolVehicles from "../STSforPetrolVehicles";

describe("STSforPetrolVehicles", () => {
    test("renders the component", () => {
        render(<STSforPetrolVehicles />);

    });

    test("calls closePopup when Save button is clicked", () => {
        const closePopupMock = jest.fn();
        render(<STSforPetrolVehicles closePopup={closePopupMock} />);
        const saveButton = screen.getByText("Save");
        fireEvent.click(saveButton);
        expect(closePopupMock).toHaveBeenCalledWith(false);
    });

    test("calls closePopup when Cancel button is clicked", () => {
        const closePopupMock = jest.fn();
        render(<STSforPetrolVehicles closePopup={closePopupMock} />);
        const cancelButton = screen.getByText("Cancel");
        fireEvent.click(cancelButton);
        expect(closePopupMock).toHaveBeenCalledWith(false);
    });

    // Add more tests for other functionality as needed
});