import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";
import React from "react";

import PropTypes from "prop-types";

function FftsDetailsPopup(props) {

const {showFftsDetailsPopup, closeFftsDetailsPopup} =  props;

  const handleClose = () => {
    closeFftsDetailsPopup(false);
  };

 
  return (
    <div className="w-[100%] h-[100%]">
      
       <Modal isOpen={showFftsDetailsPopup} onClose={handleClose} size="2xl"
       >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div>
                  <span className="text-sm font-[Calibri] text-[#007f62] font-bold">
                    FFTS Detail
                  </span>
                  <div className="mt-2">
                    <div className="flex flex-col">
                      <div className="text-sm ml-3 mb-1 text-black font-bold font-[Calibri] text-left w-[100%]">
                        <span className="text-[#da4b4b] mr-1">*</span>
                      Number of Fixed Axles
                      </div>
               
                      <div className="w-[600px] ml-2 text-xs">
                        <Input
                          variant="bordered"
                          className="w-[100%]"
                          size="xs"
                          radius="none"
                          value="2"
                          isDisabled={true}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mt-1">
                      <div className="text-sm font-[Calibri] ml-3 mb-1 text-black font-bold text-left w-[100%]">
                      <span className="text-[#da4b4b] mr-1">*</span>
                        Number of Retractable Axles
                      </div>
                     
                     
                      <div className="w-[600px] ml-2 text-xs">
                        <Input
                          variant="bordered"
                          className="w-[100%]"
                          size="xs"
                          radius="none"
                          value="0"
                          isDisabled={true}
                        />
                      </div>
                    </div>
                    </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="reset"
                  className="bg-[#FFFFFF] font-bold border border-[lightgrey] shadow-sm font-[Calibri] text-sm font-bold rounded-sm"
                  size="sm"
                  radius="none"
                  variant="flat"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  type="button"
                  className=" text-white bg-[#00AF8F] font-bold font-[Calibri] text-sm rounded-sm ml-2"
                  size="sm"
                  radius="none"
                  variant="flat"
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
FftsDetailsPopup.propTypes = {
    showFftsDetailsPopup:  PropTypes.bool,
    closeFftsDetailsPopup: PropTypes.func,
  };
export default FftsDetailsPopup;