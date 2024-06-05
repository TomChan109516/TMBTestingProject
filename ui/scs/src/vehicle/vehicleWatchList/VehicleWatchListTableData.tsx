import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Check } from "tabler-icons-react";

export default function VehicleWatchListTableData({
  check,
  checkFunc,
}) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const watchListData = useSelector((state) => state.VehicleWatchList.vehicleWatchListResponse)

  const handleSelectAll = (e) => {
    checkFunc(e.target.checked);
  };
  const onCheckboxChange = (e) => {
    checkFunc(e.target.checked);
  };
  //   const toggleSelectRow = (id) => {
  //     if(selectedItems.includes(id)){
  //         setSelectedItems(selectedItems.filter((rowId) => rowId !== id));
  //     } else {
  //         setSelectedItems([...selectedItems, id]);
  //     }
  //   }
  return (
    <div className="mt-[30px]">
      <div className="text-left bg-[#00AF8F] text-white p-2">Watch List</div>
      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }} >
        <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            <CheckboxGroup>
              <Checkbox
                name="selectCheckbox"
                radius="none"
                size="sm"
                classNames={{
                  wrapper: "before:bg-[#FFFFFF] after:bg-[#00AF8F]",
                }}
                isSelected={check}
                onChange={(e) => handleSelectAll(e)}
              />
            </CheckboxGroup>
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Class
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Reg.Mark
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Chassis No.
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Model
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Manu. Year
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            *PGV weight
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Reason
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Created Date
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Created Centre
          </TableColumn>
          <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
            Cancelled Date
          </TableColumn>
        </TableHeader>

        <TableBody>
          {watchListData?.map((item, index) => (
            <TableRow
              key={index}
              className={`bg-[#FFFFFF] ${
                index % 2 !== 0 ? "bg-[#e4f0eb]" : ""
              }`}
            >
              <TableCell className="border-1 border-white">
                <CheckboxGroup>
                  <Checkbox
                    name="selectCheckbox"
                    radius="none"
                    size="sm"
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    onChange={(e) => onCheckboxChange(e)}
                    isSelected={check}
                  />
                </CheckboxGroup>
              </TableCell>
              <TableCell className="border-1 border-white">
                {item.vhlClassId}
              </TableCell>
              <TableCell className="border-1 border-white">
                {item.regMark}
              </TableCell>
              <TableCell className="border-1 border-white">
                {item.chassisNumber}
              </TableCell>
              <TableCell className="border-1 border-white">
                {item.model}
              </TableCell>
              <TableCell className="border-1 border-white">
                {item.manufactureYear}
              </TableCell>
              <TableCell className="border-1 border-white">
                {item.pgvWeight}
              </TableCell>
              <TableCell className="border-1 border-white">
                {item.whLst_Rsn_Key}
              </TableCell>
              <TableCell className="border-1 border-white">
                {item.createdDate}
              </TableCell>
              <TableCell className="border-1 border-white">
                {item.center_Key}
              </TableCell>
              <TableCell className="border-1 border-white">{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
