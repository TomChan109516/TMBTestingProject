import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react"
import React, { useState } from "react"
import { Edit } from "tabler-icons-react";
import RoleandCentrePopUp from "./RoleandCentrePopUp";

export const SystemConfigTable = () => {

  const [showSysConfigPopUp, setSysConfigPopUp] = useState(false);
  const EditFields = () => {
    setSysConfigPopUp(true);
  }
  
  const rows = [
    {
      key: "1",
      id: "RED_MINI_BUS_PERMIT_ZONE_ENG",
      text: "18 Sai Tso Wan Road, Tsing Yi, New Territories",
      desc: "",
      update: "16/01/2024 10:00",
      action: <Edit
        size="20"
        color="white"
        className="bg-[#00AF8F] rounded-sm ml-2 mt-1 mb-1"
        onClick={EditFields} />,
    },
    {
      key: "2",
      id: "APPT_DRFT_END_MNTE_QTY",
      text: "150",
      desc: "Appointment draft expiry interval, in minutes",
      update: "06/01/2024 14:00",
      action: <Edit
        size="20"
        color="white"
        className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
        onClick={EditFields} />,
    },
    {
      key: "3",
      id: "APPT_DRFT_DEL_DAY_QTY",
      text: "14",
      desc: "Appointment draft expiry interval, in days",
      update: "10/12/2023 00:00",
      action: <Edit
        size="20"
        color="white"
        className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
        onClick={EditFields} />,
    },
    {
      key: "4",
      id: "APPT_AUTO_DNA_DAY_QTY",
      text: "7",
      desc: "Auto-mark no-show appointments DNA, in days",
      update: "01/01/2024 17:05",
      action: <Edit
        size="20"
        color="white"
        className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
        onClick={EditFields} />,
    },
  ];
  const columns = [
    {
      key: "id",
      label: "System Config ID",
    },
    {
      key: "text",
      label: "System Config Text",
    },
    {
      key: "desc",
      label: "System Config Description",
    },
    {
      key: "update",
      label: "Last Time Update",
    },
    {
      key: "action",
      label: "Action",
    },
  ];
  return (
    <>
      <div className="mt-3 font-[Calibri] ml-2 mr-2">
        <Table radius="none" shadow="sm" classNames={{ wrapper:  "p-0 w-[100%]"}} >
          <TableHeader columns={columns} >
            {(column) => <TableColumn className={`bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none h-[30px]`} key={column.key}>{column.label}</TableColumn>}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key} className="w-[28%]  text-sm">
                {(columnKey) => <TableCell className="text-left border-2 border-[lightgray] py-0">{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {showSysConfigPopUp && (
        <RoleandCentrePopUp
          showSysConfigPopUp={showSysConfigPopUp}
          setSysConfigPopUp={setSysConfigPopUp}
        />
      )}
    </>
  );
}