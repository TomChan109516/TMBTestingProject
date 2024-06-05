import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../login/state/loginSlice";
import TabsSlice from "../vehicleRegistration/state/ShowTabsSlice";
import OhmDataSlice from "../vehicleRegistration/state/ohmSlice";
import DataSlice from "../vehicleRegistration/state/RegistrationDataSlice";
import submissionConfirmationSlice from "../vehicleRegistration/submissionConfirmation/state/SubmissionConfirmationSlice";
import InspectionDataSlice from "../vacs/state/InspectionDataSlice";
import CustomCalendarSlice from "../common/calendar/state/CustomCalendarSlice";

const preloadedState = {
  login: {
    response: {
      isSuccess: localStorage.getItem("isAuthenticated") === "true",
    },
  },
};

export const store = configureStore({
  reducer: {
    login: loginSlice,
    tabs: TabsSlice,
    ohmData: OhmDataSlice,
    data: DataSlice,
    submissionConfirmation: submissionConfirmationSlice,
    inspectionData: InspectionDataSlice,
    calendar: CustomCalendarSlice,
  },
  preloadedState,
});
