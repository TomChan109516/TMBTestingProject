import {
  Modal,
  ModalContent,
  ModalBody,
  Select,
  SelectItem,
  Input,
  Divider,
  Checkbox,
  Button,
} from "@nextui-org/react";
import React from "react";

const CustomizeTestNameInformation = (props) => {
  const open = props.showCustomizeTestNameInformation;

  const handleClose = () => {
    props.setNameInformation(false);
  };

  return (
    <>
      <Modal
        size="3xl"
        isOpen={true}
        onClose={handleClose}
        isDismissable={false}
        radius="none"
        className=" flex font-calibri text-inputTxt overflow-y-auto w-[650px] h-[100%] "
      >
        <ModalContent className="mb-3 ">
          <div
            className="bg-[#ddf3f2] h-8 w-[100%] text-[15px] py-[3px] p-1 font-bold text-black text-center text-popupHeading:'16px',
     font-calibri p-3"
          >
            Customize Test Name Information
          </div>
          <ModalBody>
            <div className=" text-align-middle  mr-[150px]">
              <div>
                <div className=" mr-[2px]  text-right">
                  <label className="font-bold mr-2" htmlFor="Wheel label">
                    Exam Code
                  </label>

                  {props.isAddButtonClicked ? (
                    <Input
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[156px] inline-block border-lightGrey   bg-white p-1"
                      variant="bordered"
                      classNames={{ inputWrapper: "px-0 w-[151px]" }}
                    />
                  ) : (
                    <Input
                      isDisabled
                      radius="none"
                      labelPlacement="outside-left"
                      size="sm"
                      className="w-[154px]  h-[35px] inline-block  bg-darkGrey "
                      classNames={{ inputWrapper: "px-0" }}
                      variant="bordered"
                    />
                  )}
                </div>
                <div className="ml-1 text-right">
                  <label className="font-bold mr-2" htmlFor="Wheel label">
                    Exam Code CHI.Desc
                  </label>

                  <Input
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#f8f8f8] bg-white  p-1"
                    variant="bordered"
                  />
                </div>
                <div className=" ml-1 text-right">
                  <label className="font-bold mr-2" htmlFor="Wheel label">
                    Exam Code Eng.Desc
                  </label>

                  <Input
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#f8f8f8] bg-white  p-1"
                    variant="bordered"
                  />
                </div>
                <div className="my-1 mr-1  text-right">
                  <label className="mr-2 font-bold" htmlFor="Wheel label">
                    Vehicle Class
                  </label>
                  {props.isAddButtonClicked ? (
                    <Select
                      labelPlacement="outside-left"
                      data-testid="vehicleClass"
                      className="w-[150px] ml-[5px] bg-white   "
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                      placeholder="Select"
                    >
                      <SelectItem className="text-[10px]" key={""}>
                        VEE
                      </SelectItem>
                    </Select>
                  ) : (
                    <Select
                      labelPlacement="outside-left"
                      data-testid="vehicleClass"
                      className="w-[150px] ml-[5px] bg-darkGrey  "
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                      placeholder="Select"
                      isDisabled
                    >
                      <SelectItem className="text-[10px]" key={""}>
                        VEE
                      </SelectItem>
                    </Select>
                  )}
                </div>
              </div>

              <div className="flex  items-center space-x-19 -mx-[174px] mt-2 ">
                <Divider orientation="horizontal" />
              </div>
              <div className="font-bold text-black text-center w-[100%] text-[15px] my-1 ml-[74px]">
                {" "}
                Inspection Item
              </div>
            </div>
            <div className="item-center mr-[100px]">
              <div className="flex my-4 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Speedometer Test</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Speed Limit Device(SLD) Test</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Overhead Height Measurement</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Under-carriage Inspection</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Park Brake</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Speed Display Device(SDD) Test</label>
                  
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> long distance test </label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Interference test</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> 1st Service Brake</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> 2nd Service Brake</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> 3rd Service Brake</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> 4th Service Brake</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> 5th Service Brake</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> 6th Service Brake</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> 7th Service Brake</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> 8th Service Brake</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Secondary Brake</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Left main Lamp</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> left Secondary Lamp</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Right Main Lamp</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Right Secondary Lamp</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Axle weigh bridge Test</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Tilting stability test</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Taximeter Test</label>
                  </Checkbox>
                </div>
              </div>
              <div className="flex my-7 ">
                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Seals Verification and</label>
                  </Checkbox>
                </div>

                <div className="w-[50%] text-left font-bold">
                  <Checkbox defaultSelected radius="none">
                    <label className="text-[12px] font-bold"> Exhaust Emission Test</label>
                  </Checkbox>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button
                size="sm"
                className="bg-persianGreen font-bold text-white m-3 w-auto md:w-[150px] lg:w-[120px] xl:w-[100px] h-8 mt-1 border-1.5 rounded p-1"
                radius="none"
              >
                Save
              </Button>
              <Button
                size="sm"
                className="bg-white font-bold text-black m-3 w-auto md:w-[150px] lg:w-[120px] xl:w-[100px] h-8 mt-1 border-1.5 rounded p-1"
                radius="none"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomizeTestNameInformation;
