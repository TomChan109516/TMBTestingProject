import React from "react";
import { render, screen } from "@testing-library/react";
import NewSealAssignTable from "./NewSealAssignTable";

describe("NewSealAssignTable", () => {
    test("renders table with correct data", () => {
        render(<NewSealAssignTable />);
        
        // Assert that the table is rendered
        const tableElement = screen.getByRole("table");
        expect(tableElement).toBeInTheDocument();

        // Assert that the table contains the correct number of rows
        const tableRows = screen.getAllByRole("row");
        expect(tableRows.length).toBe(4); // Including the header row

        // Assert that the table contains the correct data
        const sealNumberCells = screen.getAllByText("BB092384");
        expect(sealNumberCells.length).toBe(3);

        const stationCells = screen.getAllByText("C");
        expect(stationCells.length).toBe(3);

        const sealPositionCells = screen.getAllByText(/SSD|SPOIL/);
        expect(sealPositionCells.length).toBe(6);
    });

    // Add more test cases as needed...
});
