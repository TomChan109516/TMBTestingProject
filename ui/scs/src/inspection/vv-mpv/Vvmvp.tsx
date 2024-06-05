import React,{ useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { theme } from "../../common/themes/themeConfig";
function Vvmvp(){
  return (
    <div className={`font-[${theme?.fontFamily?.calibri}]`}>
      <div className="ml-1">
        <div className={`flex items-left text-[${theme?.colors?.tropicalRainForest}] pb-1 ml-1 font-bold text-sm`}>
          VV/MPV Report
        </div>
        <div className="h-[200px] mt-2 ml-1 mr-1">
          <h1>
            <h5 className={`absolute -top mt-1 start-3 pl-[10px] pr-[10px] text-sm text-[${theme?.colors?.tropicalRainForest}]`}>
            VV/MPV Report
            </h5>
            <div className="flex justify-end mt-[8px] mr-4 mb-1">
                <Button
               className={`text-[${theme?.colors?.persianGreen}] h-8 w-5 bg-[${theme?.colors?.white}] border-[1px] border-solid border-[${theme?.colors?.persianGreen}] ml-1 font-bold text-sm rounded-sm`}
                  size="sm"
                  radius="none"
                  type="submit"
                >
                  Add VV
                </Button>
            </div>
            <div className="mt-[14px] ml-3 mr-3">
              <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
                <TableHeader className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}]`}>
                  <TableColumn className={`bg-[#A0D9C1] w-[5%] text-[${theme?.colors?.persianGreen}] text-sm text-left font-bold border-1 border-white first:rounded-sm`}>
                    Class
                  </TableColumn>
                  <TableColumn className={`bg-[#A0D9C1] w-[5%] text-[${theme?.colors?.persianGreen}] text-sm text-left font-bold border-1 border-white`}>
                    VV. No.
                  </TableColumn>
                  <TableColumn className={`bg-[#A0D9C1] w-[34%] text-[${theme?.colors?.persianGreen}] text-sm text-left font-bold border-1 border-white`}>
                    Float Name
                  </TableColumn>
                  <TableColumn className={`bg-[#A0D9C1] w-[34%] text-[${theme?.colors?.persianGreen}] text-sm text-left font-bold border-1 border-white`}>
                    Chassis No.
                  </TableColumn>
                  <TableColumn className={`bg-[#A0D9C1] w-[8%] text-[${theme?.colors?.persianGreen}] text-sm text-left font-bold border-1 border-white`}>
                    Vehicle Type
                  </TableColumn>
                  <TableColumn className={`bg-[#A0D9C1] w-[10%] text-[${theme?.colors?.persianGreen}] text-sm text-left font-bold border-1 border-white`}>
                    Make
                  </TableColumn>
                  <TableColumn className={`bg-[#A0D9C1] w-[10%] text-[${theme?.colors?.persianGreen}] text-sm text-left font-bold border-1 border-white last:rounded-sm`}>
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-[lightgrey] p-[4px]">
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell className="text-left px-24 text-[#6b7280] text-opacity-40 font-bold">No Data</TableCell>
                    <TableCell> </TableCell>
                    <TableCell > </TableCell>
                    <TableCell> </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-end mt-[10px] mr-4 mb-1">
                <Button
                  className={`text-[${theme?.colors?.persianGreen}] h-8 w-5 bg-[${theme?.colors?.white}] border-[1px] border-solid border-[${theme?.colors?.persianGreen}] ml-1 font-bold text-sm rounded-sm`}
                  size="sm"
                  radius="none"
                  type="submit"
                >
                  Export
                </Button>      
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Vvmvp;