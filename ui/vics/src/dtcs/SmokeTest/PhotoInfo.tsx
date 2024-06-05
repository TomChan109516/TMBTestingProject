import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import PropTypes from 'prop-types';

function PhotoInfo(props) {
    const open = props.showPhotoInfo;
    const handleClose = () => {
       props.closePhotoInfo(false);
  };
  return (
    <>
      <Modal
        size="3xl"
        onClose={handleClose}
        isOpen={open}
        hideCloseButton={true}
        isDismissable={false}
        className="rounded-sm"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader   className="flex flex-col text-tropicalrainforest rounded-none font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
                Photo Information
              </ModalHeader>

              <ModalFooter className="justify-center mt-2 mb-2 ">
              <Button
                  className="text-white font-calibri font-bold rounded-sm bg-persianGreen border-[#e0dede] h-7 mr-8 "
                  variant="light"
                  radius="none"
                 
                  size="sm"
                >
                  Select File
                </Button>
                <Button
                  className="text-white font-calibri font-bold rounded-sm bg-persianGreen border-[#e0dede] h-7 mr-8 "
                  variant="light"
                  radius="none"
                  
                  size="sm"
                >
                  Photo
                </Button>
                <Button
                  className="text-black rounded-[2px] font-calibri font-bold bg-white border-1  border-[#e0dede] h-7 "
                  radius="none"
                  onClick={handleClose}
                  size="sm"
                >
                  Quit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
PhotoInfo.propTypes = {
    showPhotoInfo: PropTypes.bool,
    closePhotoInfo: PropTypes.func,
  };
export default PhotoInfo;