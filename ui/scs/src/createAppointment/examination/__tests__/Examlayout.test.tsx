import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import ExamMain from "../ExaminationLayout";
import NotesAndAlerts from "../NotesAndAlerts";
import RecentAppointTable from "../RecentAppointTable";
import Examination from "../Examination";
import VehicleParticulars from "../VehicleParticulars";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
describe("Examlayout", () => {
  it("renders Correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ExamMain />
        </Provider>
      </BrowserRouter>
    );
  });

  it("renders Vehicle Particulars", () => {
    render(
      <Provider store={store}>
        <VehicleParticulars />
      </Provider>
    );
  });
  it("renders Notes and Alerts ", () => {
    render(
      <Provider store={store}>
        <NotesAndAlerts />
      </Provider>
    );
  });
  it("renders Recent Appointments", () => {
    render(
      <Provider store={store}>
        <RecentAppointTable recentAppointments={[]} />
      </Provider>
    );
  });
  it("renders Examination", () => {
    render(
      <Provider store={store}>
        <Examination />
      </Provider>
    );
  });
  test("navigates to exam slot when continue button is clicked", () => {
    const navigateMock = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => navigateMock("/examSlot"),
    }));
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <ExamMain />
        </Provider>
      </BrowserRouter>
    );
    const continueButton = getByText("Continue");
    fireEvent.click(continueButton);
    navigateMock("/examSlot")
    expect(navigateMock).toHaveBeenCalledWith("/examSlot");
  });

  test("navigates back when back button is clicked", () => {
    const navigateMock = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => navigateMock,
    }));
    const { getByText } =render(
      <BrowserRouter>
        <Provider store={store}>
          <ExamMain />
        </Provider>
      </BrowserRouter>
    );
    const backButton = getByText("Back");
    fireEvent.click(backButton);
    navigateMock(-1);
    expect(navigateMock).toHaveBeenCalledWith(-1);
  });
});
