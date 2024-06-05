import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { DELETE_APPOINTMENT } from "../../constants/urlConstants";
import {axiosPostQuery } from "../../utils/axiosInstance";

export default function DeletePopup(props) {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const { showConfirmPopup, setShowConfirmPopup, title, handleApi } = props;
  const { enquiryAppointmentInfo } = useSelector(
    (state) => state.enquiryAppointment
  );
  // const searchAppointmentData = useSelector(
  //   (state) => state.enquiryAppointment.searchEnquiryAppointment
  // );

  const handleClose = () => {
    setShowConfirmPopup(false);
    navigate("/enquireAppoint")
  };

  const handleDeleteAppoint = async () => {
    try {
      const baseUrl = DELETE_APPOINTMENT;
      const params = { appointmentNumber: enquiryAppointmentInfo.appointmentNumber };
      const response = await axiosPostQuery(baseUrl+params.appointmentNumber);
        setSuccessMessage(true);
        setTimeout(()=>{
          navigate("/enquireAppoint")
        },1000);
    } catch (error) {
      console.error("Enquiry appointment delete", error);
    }
  };
  return (
    <div>
      <Modal isOpen={showConfirmPopup} onClose={handleClose} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <div className="text-[#0a923d] m-5">{title}</div>
              <ModalBody>
                Are you sure you want to delete appointment?
              </ModalBody>
              <ModalFooter className="justify-end">
                <Button
                  onPress={onClose}
                  size="sm"
                  radius="sm"
                  className="border-[lightgrey] text-[black] bg-white w-[50px] h-10 border-solid border-[1px] font-medium"
                >
                  No
                </Button>
                <Button
                  onClick={handleDeleteAppoint}
                  size="sm"
                  radius="sm"
                  className="text-white bg-[#00AF8F] mr-[25px] w-[50px] h-10 font-medium"
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

DeletePopup.propTypes = {
  showConfirmPopup: PropTypes.bool,
  setShowConfirmPopup: PropTypes.func,
  title: PropTypes.string,
  handleApi: PropTypes.func,
};
