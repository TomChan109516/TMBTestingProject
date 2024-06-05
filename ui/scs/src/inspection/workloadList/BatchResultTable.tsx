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
} from "@nextui-org/react";

const tableData = [
  {
    lane: "11",
    time: "09:00(1)",
    class: "001",
    vehicle_Id: "003281980",
    reg_marks: "00X00",
    chassis_no: "WDC15674389J6765321",
    psl: "",
    exam_code: "008",
    recheck: "NO",
    appointment_no: "11202300000490",
    result: "",
  },
  {
    lane: "11",
    time: "18:00(1)",
    class: "001",
    vehicle_Id: "002495993",
    reg_marks: "VB8846",
    chassis_no: "SE3P-104734",
    psl: "",
    exam_code: "008",
    recheck: "NO",
    appointment_no: "11202300000494",
    result: "",
  },
  {
    lane: "11",
    time: "18:00(2)",
    class: "001",
    vehicle_Id: "002495993",
    reg_marks: "TT4085",
    chassis_no: "SCBBE53WX7C050021",
    psl: "",
    exam_code: "008",
    recheck: "NO",
    appointment_no: "11202300000495",
    result: "",
  },
];

export default function BatchResultTable() {
  const handleSelectAll = (e) => {
    console.log(e.target);
  };
  const onCheckboxChange = (e) => {
    console.log(e.target);
  };

  return (
    <div className=" m-2 mt-[10px]">
      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
        <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-none">
            <CheckboxGroup>
              <Checkbox
                name="selectCheckbox"
                radius="none"
                size="sm"
                classNames={{
                  wrapper: "before:bg-[#FFFFFF] after:bg-[#00AF8F]",
                }}
                // change as per need
                isSelected={true}
                onChange={(e) => handleSelectAll(e)}
              />
            </CheckboxGroup>
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm font-calibri text-left font-bold border-1 border-white">
            Lane
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm font-calibri text-left font-bold border-1 border-white">
            Time
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm font-calibri  text-left font-bold border-1 border-white">
            Class
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm font-calibri  text-left font-bold border-1 border-white">
            Vehicle Id
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm font-calibri  text-left font-bold border-1 border-white">
            Reg. Marks
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm  font-calibri  text-left font-bold border-1 border-white">
            Chassis No.
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1]  text-[#00AF8F] text-sm font-calibri  text-left font-bold border-1 border-white">
            PSL
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm font-calibri  text-left font-bold border-1 border-white">
            Exam Code
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm  font-calibri  text-left font-bold border-1 border-white">
            Recheck
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm font-calibri  text-left font-bold border-1 border-white">
            Appointment No.
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm font-calibri  text-left font-bold border-1 border-white last:rounded-none">
            Result
          </TableColumn>
        </TableHeader>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="border-1 border-white">
                <CheckboxGroup>
                  <Checkbox
                    name="selectCheckbox"
                    radius="none"
                    size="sm"
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    onChange={(e) => onCheckboxChange(e)}
                    // change as per need
                    isSelected={true}
                  />
                </CheckboxGroup>
              </TableCell>
              <TableCell className="border-1 border-white text-sm font-calibri text-left">
                {row.lane}
              </TableCell>
              <TableCell className="border-1 border-white text-left text-sm font-calibri">
                {row.time}
              </TableCell>
              <TableCell className="border-1 border-white text-left text-sm font-calibri">
                {row.class}{" "}
              </TableCell>
              <TableCell className="border-1 border-white text-left text-sm font-calibri">
                {row.vehicle_Id}
              </TableCell>
              <TableCell className="border-1 border-white text-left text-sm font-calibri">
                {row.reg_marks}{" "}
              </TableCell>
              <TableCell className="border-1 border-white text-left text-sm font-calibri">
                {row.chassis_no}
              </TableCell>
              <TableCell className="border-1 border-white text-left text-sm font-calibri">
                {row.psl}
              </TableCell>
              <TableCell className="border-1 border-white text-left text-sm font-calibri">
                {row.exam_code}
              </TableCell>
              <TableCell className="border-1 border-white text-left text-sm font-calibri">
                {row.recheck}
              </TableCell>
              <TableCell className="border-1 border-white text-left text-sm font-calibri">
                {row.appointment_no}
              </TableCell>
              <TableCell className="border-1 border-white text-left text-sm font-calibri">
                {row.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
