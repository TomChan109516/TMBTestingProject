import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { CalendarEvent } from "tabler-icons-react";

function SearchCentre() {
  const [dateValue, setDateValue] = useState(new Date());
  const navigate =useNavigate();
  const [session, setSession] = useState<Set<string>>(new Set([]));
  const handleRequestDateChanged = (newValue: React.SetStateAction<Date>) => {
    setDateValue(newValue);
  };
  return (
    <div>
      <div className="ml-1">
        <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-sm">
          Assignment {">"} Search
        </div>
        <div className="mr-1 h-[400px]">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Searching Criteria
            </h5>
            <div className="grid grid-cols-3  mt-[15px] mb-1">
              <div className="flex flex-row justify-stretch">
                <div className="ml-5 text-xs mt-1 font-bold"><span className="text-[red]">*</span>Centre</div>
                <div className="ml-5 w-[260px]">
                  <Select
                    isRequired
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    variant="bordered"
                    name="center"
                    aria-label="center"
                    className="max-w-xs text-xs font-[Calibri]"
                  >
                    <SelectItem key="l" value="l">
                      L
                    </SelectItem>
                  </Select>
                </div>
              </div>
              <div className="flex flex-row flex-shrink">
                <div className="text-xs mt-1 font-bold"><span className="text-[red]">*</span>Date</div>
                <div className="ml-5 inline-flex border border-[lightgray] w-[265px]">
                <CalendarEvent color="black" size="28" className="text-[gray]" />
                  <DatePicker
                    className="text-xs p-[4px]  w-[245px] h-8 font-[Calibri]"
                    selected={dateValue}
                    onChange={handleRequestDateChanged}
                  />
                </div>
              </div>
              <div className="flex flex-row mr-2">
                <div className="text-xs mt-1 font-bold"><span className="text-[red]">*</span>Session</div>
                <div className="ml-5 w-[260px] mr-2 flex-shrink">
                  <Select
                    isRequired
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    variant="bordered"
                    name="session"
                    selectedKeys={session}
                    onChange={(e)=>{setSession(new Set(e.target.value.split(',')))}}
                    aria-label="session"
                    className="max-w-xs text-xs font-[Calibri]"
                  >
                    <SelectItem key="AM" value="AM">
                      AM
                    </SelectItem>
                    <SelectItem key="PM" value="PM">
                      PM
                    </SelectItem>
                    <SelectItem key="EV" value="EV">
                      EV
                    </SelectItem>
                    <SelectItem key="AM+PM" value="AM+PM">
                      AM+PM
                    </SelectItem>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex justify-end mb-2 mr-1">
              <Button
                className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                variant="bordered"
                size="sm"
                type="submit"
                onClick={()=>navigate('/staffSchedule')}
              >
                Continue
              </Button>
            </div>
          </h1>
        </div>
      </div>
      {/* <div className="">
        <ExaminationSchedule />
      </div> */}
    </div>
  );
}

export default SearchCentre;
