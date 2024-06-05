import React from "react";
import { render, screen } from "@testing-library/react";
import SealManagement from "./SealManagement";

describe("SealManagement", () => {
    test("renders the component", () => {
        render(<SealManagement />);
        
        // Assert that the component is rendered
        expect(screen.getByText("Need inspection:")).toBeInTheDocument();
        expect(screen.getByText("Submitted:")).toBeInTheDocument();
        expect(screen.getByText("Vel.Reg.Mark.Barcode")).toBeInTheDocument();
        expect(screen.getByText("Past Seal records")).toBeInTheDocument();
        expect(screen.getByText("New Seal Assign")).toBeInTheDocument();
        expect(screen.getByText("Upload data to computer")).toBeInTheDocument();
        expect(screen.getByText("Download data to HTT")).toBeInTheDocument();
        expect(screen.getByText("Submit")).toBeInTheDocument();
    });
});
