import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILoginInitialState, ICentres, ICredentials } from '../model/loginModel';

const loginInitialState: ILoginInitialState = {
  userID: '',
  centreId: '',
  response: [],
  centres: [],
  loader: false
};
export const loginSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    saveCredentials: (state, action: PayloadAction<ICredentials>) => {
      state.userID = action.payload.userName;
      state.centreId = action.payload.centreId;
    },
    saveLoginResponse: (state, action) => {
      state.response = action.payload;
    },
    saveExaminationCentres: (state, action: PayloadAction<ICentres[]>) => {
      state.centres = action.payload;
    },
    saveLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    }
  }
});

export const { saveCredentials, saveLoginResponse, saveExaminationCentres, saveLoader } =
  loginSlice.actions;

export default loginSlice.reducer;
