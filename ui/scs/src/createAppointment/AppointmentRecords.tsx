import React, { useState } from "react"
import { RadioGroup, Radio, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue, Button, Select, SelectItem, } from "@nextui-org/react"
import { CalendarEvent, X } from "tabler-icons-react";
import DatePicker from "react-datepicker";

export const AppointmentRecords = () => {

  const [fromDate, setFromDate] = useState(new Date());
  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };

  return (
    <>
      <div className="flex mt-7 text-xs">
        <div className="flex-1 ">
          <h1 className="w-[530px] font-[Calibri] ml-6 h-72">
            <h5 className="absolute-top-2 start-3 pl-[10px] pr-[10px] text-[15px] font-bold text-[#00AF8F] font-[Calibri] mt-1.5">
              Original Appointment Records
            </h5>
            <div className="mt-4 ml-1 overflow-y-scroll h-64">
              <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 w-[100%] table-auto" }}>
                <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] border-2 border-[lightgray]  text-left font-bold m-0">
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] w-[10px] first:rounded-none ">
                    <RadioGroup color="success">
                      <Radio
                        value="abc"
                        color="success"
                        size="sm">
                      </Radio>
                    </RadioGroup>
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] w-4">
                    Reg. Mark
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] w-10">
                    Chassis No.
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray]  whitespace-break-spaces w-2">
                    Veh. Class
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] p-0 w-3">
                    Lane
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] w-6">
                    Date
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] last:rounded-none px-1 w-2.5">
                    Session
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow className="text-[10px] px-3 py-0 border-2 border-[lightgray]">
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]">
                      <RadioGroup color="success">
                        <Radio
                          value="abc"
                          color="success"
                          size="sm">
                        </Radio>
                      </RadioGroup>
                    </TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]">ZZ7777</TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]">MCR30000285555</TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]" >001</TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]" >12</TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]">01/02/2024 11:15</TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]">AM</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </h1>

        </div>

        <div className="flex-1">
          <div className=" w-[246px] ml-1.5 font-[Calibri]">
            <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 w-[100%] table-auto" }}>
              <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] border-2 border-[lightgray]  text-left font-bold ">
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none">
                  Field
                </TableColumn>
                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none">
                  Option
                </TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-left border-2 border-[lightgray] px-2 py-1">Date</TableCell>
                  <TableCell className="text-left border-2 border-[lightgray] px-2 py-1">
                    <div className="flex items-center border border-solid border-[lightgray] w-[170px]  ">
                      <CalendarEvent color="grey" size="20" />
                      <DatePicker
                        name="fromDate"
                        selected=""
                        className="w-[80px]"
                        onChange={handleFromDateChanged} />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-2 border-[lightgray] text-left px-2 py-1">Time</TableCell>
                  <TableCell className="border-2 border-[lightgray] text-left px-2 py-1">
                    <div className="w-[170px] ">
                      <Select
                        isRequired
                        classNames={{ trigger: "min-h-unit-2 h-6" }}
                        labelPlacement="outside-left"
                        radius="none"
                        variant="bordered"
                        name="time"
                        aria-label="time">
                        <SelectItem key="1" value="t" className="h-5">
                          11:15
                        </SelectItem>
                      </Select>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-2 border-[lightgray] text-left px-2 py-1">Centre</TableCell>
                  <TableCell className="border-2 border-[lightgray] text-left px-2 py-1">
                    <div className="w-[170px] ">
                      <Select
                        isRequired
                        classNames={{ trigger: "min-h-unit-2 h-6" }}
                        labelPlacement="outside-left"
                        radius="none"
                        variant="bordered"
                        name="centre"
                        aria-label="centre">
                        <SelectItem key="1" value="t" className="h-5">
                          TDVEC
                        </SelectItem>
                      </Select>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border-2 border-[lightgray] text-left px-2 py-1">Lane</TableCell>
                  <TableCell className="border-2 border-[lightgray] text-left px-2 py-1">
                    <div className="w-[170px]">
                      <Select
                        isRequired
                        classNames={{ trigger: "min-h-unit-2 h-6" }}
                        labelPlacement="outside-left"
                        radius="none"
                        variant="bordered"
                        name="lane"
                        aria-label="lane">
                        <SelectItem key="1" value="t" className="h-5">
                          10
                        </SelectItem>
                      </Select>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="ml-12 w-40 mt-8">
              <Button
                type="button"
                radius="none"
                className=" rounded-sm bg-[#00AF8F] text-white font-bold text-xs w-[138px] h-6">{">> "} Transfer {" >>"}
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1  ">
          <h1 className=" w-[530px] font-[Calibri] mr-6 h-72 ">

            <h5 className="absolute-top-2 start-3 pl-[10px] pr-[10px] text-[15px] font-bold text-[#00AF8F] font-[Calibri] mt-1.5">
              Rescheduled Appointment Records
            </h5>
            <div className="mt-4 ml-1 mr-1 overflow-y-scroll h-64">
              <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 w-[100%] table-auto" }}>
                <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] border-2 border-[lightgray]  text-left font-bold m-0">
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] w-[10px] first:rounded-none " children="">
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] w-4">
                    Reg. Mark
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] w-10">
                    Chassis No.
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray]  whitespace-break-spaces w-2">
                    Veh. Class
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] p-0 w-3">
                    Lane
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] w-6">
                    Date
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[13.5px] text-left font-bold border-2 border-[lightgray] last:rounded-none px-1 w-2.5">
                    Session
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow className="text-[10px] px-3 py-0 border-2 border-[lightgray]">
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]">
                      <X
                        size="18"
                        color="black"
                        className="border-2 rounded-2xl" />
                    </TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]">ZZ7777</TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]">MCR30000285555</TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]" >001</TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]" >12</TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]">01/02/2024 11:15</TableCell>
                    <TableCell className=" px-3 py-0 text-left border-2 border-[lightgray]">AM</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </h1>
        </div>
      </div>

      <div className="flex justify-end gap-6 font-[Calibri] font-bold mr-6 mt-4">
        <Button
          radius="none"
          type="reset"
          className="bg-white text-black border border-solid border-greyBorder rounded-sm h-6 w-[138px] text-[13px] font-bold">Reset
        </Button>

        <Button
          type="button"
          radius="none"
          className="rounded-sm bg-[#00AF8F] text-white font-bold text-md h-6 w-[138px] text-[13px]">Save
        </Button>
      </div>
    </>
  );
}