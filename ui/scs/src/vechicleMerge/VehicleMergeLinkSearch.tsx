import {
    Button,
    Input,


} from "@nextui-org/react";
import React, { useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import VehicleMergeLinkSearchTable from "./VehicleMergeLinkSearchTable";

function VehicleMergeLinkSearch() {

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
                    <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-[13px]">
                        Vehicle {">"} Merge Vehicles
                    </div>
                    <div className="mr-1">
                        <h1>
                            <h5 className="absolute -top mt-1 start-3 pl-[10px] pr-[10px] text-[12px] text-[#00AF8F] w-[100px]">
                                Link Search
                            </h5>
                            <div className="grid grid-cols-4  mt-[15px] ">
                                <div className="grid grid-rows-2 h-[100px] grid-flow-col ml-6 ">
                                    <div className="flex flex-row items-center mt-2">

                                        <div className="w-[35%] text-left text-[12px] font-bold">Event ID</div>
                                        <div className="w-[50%] ml-[20px] text-left  whitespace-nowra">
                                            <Input
                                                id="standard-basic"
                                                name="chassisno"
                                                radius="none"
                                                variant="bordered"
                                                size="sm"
                                                className="justify-left"
                                            />
                                        </div>
                                    </div>
                                    <div className=" flex flex-row mt-3">
                                        <div className="w-[40%] text-left text-[12px] font-bold">Master Vehicle ID</div>
                                        <div className="w-[50%] ml-[5px] text-left">
                                            <Input
                                                id="standard-basic"
                                                name="chassisno"
                                                radius="none"
                                                variant="bordered"
                                                size="sm"
                                                className="justify-left"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex flex-row ">
                                    <div className="grid grid-rows-2 col-span-3 h-[100px]   whitespace-nowrap   ">
                                        <div className="flex flex-row items-center mt-2">

                                            <div className="w-[15%] text-left text-[12px] font-bold">Description</div>
                                            < div className="w-[750px] ml-5">
                                                <Input
                                                    id="standard-basic"
                                                    name="chassisno"
                                                    radius="none"
                                                    variant="bordered"
                                                    size="sm"
                                                    className="justify-left"

                                                />
                                            </div>
                                        </div>
                                        <div className=" flex flex-row h-[100%]  mt-3">
                                            <div className="w-[25%] text-left text-[12px] font-bold"> Chassis Number</div>
                                            < div className="w-[350px] ml-2">
                                                <Input
                                                    id="standard-basic"
                                                    name="chassisno"
                                                    radius="none"
                                                    variant="bordered"
                                                    size="sm"
                                                    className="justify-left"

                                                />
                                            </div>
                                            <div className="w-[20%] text-left text-[12px] font-bold ml-5"> Created Between</div>
                                            <div className="inline-flex border border-solid border-[lightgray] w-[25%] ml-[20px] h-7 ">


                                                <CalendarEvent color="grey" size="25" />
                                                <DatePicker
                                                    name="fromDate"
                                                    selected={fromDate}
                                                    onChange={handleFromDateChanged}
                                                    className="text-[10px] p-[px] w-[100%] selection:border-none"
                                                />
                                            </div>
                                            <div className="w-[10%] ml-[5px]">  To </div>
                                            <div className=" inline-flex border-2 border-[#dcdcdc] border-solid w-[25%]  ml-[10px] h-7">
                                                <CalendarEvent color="grey" size="25" />
                                                <DatePicker
                                                    name="toDate"
                                                    selected={toDate}
                                                    onChange={handleToDateChanged}
                                                    className="text-[10px] p-[px] w-[100%]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mb-2 mr-1 text-[12px]">
                                <Button
                                    className={`bg-[#ffffff] text-[black] rounded-sm ml-1 text-[12px]`}
                                    variant="bordered"
                                    size="sm"
                                >
                                    Reset
                                </Button>
                                <Button
                                    className={`bg-[#00AF8F] text-white rounded-sm ml-1 text-[12px]`}
                                    variant="bordered"
                                    size="sm"
                                    type="submit"
                                >
                                    Search
                                </Button>

                            </div>
                        </h1>
                    </div>
                </div>
                <VehicleMergeLinkSearchTable />
            </div>
        </>
    );
}
export default VehicleMergeLinkSearch;