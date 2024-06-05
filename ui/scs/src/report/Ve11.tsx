import {
  Button,
  Checkbox,
  Input,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { useState } from "react";
import { theme } from "../common/themes/themeConfig";

function Ve11(){
  return (
    <div>
      <div className="ml-1 h-[1000px]">
        <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-md">
          Ve11 Report
        </div>
        <div className="mr-1 h-[500px]">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Ve11 Report
            </h5>
            <div className="font-bold font-[Calibri]">
              Transport Department - Vehicle Examination Centre
            </div>
            <div className="font-[Calibri]"> VE11 Notifications</div>
            <div className="grid mt-[15px] ml-4 ">
              <div className="grid grid-rows-3 h-[500 px] grid-flow-col ">
                <div className="flex flex-row items-center ">
                  <div className="w-[14%] text-left  font-bold font-[Calibri]">
                    Report Language
                  </div>
                  <div className="grid gap-2 text-[12px] font-[Calibri] -ml-6 text-start mt-[5px]">
                    <RadioGroup
                      orientation="horizontal"
                      // value={selected}
                      // onValueChange={setSelected}
                      // color="success"
                      size="sm"
                      className="text-xs"
                      // value={selectedColor}
                      // onValueChange={setSelectedCol
                    >
                      {/* {colors.map((color)=>( */}
                      <Radio
                        size="sm"
                        name="radio"
                        defaultChecked
                        // key={color}
                        // color={color}
                        // value={color}
                        className="text-xs"
                        classNames={{
                          wrapper:
                            "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                          control: "bg-white",
                          base: "border-[#00AF8F]",
                        }}
                      >
                        {/* color={selectedColor} */}
                        English
                      </Radio>
                      {/* ))} */}
                      <div className="grid gap-1   ">
                        <Radio
                          size="sm"
                          name="radio"
                          value="chinese"
                          defaultChecked
                          className="text-xs"
                          classNames={{
                            wrapper:
                              "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                            control: "bg-white",
                            base: "border-[#00AF8F]",
                          }}
                        >
                          Chinese
                        </Radio>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className=" flex flex-row">
                  <div className="w-[14%] text-left font-bold font-[Calibri]">
                    {" "}
                    Identify Type
                  </div>
                  <div className="grid gap-2 text-[12px] font-[Calibri]  text-start -ml-6 ">
                    <RadioGroup
                      orientation="horizontal"
                      // value={selected}
                      // onValueChange={setSelected}
                      size="sm"
                      className="text-sm"
                    >
                      <Radio
                        size="sm"
                        name="radio"
                        value="reg_mark"
                        defaultChecked
                        className="text-xs"
                        // onClick={handleRadioBtnText}
                        // style={{ backgroundColor: RadioBtnText ? "green" : "" }}
                        // disabled={!RadioBtnText}
                        classNames={{
                          wrapper:
                            "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                          control: "bg-white",
                          base: "border-[#00AF8F]",
                        }}
                      >
                        <div>Registration Mark</div>
                      </Radio>
                      <div className="grid gap-1   ">
                        <Radio
                          size="sm"
                          name="radio"
                          value="sr.no"
                          defaultChecked
                          className="text-xs"
                          classNames={{
                            wrapper:
                              "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                            control: "bg-white",
                            base: "border-[#00AF8F]",
                          }}
                        >
                          Chassis or Seial No.
                        </Radio>
                      </div>
                      <div className="grid  ">
                        <Radio
                          size="sm"
                          name="id"
                          value=""
                          defaultChecked
                          className="text-xs"
                          classNames={{
                            wrapper:
                              "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                            control: "bg-white",
                            base: "border-[#00AF8F]",
                          }}
                        >
                          Identification Mark
                        </Radio>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className=" flex flex-row">
                  <div className="w-[10%] text-left font-bold font-[Calibri]">
                    Vehicle Identity
                  </div>
                  <div className="w-[60%] ml-6">
                    <Input
                      id="standard-basic"
                      name="chassisno"
                      radius="none"
                      variant="bordered"
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`text-left bg-[${theme?.colors?.persianGreen}] text-white p-2 mt-2 ml-2 mr-2 font-[Calibri]`}
            >
              Option Item Description
            </div>
            <Table
              radius="none"
              hideHeader
              aria-label="Example static collection table "
              className="rounded-none ml-2 mr-4"
            >
              <TableHeader>
                <TableColumn> </TableColumn>
                <TableColumn> </TableColumn>
              </TableHeader>
              <TableBody>
                {/* data.map(()) */}
                <TableRow key="1">
                  <TableCell className="bg-[#ccf3ec]">
                    <Checkbox
                      size="sm"
                      radius="none"
                      classNames={{
                        wrapper: `after:bg-[#00AF8F] rounded-sm ]`,
                      }}
                      defaultSelected
                    >
                      {" "}
                    </Checkbox>
                  </TableCell>
                  <TableCell className="text-start bg-[#ccf3ec] font-[Calibri] ">
                    The vehicle was not submitted for examination by the time
                    appointed for the examination.
                  </TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell className="w-[5px]">
                    <Checkbox
                      size="sm"
                      radius="none"
                      classNames={{
                        wrapper: `after:bg-[#00AF8F] rounded-sm ]`,
                      }}
                      defaultSelected
                    >
                      {" "}
                    </Checkbox>
                  </TableCell>
                  <TableCell className="text-start font-[Calibri] ">
                    The applicant did not produce, after having been requested
                    to do so the registration book or the other evidenceas to
                    the date of first registration number and chassis number of
                    the vehicle.
                  </TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell className="w-[5px] bg-[#ccf3ec]">
                    <Checkbox
                      size="sm"
                      radius="none"
                      classNames={{
                        wrapper: `after:bg-[#00AF8F] rounded-sm ]`,
                      }}
                      defaultSelected
                    >
                      {" "}
                    </Checkbox>
                  </TableCell>
                  <TableCell className="text-start bg-[#ccf3ec] font-[Calibri] ">
                    The particular relating to the vehicle as shown on the
                    appointment letter were found to be substantially incorrect.
                  </TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell className="w-[5px]">
                    <Checkbox
                      size="sm"
                      radius="none"
                      classNames={{
                        wrapper: `after:bg-[#00AF8F] rounded-sm ]`,
                      }}
                      defaultSelected
                    >
                      {" "}
                    </Checkbox>
                  </TableCell>
                  <TableCell className="text-start font-[Calibri] ">
                    Where the vehicle for examination is a trailer, it was not
                    accompanied by a motor vehicle suitable as its construction
                    and equipment for drawing that trailer.
                  </TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell className="w-[5px] bg-[#ccf3ec]">
                    <Checkbox
                      size="sm"
                      radius="none"
                      classNames={{
                        wrapper: `after:bg-[#00AF8F] rounded-sm ]`,
                      }}
                      defaultSelected
                    >
                      {" "}
                    </Checkbox>
                  </TableCell>
                  <TableCell className="text-start bg-[#ccf3ec] font-[Calibri]">
                    The vehicle was not marked with the chassis or serial number
                    shown in the registration book or that number or mark was
                    not permanently affixed to the chassis or main structure of
                    the vehicle in a conspicuous.And easily accessible position
                    so as be readily legible.
                  </TableCell>
                </TableRow>
                <TableRow key="6">
                  <TableCell className="w-[5px]">
                    <Checkbox
                      size="sm"
                      radius="none"
                      classNames={{
                        wrapper: `after:bg-[#00AF8F] rounded-sm ]`,
                      }}
                      defaultSelected
                    >
                      {" "}
                    </Checkbox>
                  </TableCell>
                  <TableCell className="text-start font-[Calibri] ">
                    The vehicle or a part of the vehicle or its equipment, or
                    where the vehicle is a motor vehicle accompanied by a
                    trailer or its equipment, was in such dirty, dangerous or
                    unprepared condition as to make it unreasonable for the
                    examination to be carried out.
                  </TableCell>
                </TableRow>
                <TableRow key="7">
                  <TableCell className="w-[5px] bg-[#ccf3ec]">
                    <Checkbox
                      size="sm"
                      radius="none"
                      classNames={{
                        wrapper: `after:bg-[#00AF8F] rounded-sm ]`,
                      }}
                      defaultSelected
                    >
                      {" "}
                    </Checkbox>
                  </TableCell>
                  <TableCell className="text-start bg-[#ccf3ec] font-[Calibri] ">
                    The vehicle, being a vehicle used for carrying
                    toxic,corrosive or inflammable loads, had not been properly
                    cleaned or otherwise rendered safe.
                  </TableCell>
                </TableRow>
                <TableRow key="8">
                  <TableCell className="w-[5px] ">
                    <Checkbox
                      size="sm"
                      radius="none"
                      classNames={{
                        wrapper: `after:bg-[#00AF8F] rounded-sm ]`,
                      }}
                      defaultSelected
                    >
                      {" "}
                    </Checkbox>
                  </TableCell>
                  <TableCell className="text-start font-[Calibri]">
                    The vehicle or, where the vehicle for examination a trailer,
                    the motor vehicle accompanying the trailer was not provided
                    with sufficient fuel and oil to enable it to be driven to
                    the extent necessary for the purposes of carrying out the
                    examination.
                  </TableCell>
                </TableRow>
                <TableRow key="9">
                  <TableCell className="w-[5px] bg-[#ccf3ec]">
                    {" "}
                    <Checkbox
                      size="sm"
                      radius="none"
                      classNames={{
                        wrapper: `after:bg-[#00AF8F] rounded-sm ]`,
                      }}
                      defaultSelected
                    >
                      {" "}
                    </Checkbox>{" "}
                  </TableCell>
                  <TableCell className="text-start bg-[#ccf3ec] font-[Calibri] ">
                    It was not possible to complete the examination due to a
                    failure of a part of the vehicle or a part of any motor
                    vehicle or trailer accompanying the vehicle which rendered
                    the vehicle incapable of being moved in safety under its own
                    power or, where the vehicle is a trailer, under the powerof
                    the accompanying motor vehicle .
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className=" text-end">
              <Button
                size="sm"
                radius="none"
                className="text-white bg-[#00AF8F] mr-2 w-[50px] h-10 font-medium rounded-sm"
              >
                Generate
              </Button>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Ve11;
