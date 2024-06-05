
import React, { useState } from "react";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { CalendarEvent, ClockHour4 } from "tabler-icons-react";
import DatePicker from "react-datepicker";
 
 
 
export default function MPVVehicleInformation() {
   // const [submissionTime, setSubmissionTime] = useState(new Date())
    const [renewaldateValues, setRenewalDateValues] = useState(new Date())
    const [dateValues, setDateValues] = useState(new Date())
 
    const handleRequestDateChanged = (newValue: React.SetStateAction<Date>) => {
        setDateValues(newValue)
    }
 
    const handleRequestRenewalDateChanged = (newValue: React.SetStateAction<Date>) => {
        setRenewalDateValues(newValue)
    }
 
    return (
        <div>
            <div className="ml-1 h-[470px] ">
                <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-md">
                    VV/MPV Inspection
                </div>
                <div className="mr-1 mt-2">
                    <h1>
                        <h5 className="absolute -top mt-2 start-3   pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F] ">
                            Vehile Information
                        </h5>
                        <div className="grid grid-cols-8 pt-4 pb-4 pr-1  pl-1gap-0  ">
                            <div className="col-span-2 ...">
                                <div className="flex flex-col-2  ...">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                        Vehicle Type  <span className="ml-2 font-normal" > MPV</span>
                                    </div>
 
                                </div>
                            </div>
                            <div className="col-span-2 ...">
                                <div className="flex flex-col-2  ...">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                        Sub Class  <span className="ml-2 font-normal"> {""}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 ...">
                                <div className="flex flex-col-2  ...">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                        VM No.  <span className="ml-2 font-normal"> {""}</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex-row flex-shrink col-span-2 ...">
                                <div className="flex flex-col-2  ...">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                        Float Name  <span className="ml-1 text-xs font-normal"> THINKER BELL DRIVER & TRAILER UNIT </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 ...">
                                <div className="flex flex-col-2  ...">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                        Mark  <span className="ml-2 text-xs font-normal"> {""}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 ...">
                                <div className="flex flex-col-2  ...">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                        Color  <span className="ml-2 text-md font-normal"> /</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 ...">
                                <div className="flex flex-col-2  ...">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                        Size(L/H/W) <span className="ml-2 text-md font-normal"> 9999.9/3354.8/4732.4</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-2 ...">
                                <div className="flex flex-col-2  ...">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                        Chassis No  <span className="ml-2 text-xs font-normal"> HKDL/ VIN#514650</span>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                    </h1>
                </div>
                <div>
                    <div className="mr-1 mt-2 ">
                        <h1>
                            <h5 className="absolute -top mt-2 start-3   pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F] ">
                                Inspection
                            </h5>
                            <div className="grid grid-cols-8 pt-4 pb-4 gap-0 ">
                                <div className="col-span-2 ...">
                                    <div className="flex flex-col-2  ...">
                                        <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                            Primary Exam  <span className="ml-2 text-xs">MPE</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 ...">
                                    <div className="flex flex-col-2  ...">
                                        <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                            Centre  <span className="ml-2 text-xs font-normal">KMB</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-stretch  col-span-2  ">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2 ">
                                        <span className="text-[red]">*</span>Site</div>
                                    <div className="ml-5 w-[150px]">
                                        <Select
                                            //isRequired
                                            labelPlacement="outside-left"
                                            radius="none"
                                            size="sm"
                                            variant="bordered"
                                            //aria-label="center"
                                            className="max-w-xs text-xs font-[Calibri] "
                                        >
                                            <SelectItem key="l" value="l">
                                                K2-KOC-K2
                                            </SelectItem>
                                        </Select>
                                    </div>
                                </div>
                                <div className=" col-span-2 " >
                                <div className="flex flex-row ">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">
                                        Renewal Date</div>
                                    <div className=" inline-flex  border-2 border-solid border-[lightgray] w-[55%] ml-5  mr-5 h-8">
                                        <CalendarEvent color="grey" size="23" />
                                        <DatePicker
                                            className="text-[12px]  font-[Calibri]   selection:border-none "
                                            selected={renewaldateValues}
                                            onChange={handleRequestRenewalDateChanged}
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className=" col-span-2">
                                <div className="flex flex-row ">
                                    <div className="text-[13px] text-black font-bold text-left pl-2 pt-2 rounded " >
                                        <span className="text-[red]">*</span>Date</div>
                                    <div className=" inline- flex border-2  border-[lightgray] w-[55%] ml-5 items-center">
                                        <CalendarEvent color="grey" size="23" />
                                        <DatePicker
                                            name="Date"
                                            size="sm"
                                            className=" text-sm  font-[Calibri]  "
                                            selected={dateValues}
                                            onChange={handleRequestDateChanged}
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className="col-span-2 ...">
                                    <div className="flex flex-row">
                                        <div className="text-[13px] text-black font-bold text-left pl-2 pt-2">Time</div>
                                        <div className="inline-flex border-2 border-solid border-[lightgray] w-[55%] ml-5  h-8">
 
                                            <ClockHour4
                                                size={25}
                                                strokeWidth={2}
                                                color={"lightgray"}
                                            />
 
                                            {/* <input
                                                className="w-[120px] h-6 rounded"
                                                type="time"
                                                //value={submissionDateTime}
                                                //   onChange={(e) =>
                                                //     setSubmissionDateTime(e.target.value)
                                                //   }
 
                                                startContent={
                                                    <ClockHour4 size={15} color="gray" />
                                                }
 
                                            /> */}
                                        </div>
 
                                    </div>
 
                                </div>
 
                            </div>
                            <div className="flex justify-end mb-2 mr-1">
                                <Button
                                    type="button"
                                    className="bg-[#00AF8F] text-[#FFFFFF] rounded-sm text-[13px]"
                                    size="sm"
                                    radius="sm"
                                >
                                    Confrim
                                </Button>
                            </div>
 
                        </h1>
                    </div>
                </div>
                <div className="flex justify-start mt-1 ml-1">
                    <Button
                        className={`bg-[white] text-[black] shadow-sm rounded-sm ml-1`}
                        variant="bordered"
                        size="sm"
                        type="submit"
                    //onClick={() => { navigate('/searchexaminationSchedule') }}
                    >
                        Back
                    </Button>
                </div>
            </div>
            <div className=" grid grid col-2 gap-2">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
        
    )
}
