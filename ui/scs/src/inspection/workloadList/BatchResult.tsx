import React, { useState } from "react";
import { Button, Checkbox, CheckboxGroup } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import BatchResultTable from "./BatchResultTable";
import BatchResultInputModal from "./BatchResultInputModal";
import {theme} from "../../common/themes/themeConfig";

const laneList = ["11", "11S", "12", "12S", "13", "14"];
const sessionList = ["AM", "AM1", "PM", "PM1"];

const BatchResult = () => {
  const navigate = useNavigate();
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [checkedSession, setCheckedSession] = useState<string[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const onCheckboxChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div>
        <div className="pt-[5px]">
          <div className="flex">
            <div
              className={`flex-initial text-tropicalRainForest ml-3 font-bold text-sm font-calibri`}
            >
              Inspection {">"} Batch Result Input
            </div>
          </div>
          <div>
            <div className="mt-[10px] ml-2 mr-2">
              <h1>
                <h5 className="absolute-top-2 mt-1 start-3 pl-[10px] pr-[10px] text-sm  font-calibri  text-[#00AF8F]">
                  Filter
                </h5>
                <div className="">
                  <div className="grid grid-cols-10 gap-4">
                    <div className="col-span-5 mt-5">
                      <div className=" flex flex-row">
                        <div className="grid grid-rows-6 mt-2 h-[100px] grid-flow-col whitespace-nowrap w-1/2">
                          <div className="flex flex-row items-center">
                            <div className={`ml-4 text-left text-sm font-bold font-[${theme?.fontFamily?.calibri}] w-[20%]`}>
                              Date
                            </div>
                            <div className={`flex text-sm font-[${theme?.fontFamily?.calibri}] items-center`}>
                              06/11/2023
                            </div>
                          </div>
                          <div className="flex mt-2">
                            <div className={`ml-4 text-left text-sm font-bold font-[${theme?.fontFamily?.calibri}] mt-[5px] w-[20%]`}>
                              Center
                            </div>
                            <div className={`text-sm font-[${theme?.fontFamily?.calibri}] mt-1`}>TY1</div>
                          </div>
                        </div>
                        <div className="w-[25%]  ml-[20px] mt-2">
                          <div className="flex flex-row items-center ml-1 w-40">
                            <div className={`text-sm font-bold font-[${theme?.fontFamily?.calibri}]`}>
                              Lane
                            </div>
                            <div className={`flex flex-row ml-2 font-[${theme?.fontFamily?.calibri}]`}>
                              <CheckboxGroup>
                                <Checkbox
                                  name="selectCheckbox"
                                  radius="none"
                                  size="sm"
                                  classNames={{ wrapper: "after:bg-[#00AF8F]"}}
                                  onChange={(e) => onCheckboxChange(e)}
                                  //   change here
                                  isSelected={true}
                                  // isSelected={allChecked} value="ALL" onChange= {onAllCheckboxChanged}
                                >
                                  All
                                </Checkbox>
                              </CheckboxGroup>
                            </div>
                          </div>
                          <div className={`ml-1 flex flex-row  box-border h-[100px]  mt-1 w-40 border-2 border-[lightgrey] overflow-x-hidden text-sm font-[${theme?.fontFamily?.calibri}]`}>
                            <CheckboxGroup
                              classNames={{
                                wrapper: "grid grid-cols-2 pt-1 pb-5 pl-1",
                              }}
                              value={checkedList}
                              onValueChange={setCheckedList}
                            >
                              {laneList.map((item, index) => (
                                <Checkbox
                                  key={index}
                                  value={item}
                                  size="sm"
                                  className="text-xs"
                                  radius="none"
                                  classNames={{
                                    wrapper:
                                      "after:bg-[#00AF8F] text-xs font-[Calibri]",
                                  }}
                                >
                                  {item}
                                </Checkbox>
                              ))}
                            </CheckboxGroup>
                          </div>
                        </div>
                        <div className="w-[15%]  ml-[25px] mt-2">
                          <div className="flex flex-row items-center ml-1 w-40">
                            <div className= {`text-sm font-bold font-[${theme?.fontFamily?.calibri}]`}>
                              Session
                            </div>
                            <div className={`flex flex-row ml-2 font-[${theme?.fontFamily?.calibri}] text-sm`}>
                              <CheckboxGroup>
                                <Checkbox
                                  name="selectCheckbox"
                                  radius="none"
                                  size="sm"
                                  classNames={{ wrapper: "after:bg-[#00AF8F]"}}
                                  onChange={(e) => onCheckboxChange(e)}
                                  isSelected={true}
                                >
                                  All
                                </Checkbox>
                              </CheckboxGroup>
                            </div>
                          </div>
                          <div className="ml-1 h-[100px] flex flex-row box-border mt-1 mb-3 w-40 border-2 border-[lightgrey] overflow-x-hidden">
                            <CheckboxGroup
                              classNames={{
                                wrapper: "grid grid-cols-2 pt-1 pb-3 pl-1",
                              }}
                              value={checkedSession}
                              onValueChange={setCheckedSession}
                            >
                              {sessionList.map((item, index) => (
                                <Checkbox
                                  key={index}
                                  value={item}
                                  size="sm"
                                  className={`text-sm font-[${theme?.fontFamily?.calibri}]`}
                                  radius="none"
                                  classNames={{
                                    wrapper: "after:bg-[#00AF8F]",
                                  }}
                                >
                                  {item}
                                </Checkbox>
                              ))}
                            </CheckboxGroup>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <BatchResultTable />
      <div className=" flex m-4 ml-5">
        <div className="flex gap-28">
          <div className={`text-sm font-[${theme?.fontFamily?.calibri}] font-bold`}>
            Result of the selected inspection(s): 
          </div>
          <div>
            <Button
              type="button"
              className={`ml-[5px] bg-[#F0FFFF] text-[#00AF8F] border-[#00AF8F] font-bold rounded-sm font-[${theme?.fontFamily?.calibri}] text-sm`}
              size="sm"
              variant="bordered"
              radius="none"
              // change the Button onclick
              onClick={() => setShowModal(true)}
            >
              Pass
            </Button>
            <Button
              type="button"
              className={`ml-[5px] bg-[#F0FFFF]  text-[#00AF8F] border-[#00AF8F] font-bold font-[${theme?.fontFamily?.calibri}] text-sm rounded-sm`}
              size="sm"
              variant="bordered"
              radius="none"
              // onClick={}
            >
              Fail
            </Button>
            <Button
              type="button"
              className={`ml-[5px] bg-[#F0FFFF] text-[#00AF8F] border-[#00AF8F] font-bold font-[${theme?.fontFamily?.calibri}] text-sm rounded-sm`}
              size="sm"
              variant="bordered"
              radius="none"
              // onClick={}
            >
              DNA
            </Button>
            <Button
              type="button"
              className={`ml-[5px] bg-[#F0FFFF] text-[#00AF8F] border-[#00AF8F] font-bold font-[${theme?.fontFamily?.calibri}] text-sm rounded-sm`}
              size="sm"
              variant="bordered"
              radius="none"
              // onClick={}
            >
              Rejected
            </Button>

            <Button
              className={`bg-[#ffffff] text-[#424141] font-[${theme?.fontFamily?.calibri}] text-sm font-bold rounded-sm ml-1 mr-4 `}
              variant="bordered"
              size="sm"
              radius="none"
              //onClick={resetFields}
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
      <div className="m-3 absolute bottom-0 w-[98vw]">
        <div className="flex justify-between">
          <div>
            <Button
              className={`bg-[#ffffff] text-[#424141] font-[${theme?.fontFamily?.calibri}] text-sm font-bold rounded-sm ml-1 mr-4`}
              size="sm"
              variant="bordered"
              radius="none"
              onClick={() => navigate("/workloadlist")}
            >
              Daily Workload List
            </Button>
          </div>
          <div>
            <Button
              type="button"
              radius="none"
              size="sm"
              className={`ml-[5px] text-white font-bold rounded-sm text-sm font-[${theme?.fontFamily?.calibri}]`}
              disabled={true}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
      {showModal && (
        <BatchResultInputModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default BatchResult;
