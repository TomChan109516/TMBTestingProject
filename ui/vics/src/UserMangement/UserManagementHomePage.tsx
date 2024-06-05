import React, { useState } from "react";

import {
    Table,
    TableRow,
    TableCell,
    TableBody,
    TableHeader,
    TableColumn,
    Select,
    SelectItem,
    Button,
    Switch,
    Input,
    Pagination,
    cn,
} from "@nextui-org/react";
import { Settings } from "tabler-icons-react";
import ReactivateUserRolePopup from "./ReactivateUserRolePopup";
import DisableUserRolePopup from "./DisableUserRolePopup";
const uservalidityPeriodData = [
    {
        id: "1",
        rolecode: "Assist Manager",
        rolename: "VT",
        role: "AM",
        center: "TY1",
    },
    {
        id: "2",
        rolecode: "Assist Manager",
        rolename: "VT",
        role: "AM",
        center: "TY1",
    },
    {
        id: "3",
        rolecode: "Assist Manager",
        rolename: "VT",
        role: "AM",
        center: "TY1",
    },
    {
        id: "4",
        rolecode: "Assist Manager",
        rolename: "VT",
        role: "AM",
        center: "TY1",
    },
    {
        id: "5",
        rolecode: "Assist Manager",
        rolename: "VT",
        role: "AM",
        center: "TY1",
    },
    {
        id: "6",
        rolecode: "Assist Manager",
        rolename: "VT",
        role: "AM",
        center: "TY1",
    },
];

