import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SubmitPopUp from "../SubmissionConfirm/SubmitPopUp";

describe("SubmitPopUp", () => {
    test("renders correctly", () => {
        render(<SubmitPopUp />);
      
    });

    test("displays the confirmation message", () => {
        render(<SubmitPopUp />);
        
    });

    test("calls handleClose when 'Yes' button is clicked", () => {
        const handleClose = jest.fn();
        render(<SubmitPopUp handleClose={handleClose} />);
       
        fireEvent.click(screen.getByRole("buttonYes"));
       
    });

    test("calls handleClose when 'No' button is clicked", () => {
        const handleClose = jest.fn();
        render(<SubmitPopUp handleClose={handleClose} />);
        
        fireEvent.click(screen.getByRole("buttonNo"));
        
    });
});
