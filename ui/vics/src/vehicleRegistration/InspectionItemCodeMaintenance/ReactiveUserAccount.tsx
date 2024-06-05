import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import PropTypes from "prop-types";
function ReactiveUserAccount(props) { 

    const open = props.showDisableUserAccount;
        
    const handleClose = () => {
      props.closeDisableUserAccount(false);
    };
  return (
    <>
      <Modal size="md"  isOpen={open}
          onClose={handleClose} isDismissable={false} className="rounded-sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
               Disable User Account
              </ModalHeader>
              <ModalBody>
                <div className="justify-center text-center text-black font-calibri font-bold mt-6">
                   Do you confirm to disable this user account? <br />                 
                </div>
                <div className="  w-[100%] items-center text-center text-black font-calibri font-bold">
                    <div className=" w-[100%] ">
                    User Name: <span className="ml-2">VT11A</span> 
                    </div>        
                </div>
              </ModalBody>
              <ModalFooter className="justify-center mb-6 ">
                <Button
                  className="text-white font-calibri font-bold bg-persianGreen border-[#e0dede]  rounded-sm ml-4"
                  variant="light" 
                  onPress={onClose}
                >
                  Yes
                </Button>
                <Button className="text-black font-calibri font-bold rounded-sm bg-white border-1 border-[#e0dede] ml-6" onClick={handleClose} >
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

ReactiveUserAccount.propTypes = {
    showReactiveUserAccount: PropTypes.bool,
    closeReactiveUserAccount: PropTypes.func,
  }
export default ReactiveUserAccount;