import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";

function PoliceReport(){
  return (
    <div className="pt-[10px]">
      <div className="flex">
        <div className="flex-initial text-[#0a923d] p-[10px]  font-bold text-sm">
          Police Report
        </div>
      </div>
      <div>
        <div className="mt-[10px] ml-2 mr-2 font-[calibri]">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Police Report
            </h5>
            <div className="text-[12px] font-bold mt-3">
              Transport Department - Vehicle Examination Centre
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="grid grid-rows-5 grid-flow-col whitespace-nowrap mt-[-1px]">
                <div className="flex flex-row  pt-[16px]">
                  <div className="ml-2 text-[12px] font-bold mt-[6px]">
                    Centre:
                  </div>
                  <div className="w-full pl-[158px]">
                    <Select
                      labelPlacement="outside-left"
                      size="sm"
                      radius="none"
                      name="lane"
                      variant="bordered"
                      placeholder="Select"
                    >
                      <SelectItem key={""}>
                        Transport Department Vehicle Examination Complex
                      </SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row mt-[2px]">
                  <div className="text-[#ff4e4e] ml-2">*</div>
                  <div className="ml-2 text-[12px] font-bold mt-[5px]">
                    Examination Date and Time:
                  </div>
                  <div className="w-full pl-[38px]">
                    <Input
                      id="standard-basic"
                      variant="bordered"
                      radius="none"
                      size="sm"
                      maxLength={25}
                      name="chasisNo"
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-[-12px]">
                  <div className="ml-2 text-[12px] font-bold font-[calibri] mt-[7px]">
                    Vehicle Class:
                  </div>
                  <div className="w-full pl-[127px]">
                    <Select
                      labelPlacement="outside-left"
                      id="vehicleClass"
                      size="sm"
                      radius="none"
                      variant="bordered"
                      placeholder="Select..."
                    >
                      <SelectItem key={""}></SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row mt-[-27px]">
                  <div className="ml-2 text-[12px] font-bold mt-[5px]">
                    Vehicle Details:
                  </div>
                  <div className="w-full pl-[118px]">
                    <Input
                      id="standard-basic"
                      variant="bordered"
                      radius="none"
                      size="sm"
                      maxLength={25}
                      name="chasisNo"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-1 mt-[-40px]  ">
                  <div className="ml-2 text-[12px] font-bold mt-[5px]">
                    Name of MVE:
                  </div>
                  <div className="w-full  pl-[118px]">
                    <Input
                      id="standard-basic"
                      name="vehicleMake"
                      size="sm"
                      radius="none"
                      variant="bordered"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-5 grid-flow-col whitespace-nowrap ml-3">
                <div className="flex flex-row  pt-[16px]">
                  <div className="ml-2 text-[12px] font-bold mt-[5px]">
                    Office Phone:
                  </div>
                  <div className="w-full pl-[86px] mr-2">
                    <Input
                      id="standard-basic"
                      variant="bordered"
                      radius="none"
                      size="sm"
                      maxLength={25}
                      name="chasisNo"
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-[2px]">
                  <div className="ml-2 text-[12px] font-bold mt-[5px]">
                    Name of Examiner:
                  </div>
                  <div className="w-full pl-[58px] mr-2">
                    <Input
                      id="standard-basic"
                      variant="bordered"
                      radius="none"
                      size="sm"
                      maxLength={25}
                      name="chasisNo"
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-[-12px]">
                  <div className="ml-2 text-[12px] font-bold mt-[5px]">
                    HKID Card No:
                  </div>
                  <div className="w-full pl-[82px] mr-2">
                    <Input
                      id="standard-basic"
                      variant="bordered"
                      radius="none"
                      size="sm"
                      maxLength={25}
                      name="chasisNo"
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-[-26px]">
                  <div className="ml-2 text-[12px] font-bold mt-[3px]">
                    Registration Mark:
                  </div>
                  <div className="w-full pl-[61px] mr-2">
                    <Input
                      id="standard-basic"
                      variant="bordered"
                      radius="none"
                      size="sm"
                      maxLength={25}
                      name="chasisNo"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-1 mt-[-40px]  ">
                  <div className="ml-2 text-[12px] font-bold mt-[5px]">
                    Name of MVEII:
                  </div>
                  <div className="w-full pl-[71px] mr-2">
                    <Input
                      id="standard-basic"
                      name="vehicleMake"
                      size="sm"
                      radius="none"
                      variant="bordered"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end pb-[10px] mr-2 mt-[-16px]">
              <Button
                type="button"
                radius="none"
                size="sm"
                className="ml-[5px] bg-[#00AF8F] text-white rounded-sm"
              >
                Generate
              </Button>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PoliceReport;
