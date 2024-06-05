import React, { useState } from "react";
import { Checkbox, CheckboxGroup, Input, Radio, RadioGroup } from "@nextui-org/react";
import MorePopup from "./MorePopup";
import { CircleCheck } from "tabler-icons-react";



export default function StampInputCertificate() {
    
    const [isOpen, setIsOpen] = useState(false);

  const handleopen = () => {
    setIsOpen(!isOpen);
  };
    return(
      
      <div className="mt-1  ">
          <div className="flex bg-[#f0fdf4] h-6">
            <CircleCheck
              size={20}
              strokeWidth={2}
              //color={"white"}
              className="  mr-2 ml-3  bg-[#4ade80] text-white   rounded-xl"
            />
            <span className="text-sm font-[Calibri]  text-[#40bf4c]">
              Inspection Result:Pass
            </span>
          </div>
        <div className="mr-1 mt-3 ml-1">
        <h1>
          <h5 className="absolute -top  start-3 font-[Calibri] pl-[10px] pr-[10px] text-md text-[#00AF8F] ">
            Stamp
          </h5>
          <div className="flex items-center  h-[100%]">
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
                      wrapper: "after:bg-[#00af8f]  before:bg-[#e5e7eb]",
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
                      wrapper: "after:bg-[#00af8f]  before:bg-[#e5e7eb]",
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
                      wrapper: "after:bg-[#00af8f]  before:bg-[#e5e7eb]",
                    }}
                  ></Checkbox>
                </CheckboxGroup>
                <div className="text-sm font-[Calibri] text-black font-bold  ">
                  Excess Lenght
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
                  style={{ background: "#e5e7eb " }}
                />
              </div>{" "}
              <div className="mt-5 font-[Calibri] text-sm">(t)</div>
            </div>

            <div className="flex  item-center ml-4 ">
              <div className=" flex flex-row  col-span-2 text-[10px] mt-5 ">
                <CheckboxGroup radius="none" size="sm" className="ml-1">
                  <Checkbox
                    classNames={{
                      wrapper: "after:bg-[#00af8f]  before:bg-[#e5e7eb]",
                    }}
                  ></Checkbox>
                </CheckboxGroup>
                <div className="text-sm  font-[Calibri] text-black font-bold  ">
                  Left Hand Drive
                </div>
              </div>
              <div className="col-span-2 mt-5 ml-1">
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
            {isOpen ? (
              <div className="  ml-10 flex  flex-row item center gap-1">
                <div
                  className="  col-span-2 text-sm mt-4 ml-7 font-[Calibri] text-[#008FAF] cursor-pointer "
                  style={{ fontStyle: "italic" }}
                  onClick={handleopen}
                >
                  Collapse
                </div>
              </div>
            ) : (
              <div className="  ml-10 flex  flex-row item center gap-1">
                <div
                  className="  col-span-2 text-sm mt-4 ml-7 font-[Calibri]  text-[#008FAF] cursor-pointer "
                  style={{ fontStyle: "italic" }}
                  onClick={handleopen}
                >
                  More...
                </div>
              </div>
            )}
          </div>
          {isOpen ? <MorePopup /> : ""}
        </h1>
      </div>
      </div>
    )
}