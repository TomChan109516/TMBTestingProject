import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function TaxiBiSchedule() {
    const [inspectiondate, setInspectionDate] = useState(new Date());
    const navigate = useNavigate();

    const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
        setInspectionDate(newValue);
    };

    return (
        <div className="h-[500px] ml-1">

            <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-sm">
                Examination Schedule(Bi-annual) {">"}  Create
            </div>
            <div className="mr-1">
                <h1>
                    <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                        Schedule Information

                    </h5>

                    <div className="grid grid-cols-2  mt-[15px] ">
                        <div className="grid grid-rows-3 h-[400 px] grid-flow-col ml-6">

                            <div className="flex flex-row items-center mt-2 ">

                                <div className="w-[40%] text-left font-bold text-sm ">Annual Inspection Month</div>
                                <div className="inline-flex border border-solid border-[lightgray] w-[40%] ml-[30px] h-8">
                                    <CalendarEvent color="grey" size="25" />
                                    <DatePicker
                                        name="fromDate"
                                        selected={inspectiondate}
                                        onChange={handleFromDateChanged}
                                        className="text-[10px] p-[4px] w-[127%]"

                                    />
                                </div>
                            </div>
                            <div className=" mt-2  flex flex-row  ">
                                <div className="w-[40%] text-left font-bold text-sm "> Bi Annual Inspection Month</div>
                                <div className="inline-flex border border-solid border-[lightgray] w-[40%] ml-[30px] h-8">
                                    <CalendarEvent color="grey" size="25" />
                                    <DatePicker
                                        name="fromDate"
                                        selected={inspectiondate}
                                        onChange={handleFromDateChanged}
                                        className="text-[10px] p-[4px] w-[127%]"

                                    />
                                </div>
                            </div>

                            <div className=" flex flex-row  ">
                                <div className="font-bold mt-1 text-sm"> Level </div>

                                < div className="ml-[236px] w-[243px] mt-1">
                                    <Select labelPlacement="outside-left" radius="none" size="sm" variant="bordered">
                                        <SelectItem key="level"> Level 0</SelectItem>
                                    </Select>
                                </div>
                            </div>

                        </div>
                        {/* for one colmn */}
                        < div className="justify-evenly">
                            <div className="grid grid-rows-3 h-[400 px]">

                                < div className="flex flex-row mt-2 ">
                                    <div className="w-[40%] justify-end font-bold mt-2  text-sm ">  Current No.of AI Appointment</div>
                                    <div className=" w-[40%] mt-3 -ml-[45px]">0 </div>
                                </div>
                                <div className="flex flex-row mt-2 ml-5">
                                    <div className="w-[25%] justify-end font-bold text-sm">  No. of Working days</div>
                                    <div className=" w-[40%] mt-1 ml-[40px]">23 </div>
                                </div>


                                < div className="flex flex-row mt-2 ">
                                    <div className="font-bold text-right text-sm ml-7 "> Description </div>
                                    < div className=" w-[40%]  ml-[220px]">
                                        <Input size="sm" radius="none" variant="bordered" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-end mb-2 mr-12 mt-1">

                        <Button
                            className={`bg-[#00AF8F] text-white rounded-sm ml-4`}
                            variant="bordered"
                            size="sm"
                            onClick={() =>  navigate("/biAnnualDetail") }
                        >
                            Confirm
                        </Button>

                    </div>




                </h1>

            </div>
            <div className="flex justify-start mt-1 ml-1">
                <Button
                    className={`bg-[white] text-[black] shadow-sm rounded-sm`}
                    variant="bordered"
                    size="sm"
                    type="submit"
                    onClick={() => { navigate("/searchexaminationSchedule") }}
                >
                    Back
                </Button>

            </div>
        </div>
    );
}

export default TaxiBiSchedule;


