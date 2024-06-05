import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import React,{useState} from "react";
import { axiosPost } from "../../utils/axiosInstance";
import {CANCEL_APPOINTMENT} from "../../constants/urlConstants"
import { useSelector } from "react-redux";

export default function CancelPopup(props) {
  const { cancelConfirm, setCancelConfirm, title } = props;
  const [cancelMessage, setCancelMessage] = useState<boolean>(false)
  
  const appointInfo = useSelector(
    (state) => state.enquiryAppointment.enquiryAppointmentInfo
  );

  const handleClose = () => {
    setCancelConfirm(false);
  };

  const cancelAppoint = async () => {
    try {
      const baseUrl = CANCEL_APPOINTMENT;
      const params = { appointmentNumber:appointInfo.appointmentNumber };
      await axiosPost(baseUrl, params);
        setCancelMessage(true)
    } catch (error) {
      console.error("Cancel appointment error", error);
    }
  };
  return (
    <div>
      <Modal isOpen={cancelConfirm} onClose={handleClose} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <div className="text-[#00AF8F] m-5 w-[50%] font-bold">{title}</div>

              <ModalBody>
                The system would keep holding timeslot until you release it manually.<br/>
                Are you sure you want to cancel appointment?
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
                  onClick={cancelAppoint}
                  size="sm"
                  radius="sm"
                  className="text-white bg-[#00AF8F] mr-[25px] w-[50px] h-10 font-medium"
                >
                  Yes
                </Button>
              </ModalFooter>
              {/* {cancelMessage && <p className="text-[#00AF8F] ml-10 mb-5">Appointment Cancelled Successfully</p>} */}
            </>
          )}
        </ModalContent>

      </Modal>

    </div>
  );
}

CancelPopup.propTypes = {
  cancelConfirm: PropTypes.bool,
  setCancelConfirm: PropTypes.func,
  title: PropTypes.string,
  // handleApi: PropTypes.func,
};
