import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  CheckboxGroup,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function SpecialEventAppointments({ check, checkFunc }) {
  const navigate = useNavigate();

  const handleSelectAll = (e) => {
    checkFunc(e.target.checked);
  };
  const onCheckboxChange = (e) => {
    checkFunc(e.target.checked);
  };
  const continueBtn = () => {
    navigate("/specialeventschedule");
  };

  return (
    <div className="mt-[30px]">
      <div className="flex justify-between mt-[10px]">
        <div className="justify start ml-2 ">
          <Button
            type="button"
            className="ml-[5px] bg-[#F0FFFF] text-[#3EB489] border-[#75c3a5] font-bold rounded  mt-3"
            size="sm"
            variant="bordered"
          >
            Export
          </Button>
        </div>
        <div className=" justify-end">
          <div className=" text-sm/[13px] font-bold mb-2 mr-2">Test Event</div>
          <Button
            size="sm"
            className="float-right text-white bg-[orange] shadow-sm mr-2 rounded "
            onClick={continueBtn}
          >
            Continue
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 mt-[12px] text-sm/[13px] font-bold w-[100%]  ">
        <div className="grid grid-rows-2 h-[100 px] grid-flow-col ml-4">
          <div className="flex flex-row items-center">
            <div className="w-[75%] text-left">
              Affected appoinment(s)remaining:
            </div>
            <div className="w-[30%] text-left">0</div>
          </div>
        </div>
        <div className="grid grid-rows-2 h-[200 px] grid-flow-col ml-6">
          <div className="flex flex-row items-center">
            <div className="w-[25%] text-left">Rescheduled:</div>
            <div className="w-[75%] text-left ml-4"> 0</div>
          </div>
        </div>
        <div className="grid grid-rows-2 h-[200 px] grid-flow-col ml-4">
          <div className="flex flex-row items-center">
            <div className="w-[55%] text-left">Appoinment(s) excluded:</div>
            <div className="w-[30%] text-left">1</div>
          </div>
        </div>
        <div className="grid grid-rows-2 h-[200 px] grid-flow-col ml-4">
          <div className="flex flex-row items-center">
            <div className="w-[10%] text-left">N/A:</div>
            <div className="w-[80%] text-left">1</div>
          </div>
        </div>
      </div>

      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
        <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white"></TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Resch.
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Date
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Time
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Lane
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            To Date
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            To Time
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Exam
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Class
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Vehicle Id
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Reg.Mark
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Chassis No.
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Appointment No.
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Result
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow
            className={`bg-[#FFFFFF] 
                             `}
          >
            <TableCell className="border-1 border-white">
              <CheckboxGroup>
                <Checkbox
                  name="selectCheckbox"
                  radius="none"
                  size="sm"
                  classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                  onChange={(e) => onCheckboxChange(e)}
                  isSelected={check}
                />
              </CheckboxGroup>
            </TableCell>
            <TableCell className="border-1 border-white">{}</TableCell>
            <TableCell className="border-1 border-white">17/09/2021</TableCell>
            <TableCell className="border-1 border-white">18:00</TableCell>
            <TableCell className="border-1 border-white">21</TableCell>
            <TableCell className="border-1 border-white">{}</TableCell>
            <TableCell className="border-1 border-white">{}</TableCell>
            <TableCell className="border-1 border-white">008</TableCell>
            <TableCell className="border-1 border-white">030</TableCell>
            <TableCell className="border-1 border-white">002935245</TableCell>
            <TableCell className="border-1 border-white">SY2974</TableCell>
            <TableCell className="border-1 border-white">
              YS2K4x2001887418
            </TableCell>
            <TableCell className="border-1 border-white">
              412021000076
            </TableCell>
            <TableCell className="border-1 border-white">{}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
