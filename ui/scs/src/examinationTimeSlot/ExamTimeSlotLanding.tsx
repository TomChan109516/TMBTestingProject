import clsx from "clsx";
import dayjs from "dayjs";
// import { Button, Grid, makeStyles, Breadcrumbs, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { axiosPost } from "../utils/axiosInstance";
import AppointmentInfo from "../examinationTimeSlot/AppointmentInfo";
// import BookingSlot from './TimelineDates/BookingSlot';
import ConfirmPopup from "./ConfirmPopup";
import { CREATEAPPOINTMENT_API } from "../constants/urlConstants";
import NotesAndAlerts from "../createAppointment/examination/NotesAndAlerts";
import { saveCreateAppointmentResponse } from "../examinationTimeSlot/state/examTimeSlotSlice";
import VehicleParticulars from "../createAppointment/examination/VehicleParticulars";
import { saveLoader } from "../login/state/loginSlice";
import { Button } from "@nextui-org/react";
import CalendarDates from "./timeLine/CalendarDates";
import { IVehicleInfo } from "../createAppointment/model/createAppointmentSliceModel";
import { getVehicleParticularsById } from "../createAppointment/examination/services/examinationService";
import { saveVehicleInfo } from "../createAppointment/state/createAppointmentSlice";
import { getCreateAppointment } from "./service/timeLine.service";

function ExamTimeSlot() {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const dispatch = useDispatch();
  const mode = "e";
  const [requestData, setRequestData] = useState({});
  const [vehicleInfo, setVehicleInfo] = useState<IVehicleInfo>({});
  const vehicleId = new URLSearchParams(window.location.search).get(
    "vehicleId"
  );
  const navigate = useNavigate();
  const getApiReq = (data) => {
    setRequestData(data);
  };
  const loadVehicleParticulars = async () => {
    const response = await getVehicleParticularsById(vehicleId);
    setVehicleInfo(response.vehicleDetails[0]);
    dispatch(saveVehicleInfo(response.vehicleDetails[0]));
  };
  useEffect(() => {
    loadVehicleParticulars();
  }, []);

  const createAppointment = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getCreateAppointment(requestData);
      const appointmentNumber = response.appointmentDetails.appointmentNumber;
      dispatch(saveCreateAppointmentResponse(response));
      navigate(
        `/appointConfirm?vehicleId=${vehicleId}&appointmentId=${appointmentNumber}`
      );
      dispatch(saveLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(saveLoader(false));
    }
  };
  const handleConfirmPopup = () => {
    setShowConfirmPopup(true);
  };
  const formatSeatCapacity = `L:${vehicleInfo?.vehicleLowerSeatCapQuantity};U:${vehicleInfo?.vehicleUpperSeatCapQuantity};S:${vehicleInfo?.vehiclStandardCapQuantity}`;
  const vehicleMake = `${vehicleInfo?.vehicleMakeName}-${vehicleInfo?.vehicleMakeDescription}`;
  const formatData = {
    "Vehicle Class": vehicleInfo?.vehicleClassCode,
    "Chassis No": vehicleInfo?.vehicleChasisNumber,
    "Vehicle Id": vehicleInfo?.vehicleValidId,
    "C&E No": vehicleInfo?.cERefNumber,
    "Reg. Mark": vehicleInfo?.vehicleRegMarkNumber,
    "Current Reg. Mark": vehicleInfo?.vehicleRegMarkNumber,
    PGVWeight: vehicleInfo?.vehicleWeightCode,
    "Manu Year": vehicleInfo?.vehicleMfcYear,
    "Seat Capacity":
      vehicleInfo?.vehicleLowerSeatCapQuantity ||
      vehicleInfo?.vehicleUpperSeatCapQuantity ||
      vehicleInfo?.vehicleUpperSeatCapQuantity
        ? formatSeatCapacity
        : "",
    Make:
      vehicleInfo?.vehicleMakeName || vehicleInfo?.vehicleMakeDescription
        ? vehicleMake
        : "",
    "Model Code": vehicleInfo?.vehicleModelCode,
    "Engine Number": vehicleInfo?.vehicleEngineNumber,
    "Licence Expiry": vehicleInfo?.vehicleLicenceEndDate
      ? dayjs(vehicleInfo?.vehicleLicenceEndDate).format("DD/MM/YYYY")
      : "",
    VICO: vehicleInfo?.vehicleVICOUptoDate
      ? dayjs(vehicleInfo?.vehicleVICOUptoDate).format("DD/MM/YYYY")
      : "",
    "TA No": vehicleInfo?.vehicleTypeApprovalNumber,
    // "Float Name": vehicleInfo?.floatName,
    "Doc. No": vehicleInfo?.vehicleRegistrationDocumentTransactionNumber,
    "T.A. Ref. No": vehicleInfo?.taRefNo,
    "Lantau Vehicle": vehicleInfo?.lantanVehicleIndicator,
    "Insp Order": vehicleInfo?.vehicleInspectionOrderId,
    Attribute: vehicleInfo?.attribute,
  };
  return (
    <div>
      <div className="flex">
        <div className="flex-initial text-tropicalRainForest pb-1 ml-[15px] font-calibri font-bold text-sm">
          Create Appointment {">"} Examination Timeslot
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[50%] p-[3px] pl-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-calibri text-[#00AF8F]">
              Vehicle particular
            </h5>
            <div className="min-h-[200px] max-h-[150px] h-[130px] overflow-x-hidden text-black">
              <VehicleParticulars formatData={formatData} />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[3px] pr-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-calibri text-[#00AF8F]">
              Notes and Alerts
            </h5>
            <div className=" min-h-[200px] max-h-[150px] h-[130px] overflow-x-hidden text-black">
              <NotesAndAlerts />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[1px] pl-2">
          <h1>
            <div className=" min-h-[200px] max-h-[290px] h-[240px] overflow-x-hidden text-black">
              <CalendarDates />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[2px] pr-2 ">
          <h1>
            <h5 className="absolute -top-1 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-calibri text-[#00AF8F]">
              Appointment Information
            </h5>
            <div className="min-h-[200px] max-h-[290px] h-[240px] overflow-x-hidden text-black">
              <AppointmentInfo mode={mode} getApiReq={getApiReq} />
            </div>
          </h1>
        </div>
      </div>
      <div className="justify-end">
        <Button
          size="sm"
          className="float-left ml-2 bg-white rounded-sm shadow-sm border-greyBorder border-solid border"
          data-testId="BackButton"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
        <Button
          size="sm"
          className="text-white bg-[orange] float-right mr-2 rounded-sm"
          data-testId="ConfirmButton"
          onPress={handleConfirmPopup}
        >
          Confirm
        </Button>
      </div>
      {showConfirmPopup && (
        <ConfirmPopup
          showConfirmPopup={showConfirmPopup}
          setShowConfirmPopup={setShowConfirmPopup}
          title="Create Appointment"
          handleApi={createAppointment}
        />
      )}
    </div>
  );
}
export default ExamTimeSlot;
