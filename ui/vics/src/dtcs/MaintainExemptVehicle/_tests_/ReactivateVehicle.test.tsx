import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReactivateVehicle from "../ReactivateVehicle";
import { jest } from "@jest/globals";

describe("ReactivateVehicle", () => {
    test("renders ReactivateVehicle component", () => {
        render(<ReactivateVehicle />);
        // Add your assertions here to check if the component renders correctly
    });
   
    test('displays confirmation message', () => {
        render(<ReactivateVehicle />)
        const input = screen.queryByText('Do you confirm to reactivate this Model Vehicle Exemption?')
        // Events and assertions...
      })

    test('should click Yes button ', () => {
        render(<ReactivateVehicle />)
        const input = screen.queryByRole('buttonYes2', { name: '/Yes/' })
        // Events and assertions...
      })

    test('should click No button ', () => {
        render(<ReactivateVehicle />)
        const input = screen.queryByRole('buttonNo2', { name: '/No/' })
        // Events and assertions...
      })

    
});