function UserManagementHomePage() {

    const [pageSize] = useState(15);
    const [page, setPage] = useState(1);
    const [isDisableUserRole, setIsDisableUserRole] = useState(false);
    const [isReactivateUserRole, setIsReactivateUserRole] = useState(false);
    const [isActive, setIsActive] = useState(true);

    const handleSwitchChange = () => {
        if (isActive) {
            setIsDisableUserRole(true);
        } else {
            setIsReactivateUserRole(true);
        }
        setIsActive(!isActive);
    };
    return (
        <div>
            <div className=" mt-3 ">
                <div className="  flex font-calibri font-bold ml-2  justify-start text-[16px]">
                    User Role

                </div>
            </div>

            <div className="flex justify-end pb-[10px]   gap-1 mt-1">
                <Button
                    className={`inline-block ml-2 text-start w-[50px] bg-tropicalrainforest h-8 text-white rounded-sm  `}
                    radius="none"
                >
                    Add
                </Button>
                <div className=" w-[100%] text-right   ">
                    <label className="    mr-5 " htmlFor=" Role Name">
                        Role Name
                    </label>

                    <Input
                        radius="none"
                        labelPlacement="outside-left"
                        size="sm"
                        className=" inline-block md:w-[140px] border-greyBorder  text-white rounded-md mr-5  w-[100%]"
                        variant="bordered"
                    ></Input>
                </div>
                <div>
                    {
                        <Button
                            className={`inline-block mr-3  text-center w-[50px] bg-tropicalrainforest h-8 text-white rounded-sm  `}
                            radius="none"
                        >
                            Search
                        </Button>
                    }
                </div>

            </div>
            <div className="w-full overflow-hidden  ">
                <Table radius="none" shadow="sm" classNames={{ wrapper: "p-2   w-full overflow-hidden" }} >
                    <TableHeader>
                        <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
                            ID
                        </TableColumn>
                        <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold ">
                            Role Code
                        </TableColumn>
                        <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold ">
                            Role Name
                        </TableColumn>
                        <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold ">
                            Role
                        </TableColumn>
                        <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
                            Center
                        </TableColumn>
                        <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
                            Status
                        </TableColumn>
                    </TableHeader>
                    <TableBody>
                        {uservalidityPeriodData.slice((page - 1) * pageSize, page * pageSize).map((details, index) => {
                            return (
                                <TableRow
                                    key={details.id}
                                    data-testId="table-row"
                                    className="even:bg-lightblue odd:bg-fadedwhite font-calibri text-center"
                                >
                                    <TableCell className="font-calibri font-bold text-sm text-center">
                                        {details.id}
                                    </TableCell>
                                    <TableCell className="font-calibri font-bold text-sm text-center">
                                        {details.rolecode}
                                    </TableCell>
                                    <TableCell className="font-calibri font-bold text-sm text-center">
                                        {details.rolename}
                                    </TableCell>
                                    <TableCell className="text-centerfont-calibri font-bold text-sm">
                                        {details.role}
                                    </TableCell>
                                    <TableCell className="text-centerfont-calibri font-bold text-sm">
                                        {details.center}
                                    </TableCell>
                                    <TableCell className=" text-center font-calibri text-sm">
                                        <div className="flex justify-center px-4">
                                            <Switch
                                                name="switch"
                                                data-testId={`switch_element_${index}`}
                                                size="sm"
                                                placeholder="Active"
                                                onChange={
                                                    handleSwitchChange
                                                }
                                                startContent={
                                                    <div className="flex justify-center items-center ">
                                                        Active
                                                    </div>
                                                }
                                                endContent={
                                                    <div className="flex justify-center items-center ">
                                                        Disable
                                                    </div>
                                                }
                                                classNames={{
                                                    wrapper:
                                                        "h-[24px] bg-limeGreen overflow-visible   group-data-[selected=true]:bg-persianGreen w-[80px] ",
                                                    thumb: cn(
                                                        "w-5 h-5 shadow-md",
                                                        "group-data-[hover=true]:border-primary",
                                                        "group-data-[selected=true]:ml-12",
                                                        "group-data-[pressed=true]:w-7",
                                                        "group-data-[selected]:group-data-[pressed]:ml-4"
                                                    ),
                                                }}
                                                defaultSelected
                                            />
                                            <Settings
                                                size={22}
                                                color="black"
                                                className="rounded-sm mt-[2px]"
                                            />
                                        </div>

                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>

                </Table>
                
                <div className="flex justify-between mt-[10px]">
                    <div className=" flex flex-row ml-2  ">
                        <div className=" text-sm mt-2 font-bold font-calibri  ">
                            Showing 1 to {uservalidityPeriodData.length} of 18 rows
                        </div>
                        <div className="ml-2 w-[70px] mt-1  ">
                            <Select
                                labelPlacement="outside-left"
                                radius="none"
                                size="sm"
                                name="page"
                                variant="bordered"
                            >
                                <SelectItem key="6" value="6">
                                    6{" "}
                                </SelectItem>
                                <SelectItem key="12" value="12">
                                    12{" "}
                                </SelectItem>
                                <SelectItem key="18" value="18">
                                    18{" "}
                                </SelectItem>
                            </Select>
                        </div>
                        <span className="  inline-flex ml-1 mt-2 text-sm font-bold font-calibri">
                            rows per page
                        </span>
                    </div>
                    <div className=" justify-end mt-2">
                        <Pagination
                            isCompact
                            showControls
                            total={3}
                            initialPage={1}
                            classNames={{
                                wrapper:
                                    "gap-0 overflow-visible h-8  rounded-none border-[black]",
                                item: "w-8 h-8 text-[12px] rounded-none text-[black] font-bold",
                                prev: "h-8 rounded-none",
                                next: " h-8 rounded-none",
                                cursor:
                                    "bg-gradient-to-b shadow-lg from-persianGreen to-persianGreen rounded-none  text-white font-bold h-8 border-[black]",
                            }}
                        />
                    </div>
                </div>

            </div>
            {isDisableUserRole && (
                <DisableUserRolePopup setIsDisableUserRole={setIsDisableUserRole} />
            )}
            {isReactivateUserRole && (
                <ReactivateUserRolePopup setIsReactivateUserRole={setIsReactivateUserRole} />
            )}
        </div>
    );
}

export default UserManagementHomePage;
