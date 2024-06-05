import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react"
import VehicleExaminationInfoTable from "./VehicleExaminationInfoTable";
import { useNavigate } from "react-router-dom";

function VehicleExaminationInfoSearch() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-left text-[#0a923d] p-[1px]  font-bold text-md">
        VV / MPV Inspection {">"} Vehicle Examination Information
      </div>
      <div className="h-[100%]  ">
        <div className="flex flex-row gap-2 justify-end w-full mb-1 ">
          <Button
            className="bg-[#00AF8F] font-bold text-white rounded-sm"
            size="sm"
            radius="none"
            type="submit"
          >
            New MPV
          </Button>
          <Button
            className="bg-[#00AF8F] text-white font-bold mr-2 rounded-sm"
            size="sm"
            radius="none"
            type="submit"
          >
            New VV
          </Button>
        </div>
        <h1 className="h-[180px]    mr-2 ml-2  ">
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
            Searching Criteria
          </h5>
          <div className="grid grid-cols-2 gap-2 mt-[12px] text-sm/[13px] font-bold">
            <div className="grid grid-rows-6 h-[250px] grid-flow-col ml-6">
              <div className="flex flex-row items-center">
                <div className=" text-left text-[#ff4e4e] ">*</div>
                <div className="w-[16%] text-left">Vehicle Class</div>
                <div className="w-[75%] mt-[px]  ml-5">
                  <Select
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    name="lane"
                    variant="bordered"
                    placeholder="Select"
                  >
                    <SelectItem key={""}>MVP-Movement Permit Exam</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[16%] text-left">Chassis No. </div>
                <div className="w-[75%] ml-[26px]">
                  <Input
                    name="regMark"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    maxLength={25}
                    
                    endContent={
                     
                        0+"/" + 25
                      
                    }
                    
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[16%] text-left">Float Name </div>
                <div className="w-[75%] ml-[26px]">
                  <Input
                    name="chassisNo"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    data-testid="input-test"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-rows-6 grid-flow-col">
              <div className="flex flex-row  pt-[15px] w-[100%] mt-[-5px]">
                <div className="  text-left  text-[13px] font-bold mt-[4px] w-[19.5%]">
                  Sub-class
                </div>
                <div className="w-[25%] mt-[-2px]  ml-8">
                  <Select
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    name="lane"
                    variant="bordered"
                    placeholder="Select"
                  >
                    <SelectItem key={""}>1</SelectItem>
                  </Select>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <div className="w-[16%] text-left">Length:0</div>
                <div className="w-[62%] pl-13  text-[13px] font-bold ">
                  <p>
                    <Checkbox
                      size="md"
                      classNames={{
                        wrapper: "after:bg-[#00AF8F] mt-1 text-sm ",
                      }}
                      radius="none"
                    />
                    Compare alphanumeric characters only{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">VV.No</div>
                <div className="ml-[30px]"><div 
                className="w-[200%] ml-[30px]">
                  <Input
                    name="chassisNo"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    data-testid="input-test"
                  />
                </div>
                </div>
              </div>
              <div className="flex justify-end  font-bold gap-1  mr-2 ">
                <Button
                  type="reset"
                  className="bg-[#FFFFFF] rounded-sm"
                  size="sm"
                  radius="sm"
                  variant="bordered"
                >
                  Reset
                </Button>
                <Button
                  type="button"
                  className="bg-[#00AF8F] text-[#FFFFFF] rounded-sm"
                  size="sm"
                  radius="sm"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </h1>
        <div className=" flex justify-end mt-[5px]">
          <div className=" justify-end ">
            <Button
              type="button"
              className="bg-[orange] text-[#FFFFFF] rounded-sm shadow-sm mr-2 font-bold"
              size="sm"
              onClick={() => navigate('/mpvvehicleinspectioninfo')}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      <VehicleExaminationInfoTable/>
    </>
  );
}
export default VehicleExaminationInfoSearch;
