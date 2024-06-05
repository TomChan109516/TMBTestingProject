import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, CheckboxGroup, Checkbox } from "@nextui-org/react";



export default function MorePopup() {
    return (
        <div className="mb-3">
            <Table radius="none" shadow="sm" className="mt-2  pl-[13px] pr-[13px] " classNames={{ wrapper: " border-1 border-greyBorder p-0 " }} >
                <TableHeader className="  bg-[#A0D9C1] text-[#00AF8F] text-sm  text-left font-bold">
                    <TableColumn className=" border-1 border-white bg-[#A0D9C1] text-[#00AF8F]  text-left font-bold first:rounded-none font-[Calibri] text-sm w-[90px]">
                        <CheckboxGroup
                            radius="none"
                            size="sm"
                        //className=""
                        >
                            <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[white]" }}>

                            </Checkbox>
                        </CheckboxGroup>
                    </TableColumn>
                    <TableColumn className=" border-1 border-white bg-[#A0D9C1] text-[#00AF8F]  text-left font-bold  font-[Calibri] text-sm w-[100px]  " >
                        Code
                    </TableColumn>
                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm  font-[Calibri] text-left font-bold last:rounded-none ">
                        Content
                    </TableColumn>

                </TableHeader>
                <TableBody>

                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            0001
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            COF
                        </TableCell>

                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            101
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            COF
                        </TableCell>

                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            157
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Bi-Fuel Emission Checked
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            157
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Vehicle Data
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox >
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            158
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Tapley meter test effecieny %
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            159
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Overall Weight
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            160
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Parking Brake Slop Test
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}> 

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            102
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Driving Test
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }} >

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            103
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Break Test
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}> 

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            104
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Motor Vehicle Certificate of Fitness Expriy Date : DD-MM-YYY
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            105
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            GVW _Kg Excess Weight Permit Requried
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            106
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Overall Height_mm Excess Height Permit Requried
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            107
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Overall Width_mm Excess Width Permit Requried
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            108
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Oervall Length_mm Excess Length Permit Requried
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            130
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            This Vehicle should be rechecked within 14 days
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            112
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            TD 22 ATTACHED
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            101
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Vehicle Examnation
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}> 

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            114
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Black Box Checked
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            117
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Change Seating Capacity from _to_
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            118
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Test Drive -1
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            120
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            PRP not available
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            124
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            TD559 ATTACHED
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            125
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Restriction  for use on Roads with speed limit not Exceeding 50 km/h
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            126
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Restored  Written Off Vehicle Dates
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }} >

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            127
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            COF
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            128
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            COF
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            155
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            Model Code XXXXXXXXXXXXXXXX
                        </TableCell>
                    </TableRow>
                    <TableRow
                    >
                        <TableCell className="border-1 border-greyBorder bg-white text-sm font-[Calibri] text-left ">
                            <CheckboxGroup
                                isDisabled={false}
                                radius="none"
                                size="sm"
                            //className=""
                            >
                                <Checkbox  classNames={{ wrapper: "after:bg-[#00af8f] before:bg-[#e5e7eb]" }}>

                                </Checkbox>
                            </CheckboxGroup>
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm text-left ">
                            156
                        </TableCell>
                        <TableCell className="border-1 border-greyBorder bg-white text-sm  text-left ">
                            COF
                        </TableCell>

                    </TableRow>


                </TableBody>
            </Table>
        </div>
    )
}