import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
function ReActiveAndDisablePopup(props) {
  const { setShowReactive, setIsSwitchOn, isSwitchOn, header, equipmentNumber, equipmentName, description, setShowDisable } = props
  const handleClose = () => {
    setShowDisable(false)
    setShowReactive(false)
    setIsSwitchOn(isSwitchOn)
  };

  const handleConfirm = () => {
    setShowReactive(false)
    setShowDisable(false)
  }

  return (
    <>
      <Modal
        className="rounded-md"
        size="lg"
        onClose={handleClose}
        isOpen={true}
        isDismissable={false} >
        <ModalContent>
          {(onClose) => (<>
            <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center gap-1 text-popupHeading">
              {header}
            </ModalHeader>
            <ModalBody>
              <div className="justify-center text-center text-black font-calibri font-bold mt-2">
                {description}
              </div>
              <div className="flex flex-col justify-center items-center text-navHeading font-bold">
                <p className="-ml-16"> Equipment Number: <span className="ml-4">  {equipmentNumber}</span></p>
                <p>  Equipment Name: <span className="ml-4">  {equipmentName}</span></p>
              </div>
            </ModalBody>
            <ModalFooter className="justify-center mb-4 ">
              <Button
                className="text-white rounded-[2px] font-calibri font-bold bg-tropicalrainforest border-[#e0dede] h-[35px]  "
                variant="light"
                radius="sm"
                onClick={handleConfirm}>
                Yes
              </Button>
              <Button
                className="text-black rounded-[2px] font-calibri font-bold bg-white border-1  border-[#e0dede] ml-4 h-[35px]"
                radius="sm"
                onClick={handleClose} >
                No
              </Button>
            </ModalFooter>
          </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default ReActiveAndDisablePopup;