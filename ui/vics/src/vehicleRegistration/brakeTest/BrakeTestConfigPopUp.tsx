import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  Select,
  SelectItem,
  Checkbox,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

function BrakeTestConfigPopUp(props) {
  const handleClose = () => {
    props.closePopup(false);
    props.BrakePopUp(false);
    props.setBrakeTestConfigPopUp(false);
  };

  return (
    <>
      <Modal
        isOpen={true}
        onClose={handleClose}
        isDismissable={false}
        size="5xl"
        className=""
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="bg-lightGreen w-[100%] p-1 text-tropicalrainforest font-bold  text-center text-popupHeading  ">
                Brake Config
              </div>
              <>
                <ModalBody>
                  <>
                    <div className="flex flex-col text-inputTxt font-bold font-calibri ">
                      <div className="flex flex-row justify-between pt-2">
                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black ">No. of Axles</span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder="2"
                            >
                              <SelectItem className="text-[10px]" key={""}>
                                2
                              </SelectItem>
                            </Select>
                          </span>
                        </div>

                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black  ">
                            Electronic Park Brake Sys.{" "}
                          </span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder="NO"
                            >
                              <SelectItem className="text-[10px]" key={""}>
                                NO
                              </SelectItem>
                            </Select>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between pt-2">
                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black  ">Test Type</span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder="Auto Test"
                            >
                              <SelectItem className="text-[10px]" key={""}>
                                Auto Test
                              </SelectItem>
                            </Select>
                          </span>
                        </div>

                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black ">
                            Steering Axle Position{" "}
                          </span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder="1"
                            >
                              <SelectItem className="text-[10px]" key={""}>
                                1
                              </SelectItem>
                            </Select>
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-row justify-between pt-2">
                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black ">
                            Brake Testing Methode
                          </span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder="2WD-mode"
                            >
                              <SelectItem className="text-[10px]" key={""}>
                                2WD-mode
                              </SelectItem>
                            </Select>
                          </span>
                        </div>

                        <div className="flex flex-row justify-between justify-items-center text-center p-1 w-[45%]">
                          <span className="text-black  ">
                            Pull Parking Brake In Advance{" "}
                          </span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder="NO"
                            >
                              <SelectItem className="text-[10px]" key={""}>
                                NO
                              </SelectItem>
                            </Select>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between pt-2">
                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black ">
                            Service Brake Efficiency Formula
                          </span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder="Calculate By Measured Value"
                            >
                              <SelectItem className="text-[10px]" key={""}>
                                Calculate By Measured Value
                              </SelectItem>
                            </Select>
                          </span>
                        </div>

                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black ">
                            Position Dual/Tri Axle{" "}
                          </span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder=""
                            >
                              <SelectItem
                                className="text-[10px]"
                                key={""}
                              ></SelectItem>
                            </Select>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between pt-2">
                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black ">
                            Parking Brake Efficiency Formula
                          </span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder="Calculate By Measured Value"
                            >
                              <SelectItem className="text-[10px]" key={""}>
                                Calculate By Measured Value
                              </SelectItem>
                            </Select>
                          </span>
                        </div>
                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black ">
                            Separate Secondary Brake Test{" "}
                          </span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder="NO"
                            >
                              <SelectItem className="text-[10px]" key={""}>
                                No
                              </SelectItem>
                            </Select>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between pt-2">
                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black ">Secondary Brake</span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder=""
                            >
                              <SelectItem
                                className="text-[10px]"
                                key={""}
                              ></SelectItem>
                            </Select>
                          </span>
                        </div>
                        <div className="flex flex-row justify-between justify-items-center text-center w-[45%]">
                          <span className="text-black ">
                            Secondary Brake Efficiency Formula{" "}
                          </span>
                          <span className="text-black ">
                            <Select
                              labelPlacement="outside-left"
                              className="w-[240px]"
                              radius="none"
                              size="sm"
                              name="center"
                              aria-label="center"
                              variant="bordered"
                              placeholder="Calculate By Measured Value"
                            >
                              <SelectItem className="text-[10px]" key={""}>
                                Calculate By Measured Value
                              </SelectItem>
                            </Select>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-3 pl-0 mt-[-18px] text-inputTxt font-bold font-calibri ">
                      <div className="flex flex-col-4  ...">
                        <span className="  text-black    pt-1 w-[96px]">
                          Service Brake
                        </span>
                        <span className="  text-black   mt-1">
                          <Checkbox defaultSelected radius="none"></Checkbox>
                        </span>
                      </div>
                      <div className="flex flex-col-2  ...">
                        <span className="  text-black  pl-4 ml-[-18px]   pt-1 w-[93px]">
                          S-1
                        </span>
                        <span className="  text-black    mt-1">
                          <Checkbox defaultSelected radius="none"></Checkbox>
                        </span>
                      </div>
                      <div className="flex flex-col-2  ...">
                        <span className="  text-black  pl-3 pt-1 ml-[-14px] w-[87px]">
                          S-2
                        </span>
                        <span className="  text-black  ml-4 mt-[-3px]"></span>
                      </div>
                      <div className="flex flex-col-2  ...">
                        <span className="  text-black  pl-3 pt-1 w-[93px]"></span>
                        <span className="  text-black  ml-2 mt-[-3px]"></span>
                      </div>
                    </div>
                    <div className="flex p-3 pl-0 mt-[-18px] text-inputTxt font-bold font-calibri ">
                      <div className="flex flex-col-4  ...">
                        <span className="  text-black    pt-1 w-[112px]">
                          Parking Brake
                        </span>
                        <span className="  text-black ml-[-16px]  mt-1">
                          <Checkbox defaultSelected radius="none"></Checkbox>
                        </span>
                      </div>
                      <div className="flex flex-col-2  ...">
                        <span className="  text-black  pl-4 ml-[-18px]   pt-1 w-[93px]">
                          P-1
                        </span>
                        <span className="  text-black    mt-1">
                          <Checkbox defaultSelected radius="none"></Checkbox>
                        </span>
                      </div>
                      <div className="flex flex-col-2  ...">
                        <span className="  text-black  pl-3 pt-1 ml-[-14px] w-[87px]">
                          P-2
                        </span>
                        <span className="  text-black  ml-4 mt-[-3px]"></span>
                      </div>
                      <div className="flex flex-col-2  ...">
                        <span className="  text-black  pl-3 pt-1 w-[93px]"></span>
                        <span className="  text-black  ml-2 mt-[-3px]"></span>
                      </div>
                    </div>
                    <div className="flex p-3 pl-0 mt-[-18px] text-inputTxt font-bold font-calibri ">
                      <div className="flex flex-col-4  ...">
                        <span className="  text-black    pt-1 w-[114px]">
                          T/B Parking
                        </span>
                        <span className="  text-black   mt-1">
                          <RadioGroup
                            orientation="horizontal"
                            className="ml-[-12px]"
                          >
                            <Radio
                              size="sm"
                              classNames={{
                                wrapper:
                                  "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                                control: "bg-white",
                                base: "border-persianGreen  ",
                              }}
                              value="F/R"
                            >
                              <span className="font-bold ">Yes</span>
                            </Radio>
                            <Radio
                              size="sm"
                              classNames={{
                                wrapper:
                                  "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                                control: "bg-white",
                                base: "border-persianGreen ml-9",
                              }}
                              value="Diagonal"
                            >
                              <span>
                                <span className="font-bold">NO</span>
                              </span>
                            </Radio>
                          </RadioGroup>
                        </span>
                      </div>
                      <div className="flex flex-col-2  ...">
                        <span className="  text-black  pl-4 ml-[-18px]   pt-1 w-[px]"></span>
                        <span className="  text-black    mt-1"></span>
                      </div>
                      <div className="flex flex-col-2  ...">
                        <span className="  text-black  pl-3 pt-1 w-[86px]"></span>
                        <span className="  text-black  ml-[190px] mt-[9px]">
                          Brake System
                        </span>
                      </div>
                      <div className="">
                        <RadioGroup orientation="horizontal" className=" mt-2">
                          <Radio
                            size="sm"
                            classNames={{
                              wrapper:
                                "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                              control: "bg-white",
                              base: "border-persianGreen ml-4",
                            }}
                            value="F/R"
                          >
                            <span className="font-bold">Split</span>
                          </Radio>
                          <Radio
                            size="sm"
                            classNames={{
                              wrapper:
                                "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                              control: "bg-white",
                              base: "border-persianGreen ml-6",
                            }}
                            value="Diagonal"
                          >
                            <span>
                              <span className="font-bold">Non-Split</span>
                            </span>
                          </Radio>
                        </RadioGroup>
                      </div>
                    </div>
                  </>
                </ModalBody>
                <div className="flex justify-center mb-4">
                  <Button
                    className={`bg-persianGreen  text-white rounded-sm `}
                    variant="bordered"
                    size="sm"
                  >
                    Save
                  </Button>
                  <Button
                    className={`bg-white text-black shadow-sm rounded-sm ml-6  `}
                    variant="bordered"
                    size="sm"
                    type="submit"
                    onClick={handleClose}
                    onPress={onClose}
                    data-testid="close-button"
                  >
                    Quit
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

export default BrakeTestConfigPopUp;
