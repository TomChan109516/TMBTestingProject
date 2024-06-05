import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Chip } from "@nextui-org/react";

function InspectionVehicleParticulars(props) {
  const vehicleParticularsData = props.formatData;
  const { apiErrorMsg, vehicleInfo } = useSelector(
    (state) => state.createAppointment
  );
  const { enquiryVehicleInfo } = useSelector(
    (state) => state.enquiryAppointment
  );
  const [showApiError, setShowApiError] = useState(false);

  useEffect(() => {
    if (Object.keys(vehicleInfo).length === 0) {
      setShowApiError(true);
    }
    if (
      Object.keys(vehicleInfo).length === 0 &&
      Object.keys(enquiryVehicleInfo).length !== 0
    ) {
      setShowApiError(false);
    }
  }, [enquiryVehicleInfo, vehicleInfo, vehicleParticularsData]);
  return (
    <div>
      {/* {showApiError === true ? (
        <div className="flex gap-4 p-4">
          <Chip color="default">
            {!apiErrorMsg && Object.keys(vehicleInfo).length === 0 ? (
              "Network not reachable"
            ) : (
              <span>{apiErrorMsg}</span>
            )}
          </Chip>
        </div>
      ) : ( */}
      <div className="grid grid-cols-2 gap-3 w-[100%] p-3">
        
        {vehicleParticularsData &&
          Object.keys(vehicleParticularsData)?.map(
            (vehicleParticular, VPkey) => {
              return (
                <div className="..." key={VPkey}>
                  <span
                    className="w-1/2 text-[11px] font-[unset] text-left float-left  text-black font-bold"
                    data-testid="vehicleParticularsLabel"
                  >
                    {vehicleParticular}
                  </span>
                  <span
                    className="w-1/2 text-[11px] font-[unset] text-left float-right  text-black"
                    data-testid="vehicleParticularsValue"
                  >
                    {vehicleParticularsData[vehicleParticular]}
                  </span>
                </div>
              );
            }
          )}
      </div>
      <div className="grid grid-cols-3 w-[650px] ml-2 text-[11px]">
        <div className="...">
          <div className="grid grid-cols-3">
            <div className="... font-bold">No of Axles</div>
            <div className="...">0.010</div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 w-[650px] -ml-2 mt-4 text-[11px]">
          <div className="...">
            <div className="grid grid-cols-3">
              <div className="... font-bold">Axle1</div>
              <div className="...">0.01 </div>
            </div>
          </div>
          <div className="...">
            <div className="grid grid-cols-3 ">
              <div className="... font-bold">Axle2</div>
              <div className="...">0.02 </div>
            </div>
          </div>
          <div className="... ">
            <div className="...">
              <div className="grid grid-cols-3 ">
                <div className="... font-bold">Axle3</div>
                <div className="...">0.03 </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div>
        <div className="grid grid-cols-3 w-[650px] -ml-2 mt-5 text-[11px]">
          <div className="...">
            <div className="grid grid-cols-3">
              <div className="... font-bold">Axle4</div>
              <div className="...">0.04 </div>
            </div>
          </div>
          <div className="...">
            <div className="grid grid-cols-3 ">
              <div className="... font-bold">Axle5</div>
              <div className="...">0.05 </div>
            </div>
          </div>
          <div className="... ">
            <div className="...">
              <div className="grid grid-cols-3 ">
                <div className="... font-bold">Axle6</div>
                <div className="...">0.06 </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div>
        <div className="grid grid-cols-3 w-[650px] mt-5 -ml-2 text-[11px]">
          <div className="...">
            <div className="grid grid-cols-3">
              <div className="... font-bold">Axle7</div>
              <div className="...">0.07 </div>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* )} */}
    </div>
  );
}

export default InspectionVehicleParticulars;

InspectionVehicleParticulars.propTypes = {
  vehicleInfo: PropTypes.object,
  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object,
};
