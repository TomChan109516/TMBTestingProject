import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
  } from "@nextui-org/react";
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import { useSelector } from "react-redux";
  import { axiosPost } from "../../utils/axiosInstance";
  
  function ResetAssignmentPopup(props) {
    const navigate = useNavigate();
    const { showConfirmPopup, setShowConfirmPopup } = props;
  
    const handleClose = () => {
      setShowConfirmPopup(false);
    };
    return (
      <div>
        <Modal isOpen={showConfirmPopup} onClose={handleClose} size="lg">
          <ModalContent>
            {(onClose) => (
              <>
                <div className="text-[#0a923d] m-5">Tips</div>
                <ModalBody className="text-sm text-[grey]">Reset will clear the results of the draw, are you sure?</ModalBody>
                <ModalFooter className="justify-end">
                  <Button
                    onPress={onClose}
                    type="button"
                    className="bg-[#F0FFFF] text-[#3EB489] border-[#75c3a5] font-bold rounded w-[50px] h-8"
                    size="sm"
                    variant="bordered"
                  >
                    Cancel
                  </Button>
                  <Button
                    //   onClick={handleDeleteAppoint}
                    type="button"
                    //   className="bg-[#F0FFFF] text-[#3EB489] border-[#75c3a5] font-bold rounded w-[50px] h-8"
                    size="sm"
                    className="text-white bg-[#00AF8F] font-bold rounded w-[50px] h-8"
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
  
  export default ResetAssignmentPopup;
  