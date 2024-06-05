import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
function ReactivateReason({setIsReactivateReason}) {
  
  function handleClose(){
    setIsReactivateReason(false);
  }
  return (
    <>
      <Modal   isOpen={true}
      onClose={handleClose}  
     className="rounded-sm" size="md"  isDismissable={false} hideCloseButton>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
               Reactivate User Role
              </ModalHeader>
              <ModalBody>
                <div className="justify-center text-center text-black font-calibri font-bold mt-6">
                  Do you confirm to Reactivate this Abort/Suspend Test Reason?{" "}
                  <br />
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
                data-testid="close-button"
                 className="text-white font-calibri font-bold rounded-sm bg-persianGreen border-greyBorder h-8 "
                 variant="light"
                 radius="none"
                 onClick={handleClose}
                >
                  Yes
                </Button>
                <Button                
                  onClick={handleClose}
                  className="text-black font-calibri font-bold  rounded-sm bg-white border-1 border-greyBorder h-8 ml-4">
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
export default ReactivateReason;
