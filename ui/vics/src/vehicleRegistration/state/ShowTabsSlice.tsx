import { createSlice } from "@reduxjs/toolkit";

export interface ITabs {
  tabs: boolean;
}

const showTabsInitialState: ITabs = {
  tabs: false,
};

export const ShowTabsSlice = createSlice({
  name: "showTab",
  initialState: showTabsInitialState,
  reducers: {
    hide: (state) => {
      state.tabs = false;
    },
    show: (state) => {
      state.tabs = true;
    },
  },
});

export const { hide, show } = ShowTabsSlice.actions;
export default ShowTabsSlice.reducer;
