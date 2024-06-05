import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../state/ShowTabsSlice";
import { startInspection } from "../../vehicleRegistration/headLamp/service/headlamp.service";

const ConfirmPhotoCapturePopup = ({ closePopup }) => {
  const dispatch = useDispatch();
  const [currentStation, setCurrentStation] = useState();

  const appointmentId = useSelector((state: any) => state.data.appointmentId);
  const appData = useSelector((state: any) => state.data.regdata);

  const inspectionData = {
    userID: "1",
    appointmentNumber: appointmentId,
    laneId: "30",
    stationId: currentStation,
    InspectionID: appData.inspectionId,
  };
  const handleClose = () => {
    closePopup(false);
  };
  const handleTabs = async () => {
    const response = await startInspection(inspectionData);
    console.log(response);
    dispatch(show());
    closePopup(false);
  };

  useEffect(() => {
    const station = JSON.parse(localStorage.getItem("station") || "{}");
    setCurrentStation(station);
  }, []);

  return (
    <Modal
      onClose={handleClose}
      isOpen={true}
      isDismissable={false}
      size="full"
      className="w-[40%] h-[50%] font-calibri text-popupHeading"
    >
      <ModalContent className="mb-3">
        <div className="bg-lightGreen p-1 text-center font-bold ">
          Confirm Photo Capture
        </div>
        <ModalBody>
          <div className="grid grid-cols-2 m-2  ">
            <img
              src="images/image1.png"
              alt="Captured Image"
              className="w-[80%] m-6"
            ></img>

            <img
              src="images/image2.png"
              alt="Captured Image"
              className="w-[80%] m-6"
            ></img>
          </div>
        </ModalBody>

        <div className="flex flex-row items-center justify-center mb-3 ">
          <Button
            className="m-1 bg-persianGreen text-white font-bold h-8"
            radius="none"
            onClick={handleTabs}
          >
            Proceed
          </Button>
          <Button
            className="m-1 bg-white border-1 border-greyBorder text-black font-bold h-8"
            radius="none"
            onClick={handleClose}
          >
            Back
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmPhotoCapturePopup;