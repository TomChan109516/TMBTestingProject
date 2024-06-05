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
import React from "react";

function PastSeparate() {
  return (
    <div>
      <div className="w-[100%] px-2 py-2">
        <div className=" mt-3 ">
          <div className="  flex font-calibri font-bold ml-2  justify-start text-[16px]">
            Pass Separate Tests Result Enquiry
          </div>
        </div>

        <div className="flex justify-end pb-[10px]   gap-1 mt-1">
          <div className=" w-[100%] text-right  font-bold ">
            <label className="   mr-5 " htmlFor="Test Type">
              Appoint No.
            </label>
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className=" inline-block md:w-[140px] border-greyBorder text-white rounded-md mr-3  w-[100%] "
              variant="bordered"
            ></Input>
          </div>
          <Button
            className=" inline-block mr-2 text-center w-[50px] bg-tropicalrainforest h-8  text-white rounded-sm"
            radius="none"
          >
            Search
          </Button>
        </div>
        <div className="  ml-1  mt-2 font-calibri font-bold overflow-y-scroll h-[100%]">
          <h1 className="border- border-dotted border-greyBorder">
            <h5 className="absolute-top mt-1 mb-2 start-3 pl-[10px] pr-[10px] font-bold text-sm font-[Calibri] text-red">
              Axle weigh Bridge On Ground Level
            </h5>

            <div className="flex justify-start items-center mt-2 ml-4 mb-1">
              Result
            </div>
            <div className="p-1">
              <Table
                radius="none"
                shadow="sm"
                classNames={{
                  wrapper: "p-0 w-full overflow-hidden  py-2 pr-2",
                }}
              >
                <TableHeader>
                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold first:rounded-none last:rounded-none border">
                    Axle1
                  </TableColumn>
                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  border">
                    Axle2
                  </TableColumn>
                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  border">
                    Axle3
                  </TableColumn>
                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  border">
                    Axle4
                  </TableColumn>
                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  border">
                    Axle5
                  </TableColumn>
                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border ">
                    Axle6
                  </TableColumn>
                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  border">
                    Axle7
                  </TableColumn>
                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  last:rounded-none border">
                    Axle8
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow className="even:bg-lightblue odd:bg-fadedwhite font-calibri text-center">
                    <TableCell className="font-calibri font-bold text-sm text-center"></TableCell>
                    <TableCell className="font-calibri font-bold text-sm text-center"></TableCell>
                    <TableCell className="font-calibri font-bold text-sm text-center"></TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm"></TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm"></TableCell>

                    <TableCell className="text-centerfont-calibri font-bold text-sm"></TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm"></TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm"></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-start items-center mt-2 ml-4 mb-2">
              Result
            </div>
          </h1>
          <h1 className="border- border-dotted border-greyBorder mt-4">
            <h5 className="absolute-top mt-1 start-3   font-bold text-sm font-[Calibri] text-red">
              Tilting Stability Test
            </h5>

            <div className="flex justify-start items-center mt-2 ml-4 ">
              Result
            </div>
            <div className="flex justify-start items-center  ml-4 ">
              Tilting angle
            </div>
            <div className="flex justify-start items-center  ml-4 ">Remark</div>
          </h1>
          <h1 className="border- border-dotted border-greyBorder mt-4">
            <h5 className="absolute-top mt-1 start-3   font-bold text-sm font-[Calibri] text-red">
              100m break Test Lane
            </h5>

            <div className="flex justify-start items-center mt-2 ml-4 ">
              Result
            </div>
            <div className="flex justify-start items-center  ml-4 ">Remark</div>
          </h1>
          <h1 className="border- border-dotted border-greyBorder mt-4">
            <h5 className="absolute-top mt-1 start-3   font-bold text-sm font-[Calibri] text-red">
              Four Post Hoist
            </h5>

            <div className="flex justify-start items-center mt-2 ml-4 ">
              Result
            </div>
            <div className="flex justify-start items-center  ml-4 ">Remark</div>
          </h1>
          <h1 className="border- border-dotted border-greyBorder mt-4">
            <h5 className="absolute-top mt-1 start-3   font-bold text-sm font-[Calibri] text-red">
              hand brake Test Ramp
            </h5>
            <div className="flex justify-start items-center mt-2 ml-4 ">
              Result
            </div>
            <div className="flex justify-start items-center  ml-4 ">Remark</div>
          </h1>
          <h1 className="border- border-dotted border-greyBorder mt-4">
            <h5 className="absolute-top mt-1 start-3   font-bold text-sm font-[Calibri] text-red">
              Motorcycle Brake Test Ramp
            </h5>

            <div className="flex justify-start items-center mt-2 ml-4 ">
              Result
            </div>
            <div className="flex justify-start items-center  ml-4 ">Remark</div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PastSeparate;
