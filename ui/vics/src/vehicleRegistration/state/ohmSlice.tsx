import { createSlice } from "@reduxjs/toolkit";

export interface ShowOhmData {
  ohmdata: any;
 
}

const showDataInitialState: ShowOhmData = {
    ohmdata: {},
};

export const ShowOhmDataSlice = createSlice({
  name: "ohmData",
  initialState: showDataInitialState,
  reducers: {
    setOHMData: (state, action) => {
      console.log("action.payload", action.payload);
      state.ohmdata = action.payload.regdata;
    }
  },
});

export const {setOHMData } = ShowOhmDataSlice.actions;
export default ShowOhmDataSlice.reducer;
