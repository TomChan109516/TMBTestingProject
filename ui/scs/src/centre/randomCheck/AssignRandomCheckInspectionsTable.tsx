import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { theme } from "../../common/themes/themeConfig";

function AssignRandomCheckInspectionsTable() {

  return (
    <div className="mx-2 mt-6">
      <Table
        radius="none"
        shadow="sm"
        classNames={{ wrapper: "p-0" }}
        overflow-x-scroll
      >
        <TableHeader
          className={`bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold font-[${theme?.fontFamily?.calibri}]`}>
          <TableColumn
            className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold font-[${theme?.fontFamily?.calibri}] border-1 border-white first:rounded-sm w-[2%]`}>
            Centre
          </TableColumn>
          <TableColumn className= {`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold font-[${theme?.fontFamily?.calibri}] border-1 border-white w-[12%]`}>
            Exam Time
          </TableColumn>
          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold font-[${theme?.fontFamily?.calibri}] border-1 border-white w-[4%]`}>
            Lane
          </TableColumn>
          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 font-[${theme?.fontFamily?.calibri}] border-white`}>
            Appointment No.
          </TableColumn>

          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 font-[${theme?.fontFamily?.calibri}] border-white`}>
            Exam Code
          </TableColumn>
          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 font-[${theme?.fontFamily?.calibri}] border-white`}>
            Vehicle Id
          </TableColumn>
          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 font-[${theme?.fontFamily?.calibri}] border-white`}>
            Vehicle Class
          </TableColumn>
          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 font-[${theme?.fontFamily?.calibri}] border-white`}>
            Reg-Mark
          </TableColumn>
          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 font-[${theme?.fontFamily?.calibri}] border-white`}>
            Chassis No
          </TableColumn>
          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 font-[${theme?.fontFamily?.calibri}] border-white`}>
            Engine class
          </TableColumn>
          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 font-[${theme?.fontFamily?.calibri}] border-white`}>
            Random Check Item
          </TableColumn>
          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 font-[${theme?.fontFamily?.calibri}] border-white`}>
            Operator
          </TableColumn>
          <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 font-[${theme?.fontFamily?.calibri}] border-white`}>
            Draw Date
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className= {`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm `}>
              TY1
            </TableCell>
            <TableCell className={`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              2
            </TableCell>
            <TableCell className={`border-1   border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              112020000118
            </TableCell>
            <TableCell className={`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              001
            </TableCell>
            <TableCell className={`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              008
            </TableCell>
            <TableCell className="border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm">
              003270674
            </TableCell>
            <TableCell className={`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              J87062
            </TableCell>
            <TableCell className={`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              JT743884300001147
            </TableCell>
            <TableCell className={`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              JT743884300001147
            </TableCell>
            <TableCell className={`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              JT743884300001147
            </TableCell>
            <TableCell className={`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              JT743884300001147
            </TableCell>
            <TableCell className={`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              JT743884300001147
            </TableCell>
            <TableCell className={`border-1  border-greyBorder p-[5px] font-[${theme?.fontFamily?.calibri}] text-sm`}>
              Engine No.Check
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default AssignRandomCheckInspectionsTable;
