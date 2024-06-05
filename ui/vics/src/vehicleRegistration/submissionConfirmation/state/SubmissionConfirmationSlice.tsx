import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SubmissionConfirmationState } from "../model/SubmissionConfirmationInitialState";

const initialState: SubmissionConfirmationState = {
  brake: { isAccepted: false },
  ohm: {
    isAccepted: false,
  },
  ht: {
    isAccepted: false,
  },
  vi: {
    isAccepted: false,
  },
  exhaust: {
    isAccepted: false,
  },
  speedometer: {
    isAccepted: false,
  },
  uci: {
    isAccepted: false,
  },
  inspection: {
    isAccepted: false,
  },
};

const submissionConfirmationSlice = createSlice({
  name: "submissionConfirmation",
  initialState,
  reducers: {
    setisAccepted: (
      state,
      action: PayloadAction<SubmissionConfirmationState>
    ) => {
      const payloadKeys = Object.keys(action.payload);
      payloadKeys.forEach((key) => {
        if (state[key] && state[key].isAccepted !== undefined) {
          state[key].isAccepted = action.payload[key].isAccepted;
        }
      });
    },
    addComponent: (state, action: PayloadAction<string>) => {
      if (!state[action.payload]) {
        state[action.payload] = { isAccepted: false };
      }
    },
  },
});

export const { setisAccepted, addComponent } =
  submissionConfirmationSlice.actions;
export default submissionConfirmationSlice.reducer;
