import React from "react";
import { Button, Checkbox, Input } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import PropTypes from 'prop-types';

export function TestConfig(props) {
  const open = props.showTestConfig;
    const handleClose = () => {
       props.closeTestConfig(false);
    };
  

  return (
    <div className="w-screen h-screen">
      <Modal
        size="5xl"
        isOpen={open}
        onClose={handleClose}
        isDismissable={false}
        radius="none"
        className="h-[60%] rounded-sm"
        classNames={{
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          header: "bg-[#d8f1f0] font-bold text-[14px]",
          closeButton: "hover:bg-white/4 active:bg-white/10",
          body: "px-0 py-0",
        }}
      >
        <ModalContent>
          <ModalHeader>
            <div className="ml-[450px]">Test Config</div>
          </ModalHeader>
          <ModalBody></ModalBody>

          <div className="grid grid-cols-3 text-right gap-1   text-inputTxt">
            <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri font-bold ">
              <span className=" ml-[-12px] w-[40%] ">Speed Setting</span>
              <Input
                labelPlacement="outside-left"
                className="ml-5 w-[50%]"
                radius="none"
                size="sm"
                variant="bordered"
                placeholder="50"
              ></Input>
            </div>
            <div className=" flex flex-grow-0 m-1  items-center mt-5 font-calibri font-bold ">
              <span className="ml-[-12px] w-[30%] ">Speed Test Mode</span>
              <Select
                labelPlacement="outside-left"
                size="sm"
                className="ml-5 w-[50%]"
                radius="none"
                variant="bordered"
                placeholder="Wheel Driven"
              >
                <SelectItem key={1}>Data1</SelectItem>
              </Select>
            </div>
            <div className="flex   m-1 items-center mt-5 font-calibri  font-bold ">
              <span className="ml-[-12px] w-[20%]  ">Propulation </span>
              <Select
                labelPlacement="outside-left"
                size="sm"
                className="ml-5 w-[50%]"
                radius="none"
                variant="bordered"
                placeholder="Front-wheel Driven"
              >
                <SelectItem key={1}>Data1</SelectItem>
              </Select>
            </div>
            <div className="flex m-1 items-center mt-5 font-calibri  font-bold ">
              <span className="  ml-[-12px] w-[40%] ">Wheel Test Type</span>
              <Select
                labelPlacement="outside-left"
                size="sm"
                className="ml-2 w-[50%]"
                radius="none"
                variant="bordered"
                placeholder="Leftand right Wheel Driven"
              >
                <SelectItem key={1}>Right</SelectItem>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 text-right gap-1 font-calibri text-inputTxt font-bold">
            <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
              <span className="ml-1  mr-1 w-[50%] ">Milleagesegment First</span>
              <Input
                placeholder="3000 "
                data-testid="bodyType"
                labelPlacement="outside-left"
                size="sm"
                className="ml-1  w-[50%]"
                radius="none"
                variant="bordered"
              ></Input>
            </div>
            <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
              <span className="ml-1 mr-3 w-[35%] ">Second</span>
              <Input
                placeholder="200"
                data-testid="engineNo"
                labelPlacement="outside-left"
                size="sm"
                className="ml-1 w-[60%]"
                radius="none"
                variant="bordered"
              ></Input>
            </div>
            <div className="flex m-1 items-center mt-5 font-calibri   ">
              <span className="ml-1 w-[36%] ">Third</span>
              <Input
                placeholder="200"
                data-testid="engineModel"
                labelPlacement="outside-left"
                size="sm"
                className="ml-2 w-[60%]"
                radius="none"
                variant="bordered"
              ></Input>
            </div>

            <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
              <span className="ml-1  mr-11w-[40%] "> Fourth</span>
              <Input
                placeholder="200"
                data-testid="engineCap"
                labelPlacement="outside-left"
                size="sm"
                className="ml-2 w-[60%]"
                radius="none"
                variant="bordered"
              ></Input>
            </div>
          </div>

          <div className="flex  flex-col justify-center  mb-8 ml-10 gap-3">
            <div className="grid grid-cols-3 text-right gap-4   text-inputTxt">
              <Checkbox defaultSelected radius="none">
                speed Limit Device
              </Checkbox>

              <Checkbox defaultSelected radius="none">
                Speedometer Test
              </Checkbox>

              <Checkbox defaultSelected radius="none">
                Speed Display Device (SDD) Test
              </Checkbox>
            </div>
            <div className="grid grid-cols-3 text-right gap-4   text-inputTxt">
              <Checkbox defaultSelected radius="none">
                Taximeter Test
              </Checkbox>
              <Checkbox defaultSelected radius="none">
                Long Distance Test
              </Checkbox>

              <Checkbox defaultSelected radius="none">
                Interference Test
              </Checkbox>
            </div>
          </div>
          <div className=" flex justify-center   mb-16 ml-8  ">
            <Button
              className=" bg-[#009B77] text-white rounded-md mr-8  font-bold text-xs"
              type="submit"
              size="sm"
              radius="none"
            >
              Save
            </Button>
            <Button
              className="bg-[#ffffff] rounded-md mr-8 font-bold text-xs "
              variant="bordered"
              type="submit"
              size="sm"
              radius="none"
              onClick={handleClose}
            >
              Quit
            </Button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}
TestConfig.propTypes = {
  showTestConfig: PropTypes.bool,
  closeTestConfig: PropTypes.func,
};
export default TestConfig;