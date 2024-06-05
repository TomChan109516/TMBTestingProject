import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { InfoCircle } from "tabler-icons-react";
import CloseStationPrint from "./CloseStationPrint";

function CloseStationNextPopup({ setIsCloseStationNextPopup }) {
  const handleClose = () => {
    setIsCloseStationNextPopup(false);
  };
  const [isCloseStationPrint, setIsCloseStationPrint] = useState(false);

  const handleCloseStationPopup = () => {
    setIsCloseStationPrint(true);
  };
  const closeCloseStationPopup = (val) => {
    setIsCloseStationPrint(val);
  };
  return (
    <Modal
      size="xl"
      isOpen={true}
      isDismissable={false}
      classNames={{
        backdrop: "bg-lightBlack/50 backdrop-opacity-40",
        header: "bg-lightGreenp-1    font-bold text-[14px] mb-1z",
        closeButton: "hover:bg-white/4 active:bg-white/10",
        body: "px-0 py-0",
      }}
      className="rounded-md"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
              Close Station
            </ModalHeader>
            <ModalBody>
              <div>
                <div className="justify-center text-center text-black font-calibri font-bold mt-5">
                  Are you sure to close this station? <br />
                </div>
                <div className="justify-center text-center text-black font-calibri font-bold ">
                  Please note that Appointments in the Dyno Workload List.{" "}
                  <br />
                </div>
                <div className="justify-center text-center text-black font-calibri font-bold  ">
                  must be cleared. <br />
                </div>
              </div>
              <span className="md:border border-[lightgray] shadow-sm "></span>
              <div className="w-[100%] items-center text-center font-calibri mb-6 font-bold">
                <div className="w-[100%] flex justify-center items-center">
                  <span className="text-[gray]">
                    {" "}
                    Remaining Appointments in Dyno Workload list:
                  </span>
                  <span className="ml-2">2</span>
                  <InfoCircle
                    size={22}
                    strokeWidth={2}
                    color={"red"}
                    className="ml-2"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="justify-center mb-6 ">
              <Button
                className="text-white font-calibri font-bold bg-darkGrey h-8 border-greyBorder  rounded-sm ml-4"
                variant="light"
                onClick={handleCloseStationPopup}
              >
                Next
              </Button>
              <Button
                className="text-black font-calibri font-bold rounded-sm h-8 bg-white border-1 border-greyBorder ml-6"
                onClick={() => setIsCloseStationNextPopup(false)}
              >
                Cancel
              </Button>
            </ModalFooter>
            {isCloseStationPrint && (
              <CloseStationPrint
                setIsCloseStationPrint={setIsCloseStationPrint}
              />
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
export default CloseStationNextPopup;
