import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Select,
  SelectItem,
  Checkbox,
  Input,
} from "@nextui-org/react";

function ARTUUnitConfigPopup() {
 

  return (
    <>
      <Modal
        isOpen={true}
        isDismissable={false}
        // onClose={handleClose}
        size="3xl"
        className=" overflow-y-auto"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div
                className="bg-[#ddf3f2] h-8 w-[100%] p-1 font-bold text-black text-center text-popupHeading:'16px',
 font-calibri"
              >
                ARTU Unit Config
              </div>
              <>
                <ModalBody>
                  <div className="flex justify-center items-center font-calibri font-bold">
                    Select and edit the ARTU unit configuration
                  </div>
                  <div className="grid grid-cols-3 text-right gap-1 text-inputTxt">
                    <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri font-bold ">
                      <span className=" ml w-[40%] ">Lane</span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-5 w-[50%]"
                        radius="none"
                        variant="bordered"
                        placeholder="1"
                      >
                        <SelectItem key={1}>1</SelectItem>
                      </Select>
                    </div>
                    <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri font-bold ">
                      <span className="ml- w-[50%] ">Station </span>
                      <Select
                        labelPlacement="outside-left"
                        size="sm"
                        className="ml-4 w-[50%]"
                        radius="none"
                        variant="bordered"
                        placeholder="A"
                      >
                        <SelectItem key={1}>Data1</SelectItem>
                      </Select>
                    </div>
                    <div className="flex m-1 items-center mt-5 font-calibri  font-bold ">
                      <span className="ml- w-[50%] ">Description </span>
                      <Input
                        labelPlacement="outside-left"
                        className="ml-5 w-[50%]"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="OHM"
                      ></Input>
                    </div>
                    <div className="flex  items-center mt-5 font-calibri  font-bold ">
                      <span className=" w-[40%] ">Address</span>
                      <Input
                        labelPlacement="outside-left"
                        className="ml-5 w-[50%]"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="127.0.0.1"
                      ></Input>
                    </div>
                    <div className="flex m-1 items-center mt-5 font-calibri  font-bold ">
                      <span className=" w-[50%] ">PORT</span>
                      <Input
                        labelPlacement="outside-left"
                        className="ml-5 w-[50%]"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="12345"
                      ></Input>
                    </div>
                    <div className="flex m-1 items-center mt-5 font-calibri  font-bold ">
                      <span className=" w-[50%] ">Keep-Alive (ms)</span>
                      <Input
                        labelPlacement="outside-left"
                        className="ml-5 w-[50%]"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="60000"
                      ></Input>
                    </div>
                  </div>
                </ModalBody>
                <div className="flex justify-center items-center mb-4 mt-4">
                  <Button
                    className={`bg-[#009b77] ml-56 text-[white] font-bold rounded-sm `}
                    variant="bordered"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    className={`bg-[white] text-[black] font-bold shadow-sm rounded-sm ml-6  `}
                    variant="bordered"
                    size="sm"
                    type="submit"
                    // onClick={handleClose}
                    // onPress={onClose}
                  >
                    Cancel
                  </Button>
                     <Button
                    className={`bg-[#991b1b] text-[white] w-[20%] ml-20 font-bold rounded-sm `}
                    variant="bordered"
                    size="sm"
                  >
                    Delete VEE Pairing
                  </Button>
                </div>
                
              </>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default ARTUUnitConfigPopup;
