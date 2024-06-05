import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Vvmvp from "./Vvmvp";

describe("Vvmvp", () => {
  it("renders correctly", () => {
      render(<Vvmvp />);
    });
   
    it("renders the Add VV button", () => {
      const { getByText } = render(<Vvmvp/>);
      expect(getByText("Add VV")).toBeInTheDocument();
    });
  
    it("renders the Export button", () => {
      const { getByText } = render(<Vvmvp/>);
      expect(getByText("Export")).toBeInTheDocument();
    });

  it("renders the Class header in the table", () => {
    const { getByText } = render(<Vvmvp/>);
    expect(getByText("Class")).toBeInTheDocument();
  });
  
  it("renders the VV. No. header in the table", () => {
    const { getByText } = render(<Vvmvp/>);
    expect(getByText("VV. No.")).toBeInTheDocument();
  });
  
  it("renders the Float Name header in the table", () => {
    const { getByText } = render(<Vvmvp/>);
    expect(getByText("Float Name")).toBeInTheDocument();
  });
  
  it("renders the Chassis No. header in the table", () => {
    const { getByText } = render(<Vvmvp/>);
    expect(getByText("Chassis No.")).toBeInTheDocument();
  });
  
  it("renders the Vehicle Type header in the table", () => {
    const { getByText } = render(<Vvmvp/>);
    expect(getByText("Vehicle Type")).toBeInTheDocument();
  });
  
  it("renders the Make header in the table", () => {
    const { getByText } = render(<Vvmvp/>);
    expect(getByText("Make")).toBeInTheDocument();
  });
  
  it("renders the No Data message in the table", () => {
    const { getByText } = render(<Vvmvp/>);
    expect(getByText("No Data")).toBeInTheDocument();
  });
});