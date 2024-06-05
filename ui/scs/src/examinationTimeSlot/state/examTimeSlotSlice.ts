import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ITimeSlotInitialState,
  ILane,
  IApointmentInfo,
} from "../model/examTimeSlotModel";

const timeSlotInitialState: ITimeSlotInitialState = {
  response: [],
  Lane: [],
  createAppReq: {},
  appointInfo: {},
  selectedDate: "",
  selectedTime: "",
  selectedTimeSlotId: "",
  physicalLaneId:'',
  virtualLaneId:'',
};
export const timeSlotSlice = createSlice({
  name: "timeExamSlot",
  initialState: timeSlotInitialState,
  reducers: {
    saveAllLane: (state, action: PayloadAction<ILane[]>) => {
      state.Lane = action.payload;
    },
    saveCreateAppointmentResponse: (
      state,
      action: PayloadAction<IApointmentInfo>
    ) => {
      state.appointInfo = action.payload;
    },
    saveSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    saveSelectedTime: (state, action) => {
      console.log(action);
      state.selectedTimeSlotId = action.payload.timeSlotId;
      state.selectedTime = action.payload.time;
      state.physicalLaneId = action.payload.physicalLaneId;
      state.virtualLaneId = action.payload.virtualLaneId;
    },
  },
});

export const {
  saveAllLane,
  saveCreateAppointmentResponse,
  saveSelectedDate,
  saveSelectedTime,
} = timeSlotSlice.actions;

export default timeSlotSlice.reducer;
