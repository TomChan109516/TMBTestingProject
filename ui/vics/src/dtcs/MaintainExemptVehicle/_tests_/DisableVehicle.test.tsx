import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DisableVehicle from "../DisableVehicle";
import { jest } from "@jest/globals";

describe("DisableVehicle", () => {
    test("renders DisableVehicle component", () => {
        render(<DisableVehicle />);
        // Add your assertions here to check if the component renders correctly
    });
    test('displays confirmation message', () => {
        render(<DisableVehicle />)
        const input = screen.queryByText('Do you confirm to disable this Model Vehicle Exemption?')
        // Events and assertions...
      })


    test('should click Yes button ', () => {
        render(<DisableVehicle />)
        const input = screen.queryByRole('buttonYes', { name: '/Yes/' })
        // Events and assertions...
      })

    test('should click No button ', () => {
        render(<DisableVehicle />)
        const input = screen.queryByRole('buttonNo', { name: '/No/' })
        // Events and assertions...
      })

    
});







