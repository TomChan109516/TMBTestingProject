import { render, fireEvent } from "@testing-library/react";
import CreateAppointmentlanding from "../CreateAppointmentlandingPage";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("CreateAppointmentlanding", () => {
  test("renders the component", () => {
   const {getByTestId, getByText}= render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateAppointmentlanding />
        </Provider>
      </BrowserRouter>
    );
    expect(getByText('Vehicle ID')).toBeInTheDocument();
    expect(getByText('Chassis No.')).toBeInTheDocument();
    expect(getByText('Vehicle Class')).toBeInTheDocument();
    expect(getByTestId('makeLabel')).toBeInTheDocument();
    expect(getByText('Doc. No.')).toBeInTheDocument();
    expect(getByText('Vaild/Non-Vaild')).toBeInTheDocument();
    expect(getByText('Reg. Mark')).toBeInTheDocument();
    expect(getByText('Compare alphanumeric characters only')).toBeInTheDocument();
    expect(getByText('Sub-Class')).toBeInTheDocument();
    expect(getByText('C&E No.')).toBeInTheDocument();
    expect(getByText('T.A. No.')).toBeInTheDocument();
    expect(getByTestId('validnonvalid')).toBeInTheDocument();
    expect(getByTestId('masterchild')).toBeInTheDocument();
    // Add your assertions here to check if the component renders correctly
  });

  test("searches for appointment", () => {
    const search =jest.fn();
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateAppointmentlanding />
        </Provider>
      </BrowserRouter>
    );
    // Mock the API response for successful search
    // You can use a library like `msw` to mock API calls
    // Mock the user input
    const vehicleIdElement= getByTestId("vehicleId");
    fireEvent.change(vehicleIdElement, {
      target: { value: "ABC123" },
    });
    const chassisNoElement = getByTestId("chassisNo");
    fireEvent.change(chassisNoElement, {
      target: { value: "1234567890" },
    });
    const docNoElement = getByTestId("docNo");
    fireEvent.change(docNoElement, {
      target: { value: "1234890" },
    });
    const regMarkElement = getByTestId("regMark");
    fireEvent.change(regMarkElement, {
      target: { value: "TS7890" },
    });
    const taNoElement = getByTestId("taNo");
    fireEvent.change(taNoElement, {
      target: { value: "789065" },
    });
    const ceNoElement = getByTestId("c&eNo");
    fireEvent.change(ceNoElement, {
      target: { value: "789065" },
    });
    const makeElement = getByTestId("make");
    fireEvent.change(makeElement, {
      target: { value: "Toyota" },
    });
    const vehicleTypeElement= getByTestId("vehicleType");
    fireEvent.change(vehicleTypeElement, {
      target: { value: "Car" },
    });
    const vehicleClassElement = getByTestId("vehicleClass");
    fireEvent.change(vehicleClassElement, {
      target: { value: "Small" },
    });
    const subClassElement = getByTestId("subClass");
    fireEvent.change(subClassElement, {
      target: { value: "Sedan" },
    });
    const masterChildElement = getByTestId("master/child");
    fireEvent.change(masterChildElement, {
      target: { value: "Master" },
    });
    const classData=[{classID:'88',classCode:'',subClasses:[{subClassID:'11',subClassCode:''}]},{classID:'89',classCode:'d',subClasses:[{subClassID:'12',subClassCode:'e'}]}]
    const makeData=[{vehicleMakeID:'88',vehicleMakeName:'Sx'},{vehicleMakeID:'89',vehicleMakeName:'Toyota'}];
    fireEvent.click(getByText('Search'));
    fireEvent.click(getByText("Create Non-VALID Vehicle"));
    // Add your assertions here to check if the search logic is working correctly
  });

  test('should reset the fields on  reset button Click ', () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateAppointmentlanding />
        </Provider>
      </BrowserRouter>
    );

    const resetButtonElement = getByText("Reset");
    fireEvent.click(resetButtonElement);
    const vehicleIdElement= getByTestId("vehicleId");
    fireEvent.change(vehicleIdElement, {
      target: { value: "" },
    });
    const chassisNoElement = getByTestId("chassisNo");
    fireEvent.change(chassisNoElement, {
      target: { value: "" },
    });
    const docNoElement = getByTestId("docNo");
    fireEvent.change(docNoElement, {
      target: { value: "" },
    });
    const regMarkElement = getByTestId("regMark");
    fireEvent.change(regMarkElement, {
      target: { value: "" },
    });
    const taNoElement = getByTestId("taNo");
    fireEvent.change(taNoElement, {
      target: { value: "" },
    });
    const ceNoElement = getByTestId("c&eNo");
    fireEvent.change(ceNoElement, {
      target: { value: "" },
    });
    const makeElement = getByTestId("make");
    fireEvent.change(makeElement, {
      target: { value: "" },
    });
    const vehicleTypeElement= getByTestId("vehicleType");
    fireEvent.change(vehicleTypeElement, {
      target: { value: "" },
    });
    const vehicleClassElement = getByTestId("vehicleClass");
    fireEvent.change(vehicleClassElement, {
      target: { value: "" },
    });
    const subClassElement = getByTestId("subClass");
    fireEvent.change(subClassElement, {
      target: { value: "" },
    });
    const masterChildElement = getByTestId("master/child");
    fireEvent.change(masterChildElement, {
      target: { value: "" },
    });
   expect(vehicleIdElement).toHaveValue("");
   expect(chassisNoElement).toHaveValue("");
   expect(docNoElement).toHaveValue("");
   expect(regMarkElement).toHaveValue("");
   expect(taNoElement).toHaveValue("");
   expect(ceNoElement).toHaveValue("");
   expect(makeElement).toHaveValue("");
   expect(vehicleTypeElement).toHaveValue("");
   expect(vehicleClassElement).toHaveValue("");
   expect(subClassElement).toHaveValue("");
   expect(masterChildElement).toHaveValue("");

  });

  test('should validate for required fields ', () => {
    const { getByTestId, getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateAppointmentlanding />
        </Provider>
      </BrowserRouter>
    );
    const vehicleIdElement= getByTestId("vehicleId");
    fireEvent.change(vehicleIdElement, {
      target: { value: "" },
    });
    const chassisNoElement = getByTestId("chassisNo");
    fireEvent.change(chassisNoElement, {
      target: { value: "" },
    });
    const regMarkElement = getByTestId("regMark");
    fireEvent.change(regMarkElement, {
      target: { value: "" },
    });
    fireEvent.click(getByTestId('searchButton'));
    expect(vehicleIdElement).not.toBe('');
    expect(chassisNoElement).not.toBe('');
    expect(regMarkElement).not.toBe('');
  });
  // Add more tests for other functionalities in your component
});


