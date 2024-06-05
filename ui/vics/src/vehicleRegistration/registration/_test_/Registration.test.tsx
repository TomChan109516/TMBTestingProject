import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Registration from "../Registration";
import "@testing-library/jest-dom";
import { Provider } from 'react-redux';
import { store } from "../../../store/store";

describe("Registration Component", () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Registration />
            </Provider>);
    });

    it("renders the component without errors", () => {
        expect(screen.getByTestId("registration-component")).toBeInTheDocument();
    });

    it("displays the correct input values", () => {
        expect(screen.getByLabelText("Propulsion")).toBeInTheDocument();
        expect(screen.getByLabelText("Engine No.")).toBeInTheDocument();
        expect(screen.getByLabelText("Engine Cap.")).toBeInTheDocument();
        expect(screen.getByLabelText("Engine Model")).toBeInTheDocument();
    });

    it("updates the input values when changed", () => {
        fireEvent.change(screen.getByLabelText("Propulsion"), { target: { value: 'Electric' } });
        expect(screen.getByLabelText("Propulsion")).toBeInTheDocument();

        fireEvent.change(screen.getByLabelText("Engine No."), { target: { value: '1234' } });
        expect(screen.getByLabelText("Engine No.")).toBeInTheDocument();

        fireEvent.change(screen.getByLabelText("Engine Cap."), { target: { value: '2000' } });
        expect(screen.getByLabelText("Engine Cap.")).toBeInTheDocument();

        fireEvent.change(screen.getByLabelText("Engine Model"), { target: { value: 'Model X' } });
        expect(screen.getByLabelText("Engine Model")).toBeInTheDocument();
    });
});