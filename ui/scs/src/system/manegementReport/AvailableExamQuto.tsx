import React, { useState } from "react";
import { Button, Checkbox, Select, SelectItem } from "@nextui-org/react";
import { CalendarEvent, ClockHour4 } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import ExamFee from "./ExamFee";



const ExamQuto = [
    { id: 1, label: "11", value: "11", isChecked: true },
    { id: 2, label: "11S", value: "11S", isChecked: true },
    { id: 3, label: "12", value: "12", isChecked: true },
    { id: 1, label: "12S", value: "12S", isChecked: true },
    { id: 1, label: "13", value: "13", isChecked: true },
    { id: 1, label: "14", value: "14", isChecked: true },
    { id: 1, label: "15", value: "15", isChecked: true },
    { id: 1, label: "16", value: "16", isChecked: true },
    { id: 1, label: "17", value: "17", isChecked: true },
    { id: 1, label: "18", value: "18", isChecked: true },
    { id: 1, label: "19", value: "19", isChecked: true },
    { id: 1, label: "1SE", value: "1SE", isChecked: true },
    { id: 1, label: "1TA", value: "1TA", isChecked: true },
    { id: 1, label: "1V1", value: "1V1", isChecked: true },
    { id: 1, label: "20", value: "20", isChecked: true },
    { id: 1, label: "DB", value: "DB", isChecked: true },
]

