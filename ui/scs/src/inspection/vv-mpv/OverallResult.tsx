import { Button } from "@nextui-org/button";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { Select, SelectItem } from "@nextui-org/select";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Search } from "tabler-icons-react";

export default function OverallResult({ check }) {
  return (
    <>
      <div className=" ">
        <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-sm">
          VV / MPV Inspection {">"} Overall Result
        </div>
        <h1 className="mr-2 ml-3 ">
          <h5 className="absolute top mt-2 start-3 pl-[5px] pr-[5px] text-sm/[13px] text-[#00AF8F] ">
            Schedule Information
          </h5>
          <div className="mr-2 h[170px]">
            <div className="grid grid-cols-4  mt-2 h-[170px] mr-2 ">
              <div className="grid grid-cols-2 grid-rows-4 row-gap-2  mt-2">
                <div className="text-sm font-bold text-center">
                  Appoinment No.
                </div>
                <div className="text-sm text-left">b1</div>
                <div className="text-sm font-bold text-center mr-4">
                  Vehicle Class
                </div>
                <div className="text-sm text-left">MPV</div>
                <div className="text-sm font-bold text-center mr-6">
                  Chassis No.
                </div>
                <div className="text-sm text-left ">HKD/VIN#514650</div>
                <div className="text-sm font-bold text-center mr-3">
                  Renewal Date
                </div>
                <div className="text-sm text-left">02/11/2020 18:00:20</div>
              </div>
              <div className="grid grid-cols-2 grid-rows-4 row-gap-2  mt-2">
                <div className="text-sm font-bold text-start">Center(Lane)</div>
                <div className="text-sm text-left ">KMB(K2)</div>
                <div className="text-sm font-bold text-start">SubClass</div>
                <div className="text-sm text-left"></div>
                <div className="text-sm font-bold text-start">Size(L/W/H)</div>
                <div className="text-sm text-left">999.9/3352.8/4724.4</div>
                <div className="text-sm font-bold mr-3">
                  Type Size(1/2/3/4/5/6/7)
                </div>
                <div className="text-sm text-center">
                  22X9X16/22X9X16/-/-/-/
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-4 row-gap-2   mt-2">
                <div className="text-sm font-bold text-left">Exam Code</div>
                <div className="text-sm text-left">MPE</div>
                <div className="text-sm font-bold text-left">Make</div>
                <div className="text-sm text-left">b</div>
                <div className="text-sm font-bold text-left">Seat Capacity</div>
                <div className="text-sm text-left">L:0; U:0; S:0</div>
              </div>
              <div className="grid grid-cols-2 grid-rows-4  mt-2">
                <div className="text-sm font-bold text-left">
                  Inspection Date
                </div>
                <div className="text-sm text-left">02/11/2023 17:30</div>
                <div className="text-sm font-bold text-left">Color</div>
                <div className="text-sm text-left">/</div>
                <div className="text-sm font-bold text-left"> Float Name</div>
                <div className="text-sm  text-start">TINKER BELL</div>
              </div>
            </div>
          </div>
        </h1>
        <h1 className="mr-2 ml-3 mt-3">
          <div className="mr-2">
            <div className="grid grid-cols-4   mt-2 h-[170px] mr-2 ">
              <div className="grid grid-cols-2 grid-rows-4  mt-2">
                <div className="text-sm font-bold text-center">Text Module</div>
                <div className="text-sm text-left"></div>

                <div className="text-sm flex text-center col-span-2">
                  <Search
                    size={20}
                    color="white"
                    className="bg-[#00AF8F] rounded-sm ml-[40px]"
                  />
                  <div className="ml-2"> Movement Permit Exam</div>
                </div>
              </div>
              <div className="grid grid-cols-2  mt-2">
                <div className="text-sm font-bold text-left  mt-20 ml-[200px] ">
                  OverAllResult
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-4  mt-2 ml-10">
                <div className="text-sm font-bold text-left">Result</div>
                <div className="text-sm font-bold text-left ml-10">Assign </div>
                <div className="text-sm font-bold text-left ">
                  <Select
                    labelPlacement="outside-left"
                    className="w-[150px]"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    placeholder="Select"
                  >
                    <SelectItem></SelectItem>
                  </Select>
                </div>
                <div className="text-sm text-left ml-5">
                  <Select
                    labelPlacement="outside-left"
                    className="w-[150px]"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    placeholder="Select"
                  >
                    <SelectItem></SelectItem>
                  </Select>
                </div>
                <div className="text-sm font-bold text-left ">
                  <Select
                    labelPlacement="outside-left"
                    className="w-[150px]"
                    radius="none"
                    size="sm"
                    name="center"
                    data-testid="centerId"
                    aria-label="center"
                    variant="bordered"
                    placeholder="Select"
                  >
                    <SelectItem></SelectItem>
                  </Select>
                </div>
                <div className="text-sm text-left ml-5">
                  <Select
                    labelPlacement="outside-left"
                    className="w-[150px]"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    placeholder="Select"
                  >
                    <SelectItem></SelectItem>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-4  mt-2 ml-10">
                <div className="text-sm font-bold text-left">MVE/VT</div>
                <div className="text-sm font-bold text-left ml-8">Skip</div>
                <div className="text-sm font-bold text-left">
                  <Select
                    labelPlacement="outside-left"
                    className="w-[150px]"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    placeholder="Select"
                  >
                    <SelectItem></SelectItem>
                  </Select>
                </div>
                <div className="text-sm text-left ml-10">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      data-testid="checkboxId"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                      // onChange={(e) => onCheckboxChange(e)}
                      isSelected={check}
                    />
                  </CheckboxGroup>
                </div>
                <div className="text-sm font-bold text-left">
                  <Select
                    labelPlacement="outside-left"
                    className="w-[150px]"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    placeholder="Select"
                  >
                    <SelectItem></SelectItem>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </h1>
      </div>
      <div className="flex justify-between mt-[10px]">
        <div className="justify start ml-2">
          <Button
            className="bg-[#ffffff] rounded-sm "
            variant="bordered"
            type="submit"
            size="sm"
          >
            Cancel
          </Button>
          <Button
            className="bg-[#ffffff] rounded-sm ml-2"
            variant="bordered"
            type="submit"
            size="sm"
          >
            DNA
          </Button>
        </div>
        <div className=" justify-end">
          <Button
            className="bg-[#ffffff] rounded-sm mr-2"
            variant="bordered"
            type="submit"
            size="sm"
          >
            Attachment
          </Button>
          <Button
            type="button"
            className="bg-[orange] text-[#FFFFFF] rounded-sm mr-2"
            size="sm"
          >
            Complete Inspection
          </Button>
        </div>
      </div>
    </>
  );
}
