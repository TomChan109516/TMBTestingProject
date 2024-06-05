import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { CircleX } from "tabler-icons-react";
import PropTypes from "prop-types";
import { deleteAttachment } from "./service/vehicleAttachment.service";
import { useSelector } from "react-redux";

// export default function App() {

function DeleteRecordPopUp(props) {
  const DeleteRecordPopUp = props.showDeleteRecordPopUp;
  const attachment = useSelector((state) => state.attachment.generalAttachment);

  const handleClose = () => {
    props.setDeleteRecordPopUp(false);
  };

  const deleteAppointment = async (appointmentNumber) => {
    try {
      const params = {
        chassisNumber: JSON.stringify(attachment.chassisNumber),
        fileName: JSON.stringify(attachment.file),
      };
      await deleteAttachment(params);
    } catch (error) {
      console.error("Enquiry appointment delete", error);
    }
  };

  return (
    <>
      {/* <Button onPress={onOpen}>Delete Record</Button> */}
      <Modal isOpen={DeleteRecordPopUp} onClose={handleClose}>
        <ModalContent>
          <>
            <div className="flex flex-col text-[#28b5a0] gap-1 ml-5">
              Delete Record
            </div>
            <ModalBody>
              <p className="pt-2 ...">
                {" "}
                <CircleX size={25} color="red" />
                <span className="p-2">Are you sure to delete?</span>
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                className="text-black bg-[#e5e5e5]"
                variant="light"
                onPress={handleClose}
              >
                No
              </Button>
              <Button
                className="text-white bg-[#28b5a0]"
                onPress={deleteAppointment}
              >
                Yes
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

DeleteRecordPopUp.propTypes = {
  showDeleteRecordPopUp: PropTypes.string,
  closeDeleteRecordPopUp: PropTypes.func,
};

export default DeleteRecordPopUp;
