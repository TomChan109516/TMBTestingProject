import React from "react";
import { render, screen } from "@testing-library/react";
import PastSealRecordTable from "./PastSealRecordTable";

describe("PastSealRecordTable", () => {
    test("renders table with correct data", () => {
        render(<PastSealRecordTable />);
        
        // Assert that the table headers are rendered correctly
        expect(screen.getByText("Seal Number")).toBeInTheDocument();
        expect(screen.getByText("Appointment Date")).toBeInTheDocument();
        expect(screen.getByText("Seal Position")).toBeInTheDocument();
        expect(screen.getByText("Exam Code")).toBeInTheDocument();
        
        // Assert that the table rows are rendered correctly
        expect(screen.getByText("AA00222")).toBeInTheDocument();
       
        expect(screen.getByText("AA00223")).toBeInTheDocument();
        
        expect(screen.getByText("AA00224")).toBeInTheDocument();
    
        expect(screen.getByText("AA00225")).toBeInTheDocument();
       
        expect(screen.getByText("001")).toBeInTheDocument();
    });
});
