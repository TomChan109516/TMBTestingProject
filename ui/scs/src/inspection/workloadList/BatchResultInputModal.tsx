import React from "react";
import {
  Modal,
  Button,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import {theme} from "../../common/themes/themeConfig";

const BatchResultInputModal = (props) => {
  const {showModal, setShowModal } = props;

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="w-[80%] h-[100%]">
      <Modal
        size="sm"
        isOpen={showModal}
        onClose={handleClose}
        radius="none"
        className="rounded-sm"
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div className="flex justify-center">
                  <div className="flex mb-1 flex-col  text-sm w-full">
                    <div className="flex">
                      <div className={`font-bold font-[${theme?.fontFamily?.calibri}] text-sm text-tropicalRainForest`}>
                      Batch Result Input
                      </div>
                    </div>
                    <div className={`mt-3 text-[#8f8d8d] text-sm font-[${theme?.fontFamily?.calibri}]`}> 
                        Are you sure you want to input the result of the inspection(s) ?
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="flex">
                <Button
                  className={`text-black rounded-sm ml-1 font-bold text-sm font-[${theme?.fontFamily?.calibri}]`}
                  type="submit"
                  size="sm"
                  radius="none"
                  onClick={handleClose}
                >
                  No
                </Button>
                <Button
                  className={`bg-[#00AF8F] text-white rounded-sm ml-1  text-sm font-bold font-[${theme?.fontFamily?.calibri}]`}
                  type="submit"
                  size="sm"
                  radius="none"
                  //   onClick={handleClose}
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
};
export default BatchResultInputModal;
