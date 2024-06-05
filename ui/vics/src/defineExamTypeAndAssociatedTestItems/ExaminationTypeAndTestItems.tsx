import React, { useState } from "react";
import CustomizeTestNameInformation from "./CustomizeTestNameInformation";
import DisableExaminationTypeandTestItems from "./DisableExaminationTypeandTestItems";
import ReactivateExaminationTypeandTestItems from "./ReactivateExaminationTypeandTestItems";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Select,
  SelectItem,
  Button,
  Switch,
  Input,
  Pagination,
  cn,
} from "@nextui-org/react";
import { Settings } from "tabler-icons-react";
const userRoleData = [
  {
    id: "1",
    roleCode: "001",
    roleName: "PRE-REGISTRATION:NEW,IMPORTANT USED",
    role: "003",
  },
  {
    id: "2",
    roleCode: "001",
    roleName: "PRE-REGISTRATION:NEW,IMPORTANT USED",
    role: "005",
  },
  {
    id: "3",
    roleCode: "001",
    roleName: "PRE-REGISTRATION:NEW,IMPORTANT USED",
    role: "006",
  },
  {
    id: "4",
    roleCode: "001",
    roleName: "PRE-REGISTRATION:NEW,IMPORTANT USED",
    role: "0",
  },
  {
    id: "5",
    roleCode: "001",
    roleName: "PRE-REGISTRATION:NEW,IMPORTANT USED",
    role: "011",
    status: "Active",
  },
  {
    id: "6",
    roleCode: "001",
    roleName: "PRE-REGISTRATION:NEW,IMPORTANT USED",
    role: "012",
  },
  {
    id: "7",
    roleCode: "001",
    roleName: "PRE-REGISTRATION:NEW,IMPORTANT USED",
    role: "013",
  },
  {
    id: "8",
    roleCode: "001",
    roleName: "PRE-REGISTRATION:NEW,IMPORTANT USED",
    role: "014",
  },
  {
    id: "9",
    roleCode: "001",
    roleName: "PRE-REGISTRATION:NEW,IMPORTANT USED",
    role: "015",
  },
  {
    id: "10",
    roleCode: "001",
    roleName: "PRE-REGISTRATION:NEW,IMPORTANT USED",
    role: "020",
  },
];

