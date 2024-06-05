import React from "react";
import CloselanePopup from "../CloselanePopup";
import { render, fireEvent } from "@testing-library/react";
describe("CloselanePopup", () => {
    test("renders correctly", () => {
        const { getByText } = render(<CloselanePopup showCloselanePopup={true} closeCloselanePopup={() => { }} />);
        expect(getByText("Close Lane")).toBeInTheDocument();
        expect(getByText("Remaining Appointments in unconfirmed list:")).toBeInTheDocument();
        expect(getByText("Remaining Registered Appointments:")).toBeInTheDocument();
        expect(getByText("Remaining Un-registered Appointments:")).toBeInTheDocument();
        expect(getByText("Next")).toBeInTheDocument();
        expect(getByText("Cancel")).toBeInTheDocument();
    });
});