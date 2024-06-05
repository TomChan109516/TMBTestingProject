import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EnquiryVehicleParticular from './EnquiryVehicleParticular';
import { Provider, useSelector } from 'react-redux';
import { createMockStore } from 'redux-mock-store';
import dayjs from 'dayjs';
import { store } from  "../../store/store"
import { BrowserRouter } from 'react-router-dom';
import EnquiryAppointmentInfo from './EnquiryAppointmentInfo';
import { Button } from '@nextui-org/react';


describe("EnquiryAppointmentInfo",() =>{
    test("renders component with basic elements", () => {
        render(
          <BrowserRouter>
            <Provider store={store}>
              <EnquiryAppointmentInfo />
            </Provider>
            </BrowserRouter>
         
        );
        expect(screen.getByText("Appointment Status")).toBeInTheDocument();
       ;
        // ... more checks for elements
      });
      // test("renders component with basic elements", () => {
      //   render(
      //     <BrowserRouter>
      //       <Provider store={store}>
      //         <EnquiryVehicleParticular />
      //       </Provider>
      //       </BrowserRouter>
         
      //   );
      //   expect(screen.getByText("Security Code")).toBeInTheDocument();
      //  ;
       
      // });
      describe("Button Component", () => {
        test("renders Button component", () => {
          const { getByTestId } = render(<Button data-testid="cancelButton" />);
          const buttonElement = getByTestId("cancelButton");
    
          // assertion for checking if the Button component renders successfully
          expect(buttonElement).toBeInTheDocument();
        });
    
        // test("Button click triggers exportHandler", () => {
        //   // You might need to mock the exportHandler function
        //   // and check if it is called when the button is clicked
        //   const mockExportHandler = jest.fn();
        //   const { getByTestId } = render(
        //     <Button data-testid="cancelButton" onClick={cancelFeeWaiver} />
        //   );
        //   const buttonElement = getByTestId("cancelButton");
    
        //   fireEvent.click(buttonElement);
        //   expect(mockExportHandler).toHaveBeenCalled();
        // });
    
        // fireEvent.change(getByTestId("floatName"), {
        //   target: { value: "Test Float Name" },
        // });
        // fireEvent.click(cancelButton);
        // expect(getByTestId("floatName")).toHaveValue("");
      });
})