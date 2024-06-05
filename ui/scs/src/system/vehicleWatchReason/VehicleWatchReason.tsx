import { Button, Input, Checkbox, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { VehicleWatchReasonTable } from "./VehicleWatchReasonTable";
import { AddVehicleWatchReasonPopup } from "./AddVehicleWatchReasonPopup";

function VehicleWatchReason() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [header, setHeader] = useState("Add Vehicle Watch Reason");
  const [rows, setRows] = useState([
    {
      centre: "TY1",
      type: "Alert",
      reason: "10A01",
      description: "Special feature on light bus",
      status: "Action",
      record: "Y",
    },
    {
      centre: "TY2",
      type: "Watch",
      reason: "10A02",
      description: "Special feature on light bus",
      status: "Action",
      record: "N",
    },
    {
      centre: "TY1",
      type: "Alert",
      reason: "10A01",
      description: "Special feature on light bus",
      status: "Acton",
      record: "Y",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleAddReason = () => {
    setShowModal(true);
    setHeader("Add Vehicle Watch Reason");
  };
  const handleEditRow = (idx) => {
    setHeader("Edit Vehicle Watch Reason");
    setRowToEdit(idx);
    setShowModal(true);
  };
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };
  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
            return newRow;
          })
        );
  };
  return (
    <>
      <div className="p-[5px] ml-1 mt-[5px]">
        <div className="ml-4 flex flex-initial text-[#00AF8F] p-[2px]  font-bold text-sm">
          System {" > "} Vehicle Watch Reason
        </div>
      </div>

      <div className="mt-[10px] ml-1 mr-1">
        <h1 className="font-[Calibri] h-40">
          <h5 className="absolute-top-2 start-3 pl-[10px] pr-[10px] text-[15px] font-bold text-[#00AF8F] font-[Calibri]">
            Search Criteria
          </h5>
          <div className="grid grid-rows-3 grid-flow-col whitespace-nowrap mt-4">
            <div className="flex flex-row w-full flex-wrap md:flex-nowrap gap-2 mt-1">
              <div className="flex-1 inline-flex">
                <div className="ml-6 mr-[100px] text-[14px] font-bold">
                  Type
                </div>
                <div className="ml-2.5 inline-flex">
                  <Checkbox
                    size="sm"
                    classNames={{ wrapper: "after:bg-[#00AF8F] h-3.5 w-3.5" }}
                    radius="none"
                  />
                  <span className="font-[Calibri] text-[14px] mr-4 mt-1">
                    Watch
                  </span>
                  <Checkbox
                    size="sm"
                    classNames={{ wrapper: "after:bg-[#00AF8F] h-3.5 w-3.5" }}
                    radius="none"
                  />
                  <span className="font-[Calibri] text-[14px] mt-1">Alert</span>
                </div>
              </div>
              <div className="flex-1 inline-flex">
                <div className="mr-[108px] text-[14px] font-bold">Centre</div>
                <div className="inline-flex flex-grow mr-4">
                  <Select
                    isRequired
                    labelPlacement="outside-left"
                    radius="none"
                    classNames={{ trigger: "min-h-unit-2 h-7 rounded-sm" }}
                    variant="bordered"
                    name="center"
                    aria-label="center"
                    className=" font-[Calibri]">
                    <SelectItem key="1" value="l">
                      TY1
                    </SelectItem>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full flex-wrap md:flex-nowrap gap-2 mt-1">
              <div className="flex-1 inline-flex">
                <div className="ml-6 mr-[70px] text-[14px] font-bold ">
                  Reason
                </div>
                <div className="inline-flex flex-grow ml-6 mr-6">
                  <Input
                    type="text"
                    variant="bordered"
                    classNames={{ inputWrapper: "min-h-unit-6 h-7 rounded-sm" }}
                    radius="none"
                  />
                </div>
              </div>
              <div className="flex-1 inline-flex">
                <div className="mr-[48px] text-[14px] font-bold">
                  Description
                </div>
                <div className="inline-flex flex-grow ml-8 mr-4">
                  <Input
                    type="text"
                    variant="bordered"
                    classNames={{ inputWrapper: "min-h-unit-6 h-7 rounded-sm" }}
                    radius="none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row w-full flex-wrap md:flex-nowrap gap-2 mt-1">
              <div className="flex-1 inline-flex">
                <div className="ml-6 mr-[100px] text-[14px] font-bold   gap-2">
                  Status
                </div>
                <div className="inline-flex flex-grow mr-6">
                  <Select
                    isRequired
                    labelPlacement="outside-left"
                    radius="none"
                    classNames={{ trigger: "min-h-unit-2 h-7 rounded-sm" }}
                    variant="bordered"
                    name="status"
                    aria-label="status"
                    className=" font-[Calibri]">
                    <SelectItem key="1" value="active">
                      Active
                    </SelectItem>
                    <SelectItem key="2" value="inactive">
                      Inactive
                    </SelectItem>
                  </Select>
                </div>
              </div>
              <div className="flex-1 inline-flex">
                <div className="mr-[62px] text-[14px] font-bold">
                  System Record
                </div>
                <div className="inline-flex flex-grow mr-4">
                  <Select
                    isRequired
                    labelPlacement="outside-left"
                    radius="none"
                    classNames={{ trigger: "min-h-unit-2 h-7 rounded-sm" }}
                    variant="bordered"
                    name="record"
                    aria-label="record"
                    className=" font-[Calibri]">
                    <SelectItem key="1" value="y">
                      Y
                    </SelectItem>
                    <SelectItem key="2" value="n">
                      N
                    </SelectItem>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 font-[Calibri] font-bold mr-3 mt-1">
            <Button
              radius="none"
              type="reset"
              size="sm"
              className="bg-white text-black border border-solid border-greyBorder rounded-[3px]  min-w-unit-12 text-[13px] font-bold px-1 py-1 ">
              Reset
            </Button>
            <Button
              type="button"
              size="sm"
              radius="none"
              className="rounded-[3px]  min-w-unit-16 bg-[#00AF8F] text-white font-bold text-md text-[13px] px-1 py-1">
              Search
            </Button>
          </div>
        </h1>
        <div className="flex justify-between gap-2 font-[Calibri] font-bold mt-1.5">
          <Button
            radius="none"
            type="reset"
            size="sm"
            className="bg-white text-black border border-solid border-greyBorder rounded-[3px]  min-w-unit-12 text-[13px] font-bold px-1 py-1">
            Reset
          </Button>
          <Button
            type="button"
            size="sm"
            radius="none"
            className="rounded-[3px]  min-w-unit-20 bg-[#00AF8F] text-white font-bold text-md text-[13px] px-1 py-1"
            onClick={handleAddReason}>
            Add Reason
          </Button>
        </div>
        {showModal && (
          <AddVehicleWatchReasonPopup
            setShowModal={setShowModal}
            setRowToEdit={setRowToEdit}
            header={header}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
      </div>
        <VehicleWatchReasonTable
          rows={rows}
          deleteRow={handleDeleteRow}
          editRow={handleEditRow}
        />
    </>
  );
}

export default VehicleWatchReason;
