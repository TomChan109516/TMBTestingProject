import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILoginInitialState, ICredentials } from "../model/loginModel";

const loginInitialState: ILoginInitialState = {
  userID: "",
  response: [],
  loader: false,
};
export const loginSlice = createSlice({
  name: "login",
  initialState: loginInitialState,
  reducers: {
    saveCredentials: (state, action: PayloadAction<ICredentials>) => {
      state.userID = action.payload.userId;
    },
    saveLoginResponse: (state, action) => {
      state.response = action.payload;
    },
    saveLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
});

export const { saveCredentials, saveLoginResponse, saveLoader } =
  loginSlice.actions;

export default loginSlice.reducer;
