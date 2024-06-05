import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  SelectItem,
  Select,
} from "@nextui-org/react";

export default function SelectPopup() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>select</Button>
      <Modal
        isOpen={isOpen}
        onClose={onOpenChange}
        isDismissable={false}
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <h1 className="mr-2 mt-4">
                  <div className="flex p-1">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[14px] text-black  text-left  pl-10 pt-5 w-[370px] font-bold ">
                        Select to creat new link or use existing link
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-[210px]"></span>
                    </div>
                  </div>
                  <div className="flex p-1">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[14px] text-black font-bold text-left pl-10 pt-5 w-[200px]">
                        Creat new link
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-[210px]"></span>
                    </div>
                    <div className="flex flex-col-2  ..."></div>
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black text-left mt-2 pl-6">
                        <Button
                          className="text-white bg-[#28b5a0]"
                          style={{ height: "30px", width: "100px" }}
                          size="sm"
                          radius="sm"
                        >
                          Select
                        </Button>
                      </span>
                    </div>
                  </div>
                  <div className="flex p-1">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[14px] text-black font-bold text-left pl-10 pt-5 w-[130px]">
                        Existing Link
                      </span>
                    </div>
                    <div className="flex flex-col-2  ..."></div>
                    <div className="flex p-1">
                      <div className="flex flex-col-4 mt-3">
                        <span className="text-[10.5px] text-black text-left pl-5 mb-[2px] ml-6">
                          <Select
                            labelPlacement="outside-left"
                            data-testid="vehicleClass"
                            className="w-[212px]"
                            radius="sm"
                            size="sm"
                            name="center"
                            aria-label="center"
                            variant="bordered"
                            placeholder="Chassis number"
                          >
                            <SelectItem className="text-[10px]" key={""}>
                              Body Type
                            </SelectItem>
                          </Select>
                        </span>
                      </div>
                      <div className="flex flex-col-2  ...">
                        <span className="text-[10.5px] text-black text-left pl-11 mt-3">
                          <Button
                            className="text-white bg-[#28b5a0]"
                            style={{ height: "30px", width: "100px" }}
                            size="sm"
                            radius="sm"
                          >
                            Select
                          </Button>
                        </span>
                      </div>
                    </div>
                  </div>
                </h1>
              </ModalBody>

              <ModalFooter>
                <Button
                  className="bg-[white]  mr-2 text-[black] border border-[black] font-bold rounded h-8"
                  style={{ height: "30px", width: "100px" }}
                  radius="none"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
