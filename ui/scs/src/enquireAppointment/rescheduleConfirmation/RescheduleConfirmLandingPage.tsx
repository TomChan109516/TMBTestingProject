
import { Button } from "@nextui-org/react";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { theme } from '../../common/themes/themeConfig'
import { REPRINT_CERTIFICATE } from "../../constants/urlConstants";
import VehicleParticulars from "../../createAppointment/examination/VehicleParticulars";
import { axiosGetPDF } from "../../utils/axiosInstance";
import RescheduleAppointmentInfo from "../rescheduleAppontment/RescheduleAppointmentInfo";

function RescheduleAppointmentLandingPage() {
  const  vehicleInfo  = useSelector((state) => state.enquiryAppointment.enquiryVehicleInfo);
  const  appointInfo  = useSelector((state) => state.enquiryAppointment.enquiryAppointmentInfo);
  const navigate = useNavigate();
  const mode = "v";
  const formatData = {
    "Vehicle Type": vehicleInfo.vhclTypeCode,
    "": "",
    "Vehicle Class": vehicleInfo.vehicleClassId,
    "Chassis No": vehicleInfo.chassisNumber,
    "Vehicle Id": vehicleInfo.vehicleId,
    "C&E No": vehicleInfo.ceNumber,
    "Reg. Mark": vehicleInfo.regMark,
    PGVWeight: vehicleInfo.pgvWeight,
    "Manu Year": vehicleInfo.manuYear,
    "Seat Capacity": vehicleInfo.seatCapacity,
    Make: vehicleInfo.make,
    Model: vehicleInfo.model,
    "Model Code": vehicleInfo.modelCode,
    "Engine Number": vehicleInfo.engineNumber,
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

  const handleAppointmentLetter = async () => {
    try {
      const response = await axiosGetPDF(
        REPRINT_CERTIFICATE + appointInfo.appointmentNumber
      );
      // Create a Blob from the PDF Stream
      const file = new Blob([response], { type: "application/pdf" });
      // Build a URL from the file
      const fileURL = URL.createObjectURL(file);
      // Open the URL on new Window
      window.open(fileURL);
    } catch (error) {
      console.log(error.message);
      // setShowApiError(true);
      //   if (!error.response) {
      //     setShowApiError(true);
      //     setApiErrorData('Server Error');
      //   } else {
      //     if (error.response.status === 400) {
      //       setApiErrorData(error.message);
      //     } else if (error.response.status === 500) {
      //       setApiErrorData('500 - Internal Error');
      //     } else {
      //       setApiErrorData(error.response.status);
      //     }
      //   }
    }
  };
  const [appointSuccess, setAppointSuccess] = useState(true);

  const handleClose = () => {
    setAppointSuccess(false);
  };
  const handleAnotherAppointment = () => {
    navigate("/createAppointPage");
  };
  return (
    <>
      <div className="flex">
        <div className={`flex-initial text-[${theme?.colors?.lightGreen}] p-[10px] ml-[15px] font-bold text-sm`}>
         Appointment Enquiry {">"} RescheduleConfirmation
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[50%] p-[5px] pl-2 ">
          <h1>
            <h5 className={`absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[${theme?.colors?.persianGreen}]`}>
              Appointment Information
            </h5>
            <div className="min-h-[30px] max-h-[380px] h-[354px] overflow-x-hidden text-black">
              <RescheduleAppointmentInfo mode={mode} />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[5px] pr-2 ">
          <h1>
            <h5 className={`absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[${theme?.colors?.persianGreen}]`}>
              Vehicle particular
            </h5>
            <div className=" min-h-[350px] max-h-[380px] h-[350px]overflow-x-hidden text-black">
              <VehicleParticulars formatData={formatData} />
            </div>
          </h1>
        </div>
      </div>
      <div className=" float-right justify-end mr-2">
        <Button
          size="sm"
          radius="none"
          className="text-[10px] text-[#00AF8F] bg-[#e3f9ff] font-[unset] font-bold mr-[5px] rounded-sm"
          onClick={handleAnotherAppointment}
        >
          Another Appointment
        </Button>
        <Button
          size="sm"
          radius="none"
          className="text-white bg-[orange] font-[unset] text-[10px] rounded-sm"
          onClick={handleAppointmentLetter}
        >
          Appointment Letter
        </Button>
      </div>
      {appointSuccess && (
        <div className="w-[320px] absolute right-0 mr-5 mt-10 pb-2 border border-solid border-[#eedfdf] bg-[white]">
          <p className="mt-3">
            <span className="flex font-bold text-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#00AF8F"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
              Appointment rescheduled Successfully{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth={1}
                stroke="currentColor"
                className="w-5 h-5 ml-12 -mt-1"
                onClick={handleClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </p>
          <p className="text-xs -ml-[50px]">
            The appointment has been created Successfully
          </p>
        </div>
      )}
    </>
  );
}

export default RescheduleAppointmentLandingPage;
