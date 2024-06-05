import { createSlice } from "@reduxjs/toolkit";

const watchListInitialState = {
  vehicleWatchListResponse:[],
};
export const watchListSlice = createSlice({
  name: "VehicleWatchList",
  initialState: watchListInitialState,
  reducers: {
    saveVehicleWatchListResponse: (state, action) => {
      state.vehicleWatchListResponse= action.payload;
    }
  }      
});
 
export const {saveVehicleWatchListResponse} =
watchListSlice.actions;

export default watchListSlice.reducer;
