import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useSelector } from "react-redux";
import '@testing-library/jest-dom';
import AmendVehicleParticulars from "../AmendVehicleParticulars";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("AmendVehicleParticulars", () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue({
      enquiryVehicleInfo: {
        regMark: "",
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the fields", () => {
    const { queryByTestId } = render(<AmendVehicleParticulars />);
    waitFor(() => {
      expect(queryByTestId("amendVPLabel")).toBeInTheDocument();
      expect(queryByTestId("amendVPValue")).toBeInTheDocument();
    });
  });

  it("should handle RegMark Input", () => {
    const { getByTestId } = render(<AmendVehicleParticulars />);
    waitFor(()=>{
      const regMarkInput = getByTestId("regMark") as HTMLInputElement;
      fireEvent.change(regMarkInput, { target: { value: "XYZ123" } });
      expect(regMarkInput.value).toBe("XYZ123");
    
    })
  });

  it("renders vehicle particulars correctly", () => {
    const formatData = {
      "Vehicle Type": "Car",
      Manufacturer: "Toyota",
      Model: "Camry",
      Year: "2022",
      "Reg. Mark": "",
    };

    render(<AmendVehicleParticulars formatData={formatData} />);

    expect(screen.getByText("Vehicle Type")).toBeInTheDocument();
    expect(screen.getByText("Car")).toBeInTheDocument();
    expect(screen.getByText("Manufacturer")).toBeInTheDocument();
    expect(screen.getByText("Toyota")).toBeInTheDocument();
    expect(screen.getByText("Model")).toBeInTheDocument();
    expect(screen.getByText("Camry")).toBeInTheDocument();
    expect(screen.getByText("Year")).toBeInTheDocument();
    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("Reg. Mark")).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });

  // it("renders network error message when vehicleInfo is empty", () => {
  //   const formatData = {
  //     "Vehicle Type": "Car",
  //     "Manufacturer": "Toyota",
  //     "Model": "Camry",
  //     "Year": "2022",
  //     "Reg. Mark": "ABC123",
  //   };

  //   (useSelector as jest.Mock).mockReturnValue({
  //     enquiryVehicleInfo: {},
  //   });

  //   render(<AmendVehicleParticulars formatData={formatData} />);

  //   expect(screen.getByText("Network not reachable")).toBeInTheDocument();
  // });

  // it("renders custom error message when apiErrorMsg is available", () => {
  //   const formatData = {
  //     "Vehicle Type": "Car",
  //     "Manufacturer": "Toyota",
  //     "Model": "Camry",
  //     "Year": "2022",
  //     "Reg. Mark": "ABC123",
  //   };

  //   (useSelector as jest.Mock).mockReturnValue({
  //     enquiryVehicleInfo: {},
  //   });

  //   render(
  //     <AmendVehicleParticulars
  //       formatData={formatData}
  //     />
  //   );

  //   expect(screen.getByText("Custom error message")).toBeInTheDocument();
  // });
});
