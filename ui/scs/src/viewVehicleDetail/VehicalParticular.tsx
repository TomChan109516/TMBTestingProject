import PropTypes from "prop-types";
import React from "react";

function VehicleParticulars(props) {
  const vehicleParticularsData = props.formatData;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 w-[100%] p-3">
        {vehicleParticularsData &&
          Object.keys(vehicleParticularsData).map(
            (vehicleParticular, VPkey) => {
              return (
                <div className="..." key={VPkey}>
                  <span
                    className="w-1/2 text-[11px] font-[unset] text-left float-left  text-black font-bold"
                    data-test-id="vehicleParticularsLabel"
                  >
                    {vehicleParticular}
                  </span>
                  <span
                    className="w-1/2 text-[11px] font-[unset] text-left float-right  text-black"
                    data-test-id="vehicleParticularsValue"
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

VehicleParticulars.propTypes = {
  formatData: PropTypes.object,
};
