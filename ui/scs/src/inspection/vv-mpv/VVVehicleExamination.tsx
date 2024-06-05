import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";

export default function VVVehicleExamination() {
  return (
    <div>
      <div className="flex text-left ml-2 text-sm font-[Calibri] font-bold text-[#009b77]">
        VV / MPV Enquiry {">"} Vehicle and Examination Information
      </div>
      <h1 className="h-[200px] mt-3  mr-2 ml-2  ">
        <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm font-[Calibri] text-[#009b77]">
          Searching Criteria
        </h5>
        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-row justify-stretch">
            <div className="text-sm font-[Calibri] font-bold w-[20%] mt-1">
              VV/MPV
            </div>
            <div className="w-[200px]  ml-[10%]">
              <Select
                labelPlacement="outside-left"
                size="sm"
                radius="none"
                name="vvmpv"
                variant="bordered"
                placeholder="Select"
              >
                <SelectItem key="MPV" value="MPV">
                  MPV
                </SelectItem>
                <SelectItem key="VV" value="VV">
                  VV
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-row flex-shrink">
            <div className="text-sm font-[Calibri] font-bold  mt-1">
              VV Vehicle Type
            </div>
            <div className="w-[200px]  ml-[15%]">
              <Select
                labelPlacement="outside-left"
                size="sm"
                radius="none"
                name="vvmpv"
                variant="bordered"
                placeholder="Select"
              >
                <SelectItem key={""}></SelectItem>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center mt-3  ">
          <div className="ml-3  text-sm font-[Calibri] font-bold ">
            Chassis No
          </div>
          <div className="w-[480px] ml-10">
            <Input
              name="chassisNo"
              radius="none"
              variant="bordered"
              size="sm"
              maxLength={25}
              endContent={0 + "/" + 25}
            />
          </div>
          <div className="flex flex-row  ml-[15%] ">
            <div className="text-sm font-[Calibri] font-bold   ">
              <Checkbox
                size="md"
                classNames={{
                  wrapper: "after:bg-[#009B77] mt-1 text-sm",
                }}
                radius="sm"
                // className="ml-[10%]"
              />
            </div>
            <div className="mt-1 text-sm font-[Claibri] ">
              Compare alphanumeric characters only
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center mt-2">
          <div className="w-[100px]  text-sm font-[Calibri] font-bold">
            Float Name
          </div>
          <div className="w-[480px] ml-4">
            <Input name="floatNo" radius="none" variant="bordered" size="sm" />
          </div>
          <div className="flex flex-row items-center mt-2 ml-[10%] ">
            <div className="  text-sm font-[Calibri] font-bold">VV No </div>
            <div className="w-[400px] ml-5">
              <Input
                name="chassisNo"
                radius="none"
                variant="bordered"
                size="sm"
                placeholder="Choose Center"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-2 mr-1  mt-3">
          <Button
            className={`bg-[#ffffff] text-[black] font-[Calibri] text-sm font-bold rounded-sm ml-1 `}
            variant="bordered"
            size="sm"
            //onClick={resetFields}
          >
            Cancel
          </Button>

          <Button
            className={`bg-[#00AF8F] font-[Calibri] text-sm font-bold text-[white] rounded-sm ml-1 w-[150px]`}
            variant="bordered"
            size="sm"
            type="submit"
            //onClick={search}
          >
            Search
          </Button>
        </div>
      </h1>
    </div>
  );
}
