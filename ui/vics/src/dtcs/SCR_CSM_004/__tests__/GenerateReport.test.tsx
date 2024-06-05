import React from "react";
import { render, fireEvent } from "@testing-library/react";
import GenerateReport from "../GenerateReport";

describe("GenerateReport", () => {
  test("renders correctly", () => {
    const { getByText } = render(<GenerateReport />);
    expect(getByText("Report Generation")).toBeInTheDocument();
  });


  test("shows Void Examination Report when Void Examination Report button is clicked", () => {
    const { getByText } = render(<GenerateReport />);
    const voidButton = getByText("Void Examination Report");
    fireEvent.click(voidButton);
    expect(getByText("void Examination Report")).toBeInTheDocument();
  });

  test("closes Void Examination Report when closeVoidExam is called", () => {
    const { getByText, queryByText } = render(<GenerateReport />);
    const voidButton = getByText("Void Examination Report");
    fireEvent.click(voidButton);
    const closeButton = getByText("No");
    fireEvent.click(closeButton);
    expect(queryByText("VoidExam")).toBeNull();
  });


  test("closes Print Report when closePrintReport is called", () => {
    const { getByText, queryByText } = render(<GenerateReport />);
    const printButton = getByText("Print Examination Report");
    fireEvent.click(printButton);
    const closeButton = getByText("Cancel");
    fireEvent.click(closeButton);
    expect(queryByText("PrintReport")).toBeNull();
  });
});