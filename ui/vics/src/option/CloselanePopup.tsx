import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  ModalFooter,
  Divider,
} from "@nextui-org/react";
export default function CloselanePopup(props) {
  const open = props.showCloselanePopup;
  const handleClose = () => {
    props.closeCloselanePopup(false);
  };
  return (
    <Modal
      size="lg"
      isOpen={open}
      onClose={handleClose}
      isDismissable={false}
      radius="none"
      className="font-calibri text-inputTxt"
    >
      <ModalContent className="mb-3">
        <div className="bg-[#ddf3f2] h-8 w-[100%] text-[15px] py-[3px] font-bold text-black text-center text-popupHeading:'16px', font-calibri p-3">
          Close Lane
        </div>
        <ModalBody>
          <div
            className="justify-center text-center text-black font-calibri font-bold text-sm"
            data-testId="Are you sure to close this lane?"
          >
            Are you sure to close this lane? <br />
            Please note that unconfirmed list and registered <br /> appointments
            must be cleared.
          </div>
          <div className="flex items-center space-x-7 -mx-6">
            <Divider orientation="horizontal" />
          </div>
          <div className="ml-[20%] text-[14px] text-darkGrey">
            <div className="mt-[5px]   text-black font-calibri font-bold ">
              <div>
                Remaining Appointments in unconfirmed list:
                <span className="ml-[7%]">0</span>
              </div>
              <div>
                Remaining Registered Appointments:
                <span className="ml-[20%]">2</span>
              </div>
              <div>
                Remaining Un-registered Appointments:
                <span className="ml-[15%]">2</span>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="justify-center mt-2 mb-4">
          <Button
            className="text-white rounded-[2px] h-[30px] font-calibri font-bold bg-tropicalrainforest border-[#e0dede]"
            variant="light"
            radius="none"
          >
            Next
          </Button>
          <Button
            className="text-black rounded-[2px] h-[30px] font-calibri font-bold bg-white border-1  border-[#e0dede] ml-4"
            radius="none"
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

