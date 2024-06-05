import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MaintainInspectionTabData from "../MaintainInspectionTabData";

describe("MaintainInspectionTabData", () => {
    test("renders tabs correctly", () => {
        render(<MaintainInspectionTabData />);
        
        const locationTab = screen.getByText("Location");
        const locationDropDownTab = screen.getByText("Location-Drop Down");
        const systemTab = screen.getByText("System");
        const componentTab = screen.getByText("Component");
        const defectsTab = screen.getByText("Defects");

        expect(locationTab).toBeInTheDocument();
        expect(locationDropDownTab).toBeInTheDocument();
        expect(systemTab).toBeInTheDocument();
        expect(componentTab).toBeInTheDocument();
        expect(defectsTab).toBeInTheDocument();
    });

    test("changes selected tab on click", () => {
        render(<MaintainInspectionTabData />);
        
        const locationTab = screen.getByText("Location");
        const locationDropDownTab = screen.getByText("Location-Drop Down");

        fireEvent.click(locationDropDownTab);

        expect(locationTab).toHaveClass("group-data-[selected=true]:bg-green");
        expect(locationDropDownTab).toHaveClass("group-data-[selected=true]:bg-green");
    });

    test("changes selected languages on click", () => {
        render(<MaintainInspectionTabData />);
        
        const engButton = screen.getByText("Eng");
        const chiButton = screen.getByText("Chi");

        fireEvent.click(engButton);
        fireEvent.click(chiButton);

        expect(engButton).toHaveClass("bg-tropicalrainforest");
        expect(chiButton).toHaveClass("bg-tropicalrainforest");
    });
});
