import {
  CheckboxGroup,
  Modal,
  ModalBody,
  ModalContent,
  Radio,
  RadioGroup,
  Checkbox
} from "@nextui-org/react";
import React from "react";


const ExpandComponent = ({expandData, onClose}) => {
  return (
    <>
      <Modal
        isOpen={true}
        size="3xl"
        radius="none"
        className="font-calibri text-inputTxt  "
        onClose={onClose}
      >
        <ModalContent className="mb-3">
          <ModalBody>
            {expandData.heading === "system" ? (
              
              <div className="ml-1">
                <h3 className="font-bold">{expandData.heading}</h3>
                <div className="h-[200px] ml-2 mt-2 overflow-y-scroll border-1 border-greyBorder  mt-2 w-[100%]">
                <CheckboxGroup orientation="vertical" className="">
                  <Checkbox size="sm" radius="none" value="A">
                    <span>01</span>
                  </Checkbox>
                  <Checkbox size="sm" radius="none" value="B">
                    <span>02</span>
                  </Checkbox>
                  <Checkbox size="sm" radius="none" value="B">
                    <span>03</span>
                  </Checkbox>
                  <Checkbox size="sm" radius="none" value="B">
                    <span>04</span>
                  </Checkbox>
                  <Checkbox size="sm" radius="none" value="B">
                    <span>05</span>
                  </Checkbox>
                </CheckboxGroup>
                </div>
              </div>
            ) : (<>
              <h3 className="font-bold">{expandData.heading}</h3>
              <div className="h-[200px] overflow-y-scroll border-1 border-greyBorder  mt-2 w-[100%]">
              
             
                <div className="ml-1">
                  <RadioGroup orientation="vertical" className="">
                    <Radio size="sm" radius="none">01</Radio>
                    <Radio size="sm" radius="none">02</Radio>
                  </RadioGroup>
                </div>
              </div>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExpandComponent;
