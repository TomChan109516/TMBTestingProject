import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OverallResult from "../OverallResult";

describe("OverallResult", () => {
  test("renders without crashing", () => {
    render(<OverallResult check={false} />);
  });
  test("renders the correct schedule information", () => {
    const { getByText } = render(<OverallResult check={false} />);
    expect(getByText("Schedule Information")).toBeInTheDocument();
    expect(getByText("Appoinment No.")).toBeInTheDocument();
    expect(getByText("Vehicle Class")).toBeInTheDocument();
    expect(getByText("Chassis No.")).toBeInTheDocument();
    expect(getByText("Renewal Date")).toBeInTheDocument();
    expect(getByText("Center(Lane)")).toBeInTheDocument();
    expect(getByText("SubClass")).toBeInTheDocument();
    expect(getByText("Size(L/W/H)")).toBeInTheDocument();
    expect(getByText("Type Size(1/2/3/4/5/6/7)")).toBeInTheDocument();
    expect(getByText("Exam Code")).toBeInTheDocument();
    expect(getByText("Make")).toBeInTheDocument();
    expect(getByText("Seat Capacity")).toBeInTheDocument();
    expect(getByText("Inspection Date")).toBeInTheDocument();
    expect(getByText("Color")).toBeInTheDocument();
    expect(getByText("Float Name")).toBeInTheDocument();
  });
  test("renders the correct text module", () => {
    const { getByText } = render(<OverallResult check={false} />);
    expect(getByText("Text Module")).toBeInTheDocument();
    expect(getByText("Movement Permit Exam")).toBeInTheDocument();
  });
  test.skip("Checkbox changes when clicked", () => {
    const { getByTestId } = render(<OverallResult check={false} />);
    const checkbox = getByTestId("checkboxId");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
  test("render the checkbox", () => {
    const { getByTestId } = render(<OverallResult check={false} />);
    const checkbox = getByTestId("checkboxId");
    fireEvent.click(checkbox);
    expect(checkbox).toBeInTheDocument();
  });
  test("render the select Component", () => {
    const { getByTestId } = render(<OverallResult check={false} />);
    const SelectComponent = getByTestId("centerId");
    fireEvent.click(SelectComponent, { target: { value: "Y" } });
    expect(SelectComponent.value).toBe("Y");
  });
  test("renders the correct result options", () => {
    const { getByText } = render(<OverallResult check={false} />);
    expect(getByText("Result")).toBeInTheDocument();
    expect(getByText("Assign")).toBeInTheDocument();
    expect(getByText("MVE/VT")).toBeInTheDocument();
    expect(getByText("Skip")).toBeInTheDocument();
  });
  test("fires the button click event", () => {
    const { getByText } = render(<OverallResult check={false} />);
    const button = getByText("Cancel");
    fireEvent.click(button);
  });
  test("fires the button click event", () => {
    const { getByText } = render(<OverallResult check={false} />);
    const button = getByText("Complete Inspection");
    fireEvent.click(button);
  });
  test("fires the button click event", () => {
    const { getByText } = render(<OverallResult check={false} />);
    const button = getByText("Attachment");
    fireEvent.click(button);
  });
  test("fires the button click event", () => {
    const { getByText } = render(<OverallResult check={false} />);
    const button = getByText("DNA");
    fireEvent.click(button);
  });
});
