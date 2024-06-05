import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
function DisableReason({setIsDisableReason}) {

  function handleClose() {
    setIsDisableReason(false);
  }
  
  return (
    <>
      <Modal isOpen={true}
      onClose={handleClose}
      isDismissable={false}
       className="rounded-sm"
        size="md" 
        hideCloseButton={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
               Disable User Role
              </ModalHeader>
              <ModalBody>
                <div className="justify-center text-center text-black font-calibri font-bold mt-6">
                   Do you confirm to disable this Abort/Suspend Test Reason? <br />                
                </div>
                <div className="  w-[100%] items-center text-center text-black font-calibri font-bold">
                    <div className=" w-[100%] -ml-4">
                    Description: <span className="ml-2">Equipment Error</span>
                    </div>
                    <div className=" w-[100%] -ml-4">
                    Reason type: <span className="ml-2">Abort</span>
                    </div>
                                  
                </div>
              </ModalBody>
              <ModalFooter className="justify-center mb-4 ">
                <Button
                 className="text-white font-calibri font-bold rounded-sm bg-persianGreen border-[#e0dede] h-8 "
                 variant="light"
                 radius="none"
                 onClick={handleClose}
                >
                  Yes
                </Button>
                <Button  onPress={onClose}
                className="text-black font-calibri font-bold  rounded-sm bg-white border-1 border-[#e0dede] h-8 ml-4">
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
export default DisableReason;