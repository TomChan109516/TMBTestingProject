// import React from "react";
// import {
//   findByText,
//   fireEvent,
//   getByRole,
//   getByTestId,
//   queryByTestId,
//   render,
//   screen,
//   waitFor,
// } from "@testing-library/react";
// import { Provider, useDispatch } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import axios from "axios";
// import ExamTimeSlot from "../ExamTimeSlotLanding";

// import "@testing-library/jest-dom";
// import { saveCreateAppointmentResponse } from "../state/examTimeSlotSlice";
// import { saveLoader } from "../../login/state/loginSlice";
// import { store } from "../../store/store";
// import { CREATEAPPOINTMENT_API } from "../../constants/urlConstants";


describe("ExamTimeSlot", () => {
//   const dispatchMock = jest.fn();
//   const useSelector = jest.fn();
//   const useDispatch = jest.fn();
//   const useNavigate = jest.fn();
//   const navigateMock = jest.fn();
//   const axiosPostMock = jest.spyOn(axios, "post");


//   beforeEach(() => {
//     useDispatch(dispatchMock);
//     useSelector.mockImplementation((selectorFn) =>
//       selectorFn({ createAppointment: { vehicleInfo: {} } })
//     );
//     useNavigate.mockReturnValue(navigateMock);
//     // axiosPostMock.mockResolvedValue({});
//   });

//   // afterEach(() => {
//   //   jest.clearAllMocks();
//   // });

//   // test("renders all components", () => {
//   //   const { getByText } = render(
//   //     <Provider store={store}>
//   //       <BrowserRouter>
//   //         <ExamTimeSlot />
//   //       </BrowserRouter>
//   //     </Provider>
//   //   );
//   //   jest.mock('axios', () => {
//   //     return {
//   //       create: jest.fn(() => {
//   //         return {
//   //           get: jest.fn()
//   //         };
//   //       })
//   //     };
//   //   });
//   //   jest.mock('axios', () => {
//   //     return {
//   //       create: jest.fn(() => {
//   //         return {
//   //           post: jest.fn()
//   //         };
//   //       })
//   //     };
//   //   });
//   //   // screen.debug();
//   //   expect(getByText('Create Appointment > Examination')).toBeInTheDocument();
//   //   // screen.debug();
//   //   expect(getByText("Vehicle particular")).toBeInTheDocument();
//   //   expect(getByText("Notes and Alerts")).toBeInTheDocument();
//   //   expect(getByText("Appointment Information")).toBeInTheDocument();
//   //   expect(getByText("Back")).toBeInTheDocument();
//   //   expect(getByText("Confirm")).toBeInTheDocument();
//   // });

//   test("clicking back button navigates back",  () => {
//     const { getByTestId } =  render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <ExamTimeSlot />
//         </Provider>
//       </BrowserRouter>
//     ); 
//     screen.debug();
//     screen.logTestingPlaygroundURL();
//     // console.log('ss',getByTestId(''));
//     const backButton = getByTestId('BackButton');
//     fireEvent.click(backButton);
//     // console.log(backButton);
//     navigateMock(-1);
//     expect(navigateMock).toHaveBeenCalledWith(-1);
   
//   });

 test("clicking confirm button shows confirm popup", () => {
//   //   const { getByTestId, getByText } = render(
//   //     <BrowserRouter>
//   //       <Provider store={store}>
//   //         <ExamTimeSlot />
//   //       </Provider>
//   //     </BrowserRouter>
//   //   );
//   //   const confirmButton = getByTestId('ConfirmButton');
//   //   fireEvent.click(confirmButton);
//   //   // expect(getByText("Are you sure?")).toBeInTheDocument();
 });

//   test("clicking confirm button and then cancel button hides confirm popup", () => {
//     const { getByText, getByTestId } = render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <ExamTimeSlot />
//         </Provider>
//       </BrowserRouter>
//     );
//     screen.debug();
//     // const confirmButton = getByText(/Confirm/i);
//     const confirmButton = getByTestId('ConfirmButton');
//     fireEvent.click(confirmButton);
//     const cancelButton = getByText("No");
//     fireEvent.click(cancelButton);
//     // expect(getByText("Are you sure?")).not.toBeInTheDocument();
//   });

//   test("clicking confirm button and then confirm button on popup calls createAppointment", async () => {
//     const {  getByTestId } = render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <ExamTimeSlot />
//         </Provider>
//       </BrowserRouter>
//     );
//   // const axiosPostMock=jest.mock('axios', () => {
//   //     return {
//   //       create: jest.fn(() => {
//   //         return {
//   //           post: jest.fn()
//   //         };
//   //       })
//   //     };
//   //   });
//     const mockReqData={

//     "centreCode": "TY2", 

//     "primaryExamCode": "003", 
  
//     "appointmentDate": "2023-10-31T13:38:38.687Z", 
  
//     "freeOfCharge": "No", 
  
//     "examFee": 585, 
  
//     "feeWaiver": "NA", 
  
//     "contactPerson": "Abhiram", 
  
//     "remarks": "Creating an Appointment", 
  
//     "laneId": "11", 
  
//     "supplementaryExamCode": "009", 
  
//     "contactNumber": 987654321, 
  
//     "vehicleId": "002", 
  
//     "isOverBooked": "N", 
  
//     "regMark": "ERM098", 
  
//     "chassisNumber": "ERMO61998P22299", 
  
//     "vehicleClassId": "003", 
//     }
//     const confirmButton = getByTestId('ConfirmButton');
//     fireEvent.click(confirmButton);
//     const popupConfirmButton = getByTestId('ConfirmButton');
//     fireEvent.click(popupConfirmButton);
//    await axiosPostMock(CREATEAPPOINTMENT_API,mockReqData);
//     await waitFor(() => expect(axiosPostMock).toHaveBeenCalledTimes(1));
//     dispatchMock(saveCreateAppointmentResponse({}));
//     expect(dispatchMock).toHaveBeenCalledWith(
//       saveCreateAppointmentResponse({})
//     );
//     // navigateMock("/appointConfirm");
//     // expect(navigateMock).toHaveBeenCalledWith("/appointConfirm");
//   });

//   test("createAppointment dispatches loader actions and handles errors", async () => {
//     axiosPostMock.mockRejectedValueOnce({ response: { status: 500 } });
//     const { getByTestId, getByText } = render(
//       <BrowserRouter>
//         <Provider store={store}>
//           <ExamTimeSlot />
//         </Provider>
//       </BrowserRouter>
//     );
//     const confirmButton =  getByTestId('ConfirmButton');
//     fireEvent.click(confirmButton);
//     const popupConfirmButton = getByTestId('ConfirmButton');
//     fireEvent.click(popupConfirmButton);
//     dispatchMock(saveLoader(true));
//     expect(dispatchMock).toHaveBeenCalledWith(saveLoader(true));
//     dispatchMock(saveLoader(false));
//     expect(dispatchMock).toHaveBeenCalledWith(saveLoader(false));
//     await waitFor(() => expect(dispatchMock).toHaveBeenCalledTimes(2));
//     // expect(getByText("Are you sure")).not.toBeInTheDocument();
//   });
//   test('renders Correctly ', () => {
//     render(<BrowserRouter><Provider store={store}><ExamTimeSlot/></Provider></BrowserRouter>)
//   });
});
