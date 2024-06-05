import { Button, Checkbox, Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ZoomReplace } from "tabler-icons-react";
 
 
export const TaxiBiAppointmentLetterPreprint = () => {
    const examCodeListData=[{id:1, value:"001", isChecked:true},
    {id:2, value:"008", isChecked:true},
    {id:3, value:"010", isChecked:true},
    {id:4, value:"01R", isChecked:true},
    {id:5, value:"08C", isChecked:true},
    {id:6, value:"08R", isChecked:true},
    {id:7, value:"10R", isChecked:true}]
   
    const [lane, setLane] = useState<string>("");
    const [lanes, setLanes] = useState<string[]>([]);
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [examCodeList, setExamCodeList]=useState(examCodeListData)
    const [validList, setValidList]=useState(examCodeListData)
 
    const printData=[{id:1 , label:"True", value:true}, {id:2, label:"False", Value:false}]
  const handleChangeLane = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("lanes", event.target.value);
    setLane(event.target.value);
  };
 
  const handleStartDateChange = (newValue: React.SetStateAction<Date>) => {
    setStartDate(newValue);
  };
 
  const resetFields=()=>{setStartDate("")
setLane("")}
 
const handleCheckboxChange=(id:number)=>{
    const updatedCheckedList=examCodeList.map((data)=>{
      if(data.id===id){
        data.isChecked=!data.isChecked
      }
      return data;
    })
    setExamCodeList(updatedCheckedList)
 
    const validListData=updatedCheckedList.filter((data)=>{if(data.isChecked===true){return data}})
setValidList(validListData)  
 
 
}
    return (<>
        <div className="m-2 text-[13px]">
 
            <div className="flex items-left text-[#00AF8F] p-[10px] pb-0 pl-0 font-bold text-md">
                Taxi BI Appoinment Letter Pre-Print {">"} Search Taxi AI Appoinment
            </div>
            <div className="flex flex-row justify-items-center text-[hsl(40,88%,67%)] text-start bg-[#f9eacd] p-1 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-exclamation-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 9v4" /><path d="M12 16v.01" /></svg>BI PrePrint Lanes:[]</div>
            <h1 className='p-2'>
                <h5
                className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                    Search Criteria
                </h5>
           
            <div className="grid grid-cols-2 mt-2 font-bold text-[11px]">
            <div className="grid grid-rows-1 grid-flow-col">
              <div className="flex flex-row ">
                <div className="w-[16%] text-left items-center ">Category</div>
                <div className="w-[70%] ml-[30px] ">
                <div className="border-1.5 border-[#cdfacd] flex justify-start items-center">
                 
                      <i className="material-icons w-1 pl-1 pt-0.5 pb-0.5">date_range</i>
                <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                       
                        className="w-[70%] pt-0.5 pb-0.5"
                      />
                      </div>
                </div>
              </div>
            </div>
                <div className="grid grid-rows-1 grid-flow-col ">
              <div className="flex flex-row ">
                <div className="w-[18%] text-left items-center">Taxi AI Lane</div>
                <div className="w-[72%] ml-[30px] ">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    name="Lane"
                    aria-label="centLaneer"
                    variant="bordered"
                    placeholder="Select"
                    value={lane}
                    color="danger"
                    onChange={handleChangeLane}
                  >
                    {lanes?.map((lane) => (
                      <SelectItem key={lane} value={lane}>
                        {lane}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
                </div>
 
 
{/*-------------------  Radio Buttons---------------- */}
                <div className="grid grid-cols-2 mt-2  text-[11px]">
            <div className="grid grid-rows-1 grid-flow-col">
              <div className="flex flex-row ">
                <div className="w-[16%] text-left items-center font-bold">Print Summary</div>
                <div className=" w-[70%] ml-[30px]">
                <RadioGroup className="text-[11px]"
                orientation="horizontal">
                        {printData.map((data) => (
                       
                          <Radio key={data.id} value={data.label} size="sm"
                            className="text-[11px]"
                            classNames={{
                              wrapper:
                                "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                              control: 'bg-white',
                              base: 'border-[#00AF8F]',
                            }}
                            onSelect={() => {onselectionchange }}
                          >{data.label}
                           </Radio>
                          ))}
                      </RadioGroup>
                </div>
              </div>
            </div>
                <div className="grid grid-rows-1 grid-flow-col">
              <div className="flex flex-row ">
                <div className="w-[18%] text-left items-center font-bold">Print Used TimeSlot</div>
                <div className="w-[72%] ml-[30px] ">
                <RadioGroup className="text-[11px]"
                orientation="horizontal">
                        {printData.map((data) => (
                       
                          <Radio key={data.id} value={data.label} size="sm"
                            className="text-[11px]"
                            classNames={{
                              wrapper:
                                "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                              control: 'bg-white',
                              base: 'border-[#00AF8F]',
                            }}
                            onSelect={() => {onselectionchange }}
                          >{data.label}
                           </Radio>
                          ))}
                      </RadioGroup>
               
                </div>
              </div>
            </div>
                </div>
{/*------------------- Exam Code List---------------- */}
                <div className="flex flex-row pt-1 pb-1">
                <div className="w-[8%] text-left items-center font-bold text-[11px]">Exam Code List</div>
                <div className="w-[87%] ml-[30px] border-1.5 border-[lightgray] text-[gray] text-start pt-5 pb-5 pl-2 justify-start justify-items-start align-text-top">
                {examCodeList.map((data) => (
 
<Checkbox key={data.id} isSelected={data.isChecked} value={data.value} radius="none" size="sm" classNames={{ wrapper: "after:bg-[#00AF8F]" }} className="rounded-sm mr-6" onChange={()=>handleCheckboxChange(data.id)} >{data.value}</Checkbox>
 
))}
                   
                   <div className="mt-2"> selected:[{validList.map((data)=>{
                return data.value+", "})}]</div>
               
                   
                {/* <div className="mt-2"> selected:{selectedList}</div> */}
               
                </div>
                </div>
 
               
                <div className="flex flex-row justify-items-end">
                    <div className="w-[90%] pl-32">
                            <ZoomReplace></ZoomReplace>
                         </div>
                    <div className="flex w-[10%] self-end">selected: {validList.length}</div>
                </div>
               
 
                <div className="text-end">
                <Button className="bg-[#f3b64e] fontsize-13px m-1 text-white rounded-sm" radius="none" >
                  Search
                </Button>
                <Button className="border-[#e4e4e7] fontsize-13px m-1 text-black rounded-sm" variant="bordered" radius="none"
                onClick={() => {
                    resetFields();
                  }}>
                  Reset
                </Button>
                <Button className="bg-[#00AF8F] fontsize-13px m-1 text-white rounded-sm" radius="none" >
                  View Report
                </Button>
                </div>
                </h1>
        </div>
    </>)
}
export default TaxiBiAppointmentLetterPreprint;