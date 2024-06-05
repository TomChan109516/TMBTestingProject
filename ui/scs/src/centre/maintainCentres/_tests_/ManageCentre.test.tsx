import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ManageCenter from "../ManageCentre";
import UpdateOverallPublicHolidayPopup from "../UpdateOverallPublicHolidayPopup";

describe("ManageCenter", () => {
  it("renders the component", () => {
    const { getByText } = render(<ManageCenter />);
    expect(getByText("Manage Centre")).toBeInTheDocument();
    expect(getByText("Create New Centre")).toBeInTheDocument();
    expect(getByText("Address (ENG)")).toBeInTheDocument();
    expect(getByText("Contact Information #1")).toBeInTheDocument();
    expect(getByText("Contact Information #2")).toBeInTheDocument();
    expect(getByText("Phone No. #1")).toBeInTheDocument();
    expect(getByText("Phone No. #2")).toBeInTheDocument();
    expect(getByText("Fax No.")).toBeInTheDocument();
    expect(getByText("Email Address")).toBeInTheDocument();
    expect(getByText("Operating Hours")).toBeInTheDocument();
    expect(getByText("Start")).toBeInTheDocument();
    expect(getByText("End")).toBeInTheDocument();
    expect(getByText("Active")).toBeInTheDocument();
    expect(getByText("Monday")).toBeInTheDocument();
    expect(getByText("Tuesday")).toBeInTheDocument();
    expect(getByText("Wednesday")).toBeInTheDocument();
    expect(getByText("Thursday")).toBeInTheDocument();
    expect(getByText("Friday")).toBeInTheDocument();
    expect(getByText("Saturday")).toBeInTheDocument();
    expect(getByText("Sunday")).toBeInTheDocument();
    expect(getByText("Update Centre Public Holiday")).toBeInTheDocument();
    expect(getByText("Cancel")).toBeInTheDocument();
    expect(getByText("Save")).toBeInTheDocument();
  });

  it("updates the center state on select change", () => {
    const { getByTestId } = render(<ManageCenter />);
    const selectElement = getByTestId("centreId");
    fireEvent.change(selectElement, { target: { value: "L" } });
    expect(selectElement.value).toBe("L");
  });

  it("opens the upload overall public holiday popup on button click", () => {
    const { getByText } = render(<ManageCenter />);
    const buttonElement = screen.getByText("Update Public Holidays");
    fireEvent.click(buttonElement);
    waitFor(() => {
      render(<UpdateOverallPublicHolidayPopup />);
      expect(
        getByText("Upload Overall Public Holiday Popup")
      ).toBeInTheDocument();
    });
  });
});
