import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DisablePassingStandardTASpecificPopUp from "../DisablePassingStandardTASpecificPopUp";

describe("ReactivePassingStandardTaSpecificPopUp", () => {
  test("renders correctly", () => {
    const setIsDisablePassingStandardTASpecificPopUp = jest.fn();
    const { getByText } = render(
      <DisablePassingStandardTASpecificPopUp
        setIsDisablePassingStandardTASpecificPopUp={
          setIsDisablePassingStandardTASpecificPopUp
        }
      />
    );

    expect(getByText("Disable Passing Standard")).toBeInTheDocument();
    expect(getByText("Do you confirm to disable this Disable Passing Standard")).toBeInTheDocument();
    expect(getByText("Yes")).toBeInTheDocument();
    expect(getByText("No")).toBeInTheDocument();
  });

  test("calls setIsReactivePassingStandardTaSpecificPopUp with false when 'No' button is clicked", () => {
    const setIsDisablePassingStandardTASpecificPopUp= jest.fn();
    const { getByText } = render(
      <DisablePassingStandardTASpecificPopUp
        setIsDisablePassingStandardTASpecificPopUp={
          setIsDisablePassingStandardTASpecificPopUp
        }
      />
    );

    const noButton = getByText("No");
    fireEvent.click(noButton);

    expect(setIsDisablePassingStandardTASpecificPopUp).toHaveBeenCalledWith(false);
  });
});