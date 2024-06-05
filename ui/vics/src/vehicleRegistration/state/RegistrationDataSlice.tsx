import { createSlice } from "@reduxjs/toolkit";

export interface ShowData {
  regdata: any;
  appointmentId:string
}

const showDataInitialState: ShowData = {
  regdata: {},
  appointmentId:"",
};

export const ShowDataSlice = createSlice({
  name: "data",
  initialState: showDataInitialState,
  reducers: {
    setData: (state, action) => {
      state.regdata = action.payload.regdata;
      state.appointmentId=action.payload.appointmentId
    }
  },
});

export const {setData } = ShowDataSlice.actions;
export default ShowDataSlice.reducer;
