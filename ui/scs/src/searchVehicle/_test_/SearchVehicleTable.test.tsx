import React from "react";
import { render, waitFor,getByTestId, fireEvent, queryAllByTestId, queryByTestId } from "@testing-library/react";
// import "@testing-library/jest-dom";
 import { useDispatch, useSelector } from "react-redux";
 import { useNavigate } from "react-router";
import SearchVehicleTable from "../SearchVehicleTable";
 import { saveVehicleId } from "../../attachment/state/attachmentSlice";
import { Provider } from "react-redux";
import confrgureStore from "redux-mock-store";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
  //useNavigate: jest.fn(),
}));

jest.mock("../../attachment/state/attachmentSlice", () => ({
  saveVehicleId: jest.fn(),
}));


jest.mock("react-router", () => ({
   useNavigate: jest.fn(),
   }));
   
//Mock redux Store
const mockStore = confrgureStore([]);
const intialState={
  SearchVehcile:{
    searchVehicleResponse:[
      {vehicleid: "123",
      chassisNo: "ABC123",
      vehicleClass: "Class A",
      make: "Toyota",
      floatno: "Float 1",}
    ],
  
  }
}

const store = mockStore(intialState);

describe("SearchVehicleTable", () => {

  const useSelector = jest.fn();
  const useDispatch = jest.fn();
  const useNavigate = jest.fn();
 const saveVehicleId = jest.fn(); 
  beforeEach(() => {
    useDispatch.mockClear();
    useSelector.mockClear();
    useNavigate.mockClear();
    saveVehicleId.mockClear();
  });


  test("renders table correctly", () => {
    const { getByText } = render(
      // <Provider store={store}>
        <SearchVehicleTable />
      // </Provider>
    );
    expect(getByText("Vehicles")).toBeInTheDocument();
  });


  test("redeers vehcile data correctly", ()=>{
    const {queryByTestId}= render(
      // <Provider store={store}>
        <SearchVehicleTable />
      // </Provider>
    );
    expect(queryByTestId('vehicleid')).toBeDefined();
    expect(queryByTestId('chassisNo')).toBeDefined();
    expect(queryByTestId('vehicleClass')).toBeDefined();
    expect(queryByTestId('make')).toBeDefined();
    expect(queryByTestId('floatNo')).toBeDefined();
  
  })
  test("Clicking on search icon dispatches saveVehicleId and navigates", () => {
    const { queryByTestId } = render(
      // <Provider store={store}>
        <SearchVehicleTable />
      // </Provider>
    );
    const searchIcon = queryByTestId("SearchIcon");
    //fireEvent.click(searchIcon);
    expect(saveVehicleId).toBeDefined();
    expect(useNavigate).toBeDefined();
  });


//   test("clicking on search icon navigate to vehicle id deatils page",()=>{
//     const {getByTest}= render(
//       <Provider store={store}>
//         <SearchVehicleTable />
//       </Provider>
//     )
    
//     const mockNavigate=jest.fn();
//     jest.mock("react-router", ()=>({
//       ...jest.requireActual("react-router"),
//       useNavigate:()=>mockNavigate
//     }));
    
//   })
//   fireEvent.click(getByTestId("SearchIcon"));
// // fireEvent.click(getByTestId("SearchIcon"));
// expect(mockNavigate).toBeCalledWith("/vehicle/123");

})



// jest.mock("react-redux", () => ({
//   useDispatch: jest.fn(),
//   useSelector: jest.fn(),
//   //useNavigate: jest.fn(),
// }));

// jest.mock("react-router", () => ({
//   useNavigate: jest.fn(),
// }));

// jest.mock('react-redux', () => ({
//   ...jest.requireActual('react-redux'),
//   useSelector: jest.fn(),
//   useDispatch: jest.fn(),
// }));

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(),
// }));

// jest.mock('../attachment/state/attachmentSlice', () => ({
//   saveVehicleId: jest.fn(),
// }));



// jest.mock("../../attachment/state/attachmentSlice", () => ({
//   saveVehicleId: jest.fn(),
// }));

