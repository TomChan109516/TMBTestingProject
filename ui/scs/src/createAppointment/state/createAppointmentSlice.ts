import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICreateAppointmentInitialState, IexamDetails, IExaminationCodes, ISearchVehicle, IVehicleInfo } from '../model/createAppointmentSliceModel';

const createAppointmentInitialState: ICreateAppointmentInitialState = {
  appointmentId: '',
  primaryExamCodes: [],
  supplementaryExamCodes: [],
  vehicleInfo: {},
  recentAppointments: [],
  notesAndAlerts: [],
  searchResponse:[],
  examDetails: {
    centre: '',
    centreId:'',
    primaryExamCode: [],
    supplExamCode: [],
    examDate: '',
    inspectionTypeIds:[]
  },
};
export const createAppointmentSlice = createSlice({
  name: 'createAppointment',
  initialState: createAppointmentInitialState,
  reducers: {
    saveExaminationCodes: (state, action: PayloadAction<IExaminationCodes>) => {
      state.primaryExamCodes = action.payload.primary;
      state.supplementaryExamCodes = action.payload.supplementary;
    },
    saveSearchResponse: (state, action: PayloadAction<ISearchVehicle[]>) => {
      state.searchResponse = action.payload;
    },
    saveVehicleInfo:(state, action: PayloadAction<IVehicleInfo>)=>{
      state.vehicleInfo= action.payload;
    },
    saveExamCodeDetails: (state, action: PayloadAction<IexamDetails>) => {
      state.examDetails.centre = action.payload.centre;
      state.examDetails.centreId = action.payload.centreId;
      state.examDetails.examDate = action.payload.examDate;
      state.examDetails.primaryExamCode = action.payload.primaryCode;
      state.examDetails.supplExamCode = action.payload.suppCode;
      state.examDetails.inspectionTypeIds = action.payload.inspectionTypeIds;
    },
  }
});
export const { saveExaminationCodes, saveSearchResponse, saveExamCodeDetails,saveVehicleInfo } =
  createAppointmentSlice.actions;
export default createAppointmentSlice.reducer;
