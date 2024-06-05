import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import MpvVehicle from "../MpvVehicle";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter } from 'react-router-dom';

describe('Vehicle Class', () => {
    test('render Field', () => {
        const { getByTestId } = render(<BrowserRouter>
            <Provider store={store}>
                <MpvVehicle />
            </Provider>
        </BrowserRouter>
        );
        expect(getByTestId('vehicleClass')).toBeInTheDocument();
        expect(getByTestId('floatName')).toBeInTheDocument();
        expect(getByTestId('permitNo')).toBeInTheDocument();
        expect(getByTestId('vvNo')).toBeInTheDocument();
        expect(getByTestId('chassisNo')).toBeInTheDocument();
        // expect(getByTestId('engineMake'));
        expect(getByTestId('modal')).toBeInTheDocument();
        expect(getByTestId('manuYear')).toBeInTheDocument();
        expect(getByTestId('lower')).toBeInTheDocument();
        expect(getByTestId('upper')).toBeInTheDocument();
        expect(getByTestId('stand')).toBeInTheDocument();
        expect(getByTestId('engineSize')).toBeInTheDocument();
        expect(getByTestId('engineNo')).toBeInTheDocument();
        expect(getByTestId('engineType')).toBeInTheDocument();
        expect(getByTestId('regDocNo')).toBeInTheDocument();
        expect(getByTestId('districtCode')).toBeInTheDocument();
        expect(getByTestId('engineMake')).toBeInTheDocument();
        expect(getByTestId('districtLocation')).toBeInTheDocument();
        expect(getByTestId('vehicleType')).toBeInTheDocument();
        expect(getByTestId('servicebrake')).toBeInTheDocument();
        expect(getByTestId('parkingbrake')).toBeInTheDocument();
        expect(getByTestId('steeringsystem')).toBeInTheDocument();
        expect(getByTestId('location')).toBeInTheDocument();
        expect(getByTestId('location(chinese)')).toBeInTheDocument();
        expect(getByTestId('tyresixe(1)')).toBeInTheDocument();
        expect(getByTestId('tyresixe(2)')).toBeInTheDocument();
        expect(getByTestId('tyresixe(3)')).toBeInTheDocument();
        expect(getByTestId('tyresixe(4)')).toBeInTheDocument();
        expect(getByTestId('tyresixe(5)')).toBeInTheDocument();
        expect(getByTestId('tyresixe(6)')).toBeInTheDocument();
        expect(getByTestId('tyresixe(7)')).toBeInTheDocument();
        expect(getByTestId('size(L)')).toBeInTheDocument();
        expect(getByTestId('size(W)')).toBeInTheDocument();
        expect(getByTestId('size(H)')).toBeInTheDocument();
        expect(getByTestId('contactpersons')).toBeInTheDocument();
        expect(getByTestId('telephoneNo')).toBeInTheDocument();
       
    });

    test('dropdown has correct values', () => {
        const { getByTestId } = render(<MpvVehicle />);
        const select = getByTestId('subclassDropdown');
        expect(getByTestId('subclassDropdown')).toBeInTheDocument();
      });
      
      it("resets the form fields when Reset button is clicked", () => {
        const { getByTestId } = render(<MpvVehicle />);
        const resetButton = getByTestId("resetButton");
     
        // Set initial values for the form fields
        fireEvent.change(getByTestId("floatName"), { target: { value: "Test Float Name" } });
        fireEvent.change(getByTestId("permitNo"), { target: { value: "Test Permit No." } });
        fireEvent.change(getByTestId("vvNo"), { target: { value: "Test VV No." } });
        // ... set values for other form fields
     
        // Click the Reset button
        fireEvent.click(resetButton);
     
        // Verify that the form fields are reset to their initial values
        expect(getByTestId("floatName")).toHaveValue("");
        expect(getByTestId("permitNo")).toHaveValue("");
        expect(getByTestId("vvNo")).toHaveValue("");
        // ... verify other form fields
      });

      it("should call the back button is clicked", () => {
        const { getByTestId } = render(<MpvVehicle />);
        const backButton = getByTestId("backButton");    
     
        fireEvent.click(backButton);
        // expect(backButton ).toHaveBeenCalled();
        expect(getByTestId("floatName")).toHaveValue("");
      });


      it("should call the save button is clicked", () => {
        const { getByTestId } = render(<MpvVehicle />);
        const saveButton = getByTestId("saveButton");    
     
        fireEvent.click(saveButton);
        // expect(backButton ).toHaveBeenCalled();
        expect(getByTestId("floatName")).toHaveValue("");
      });
});
