import { createSlice } from "@reduxjs/toolkit";

const enquiryAppointmentInitialState = {
  searchEnquiryAppointment: {},
  enquiryVehicleInfo: [],
  enquiryAppointmentInfo: [],
  rescheduleAppointmentInfo: {},
  saveAmendDetails: {},
  appointmentNumberDetail:"",
};

export const enquiryAppointmentSlice = createSlice({
  name: "enquiryAppointment",
  initialState: enquiryAppointmentInitialState,
  reducers: {
    saveSearchEnquiryResponse: (state, action) => {
      state.searchEnquiryAppointment = action.payload;
    },
    saveAppointmentDetails: (state, action) => {
      state.enquiryVehicleInfo = action.payload.data.vehicleInfo[0];
      state.enquiryAppointmentInfo = action.payload.data.recentAppointments[0];
    },
    saveRescheduledAppointmentResponse: (state, action) => {
      state.rescheduleAppointmentInfo = action.payload;
    },
    saveAmendDetailsData: (state, action) => {
      state.saveAmendDetails = action.payload;
    },
    saveAppointmentNumber: (state, action) => {
      state.appointmentNumberDetail = action.payload;
    }
  },
});
export const {
  saveSearchEnquiryResponse,
  saveAppointmentDetails,
  saveRescheduledAppointmentResponse,
  saveAmendDetailsData,
} = enquiryAppointmentSlice.actions;
export default enquiryAppointmentSlice.reducer;

