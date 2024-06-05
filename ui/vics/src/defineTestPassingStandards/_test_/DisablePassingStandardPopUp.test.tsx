import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DisablePassingStandardPopUp from "../DisablePassingStandardPopUp";
describe("DisablePassingStandardPopUp", () => {
    test("renders correctly", () => {
        const setIsDisablePassingStandard = jest.fn();
        const { getByText } = render(
            <DisablePassingStandardPopUp
                setIsDisablePassingStandard={setIsDisablePassingStandard}
            />
        );
        expect(getByText("Disable Passing Standard")).toBeInTheDocument();
        expect(
            getByText("Do you confirm to disable this Disable Passing Standard")
        ).toBeInTheDocument();
        expect(getByText("ID:")).toBeInTheDocument();
    });

    test("calls setIsDisablePassingStandard with false when 'No' button is clicked", () => {
        const setIsDisablePassingStandard = jest.fn();
        const { getByText } = render(
            <DisablePassingStandardPopUp
                setIsDisablePassingStandard={setIsDisablePassingStandard}
            />
        );
        const noButton = getByText("No");
        fireEvent.click(noButton);

        expect(setIsDisablePassingStandard).toHaveBeenCalledWith(false);
    });
});
