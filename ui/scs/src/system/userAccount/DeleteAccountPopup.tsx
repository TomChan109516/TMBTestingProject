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

function DeleteAccountPopup(props) {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const { showConfirmPopup, setShowConfirmPopup } = props;

  // const { enquiryAppointmentInfo } = useSelector(
  //   (state) => state.enquiryAppointment
  // );

  // const handleDeleteAppoint = async () => {
  //   try {
  //     const baseUrl = DELETE_APPOINTMENT;
  //     const params = { appointmentNumber: enquiryAppointmentInfo.appointmentNumber };
  //     const response = await axiosPost(baseUrl, params);
  //     if(response.status === 200){
  //       setSuccessMessage(true);
  //     }
  //   } catch (error) {
  //     console.error("Enquiry appointment delete", error);
  //   }
  // };
  const handleClose = () => {
    setShowConfirmPopup(false);
    navigate("/searchUser");
  };
  return (
    <div>
      <Modal isOpen={showConfirmPopup} onClose={handleClose} size="xs">
        <ModalContent>
          {(onClose) => (
            <>
              <div className="text-[#0a923d] m-5">Tip</div>
              <ModalBody>Confirm Delete?</ModalBody>
              <ModalFooter className="justify-end">
                <Button
                  onPress={onClose}   
                  type="button"
                  className="bg-[#F0FFFF] text-[#3EB489] border-[#75c3a5] font-bold rounded w-[50px] h-8"
                  size="sm"
                  variant="bordered"                >
                  Cancel?
                </Button>
                <Button
                  //   onClick={handleDeleteAppoint}
                  type="button"
                //   className="bg-[#F0FFFF] text-[#3EB489] border-[#75c3a5] font-bold rounded w-[50px] h-8"
                  size="sm"
                  
                  className="text-white bg-[#00AF8F] font-bold rounded w-[50px] h-8"
                >
                  Yes
                </Button>
              </ModalFooter>
              {successMessage && (
                <p className="text-[#00AF8F] ml-10 mb-5">
                  Appointment Deleted Successfully
                </p>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default DeleteAccountPopup;
