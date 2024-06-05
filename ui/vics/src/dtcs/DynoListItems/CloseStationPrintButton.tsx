import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";
function CloseStationPrintButton(props) {
  const handleClose = () => {
    props.setIsCloseStationPrint(false);
  };
  return (
    <>
      <Modal
        size="5xl"
        className=" overflow-y-auto text-inputTxt "
        isOpen={true}
        onClose={handleClose}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="bg-lightGreen w-[100%]  p-1 font-bold text-black text-center h-8">
                Close Station
              </div>

              <ModalBody></ModalBody>
              <div className=" w-[100%] flex justify-center pb-10 mb-28  ">
                <div className="w-[100%] flex justify-start mt-8 mb-28 ">
                  <Button
                    className={`bg-persianGreen text-[white] font-bold rounded-sm ml-2 `}
                    variant="bordered"
                    size="sm"
                  >
                    Print
                  </Button>
                </div>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default CloseStationPrintButton;
