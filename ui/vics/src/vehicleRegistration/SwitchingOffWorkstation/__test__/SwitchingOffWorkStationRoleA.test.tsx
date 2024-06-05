import { render, screen } from "@testing-library/react";
import SwitchingOffWorkStationRoleA from "../SwitchingOffWorkStationRoleA";
import React from "react";

test("renders SwitchingOffWorkStationRoleA component", () => {
    render(<SwitchingOffWorkStationRoleA />);
    expect(screen.getByText('Loading Status')).toBeInTheDocument();
});

test("renders table with correct number of rows", () => {
    render(<SwitchingOffWorkStationRoleA />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(16);
});

test("renders table with correct number of columns", () => {
    render(<SwitchingOffWorkStationRoleA />);
    const rows = screen.getAllByRole("row");
    const columns = rows[0].querySelectorAll("td");
    expect(columns.length).toBe(0); 
});

