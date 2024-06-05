import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OptionTabData from "../OptionTabData";

describe("OptionTabData", () => {
    test("renders the component", () => {
        const { getByTestId } = render(<OptionTabData />);
        expect(getByTestId("System Date:")).toBeInTheDocument();
    });

});