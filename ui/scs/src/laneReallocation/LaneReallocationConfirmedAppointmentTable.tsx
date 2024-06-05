import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { IconFileExport } from "@tabler/icons-react";

const LaneReallocationConfirmedAppointmentTable = (props) => {
  const tableData = React.useMemo(() => props.tableData, [props.tableData]);

  return (
    <div className="mt-8 ml-1">
      <div className="mr-1">
        <h1 className=" h-[440px]">
          <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-[12px]/[13px] text-[#009b77]">
            Reallocated Appointment List
          </h5>
          <Table
            radius="none"
            shadow="sm"
            classNames={{ wrapper: "p-0" }}
            className="mt-5 pl-[10px] pr-[10px] mb-5 h-[400px]"
          >
            <TableHeader className=" bg-[#A0D9C1] text-[#009B77] text-[12px]  text-left font-bold">
              <TableColumn className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left font-bold border-1 border-white first:rounded-none">
                Reallocated Lane ID
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#009B77] text-[12px] text-left font-bold border-1 border-white">
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
              {tableData.map((tableRow, index) => (
                <TableRow key={index}>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-[12px] w-[4%]">
                    {tableRow.reallocated_laneID}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[12%]">
                    {tableRow.reg_marks}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[15%]">
                    {tableRow.chassiss_no}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[14%]">
                    {tableRow.exam_code}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[14%]">
                    {tableRow.veh_class}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[12%]">
                    {tableRow.date}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[10%]">
                    {tableRow.session}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder p-[5px]  text-left text-[12px] w-[25%]">
                    {tableRow.appointment_no}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </h1>

        <div className={`mt-3 flex flex-row justify-start -ml-[53px] mb-5`}>
          <Button
            className={` rounded shadow-sm border-2 border-[lightgrey] font-bold ml-14 mr-6 px-8 bg-[#009b77]
             text-[white]`}
            variant="bordered"
            type="submit"
            size="sm"
          >
            <IconFileExport />
            Export
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LaneReallocationConfirmedAppointmentTable;
