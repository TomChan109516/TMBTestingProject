import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { saveAmendDetailsData } from "../../state/enquiryAppointmentSlice";
import AmendAppointmentDetails from "../AmendAppointmentDetails";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store/store";
import { string } from "yargs";
import { Input } from "@nextui-org/input";

describe("EnquiryVehicleParticular", () => {
  test("renders component with basic elements", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AmendAppointmentDetails />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("Appointment No.")).toBeInTheDocument();
    // ... more checks for elements
  });
  test("renders component with basic elements", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AmendAppointmentDetails />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText("Transaction Date")).toBeInTheDocument();
  });
});

describe("EnquiryAppointmentLandingPage", () => {
  describe("Input Component", () => {
    test("renders Input component", () => {
      const { getByTestId } = render(
        <BrowserRouter>
          <Provider store={store}>
            <AmendAppointmentDetails />
          </Provider>
        </BrowserRouter>
      );
      const inputElement = getByTestId("input-test");

      // assertion for checking if the Input component renders successfully
      expect(inputElement).toBeInTheDocument();
    });
  });
});


//     test('renders correctly', () => {
//       const updateCenter = jest.fn();
//       const updatePrimaryCode = jest.fn(string);
//       const updateSuppCode  = jest.fn(string);
//       const updateDate  = jest.fn();
//       const prop = {
//         updateCenter,
//         updatePrimaryCode,
//         updateSuppCode,updateDate
//       }
//       render(
//         <Provider store={store}>
//           <AmendAppointmentDetails
//             updatePrimaryCode={updatePrimaryCode}
//           />
//         </Provider>
//       );
//     });
//     test(' should be able to select primary code and supplementary code', () => {
//       const updateCenter = jest.fn();
//       const updatePrimaryCode = jest.fn();
//       const updateSuppCode  = jest.fn();
//       const updateDate  = jest.fn();
//       render(
//         <Provider store={store}>
//           <AmendAppointmentDetails
//             updateCenter={updateCenter}
//             updatePrimaryCode={updatePrimaryCode}
//             updateSuppCode={updateSuppCode}
//             updateDate={updateDate}
//           />
//         </Provider>
//         );
//         updatePrimaryCode();
//         updateSuppCode();
//         expect(updatePrimaryCode).toBeCalled();
//         expect(updateSuppCode).toBeCalled();
//          });
//   });

// jest.mock("react-redux", () => ({
//   useDispatch: jest.fn(),
//   useSelector: jest.fn(),
// }));

// jest.mock("../state/enquiryAppointmentSlice", () => ({
//   saveAmendDetailsData: jest.fn(),
// }));

// describe("AmendAppointmentDetails", () => {
//   beforeEach(() => {
//     useDispatch.mockReturnValue(jest.fn());
//     useSelector.mockReturnValue({
//       appointmentNumber: "12345",
//       appointment_Status: "Scheduled",
//       numberOfReschedules: 2,
//       centreCode: "ABC123",
//       appointmentDate: "2022-01-01",
//       bk_Chnl_Name: "Online",
//       laneId: "L001",
//       freeOfCharge: true,
//       examFee: 50,
//       feeWaiver: false,
//       contactPerson: "John Doe",
//       contactNumber: "1234567890",
//     });
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it("renders appointment details correctly", () => {
//     render(<AmendAppointmentDetails />);

//     expect(screen.getByText("Appointment No. 12345")).toBeInTheDocument();
//     expect(screen.getByText("Security Code -")).toBeInTheDocument();
//     expect(screen.getByText("Appointment Status Scheduled")).toBeInTheDocument();
//     expect(screen.getByText("No. of Reschedules 2-")).toBeInTheDocument();
//     expect(screen.getByText("Center ABC123")).toBeInTheDocument();
//     expect(screen.getByText("Date 01/01/2022")).toBeInTheDocument();
//     expect(screen.getByText("Transaction Date -")).toBeInTheDocument();
//     expect(screen.getByText("Booking Channel Online")).toBeInTheDocument();
//     expect(screen.getByText("Hold Timeslot -")).toBeInTheDocument();
//     expect(screen.getByText("Lane L001")).toBeInTheDocument();
//     expect(screen.getByText("Time 00:01")).toBeInTheDocument();
//     expect(screen.getByText("Free of Charge true")).toBeInTheDocument();
//     expect(screen.getByText("Exam Fee 50")).toBeInTheDocument();
//     expect(screen.getByText("Fee Wavier false-")).toBeInTheDocument();
//     expect(screen.getByText("Inspection Status -")).toBeInTheDocument();
//     expect(screen.getByText("Last Update -")).toBeInTheDocument();
//     expect(screen.getByText("Inspection Result -")).toBeInTheDocument();
//     expect(screen.getByLabelText("Contact Person")).toHaveValue("John Doe");
//     expect(screen.getByLabelText("Contact Number")).toHaveValue("1234567890");
//   });

//   it("dispatches saveAmendDetailsData action on value change", () => {
//     render(<AmendAppointmentDetails />);

//     const contactPersonInput = screen.getByLabelText("Contact Person");
//     const contactNumberInput = screen.getByLabelText("Contact Number");

//     fireEvent.change(contactPersonInput, { target: { value: "Jane Smith" } });
//     fireEvent.change(contactNumberInput, { target: { value: "9876543210" } });

//     expect(saveAmendDetailsData).toHaveBeenCalledWith({
//       appointmentNumber: "12345",
//       appointment_Status: "Scheduled",
//       numberOfReschedules: 2,
//       centreCode: "ABC123",
//       appointmentDate: "2022-01-01",
//       bk_Chnl_Name: "Online",
//       laneId: "L001",
//       freeOfCharge: true,
//       examFee: 50,
//       feeWaiver: false,
//       contactPerson: "Jane Smith",
//       contactNumber: "9876543210",
//     });
//   });
// });
