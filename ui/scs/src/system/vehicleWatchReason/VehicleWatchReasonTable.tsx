import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React, { useState } from "react";
import { Edit, X } from "tabler-icons-react";
import { DeleteIconPopup } from "./DeleteIconPopup";

export const VehicleWatchReasonTable = ({ rows,deleteRow, editRow }) => {
  const [showDeleteIcon, setShowDeleteIcon] = useState<boolean>(false);
  return (
    <>
      <div className="flex-1">
        <div className="mt-[20px] ml-1 mr-1 font-[Calibri]">
          <div className="text-left bg-[#009B77] text-white px-2 py-1 rounded-t-[4px] font-bold text-sm">
            Vehicle Watch Reason{" "}
          </div>
          <Table
            radius="none"
            shadow="sm"
            classNames={{ wrapper: "p-0 w-[100%]" }}>
            <TableHeader>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none h-[30px]">
                Centre
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none h-[30px]">
                Type
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none h-[30px]">
                Reason
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none h-[30px] w-[600px">
                Description
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none h-[30px]">
                Status
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none h-[30px]">
                System Record
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none h-[30px]">
                Action
              </TableColumn>
            </TableHeader>
            <TableBody>
              {rows.map((row, idx) => {
                return (
                  <TableRow key={idx}>
                    <TableCell
                      className={`text-left border-2 border-[lightgray] py-0 label label-${row.centre}`}>
                      {row.centre}
                    </TableCell>
                    <TableCell
                      className={`text-left border-2 border-[lightgray] py-0 label label-${row.type}`}>
                      {row.type}
                    </TableCell>
                    <TableCell className="text-left border-2 border-[lightgray] py-0">
                      {row.reason}
                    </TableCell>
                    <TableCell className="text-left border-2 border-[lightgray] py-0">
                      {row.description}
                    </TableCell>
                    <TableCell
                      className={`text-left border-2 border-[lightgray] py-0 label label-${row.status}`}>
                      {row.status}
                    </TableCell>
                    <TableCell
                      className={`text-left border-2 border-[lightgray] py-0 label label-${row.record}`}>
                      {row.record}
                    </TableCell>
                    <TableCell className="text-left border-2 border-[lightgray] py-0">
                      <div className="inline-flex">
                        <Edit
                          onClick={() => editRow(idx)}
                          size="20"
                          color="white"
                          className="bg-[#009B77] rounded-[4px] mt-[2px]"
                        />
                        <X
                          // onClick={() => deleteRow(idx)}
                          onClick={()=>setShowDeleteIcon(true)}
                          size="20"
                          color="white"
                          className="bg-danger rounded-2xl ml-2 mt-[2px] stroke-[4px]"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
      <div>
        {showDeleteIcon && (
          <DeleteIconPopup setShowDeleteIcon={setShowDeleteIcon} />
        )}
      </div>
    </>
  );
};
