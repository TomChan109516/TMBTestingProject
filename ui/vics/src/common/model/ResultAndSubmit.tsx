export interface extraButtons {
  length: number;
  buttons: AdditionalProps[];
}

export interface AdditionalProps {
  // isPresent: boolean;
  name: string;
  handler?: ValueHandler;
  extraHandler?: ValueHandler;
}

type ValueHandler = (value: string | boolean | void) => void | string | boolean;

export interface ResultAndSubmitProps {
  tabName: string;
  // for now set to optional   ---remove optional after api is given from backend
  url?: string;
  data?: unknown;
  showPopup: boolean;
  setShowPopup: (value: boolean) => void;
  setNeedInspection?: (value: string) => void;
  setSubmitted?: (value: string) => void;
  setIsBtnDisable: (value: boolean) => void;
  isBtnDisable: boolean;
  selectedRadio: string;
  handleClick: () => void;
  onRadioButtonChange: (value: string) => void;
  extraButtons?: extraButtons;
}
