export interface IExaminationCodes {
  primary: IPrimaryExamCodes[];
  supplementary: ISupplementaryExamCodes[];
}

export interface IVehicleInfo {
  cERefNumber: string;
  lantanVehicleIndicator: string;
  vehiclStandardCapQuantity: number;
  vehicleChasisNumber: string;
  vehicleClassCode: string;
  vehicleClassId: string;
  vehicleEngineNumber: string;
  vehicleFrstRegDate: string;
  vehicleId: string;
  vehicleInspectionOrderId: string;
  vehicleLicenceEndDate: string;
  vehicleLowerSeatCapQuantity: number;
  vehicleMakeDescription: string;
  vehicleMakeId: string;
  vehicleMakeName: string;
  vehicleMfcYear: number;
  vehicleModelCode: string;
  vehicleModelDescription: string;
  vehicleModelName: string;
  vehicleRecordTypeCode: string;
  vehicleRegMarkNumber: string;
  vehicleRegistrationDocumentTransactionNumber: string;
  vehicleTypeApprovalNumber: string;
  vehicleTypeApprovalReferenceNumber: string;
  vehicleUpperSeatCapQuantity: number;
  vehicleVICOUptoDate: string;
  vehicleValidId: string;
  vehicleWeightCode: number;
}
export interface IRecentAppointments {
  appointmentNumber: string;
  result: "";
  bk_Chnl_Name: "";
  paymentStatus: string;
  bk_Chnl_Id: number;
  numberOfReschedules: "";
  appointment_Status: string;
  last_Txn_UserId: string;
  centreCode: string;
  primaryExamCode: number;
  appointmentDate: string;
  freeOfCharge: string;
  examFee: number;
  feeWaiver: "";
  contactPerson: string;
  remarks: string;
  laneId: number;
  supplementaryExamCode: number;
  contactNumber: number;
  vehicleId: "";
  isOverBooked: string;
  regMark: string;
  chassisNumber: string;
  vehicleClassId: number;
}
export interface IexamDetails {
  centre: string;
  centreId:string;
  primaryCode: Array<string>;
  examDate: string;
  suppCode: Array<string>;
  inspectionTypeIds: Array<string>;
}

export interface IexamDetailsInitialState {
  centre: string;
  centreId:string;
  primaryExamCode: Array<string>;
  examDate: string;
  supplExamCode: Array<string>;
  inspectionTypeIds: Array<string>;
}

export interface IPrimaryExamCodes {
  examCode: number;
  examName: string;
  examFee: number;
}
export interface ISupplementaryExamCodes {
  examCode: number;
  examName: string;
  examFee: number;
}

export interface IExamCodeDetails {
  LaneId: string;
  InspectionTypeId: string;
  ExamCode: string;
  ExamClass: string;
  InspectionTypeName: string;
  InspectionTypeDescription: string;
  examFee: string;
}

export interface ICreateAppointmentInitialState {
  appointmentId: string;
  primaryExamCodes: IPrimaryExamCodes[];
  supplementaryExamCodes: ISupplementaryExamCodes[];
  vehicleInfo: IVehicleInfo | object;
  recentAppointments: IRecentAppointments[];
  notesAndAlerts: Array<string>;
  examDetails: IexamDetailsInitialState;
  searchResponse: ISearchVehicle[];
}

export interface IVehicleClass {
  classID: string;
  classCode: string;
  subClasses: ISubClass[];
}

export interface ISubClass {
  subClassID: string;
  subClassCode: string;
}

export interface IVehicleClassSubClass {
  vehicleClassWithSubClasses: IVehicleClass[];
}
export interface IVehicleMake {
  vehicleMakeId: string;
  vehicleMakeName: string;
}
export interface IVehicleMakes {
  vehicleMakes: {
    vehicleMakeId: string;
    vehicleMakeName: string;
  }[];
}
export interface ISearchVehicle {
  vehicleId: string;
  vehicleRecordTypeCode: string;
  vehicleClassCode: string;
  vehicleValidId: string;
  vehicleRegMarkNumber: string;
  vehicleChasisNumber: string;
  vehicleMakeId: string;
  cERefNumber: string;
  vehicleRegistrationDocumentTransactionNumber: string;
  vehicleTypeApprovalNumber: string;
  masterChild: string;
}
