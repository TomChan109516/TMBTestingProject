import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React from "react";

const SubmitPopupInOHMRegistration = (props) => {
  const open = props.ImagePopup;
  const handleClose = () => {
    props.closePopup(false);
    props.OHMPopup(false);
    props.setSubmitPopupInOHMRegistration(false);
  };

  return (
    <Modal
      isOpen={open}
      onClose={handleClose}
      size="3xl"
      className="font-calibri text-popupHeading"
    >
      <ModalContent className="mb-3">
        <div className="bg-lightGreen p-1 text-center font-bold ">
          {props.name}
        </div>
        <ModalBody>
          <div className="flex items-center" data-testid="OHM Measuring Method">
            <span className="w-[150px] text-inputTxt">
              OHM Measuring Method
            </span>
            <Select
              labelPlacement="outside-left"
              data-testid="vehicleClass"
              className="w-[165px]"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
              placeholder="Select"
            >
              <SelectItem className="text-[10px]" key={""}>
                Manual
              </SelectItem>
            </Select>
          </div>
        </ModalBody>

        <div className="flex flex-row items-center justify-center mb-3 ">
          <Button
            className="m-1 bg-persianGreen text-white font-bold h-6"
            radius="none"
          >
            Save
          </Button>
          <Button
            className="m-1 bg-white border-1 border-greyBorder text-black font-bold h-6"
            radius="none"
            onClick={handleClose}
            data-testid="close-button"
          >
            Quit
          </Button>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default SubmitPopupInOHMRegistration;
