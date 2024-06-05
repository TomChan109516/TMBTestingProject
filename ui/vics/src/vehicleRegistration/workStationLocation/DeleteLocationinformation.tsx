import { Modal, ModalContent, ModalBody, Button } from "@nextui-org/react";
import PropTypes from "prop-types";
import React from "react";
const DeleteLocationinformation = (props) => {
  const open = props.showDeleteLocationinformation;
  const handleClose = () => {
    props.closeDeleteLocationinformation(false);
  };
  return (
    <>
      <Modal
        isOpen={open}
        onClose={handleClose}
        size="2xl"
        className="font-calibri text-inputTxt rounded-sm w-[35%] h-[24%]"
      >
        <ModalContent className="mb-3">
          <div
            className="bg-lightblue h-8 w-[100%] p-1 font-bold text-black text-center justify-center
                            text-popupHeading"
          >
            Information
          </div>
          <ModalBody>
            <div className="flex  items-center  ml-24 mt-2 font-bold text-black text-innerInputTxt">
              Are you sure to delete the location Information?
            </div>

            <div className="mr-2 mt-2 text-center">
              <Button className="m-1 bg-persianGreen text-white font-bold rounded-sm h-7">
                Yes
              </Button>
              <Button
                className="m-1 bg-white border text-black font-bold  rounded-sm h-7"
                onClick={handleClose}
              >
                No
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
DeleteLocationinformation.propTypes = {
  showDeleteLocationinformation: PropTypes.bool,
  closeDeleteLocationinformation: PropTypes.func,
};
export default DeleteLocationinformation;
