import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React from "react";

function ExhaustPopup(props) {
  const handleClose = () => {
    props.closePopup(false);
    props.ExhaustPopup(false);
    props.setExhaustPopup(false);
  };
  return (
    <div>
      <>
        <Modal isOpen={true}
        onClose={handleClose}
        isDismissable={false} 
        size="5xl">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 items-center bg-lightGreen justify-center font-calibri ">
                  Exhaust Config
                </ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-3 text-right gap-1 font-calibri text-inputTxt font-bold">
                    <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                      <span className="ml-1 w-[40%] ">Air Intake System</span>
                      <Select
                        placeholder="Naturally Aspira"
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                        
                      >
                        <SelectItem key={1}>Data1</SelectItem>
                      </Select>
                    </div>
                    <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                      <span className="ml-1 w-[35%] ">Propulsion</span>
                      <Select
                        placeholder="DIESEL"
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                      >
                        <SelectItem key={1}>Data1</SelectItem>
                      </Select>
                    </div>
                    <div className="flex m-1 items-center mt-5 font-calibri   ">
                      <span className="ml-1 w-[35%] ">RPM Limit</span>
                      <Select
                        placeholder="30"
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                      >
                        <SelectItem key={1}>Data1</SelectItem>
                      </Select>
                    </div>
                    <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
                      <span className="ml-1 w-[40%] ">Fuel Supply Type</span>
                      <Select
                        placeholder=""
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                      >
                        <SelectItem key={1}>Data1</SelectItem>
                      </Select>
                    </div>

                    <div className="flex m-1 items-center mt-5 font-calibri  ">
                      <span className="ml-1 w-[35%]">No. of FAT Test</span>
                      <Select
                        placeholder="10"
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%] "
                        radius="none"
                        variant="bordered"
                      >
                        <SelectItem key={1}>Data1</SelectItem>
                      </Select>
                    </div>

                    <div className=" flex m-1 items-center mt-5 font-calibri  ">
                      <span className="ml-1 w-[35%]">HSU Limit</span>
                      <Select
                        placeholder=""
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-2 w-[50%]"
                        radius="none"
                        variant="bordered"
                      >
                        <SelectItem key={1}>Data1</SelectItem>
                      </Select>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter className=" justify-center  ">
                  <Button
                    className=" bg-tropicalrainforest text-white font-calibri  mr-4 "
                    variant="light"
                    onPress={onClose}
                    radius="none"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    className=" border-2 bg-white border-greyBorder font-calibri  "
                    radius="none"
                    size="sm"
                    onClick={handleClose}
                    onPress={onClose}
                  >
                    Quit
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}

export default ExhaustPopup;
