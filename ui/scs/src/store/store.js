import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../login/state/loginSlice';
import createAppointmentSlice from '../createAppointment/state/createAppointmentSlice';
import examTimeSlotSlice from '../examinationTimeSlot/state/examTimeSlotSlice';
import enquiryAppointmentSlice from '../enquireAppointment/state/enquiryAppointmentSlice';
import  attachmentSlice  from '../attachment/state/attachmentSlice';
import searchVehicleSlice from '../searchVehicle/state/searchVehicleSlice';
import vehicleWatchListSlice from '../vehicle/vehicleWatchList/state/vehicleWatchListSlice';
import searchInspectionLanesSlice from '../centre/state/SearchInspectionLanesSlice'
import centerSlice from '../centre/examinationSchedule/state/centerSlice';


export const store = configureStore({
  reducer: {
    login: loginSlice,
    createAppointment: createAppointmentSlice,
    timeExamSlot: examTimeSlotSlice,
    enquiryAppointment: enquiryAppointmentSlice,
    attachment:attachmentSlice,
    SearchVehicle:searchVehicleSlice,
    VehicleWatchList:vehicleWatchListSlice,
    SearchInspectionLane:searchInspectionLanesSlice,
    center:centerSlice
  }
});
