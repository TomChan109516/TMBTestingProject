import React from "react";
import { render, fireEvent } from "@testing-library/react";
import STSForLPGVehicles from "../STSForLPGVehicles";
describe("STSForLPGVehicles", () => {
  test("renders the component", () => {
    render(<STSForLPGVehicles closePopup={() => { }} />);
  });

  test("handles close popup", () => {
    const closePopupMock = jest.fn();
    const { getByText } = render(
      <STSForLPGVehicles closePopup={closePopupMock} />
    );

    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(closePopupMock).toHaveBeenCalled();
  });
});