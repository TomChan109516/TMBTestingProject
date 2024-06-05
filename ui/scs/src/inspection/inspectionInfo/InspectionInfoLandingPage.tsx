import { Button } from "@nextui-org/react";
import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import InspectionVehicleParticulars from "./InspectionVehicleParticulars";
import AppointmentInfo from "./InspectionAppointment";
import InspectionInformation from "./InspectionInformation";

function InspectionInfoLandingPage() {
  const { vehicleInfo } = useSelector((state) => state.createAppointment);
  const navigate = useNavigate();
  const mode = "v";
  const formatData = {
    "Vehicle Type": "Valid",
    "": "",
    "Vehicle Class": vehicleInfo.vehicleClassId,
    "Vehicle Id": vehicleInfo.vehicleId,
    "Reg. Mark": vehicleInfo.regMark,
    "Chassis No": vehicleInfo.chassisNumber,
    Make: vehicleInfo.make,
    "Manu Year": vehicleInfo.manuYear,
    "Engine Number": vehicleInfo.engineNumber,
    Model: vehicleInfo.model,
    "Model Code": vehicleInfo.modelCode,
    "TA No": vehicleInfo.taNumber,
    "Doc No": vehicleInfo.docNumber,
    PCVWeight: vehicleInfo.pgvWeight,
    PGVWeight: vehicleInfo.pgvWeight,
    " ": "",
  };

  return (
    <>
      <div className="flex ">
        <div className="flex-initial text-[#0a923d] p-[10px] ml-[15px] font-bold text-sm">
          Inspection Result {">"} Inspection Information
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[50%] p-[5px] pl-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Appointment Information
            </h5>
            <div className="min-h-[270px] max-h-[270px] h-[270px] overflow-x-hidden text-black">
              <AppointmentInfo mode={mode} />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[3px] pr-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Vehicle Particular
            </h5>
            <div className=" min-h-[450px] max-h-[450px] h-[450px] overflow-x-hidden text-black">
              <InspectionVehicleParticulars formatData={formatData} />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[3px] pl-2 -mt-[175px]">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F] z-10">
              Inspection Information
            </h5>
            <div className=" min-h-[165px] max-h-[165px] h-[165px] overflow-x-hidden text-black">
              <InspectionInformation mode={mode} />
            </div>
          </h1>
        </div>
      </div>
      <div className="float-left">
        <Button
          radius="none"
          size="sm"
          onClick={() => navigate(-1)}
          className="float-left bg-white shadow-sm ml-2 rounded-sm  border-greyBorder border-solid border"
        >
          Close
        </Button>
        <Button
          radius="none"
          size="sm"
          onClick={() => navigate(-1)}
          className="float-right text-white bg-[#d44343] shadow-sm ml-2 rounded-sm"
        >
          Revert Inspection Result
        </Button>
      </div>
      <div className="float-right">
        <Button
          radius="none"
          size="sm"
          className="float-left bg-white shadow-sm ml-2 rounded-sm  border-greyBorder border-solid border"
        >
          Attachment
        </Button>
        <Button
          radius="none"
          size="sm"
          onClick={() => navigate(-1)}
          className="float-left text-white bg-[orange] shadow-sm ml-2 mr-2 rounded-sm"
        >
          Overall Result
        </Button>
        <Button
          radius="none"
          size="sm"
          onClick={() => navigate(-1)}
          className="float-right text-white bg-lightGreen shadow-sm mr-2 rounded-sm"
        >
          Certificate
        </Button>
      </div>
    </>
  );
}

export default InspectionInfoLandingPage;
