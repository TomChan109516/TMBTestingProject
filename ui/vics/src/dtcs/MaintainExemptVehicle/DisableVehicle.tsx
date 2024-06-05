import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";



function DisableVehicle({setIsDisableVehicle}) {

  function handleClose() {
    setIsDisableVehicle(false);
  }
  return (
    <Modal
        size="xl"
        className="rounded-md "
        onClose={handleClose}
        isOpen={open}
        isDismissable={false}
        hideCloseButton={true}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col text-black bg-lightGreen font-calibri font-bold  text-center i justify-center  gap-1">
               Disable Vehicle Model Exemption
              </ModalHeader>
              <ModalBody>
                <div className=" text-center i justify-center mt-8">
                    <span className="text-[14px] font-bold">Do you confirm to disable this Model Vehicle Exemption?</span>
                </div>
               
               
                </ModalBody>
              <ModalFooter className="justify-center mb-8 mt-8 ">
                <Button
                onClick={handleClose}
                  className="text-white font-calibri font-bold rounded-md bg-persianGreen border-greyBorder h-8 "
                  variant="light"
                  
                
                 role="buttonYes">
                  Yes
                </Button>
                <Button 
                onClick={handleClose}
                title="no" data-testId="no" className="text-black font-calibri font-bold  rounded-md bg-white border-1 border-greyBorder h-8 ml-4"
                 role="buttonNo">
                  No
                </Button>
               
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  );
}

export default DisableVehicle;