import { render, screen, fireEvent } from "@testing-library/react";
import PhotoCapturePopup from "../PhotoCapturePopup";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import "@testing-library/jest-dom";

describe("ConfirmPhotoCapturePopup", () => {

    let store;
    beforeEach(() => {
      store = createStore(() => ({
        submissionConfirmation: {
          uci: {
            isAccepted: false
          }
        },
        login:{
          userID: "",
        },
        data:{
          regdata: {},
        }
   
      }));
    });

    test("renders correctly", () => {
        const closePopupMock = jest.fn();
        render(  <Provider store={store}>
            <PhotoCapturePopup closePopup={closePopupMock}  />
           </Provider>);
        
        // Assert that the component renders without errors
        expect(screen.getByText("Confirm Photo Capture")).toBeInTheDocument();
        expect(screen.getByText("Proceed")).toBeInTheDocument();
        expect(screen.getByText("Back")).toBeInTheDocument();
    });

    test("calls closePopup when Back button is clicked", () => {
        const closePopupMock = jest.fn();
        render(  <Provider store={store}>
            <PhotoCapturePopup closePopup={closePopupMock}  />
           </Provider>);
        
        // Simulate a click on the Back button
        fireEvent.click(screen.getByText("Back"));
        
        // Assert that the closePopup function is called
        expect(closePopupMock).toHaveBeenCalled();
    });

    // Add more test cases as needed...
});
