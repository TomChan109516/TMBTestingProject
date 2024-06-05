import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchSpecialEventTable from "./SearchSpecialEventTable";

function SearchSpecialEvent() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };
  return (
    <div>
      <div className="ml-1 h-[200px]">
        <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-md">
          Special Events {">"} Search
        </div>
        <div className="mr-1">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Searching Criteria
            </h5>
            <div className="grid grid-cols-2  mt-[15px] ">
              <div className="grid grid-rows-2 h-[400 px] grid-flow-col ml-6">
                <div className="flex flex-row items-center mt-2">
                  <div className="w-[15%] text-left  font-bold">Event ID</div>
                  <div className="w-[77%] ml-[45px]">
                    <Input
                      id="standard-basic"
                      name="chassisno"
                      radius="none"
                      variant="bordered"
                      size="sm"
                    />
                  </div>
                </div>

                <div className=" flex flex-row  mt-3">
                  <div className="w-[30%] text-left font-bold">
                    {" "}
                    Effective Period
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
                  <div className="w-[10%] ml-[5px]"> To </div>
                  <div className=" inline-flex border border-solid border-[lightgray] w-[45%]  mr-1 h-8">
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
              <div className=" flex flex-row  mt-4">
                <div className="w-[13%] text-left font-bold ml-[15px] ">
                  Centre
                </div>
                <div className="ml-[10px] w-4/5 ">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    variant="bordered"
                  >
                    <SelectItem key="TY"> </SelectItem>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex justify-end mb-2 mr-1">
              <Button
                className={`bg-[#ffffff] text-[black] rounded-sm ml-1`} //white: '#fff'
                variant="bordered"
                size="sm"
                // onClick={restFunc}
              >
                Reset
              </Button>
              <Button
                className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                variant="bordered"
                size="sm"
                type="submit"
                // onClick={searchdataHandler}
              >
                Search
              </Button>
            </div>
          </h1>
        </div>
      </div>
      <div className="">
        <SearchSpecialEventTable />
      </div>
    </div>
  );
}

export default SearchSpecialEvent;
