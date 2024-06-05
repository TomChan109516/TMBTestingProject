import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import CloseStationPrintButton from "./CloseStationPrintButton";
function CloseStationPrint({ setIsCloseStationPrint }) {
  const [isCloseStationPrintButton, setCloseStationPrintButton] =
    useState(false);
  const handleCloseStationPrintButton = () => {
    setCloseStationPrintButton(true);
  };
  const closeCloseStationPrintButton = (val) => {
    setIsCloseStationPrint(val);
  };
  const closePopup = () => {
    setIsCloseStationPrint(false);
  };
  return (
    <>
      <Modal
        size="lg"
        hideCloseButton={true}
        isOpen={true}
        isDismissable={false}
        classNames={{
          backdrop: "bg-lightBlack/50 backdrop-opacity-40",
          header: "bg-lightGreen p-1    font-bold text-[14px] mb-1z",
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
                <div className="">
                  <div className="justify-center text-center text-black font-calibri font-bold mt-6">
                    Are you sure to close this station? <br />
                  </div>
                  <div className="justify-center text-center text-black font-calibri font-bold mb-5">
                    Please note that the following are to be printed <br />
                  </div>
                </div>
                <div className=" w-[100%] flex justify-center pb-10 ">
                  <div className="w-[30%] flex justify-center">
                    <span className="text-[black] font-bold font-calibri">
                      {" "}
                      Dyno Daily Test Report{" "}
                    </span>{" "}
                  </div>
                  <div className="w-[20%] flex justify-center">
                    <Button
                      className="text-white font-calibri font-bold bg-persianGreen h-6 border-greyBorder  rounded-sm ml-4"
                      variant="light"
                      onClick={handleCloseStationPrintButton}
                    >
                      Print
                    </Button>
                  </div>
                  <div className="w-[5%] flex justify-center">
                    <span className="ml-2 ">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className=" icon-tabler-clock-hour-3 -mr-4"
                      >
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                        <path d="M12 12h3.5" />
                        <path d="M12 7v5" />
                      </svg>
                    </span>
                  </div>
                </div>
              </ModalBody>
              <span className="md:border border-[lightgray] shadow-sm "></span>
              <ModalFooter className="justify-center mb-6 ">
                <Button
                  className="text-white font-calibri font-bold bg-darkGrey h-8 rounded-sm ml-4 mt-8"
                  variant="light"
                  onPress={onClose}
                >
                  Confirm
                </Button>
                <Button className="text-black font-calibri font-bold rounded-sm h-8 bg-white border-1 border-greyBorder ml-6 mt-8">
                  Back
                </Button>
              </ModalFooter>

              {isCloseStationPrintButton && (
                <CloseStationPrintButton
                  closePopup={closePopup}
                  setIsCloseStationPrint={closeCloseStationPrintButton}
                />
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default CloseStationPrint;
