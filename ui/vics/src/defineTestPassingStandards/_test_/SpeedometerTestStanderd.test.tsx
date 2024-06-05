import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SpeedometerTestStanderd from "../SpeedometerTestStanderd";

describe("SpeedometerTestStanderd", () => {
  test("calls handleClose function when Cancel button is clicked", () => {
    const handleCloseMock = jest.fn();
    const { getByText } = render(
      <SpeedometerTestStanderd handleClose={handleCloseMock} />
    );
    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);
    expect(handleCloseMock).toHaveBeenCalled();
  });

  test("renders error message when error props are provided", () => {
    const errorEffectiveDateMarkUp = <div>Error Effective Date</div>;
    const errorManufacturingDateMarkUp = <div>Error Manufacturing Date</div>;
    const errorFirstRegistrationDateMarkUp = <div>Error First Registration Date</div>;
    const { getByText } = render(
      <SpeedometerTestStanderd
        errorEffectiveDate={errorEffectiveDateMarkUp}
        errorManufacturingDate={errorManufacturingDateMarkUp}
        errorFirstRegistrationDate={errorFirstRegistrationDateMarkUp}
      />
    );
    expect(getByText("Warning The highlighted fields have overlapped with existing active Passing Standard, unable to save current standard. Please amend the date before proceeding.")).toBeInTheDocument();
  });

  test("does not render error message when error props are not provided", () => {
    const { queryByText } = render(<SpeedometerTestStanderd />);
    expect(queryByText("Warning The highlighted fields have overlapped with existing active Passing Standard, unable to save current standard. Please amend the date before proceeding.")).toBeNull();
  });
});