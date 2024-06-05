import { render, screen, fireEvent } from "@testing-library/react";
import MemoPopup from "../MemoModelPopup";

describe("MemoPopup", () => {
    test("renders the modal", () => {
        render(<MemoPopup />);
        
        // Assert that the modal is rendered
        const modalElement = screen.getByRole("dialog");
        expect(modalElement).toBeInTheDocument();
    });

    test("calls closePopup when Cancel button is clicked", () => {
        const closePopupMock = jest.fn();
        render(<MemoPopup closePopup={closePopupMock} />);
        
        // Find the Cancel button and click it
        const cancelButton = screen.getByTestId("Cancel");
        fireEvent.click(cancelButton);
        
        // Assert that closePopup is called with false
        expect(closePopupMock).toHaveBeenCalledWith(false);
    });

    // Add more test cases for other functionality as needed
});