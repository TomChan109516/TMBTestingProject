import PropTypes from "prop-types";
import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";

function ConfirmPopup(props) {
  const { showConfirmPopup, setShowConfirmPopup, title, handleApi } = props;

  const handleClose = () => {
    setShowConfirmPopup(false);
  };

  return (
    <div>
      <Modal
        isOpen={showConfirmPopup}
        onClose={handleClose}
        size="2xl"
        radius="none"
        className="rounded-sm"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="text-[#007F62] m-5">{title}</div>
              <ModalBody>
                Are you sure you want to create appointment?
              </ModalBody>
              <ModalFooter className="justify-end">
                <Button
                  onPress={onClose}
                  size="sm"
                  radius="none"
                  className="border-[lightgrey] text-[black] bg-white w-[50px] h-10 border-solid border-[1px] font-medium"
                >
                  No
                </Button>
                <Button
                  onClick={handleApi}
                  size="sm"
                  radius="none"
                  className="text-white bg-[#00AF8F] mr-[25px] w-[50px] h-10 font-medium"
                >
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default ConfirmPopup;
ConfirmPopup.propTypes = {
  showConfirmPopup: PropTypes.bool,
  setShowConfirmPopup: PropTypes.func,
  title: PropTypes.string,
  handleApi: PropTypes.func,
};
