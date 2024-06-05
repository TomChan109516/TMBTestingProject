import { createSlice } from "@reduxjs/toolkit";

const subClassInitialState = {
 
    SearchInspectionLaneResponse:[]
 
};
export const subClassSlice = createSlice({
  name: "SearchInspectionLane",
  initialState: subClassInitialState,
  reducers: {
   
    saveSearchInspectionLaneResponse: (state, action) => {
      state.SearchInspectionLaneResponse= action.payload;
    }
         }
});

export const {   saveSearchInspectionLaneResponse} =
subClassSlice.actions;

export default subClassSlice.reducer;
