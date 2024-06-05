import React, { useEffect, useState } from "react";
import { ArrowsMaximize, Refresh } from "tabler-icons-react";
import dayjs from "dayjs";
import VehicleParticulars from "./VehicalParticular";
import VehicleParticularsPopup from "./VehicalParticularPopUp";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { axiosGet } from "../utils/axiosInstance";
import { GET_VEHICLEPARTICULAR } from "../constants/urlConstants";
import { useSelector } from "react-redux";
import NotesAndAlerts from "./Notes&Alerts";
import RegMarkPopup from "./RegMarkPopup";
import EditVehicleMessage from "../vehicle/EditVehicleMessage";
import OperationRemarkPopup from "../viewVehicleDetail/ReactEditor/TextEditor";
import ViewMasterVechiclepopup from "../vechicleMerge/ViewMasterVechiclepopup";

function ViewVehicleLayout() {
  const navigate = useNavigate();
  const [openPopup, vehicalOpenPopup] = useState(false);
  const [operationRemark, setOperationRemark] = useState(false);
  const [vehicleInfo, SetVehicleInfo] = useState({});
  const [regMarkPopup, setRegMarkPopup] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  // const { ViewVehicleLayout } = useSelector(
  //   (state) => state.viewVehicle
  // );

  const [showViewMasterVechiclepopup, setViewMasterVechiclepopup] = useState(false);
  
    const handleViewMasterVechiclePopup = () => {
        setViewMasterVechiclepopup(true);
      };
      
  const vehicleIDNumber = useSelector(
    (state) => state.attachment.saveVehicleId
  );

  useEffect(() => {
    loadVehicleParticular();
  }, [vehicleIDNumber]);

  const loadVehicleParticular = async () => {
    try {
      const response = await axiosGet(
        GET_VEHICLEPARTICULAR + `${vehicleIDNumber}`
      );
      console.log("getvehicleparticular response", response);
      SetVehicleInfo(response);
    } catch (error) {
      console.log(error);
    }
  };

  const formatData = {
    "Vehicle Type": vehicleInfo.vhclTypeCode,
    "Ref No": vehicleInfo.referenceNumber,
    "Status Code": vehicleInfo.statusCode,
    "Rated Power": vehicleInfo.ratedPower,
    "Vehicle Class": vehicleInfo.vehicleClassId,
    "Vehicle Id": vehicleInfo.vehicleId,
    "Weight Code": vehicleInfo.weightCode,
    "PGV Weight": vehicleInfo.pgvWeight,
    "Chassis No": vehicleInfo.chassisNumber,
    "Engine No.": vehicleInfo.engineNumber,
    "PCV Weight": vehicleInfo.pcvWeight,
    "LUG Weight": vehicleInfo.lugWeight,
    "Float Name": vehicleInfo.floatName,
    "TA No": vehicleInfo.taNumber,
    "Axle 1": vehicleInfo.axle1Weight,
    "Axle 2": vehicleInfo.axle2Weight,
    "Reg. Mark": vehicleInfo.regMark,
    "Country Code": vehicleInfo.countryCode,
    "Axle 3": vehicleInfo.axle3Weight,
    "Axle 4": vehicleInfo.axle4Weight,
    Make: vehicleInfo.make,
    Model: vehicleInfo.model,
    "Axle 5": vehicleInfo.axle5Weight,
    "Axle 6": vehicleInfo.axle6Weight,
    "Model Code": vehicleInfo.modelCode,
    "Body Type": vehicleInfo.bodyType,
    "Axle 7": vehicleInfo.axle7Weight,
    "": "",
    "Manu Year": vehicleInfo.manufactureYear,
    "First Reg.Date": dayjs(vehicleInfo.firstRegDate).format("DD/MM/YYYY"),
    "Lantau Vehicle": vehicleInfo.lantauVehicle,
    "Private Road Vehicle": vehicleInfo.privateRoadVehicle,
    "Licence Expiry": dayjs(vehicleInfo.licenceExpiry).format("DD/MM/YYYY"),
    VICO: dayjs(vehicleInfo.vico).format("DD/MM/YYYY"),
    "Hybrid Vehicle": vehicleInfo.hybridVehicle,
    "Left Hand Steering": vehicleInfo.leftHandSteering,
    "Engine Type": vehicleInfo.engineType,
    "Engine Size": vehicleInfo.engineSize,
    PVRM: vehicleInfo.pvrmTrimText,
    "Displayed Reg. Mark": vehicleInfo.displayRegMark,
    "C&E No": vehicleInfo.ceNumber,
    "Reg. Doc. No.": vehicleInfo.docNumber,
    "PVRM Line 1": vehicleInfo.pvrmLine1Text,
    "PVRM Line 2": vehicleInfo.pvrmLine2Text,
    Permit: vehicleInfo.permit,
    PSL: vehicleInfo.psl,
    "Primary Color": vehicleInfo.primaryColor,
    "Secondary Color": vehicleInfo.secondaryColor,
    "Ad Approval Date": dayjs(vehicleInfo.adApprovalDate).format("DD/MM/YYYY"),
    "Renewal Date": dayjs(vehicleInfo.renewalDate).format("DD/MM/YYYY"),
    "Tyre Size (front)": vehicleInfo.frontTireSize,
    "Tyre Size (Rear)": vehicleInfo.rearTireSize,
    "Seat Capacity": vehicleInfo.seatCapacity,
    "Last Update": dayjs(vehicleInfo.lastUpdated).format("DD/MM/YYYY"),
    "Size (H)": "",
    "Size (L)": "",
    "Cancel Reason": vehicleInfo.cancelReason,
    "Insp Order": vehicleInfo.inspectionOrder,
    "Size (W)": "",
  };
  const handleExpandVehicalParticular = () => {
    vehicalOpenPopup(true);
  };
  const handleclosePopup = (data) => {
    vehicalOpenPopup(data);
  };
  const operationRemarkClose = () => {
    setOperationRemark(false);
  };
  const handleOperationRemarkPopup = () => {
    setOperationRemark(true);
  };
  const handleAttachement = () => {
    navigate("/VehicleAttachment");
  };

  const vehicleMessage = () => {
    setShowMessagePopup(true);
  };

  const handleRegMarkPopup = () => {
    setRegMarkPopup(true);
  };

  const AmendnonVallidHandler = () => {
    navigate("/amendNonValidVehicle");
  };
  

  return (
    <>
      <div className=" w-[98%] ml-3">
        <div className=" w-1/2 float-left text-[#007F62] font-bold text-sm text-left">
          Vehicle Enquiry {">"} Vehicle Detail
        </div>
        <div className="float-right pt-[15px] pr-[5px]">
          <Refresh
            size="20"
            style={{
              background: "#00AF8F",
              color: "#FFFFFF",
              borderRadius: "4px",
            }}
            onClick={handleRegMarkPopup}
          />
        </div>

        {regMarkPopup && (
          <RegMarkPopup
            regMarkPopup={regMarkPopup}
            setRegMarkPopup={setRegMarkPopup}
            // handleclosePopup={handleclosePopup}
          />
        )}
      </div>
      <br />

      <div className="flex flex-wrap mt-3">
        <div className="w-[50%] p-[5px] pl-2 ">
          <h1>
            <h5 className="absolute -top-2 start-2 pl-[5px] pr-[20px] text-sm/[13px] text-[#00AF8F]">
              <div>
                Vehicle Particular
                <ArrowsMaximize
                  size="22"
                  color="black"
                  className="pt-2 -mt-3 pl-2 relative -top-[10px] left-[102px]"
                  data-testid="handleExpandPrimaryCodes"
                  onClick={handleExpandVehicalParticular}
                ></ArrowsMaximize>
              </div>
            </h5>
            <div className="min-h-[380px] max-h-[380px] h-[380px] overflow-x-hidden text-black">
              <VehicleParticulars formatData={formatData} />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[5px] pr-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Notes and Alerts
            </h5>
            <div className=" min-h-[380px] max-h-[380px] h-[380px]overflow-x-hidden text-black">
              <NotesAndAlerts />
            </div>
          </h1>
        </div>
      </div>
      <div className="text-right mr-2 mt-3">
        <Button
          type="button"
          className="bg-[#F0FFFF] ml-[5px] text-[#3EB489] border-[#75c3a5] font-bold rounded"
          size="sm"
          variant="bordered"
          onClick={handleAttachement}
        >
          Attachment
        </Button>
        <Button
          type="button"
          className="bg-[#F0FFFF] ml-[5px] text-[#3EB489] border-[#75c3a5] font-bold rounded"
          size="sm"
          variant="bordered"
          onClick={AmendnonVallidHandler}
        >
          Amend
        </Button>

        <Button
          type="button"
          className="bg-[#F0FFFF] ml-[5px] text-[#3EB489] border-[#75c3a5] font-bold rounded"
          size="sm"
          variant="bordered"
          onClick={vehicleMessage}
        >
          Message
        </Button>
        {showMessagePopup && (
          <EditVehicleMessage
            showMessagePopup={showMessagePopup}
            setShowMessagePopup={setShowMessagePopup}
            title="Message"
          />
        )}

        <Button
          type="button"
          className="bg-[#F0FFFF] ml-[5px] text-[#3EB489] border-[#75c3a5] font-bold rounded"
          size="sm"
          variant="bordered"
          onClick={handleOperationRemarkPopup}
        >
          Operation Remark
        </Button>
        <Button
          type="button"
          className="ml-[5px] bg-[#00AF8F] text-white rounded border-[#75c3a5]"
          size="sm"
          variant="bordered"
          onClick={handleViewMasterVechiclePopup}
        >
          Add as Master Vechicle
        </Button>
        <Button
          type="button"
          className="ml-[5px] bg-[#00AF8F] text-white rounded border-[#75c3a5]"
          size="sm"
          variant="bordered"
          onClick={handleViewMasterVechiclePopup}
        >
          Add as Chaild Vechicle
        </Button>
        <Button
          type="button"
          className="ml-[5px] bg-[#00AF8F] text-white "
          size="sm"
          variant="bordered"
          onClick={() => {
            navigate("/vehicleWatchlist");
          }}
        >
          Add To WatchList
        </Button>
        {openPopup && (
          <VehicleParticularsPopup
            formatData={formatData}
            openPopup={openPopup}
            handleclosePopup={handleclosePopup}
          ></VehicleParticularsPopup>
        )}
        {operationRemark && (
          <OperationRemarkPopup
            operationRemark={operationRemark}
            operationRemarkClose={operationRemarkClose}
            chassisNo={vehicleInfo.chassisNumber}
          ></OperationRemarkPopup>
        )}
        {showViewMasterVechiclepopup&& (
        <ViewMasterVechiclepopup
          showViewMasterVechiclepopup={showViewMasterVechiclepopup}
          setViewMasterVechiclepopup={setViewMasterVechiclepopup}
        ></ ViewMasterVechiclepopup>
      )}
      </div>
    </>
  );
}

export default ViewVehicleLayout;
