import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OhmtestStandard from "../OhmtestStandard";


describe("OhmtestStandard", () => {
  test("renders input fields for vehicle length, width, and height", () => {
    const { getByTestId } = render(<OhmtestStandard />);

    expect(getByTestId("Vehicle Length not Greater Than")).toBeInTheDocument();
    expect(getByTestId("Vehicle Width not Greater Than")).toBeInTheDocument();
    expect(getByTestId("Vehicle Height not Greater Than")).toBeInTheDocument();
  });

  test("calls closePopup function when 'Save' button is clicked", () => {
    const closePopupMock = jest.fn();
    const { getByText } = render(<OhmtestStandard closePopup={closePopupMock} />);
    const saveButton = getByText("Save");

    fireEvent.click(saveButton);

    expect(closePopupMock).toHaveBeenCalledTimes(1);
    expect(closePopupMock).toHaveBeenCalledWith(false);
  });

  test("calls closePopup function when 'Cancel' button is clicked", () => {
    const closePopupMock = jest.fn();
    const { getByText } = render(<OhmtestStandard closePopup={closePopupMock} />);
    const cancelButton = getByText("Cancel");

    fireEvent.click(cancelButton);

    expect(closePopupMock).toHaveBeenCalledTimes(1);
    expect(closePopupMock).toHaveBeenCalledWith(false);
  });
});