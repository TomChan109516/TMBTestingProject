import React, { useState } from "react";
import {
  Button,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  RadioGroup,
  Selection,
} from "@nextui-org/react";

const TableData = [
  {
    id: 1,
    lane: "03",
    reg_Marks: "ZZ7777",
    chassis_no: "MCR3000067777",
    exam_code: "008",
    veh_class: "001",
    date: "06 / 12 / 2022 11:45",
    session: "AM2",
    appointment_no: "40000000394",
  },
  {
    id: 2,
    lane: "05",
    reg_Marks: "ZZ5577",
    chassis_no: "MCR4500067777",
    exam_code: "009",
    veh_class: "002",
    date: "06 / 12 / 2022 11:45",
    session: "AM2",
    appointment_no: "40000000394",
  },
  {
    id: 3,
    lane: "07",
    reg_Marks: "ZZ7766",
    chassis_no: "MCR30000666666",
    exam_code: "003",
    veh_class: "006",
    date: "06 / 12 / 2022 11:45",
    session: "AM2",
    appointment_no: "40000000394",
  },
];

const ReallocatedLane = [{ value: "01" }, { value: "02" }, { value: "03" }];

const LaneReallocationAppointmentTable = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [status, setStatus] = useState<Selection>(new Set([]));
  // for passing props
  // const [reallocationProps, setReallocationProps] = useState()

  console.log(checkedItems);

  const handleRadioClick = (id) => {
    setCheckedItems({ ...checkedItems, [id]: !checkedItems[id] });
  };

  const handleOnSave = () => {
    console.log("reallocated lane id Status", status);
    const checkedRadioGroup = Object.keys(checkedItems).filter(
      (items) => checkedItems[items] === true
    );
    console.log("checkedRadioGroup --", checkedRadioGroup);

    console.log("Selected Rows", checkedItems);
    // const dataFormat = {};
    const newFilteredData = TableData.filter((data) => {
      checkedRadioGroup.map((cRGroup) => {
        console.log("inside Data", Number(cRGroup) === data.id);
        return Number(cRGroup) === data.id;
      });
    });

    console.log("to send data format", newFilteredData);
  };

  return (
    <div className="mt-8 ml-1">
      <div className="mr-1">
        <h1 className=" h-[440px]">
          <h5
            className="absolute -top mt-2 start-3 pl-[10px] pr-[10px]
           text-[12px]/[13px] text-[#009b77]"
          >
            Appointment Records
          </h5>

          <Table
            radius="none"
            shadow="sm"
            classNames={{ wrapper: "p-0" }}
            className="mt-5 pl-[10px] pr-[10px] mb-5 h-[400px]"
          >
            <TableHeader className=" bg-[#A0D9C1] text-[#009B77] text-[12px]  text-left font-bold">
              <TableColumn
                className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left
               font-bold border-1 border-white first:rounded-none"
              >
                <input type="radio" />
              </TableColumn>
              <TableColumn
                className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left
               font-bold border-1 border-white first:rounded-none"
              >
                Lane
              </TableColumn>
              <TableColumn
                className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left
               font-bold border-1 border-white"
              >
                Reg. Marks
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left font-bold border-1 border-white">
                Chassis No.
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left font-bold border-1 border-white">
                Exam Code
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left font-bold border-1 border-white">
                Veh. Class
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left font-bold border-1 border-white">
                Date
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left font-bold border-1 border-white">
                Session
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left font-bold border-1 border-white">
                Appointment No.
              </TableColumn>
            </TableHeader>
            <TableBody>
              {TableData.map((_row) => (
                <TableRow key={_row.id}>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-[12px] w-[1%]">
                    <RadioGroup className="ml-3">
                      <input
                        type="radio"
                        name=""
                        id={_row.id.toString()}
                        className="flex justify-start -ml-2"
                        checked={checkedItems[_row.id]}
                        onClick={() => handleRadioClick(_row.id)}
                      />
                    </RadioGroup>
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[5%]">
                    {_row.lane}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[12%]">
                    {_row.reg_Marks}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[15%]">
                    {_row.chassis_no}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[14%]">
                    {_row.exam_code}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[14%]">
                    {_row.veh_class}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[12%]">
                    {_row.date}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[10%]">
                    {_row.session}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[25%]">
                    {_row.appointment_no}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </h1>
        <div className="mt-3 flex flex-row">
          <div className="mt-2">
            <h2 className=" font-bold">Relocate to Lane</h2>
          </div>
          <div className="w-[15%] text-left ml-20">
            <span className="text-[10.5px] text-black text-left">
              <Select
                id="centreData"
                data-testid="select-test"
                radius="none"
                variant="bordered"
                size="sm"
                labelPlacement="outside-left"
                items={ReallocatedLane}
                selectedKeys={status}
                onChange={(e) => {
                  setStatus(new Set(e.target.value.split(",")));
                }}
              >
                {(reallocatedLanes) => (
                  <SelectItem
                    key={reallocatedLanes.value}
                    value={reallocatedLanes.value}
                    className="text-[10px]"
                  >
                    {reallocatedLanes.value}
                  </SelectItem>
                )}
              </Select>
            </span>
          </div>
          <Button
            className=" rounded shadow-sm border-2 border-[lightgrey] font-bold ml-14 mr-6 px-8"
            variant="bordered"
            type="submit"
            size="sm"
          >
            Reset
          </Button>
          <Button
            className=" bg-[#009b77] text-[white] rounded shadow-sm border-2 border-[lightgrey] font-bold px-8"
            variant="bordered"
            type="submit"
            size="sm"
            onClick={handleOnSave}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LaneReallocationAppointmentTable;