export default function ExaminationTypeandTestItems() {
  const [nameInformation, setNameInformation] = useState(false);
  const [disableExamination, setDisableExamination] = useState(false);
  const [reactivateExamination, setReactivateExamination] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [isAddButtonClicked, setIsAddButtonClicked] = useState(false);

  const handleSwitchToggle = () => {
    setIsSwitchOn((isSwitchOn) => !isSwitchOn);
    if (!isSwitchOn) {
      setReactivateExamination(true);
      setDisableExamination(false);
    } else {
      setDisableExamination(true);
      setReactivateExamination(false);
    }
  };

  return (
    <>
      {nameInformation && (
        <CustomizeTestNameInformation
          setNameInformation={setNameInformation}
          isAddButtonClicked={isAddButtonClicked}
        />
      )}
      {disableExamination && (
        <DisableExaminationTypeandTestItems
          setDisableExamination={setDisableExamination}
        />
      )}
      {reactivateExamination && (
        <ReactivateExaminationTypeandTestItems
          setReactivateExamination={setReactivateExamination}
        />
      )}

      <div className="flex justify-between ml-0">
        <div className=" flex mt-4 ml-8 ">
          <div>
            <div className="font-bold">
              <p> Define Examination Type And Test Items </p>
            </div>

            <Button
              size="sm"
              onClick={() => {
                setNameInformation(true);
                setIsAddButtonClicked(true);
              }}
              className="bg-persianGreen font-bold text-white h-8 mt-3 rounded p-1 float-left "
              radius="none"
            >
              Add
            </Button>
          </div>
        </div>

        <div className="flex  mt-6 mr-5">
          <div className="flex mt-5">
            <span className="mr-[-15px] text-small mt-2 w-[100%] font-bold ">
              Exam Code
            </span>{" "}
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              className="w-[100%] h-7 mt-1"
              classNames={{ inputWrapper: "h-7 w-[100%] " }}
            ></Input>
            <div>
              <Button
                size="sm"
                className="bg-persianGreen font-bold text-white m-3 w-auto md:w-[150px] lg:w-[120px] xl:w-[100px] h-8 mt-1 border-1.5 rounded p-1"
                radius="none"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-8 mt-1 mb-10 mr-7 ">
        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }}>
          <TableHeader>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              ID
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
              Exam Code
            </TableColumn>

            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
              Exam Code Eng.Desc
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
              Vehicle Class
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              Status
            </TableColumn>
          </TableHeader>
          <TableBody>
            {userRoleData.map((details) => {
              return (
                <TableRow
                  key={details.id}
                  className="even:bg-lightblue odd:bg-fadedwhite font-calibri text-center"
                >
                  <TableCell className="border-1  border-greyBorder font-calibri font-bold  text-sm   text-center  ">
                    {details.id}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder font-calibri font-bold  text-sm   text-center  ">
                    {details.roleCode}
                  </TableCell>

                  <TableCell className="border-1  border-greyBorder   text-center  font-calibri font-bold text-sm">
                    {details.roleName}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                    {details.role}
                  </TableCell>
                  <TableCell
                    key={details.id}
                    className="border-1  border-greyBorder  text-center font-calibri  text-sm"
                  >
                    <div className="flex justify-center">
                      <Switch
                        name="switch"
                        size="sm"
                        startContent={<p>Active</p>}
                        endContent={<p>Disable</p>}
                        onChange={handleSwitchToggle}
                        classNames={{
                          wrapper:
                            "h-[24px] bg-[#bf0e0b] overflow-visible   group-data-[selected=true]:bg-[#00AF8F] w-[80px] ",
                          thumb: cn(
                            "w-5 h-5 shadow-md",
                            "group-data-[hover=true]:border-primary",
                            "group-data-[selected=true]:ml-12",
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4"
                          ),
                        }}
                        value="switch"
                        defaultSelected
                      />

                      <Settings
                        size={22}
                        color="black"
                        className="rounded-sm mt-[2px]"
                        onClick={() => {
                          setNameInformation(true);
                          setIsAddButtonClicked(false);
                        }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div className="flex justify-between mt-[10px]">
          <div className=" flex flex-row ml-2  ">
            <div className=" text-sm mt-2 font-bold font-calibri  ">
              Showing 1 to {userRoleData.length} of 2469 rows
            </div>
            <div className="ml-2 w-[70px] mt-1  ">
              <Select
                labelPlacement="outside-left"
                radius="none"
                size="sm"
                name="page"
                variant="bordered"
              >
                <SelectItem key="10" value="10">
                  10{" "}
                </SelectItem>
                <SelectItem key="20" value="20">
                  20{" "}
                </SelectItem>
                <SelectItem key="30" value="30">
                  30{" "}
                </SelectItem>
                <SelectItem key="40" value="40">
                  40{" "}
                </SelectItem>
                <SelectItem key="50" value="50">
                  50{" "}
                </SelectItem>
              </Select>
            </div>
            <span className="  inline-flex ml-2 mt-2 text-sm font-bold font-calibri">
              rows per page
            </span>
          </div>
          <div className=" justify-end mt-2">
            <Pagination
              isCompact
              showControls
              total={247}
              initialPage={1}
              classNames={{
                wrapper:
                  "gap-0 overflow-visible h-8  rounded-none border-[black]",
                item: "w-8 h-8 text-[12px] rounded-none text-[blue] font-bold",
                prev: "h-8 rounded-none",
                next: " h-8 rounded-none",
                cursor:
                  "bg-gradient-to-b shadow-lg from-[#61dafbaa] to-[#61dafbaa] rounded-none  text-white font-bold h-8 border-[black]",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
