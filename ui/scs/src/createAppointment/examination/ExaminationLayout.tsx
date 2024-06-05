import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button, Input, select } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Examination from "./Examination";
import NotesAndAlerts from "./NotesAndAlerts";
import RecentAppoint from "./RecentAppointTable";
import VehicleParticulars from "./VehicleParticulars";
import {
  saveExamCodeDetails,
  saveVehicleInfo,
} from "../state/createAppointmentSlice";
import {
  getRecentAppointmentsById,
  getVehicleParticularsById,
} from "./services/examinationService";
import { IVehicleInfo } from "../model/createAppointmentSliceModel";

function ExamMain() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [vehicleInfo, setVehicleInfo] = useState<IVehicleInfo>({});
  const [centre, setCentre] = useState("");
  const [centreId, setCentreId] = useState("");
  const [primaryCode, setPrimaryCode] = useState([]);
  const [suppCode, setSuppCode] = useState([]);
  const [recentAppointments, setRecentAppointments] = useState([]);
  const [inspectionTypeIds, setInspectionTypeIds] = useState([]);
  const [reqDate, setReqDate] = useState(new Date());
  const [examFee, setExamFee] = useState("");
  const vehicleId = new URLSearchParams(window.location.search).get(
    "vehicleId"
  );
  const updateCentre = (centreData) => {
    setCentre(centreData);
  };
  const updateCentreId = (centreIdData) => {
    setCentreId(centreIdData);
  };
  const updatePrimaryCode = (code) => {
    setPrimaryCode(code);
  };
  const updateSuppCode = (code) => {
    setSuppCode(code);
  };
  const updateDate = (dateVal) => {
    setReqDate(dateVal);
  };
  const updateInspectionTypeIds = (inspectionTypeIds) => {
    setInspectionTypeIds(inspectionTypeIds);
  };
  const updateExamFee = (examFee) => {
    setExamFee(examFee);
  };
  const handleExamTimeSlot = () => {
    const examDetails = {
      centre,
      centreId,
      examDate: dayjs(reqDate).format("YYYY-MM-DD"),
      primaryCode,
      suppCode,
      inspectionTypeIds,
    };
    dispatch(saveExamCodeDetails(examDetails));
    navigate(
      `/examSlot?vehicleId=${vehicleId}&centreId=${centreId}&InspectionTypeId=${inspectionTypeIds}&examDate=${dayjs(
        reqDate
      ).format("YYYY-MM-DD")}&vehicleClassId=${
        vehicleInfo.vehicleClassId
      }&primaryCode=${primaryCode}&supplementaryCode=${suppCode}&centre=${centre}&examFee=${examFee}`
    );
  };
  useEffect(() => {
    loadVehicleParticulars();
    getRecentAppointments();
  }, []);
  const loadVehicleParticulars = async () => {
    const response = await getVehicleParticularsById(vehicleId);
    setVehicleInfo(response.vehicleDetails[0]);
    dispatch(saveVehicleInfo(response.vehicleDetails[0]));
  };
  const getRecentAppointments = async () => {
    const response = await getRecentAppointmentsById(vehicleId);
    setRecentAppointments(response.appointmentDetails);
  };
  const changeRegInputValue = (e) => {
    const value = e.target.value;
    setInputRegValue(value);
  };

  const [inputRegValue, setInputRegValue] = useState(
    vehicleInfo.vehicleRegMarkNumber
  );
  const regMark = (
    <Input
      isRequired
      radius="none"
      className="w-[80px] h-1 mt-[-7px]"
      type="text"
      variant="bordered"
      size="sm"
      value={
        vehicleInfo.vehicleRegMarkNumber
          ? vehicleInfo.vehicleRegMarkNumber
          : inputRegValue
      }
      onInput={(e) => changeRegInputValue(e)}
    />
  );
  const formatSeatCapacity = `L:${vehicleInfo?.vehicleLowerSeatCapQuantity};U:${vehicleInfo?.vehicleUpperSeatCapQuantity};S:${vehicleInfo?.vehiclStandardCapQuantity}`;
  const vehicleMake = `${vehicleInfo?.vehicleMakeName}-${vehicleInfo?.vehicleMakeDescription}`;
  const formatData = {
    "Vehicle Class": vehicleInfo?.vehicleClassCode,
    "Chassis No": vehicleInfo?.vehicleChasisNumber,
    "Vehicle Id": vehicleInfo?.vehicleValidId,
    "C&E No": vehicleInfo?.cERefNumber,
    "Reg. Mark": vehicleInfo?.vehicleRegMarkNumber,
    "Current Reg. Mark": regMark,
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
    Model: vehicleInfo?.vehicleModelName,
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
    <>
      <div className="flex">
        <div className="flex-initial text-tropicalRainForest pb-1 ml-[15px] font-calibri font-bold text-sm">
          Create Appointment {">"} Examination
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[50%] p-[5px] pl-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F] font-calibri">
              Vehicle particular
            </h5>
            <div className="min-h-[230px] max-h-[250px] h-[230px] overflow-x-hidden text-black">
              <VehicleParticulars formatData={formatData} />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[3px] pr-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F] font-calibri">
              Notes and Alerts
            </h5>
            <div className=" min-h-[180px] max-h-[200px] h-[180px] overflow-x-hidden text-black">
              <NotesAndAlerts />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[3px] pl-2">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F] z-10 font-calibri">
              Recent Appointment
            </h5>
            <div className=" min-h-[180px] max-h-[200px] h-[180px] overflow-x-hidden text-black">
              <RecentAppoint recentAppointments={recentAppointments} />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[3px] pr-2 -mt-[50px]">
          <h1>
            <div className="min-h-[230px] max-h-[250px] h-[230px] overflow-x-hidden text-black font-calibri">
              <Examination
                updateCentre={updateCentre}
                updatePrimaryCode={updatePrimaryCode}
                updateSuppCode={updateSuppCode}
                updateDate={updateDate}
                updateCentreId={updateCentreId}
                updateInspectionTypeIds={updateInspectionTypeIds}
                updateExamFee={updateExamFee}
              />
            </div>
          </h1>
        </div>
      </div>
      <div className="justify-end">
        <Button
          radius="none"
          size="sm"
          onClick={() => navigate(-1)}
          className="float-left bg-white shadow-sm ml-2 rounded-sm  border-greyBorder border-solid border"
        >
          Back
        </Button>
        <Button
          disabled={primaryCode.length === 0}
          radius="none"
          size="sm"
          onClick={handleExamTimeSlot}
          className={`float-right text-white shadow-sm mr-2 rounded-sm ${
            primaryCode.length > 0 ? "bg-[orange]" : ""
          }`}
        >
          Continue
        </Button>
      </div>
    </>
  );
}
export default ExamMain;
