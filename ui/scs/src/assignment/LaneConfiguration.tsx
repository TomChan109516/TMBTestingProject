
import { Accordion, AccordionItem, Button, Checkbox, Select, SelectItem, Switch } from "@nextui-org/react";
import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import ConfirmDrawPopup from "./ConfirmDrawPopup";
import { useNavigate } from "react-router-dom";



function LaneConfiguration() {
    const navigate = useNavigate();
    const [showConfirmDrawPopup, setShowConfirmDrawPopup] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleConfirmDrawpopup = () => {
        setShowConfirmDrawPopup(true);
    };
    return (
        <div className="w-[100%]">
            <div className="flex">
                <div className="flex-initial text-[#0a923d] p-[3px] ml-[15px] font-bold text-sm">
                    Assignment {">"} Lane Configuration
                </div>
            </div>
            <div className=" w-[98%] h-10  bg-[#e3e5ea] ml-[10px]  border-[#d1d2d6] border-[1px] solid rounded-sm">
                <div className="mr-[90%] mt-[5px] text-sm pt-1  text-[#82e84c]"
                >
                    Session:WD
                </div>
            </div>
            <div className="w-[100%] mt-[5px] pl-[10px] pr-[10px] ">
                <Accordion   >
                    <AccordionItem key="3" title="Reserve Personnel Statistics" className="text-xs" classNames={{ title: 'text-xs font-bold text-[#0a923d]' }}>
                        <div className="grid grid-cols-4 gap-2 w-[20%]">
                            <div className="flex flex-row ">
                                <div className=" text-[#0a923d] text-sm">MVE :</div>
                                <div className="ml-1  text-[#0a923d] text-sm font-bold" >8</div>
                            </div>
                            <div className="flex flex-row ">
                                <div className=" text-[#0a923d]  text-sm" >WD :</div>
                                <div className="ml-1  text-[#0a923d] text-sm font-bold " >8</div>
                            </div>
                            <div className="flex flex-row ">
                                <div className=" text-[#0a923d]  text-sm">AM :</div>
                                <div className="ml-1  text-[#0a923d] text-sm font-bold" >0</div>
                            </div>
                            <div className="flex flex-row ">
                                <div className=" text-[#0a923d]  text-sm" >PM :</div>
                                <div className="ml-1  text-[#0a923d] text-sm font-bold" >0</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 w-[20%]">
                            <div className="flex flex-row ">
                                <div className=" text-[#0a923d] text-sm">VT :</div>
                                <div className="ml-1  text-[#0a923d] text-sm font-bold" >6</div>
                            </div>
                            <div className="flex flex-row ">
                                <div className=" text-[#0a923d]  text-sm" >WD :</div>
                                <div className="ml-1  text-[#0a923d] text-sm font-bold " >6</div>
                            </div>
                            <div className="flex flex-row ">
                                <div className=" text-[#0a923d]  text-sm">AM :</div>
                                <div className="ml-1  text-[#0a923d] text-sm font-bold" >0</div>
                            </div>
                            <div className="flex flex-row ">
                                <div className=" text-[#0a923d]  text-sm" >PM :</div>
                                <div className="ml-1  text-[#0a923d] text-sm font-bold" >0</div>
                            </div>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="w-[100%] mt-[5px] pl-[10px] pr-[10px] h[400px]-">
                <Table radius="none" className="bg-white p-[3px]" shadow="sm" classNames={{ table: "min-h-[200px] w-[99%]", }} >
                    <TableHeader  >
                        <TableColumn className=" text-[#0a923d]bg-[#FFFFFF] bg-[#FFFFFF] text-[#0a923d] pt-[20px] " > Station  </TableColumn>
                        <TableColumn className=" text-[#0a923d] bg-[#FFFFFF] p-[3px]">  Lane </TableColumn>
                        < TableColumn className=" text-[#111111] bg-[#FFFFFF]  ">
                            11
                            <Switch color="success" size="sm" classNames={{ wrapper: "p-1 h-5 overflow-visible  bg-[red]" }} />
                        </TableColumn>

                        <TableColumn className=" text-[#111111] bg-[#FFFFFF] p-[3px]">
                            12
                            <Switch color="success" size="sm" classNames={{ wrapper: "p-1 h-5 overflow-visible bg-[red]", }}
                            />
                        </TableColumn>
                        <TableColumn className=" text-[#111111] bg-[#FFFFFF]  p-[3px]">
                            13
                            <Switch color="success" size="sm" classNames={{ wrapper: "p-1 h-5 overflow-visible  bg-[red] ", }} />
                        </TableColumn>
                        <TableColumn className=" text-[#111111] bg-[#FFFFFF] p-[3px]">
                            14
                            <Switch color="success" size="sm" classNames={{ wrapper: "p-1 h-5 overflow-visible  bg-[red]", }} />
                        </TableColumn>
                        <TableColumn className=" text-[#111111] bg-[#FFFFFF] ">
                            15
                            <Switch color="success" size="sm" classNames={{ wrapper: "p-1 h-5 overflow-visible  bg-[red]", }} />
                        </TableColumn>
                        <TableColumn className=" text-[#111111] bg-[#FFFFFF] ">
                            16
                            <Switch color="success" size="sm" classNames={{ wrapper: "p-1 h-5 overflow-visible  bg-[red]", }} />
                        </TableColumn>
                        <TableColumn className=" text-[#111111] bg-[#FFFFFF]  ">
                            17
                            <Switch color="success" size="sm" classNames={{ wrapper: "p-1 h-5 overflow-visible  bg-[red]", }} />
                        </TableColumn>
                        <TableColumn className=" text-[#111111] bg-[#FFFFFF] ">
                            18
                            <Switch color="success" size="sm" classNames={{ rapper: "p-1 h-5 overflow-visible  bg-[red]" }} />
                        </TableColumn>
                        <TableColumn className=" text-[#111111] bg-[#FFFFFF]  ">
                            19
                            <Switch color="success" size="sm" classNames={{ wrapper: "p-1 h-5 ml-2  overflow-visible  bg-[red]", }} />
                        </TableColumn>
                        <TableColumn className=" text-[#111111] bg-[#FFFFFF]  ">
                            20
                            <Switch color="success" size="sm" classNames={{ wrapper: "p-1 h-5 overflow-visible  bg-[red] " }} />
                        </TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1" className="mt-2 p-[3px]">
                            <TableCell className="h-10 text-sm font-bold p-[3px]"> M.V.E</TableCell>
                            <TableCell className="h-10  p-[3px]"></TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    labelId="demo-simple-select-standard-label"
                                    id="vehicleClass"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "

                                >
                                    <SelectItem>
                                        1
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem >
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    defaultSelectedKeys={"all"}
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                    className="w-[90px] bg-white rounded-sm "
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    defaultSelectedKeys={"all"}
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    defaultSelectedKeys={"all"}
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    defaultSelectedKeys={"all"}
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    defaultSelectedKeys={"all"}
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    defaultSelectedKeys={"all"}
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                        </TableRow>
                        <TableRow key="2" className="">
                            <TableCell className="h-10  text-sm font-bold"> A</TableCell>
                            <TableCell className="h-10  p-[3px]"></TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "

                                >
                                    <SelectItem>
                                        1
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    defaultSelectedKeys={"all"}
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>

                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    defaultSelectedKeys={"all"}
                                    aria-label="center"

                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    defaultSelectedKeys={"all"}
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10 ">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell className="h-10  text-sm font-bold"> B</TableCell>
                            <TableCell className="h-10  p-[3px]">
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                >
                                    <SelectItem>
                                        1
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                        </TableRow>
                        <TableRow key="4">
                            <TableCell className="h-10  text-sm font-bold"> C</TableCell>
                            <TableCell className="h-10  p-[3px]"></TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "

                                >
                                    <SelectItem>
                                        1
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    defaultSelectedKeys={"all"}
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>

                                    </SelectItem>
                                </Select>
                            </TableCell>
                        </TableRow>
                        <TableRow key="5" >
                            <TableCell className="h-10  text-sm font-bold"> D</TableCell>
                            <TableCell className="h-10  p-[3px]"></TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    defaultSelectedKeys={"all"}
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "


                                >
                                    <SelectItem>
                                        1
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    defaultSelectedKeys={"all"}
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    defaultSelectedKeys={"all"}
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    defaultSelectedKeys={"all"}
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    defaultSelectedKeys={"all"}
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    defaultSelectedKeys={"all"}
                                    aria-label="center"
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell className="h-10  p-[3px]">
                                <Select
                                    labelPlacement="outside-left"
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    defaultSelectedKeys={"all"}
                                    variant="bordered"
                                    className="w-[90px] bg-white rounded-sm "
                                    classNames={{ trigger: "bg-[#e3e5ea]" }}
                                >
                                    <SelectItem>
                                        0
                                    </SelectItem>
                                </Select>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                {isOpen ? (
                    <div className=" w-[100%] h-[100px] bg-[#e3e5ea] ml-[px]">
                        <div className="grid grid-cols-4 gap-4 w-[60%] text-center">
                            <div className="   mt-5 ml-5">
                                <div className=" text-[#111111] text-sm font-bold">MVE</div>
                                <div className="ml-1  text-[#0a923d] text-sm font-bold" >
                                    <Checkbox
                                        defaultSelected
                                        classNames={{ wrapper: "after:bg-[#82e84c]  " }}
                                        size="md"
                                        radius="none" />

                                </div>
                            </div>
                            <div className="  mt-5 ml-5">
                                <div className=" text-[#111111]  text-sm font-bold" >VT</div>
                                <div className="ml-1  text-[#00AF8F] text-sm font-bold " >
                                    <Checkbox
                                        defaultSelected
                                        classNames={{ wrapper: "after:bg-[#82e84c]  " }}
                                        size="md"
                                        radius="none" />
                                </div>
                            </div>
                            <div className=" flex flex-row  mt-8 ml-5">
                                <div className=" text-[#111111]  text-sm font-bold">Sdu :</div>
                                <div className="ml-1  text-[#111111] text-sm font-bold" >9</div>
                            </div>
                            <div className=" flex flex-row  mt-8 ml-5">
                                <div className=" text-[#00AF8F]  text-[25px] font-bold">true</div>
                                                           </div>

                        </div>
                    </div>
                ) : (
                    ""
                )}

                <div className="flex justify-between mt-[10px]">
                    <div className="justify start ml-2  mb-3">
                        <Button
                            className="bg-[#ffffff] rounded-sm font-bold"
                            variant="bordered"
                            type="submit"
                            size="sm"
                            onClick={() => navigate("/staffSchedule")}
                        >
                            Back
                        </Button>
                    </div>
                    <div className=" justify-end">
                        <Button
                            className="bg-[#ffffff] rounded-sm mr-2 font-bold"
                            variant="bordered"
                            type="submit"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Check
                        </Button>
                        <Button
                            type="button"
                            className="bg-[#00AF8F] text-[#FFFFFF] rounded-sm mr-2 "
                            size="sm"
                            onPress={handleConfirmDrawpopup}
                        >
                            Draw
                        </Button>
                    </div>
                </div>
            </div>
            {showConfirmDrawPopup && (
                <ConfirmDrawPopup
                    showConfirmDrawPopup={showConfirmDrawPopup}
                    setShowConfirmDrawPopup={setShowConfirmDrawPopup}
                />
            )}
        </div>
    );
}

export default LaneConfiguration;
