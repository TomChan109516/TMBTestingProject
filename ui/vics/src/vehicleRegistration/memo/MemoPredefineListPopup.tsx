import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import {
  Checkbox,
  Radio,
  RadioGroup,

} from "@nextui-org/react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  Textarea,
} from "@nextui-org/react";
import ExpandComponent from "./ExpandComponent";

function MemoAddPopup(props) {
  const [isExpand, setIsExpand] = useState(false);
  const [expandData, setExpandData] = useState({});

  const location = {
    heading: "Location",
    data: [1, 2, 3, 4],
  };
  const defect = {
    heading: "Defects",
    data: [1, 2, 3, 4],
  };
  const component = {
    heading: "Component",
    data: [],
  };
  const system = {
    heading: "System",
    data: [1, 2],
  };

  const handleClose = () => {
    props.closePopup(false);
  };
  return (
    <>
      <Modal
        isOpen={true}
        size="3xl"
        radius="none"
        className="font-calibri text-inputTxt  "
        onClose={handleClose}
      >
        <ModalContent className="mb-3">
          <ModalBody>
            <div className="grid gap-4 grid-cols-4">
              <div className="rde-1   w-[100%]">
                <h1 className="text-left font-bold border-white"> Location</h1>
                <h1 className="text-left  border-white">Axle:</h1>
                <div className="">
                  <Select
                    labelPlacement="outside-left"
                    data-testid="vehicleClass"
                    className="w-[169px] mr-[9px] bg-white   "
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
                  <div className="h-[145px] overflow-y-scroll border-1 border-greyBorder  mt-2 w-[100%]">
                    <div className="ml-1">
                      <div className="w-[50%] text-left">
                        <Checkbox radius="none">01</Checkbox>
                      </div>
                      <div className="w-[50%] text-left ">
                        <Checkbox radius="none">02</Checkbox>
                      </div>
                      <div className="w-[50%] text-left ">
                        <Checkbox radius="none">03</Checkbox>
                      </div>
                      <div className="w-[50%] text-left ">
                        <Checkbox radius="none">04</Checkbox>
                      </div>
                      <div className="w-[50%] text-left ">
                        <Checkbox radius="none">05</Checkbox>
                      </div>
                    <div className="absolute bottom-[45%] ">
                      <svg
                        data-testid="location-expand-icon"
                        onClick={() => {
                          setIsExpand(true);
                          setExpandData(location);
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#706b6d"
                        stroke-width="1.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M16 4l4 0l0 4" />
                        <path d="M14 10l6 -6" />
                        <path d="M8 20l-4 0l0 -4" />
                        <path d="M4 20l6 -6" />
                        <path d="M16 20l4 0l0 -4" />
                        <path d="M14 14l6 6" />
                        <path d="M8 4l-4 0l0 4" />
                        <path d="M4 4l6 6" />
                      </svg>
                    </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[100%]">
                <h1 className="text-left font-bold border-white"> System</h1>
                <div className="h-[200px] overflow-y-scroll border-1 border-greyBorder  mt-2 w-[100%]">
                  <div className="absolute bottom-[45%] left-[27.5%]">
                    <svg
                      onClick={() => {
                        setIsExpand(true);
                        setExpandData(system);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#706b6d"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M16 4l4 0l0 4" />
                      <path d="M14 10l6 -6" />
                      <path d="M8 20l-4 0l0 -4" />
                      <path d="M4 20l6 -6" />
                      <path d="M16 20l4 0l0 -4" />
                      <path d="M14 14l6 6" />
                      <path d="M8 4l-4 0l0 4" />
                      <path d="M4 4l6 6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-[100%] ">
                <h1 className="text-left font-bold border-white"> Component</h1>
                <div className="h-[200px] overflow-y-scroll border-1 border-greyBorder  mt-2 w-[100%]">
                  <div className="">
                    <svg
                      onClick={() => {
                        setIsExpand(true);
                        setExpandData(component);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#706b6d"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize absolute bottom-[45%] left-[51.5%]"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M16 4l4 0l0 4" />
                      <path d="M14 10l6 -6" />
                      <path d="M8 20l-4 0l0 -4" />
                      <path d="M4 20l6 -6" />
                      <path d="M16 20l4 0l0 -4" />
                      <path d="M14 14l6 6" />
                      <path d="M8 4l-4 0l0 4" />
                      <path d="M4 4l6 6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-[100%]">
                <h1 className="text-left font-bold border-white"> Defects</h1>
                <div className="h-[200px] overflow-y-scroll border-1 border-greyBorder  mt-2 w-[100%]">
                  <div className="">
                    <svg
                      onClick={() => {
                        setIsExpand(true);
                        setExpandData(defect);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#706b6d"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize absolute bottom-[45%] "
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M16 4l4 0l0 4" />
                      <path d="M14 10l6 -6" />
                      <path d="M8 20l-4 0l0 -4" />
                      <path d="M4 20l6 -6" />
                      <path d="M16 20l4 0l0 -4" />
                      <path d="M14 14l6 6" />
                      <path d="M8 4l-4 0l0 4" />
                      <path d="M4 4l6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 grid-cols-4 mb-2">
              <div className="col-span-3">
                <Textarea
                  placeholder=""
                  radius="none"
                  disableAnimation
                  disableAutosize
                  variant="bordered"
                  className="border- "
                  classNames={{
                    input: "resize-y h-[140px] resize-x w-[650px] ",
                  }}
                />
              </div>
              <div className="col-span-1">
                <div className="">
                  <Button
                    size="sm"
                    className="bg-persianGreen font-bold rounded-none  text-white h-8  rounded  w-[170px]      "
                    radius="none"
                  >
                    Add Defect
                  </Button>
                </div>
                <div className="flex gap-2 mt-3">
                  <div className="">
                    <Button
                      size="sm"
                      className="bg-darkGrey font-bold text-white h-8 mt-1 rounded  w-[50px] h-[30px]     "
                      radius="none"
                    >
                      ENG
                    </Button>
                  </div>
                  <div className="">
                    <Button
                      size="sm"
                      className="bg-persianGreen font-bold text-white h-8 mt-1 rounded  w-[50px] h-[30px]     "
                      radius="none"
                    ></Button>
                  </div>
                </div>
                <div className="mt-11">
                  <Button
                    size="sm"
                    className="bg-persianGreen font-bold text-white h-8  rounded  w-[170px]      "
                    radius="none"
                    onClick={handleClose}
                  >
                    Save Defect Selection
                  </Button>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      {isExpand && (
        <ExpandComponent
          expandData={expandData}
          onClose={() => {
            setIsExpand(false);
          }}
        />
      )}
    </>
  );
}

export default MemoAddPopup;
