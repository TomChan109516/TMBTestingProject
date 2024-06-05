import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EditVehicleMessage(props) {
  const open = props.EditVehicleMessage;
  const router = useNavigate();
  const navigate = useNavigate();
  const { showMessagePopup, setShowMessagePopup } = props;

  const handleClose = () => {
    setShowMessagePopup(false);
    navigate("/vehicleDetail/:vehicleId");
  };

  const sizes = ["4xl"];

  return (
    <>
      <Modal isOpen={showMessagePopup} onClose={handleClose} size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-sm text-[#00AF8F] gap-1">
                Vehicle Message
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-wrap pt-8">
                  <div className="w-[100%] p-[5px] pl-2 ">
                    <h1>
                      <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                        Manual Massage (English)
                      </h5>
                      <div className="min-h-[100px] max-h-[100px] h-[100px] overflow-x-hidden text-black"></div>
                    </h1>
                  </div>
                </div>

                <p>
                  <div className="flex flex-wrap">
                    <div className="w-[100%] p-[5px] pl-2 ">
                      <h1>
                        <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                          Manual Massage (Chinese)
                        </h5>
                        <div className="min-h-[100px] max-h-[100px] h-[100px] overflow-x-hidden text-black"></div>
                      </h1>
                    </div>
                  </div>
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ffffff] float-left ml-2 rounded "
                  variant="bordered"
                  type="submit"
                  size="sm"
                  onPress={onClose}
                  fond-bold
                >
                  Cancle
                </Button>
                <Button
                  className="text-[#00AF8F] bg-[#cdf6ec] mr-2 float-right border-solid border-2 border-[#00AF8F] rounded"
                  variant="bordered"
                  type="submit"
                  size="sm"
                  fond-bold
                  onPress={onClose}
                >
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
EditVehicleMessage.propTypes = {
  showMessagePopup: PropTypes.bool,
  setShowMessagePopup: PropTypes.func,
  title: PropTypes.string,
  handleApi: PropTypes.func,
};
