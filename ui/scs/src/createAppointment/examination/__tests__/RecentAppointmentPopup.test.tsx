import { render } from "@testing-library/react";
import RecentAppointPopup from "../RecentAppointPopUp";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import "@testing-library/jest-dom";

describe("Recent Appointments Popup", () => {
  test("renders Correctly", () => {
    render(
      <Provider store={store}>
        <RecentAppointPopup />
      </Provider>
    );
  });
  test("renders fields", () => {
    const closeRecentAppointPopup= jest.fn()
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <RecentAppointPopup showRecentAppointPopup={true}
          closeRecentAppointPopup={closeRecentAppointPopup} />
      </Provider>
    );
    expect(getByTestId('AppointNo')).toBeInTheDocument();
    expect(getByTestId("CentreCode")).toBeInTheDocument();
    expect(getByTestId("Lane")).toBeInTheDocument();
    expect(getByText("Exam Date")).toBeInTheDocument();
    expect(getByText("Exam Code")).toBeInTheDocument();
    expect(getByText("Vehicle Class")).toBeInTheDocument();
    expect(getByText("Vehicle Id")).toBeInTheDocument();
    expect(getByText("Reg Mark.")).toBeInTheDocument();
    expect(getByText("Chassis No.")).toBeInTheDocument();
    expect(getByText("Result")).toBeInTheDocument();
    expect(getByText("FOC")).toBeInTheDocument();
  });

  test('mock recent Appointment Popup data', () => {
    const mockRecentAppointments = [
      {
        appointmentDate: '2023-09-21',
        examCode: '123',
        center: 'Test Center',
        result: 'Pass',
        foc: 'Yes'
      }
    ];
    const useSelectorMock = jest.fn();
    useSelectorMock.mockReturnValue({ createAppointment: mockRecentAppointments });
  });
});
