import { render, screen, fireEvent } from "@testing-library/react";
import SpeedConfigPopUp from "../SpeedConfigPopUp";
import React from "react";

describe("SpeedConfigPopUp", () => {
  test("renders Speed Config modal", () => {
    render(<SpeedConfigPopUp />);

    expect(screen.getByText("Speed Config")).toBeInTheDocument();
  });

  test("calls closePopup, SpeedPopUp, and setSpeedConfigPopUp when modal is closed", () => {
    const closePopupMock = jest.fn();
    const SpeedPopUpMock = jest.fn();
    const setSpeedConfigPopUpMock = jest.fn();

    render(
      <SpeedConfigPopUp
        closePopup={closePopupMock}
        SpeedPopUp={SpeedPopUpMock}
        setSpeedConfigPopUp={setSpeedConfigPopUpMock}
      />
    );

    fireEvent.click(screen.getByText("Quit"));

    expect(closePopupMock).toBeCalledWith(false);
    expect(SpeedPopUpMock).toBeCalledWith(false);
    expect(setSpeedConfigPopUpMock).toBeCalledWith(false);
  });

  test("allows user to input speed setting", () => {
    render(<SpeedConfigPopUp />);

    fireEvent.change(screen.getByPlaceholderText("50"), {
      target: { value: "60" },
    });

    expect(screen.getByPlaceholderText("50")).toHaveValue("60");
  });
});
