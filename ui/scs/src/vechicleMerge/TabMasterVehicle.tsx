import React from "react";
import { Button, Input, Radio, RadioGroup, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs } from "@nextui-org/react";
import AddMasterVehicleTable from "./AddMasterVehcileTable";
import { Search } from "tabler-icons-react";
import CurrentVehicleMembersTable from "./CurrentVehicleMembersTable";


export default function TabMasterVehicle() {

    return (
        <div className="flex w-full flex-col mt-[30px]" >
            <Tabs
                aria-label="Tabs colors"
               
                classNames={{
                    tabContent:
                        " group-data-[selected=true]:bg-[#007f62] group-data-[selected=true]:text-white text-white  rounded-xl",
                    tab: " bg-[grey]   h-6",
                    cursor: "group-data-[selected=true]:bg-[#007f62]",
                    tabList:"group-data-[selected=true]:bg-[#00AF8F]   group-data-[selected=true]:outline-none "
                }}
                >
                <Tab key="Link Detail" title="Link Details " className="text-[12px]">

                    <div>
                        <div className="ml-1">
                            <div className="mt-[7px] ">
                                <h1>
                                    <h5 className="absolute -top  mt-2 start-3 pl-[10px] pr-[10px]text-[11px] /[13px] text-[#00AF8F]">
                                        Links Details
                                    </h5>
                                    <div className="grid grid-cols-2  mt-[15px] mb-2">
                                        <div className="flex flex-row justify-stretch">
                                            <div className="ml-5 text-[11px]  mt-1 ">Link ID</div>
                                            <div className="w-[50%] ml-[60px] ">
                                                <Input
                                                    id="standard-basic"
                                                    name="chassisno"
                                                    radius="none"
                                                    variant="bordered"
                                                    size="sm"

                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-row flex-shrink mr-5px  ">
                                            <div className="text-sm mt-1 mr-[10px] " > Descripation</div>
                                            <div className="ml-[5px]  w-[80%]">
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
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="text-left bg-[#00AF8F] text-white p-2 " >Current Vehicle Member</div>
                        {/* <ScrollShadow className="w-[300px] h-[400px]">     */}
                        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>

                            <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F]text-[11px]   text-center font-bold">
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-center font-bold border-1 border-white first:rounded-sm">
                                    {""}

                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Type
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Class
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Vehicle ID
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Reg.Mark
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-[11px]  text-center font-bold border-1 border-white">
                                    Chassis No
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Mark
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    C&E NO
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Doc.No
                                </TableColumn>
                                <TableColumn className=" last:rounded-sm bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    T.A NO
                                </TableColumn>

                            </TableHeader>
                            <TableBody>

                                <TableRow>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center">
                                        <Search
                                            size={18}
                                            color="white"
                                            className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                        // onClick={() => { navigate('/SpecialEventAppointments') }}
                                        />

                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center   ">
                                        Vaild
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center   ">
                                        014
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center  ">
                                        002767300
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center ">
                                        { }        </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center ">
                                        AB71R34233Z                      </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center ">
                                        H20
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center ">
                                        {""}
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center ">
                                        {""}
                                    </TableCell>
                                    <TableCell className="border-1  border-greyBorder p-[5px]  text-center ">
                                        {""}
                                    </TableCell>


                                </TableRow>
                            </TableBody>
                        </Table>

                    </div>
                    <div className="mt-[10px]">
                        <p>0 records found</p>
                        <div className="text-left bg-[#007f62] text-white p-1" >Vehicle</div>
                        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }} >
                            <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F]text-[11px]   text-center font-bold">
                                <TableColumn className=" first:rounded-sm bg-[#A0D9C1] text-[#00AF8F]text-[11px]  text-center font-bold border-1 border-white">
                                    <RadioGroup>
                                        <Radio
                                            name="selectRadiobox"
                                            value="someValue"
                                            size="sm"
                                        />
                                    </RadioGroup>
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Type
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Class
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Vehicle ID
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Reg.Mark
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Chassis No
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Mark
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    C&E NO
                                </TableColumn>
                                <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    Doc.No
                                </TableColumn>
                                <TableColumn className=" last:rounded-sm bg-[#A0D9C1] text-[#00AF8F] text-[11px]  text-center font-bold border-1 border-white">
                                    T.A NO
                                </TableColumn>
                            </TableHeader>
                            <TableBody className="box-border h-[100px] w-40 border-2  border-greyBorder " >


                            </TableBody>
                        </Table>


                    </div>
                    <div className="flex justify-end pb-[10px]  font-bold gap-4 m-[5px] ">
                        <Button
                            type="submit"
                            className="bg-[#FFFFFF]  rounded"
                            size="sm"
                            variant="bordered"

                        >

                            Cancle
                        </Button>

                        <Button
                            type="submit"
                            className="bg-[#00AF8F] text-[#FFFFFF]  rounded"
                            size="sm"
                            variant="bordered"

                        >
                            Save
                        </Button>
                    </div>

                </Tab>
                <Tab key="Current Vehicle Members" title="Current Vehicle Members " className="text-[12px]">
                    <CurrentVehicleMembersTable />
                </Tab>
                <Tab key="Add Vehicle Members" title="Add vehicle Members " className="text-[12px]">
                    <AddMasterVehicleTable />
                </Tab>

            </Tabs>


        </div>
    )
}
