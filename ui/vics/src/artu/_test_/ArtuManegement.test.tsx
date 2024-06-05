import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";

import "@testing-library/jest-dom";
import { store } from "../../store/store";
import LastResultPopUp from "../LastResultPopUP";
import LastErrorPopUp from "../LastErrorPopUp";
import VEEPairingPopUp from "../VEEPairingPopUp";
import ArtuAdministration from "../ArtuAdministration";

describe("Login", () => {
  test("render Field", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ArtuAdministration />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTestId("SearchFor")).toBeInTheDocument();
    expect(getByTestId("ARTU Management Page")).toBeInTheDocument();
    jest.mock("axios", () => {
      return {
        create: jest.fn(() => {
          return {
            get: jest.fn(),
          };
        }),
      };
    });
  });
  test('displays last result popup', () => {
    const { getByText } = render(<ArtuAdministration />);
    const viewLastResultElement = getByText('View Last Result');
    fireEvent.click(viewLastResultElement);
    render(<LastResultPopUp />)
  });

  test('displays last error popup', () => {
    const { getByText } = render(<ArtuAdministration />);
    const viewLastErrorElement = getByText('View Last Error');
    fireEvent.click(viewLastErrorElement);
    render(<LastErrorPopUp />)
  });

  test("displays VEEPairing PopUp", () => {
    const { queryByText } = render(<ArtuAdministration />);
    const viewAddVEEPairingElement = queryByText("View Add VEEPairing");
    if (viewAddVEEPairingElement) {
      fireEvent.click(viewAddVEEPairingElement);
    }
    render(<VEEPairingPopUp />);
  });
});