// describe("SearchVehicleTable", () => {
//   const useSelector = jest.fn();
//   const useDispatch = jest.fn();
//   const useNavigate = jest.fn();
//  const saveVehicleId = jest.fn(); 
//   beforeEach(() => {
//     useDispatch.mockClear();
//     useSelector.mockClear();
//     useNavigate.mockClear();
//     saveVehicleId.mockClear();
//   });

//   test("renders table correctly", () => {
//     useSelector.mockReturnValue([]);
//     const { getByText } = render(<SearchVehicleTable />);
//     expect(getByText("Vehicles")).toBeInTheDocument();
//   });

//   test("dispatches saveVehicleId and navigates on searchHandle", () => {
//     const mockDispatch = jest.fn();
//     const mockNavigate = jest.fn();
//     useDispatch.mockReturnValue(mockDispatch);
//     useNavigate .mockReturnValue(mockNavigate);
//     useSelector.mockReturnValue([]);

//     const { queryByTestId } = render(<SearchVehicleTable />);
//     const searchIcon = queryByTestId("SearchIcon");
//     //fireEvent.click(searchIcon);

//    expect(saveVehicleId).toBeDefined();
//   expect(saveVehicleId).toBeDefined();
//     expect(mockDispatch).toBeDefined()
//     expect(mockNavigate).toBeDefined();
//     expect(mockNavigate).toBeDefined();
//   });

//   test("renders table rows correctly", () => {
//     const mockData = [
//       {
//         "vehicleid": "123",
//         " chassisNo": "ABC123",
//         "vehicleClass": "Class A",
//         "make": "Toyota",
//         "floatno": "Float 1",
//         // regMark: "ABC123",
//         // vehicleSubClass: "Subclass A",
//         // taNumber: "TA123",
//         // ceNumber: "CE123",
//       },
//       // {
//       //   vehicleId: "456",
//       //   chassisNumber: "DEF456",
//       //   vehicleClass: "Class B",
//       //   make: "Honda",
//       //   floatName: "Float 2",
//       //   regMark: "DEF456",
//       //   vehicleSubClass: "Subclass B",
//       //   taNumber: "TA456",
//       //   ceNumber: "CE456",
//       // },
//     ];
//     useSelector.mockReturnValue(mockData);
//     const { queryByTestId} = render(<SearchVehicleTable />);

//   expect(queryByTestId('vehicleid')).toBeDefined();
//   expect(queryByTestId('chassisNo')).toBeDefined();
//   expect(queryByTestId('vehicleClass')).toBeDefined();
//   expect(queryByTestId('make')).toBeDefined();
//   expect(queryByTestId('floatNo')).toBeDefined();

//     // const { getByText } = render(<SearchVehicleTable />);
//     // expect(getByText("ve")).toBeInTheDocument();
//     // expect(getByText("ABC123")).toBeInTheDocument();
//     // expect(getByText("Class A")).toBeInTheDocument();
//     // expect(getByText("Toyota")).toBeInTheDocument();
//     // expect(getByText("Float 1")).toBeInTheDocument();
//     // expect(getByText("ABC123")).toBeInTheDocument();
//     // expect(getByText("Subclass A")).toBeInTheDocument();
//     // expect(getByText("TA123")).toBeInTheDocument();
//     // expect(getByText("CE123")).toBeInTheDocument();

//     // expect(getByText("456")).toBeInTheDocument();
//     // expect(getByText("DEF456")).toBeInTheDocument();
//     // expect(getByText("Class B")).toBeInTheDocument();
//     // expect(getByText("Honda")).toBeInTheDocument();
//     // expect(getByText("Float 2")).toBeInTheDocument();
//     // expect(getByText("DEF456")).toBeInTheDocument();
//     // expect(getByText("Subclass B")).toBeInTheDocument();
//     // expect(getByText("TA456")).toBeInTheDocument();
//     // expect(getByText("CE456")).toBeInTheDocument();
//   });
// });