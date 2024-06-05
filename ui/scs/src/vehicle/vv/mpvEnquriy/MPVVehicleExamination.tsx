import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";

export default function MPVVehicleExamination() {
  const [vehicleType, setVehicleType] = useState<Set<string>>(new Set(["MPV"]));

  return (
    <div>
      <div className="flex text-left ml-2 mt-1 text-sm font-[Calibri] font-bold text-[#009b77]">
        VV / MPV Enquiry {">"} Vehicle and Examination Information
      </div>
      <h1 className="h-[200px] mt-3  mr-2 ml-2  ">
        <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm font-[Calibri] text-[#009b77]">
          Searching Criteria
        </h5>
        {/* <div className="grid grid-cols-2 mt-4"> */}
        <div className="flex flex-row mt-4 ">
          <div className=" flex text-sm font-[Calibri] font-bold  ml-4 mt-1">
            VV/MPV
          </div>
          <div className="w-[20%]  ml-[56px]  ">
            <Select
              labelPlacement="outside-left"
              size="sm"
              radius="none"
              name="vvmpv"
              variant="bordered"
              selectedKeys={vehicleType}
              onChange={(e) =>
                setVehicleType(new Set(e.target.value.split(",")))
              }
            >
              <SelectItem className="text-[10px]" key="MPV" value="MPV">
                MPV
              </SelectItem>
              <SelectItem className="text-[10px]" key="VV" value="VV">
                VV
              </SelectItem>
            </Select>
          </div>
          <div
            className="..."
            hidden={vehicleType.values().next().value === "MPV"}
          >
            <div className="flex flex-row">
              <div className="text-sm font-[Calibri] font-bold  ml-[60px] mt-1">
                VV Vehicle Type
              </div>
              <div className="w-[200px] ml-[60px]">
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
          <div
            className=".."
            hidden={vehicleType.values().next().value === "VV"}
          >
            <div className="flex flex-row  ml-[60px]">
              <div className="flex text-sm font-[Calibri] font-bold  mt-1">
                Vehicle Class
              </div>
              <div className="w-[200px]  ml-[50px]">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  radius="none"
                  name="vehcileClass"
                  variant="bordered"
                  placeholder="Select"
                >
                  <SelectItem key={""}></SelectItem>
                </Select>
              </div>
              <div className="flex flex-row ml-[60px]">
                <div className="text-sm font-[Calibri] font-bold ml-5 mt-1">
                  Sub Class
                </div>
                <div className="w-[200px] ml-10">
                  <Select
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    name="subClass"
                    variant="bordered"
                    placeholder="Select"
                  >
                    <SelectItem key={""}></SelectItem>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center mt-3">
          <div className="ml-4  text-sm font-[Calibri] font-bold">
            Chassis No.
          </div>
          <div className="w-[40%] ml-10">
            <Input
              name="chassisNo"
              data-testid="chassisno"
              radius="none"
              variant="bordered"
              size="sm"
              maxLength={25}
              endContent={0 + "/" + 25}
            />
          </div>
          <div className="flex flex-row  ml-[14.5%]">
            <div className="text-sm font-[Calibri] font-bold">
              <Checkbox
                size="md"
                radius="none"
                classNames={{
                  wrapper:
                    "after:bg-[#009B77] before:bg-[#e5e7eb] mt-1 text-sm",
                }}
                // className="ml-[10%]"
              />
            </div>
            <div className="mt-1 text-sm font-[Claibri]">
              Compare alphanumeric characters only
            </div>
          </div>
        </div>
        <div className="flex flex-row  mt-2">
          <div className=" text-sm font-[Calibri] font-bold ml-4">
            Float Name
          </div>
          <div className="w-[40%] ml-[40px] mr-12">
            <Input
              name="floatName"
              radius="none"
              data-testid="floatname"
              variant="bordered"
              size="sm"
            />
          </div>
          <div hidden={vehicleType.values().next().value === "MPV"}>
            <div className="flex flex-row  ml-9">
              <div className="  text-sm font-[Calibri] font-bold mt-1">
                VV No{" "}
              </div>
              <div className="w-[400px] ml-[60px] ">
                <Input
                  name="vvNo"
                  radius="none"
                  variant="bordered"
                  size="sm"
                  placeholder="Choose Center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-2 mr-1 mt-4">
          <Button
            className={`bg-[#ffffff] text-[black] font-[Calibri] text-sm font-bold rounded-sm ml-1 mr-4 `}
            variant="bordered"
            size="sm"
            //onClick={resetFields}
          >
            Cancel
          </Button>

          <Button
            className={`bg-[#00AF8F] font-[Calibri] text-sm font-bold text-[white] rounded-sm ml-1 w-[150px]`}
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
