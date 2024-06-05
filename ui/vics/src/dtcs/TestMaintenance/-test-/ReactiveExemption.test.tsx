import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReactiveExemption from "../ReactiveExemption";


describe("ReactiveExemption", () => {
    test("renders without errors", () => {
        render(<ReactiveExemption setIsReactiveExemption={undefined} />);
        // Assert that the component renders without throwing any errors
    });

    test("displays the modal header correctly", () => {
        render(<ReactiveExemption setIsReactiveExemption={undefined} />);
        const headerText = screen.getByText("Reactive Vehicle Exemption");
        expect(headerText).toBeInTheDocument();
    });

    

    test("displays the 'Yes' button", () => {
        render(<ReactiveExemption setIsReactiveExemption={undefined} />);
        const yesButton = screen.getByText("Yes");
        expect(yesButton).toBeInTheDocument();
    });
    
    it('renders correctly', () => {
        const setIsReactiveExemption = jest.fn();
        const { getByText } = render(<ReactiveExemption setIsReactiveExemption={setIsReactiveExemption} />);
        expect(getByText('Reactive Vehicle Exemption')).toBeInTheDocument();
      });
      it('close button closes modal', () => {
        const setIsReactiveExemption = jest.fn();
        const { getByRole, getByText } = render(<ReactiveExemption setIsReactiveExemption={setIsReactiveExemption} />);
        const closeButton = getByText('No');
        fireEvent.click(closeButton);
        expect(setIsReactiveExemption).toHaveBeenCalledTimes(1);
        expect(setIsReactiveExemption).toHaveBeenCalledWith(false);
      });

    
      
});
