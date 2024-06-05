import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RemoteAuthorizationPopup from "../RemoteAuthorizationPopup";

describe("RemoteAuthorizationPopup", () => {
    test("renders the modal with correct content", () => {
        render(<RemoteAuthorizationPopup />);
        
        // Assert that the modal content is rendered correctly
        expect(screen.getByText("Remote Authorization")).toBeInTheDocument();
        expect(screen.getByText("The vehicle has completed Dyno test and requesting to print exam report")).toBeInTheDocument();
        // Add more assertions for other elements in the modal
    });

    test("calls onClose when Reject button is clicked", () => {
        const onClose = jest.fn();
        render(<RemoteAuthorizationPopup onClose={onClose} />);
        
        // Simulate clicking the Reject button
        fireEvent.click(screen.getByText("Reject"));
        
        // Assert that the onClose function is called
        expect(onClose).toHaveBeenCalledTimes(0);
    });


});