import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotesAndAlerts from "../Notes&Alerts";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("NotesAndAlerts Component", () => {
  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <NotesAndAlerts />
      </Provider>
    );
  });
  describe("NotesAndAlerts component", () => {
    it("should open COFExpiryDatePopup when EditCalendar icon is clicked", () => {
      //Render the NotesAndAlerts component
      const { getByText, getByTestId } = render(<NotesAndAlerts />);

      //Find the EditCalendar icon
      const editCalendarIcon = getByTestId("EditCalendarIcon");
      //Simulate a click on the EditCalendar icon
      fireEvent.click(editCalendarIcon);
      //Find the COFExpiryDatePopup component
      const cofExpiryDatePopup = getByTestId("cofexpiry-date-popup");
      //Assert that the COFExpiryDatePopup
      // component is renderIntoDocument
      expect(cofExpiryDatePopup).toBeInTheDocument();
    });
  });
});
