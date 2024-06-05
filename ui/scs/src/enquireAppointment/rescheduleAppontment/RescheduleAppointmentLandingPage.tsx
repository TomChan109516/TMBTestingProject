import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import VehicleParticulars from "../../createAppointment/examination/VehicleParticulars";
import NotesAndAlerts from "../../createAppointment/examination/NotesAndAlerts";
import CalendarDates from "../../examinationTimeSlot/timeLine/CalendarDates";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { saveLoader } from "../../login/state/loginSlice";
import { saveCreateAppointmentResponse } from "../../examinationTimeSlot/state/examTimeSlotSlice";
import { useNavigate } from "react-router";
import RescheduleAppointmentInfo from "./RescheduleAppointmentInfo";
import { reschedule } from "./service/reschedule.service";
import { saveRescheduledAppointmentResponse } from "../state/enquiryAppointmentSlice";

function RescheduleAppointmentLandingPage() {
  const dispatch = useDispatch();
  const mode = "e";
  const [requestData, setRequestData] = useState({});
  const navigate = useNavigate();
  const getApiReq = (data) => {
    setRequestData(data);
  };
  const feature: string = "reschedule";
  const rescheduleAppointment = async () => {
    try {
      dispatch(saveLoader(true));
      event.preventDefault();
      const response = await reschedule(requestData);
      dispatch(saveRescheduledAppointmentResponse(response));
      navigate("/rescheduleConfirm");
      dispatch(saveLoader(false));
    } catch (error) {
      // setShowApiError(true);
      dispatch(saveLoader(false));
      // if (!error.response) {
      //   setApiErrorData('Server Error');
      // } else {
      //   if (error.response.status === 401) {
      //     setApiErrorData(error.message);
      //   } else if (error.response.status === 500) {
      //     setApiErrorData('500 - Internal Error');
      //   } else if (error.response.status === 400) {
      //     setApiErrorData('400 - Bad Request');
      //   } else if (error.response.status === 404) {
      //     setApiErrorData('404 - website could not found on their server');
      //   } else {
      //     setApiErrorData(error.response.status);
      //   }
      // }
    }
  };
  const vehicleInfo = useSelector(
    (state) => state.enquiryAppointment.enquiryVehicleInfo
  );
  const formatData = {
    "Vehicle Type": vehicleInfo?.vhclTypeCode,
    "": "",
    "Vehicle Class": vehicleInfo.vehicleClassId,
    "Chassis No": vehicleInfo.chassisNumber,
    "Vehicle Id": vehicleInfo.vehicleId,
    "C&E No": vehicleInfo.ceNumber,
    "Reg. Mark": vehicleInfo.regMark,
    "Current Reg. Mark": vehicleInfo.regMark,
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
    "Float Name": vehicleInfo.floatName,
    "Lantau Vehicle": vehicleInfo.lantauVehicle,
    "Insp Order": vehicleInfo.inspectionOrder,
    Attribute: vehicleInfo.attribute,
  };
  return (
    <>
      <div className="flex">
        <div className="flex-initial text-[#0a923d] p-[3px] ml-[15px] font-bold text-sm">
          Appointment Enquiry {">"} Reschedule Appointment
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[50%] p-[3px] pl-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Vehicle particular
            </h5>
            <div className="min-h-[200px] max-h-[150px] h-[130px] overflow-x-hidden text-black">
              <VehicleParticulars formatData={formatData} />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[3px] pr-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Notes and Alerts
            </h5>
            <div className=" min-h-[200px] max-h-[150px] h-[130px] overflow-x-hidden text-black">
              <NotesAndAlerts feature={feature} />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[1px] pl-2">
          <h1>
            {/* <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F] z-10">
            Recent Appointment
          </h5> */}
            <div className=" min-h-[200px] max-h-[290px] h-[240px] overflow-x-hidden text-black">
              <CalendarDates />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[2px] pr-2 ">
          <h1>
            <h5 className="absolute -top-1 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Appointment Information
            </h5>
            <div className="min-h-[200px] max-h-[290px] h-[240px] overflow-x-hidden text-black">
              <RescheduleAppointmentInfo getApiReq={getApiReq} mode={mode} />
            </div>
          </h1>
        </div>
      </div>
      <div className="justify-end">
        <Button
          size="sm"
          className="float-left ml-2 bg-white rounded-sm shadow-sm border-greyBorder border-solid"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
        <Button
          size="sm"
          className="text-white bg-[orange] float-right mr-2 rounded-sm"
          onPress={rescheduleAppointment}
        >
          Confirm
        </Button>
      </div>
    </>
  );
}

export default RescheduleAppointmentLandingPage;
