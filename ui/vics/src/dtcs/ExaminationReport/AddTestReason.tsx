import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Select,
} from "@nextui-org/react";
import PropTypes from 'prop-types';

function AddTestReason(props) {
  const open = props.showAddTestReason;
  const handleClose = () => {
    props.closeAddTestReason(false);
  };
  return (
    
    <>
      <Modal
      data-testid="add-test-reason-modal"
        size="xl"
        className="rounded-sm"
        onClose={handleClose}
        isOpen={open}
        isDismissable={false}
        hideCloseButton={true}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
         Add Abort/Suspend Test Reason
              </ModalHeader>
              <ModalBody>
              <div className="flex flex-row items-center mx-auto mt-4 ">
                  <span className="text-xs text-black font-bold text-right w-[120px]">
                    Code
                  </span>
                  <div className="text-xs w-[300px] text-black ml-8">
                    <Input
                      id="standard-basic"
                      radius="sm"
                      variant="bordered"
                      size="sm"
                      maxLength={15}
                    />
                  </div>
                </div>
                <div className="flex flex-row  mx-auto mt-4 ">
                  <span className="text-xs text-black font-bold text-right w-[120px]">
                    Description
                  </span>
                  <div className="text-xs w-[300px]  text-black ml-8">
                    <Textarea
                    labelPlacement="inside"
                    minRows={4}
                    variant="bordered"
                    radius="sm"
                    />
                  </div>
                </div>

                <div className="flex flex-row items-center mx-auto mt-4 ">
                    <span className="text-xs text-black font-bold text-right w-[120px]">
                        Test Type
                    </span>
                    <div className="text-xs w-[300px]  text-black ml-8">
                        <Select
                        labelPlacement="inside"
                        size="sm"
                        variant="bordered"
                        radius="sm"
                        >
                        
                        </Select>
                    </div>
                </div>
               
                
              </ModalBody>
              <ModalFooter className="justify-center mb-8 mt-4 ">
                <Button
                  className="text-white font-calibri font-bold rounded-sm bg-persianGreen border-greyBorder h-8 "
                  variant="light"
                  radius="none"
                
                >
                  Save
                </Button>
                <Button onClick={handleClose} className="text-black font-calibri font-bold  rounded-sm bg-white border-1 border-greyBorder h-8 ml-4">
                  Cancel
                </Button>
               
              </ModalFooter>``
            </>
          )}
        </ModalContent>
      </Modal>

    </>
  );
}
AddTestReason.propTypes = {
  showAddTestReason: PropTypes.bool,
  closeAddTestReason: PropTypes.func,

}

export default AddTestReason;