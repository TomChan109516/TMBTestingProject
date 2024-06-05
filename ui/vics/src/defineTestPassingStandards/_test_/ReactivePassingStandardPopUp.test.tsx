import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactivePassingStandardPopUp from "../ReactivePassingStandardPopUp";

describe("ReactivePassingStandardPopUp", () => {
  test("renders correctly", () => {
    const setIsReactivatePassingStandard = jest.fn();
    const { getByText } = render(
      <ReactivePassingStandardPopUp
        setIsReactivatePassingStandard={setIsReactivatePassingStandard}
      />
    );

    expect(getByText("Reactive Passing Standard")).toBeInTheDocument();
    expect(getByText("Do you confirm to reactivate this Passing Standard")).toBeInTheDocument();
    expect(getByText("ID:")).toBeInTheDocument();
  });

  test("calls setIsReactivatePassingStandard with false when 'No' button is clicked", () => {
    const setIsReactivatePassingStandard = jest.fn();
    const { getByText } = render(
      <ReactivePassingStandardPopUp
        setIsReactivatePassingStandard={setIsReactivatePassingStandard}
      />
    );

    const noButton = getByText("No");
    fireEvent.click(noButton);

    expect(setIsReactivatePassingStandard).toHaveBeenCalledWith(false);
  });

  // Add more tests for other functionality if needed
});
