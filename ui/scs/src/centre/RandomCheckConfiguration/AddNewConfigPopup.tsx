import React from "react";
import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { theme } from "../../common/themes/themeConfig";

function AddNewConfigPopup(props) {
  const { showAddNewConfigPopup, CloseAddNewConfigPopup } = props;

  const handleClose = () => {
    CloseAddNewConfigPopup(false);
  };

  return (
    <>
      <Modal isOpen={showAddNewConfigPopup} onClose={handleClose} size="3xl" radius="none" className="rounded-sm">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader
                className={`flex flex-col gap-1 text-left text-sm font-[${theme?.fontFamily?.calibri}] font-bold text-tropicalRainForest`}
              >
                Add New Random Check Configuration
              </ModalHeader>
              <ModalBody>
                <div>
                  <h1 className="h-[200px] mt-3">
                    <h5
                      className={`absloute-top-2 start-3 pl-[10px] pr-[10px]  text-sm  font-[${theme?.fontFamily?.calibri}] mt-1 `}
                    >
                      Config
                    </h5>
                    <div className="flex flex-row items-center mt-3">
                      <div
                        className={`whitespace-nowrap ml-6 text-sm font-[${theme?.fontFamily?.calibri}] font-bold`}
                      >
                        Center
                      </div>

                      <div className="w-[25.1%] ml-[94px]">
                        <Select
                          labelPlacement="outside-left"
                          radius="none"
                          size="sm"
                          variant="bordered"
                          classNames={{ trigger: "min-h-unit-2 h-8 rounded-sm" }}
                        >
                          <SelectItem key="TY"> TY1 </SelectItem>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="grid grid-rows-4 h-[200 px] grid-flow-col ml-6">
                        <div className="flex flex-row items-center">
                          <div
                            className={`text-left text-sm font-[${theme?.fontFamily?.calibri}] font-bold whitespace-nowrap `}
                          >
                            <span className="text-[red]">*</span>Name
                          </div>
                          <div className="w-full ml-[91px] mr-4">
                            <Select
                              labelPlacement="outside-left"
                              radius="none"
                              size="sm"
                              placeholder="Select"
                              variant="bordered"
                              classNames={{ trigger: "min-h-unit-2 h-8 rounded-sm" }}
                            >
                              <SelectItem key="Selct"> </SelectItem>
                            </Select>
                          </div>
                        </div>
                        <div className="flex flex-row items-center mt-1">
                          <div
                            className={`whitespace-nowrap text-left text-sm font-[${theme?.fontFamily?.calibri}] font-bold`}
                          >
                            Rate%
                          </div>
                          <div className="w-full ml-[96px] mr-4">
                            <Input
                              id="standard-basic"
                              name="rate"
                              radius="none"
                              variant="bordered"
                              size="sm"
                              classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div
                            className={`whitespace-nowrap text-left text-sm font-[${theme?.fontFamily?.calibri}] font-bold`}
                          >
                            Min Draw Number
                          </div>

                          <div className="w-full ml-[25px] mr-4">
                            <Input
                              id="standard-basic"
                              name="draw number"
                              radius="none"
                              variant="bordered"
                              size="sm"
                              data-testid="mindrawbumber"
                              placeholder="1"
                              classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-rows-4 grid-flow-col">
                        <div className="flex flex-row items-center">
                          <div className="flex">
                            <Checkbox
                              classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                              size="sm"
                              radius="none"
                              //onChange={(e) => onCheckboxChange(e)}
                            />
                          </div>
                          <div
                            className={`whitespace-nowrap text-left text-sm font-[${theme?.fontFamily?.calibri}] font-bold`}
                          >
                            Custom
                          </div>
                          <div className="w-full ml-[74px] mr-2">
                            <Input
                              id="standard-basic"
                              name="name"
                              radius="none"
                              variant="bordered"
                              size="sm"
                              classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div
                            className={`whitespace-nowrap text-left text-sm font-[${theme?.fontFamily?.calibri}] font-bold`}
                          >
                            Check Type
                          </div>
                          <div className="w-full ml-[77px] mr-2">
                            <Select
                              labelPlacement="outside-left"
                              radius="none"
                              size="sm"
                              variant="bordered"
                              classNames={{ trigger: "min-h-unit-2 h-8 rounded-sm" }}
                            >
                              <SelectItem key="TY">Normal </SelectItem>
                            </Select>
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div
                            className={`whitespace-nowrap text-left text-sm font-[${theme?.fontFamily?.calibri}] font-bold`}
                          >
                            Draw by Section
                          </div>
                          <div className="w-full ml-[49px] mr-2">
                            <Select
                              labelPlacement="outside-left"
                              radius="none"
                              size="sm"
                              variant="bordered"
                              classNames={{ trigger: "min-h-unit-2 h-8 rounded-sm" }}
                            >
                              <SelectItem key="TY"> Yes</SelectItem>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </h1>
                </div>
              </ModalBody>
              <div className="flex justify-end p-2 gap-1">
                <Button
                  className={`text-sm font-[${theme?.fontFamily?.calibri}] font-bold text-gray rounded-sm bg-[white] border-2 border-[lightgray]`}
                  radius="none"
                  // onPress={onClose}
                >
                  Reset
                </Button>
                <Button
                  className={`text-sm font-[${theme?.fontFamily?.calibri}] font-bold text-white bg-[#00AF8F] rounded-sm`}
                  radius="none"
                  //onPress={onClose}
                >
                  Save
                </Button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddNewConfigPopup;
