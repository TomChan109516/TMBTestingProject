import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, fireEvent,  } from "@testing-library/react";
import "@testing-library/jest-dom";
import { store } from "../../store/store";
import VehiclePopup from "./VehicleInfoPopup";

describe("VehiclePopup", () => {
  

  test("can accept input in the fields", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <VehiclePopup VehiclePopup="true" closeVehiclePopup={jest.fn()} />
        </Provider>
      </BrowserRouter>
    );

    fireEvent.change(getByTestId("vehMake"), { target: { value: 'Test Make' } });
    expect(getByTestId("vehMake")).toHaveValue('Test Make');

    fireEvent.change(getByTestId("vehModel"), { target: { value: 'Test Model' } });
    expect(getByTestId("vehModel")).toHaveValue('Test Model');

    fireEvent.change(getByTestId("modelCode"), { target: { value: 'Test Code' } });
    expect(getByTestId("modelCode")).toHaveValue('Test Code');

    fireEvent.change(getByTestId("manuYear"), { target: { value: 'Test Year' } });
    expect(getByTestId("manuYear")).toHaveValue('Test Year');

    fireEvent.change(getByTestId("approvalNo"), { target: { value: 'Test No' } });
    expect(getByTestId("approvalNo")).toHaveValue('Test No');
  });

});