export default function AvailableExamQuto() {
    const [checkedData, setCheckedData] = useState(ExamQuto)
    const[allCheckedData,setAllCheckedData]=useState(true)
    const[fromDate,setFromDate]=useState(new Date()) 
    const[toDate,setToDate]=useState(new Date()) 

    const handleFromDateChanged=(newValue:React.SetStateAction<Date>)=>{
        setFromDate(fromDate)
    }


    const handleToDateChanged=(newValue: React.SetStateAction<Date>)=>{
        setToDate(toDate)
    }

    const handleCheckboxChange = (id: number) => {
        const updatedCheckedData = checkedData.map((data) => {
            if (data.id === id) {
                data.isChecked = !data.isChecked;
            }
            return data;
        });
        setCheckedData(updatedCheckedData);
    };

    const onAllCheckboxChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (allCheckedData) {
          setAllCheckedData(false);
          ExamQuto.map((data) => (data.isChecked = false));
          setCheckedData(ExamQuto);
        } else {
          setAllCheckedData(true);
          ExamQuto.map((data) => (data.isChecked = true));
          setCheckedData(ExamQuto);
        }
      };
    


    return (
        <div className="mt-3">
            <h1 className="    mr-2 ml-2  ">
                <h5 className="absolute -top-3 start-3 pl-[10px] pr-[10px] text-sm text-[#00AF8F] font-[Calibri] ">
                    Available Exam Quto(Exam Code:008)
                </h5>

                <div className="flex items- center ml-7 ">
                    <div className="flex flex-row ">
                        <div className=" w-[20px] text-left text-sm  mt-5 font-[calibri] font-bold">Center</div>
                        <div className="flex flex-row items-center ">

                            <div className="w-[500px] mt-4 ">

                                <Select
                                    labelPlacement="outside-left"
                                    radius="none"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    //placeholder="Select"

                                    //selectedKeys={centerId}
                                    // onChange={(e) => {
                                    //   handleCenterData(e);
                                    // }}
                                    className="w-[400px] bg-white ml-[17px]"
                                >

                                    <SelectItem
                                        key={"1"}
                                        value="TY1"
                                    >
                                        TY1
                                    </SelectItem>

                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center  ml-7">
                        <div className=" font-[calibri] mt-2  text-sm font-bold">Exam Date</div>
                        <div className="flex flex-row  mt-2 ">
                            <div className="inline-flex border border-solid border-[lightgray] w-[250px] ml-3  h-8">
                                <CalendarEvent color="grey" size="25" />
                                <DatePicker
                                    name="fromDate"
                                    selected={fromDate}
                                    onChange={handleFromDateChanged}
                                    className="text-[12px]  w-[100%] selection:border-none mt-1"
                                />
                            </div>
                            <div className=" w-[2px]  font-[calibri] text-md mr-7 ml-1">  To </div>
                            <div className=" inline-flex border border-solid border-[lightgray] w-[250px] mr-12  h-8">
                                <CalendarEvent color="grey" size="25" />
                                <DatePicker
                                    name="toDate"
                                    selected={toDate}
                                    onChange={handleToDateChanged}
                                    className="text-[12px] w-[100%]  mt-1"
                                />
                            </div>

                        </div>

                    </div>


                </div>
                <div className=" flex items-center    ">
                    <div className=" text-left mt-4 ml-7 text-sm font-[Calibri] font-bold"> Vehicle Class</div>
                    <div className="ml-7 mt-3">
                        <Button
                            className={`bg-[#00af8f]   text-white text-sm font-bold font-[Calibri] rounded-sm mr-5  p-2 w-[5%]`}
                            //variant="bordered"
                            size="sm"
                            type="submit"
                        >
                            Add Class
                        </Button>
                    </div>
                </div>
                <div  >
                    <div className="flex justify-end  font-bold gap-1 ">
                        <Button
                            className={`bg-[#f4f4f5]   text-[gray] text-sm font-bold font-[Calibri] rounded-sm mr-5 p-3 w-[7%] mb-2`}
                            //variant="bordered"
                            size="sm"
                            type="submit"
                        >
                            Generate
                        </Button>
                    </div>
                </div>
            </h1>
            <div>
            <h1 className="    mr-2 ml-2 mt-4 ">
                <h5 className="absolute -top-3 start-3 pl-[10px] pr-[10px] text-sm text-[#00AF8F] font-[Calibri] ">
                    Available Exam Quto(Exam Code:All)
                </h5>
                <div className="flex items- center ml-7 ">
                    <div className="flex flex-row ">
                        <div className=" w-[20px] text-left text-sm  mt-5 font-[calibri] font-bold">Center</div>
                        <div className="flex flex-row items-center ">
                            <div className="w-[500px] mt-4 ">
                                <Select
                                    labelPlacement="outside-left"
                                    radius="none"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    //placeholder="Select"

                                    //selectedKeys={centerId}
                                    // onChange={(e) => {
                                    //   handleCenterData(e);
                                    // }}
                                    className="w-[400px] bg-white ml-[17px]"
                                >
                                   <SelectItem
                                        key={"1"}
                                        value="TY1"
                                    >TY1
                                    </SelectItem>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center ml-7 ">
                        <div className=" font-[calibri] mt-2 items-left text-sm font-bold">Exam Date</div>
                        <div className="flex flex-row  mt-2 ">
                            <div className="inline-flex border border-solid border-[lightgray] w-[250px] ml-3  h-8">
                                <CalendarEvent color="grey" size="25" />
                                <DatePicker
                                    name="fromDate"
                                    selected={fromDate}
                                    onChange={handleFromDateChanged}
                                    className="text-[12px]  w-[100%] selection:border-none mt-1"
                                />
                            </div>
                            <div className=" w-[2px]  font-[calibri] text-md mr-7 ml-1">  To </div>
                            <div className=" inline-flex border border-solid border-[lightgray] w-[250px] mr-12  h-8">
                                <CalendarEvent color="grey" size="25" />
                                <DatePicker
                                    name="toDate"
                                     selected={toDate}
                                    onChange={handleToDateChanged}
                                    className="text-[12px] w-[100%]  mt-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex items-center    ">
                    <div className=" w-[15%] ml-3">
                        <div className="flex flex-row">

                            <Checkbox
                                size="sm"
                                radius="none"
                                className="pl-2 ml-4 rounded-sm test-sm font-[Calibri]"
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                isSelected={allCheckedData}
                                value="ALL"
                            onChange={onAllCheckboxChanged}
                            >
                                All
                            </Checkbox>
                        </div>
                    </div>
                </div>
                <div className="text-left ">
                    <div className="flex  mt-1  w-[100%] ml-7">
                        <div className="border border-[lightgray] w-[94%] mt-2  " >
                            <div className=" h-[75px] w-[100%]">
                                {checkedData.map((list) =>
                                    <Checkbox
                                        key={list.id}
                                        isSelected={list.isChecked}
                                        value={list.value}
                                        radius="none"
                                        size="sm"
                                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                        className="rounded-sm ml-2  "
                                        onChange={() => handleCheckboxChange(list.id)}
                                    >
                                        {list.label}
                                    </Checkbox>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
                <div  >
                    <div className="flex justify-end  font-bold gap-1  mt-3 mb-1 ">
                        <Button
                            className={`bg-[#00AF8F]   text-white text-sm font-bold font-[Calibri] rounded-sm mr-5  p-3 w-[7%] mb-2`}
                            //variant="bordered"
                            size="sm"
                            type="submit"
                        >
                            Generate
                        </Button>
                    </div>
                </div>
            </h1>
            </div>
                                    <ExamFee/>
        </div>
    )
}