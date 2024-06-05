import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import VehicleModificationHistory from "./VehicleModificationHistory";

function VehicleParticularsPopup(props) {
  const vehicleParticularsData = props.formatData;
  const [showVehicleHistory, setShowVehicleHistory] = useState(false);
  const handleClose = () => {
    props.handleclosePopup(false);
  };
  const handleVehicleModificationPopup = () => {
    setShowVehicleHistory(true);
  };
  // const handleExpandVehicleModificationHistory = () => {
  //   setshowVehicleModificationHistory(true);
  // };
  //  const vehicleModificationHandler = () => {
  //   navigate('/vehicleModificationHistory');
  //  }
  return (
    <div>
      <Modal size="5xl" isOpen={props.openPopup} onClose={handleClose}>
        <ModalContent>
          {() => (
            <>
              <div className="flex flex-col text-sm p-2 pl-5 border-b border-[lightgray]">
                {" "}
                Vehical Particular
              </div>
              <ModalBody>
                <div className="grid grid-cols-1 md:grid-cols-4">
                  {vehicleParticularsData &&
                    Object.keys(vehicleParticularsData).map(
                      (vehicleParticular, VPkey) => {
                        return (
                          <div
                            className="pt-1 text-[12px] flex flex-col-2"
                            key={VPkey}
                          >
                            <span className="text-[11px] text-black font-bold w-[100px] text-left">
                              {vehicleParticular}
                            </span>
                            <span className="text-[11px] text-black text-left">
                              {vehicleParticularsData[vehicleParticular]}
                            </span>
                          </div>
                        );
                      }
                    )}
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="float-right">
                  <Button
                    data-testid="close"
                    name="Close"
                    className="float-right text-[black] normal-case border-solid border-[lightgray] border-[1px] h-8"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    data-testid="close"
                    name="Close"
                    className="bg-[#B21807] text-[#FFFFFF]  font-bold rounded h-8"
                    onClick={handleVehicleModificationPopup}
                  >
                    Modification History
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {showVehicleHistory && (
        <VehicleModificationHistory
          showVehicleHistory={showVehicleHistory}
          setShowVehicleHistory={setShowVehicleHistory}
        />
      )}
    </div>
  );
}

export default VehicleParticularsPopup;
