import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom";

function OverrideExamSchedule() {
    const [fromDateone, setFromDateone] = useState(new Date());
    const navigate = useNavigate();
    const Location = useLocation();
    const examType = new URLSearchParams(Location.search).get('type');

    const handleFromDateChangedfunc = (newValue: React.SetStateAction<Date>) => {
        setFromDateone(newValue);
    };
    return (

        <div className="h-[500px]">
            <div className="mt-1 ml-1S">
                <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-md">
                    Examination Schedule {">"} ({examType === "Regular" ? "Regular" : "Override"}) {">"} Create
                </div>
                <div className="ml-1 mr-1 ">
                    <h1>
                        <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                            Schedule Information

                        </h5>
                        <div className="grid grid-cols-2  mt-[15px] ">
                            <div className="grid grid-rows-2 grid-flow-col ml-5">
                                <div className="flex flex-row">

                                    <div className=" text-left font-bold">Centre</div>
                                    < div className="ml-12 w-4/5 mt-1">
                                        <Select labelPlacement="outside-left" radius="none" size="sm" variant="bordered">
                                            <SelectItem key="TY"> </SelectItem>
                                        </Select></div>
                                </div>
                                < div className="flex flex-row  ">
                                    <div className="font-bold text-left mt-1"> Description </div>
                                    < div className="ml-[10px] w-4/5 mt-1">
                                        <Input size="sm" radius="none" variant="bordered" />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex flex-row mt-2">
                                <div className="w-[25%] text-left font-bold">  Effective Period</div>
                                <div className="inline-flex border border-solid border-[lightgray] w-[55%] ml-[30px] h-8">
                                    <CalendarEvent color="grey" size="25" />
                                    <DatePicker
                                        className="text-[12px] p-[4px] w-[127%] h-7 "
                                        name="fromDateone"
                                        selected={fromDateone}
                                        onChange={handleFromDateChangedfunc}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-end mb-2 mr-1">
                            <Button
                                className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                                variant="bordered"
                                size="sm"
                                type="submit"
                                onClick={() => { navigate(examType === 'Regular' ? '/createRegularExaminationSchedule' : '/overridedetail') }}
                            >
                                Submit
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
                    onClick={() => { navigate('/searchexaminationSchedule') }}
                >
                    Back
                </Button>
            </div>
        </div>

    );
}

export default OverrideExamSchedule;


