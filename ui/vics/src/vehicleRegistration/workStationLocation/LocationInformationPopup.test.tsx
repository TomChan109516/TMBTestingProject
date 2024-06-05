import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LocationInformationPopup from "./LocationInformationPopup";

describe("LocationInformationPopup", () => {
  test("renders correctly", () => {
    const { getByText } = render(
      <LocationInformationPopup
        showLocationInformationPopup={true}
        closeLocationInformationPopup={() => {}}
      />
    );
    expect(getByText("Location Information")).toBeInTheDocument();
  });

  test("calls closeLocationInformationPopup when Cancel button is clicked", () => {
    const closeLocationInformationPopup = jest.fn();
    const { getByText } = render(
      <LocationInformationPopup
        showLocationInformationPopup={true}
        closeLocationInformationPopup={closeLocationInformationPopup}
      />
    );
    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(closeLocationInformationPopup).toHaveBeenCalled();
  });
});
