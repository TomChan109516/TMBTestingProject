import React from "react";
import { render, screen } from "@testing-library/react";
import ARTUDeletePairingPopup from "../ARTUDeletePairingPopup";

describe("ARTUDeletePairingPopup", () => {
    it("renders the component", () => {
        render(<ARTUDeletePairingPopup />);
        // Add your assertion here
    });

    it("displays the correct heading", () => {
        render(<ARTUDeletePairingPopup />);
        const headingElement = screen.getByText("ARTU Unit Config-Delete Pairing");
        // Add your assertion here
    });

    it("displays the delete confirmation message", () => {
        render(<ARTUDeletePairingPopup />);
        const confirmationElement = screen.getByText("Confirm to delete this VEE pairing");
        // Add your assertion here
    });

    it("renders the lane select component", () => {
        render(<ARTUDeletePairingPopup />);
        const laneSelectElement = screen.getByText("Lane");
        // Add your assertion here
    });

    it("renders the station select component", () => {
        render(<ARTUDeletePairingPopup />);
        const stationSelectElement = screen.getByText("Station");
        // Add your assertion here
    });

    it("renders the keep-alive input component", () => {
        render(<ARTUDeletePairingPopup />);
        const keepAliveInputElement = screen.getByText("Keep-Alive(ms)");
        // Add your assertion here
    });

    it("renders the address input component", () => {
        render(<ARTUDeletePairingPopup />);
        const addressInputElement = screen.getByText("Address");
        // Add your assertion here
    });

    it("renders the port input component", () => {
        render(<ARTUDeletePairingPopup />);
        const portInputElement = screen.getByText("PORT");
        // Add your assertion here
    });

    it("renders the delete button", () => {
        render(<ARTUDeletePairingPopup />);
        const deleteButtonElement = screen.getAllByText("Delete VEE Pairing");
        // Add your assertion here
    });

    it("renders the save button", () => {
        render(<ARTUDeletePairingPopup />);
        const saveButtonElement = screen.getByText("Save");
        // Add your assertion here
    });

    it("renders the cancel button", () => {
        render(<ARTUDeletePairingPopup />);
        const cancelButtonElement = screen.getByText("Cancel");
        // Add your assertion here
    });
});