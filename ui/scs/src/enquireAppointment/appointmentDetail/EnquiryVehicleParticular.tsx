import React from "react";
import dayjs from "dayjs";
import { Refresh, Search } from "tabler-icons-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveVehicleId } from "../../attachment/state/attachmentSlice";

export default function EnquiryVehicleParticular() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const vehicleInfo = useSelector(
    (state) => state.enquiryAppointment.enquiryVehicleInfo
  );
  const onSearchClick = () => {
    dispatch(saveVehicleId(vehicleInfo.vehicleId));
    navigate(`/vehicleDetail/${vehicleInfo.vehicleId}`);
  };
  return (
    <div className="p-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="grid grid-col-13 grid-flow-row whitespace-nowrap">
          <div className="flex flex-row mt-[5px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Vehicle Type.
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.vhclTypeCode}
            </div>
          </div>
          <div className="flex flex-row mt-[10px] ">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Vehicle Class
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.vehicleClassId}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Vehicle ID
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.vehicleId}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Reg. Mark
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.regMark}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              PGV Weight
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.pgvWeight}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Seat Capacity
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.seatCapacity}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Model
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.model}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Engine No.
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.engineNumber}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              VICO
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {dayjs(vehicleInfo.vico).format("DD/MM/YYYY")}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Doc. No.
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.docNumber}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Insp. Order
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.inspectionOrder}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              PSL
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">{}</div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Last Update
            </div>
            <div className="text-xs text-left w-[32%] ml-[10px]">
              {dayjs(vehicleInfo.lastUpdated).format("DD/MM/YYYY HH:mm")}
            </div>
          </div>
        </div>

        <div className="grid grid-col-11 grid-flow-row whitespace-nowrap">
          <div className="flex flex-row mt-[5px] ml-[200px]">
            <Search
              size="15"
              style={{
                background: "#00AF8F",
                color: "#FFFFFF",
                borderRadius: "4px",
                marginRight: "2px",
              }}
              onClick={onSearchClick}
            />
            <Refresh
              size={15}
              style={{
                background: "#00AF8F",
                color: "#FFFFFF",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="flex flex-row  mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Chassis No.
            </div>
            <div className="text-xs text-left w-[45%] ml-[10px]">
              {vehicleInfo.chassisNumber}
            </div>
          </div>
          <div className="flex flex-row  mt-[10px] mb-5">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              C&E No.
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.ceNumber}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Manu.Year
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">{}</div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Make
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.make}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Model Code
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.modelCode}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Licence Expiry
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {dayjs(vehicleInfo.licenceExpiry).format("DD/MM/YYYY")}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              T.A. No.
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.taNumber}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Lantau Vehicle
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.lantauVehicle}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Attribute
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.attribute}
            </div>
          </div>
          <div className="flex flex-row mt-[10px] mb-6">
            <div className="text-xs text-left font-bold font-[unset] w-[28%]">
              Cancel Reason
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {vehicleInfo.cancelReason}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
