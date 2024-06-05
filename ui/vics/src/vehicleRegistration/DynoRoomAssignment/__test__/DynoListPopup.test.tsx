import React from "react";
import { render, screen } from "@testing-library/react";
import DynoListPopup from "../DynoListPopup";

describe("DynoListPopup", () => {
    test("renders Dyno List heading", () => {
        render(<DynoListPopup />);
        const headingElement = screen.getByText(/Dyno List/i);
        expect(headingElement).toBeInTheDocument();
    });

    test("renders Dyno Workload List button", () => {
        render(<DynoListPopup />);
        const buttonElement = screen.getByText(/Dyno Workload List/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test("renders Dyno Draw List button", () => {
        render(<DynoListPopup />);
        const buttonElement = screen.getByText(/Dyno Draw List/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test("renders table with correct data", () => {
        render(<DynoListPopup />);
        const tableElement = screen.getByRole("table");
        expect(tableElement).toBeInTheDocument();

      
    });

   
});