import React, { useState } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import AmendVehicleParticulars from "./AmendVehicleParticulars";
import AmendAppointmentDetails from "./AmendAppointmentDetails";
import { Button } from "@nextui-org/react";
import { saveLoader } from "../../login/state/loginSlice";
import { useDispatch } from "react-redux";
import { axiosPostMessage } from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import {AMENDAPPOINTMENTDATA} from '../../constants/urlConstants'

function AmendAttachment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vehicleInfo = useSelector(
    (state) => state.enquiryAppointment.enquiryVehicleInfo
  );
  const [primaryCode, setPrimaryCode] = useState("");
  const appointInformation = useSelector(
    (state) => state.enquiryAppointment.enquiryAppointmentInfo
  );
  const saveAmendDetails = useSelector(
    (state) => state.enquiryAppointment.saveAmendDetails
  );

  const [suppCode, setSuppCode] = useState("");
  const formatData = {
    "Vehicle Type": "Valid",
    " ": " ",

    "Vehicle Class": vehicleInfo.vehicleClassId,
    "Sub-Class": "",
    "Chassis No": vehicleInfo.chassisNumber,
    "": " ",
    "Vehicle Id": vehicleInfo.vehicleId,
    "   ":" ",
    "Reg. Mark": vehicleInfo.regMark,
     "     ":"",
    PGVWeight: vehicleInfo.pgvWeight,
    "Manu Year": vehicleInfo.manuYear,

    "  ":" ",
    "    ":" ",
    "Seat Capacity": vehicleInfo.seatCapacity,
    "      ":"",
    Make: vehicleInfo.make,
    Model: vehicleInfo.model,
    "Engine No.": vehicleInfo.engineNumber,
    "Licence Expiry": dayjs(vehicleInfo.licenceExpiry).format("DD/MM/YYYY"),
    VICO: dayjs(vehicleInfo.vico).format("DD/MM/YYYY"),
    "TA No": vehicleInfo.taNumber,
    "Doc No": vehicleInfo.docNumber,
    "Lantau Vehicle": vehicleInfo.lantauVehicle,
    "Insp Order": vehicleInfo.inspectionOrder,
    Attribute: vehicleInfo.attribute,
    PSL: vehicleInfo.psl,
    "Cancel Reason": vehicleInfo.cancelReason,
    "Last Updated": dayjs(vehicleInfo.lastUpdated).format("DD/MM/YYYY HH:MM"),
  };
  const updatePrimaryCode = (code) => {
    setPrimaryCode(code);
  };
  const updateSuppCode = (code) => {
    setSuppCode(code);
  };
  const handleClose = () => {
    navigate(`/appointmentDetail/${appointInformation.appointmentNumber}`);
  };
  const handleAmendSave = async () => {    
    const searchData = {
      appointmentNumber: appointInformation.appointmentNumber,
      primaryExamCode: primaryCode,
      supplementaryExamCode: suppCode,
      examFee: 585,
      // appointInformation.examfee?appointInformation.examfee:0,
      contactNumber: saveAmendDetails.contactNumber
        ? saveAmendDetails.contactNumber
        : appointInformation.contactNumber,
      contactPerson: saveAmendDetails.contactPerson
        ? saveAmendDetails.contactPerson
        : appointInformation.contactPerson,
      remarks: saveAmendDetails.remarks
        ? saveAmendDetails.remarks
        : appointInformation.remarks,
    };
    const url = AMENDAPPOINTMENTDATA;
    try {
      dispatch(saveLoader(true));
      const response = await axiosPostMessage(url, searchData);
      console.log(response);
      if(response.message === "Appointment Amended Successfully." ){
        navigate(`/appointmentDetail/${appointInformation.appointmentNumber}`);
      }
      dispatch(saveLoader(false));
    } catch (error) {
      dispatch(saveLoader(false));
      console.log(error.message, " ", error.response.data);
    }
  };
  return (
    <>
      <div className="flex">
        <div className="flex-initial text-[#0a923d] p-[10px] ml-[15px] font-bold text-sm">
          Create Appointment {">"} Examination
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[50%] p-[5px] pl-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Appointment Information
            </h5>
            <div className="min-h-[420px] max-h-[420px] h-[420px] overflow-x-hidden text-black">
              <AmendAppointmentDetails
                updatePrimaryCode={updatePrimaryCode}
                updateSuppCode={updateSuppCode}
              />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[5px] pr-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Vehicle particular
            </h5>
            <div className=" min-h-[420px] max-h-[420px] h-[420px]overflow-x-hidden text-black">
              <AmendVehicleParticulars formatData={formatData} />
            </div>
          </h1>
        </div>
      </div>
      <div className="float-right">
        <Button
          className="bg-[#e4e4e7] mr-3 fontsize-13px h-8"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          className="bg-[#00AF8F] mr-3 fontsize-13px text-white h-8"
          onClick={handleAmendSave}
        >
          Save
        </Button>
      </div>
    </>
  );
}

export default AmendAttachment;
