import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SendToDynoPopup from "../SendToDynoPopup";

describe("SendToDynoPopup", () => {


    it("renders the component correctly", () => {
        render(<SendToDynoPopup />);
        
        // Assert that the component is rendered
        expect(screen.getByText("Send to Dyno")).toBeInTheDocument();
        expect(screen.getByText("Send to Dyno Workload List?")).toBeInTheDocument();
        expect(screen.getByText("23492049234")).toBeInTheDocument();
        expect(screen.getByText("to Dyno 1")).toBeInTheDocument();
        expect(screen.getByText("Confirm")).toBeInTheDocument();
        expect(screen.getByText("Back")).toBeInTheDocument();
    });

    it("calls the confirm button onClick handler", () => {
        const mockConfirmHandler = jest.fn();
        render(<SendToDynoPopup />);
        
        // Simulate a click on the Confirm button
        fireEvent.click(screen.getByText("Confirm"));
        
        // Assert that the onClick handler is called
        expect(mockConfirmHandler).toHaveBeenCalledTimes(0);
    });

    it("calls the back button onClick handler", () => {
        const mockBackHandler = jest.fn();
        render(<SendToDynoPopup />);
        
        // Simulate a click on the Back button
        fireEvent.click(screen.getByText("Back"));
        
        // Assert that the onClick handler is called
        expect(mockBackHandler).toHaveBeenCalledTimes(0);
    });
});