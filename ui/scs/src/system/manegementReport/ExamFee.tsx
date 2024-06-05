import { Button, Checkbox, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";


type DataType={
    id:number;
    label:string;
    value:string;
    isChecked:boolean;
}

const ExamFeeData=[
    {id:2,label:"VEF2019", value:"VEF2019" ,isChecked:true},
    {id:3,label:"VEF2020", value:"VEF2020" ,isChecked:true},
    {id:4,label:"VEF2021", Value:"VEF2021" ,isChecked:true},
]


export default function ExamFee(){
const [checkedDataFee,setCheckedDataFee]=useState<DataType[]>(ExamFeeData)
const [allcheckedDataFee,setAllCheckedDataFee]=useState<boolean>(true)
const [toDate,setToDate]=useState(new Date())
const [fromDate,setFromDate]=useState(new Date())


const handleFromDateChanged=(newValue:React.SetStateAction<Date>)=>{
    setFromDate(fromDate)
}

const handleToDateChanged=(newValue:React.SetStateAction<Date>) =>{
    setToDate(toDate)
}


const onAllCheckboxChanged=(e: React.ChangeEvent<HTMLInputElement>)=>{
    if(allcheckedDataFee){
        setAllCheckedDataFee(false)
        ExamFeeData.map((data)=>(data.isChecked=false))
    }else{
        setAllCheckedDataFee(true)
        ExamFeeData.map((data)=>(data.isChecked=true))
    }
};


const handleCheckboxChange=(id:number)=>{
    const updatedCheckedDataFee= checkedDataFee.map((data)=>{
        if(data.id===id){
            data.isChecked=!data.isChecked
        }
        return data
    });
    setCheckedDataFee(updatedCheckedDataFee)
}

    return(
        <div>
             <div>
            <h1 className="    mr-2 ml-2 mt-4 ">
                <h5 className="absolute -top-3 start-3 pl-[10px] pr-[10px] text-md text-[#00AF8F] font-[Calibri] ">
                    Exam Fee Statistic
                </h5>
                <div className="flex items- center ml-7 mt-2">
                    
                    <div className="flex flex-row items-center ">
                        <div className=" font-[calibri] mt-2  items-left text-left text-sm font-bold">Exam Date</div>
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
                            <div className="  w-[2px]  font-[calibri] text-md mr-10 ml-3">  To </div>
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
                <div className=" flex items-center ">
                    <div className=" w-[15%] ml-2">
                        <div className="flex flex-row">

                            <Checkbox
                                size="sm"
                                radius="none"
                                className="pl-2 ml-4 rounded-sm test-sm font-[Calibri] "
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                isSelected={allcheckedDataFee}
                                value="ALL"
                            onChange={onAllCheckboxChanged}
                            >
                                All
                            </Checkbox>
                        </div>
                    </div>
                </div>
                <div className="text-left">
                    <div className="flex  mt-1  w-[100%] ml-7 mr-5 overflow-y-scroll">
                        <div className="border border-[lightgray] w-[95%] mt-2 " >
                            <div className=" h-[30px] w-[100%]">

                                {checkedDataFee.map((user)=>
                                    <Checkbox
                                    key={user.id}
                                    isSelected={user.isChecked}
                                    value={user.value}
                                    radius="none"
                                    size="sm"
                                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                    className="rounded-sm ml-2  "
                                    onChange={() => handleCheckboxChange(user.id)}
                                >
                                    {user.label}
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
            <div className="ml-2 mr-2">
            <h1 className="   mt-4 ">
                <h5 className="absolute -top-3 start-3 pl-[10px] pr-[10px] text-md text-[#00AF8F] font-[Calibri] ">
                    Vehicle Not Book AI
                </h5>
                <div className="flex items- center  mt-2">   
                    <div className="flex flex-row items-center ml-2 ">
                        <div className=" font-[calibri] mt-2  items-left text-sm font-bold">License Date</div>
                        <div className="flex flex-row  mt-2 ">
                            <div className="inline-flex border border-solid border-[lightgray] w-[200px] ml-1  h-8">
                                <CalendarEvent color="grey" size="25" />
                                <DatePicker
                                    name="fromDate"
                                    selected={fromDate}
                                    onChange={handleFromDateChanged}
                                    className="text-[12px]  w-[100%] selection:border-none mt-1"
                                />
                            </div>
                            <div className="  w-[2px]  font-[calibri] text-md mr-10 ml-1 ">  To </div>
                            <div className=" inline-flex border border-solid border-[lightgray] w-[200px] mr-10  h-8">
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
                    <div className="flex flex-row items-center ml-3 ">
                        <div className=" font-[calibri] mt-2   text-left text-sm font-bold">Exam Date</div>
                        <div className="flex flex-row  mt-2 ">
                            <div className="inline-flex border border-solid border-[lightgray] w-[200px] ml-3  h-8">
                                <CalendarEvent color="grey" size="25" />
                                <DatePicker
                                    name="fromDate"
                                    selected={fromDate}
                                    onChange={handleFromDateChanged}
                                    className="text-[12px]  w-[100%] selection:border-none mt-1"
                                />
                            </div>
                            <div className="  w-[2px]  font-[calibri] text-md mr-7 ml-1 ">  To </div>
                            <div className=" inline-flex border border-solid border-[lightgray] w-[200px] mr-9  h-8">
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

        </div>
    )
}


