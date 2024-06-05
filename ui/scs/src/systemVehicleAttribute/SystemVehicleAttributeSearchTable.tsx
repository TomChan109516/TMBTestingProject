import {
    Input,
    Pagination,
    Select,
    SelectItem,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";
import { CircleX, Edit } from "tabler-icons-react";
import React, { useState } from "react";
import { theme } from "../common/themes/themeConfig";

import SystemVehicleAttributeInfoPopUp from "./SystemVehicleAttributrInfoPopUp";
import DeleteSystemVehicleAttributePopUp from "./DeleteSystemVehicleAttributePopUp";
// import DeleteVehicleAttributePopUp from "./DeleteVehicleAttributePopUp";

export default function SystemVehicleAttributeSearchTable() {

    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const [showVehicleAttributeInfoPopUp, setVehicleAttributeInfoPopUp] = useState(false);
    const confirmDeleteAppointment = () => {
        setShowConfirmPopup(true);
    };
    const VehicleInfoPopUp = () => {
        setVehicleAttributeInfoPopUp(true);
    };
    return (
        <>
            <div>
                <div className=" ml-2 mr-2 ">
                    <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
                        <TableHeader className={` bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] w-[35%] text-sm  text-center font-bold `}>
                            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] w-[35%] text-sm text-left font-bold`}>
                                Attribute Name
                            </TableColumn>
                            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}]  w-[25%]  text-sm text-left font-bold`}>
                                Attribute Message
                            </TableColumn>
                            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}]    text-sm text-left font-bold`}>
                                Attributr Des.
                            </TableColumn>
                            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}]   text-sm text-left font-bold`}>
                                LastUpdateTime
                            </TableColumn>
                            <TableColumn className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}]  text-sm text-left font-bold`}>
                                Action
                            </TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow className="text-left" >
                                <TableCell>Test Dyno</TableCell>
                                <TableCell>Test Dyno</TableCell>
                                <TableCell>Test Dyno</TableCell>
                                <TableCell>11/11</TableCell>
                                <TableCell>
                                    <div className="flex">
                                        <CircleX
                                            size={25}
                                            color="red"
                                            className=" rounded-sm ml-2 mt-[8px]"
                                            onClick={confirmDeleteAppointment}
                                        />
                                        <Edit
                                            size="20"
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                                            onClick={VehicleInfoPopUp}
                                        />

                                    </div>
                                </TableCell>
                            </TableRow>
                            <TableRow className="text-left" >
                                <TableCell>Test Dyno</TableCell>
                                <TableCell>Test Dyno</TableCell>
                                <TableCell>Test Dyno</TableCell>
                                <TableCell>0/0</TableCell>
                                <TableCell className="w-[10%]">
                                    <div className="flex">
                                        <CircleX
                                            size={25}
                                            color="red"
                                            className=" rounded-sm ml-2 mt-[8px]"
                                        />
                                        <Edit
                                            size="20"
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm ml-2 mt-[10px]"
                                        />
                                    </div>
                                </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </div >

                <div className="flex flex-row mt-2 ">
                    <div className="ml-1">Total-15</div>
                    <div className="ml-2 w-[80px] ">
                        <Select
                            labelPlacement="outside-left"
                            radius="none"
                            size="sm"
                            name="center"
                            aria-label="center"
                            variant="bordered"
                        >
                            <SelectItem key="1">10/page </SelectItem>
                        </Select></div>

                    <div className="ml-2">  <Pagination isCompact showControls total={2} classNames={{
                        wrapper: "gap-0 overflow-visible h-8  rounded-none border border-divider",
                        item: "w-8 h-8 text-small rounded-none bg-transparent ",
                        prev: 'rounded-none',
                        next: 'rounded-none',
                        cursor:
                            "bg-gradient-to-b shadow-lg from-[#00AF8F] to-[#00AF8F] rounded-none  text-white font-bold h-7 ",
                    }} initialPage={1} /></div>
                    <div className="w-[60px] ml-2">  Go to </div>
                    <div className="w-10"><Input className="flex-row" size="sm" radius="none" variant="bordered" /></div>
                </div>
                <div className="float-left mt-7"> </div>
            </div>
            {showConfirmPopup && (
                <DeleteSystemVehicleAttributePopUp
                    showConfirmPopup={showConfirmPopup}
                    setShowConfirmPopup={setShowConfirmPopup}
                    title="Delete Appointment"
                />
            )}
            {showVehicleAttributeInfoPopUp && (
                <SystemVehicleAttributeInfoPopUp
                    showVehicleAttributeInfoPopUp={showVehicleAttributeInfoPopUp}
                    setVehicleAttributeInfoPopUp={setVehicleAttributeInfoPopUp}

                />
            )}
        </>
    );
}

