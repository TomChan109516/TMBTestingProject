import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ExhaustPopup from "./ExhaustPopup";

describe("ExhaustPopup", () => {
  const mockClosePopup = jest.fn();
  const mockExhaustPopup = jest.fn();
  const mockSetExhaustPopup = jest.fn();

  it("renders without crashing", () => {
    const { getByText } = render(
      <ExhaustPopup
        closePopup={mockClosePopup}
        ExhaustPopup={mockExhaustPopup}
        setExhaustPopup={mockSetExhaustPopup}
      />
    );

    expect(getByText("Exhaust Config")).toBeInTheDocument();
  });

  it("calls the close functions when the Quit button is clicked", () => {
    const { getByText } = render(
      <ExhaustPopup
        closePopup={mockClosePopup}
        ExhaustPopup={mockExhaustPopup}
        setExhaustPopup={mockSetExhaustPopup}
      />
    );

    fireEvent.click(getByText("Quit"));

    expect(mockClosePopup).toHaveBeenCalledWith(false);
    expect(mockExhaustPopup).toHaveBeenCalledWith(false);
    expect(mockSetExhaustPopup).toHaveBeenCalledWith(false);
  });
});
