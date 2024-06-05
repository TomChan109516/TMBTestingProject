export interface ITimeSlotInitialState {
    response: [],
    Lane: ILane[],
    createAppReq: object,
    appointInfo: IApointmentInfo | object,
    selectedDate: string,
    selectedTime: string,
    selectedTimeSlotId: string,
    physicalLaneId: string,
    virtualLaneId: string,
}
export interface ILane {
    laneId: number,
    centreId:string,
    laneName:string,
    laneType: string,
    laneTimeSlots:Array<string>
}
export interface IApointmentInfo {
    centreCode: string,
    primaryExamCode: number,
    appointmentDate: string,
    freeOfCharge: string,
    examFee: number,
    feeWaiver: string,
    contactPerson: string,
    remarks: string,
    laneId: number,
    supplementaryExamCode: number,
    contactNumber: number,
    vehicleId: number,
    isOverBooked: string,
    regMark: string,
    chassisNumber: string,
    vehicleClassId: number,
}
export interface AppointmentDetails {
    appointmentId: string;
    appointmentNumber: string;
    appointmentCreateDateTime: string;
    securityCode: string;
    appointmentCreateSystemId: string;
    appointmentStatus: string;
    holdTimeSlot: string;
    numberOfReschedules: number;
    centreCode: string;
    lane: string;
    primaryExamCode: string;
    supplementaryExamCode: string;
    freeOfChargeIndicator: string;
    examFee: number;
    feeWaiver: string;
    inspectionStatus: string;
    inspectionResult: string;
    lastUpdate: string;
    appointmentContactName: string;
    appointmentContactNumber: string;
    appointmentRemark: string;
  }
export interface IExamSlot {
    quota: number;
    timeSlot: string;
    physicalLaneId: string;
    virtualLaneId: string | null;
    dayOfSession: string;
    laneTimeSlotId: string;
}
