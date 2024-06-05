export type SubmissionConfirmationPopUpProps = {
  showSubmissionConfirmationPopUp: boolean;
  setSubmissionConfirmationPopUp: (value: boolean) => void;
  setNeedInspection?: (value: string) => void;
  setSubmitted?: (value: string) => void;
  setIsBtnDisable: (value: boolean) => void;
  url: string;
  data: unknown; // replace 'any' with the actual type of 'data' if known
  tabName: string;
};
