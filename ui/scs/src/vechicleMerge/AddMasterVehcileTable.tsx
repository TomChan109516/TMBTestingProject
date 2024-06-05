import React from "react";
import { Button, RadioGroup, Radio, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { Search } from "tabler-icons-react";





export default function AddMasterVehicleTable() {
    return (
        <>
            <div className="mt-[10px]">
                <p>1 recoders  found</p>
                <div className="text-left bg-[#007f62] text-white p-1" >Vehicle</div>
                <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }} >
                    <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F]  text-[11px]    text-center   text-[11px] font-bold">
                        <TableColumn className=" first:rounded-sm bg-[#A0D9C1] text-[#00AF8F]  text-[11px]   text-center   text-[11px] font-bold border-1 border-white">
                            <RadioGroup>
                                <Radio
                                    name="selectRadiobox"
                                    value="someValue"
                                    size="sm"
                                />
                            </RadioGroup>
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-[11px]   text-center   text-[11px] font-bold border-1 border-white">
                            Class
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-[11px]   text-center   text-[11px] font-bold border-1 border-white">
                            Vehicle ID
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-[11px]   text-center   text-[11px] font-bold border-1 border-white">
                            Reg.Mark
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-[11px]   text-center   text-[11px] font-bold border-1 border-white">
                            Chassis No
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-[11px]   text-center   text-[11px] font-bold border-1 border-white">
                            Mark
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-[11px]   text-center   text-[11px] font-bold border-1 border-white">
                            C&E NO
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-[11px]   text-center   text-[11px] font-bold border-1 border-white">
                            Doc.No
                        </TableColumn>
                        <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-[11px]   text-center   text-[11px] font-bold border-1 border-white">
                            T.A NO
                        </TableColumn>
                        <TableColumn className="  last:rounded-sm bg-[#A0D9C1] text-[#00AF8F]  text-[11px]   text-center   text-[11px] font-bold border-1 border-white" children={undefined}>
                        </TableColumn>

                    </TableHeader>
                    <TableBody>

                        <TableRow>
                        <TableCell className="border-1  border-greyBorder p-[12px]  text-center">
                            <RadioGroup className=" text-center">
                            <Radio
                            name="selectRadiobox"
                            value="someValue"
                            size="sm"
                            className=""
                           
                           />
                           </RadioGroup></TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]   text-center   text-[11px]  ">
                                001
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]   text-center   text-[11px] ">
                                {""}
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                FU0726                        </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                ABCD12346                        </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                TO-TOYOTA
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                {""}
                            </TableCell>
                            <TableCell className="border-1  border-greyBorder p-[5px]  text-center  text-[11px]">
                                <Search
                                    size={18}
                                    color="white"
                                    className="bg-[#00AF8F] rounded-sm mt-[10px] ml-2"
                                                                />

                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className="flex justify-end pb-[10px]  font-bold gap-4 m-[5px] ">
                    <Button
                        type="submit"
                        className="bg-[#FFFFFF]"
                        size="sm"
                        radius="sm"
                        variant="bordered"

                    >

                        Cancle
                    </Button>

                    <Button
                        type="submit"
                        className="bg-[#00AF8F] text-[#FFFFFF]"
                        size="sm"
                        radius="sm"
                        variant="bordered"

                    >
                        ADD Vehicles
                    </Button>
                </div>        </div>

        </>
    )
}