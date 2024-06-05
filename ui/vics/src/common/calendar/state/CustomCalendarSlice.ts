import { createSlice } from "@reduxjs/toolkit";
import { initialState as states } from "../helper";

const initialState = states;

const customCalendarSlice = createSlice({
  name: "customCalendar",
  initialState,
  reducers: {
    setEffectiveDate: (state, action) => {
      state.effectiveDate = action.payload;
    },
    setToEffectiveDate: (state, action) => {
      state.toEffectiveDate = action.payload;
    },
    setManufacturingDate: (state, action) => {
      state.manufacturingDate = action.payload;
    },
    setToManufacturingDate: (state, action) => {
      state.toManufacturingDate = action.payload;
    },
    setFirstRegistrationDate: (state, action) => {
      state.firstRegistrationDate = action.payload;
    },
    setToFirstRegistrationDate: (state, action) => {
      state.toFirstRegistrationDate = action.payload;
    },
    setAllEffectiveDate: (state, action) => {
      state.allEffectiveDate = action.payload;
    },
    setAllManufacturingDate: (state, action) => {
      state.allManufacturingDate = action.payload;
    },
    setAllFirstRegistrationDate: (state, action) => {
      state.allFirstRegistrationDate = action.payload;
    },
    setErrorEffectiveDate: (state, action) => {
      state.errorEffectiveDate = action.payload;
    },
    setErrorManufacturingDate: (state, action) => {
      state.errorManufacturingDate = action.payload;
    },
    setErrorFirstRegistrationDate: (state, action) => {
      state.errorFirstRegistrationDate = action.payload;
    },
    setBackToInitialState: (state) => {
      state.effectiveDate = undefined;
      state.toEffectiveDate = undefined;
      state.manufacturingDate = undefined;
      state.toManufacturingDate = undefined;
      state.firstRegistrationDate = undefined;
      state.toFirstRegistrationDate = undefined;
      state.allEffectiveDate = undefined;
      state.allManufacturingDate = undefined;
      state.allFirstRegistrationDate = undefined;
      state.errorEffectiveDate = false;
      state.errorManufacturingDate = false;
      state.errorFirstRegistrationDate = false;
    },
  },
});

export const {
  setEffectiveDate,
  setToEffectiveDate,
  setFirstRegistrationDate,
  setManufacturingDate,
  setToFirstRegistrationDate,
  setToManufacturingDate,
  setAllEffectiveDate,
  setAllManufacturingDate,
  setAllFirstRegistrationDate,
  setErrorEffectiveDate,
  setErrorManufacturingDate,
  setErrorFirstRegistrationDate,
  setBackToInitialState,
} = customCalendarSlice.actions;

export default customCalendarSlice.reducer;
