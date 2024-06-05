import { Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React from "react";
import { theme } from "../../common/themes/themeConfig";

function SpecialEventScheduleTable() {
    return (
        <div>
            <div className="ml-1 h-[500px] mt-10">
                <div className="mr-1">
                    <h1>
                        <h5 className="absolute-top  start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                        </h5>
                        <div className="flex mt-[5px] w-1/2 ">
                            <div className="flex flex-row justify-evenly ">
                                <div className=" text-left font-bold ml-6 text-small mt-2">Lane</div>
                                < div className="ml-[50px] w-[120px] ">
                                    <Select labelPlacement="outside-left" radius="none" size="sm" variant="bordered">
                                        <SelectItem key="all"> All</SelectItem>
                                    </Select></div>
                            </div>
                            <div className=" flex flex-row justify-evenly ml-5  mb-1">
                                <div className=" text-left font-bold text-small mt-2 ">  Effective Date</div>
                                < div className="ml-[10px] w-[120px]  ">
                                    <Select labelPlacement="outside-left" radius="none" size="sm" variant="bordered">
                                        <SelectItem key="all">All </SelectItem>
                                    </Select></div>
                            </div>
                        </div>
                        <div>
                            <Table radius="none" shadow="sm" classNames={{ wrapper: "p-1" }} >
                                <TableHeader className={` bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm  text-center font-bold`}>
                                    <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] first:rounded-none w-[75px] text-sm text-center font-bold`}>Lane
                                    </TableColumn>
                                    <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold w-[75px]`}>
                                        Effective
                                    </TableColumn>
                                    <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold w-[200px]`}>
                                        Session Timeslot
                                    </TableColumn>
                                    <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}]  text-sm text-center font-bold w-[80px]`}>
                                        Quota
                                    </TableColumn>
                                    <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold  w-[200px]`}>
                                        Vehicle Class
                                    </TableColumn>
                                    <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] w-[350px] text-sm text-center font-bold `}>
                                        Exam Code
                                    </TableColumn>
                                    <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] last:rounded-none text-sm text-center font-bold  `}>
                                        Active
                                    </TableColumn>
                                </TableHeader>

                                <TableBody>
                                    <TableRow>
                                        <TableCell>   </TableCell>
                                        <TableCell>   </TableCell>
                                        <TableCell>   </TableCell>
                                        <TableCell>   </TableCell>
                                        <TableCell>   </TableCell>
                                        <TableCell>   </TableCell>
                                        <TableCell>   </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    );
}


export default SpecialEventScheduleTable;
