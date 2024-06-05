
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { store } from "../../../store/store";
import SubmitPopupInOHMRegistration from "../SubmitPopupInOHMRegistration";

describe("SubmitPopupInOHMRegistration", () => {
  test("renders SubmitPopupInOHMRegistration component", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SubmitPopupInOHMRegistration
            ImagePopup={true}
            closePopup={jest.fn()}
            OHMPopup={jest.fn()}
            setSubmitPopupInOHMRegistration={jest.fn()}
            name="Test Name"
          />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTestId("OHM Measuring Method")).toBeInTheDocument();
  });

  test("calls closePopup, OHMPopup, and setSubmitPopupInOHMRegistration when handleClose is called", () => {
    const closePopupMock = jest.fn();
    const OHMPopupMock = jest.fn();
    const setSubmitPopupInOHMRegistrationMock = jest.fn();

    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <SubmitPopupInOHMRegistration
            ImagePopup={true}
            closePopup={closePopupMock}
            OHMPopup={OHMPopupMock}
            setSubmitPopupInOHMRegistration={setSubmitPopupInOHMRegistrationMock}
            name="Test Name"
          />
        </Provider>
      </BrowserRouter>
    );

    const closeButton = getByTestId("close-button");
    fireEvent.click(closeButton);

    expect(closePopupMock).toBeCalledWith(false);
    expect(OHMPopupMock).toBeCalledWith(false);
    expect(setSubmitPopupInOHMRegistrationMock).toBeCalledWith(false);
  });
});