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
      
     className="rounded-md" size="xl"  isDismissable={false} hideCloseButton>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
               Reactivate User Role
              </ModalHeader>
              <ModalBody>
                <div className="justify-center text-center text-black font-calibri font-bold mt-6">
                   Do you confirm to Reactivate this Skip Test Reason? <br />                
                </div>
                <div className="  w-[100%] items-center text-center text-black font-calibri font-bold">
                    <div className=" w-[100%] -ml-4">
                    Code: <span className="ml-2">555</span>
                    </div>
                    
                                  
                </div>
              </ModalBody>
              <ModalFooter className="justify-center mb-4 ">
                <Button
                data-testid="close-button"
                 className="text-white font-calibri font-bold rounded-sm bg-tropicalrainforest border-lightGrey h-8 "
                 variant="light"
                 radius="none"
                 onClick={handleClose}
                >
                  Yes
                </Button>
                <Button                
                //  data-testid="no-button"
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