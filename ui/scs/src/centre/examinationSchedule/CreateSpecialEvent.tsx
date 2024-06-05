import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Edit } from "tabler-icons-react";
import { useNavigate } from "react-router";

function CreateSpecialEvent() {
  const navigate = useNavigate();

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [resetvalue, setResetvalue] = useState("");
  const [subClass, setSubClass] = useState<Selection>(new Set([]));
  const [value, onChange] = useState("10:00");

  const handleChange = (event) => {
    setResetvalue(event.target.value);
  };



  const ResetbtnFunc = () => {
    setSubClass(new Set([]));
  };

  const lanes = [{ value: "1" }, { value: "2" }, { value: "3" }];

  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };
  return (
    <div>
      <div className="ml-1 h-[470px]">
        <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-md">
          Special Event {">"} Create
        </div>
        <div className="mr-1">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Event Information
            </h5>
            <div className="grid grid-cols-4 gap-4 pt-5 pr-2">
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-2 w-1/6">
                    <span className="text-[#ff3e3e] text-[12px] mr-1 font-bold">
                      *
                    </span>
                    Event ID
                  </span>
                  <span className="text-[10.5px] text-black text-left pl-5">
                    <Input
                      className="w-[535px]"
                      id="standard-basic"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      maxLength={15}
                      placeholder="Event ID"
                      // value={floatName}
                      onChange={(e) => {
                        // setFloatName(e.target.value);
                      }}
                    />{" "}
                  </span>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <span className="text-[10.5px] text-black font-bold text-left pt-2 w-1/5">
                    Centre
                  </span>
                  <span className="text-[10.5px] text-black pr-1 text-left pl-9">
                    <Select
                      items={lanes}
                      labelPlacement="outside-left"
                      className="w-[498px]"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                      placeholder="Select"
                      selectedKeys={subClass}
                      onChange={(e) => {
                        setSubClass(new Set(e.target.value.split(",")));
                      }}
                    >
                      {(lanes) => (
                        <SelectItem
                          key={lanes.value}
                          value={lanes.value}
                          className="text-[10px]"
                        >
                          {lanes.value}
                        </SelectItem>
                      )}
                    </Select>
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 pt-3 pr-2">
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <span className="text-[10.5px]  text-black font-bold text-left pl-2 pt-2 w-1/6">
                    Description
                  </span>
                  <span className="text-[10.5px] text-black text-left pl-4">
                    <Input
                      className="w-[535px]"
                      id="standard-basic"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      maxLength={15}
                      placeholder="Description"
                      // value={floatName}
                      onChange={(e) => {
                        // setFloatName(e.target.value);
                      }}
                    />{" "}
                  </span>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="text-[10.5px] font-bold flex flex-row  ">
                  <div className="w-1/5 pt-2 text-left ">
                    {" "}
                    Reschedule Period
                  </div>
                  <div className="inline-flex border-2 border-solid border-[lightgray] w-[40%] h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="fromDate"
                      selected={fromDate}
                      onChange={handleFromDateChanged}
                      className="text-[13px] p-[4px] w-[100%] selection:border-none"
                    />
                  </div>
                  <div className="w-[5%] pt-2 ml-[1px]"> To </div>
                  <div className=" inline-flex border-2 border-solid border-[lightgray] w-[40%] ml-[1px] mr-1 h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="toDate"
                      selected={toDate}
                      onChange={handleToDateChanged}
                      className="text-[13px] p-[4px] w-[100%]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2  mt-[15px] ">
              <div className="grid grid-rows-2 h-[400 px] grid-flow-col ml-6"></div>
            </div>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-4 ...">
                <div className="text-[10.5px] font-bold flex flex-row ">
                  <div className="pr-3 pl-2 text-left pt-1"> Event Period</div>
                  <div className="inline-flex border-2 border-solid border-[lightgray] w-[25%] h-8 ">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="fromDate"
                      selected={fromDate}
                      onChange={handleFromDateChanged}
                      className="text-[13px] p-[4px] w-[100%] selection:border-none"
                    />
                  </div>
                  <div className="w-[10%] pl-1 ml-[1px]">
                    {" "}
                    <Input
                      className="w-[115px]"
                      id="standard-basic"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      type="time"
                      maxLength={15}
                      placeholder="00 : 00"
                      // value={floatName}
                      onChange={(e) => {
                        // setFloatName(e.target.value);
                      }}
                    />{" "}
                  </div>
                  <div className="pr-3 font-bold pt-2 pl-12"> - </div>

                  <div className=" inline-flex border-2 border-solid border-[lightgray] w-[25%] ml-[1px] mr-1 h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="toDate"
                      selected={toDate}
                      onChange={handleToDateChanged}
                      className="text-[13px] p-[4px] w-[100%]"
                    />
                  </div>
                  <div className="w-[10%] pl-1 ml-[1px]">
                    {" "}
                    <Input
                      className="w-[115px]"
                      id="standard-basic"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      type="time"
                      maxLength={15}
                      placeholder="00 : 00"
                      // value={floatName}
                      onChange={(e) => {
                        // setFloatName(e.target.value);
                      }}
                    />{" "}
                  </div>
                 
                </div>
              </div>
              <div className="..."></div>
              <div className="...">
                <span className="flex justify-end pr-2 mb-2 ">
                  <Button
                    type="button"
                    className="bg-[#d3a336] text-[#FFFFFF] rounded-sm shadow-sm mr-1 font-bold"
                    size="sm"
                  >
                    Submit
                  </Button>
                </span>
              </div>
            </div>
          </h1>
          <div className="flex justify-between mt-[10px]">
            <div className="justify start ml-2">
              <Button
                className=" bg-white rounded-sm shadow-sm text-[#0a923d] border-[#0a923d] border-solid font-bold"
                variant="bordered"
                type="submit"
                size="sm"
              >
                Export
              </Button>
            </div>
            <div className=" justify-end">
              <Button
                type="button"
                className="bg-[#d3a336] text-[#FFFFFF] rounded-sm shadow-sm mr-2 font-bold"
                size="sm"
              >
                Continue
              </Button>
            </div>
          </div>
          <div className="mt-[30px] mr-1 ml-1 ">
            {/* <div className="text-left bg-[#00AF8F] text-white p-2 m">
              {" "}
              Inspection Lane
            </div> */}
            <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
              <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-leftfont-bold">
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[50px]"></TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[60px]">
                  Resch.
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[65px]">
                  Date
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[65px]">
                  Time
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[60px]">
                  Lane
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[70px]">
                  To Date
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[70px]">
                  To Time
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[70px]">
                  Exam
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[70px]">
                  Class
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[100px]">
                  Vehicle Id
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[70px]">
                  Reg. Mark
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[200px]">
                  Chassis No.
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white">
                  Appointment No.
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-1 border-white w-[100px]">
                  Result
                </TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border-1 border-white text-sm text-left  width-[20px]">
                    <Checkbox
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                      size="sm"
                      radius="none"
                    ></Checkbox>
                  </TableCell>
                  <TableCell className="border-1 border-white text-sm text-left  width-[20px]">
                    
                  </TableCell>
                  <TableCell className="border-1 border-white text-sm text-left  width-[20px]">
                    12/12/2023
                  </TableCell>
                  <TableCell className="border-1 border-white text-sm text-left  width-[20px]">
                    18:00
                  </TableCell>
                  <TableCell className="border-1 border-white text-sm text-left ">
                    21
                  </TableCell>
                  <TableCell className="border-1 border-white text-sm text-left ">
                    
                  </TableCell>
                  <TableCell className="border-1 border-white text-sm text-left ">
                    
                    </TableCell>
                    <TableCell className="border-1 border-white text-sm text-left ">
                    008
                    </TableCell>
                    <TableCell className="border-1 border-white text-sm text-left ">
                    030
                    </TableCell>
                    <TableCell className="border-1 border-white text-sm text-left ">
                    002935245
                    </TableCell>
                    <TableCell className="border-1 border-white text-sm text-left ">
                    SY2974
                    </TableCell>
                    <TableCell className="border-1 border-white text-sm text-left ">
                    YS3K4X20001887418
                    </TableCell>
                  <TableCell className="border-1 border-white text-sm text-left ">
                    412021000076
                  </TableCell>
                  
                  <TableCell className="border-1 border-white text-sm text-left ">
                   
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-1 ml-1">
        <Button
          className={`bg-[white] text-[black] shadow-sm rounded-sm ml-1`}
          variant="bordered"
          size="sm"
          type="submit"
          onClick={() => { navigate('/searchSpecialEvent') }}

        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default CreateSpecialEvent;
