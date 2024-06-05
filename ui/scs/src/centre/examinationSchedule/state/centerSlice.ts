import { createSlice } from "@reduxjs/toolkit";

const centerInitialState = {
  searchExaminationData: [],
  selectedData: {},
};
export const centerSlice = createSlice({
  name: "center",
  initialState: centerInitialState,
  reducers: {
    saveSearchExaminationScheduleResponse: (state, action) => {
      state.searchExaminationData = action.payload;
    },
    saveSelectedExam: (state, action) => {
      state.selectedData = action.payload;
    }
  },
});

export const { saveSearchExaminationScheduleResponse, saveSelectedExam } =
  centerSlice.actions;

export default centerSlice.reducer;
