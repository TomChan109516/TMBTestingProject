import { createSlice } from "@reduxjs/toolkit";

const subClassInitialState = {
  subClass: [],
  searchVehicle:[],
  searchVehicleResponse:[]
 
};
export const subClassSlice = createSlice({
  name: "SearchVehicle",
  initialState: subClassInitialState,
  reducers: {
    saveSubClass: (state, action) => {
      state.subClass = action.payload;
      console.log("subclass", action.payload);
    },
    saveSearchVehicle: (state, action) => {
      state.searchVehicle = action.payload;
    },
    saveSearchVehicleResponse: (state, action) => {
      state.searchVehicleResponse= action.payload;
    }
         }
});

export const { saveSubClass,saveSearchVehicle, saveSearchVehicleResponse,} =
subClassSlice.actions;

export default subClassSlice.reducer;
