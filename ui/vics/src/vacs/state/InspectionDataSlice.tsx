import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  unConfirmedListVehicleData: [],
  unConfirmedListVehicleTableData: {},
};

const inspectionDataSlice = createSlice({
  name: "inspectionData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setUnConfirmedListVehicleData: (state, action) => {
      state.unConfirmedListVehicleData = action.payload;
    },
    setUnConfirmedListVehicleTableData: (state, action) => {
      state.unConfirmedListVehicleTableData = action.payload;
    },
  },
});

export const {
  setData,
  setUnConfirmedListVehicleData,
  setUnConfirmedListVehicleTableData,
} = inspectionDataSlice.actions;

export default inspectionDataSlice.reducer;
