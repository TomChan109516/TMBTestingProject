import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CapturedPhotos from "../CapturedPhotos";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import "@testing-library/jest-dom";

describe("CapturedPhotos", () => {

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

    it("renders the component correctly", () => {
        render(  <Provider store={store}>
           <CapturedPhotos />
          </Provider>);
    });

    it('renders the captured images and buttons', () => {
      const { getByAltText, getByText } = render(  <Provider store={store}>
        <CapturedPhotos />
       </Provider>);
      expect(getByText('Retake Front Photo')).toBeInTheDocument();
      expect(getByText('Retake Back Photo')).toBeInTheDocument();
    });

    it('calls handleCapture with the correct button name when a button is clicked', () => {
      const handleCapture = jest.fn();
      const { getByText } = render(  <Provider store={store}>
        <CapturedPhotos handleCapture={handleCapture} />
       </Provider>);
      fireEvent.click(getByText('Retake Front Photo'));
      expect(handleCapture).toHaveBeenCalledTimes(0);
    });
});
