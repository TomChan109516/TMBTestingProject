import React, { useState } from "react";
import {
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Settings } from "tabler-icons-react";
import NewRedrawReason from "./NewRedrawReason";

const WorkloadListRedraw = () => {
  const [newRedrawReason, setNewRedrawReason] = useState(false);

  const redrawReason = () => {
    setNewRedrawReason(true);
  };

  return (
    <>
      <div className="p-[5px] ml-1 mt-[5px]">
        <div className="ml-4 flex flex-initial text-[#00AF8F] p-[2px] font-[Calibri] font-bold text-sm">
          Workload List Staff Assignment Redraw Reason Maintenance
        </div>
      </div>
      <div className="mt-[10px] ml-6 font-[Calibri]">
        <h1 className="font-[Calibri] h-[68px] w-[1315px]">
          <h5 className="absolute-top-2 start-3 pl-[10px] pr-[10px] text-sm font-bold text-[#00AF8F] font-[Calibri] ">
            Searching Criteria
          </h5>
          <div className="flex flex-row-1  flex-wrap gap-20 mt-4">
            <div className="ml-6  text-[14px] font-bold ">Redraw Reason</div>
            <div className="flex-1 inline-flex">
              <Input
                type="text"
                variant="bordered"
                classNames={{ inputWrapper: "min-h-unit-6 h-6 w-[400px]" }}
                radius="none"
              />
            </div>
            <div className="flex-1 flex-grow ">
              <Button
                radius="none"
                type="reset"
                className="bg-white text-black border border-solid border-greyBorder rounded-sm h-6 w-36 text-sm font-bold mr-4"
              >
                Reset
              </Button>
              <Button
                type="button"
                radius="none"
                className="rounded-sm bg-[#00AF8F] text-white h-6 w-36 text-sm font-bold"
              >
                Search
              </Button>
            </div>
          </div>
        </h1>
        <Button
          type="button"
          radius="none"
          onClick={redrawReason}
          className="flex justify-start rounded-sm bg-[#00AF8F] text-white mt-4 mb-4 px-2.5 h-6 w-40 text-xs font-bold font-[Calibri]"
        >
          Create New Redraw Reason
        </Button>
      </div>

      <div className="flex-1">
        <div className="mt-[10px] ml-6 w-[1207px] font-[Calibri]">
          <div className="text-left bg-[#009B77] text-white px-2 font-bold text-sm">
            Redraw Reason Summary
          </div>
          <Table
            radius="none"
            shadow="sm"
            classNames={{ wrapper: "p-0 w-[100%] table-auto" }}
          >
            <TableHeader>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none w-[350px] h-[30px] px-8">
                Redraw Reason
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none h-[30px] px-8">
                Description
              </TableColumn>
              <TableColumn
                className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-left font-bold border-2 border-[lightgray] first:rounded-none last:rounded-none h-[30px] px-8"
                children=""
              ></TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-left border-2 border-[lightgray] px-8 py-0 w-[400px]">
                  Sickness
                </TableCell>
                <TableCell className="text-left border-2 border-[lightgray] px-8 py-0 ">
                  Staff absent due to sickness with doctor's appointment
                  provided
                </TableCell>
                <TableCell className="text-left border-2 border-[lightgray] px-8 py-0 w-[40px]">
                  <Settings
                    size="23"
                    color="white"
                    className="bg-[#00AF8F] rounded-none mt-[2px] mb-[2px]"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      {newRedrawReason && (
        <NewRedrawReason
          newRedrawReason={newRedrawReason}
          setNewRedrawReason={setNewRedrawReason}
        />
      )}
    </>
  );
};
export default WorkloadListRedraw;