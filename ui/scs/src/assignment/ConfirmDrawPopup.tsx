import React from "react";
import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function ConfirmDrawPopup(props) {
  const { showConfirmDrawPopup, setShowConfirmDrawPopup } = props;
  const navigate = useNavigate()

  const handleClose = () => {
    setShowConfirmDrawPopup(false);
  };

  return (
    <>
      <Modal
        isOpen={showConfirmDrawPopup}
        onClose={handleClose}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" flex flex-col text-[#28b5a0] gap-1">
                Tips
              </ModalHeader>
              <ModalBody>Confirm draw?</ModalBody>
              <ModalFooter>
                <Button
                  className="text-black bg-[#e5e5e5]"
                  variant="light"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button className="text-white bg-[#28b5a0]" onClick={() => navigate('/staffassignment')}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
ConfirmDrawPopup.propTypes = {
  showConfirmDrawPopup: PropTypes.bool,
  setShowConfirmDrawPopup: PropTypes.func,
};
