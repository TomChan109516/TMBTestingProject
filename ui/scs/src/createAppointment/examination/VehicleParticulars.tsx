import React from "react";
import { useSelector } from "react-redux";

function VehicleParticulars(props) {
  const vehicleParticularsData = props.formatData;
  const { apiErrorMsg, vehicleInfo } = useSelector(
    (state) => state.createAppointment
  );
  const { enquiryVehicleInfo } = useSelector((state) => state.enquiryAppointment)

  // const { vehicleClass, chassisNo, vehicleId, ceNumber, regMark, currentRegMark, pgvWeight, manuYear, seatCapacity, make, model, modelCode, engineNumber, licenceExpiry, vico, taNumber, floatName, lantauVehicle, inspectionOrder, attribute } = vehicleFormData;

  // const vehicleParticularsData = {
  //   [vehicleClass]: vehicleInfoData.vehicleClassId,
  //   [chassisNo]: vehicleInfoData.chassisNumber,
  //   [vehicleId]: vehicleInfoData.vehicleId,
  //   [ceNumber]: vehicleInfoData.ceNumber,
  //   [regMark]: vehicleInfoData.regMark,
  //   [currentRegMark]: vehicleInfoData.regMark,
  //   [pgvWeight]: vehicleInfoData.pgvWeight,
  //   [manuYear]: vehicleInfoData.manuYear,
  //   [seatCapacity]: vehicleInfoData.seatCapacity,
  //   [make]: vehicleInfoData.make,
  //   [model]: vehicleInfoData.model,
  //   [modelCode]: vehicleInfoData.modelCode,
  //   [engineNumber]: vehicleInfoData.engineNumber,
  //   [licenceExpiry]: dayjs(vehicleInfoData.licenceExpiry).format('DD/MM/YYYY'),
  //   [vico]: dayjs(vehicleInfoData.vico).format('DD/MM/YYYY'),
  //   [taNumber]: vehicleInfoData.taNumber,
  //   [floatName]: vehicleInfoData.floatName,
  //   [lantauVehicle]: vehicleInfoData.lantauVehicle,
  //   [inspectionOrder]: vehicleInfoData.inspectionOrder,
  //   [attribute]: vehicleInfoData.attribute
  // };

  return (
    <div>
        <div className="grid grid-cols-2 gap-3 w-[100%] p-3">
          {vehicleParticularsData &&
            Object.keys(vehicleParticularsData).map(
              (vehicleParticular, VPkey) => {
                return (
                  <div className="..." key={VPkey}>
                    <span
                      className={vehicleParticular === "Current Reg. Mark"?"w-[40%] text-xs text-left float-left font-calibri text-black font-bold" :"w-[35%] text-xs text-left float-left font-calibri  text-black font-bold"}
                      data-testid="vehicleParticularsLabel"
                    >
                      {vehicleParticular}
                    </span>
                    <span
                      className={vehicleParticular === "Current Reg. Mark"?"w-[60%] text-xs font-calibri text-left float-right  text-black":"w-[65%] text-xs font-calibri text-left float-right  text-black"}
                      data-testid="vehicleParticularsValue"
                    >
                      {vehicleParticularsData[vehicleParticular]}
                    </span>
                  </div>
                );
              }
            )}
        </div>
    </div>
  );
}

export default VehicleParticulars;

