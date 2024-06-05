export enum InspectionResult {
    Pass = "pass",
    Fail = "fail",
    Skip = "skip",
    Inspect = "inspect",
    Empty = "",
  }
  export interface InspectionObj {
    result: InspectionResult;
    ctrRm: InspectionResult;
    tester: string;
  }
  export default interface InspectionDataState {
    data: InspectionObj[];
  }