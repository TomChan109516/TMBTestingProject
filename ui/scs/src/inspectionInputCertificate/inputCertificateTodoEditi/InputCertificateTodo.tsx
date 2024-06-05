import React, { useState } from "react";
import { IconInfoCircle } from "@tabler/icons-react";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import {
  Input,
  RadioGroup,
  Radio,
  SelectItem,
  Select,
} from "@nextui-org/react";
import CertificateEditi from "./CertificateEditi";
import TestModuleTodoEditi from "./TestModuleTodoEditi";

export default function InputCertificateTodo() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleopen = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <div>
        <div className="mb-3 ml-3">
          <div className="flex bg-[#f3f4f6] h-6">
            <IconInfoCircle
              size={18}
              strokeWidth={2}
              className="bg-[gray] text-white rounded-xl"
            />
            <span className="text-sm text-[gray] ml-1  font-[Calibri]">
              Inspection Status:Todo
            </span>
          </div>
        </div>
        <div className="mr-1 mt-3 ml-1">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-[Calibri] text-[#00AF8F] ">
              Appointment Information
            </h5>
            <div className="grid grid-cols-8 pt-4 pb-4 pr-1  pl-1gap-0  ">
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold font-[Calibri] text-left pl-2 pt-2">
                    Vehicle ID{" "}
                    <span className="ml-2 font-[Calibri] font-normal">
                      {" "}
                      {"000328190"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold font-[Calibri] text-left pl-2 pt-2">
                    Vehicle Class{" "}
                    <span className="ml-2  font-[Calibri] font-normal">
                      {" "}
                      {"001"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black  font-[Calibri] font-bold text-left pl-2 pt-2">
                    Chassis No.{" "}
                    <span className="ml-2 font-[Calibri] font-normal">
                      {" "}
                      {" WDC1569432J673421"}
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex-row flex-shrink col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm  font-[Calibri] text-black font-bold text-left pl-2 pt-2">
                    Reg Mark{" "}
                    <span className="ml-1 text-sm  font-[Calibri] font-normal">
                      {" "}
                      {"XXX000"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm font-[Calibri] text-black font-bold text-left pl-2 pt-2">
                    Appointment No.{" "}
                    <span className="ml-2 text-sm font-[Calibri]  font-normal">
                      {" "}
                      {"112023000490"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold  font-[Calibri] text-left pl-2 pt-2">
                    Center(Lane){" "}
                    <span className="ml-2 text-md  font-[Calibri] font-normal">
                      {" "}
                      {"TY(11)"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold font-[Calibri] text-left pl-2 pt-2">
                    Exam Code{" "}
                    <span className="ml-2 text-md  font-[Calibri] font-normal">
                      {" "}
                      008
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold font-[Calibri] text-left pl-2 pt-2">
                    Inspection Date{" "}
                    <span className="ml-2 text-sm font-[Calibri]  font-normal">
                      {" "}
                      06/11/2023 09.00{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className="mt-4">
          <div className="mr-1 mt-2 ml-1">
            <h1>
              <h5 className="absolute -top  start-3  font-[Calibri]  pl-[10px] pr-[10px] text-md text-[#00AF8F] ">
                Inspection Information
              </h5>
              <div className="grid grid-cols-4 pt-4 pb-4 pr-1  pl-1gap-0  ">
                <div className="col-span-2 ...">
                  <div className="flex flex-col-2  ...">
                    <div className="text-sm mt-5 text-black font-bold font-[Calibri] text-left pl-2 pt-2">
                      Date{" "}
                      <span className="ml-9 font-normal font-[Calibri] ">
                        {" "}
                        {"06/11/2023"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 ...">
                  <div className="flex flex-col-2  ...">
                    <div className="text-sm  font-[Calibri] text-black font-bold text-left pl-2 pt-2">
                      Time
                      <div className=" mt-4  inline-flex ml-14">
                        <Input
                          placeholder="18"
                          id="standard-basic"
                          variant="bordered"
                          size="sm"
                          radius="none"
                          className=" ml-1 mt-1 w-[100px] "
                        />
                      </div>
                      <span>:</span>
                      <div className=" mt-4  inline-flex">
                        <Input
                          placeholder="00"
                          id="standard-basic"
                          variant="bordered"
                          size="sm"
                          radius="none"
                          className=" ml-1 mt-1 w-[100px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 ...">
                  <div className="flex flex-col-2  ...">
                    <div className="text-sm font-[Calibri] mt-2  text-black font-bold text-left pl-2 pt-2">
                      Lane
                    </div>
                    <div className=" w-1/3 mt-1 ml-8">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        variant="bordered"
                      >
                        <SelectItem key="11"> 11</SelectItem>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className=" flex-row flex-shrink col-span-2 ...">
                  <div className="flex flex-col-2  ...">
                    <div className="text-sm mt-5  font-[Calibri]  text-black font-bold text-left pl-2 pt-2">
                      Reg Mark
                    </div>
                    <div className=" mt-4  inline-flex ml-8">
                      <Input
                        placeholder="TT4085"
                        id="standard-basic"
                        variant="bordered"
                        size="sm"
                        radius="none"
                        className=" ml-1 mt-1 w-[200px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-2 ...">
                  <div className="flex flex-col-2  ...">
                    <div className="text-sm  font-[Calibri]  text-black font-bold text-left pl-2 pt-2">
                      Input By{" "}
                      <span className="ml-2 text-xs font-normal"> {""}</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 ...">
                  <div className="flex flex-col-2  ...">
                    <div className="text-sm font-[Calibri]  text-black font-bold text-left pl-2 pt-2">
                      Source <span className="text-[black]">*</span>
                      <span className="ml-2 text-md font-normal font-[Calibri] ">
                        {" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </h1>
          </div>
        </div>
        <div className="mt-1  ">
          <div className="mr-1 mt-3 ml-1">
            <h1>
              <h5 className="absolute -top  start-3 font-[Calibri] pl-[10px] pr-[10px] text-md text-[#00AF8F] ">
                Stamp
              </h5>
              <div className="flex items-center  h-[60px]">
                <div className="flex item-center gap-1 ml-1">
                  <div className=" flex  col-span-2 text-[10px] mt-5">
                    <CheckboxGroup
                      radius="none"
                      size="sm"
                      //className=""
                    >
                      <Checkbox
                        classNames={{
                          wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]",
                        }}
                      ></Checkbox>
                    </CheckboxGroup>
                    <div className="text-sm  text-black font-bold font-[Calibri]  ">
                      Excess Weight
                    </div>
                  </div>
                  <div className=" mt-2">
                    <Input
                      isDisabled={true}
                      id="standard-basic"
                      variant="bordered"
                      size="sm"
                      radius="none"
                      className=" ml-1 mt-1 w-[70px] bg-[#e5e7eb]"
                      style={{ background: "#e5e7eb" }}
                    />
                  </div>
                  <div className="mt-4 font-[Calibri] text-sm">(t)</div>
                </div>
                <div className="flex item-center gap-1 ml-4">
                  <div className=" flex flex-row col-span-2 text-[10px] mt-5">
                    <CheckboxGroup
                      radius="none"
                      size="sm"
                      //value="Excess Width"
                    >
                      <Checkbox
                        classNames={{
                          wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]",
                        }}
                      ></Checkbox>
                    </CheckboxGroup>
                    <div className="text-sm font-[Calibri] text-black font-bold  ">
                      Excess Width
                    </div>
                  </div>
                  <div className=" mt-2">
                    <Input
                      isDisabled={true}
                      id="standard-basic"
                      variant="bordered"
                      size="sm"
                      radius="none"
                      className=" ml-1 mt-1 w-[70px] bg-[#e5e7eb]"
                      style={{ background: "#e5e7eb" }}
                    />
                  </div>
                  <div className="mt-4 font-[Calibri] text-sm ">(t)</div>
                </div>
                <div className="flex item-center gap-1 ml-4">
                  <div className="  flex flex-row col-span-2 item-center text-[10px] mt-7">
                    <CheckboxGroup radius="none" size="sm" className="">
                      <Checkbox
                        classNames={{
                          wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]",
                        }}
                      ></Checkbox>
                    </CheckboxGroup>
                    <div className="text-sm font-[Calibri]  text-black font-bold mb-4 ">
                      Excess Height
                    </div>
                  </div>
                  <div className=" mt-4">
                    <Input
                      isDisabled={true}
                      id="standard-basic"
                      variant="bordered"
                      size="sm"
                      radius="none"
                      className=" ml-1 mt-1 w-[70px] bg-[#e5e7eb]"
                      style={{ background: "#e5e7eb" }}
                    />
                  </div>
                  <div className="mt-7 font-[Calibri] text-sm">(t)</div>
                </div>
                <div className="flex item-center gap-1 ml-4">
                  <div className="  flex flex-row col-span-2 text-[10px] mt-5">
                    <CheckboxGroup radius="none" size="sm" className="">
                      <Checkbox
                        classNames={{
                          wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]",
                        }}
                      ></Checkbox>
                    </CheckboxGroup>
                    <div className="text-sm font-[Calibri] text-black font-bold  ">
                      Excess lenght
                    </div>
                  </div>
                  <div className=" mt-2">
                    <Input
                      isDisabled={true}
                      id="standard-basic"
                      variant="bordered"
                      size="sm"
                      radius="none"
                      className=" ml-1 mt-1 w-[70px] bg-[#e5e7eb]"
                      style={{ background: "#e5e7eb" }}
                    />
                  </div>{" "}
                  <div className="mt-5 font-[Calibri] text-sm">(t)</div>
                </div>

                <div className="flex  item-center ml-4 ">
                  <div className=" flex flex-row  col-span-2 text-[10px] mt-5 ">
                    <CheckboxGroup radius="none" size="sm" className="ml-1">
                      <Checkbox
                        classNames={{
                          wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]",
                        }}
                      ></Checkbox>
                    </CheckboxGroup>
                    <div className="text-sm  font-[Calibri] text-black font-bold  ">
                      Left Hand Drive
                    </div>
                  </div>
                  <div className="col-span-2 mt-4 ml-1">
                    <RadioGroup size="sm" orientation="horizontal">
                      <Radio
                        classNames={{
                          wrapper: "after:bg-[#00af8f]  before:bg-[#e5e7eb]",
                        }}
                        value="Y"
                        className="ml-1 font-[Calibri] text-md font-bold "
                      >
                        Y
                      </Radio>
                      {/* <div className="font-[Calibri] text-sm  ">Y</div> */}
                      <Radio
                        value="N"
                        classNames={{
                          wrapper: "after:bg-[#00af8f]  before:bg-[#e5e7eb] ",
                        }}
                        className="font-[Calibri] text-md font-bold"
                      >
                        N
                      </Radio>
                      {/* <div className="font-[Calibri] text-sm "  >N</div> */}
                    </RadioGroup>
                  </div>
                </div>
                <div className="  ml-10 flex  flex-row item center gap-1">
                  <div
                    className="  text-[#00AF8F] col-span-2 text-sm mt-4 ml-7"
                    style={{ fontStyle: "italic" }}
                  >
                    More..
                  </div>
                </div>
              </div>
            </h1>
          </div>
          <CertificateEditi />
        </div>
        <div>
          <TestModuleTodoEditi />
        </div>
      </div>
    </>
  );
}
