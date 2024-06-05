import { createSlice } from "@reduxjs/toolkit";

const attachmentInitialState = {
  attachments: [],
  submissionDateTime: "",
  centreId: "",
  description: "",
  attachment: "",
  additionalmessage: "",
  generalAttachment:{},
  saveVehicleId:"",
  selectedAppointment:"",
  downloadFile:{}
};
export const attachmentSlice = createSlice({
  name: "attachment",
  initialState: attachmentInitialState,
  reducers: {
    saveAttachments: (state, action) => {
      state.attachments = action.payload;
      console.log("attachment", action.payload);
    },
    saveGeneralAttachment: (state, action) => {
      state.generalAttachment = action.payload;
    },
    
    saveSubmissionDate: (state, action) => {
      state.submissionDateTime = action.payload;
    },
    saveCentre: (state, action) => {
      state.centreId = action.payload;
    },
    saveDescription: (state, action) => {
      state.description = action.payload;
    },
    saveAttachment: (state, action) => {
      state.attachment = action.payload;
    },
    saveAdditionalmessage: (state, action) => {
      state.additionalmessage = action.payload;
    },
    saveVehicleId: (state, action) => {
      state.saveVehicleId = action.payload;
    },
   
    setSelectedAppointment :(state, action) => {
      state.selectedAppointment = action.payload;
    },
    setDownloadFile :(state, action) => {
      state.downloadFile = action.payload;
    }
  }
});

export const { saveAttachments, saveSubmissionDate, saveCentre, saveDescription, saveAttachment, saveAdditionalmessage,saveGeneralAttachment,setSelectedAppointment ,saveVehicleId ,  setDownloadFile} =
  attachmentSlice.actions;

export default attachmentSlice.reducer;
