import { Button, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AvailableExamQuto from "./AvailableExamQuto";

function ManagementReport(){
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };
  return (
    <>
      <div>
        <div className="ml-1">
          <div className="flex items-left text-[#007F62] p-[10px]  font-bold font-[Calibri] text-md">
            Report {">"} Management Reports
          </div>
          <div className="mr-1 h-[160px]">
            <h1>
              <h5 className="absolute -top mt-1 start-3 pl-[10px] pr-[10px] text-sm font-[Calibri] text-[#00AF8F]">
                Daily Appoinment List
              </h5>
              <div className="grid grid-cols-2  mt-[15px] ">
                <div className="grid grid-rows-2 grid-flow-col ml-6">
                  <div className="flex flex-row items-center mt-2">
                    <div className="w-[15%] text-left font-[Calibri] text-sm font-bold">
                      Center
                    </div>
                    <div className="ml-[10px] w-4/5 ">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="TY1"
                      >
                        <SelectItem key="TY"> </SelectItem>
                      </Select>
                    </div>
                  </div>
                  <div className=" flex flex-row  mt-4">
                    <div className="w-[15%] text-left font-bold font-[Calibri] text-sm  ">
                      Source*
                    </div>
                    <div className="ml-[10px] w-4/5 ">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem key="TY"> </SelectItem>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-row  mt-3">
                  <div className="w-[30%] text-left font-bold text-sm font-[Calibri] mr-1 ">
                    {" "}
                    Transaction Date
                  </div>
                  <div className="inline-flex border border-solid border-[lightgray] w-[50%] ml-[px] h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="fromDate"
                      selected={fromDate}
                      onChange={handleFromDateChanged}
                      className="text-[10px] p-[px] w-[140%] selection:border-none"
                    />
                  </div>
                  <div className="w-[10%] ml-5  font-bold text-sm font-[Calibri] ">
                    {" "}
                    To{" "}
                  </div>
                  <div className=" inline-flex border border-solid border-[lightgray] w-[50%]  mr-5 h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="toDate"
                      selected={toDate}
                      onChange={handleToDateChanged}
                      className="text-[10px] p-[px] w-[140%]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-2 mr-1">
                <Button
                  className={`bg-[#00AF8F] text-white text-sm border font-[Calibri] font-bold rounded-sm ml-1`}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  //onClick={}
                >
                  Generate
                </Button>
              </div>
            </h1>
          </div>
        </div>
        <div className="ml-1 h-[160px] mt-3">
          <div className="mr-1">
            <h1>
              <h5 className="absolute -top mt-1 start-3 pl-[10px] pr-[10px] text-sm font-[Calibri] text-[#00AF8F]">
                Daily Registration Log
              </h5>
              <div className="grid grid-cols-2  mt-[15px] ">
                <div className="grid grid-rows-2 h-[400 px] grid-flow-col ml-6">
                  <div className="flex flex-row items-center mt-2">
                    <div className="w-[15%] text-left   text-sm font-[Calibri] font-bold">
                      Center
                    </div>
                    <div className="ml-[10px] w-4/5 ">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="TY1"
                      >
                        <SelectItem key="TY"> </SelectItem>
                      </Select>
                    </div>
                  </div>
                  <div className=" flex flex-row  mt-4">
                    <div className="w-[15%] text-left font-bold text-sm font-[Calibri] ">
                      Source*
                    </div>
                    <div className="ml-[10px] w-4/5 ">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem key="TY"> </SelectItem>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-row  mt-3">
                  <div className="w-[30%] text-left  font-bold text-sm font-[Calibri]  mr-1">
                    {" "}
                    Transaction Date
                  </div>
                  <div className="inline-flex border border-solid border-[lightgray] w-[50%] ml-[px] h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="fromDate"
                      selected={fromDate}
                      onChange={handleFromDateChanged}
                      className="text-[10px] p-[px] w-[140%] selection:border-none"
                    />
                  </div>
                  <div className="w-[10%] ml-5  font-bold text-sm font-[Calibri] ">
                    {" "}
                    To{" "}
                  </div>
                  <div className=" inline-flex border border-solid border-[lightgray] w-[50%]  mr-5 h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="toDate"
                      selected={toDate}
                      onChange={handleToDateChanged}
                      className="text-[10px] p-[px] w-[140%]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-2 mr-1">
                <Button
                  className={`bg-[#00AF8F] text-white text-sm border font-[Calibri] font-bold rounded-sm ml-1`}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  // onClick={searchdataHandler}
                >
                  Generate
                </Button>
              </div>
            </h1>
          </div>
        </div>
        <div className="ml-1 h-[154px] mt-3 ">
          <div className="mr-1">
            <h1>
              <h5 className="absolute -top mt-1 start-3 pl-[10px] pr-[10px] text-sm font-[Calibri] text-[#00AF8F]">
                Exam Fee Waiver
              </h5>
              <div className="grid grid-cols-2  mt-[15px] ">
                <div className="grid grid-rows-2 grid-flow-col ml-6">
                  <div className="flex flex-row items-center mt-2">
                    <div className="w-[15%] text-left  text-sm font-[Calibri]  font-bold">
                      Center
                    </div>
                    <div className="ml-[10px] w-4/5 ">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="TY1"
                      >
                        <SelectItem key="TY"> </SelectItem>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-row  mt-3">
                  <div className="w-[30%] text-left  text-sm font-[Calibri]  font-bold mr-1">
                    {" "}
                    Exam Date
                  </div>
                  <div className="inline-flex border border-solid border-[lightgray] w-[50%] ml-[px] h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="fromDate"
                      selected={fromDate}
                      onChange={handleFromDateChanged}
                      className="text-[10px] p-[px] w-[140%] selection:border-none"
                    />
                  </div>
                  <div className="w-[10%] ml-5  font-bold text-sm font-[Calibri] ">
                    {" "}
                    To{" "}
                  </div>
                  <div className=" inline-flex border border-solid border-[lightgray] w-[50%]  mr-5 h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="toDate"
                      selected={toDate}
                      onChange={handleToDateChanged}
                      className="text-[10px] p-[px] w-[140%]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-2 mr-1">
                <Button
                  className={`bg-[#00AF8F] text-white text-sm border font-[Calibri] font-bold rounded-sm ml-1`}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  // onClick={searchdataHandler}
                >
                  Generate
                </Button>
              </div>
            </h1>
          </div>
        </div>
        <div className="ml-1 h-[160px] mt-1">
          <div className="mr-1">
            <h1>
              <h5 className="absolute -top mt-1 start-3 pl-[10px] pr-[10px] text-sm font-[Calibri] text-[#00AF8F]">
                Effective Exam Schedule
              </h5>
              <div className="grid grid-cols-2  mt-[15px] ">
                <div className="grid grid-rows-2 h-[400 px] grid-flow-col ml-6">
                  <div className="flex flex-row items-center mt-2">
                    <div className="w-[15%] text-left  text-sm font-[Calibri]  font-bold">
                      Center
                    </div>
                    <div className="ml-[10px] w-4/5 ">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        variant="bordered"
                        placeholder="TY1"
                      >
                        <SelectItem key="TY"> </SelectItem>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-row  mt-3">
                  <div className="w-[30%] text-left  font-bold text-sm font-[Calibri]  mr-1">
                    {" "}
                    Exam Date
                  </div>
                  <div className="inline-flex border border-solid border-[lightgray] w-[50%] ml-[px] h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="fromDate"
                      selected={fromDate}
                      onChange={handleFromDateChanged}
                      className="text-[10px] p-[px] w-[140%] selection:border-none"
                    />
                  </div>
                  <div className="w-[10%] ml-5  font-bold text-sm font-[Calibri] ">
                    {" "}
                    To{" "}
                  </div>
                  <div className=" inline-flex border border-solid border-[lightgray] w-[50%]  mr-5 h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="toDate"
                      selected={toDate}
                      onChange={handleToDateChanged}
                      className="text-[10px] p-[px] w-[140%]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mb-2 mr-1">
                <Button
                  className={`bg-[#00AF8F] text-white text-sm border font-[Calibri] font-bold rounded-sm ml-1`}
                  variant="bordered"
                  size="sm"
                  type="submit"
                  // onClick={searchdataHandler}
                >
                  Generate
                </Button>
              </div>
            </h1>
          </div>
        </div>
        <AvailableExamQuto />
      </div>
    </>
  );
}

export default ManagementReport;
