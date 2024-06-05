import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  SelectItem,
  Select,
} from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { theme } from "../../common/themes/themeConfig";

function AddVehicleWatchlistData() {
  return (
    <div>
      <div className={`flex items-left text-[${theme?.colors?.lightGreen}] pt-[10px] pl-[10px]  font-bold text-md}`}>
        Vehicle Watchlist {">"} Add
      </div>
      <div className="flex items-left ml-2"> 1 record(s) found</div>
      <div className=" ml-2 mr-2 ">
        <div className={`text-left bg-[${theme?.colors?.tropicalRainForest}] text-white p-2`}> Watchlist</div>
        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
          <TableHeader className={` bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm  text-center font-bold`}>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              <Checkbox size="sm" radius="none" classNames={{ wrapper: `after:bg-[#00AF8F] rounded-sm` }} defaultSelected> </Checkbox>
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Vehicle Class
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Vehicle Id
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Reg Mark
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Chassis No.
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Model
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Manu.Year
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              *PGV Weight
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Body Type
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Engine Type
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              First Reg. Date
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Cancel Reason
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Insp.Order
            </TableColumn>
            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold`}>
              Watch/Alert
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow  >
              <TableCell>  <Checkbox size="sm" radius="none" classNames={{ wrapper: `after:bg-[#00AF8F] rounded-sm` }} defaultSelected></Checkbox></TableCell>
              <TableCell> 006 </TableCell>
              <TableCell> 0032155</TableCell>
              <TableCell>  WR5312</TableCell>
              <TableCell>JTK123446 </TableCell>
              <TableCell> COMFORT</TableCell>
              <TableCell>2019  </TableCell>
              <TableCell>0.00 </TableCell>
              <TableCell> 93</TableCell>
              <TableCell> 5</TableCell>
              <TableCell> 19/03/2020</TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div>
        <div className="grid grid-cols-2 mt-5">
          <div className="flex flex-row ">
            <div className="ml-2 mt-1 font-bold">
              Type
            </div>
            <div className="ml-[20%] mt-[5px]">
              <RadioGroup orientation="horizontal" color="success">
                <Radio
                  value="watch list"
                  color="success"
                >
                  Watch-list
                </Radio>
                <Radio className="ml-5"
                  value="alert-list"
                >
                  Alert-list
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div className="grid grid-rows-2 ">
            <div className="flex flex-row justify-evenly ">
              <div className="font-bold text-sm mt-1">Reason</div>
              <div className="ml-2 w-4/5">
                  <Select labelPlacement="outside-left" radius="none" size="sm" variant="bordered" name="reason" aria-label="reason">
                  <SelectItem key="1"> </SelectItem>
                </Select></div>
            </div>
            <div className="flex flex-row justify-evenly mt-[5px]">
              <div className="font-bold text-sm mt-1">Remarks</div>
              <div className="w-4/5" ><Input size="sm" radius="none" variant="bordered" /></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[10px]">
          <div className="justify start ml-1">
            <Button
              className="bg-[#ffffff] rounded"
              variant="bordered"
              type="submit"
            >
              Back
            </Button>
            <Button
              className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] rounded ml-1`}
              variant="bordered"
              type="submit"
            >
              Export
            </Button>
          </div>
          <div className="mr-4">
            <Button
              className="place-items-end ml-12 bg-[#f9a54c] text-[#f7f8f8] rounded"
              variant="bordered"
              type="submit"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddVehicleWatchlistData;
