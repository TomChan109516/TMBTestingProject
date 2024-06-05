import { Button, Select, SelectItem, Selection } from "@nextui-org/react";
import React, { useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import LaneReallocationAppointmentTable from "./LaneReallocationAppointmentTable";

function LaneReallocation() {
  const [fromDate, setFromDate] = useState(new Date());
  const [status, setStatus] = useState<Selection>(new Set([]));

  const lanes = [{ value: "1" }, { value: "2" }, { value: "3" }];

  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };

  return (
    <div>
      <div className="ml-1">
        <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-[13px]">
          Appointment {"->"} Lane Reallocation
        </div>
        <div className="mr-1">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-[12px]/[13px] text-[#009b77]">
              Original Appointment
            </h5>
            <div className="grid grid-cols-2  mt-[15px] pb-4 ">
              <div className="grid grid-rows-2 h-[100px] grid-flow-col ml-6 ">
                <div className="flex flex-row items-center mt-2">
                  <div className="w-[35%] text-left text-[12px] font-bold">
                    Original Appointment Date
                  </div>
                  <div className=" flex md:w-[27.5%] lg:w-[31.5%]  border-2 border-[lightgrey] items-center ">
                    <CalendarEvent color="grey" size="26" />
                    <DatePicker
                      name="fromDate"
                      selected={fromDate}
                      onChange={handleFromDateChanged}
                      className="text-sm w-[100px] pl-1 text-[10px]"
                    />
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-row items-center mt-2">
                  <div className="w-[35%] text-left text-[12px] font-bold">
                    Original Lane Id
                  </div>
                  <div className="w-[40%] flex text-left">
                    <span className="text-[10.5px] text-black text-left">
                      <Select
                        className="w-[220px]"
                        labelPlacement="outside-left"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        name="center"
                        aria-label="center"
                        items={lanes}
                        selectedKeys={status}
                        onChange={(e) => {
                          setStatus(new Set(e.target.value.split(",")));
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
                  <div className=" flex flex-row ml-10">
                    <Button
                      className={`bg-[#009b77] text-[white] rounded ml-1 text-[12px]`}
                      variant="bordered"
                      size="sm"
                      type="submit"
                    >
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </div>
      </div>
      <LaneReallocationAppointmentTable />
    </div>
  );
}
export default LaneReallocation;
