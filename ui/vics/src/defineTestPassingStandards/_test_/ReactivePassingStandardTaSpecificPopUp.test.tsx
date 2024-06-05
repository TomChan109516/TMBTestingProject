import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactivePassingStandardTaSpecificPopUp from "../ReactivePassingStandardTaSpecificPopUp";

describe("ReactivePassingStandardTaSpecificPopUp", () => {
  test("renders correctly", () => {
    const setIsReactivePassingStandardTaSpecificPopUp = jest.fn();
    const { getByText } = render(
      <ReactivePassingStandardTaSpecificPopUp
        setIsReactivePassingStandardTaSpecificPopUp={
          setIsReactivePassingStandardTaSpecificPopUp
        }
      />
    );

    expect(getByText("Reactive Passing Standard")).toBeInTheDocument();
    expect(getByText("Do you confirm to reactivate this Passing Standard")).toBeInTheDocument();
    expect(getByText("Yes")).toBeInTheDocument();
    expect(getByText("No")).toBeInTheDocument();
  });

  test("calls setIsReactivePassingStandardTaSpecificPopUp with false when 'No' button is clicked", () => {
    const setIsReactivePassingStandardTaSpecificPopUp = jest.fn();
    const { getByText } = render(
      <ReactivePassingStandardTaSpecificPopUp
        setIsReactivePassingStandardTaSpecificPopUp={
          setIsReactivePassingStandardTaSpecificPopUp
        }
      />
    );

    const noButton = getByText("No");
    fireEvent.click(noButton);

    expect(setIsReactivePassingStandardTaSpecificPopUp).toHaveBeenCalledWith(false);
  });
});