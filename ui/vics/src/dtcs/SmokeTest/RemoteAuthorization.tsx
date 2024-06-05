import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import PropTypes from 'prop-types';

function RemoteAuthorization(props) {
  const open = props.showRemoteAuthorization;
  const handleClose = () => {
     props. closeRemoteAuthorization(false);
  };
  return (
    <>
      <Modal
        size="2xl"
        className="rounded-sm"
        onClose={handleClose}
        isOpen={open}
        isDismissable={false}
        hideCloseButton={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-black font-calibri font-bold bg-lightGreen text-center i justify-center  gap-1">
                Remote Authorization
              </ModalHeader>
              <ModalBody>
                <div className="  w-[100%] items-left text-left text-black font-calibri font-bold">
                  <div className="flex flex-row justify-center mt-4 ">
                    <div className="justify-center font-bold text-[12px] mt-2">
                      UserName
                    </div>
                    <div className="justify-center ml-4">
                      <Input
                        labelPlacement="outside-left"
                        data-testid="vehicleClass"
                        className="w-[130px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    <div className="justify-center ml-10 font-bold text-[12px] mt-1">
                      Password
                    </div>
                    <div className="justify-center ml-4">
                      <Input
                        labelPlacement="outside-left"
                        data-testid="vehicleClass"
                        className="w-[130px] rounded-sm"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        type="Password"
                      />
                      <br />
                    </div>
                  </div>
                  <div className="flex  flex-row justify-center ml-6">
                    <div className="justify-center font-bold text-[12px] ">
                      Remark
                    </div>
                    <div className="justify-center ml-7 ">
                      <Textarea
                        labelPlacement="outside-left"
                        data-testid="vehicleClass"
                        className="w-[600px] rounded-sm h-6"
                        size="sm"
                        radius="none"
                        aria-label="center"
                        variant="bordered"
                        disableAnimation
                        disableAutosize
                        classNames={{
                          base: "max-w-sm",
                          input: "resize-y h-6",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="justify-center mb-4 mt-10 ">
                <Button
                  className="text-white font-calibri font-bold rounded-sm bg-persianGreen border-[#e0dede] h-8 "
                  variant="light"
                  radius="none"
                  onPress={onClose}
                >
                  Yes
                </Button>
                <Button className="text-white font-calibri font-bold  rounded-sm bg-persianGreen border-1 border-[#e0dede] h-8 ml-4">
                  No
                </Button>
                <Button  onClick={handleClose} className="text-black font-calibri font-bold  rounded-sm bg-white border-1.5 border-[#d3d3d3] ml-4 h-8">
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
RemoteAuthorization.propTypes = {
  showRemoteAuthorization: PropTypes.bool,
  closeRemoteAuthorization: PropTypes.func,
};
export default RemoteAuthorization;