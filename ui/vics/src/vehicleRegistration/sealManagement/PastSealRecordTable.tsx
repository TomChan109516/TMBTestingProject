import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const tableData = [
  {
    sealNumber: "AA00222",
    appointmentDate: "2023/11/02",
    sealPosition: "SDD",
    examCode: "008",
  },
  {
    sealNumber: "AA00223",
    appointmentDate: "2023/11/02",
    sealPosition: "SDD",
    examCode: "008",
  },
  {
    sealNumber: "AA00224",
    appointmentDate: "2023/11/02",
    sealPosition: "SDD",
    examCode: "008",
  },
  {
    sealNumber: "AA00225",
    appointmentDate: "2023/11/02",
    sealPosition: "SDD",
    examCode: "001",
  },
];

const PastSealRecordTable = () => {
  return (
    <div>
      <Table
        radius="none"
        shadow="sm"
        classNames={{ wrapper: "p-0" }}
        className="h-[300px]  border-persianGreen border-2 mr-12 "
      >
        <TableHeader className=" bg-persianGreen text-white   text-center m-0">
          <TableColumn className="bg-persianGreen text-white  text-center font-bold border-2 border-[#c9c9cb] first:rounded-none">
            Seal Number
          </TableColumn>
          <TableColumn className="bg-persianGreen text-white text-center border-2 border-[#c9c9cb]   ">
            Appointment Date
          </TableColumn>
          <TableColumn className="bg-persianGreen text-white  text-center border-2 border-[#c9c9cb]  font-bold ">
            Seal Position
          </TableColumn>
          <TableColumn className="bg-persianGreen text-white  text-center border-2 border-[#c9c9cb] last:rounded-none">
            Exam Code
          </TableColumn>
        </TableHeader>
        <TableBody className=" mt-">
          {tableData.map((tableRow, index) => (
            <TableRow className="mt-0" key={index}>
              <TableCell className=" font-calibri font-bold border-2 border-[#c9c9cb] p-1  ">
                {tableRow.sealNumber}
              </TableCell>
              <TableCell className=" font-calibri font-bold border-2 border-[#c9c9cb]">
                {tableRow.appointmentDate}
              </TableCell>
              <TableCell className=" font-calibri font-bold border-2 border-[#c9c9cb]">
                {tableRow.sealPosition}
              </TableCell>
              <TableCell className=" font-calibri font-bold border-2 border-[#c9c9cb]">
                {tableRow.examCode}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PastSealRecordTable;
