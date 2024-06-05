import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Chip, Input } from "@nextui-org/react";

function AmendVehicleParticulars(props) {
  const vehicleParticularsData = props.formatData;

  const vehicleInfo = useSelector(
    (state) => state.enquiryAppointment.enquiryVehicleInfo
  );

  const [showApiError, setShowApiError] = useState(false);

  useEffect(() => {
    if (Object.keys(vehicleInfo).length === 0) {
      setShowApiError(true);
    }
  }, [vehicleInfo, vehicleParticularsData]);

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
            Object.keys(vehicleParticularsData).map(
              (vehicleParticular, VPkey) => {
                return (
                  <div className="..." key={VPkey}>
                    <span className="w-1/2 text-[11px] font-[unset] text-left float-left  text-black font-bold " data-testid="amendVPLabel">
                      {vehicleParticular}
                    </span>
                    <span className="w-1/2 text-[11px] font-[unset] text-left float-right  text-black" data-testid="amendVPValue">
                      {vehicleParticular === "Reg. Mark" ? (
                        <>
                          <span>
                            <Input
                              classNames={{
                                base: "text-[6px] -mt-[10px]",
                              }}
                              labelPlacement="outside-left"
                              label={vehicleInfo.regMark}
                              size="sm"
                              radius="sm"
                              variant="bordered"
                              type="text"
                              id="contactPerson"
                              name="regMark"
                              data-testid="regMark"
                              value={vehicleInfo.regMark}
                            ></Input>
                          </span>
                        </>
                      ) : (
                        vehicleParticularsData[vehicleParticular]
                      )}
                    </span>
                  </div>
                );
              }
            )}
        </div>
      {/* )} */}
    </div>
  );
}

export default AmendVehicleParticulars;

AmendVehicleParticulars.propTypes = {
  formatData: PropTypes.object,
  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object,
};
