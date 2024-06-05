import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { IconXboxX } from "@tabler/icons-react";

const tableData = [
  {
    sealNumber: "BB092384",
    station: "C",
    sealPosition: [{ value: "SSD" }, { value: "SPOIL" }],
  },
  {
    sealNumber: "BB092384",
    station: "C",
    sealPosition: [{ value: "SSD" }, { value: "SPOIL" }],
  },
  {
    sealNumber: "BB092384",
    station: "C",
    sealPosition: [{ value: "SSD" }, { value: "SPOIL" }],
  },
];

const radioButtonName = [
  "Other",
  "Meter",
  "SLD",
  "SDD",
  "EDRD",
  "Transducer",
  "Undercarriage",
];
const NewSealAssignTable = () => {
  return (
    <div className="flex flex-col">
      <Table
        role="table"
        radius="none"
        shadow="sm"
        classNames={{ wrapper: "p-0", td: "p-0" }}
        className="h-[300px]  border-persianGreen border-2 mr-12 "
      >
        <TableHeader className=" bg-persianGreen text-white   text-center m-0">
          <TableColumn className="bg-persianGreen text-white  text-center font-bold border-2 border-[#c9c9cb] first:rounded-none">
            Seal Number
          </TableColumn>
          <TableColumn className="bg-persianGreen text-white  text-center border-2 border-[#c9c9cb] font-bold  ">
            Station
          </TableColumn>
          <TableColumn className="bg-persianGreen text-white  text-center border-2 border-[#c9c9cb]   font-bold ">
            Seal Position
          </TableColumn>
          <TableColumn className="bg-persianGreen text-white  text-center border-2 border-[#c9c9cb] last:rounded-none">
            Remove
          </TableColumn>
        </TableHeader>
        <TableBody className=" mt-">
          {tableData.map((tableRow, index) => (
            <TableRow className="mt-0" key={index}>
              <TableCell className=" font-calibri font-bold border-2 border-[#c9c9cb] p-1   ">
                <div className=" border-1 rounded-sm ">
                  {tableRow.sealNumber}
                </div>
              </TableCell>
              <TableCell className=" font-calibri font-bold border-2 border-[#c9c9cb]">
                {tableRow.station}
              </TableCell>
              <TableCell className=" font-calibri font-bold border-2 border-[#c9c9cb]">
                <div className=" flex justify-around">
                  <div className="w-full">
                    <Select
                      id="centreData"
                      data-testid="select-test"
                      radius="none"
                      variant="underlined"
                      size="sm"
                      labelPlacement="outside-left"
                      className="w-[80%] border-0 outline-0 dropdown-custom "
                      classNames={{
                        trigger:
                          " border-0 border-white  after:content-none after:inline after:m-0 after:p-0 after:h-0 after:w-0 after:bg-white after:border-0",
                        value: "font-bold",
                      }}
                    >
                      {tableRow.sealPosition.map((key, index) => (
                        <SelectItem key={key.value}>{key.value}</SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
              </TableCell>
              <TableCell className=" font-calibri font-bold border-2 border-[#c9c9cb]">
                <div className=" flex justify-center">
                  <IconXboxX />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className=" sm:w-[100%] m-4 sm:overflow-x-scroll md:overflow-hidden">
        <div className="sm:flex sm:justify-between sm:flex-wrap sm:gap-0 md:grid md:grid-cols-3 md:place-content-stretch md:gap-2 md:justify-items-start">
          {radioButtonName.map((rbName, index) => (
            <div key={index} className="flex first:mr-1">
              <input type="radio" name="" id="" className=" mr-1" />
              <span className="sm:text-small md:text-medium">{rbName} </span>
            </div>
          ))}
        </div>
      </div>

      <div className="md:flex md:justify-between md:mt-4 sm:flex sm:justify-between sm:mt-5 sm:flex-wrap">
        <div className="md:flex md:justify-between md:ml-5 sm:flex sm:justify-between sm:ml-0 sm:mt-2">
          <span className=" text-center mt-[0.4rem] mr-2">Seal No. </span>
          <div className=" flex justify-center sm:flex-wrap ">
            <input
              type="text"
              className=" border-1 border-[#c9c9cb] p-2 rounded-sm md:h-[34px] align-middle sm:h-[12px] sm:w-[10rem] "
            />
          </div>
        </div>
        <div>
          <Button
            className=" bg-persianGreen text-sm font-bold text-white rounded-sm h-[34px] sm:ml-8 sm:mt-2 "
            radius="none"
          >
            Add
          </Button>
        </div>
        <div>
          <Button
            className=" bg-darkRed text-sm font-bold text-white rounded-sm h-[34px]  sm:mt-2 "
            radius="none"
          >
            Spoil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewSealAssignTable;
