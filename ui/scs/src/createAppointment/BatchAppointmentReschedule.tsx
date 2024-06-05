import React, { useState, } from "react"
import { Button, Select, SelectItem, } from "@nextui-org/react"
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import { AppointmentRecords } from "./AppointmentRecords";

 const BatchAppointmentReschedule = () => {
    const [fromDate, setFromDate] = useState(new Date());

    const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
        setFromDate(newValue);
    };

    return (
        <>
            <div className="p-[5px] ml-1 mt-[5px]">
                <div className="ml-4 flex flex-initial text-[#00AF8F] p-[2px]  font-bold text-sm">
                    Appointment {" > "} Batch Appointment Reschedule
                </div>
            </div>

            <div className="mt-[10px] ml-6 ">
                <h1 className="font-[Calibri] h-24 w-[1315px]">
                    <h5 className="absolute-top-2 start-3 pl-[10px] pr-[10px] text-[15px] font-bold text-[#00AF8F] font-[Calibri] ">
                        Searching Criteria
                    </h5>
                    <div className="grid grid-rows-2 grid-flow-col whitespace-nowrap  ">
                        <div className="flex flex-row w-full flex-wrap md:flex-nowrap gap-28 mt-4">

                            <div className="flex-1 inline-flex gap-16 ">
                                <div className="ml-4 mr-4 text-[14px] font-bold  mt-1 gap-2">Appointment Date</div>
                                <div className="ml-1 inline-flex border border-solid border-[lightgray] w-40 h-6">
                                    <CalendarEvent color="grey" size="22" />
                                    <DatePicker
                                        name="fromDate"
                                        selected={fromDate}
                                        onChange={handleFromDateChanged}
                                        className=" text-xs"
                                    />
                                </div>
                            </div>

                            <div className="flex-1 inline-flex gap-16">
                                <div className="ml-4 mr-6 text-[14px] font-bold  mt-1 gap-2">Centre</div>
                                <div className="inline-flex flex-grow ">
                                    <Select
                                        isRequired
                                        labelPlacement="outside-left"
                                        radius="none"
                                        classNames={{ trigger: "min-h-unit-2 h-6" }}
                                        variant="bordered"
                                        name="center"
                                        aria-label="center"
                                        className="w-40 font-[Calibri]">
                                        <SelectItem key="1" value="l">
                                            TDVEC
                                        </SelectItem>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex-1 inline-flex gap-16">
                                <div className=" mr-14 text-[14px] font-bold  mt-1 gap-2">Lane ID</div>
                                <div className="inline-flex flex-grow ">
                                    <Select
                                        isRequired
                                        labelPlacement="outside-left"
                                        radius="none"
                                        classNames={{ trigger: "min-h-unit-2 h-6" }}
                                        variant="bordered"
                                        name="lane"
                                        aria-label="lane"
                                        className="w-40 max-w-xs text-xs font-[Calibri]">
                                        <SelectItem key="1" value="l">
                                            12
                                        </SelectItem>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------next row-------------------------------------- */}
                        <div className="flex flex-row w-full flex-wrap md:flex-nowrap gap-28  mb-5 mt-1 ">

                            <div className="flex-1 inline-flex gap-24">
                                <div className="ml-4 mr-4 text-[14px] font-bold  mt-1 gap-2 ">Special Event</div>
                                <div className="inline-flex flex-grow ml-1">
                                    <Select
                                        isRequired
                                        labelPlacement="outside-left"
                                        radius="none"
                                        classNames={{ trigger: "min-h-unit-2 h-6" }}
                                        variant="bordered"
                                        name="special"
                                        aria-label="special"
                                        className="w-40 max-w-xs text-xs font-[Calibri]">
                                        <SelectItem key="1" value="l">
                                            003
                                        </SelectItem>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex-1 inline-flex gap-16">
                                <div className="ml-4 mr-4 text-[14px] font-bold  mt-1 gap-2 ">Session</div>
                                <div className="inline-flex flex-grow ml-0.5">
                                    <Select
                                        isRequired
                                        labelPlacement="outside-left"
                                        radius="none"
                                        classNames={{ trigger: "min-h-unit-2 h-6" }}
                                        variant="bordered"
                                        name="session"
                                        aria-label="session"
                                        className="w-40 max-w-xs text-xs font-[Calibri]">
                                        <SelectItem key="1" value="l">
                                            AM
                                        </SelectItem>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex-1 inline-flex gap-9  font-bold">
                                <Button
                                    radius="none"
                                    type="reset"
                                    className="bg-white text-black border border-solid border-greyBorder rounded-sm h-6 w-36 text-[13px] font-bold"
                                >Search Reset
                                </Button>
                                <Button
                                    type="button"
                                    radius="none"
                                    className="rounded-sm bg-[#00AF8F] text-white h-6 w-36 text-[13px] font-bold">Search Appointment
                                </Button>
                            </div>
                        </div>
                    </div>
                </h1>
            </div>
            
            <div>
                <AppointmentRecords />
            </div>
        </>
    );
}
export default BatchAppointmentReschedule;