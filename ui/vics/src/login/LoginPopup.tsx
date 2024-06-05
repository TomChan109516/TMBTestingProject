import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";


function LoginPopup(props) {
    const handleClose = () => {
        props.closePopup(false);
      };
  return (
    <>
      <Modal size="md" onClose={handleClose} isOpen={true} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
                Login Information
              </ModalHeader>
              <ModalBody>
                <div className="justify-center text-center text-black font-calibri font-bold">
                    Please note that this is not your designated station. <br />
                    MVE or above approval required.
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex flex-row items-center font-calibri font-bold m-2">
                    <label htmlFor="" className="mr-3 ">
                      Username
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-[200px] border-1 border-[#e0dede] p-1"
                    />
                  </div>
                  <div className="flex flex-row font-calibri font-bold items-center m-2">
                    <label htmlFor="" className="mr-3">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-[200px] border-1 border-[#e0dede] p-1"
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center">
                <Button
                  className="text-white font-calibri font-bold bg-tropicalrainforest border-[#e0dede] "
                  variant="light"
                  onPress={onClose}
                >
                  Submit
                </Button>
                <Button className="text-black font-calibri font-bold bg-white border-1 border-[#e0dede]"
                data-testid="close-button"
                onClick={handleClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginPopup;
