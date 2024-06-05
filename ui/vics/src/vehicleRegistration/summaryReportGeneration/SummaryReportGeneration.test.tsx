import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SummaryReportGeneration from "./SummaryReportGeneration";

describe("SummaryReportGeneration", () => {
  test("renders correctly", () => {
    const { getByText } = render(<SummaryReportGeneration />);
    expect(getByText("Summary Report Generation Enquiry")).toBeInTheDocument();
  });

  test("button is clickable", () => {
    const { getByRole } = render(<SummaryReportGeneration />);
    const button = getByRole("button", { name: "Generate Report" });
    fireEvent.click(button);
    expect(button).toBeEnabled();
  });

  test("searches when Search button is clicked", () => {
    const { getByText } = render(<SummaryReportGeneration />);
    const searchButton = getByText("Search");
    fireEvent.click(searchButton);  
  });
});
