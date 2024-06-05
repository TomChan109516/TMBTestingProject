import React, { useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, SelectItem, Select, Button, CheckboxGroup, Checkbox } from "@nextui-org/react";
import {Search } from "tabler-icons-react";
import FftsDetailsPopup from "./FftsDetailsPopupTodo"

export default function TestModuleResult() {
    const [isOpen, setIsOpen] = useState(false);
    const handleopen = () => {
        setIsOpen(!isOpen)
    }
    const [showFftsDetailsPopup, setFftsDetailsPopup] = useState(false);

    const handleFftsDetails = () => {
        setFftsDetailsPopup(true);

    };

    return (
        <>
            <div>

                <div className="h-[100%]  mt-3 ">
                    <h1 className="   mr-2 ml-2  ">
                        <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm font-[Calibri] text-[#00AF8F]">
                            Text Module Result
                        </h5>
                        <div className="text-left ml-7 mt-3 mb-3 font-[Calibri] text-[#00AF8F] text-sm cursor-pointer" onClick={handleopen}>
                            Click to Show/hide Test Module
                        </div>
                        {isOpen ? (<div>
                            <Table radius="none" shadow="sm" className="mt-2  pl-[13px] pr-[13px] " classNames={{ wrapper: " border-1 border-greyBorder p-0 " }} >
                                <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-left font-bold">
                                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-left font-bold first:rounded-none font-[Calibri] text-sm ">Test Module</TableColumn>
                                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F]  text-left font-bold  font-[Calibri] text-sm w-[140px] " >
                                        Result
                                        <div className="inline-flex ml-2">
                                        <CheckboxGroup
                                                
                                                radius="none"
                                                size="sm"
                                            //className=" "
                                            >
                                                <Checkbox key={"1"} classNames={{
                                                    wrapper: "after:bg-[#00af8f]  before:bg-[#e5e7eb]",
                                                  }}>

                                                </Checkbox>
                                            </CheckboxGroup>
                                        </div>
                                    </TableColumn>
                                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm  font-[Calibri] text-left font-bold  w-[140px]">
                                        Assign
                                    </TableColumn>
                                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm font-[Calibri] text-left font-bold  w-[140px] last:rounded-none ">
                                        MVE/VT
                                    </TableColumn>
                                    <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm font-[Calibri] text-left font-bold  w-[140px] last:rounded-none ">
                                        Skip
                                    </TableColumn>
                                </TableHeader>
                                <TableBody>

                                    <TableRow
                                    >
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm font-[Calibri] text-left p-[5px]">
                                            Visual Inspection
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm" }}
                                            >
                                                <SelectItem key={""}>
                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm  text-left p-[5px] ">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"

                                                name="center"

                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key={"1"}>

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">

                                            <CheckboxGroup
                                                radius="none"
                                                size="sm"
                                            //className=""
                                            >
                                                <Checkbox key={"1"}>

                                                </Checkbox>
                                            </CheckboxGroup>

                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                    >
                                        <TableCell className="border-1 border-greyBorder text-sm font-[Calibri] text-left  p-[5px]">
                                            Under Carriage Inspection
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left  p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">
                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"

                                                name="center"

                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"

                                                name="center"

                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>

                                        <TableCell className="  text-sm text-left p-[5px] ">

                                            <CheckboxGroup
                                                radius="none"
                                                size="sm"
                                            //className=""
                                            >
                                                <Checkbox key={"1"}>

                                                </Checkbox>
                                            </CheckboxGroup>

                                        </TableCell>


                                    </TableRow>

                                    <TableRow
                                    >
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm font-[Calibri] text-left p-[5px]">
                                            Break Test
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm" }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">
                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">

                                            <CheckboxGroup
                                                radius="none"
                                                size="sm"
                                            //className=""
                                            >
                                                <Checkbox key={"1"}>

                                                </Checkbox>
                                            </CheckboxGroup>

                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                    >
                                        <TableCell className="border-1 border-greyBorder text-sm font-[Calibri] text-left  p-[5px]">
                                            Smoke Test
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left  p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder  text-sm text-left p-[5px] ">

                                            <CheckboxGroup
                                                radius="none"
                                                size="sm"
                                            //className=""
                                            >
                                                <Checkbox key={"1"}>

                                                </Checkbox>
                                            </CheckboxGroup>

                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                    >
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm  font-[Calibri] text-left p-[5px]">
                                            Headlight Test
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm" }}
                                            >
                                                <SelectItem key="1"> 

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">

                                            <CheckboxGroup
                                                radius="none"
                                                size="sm"
                                            //className=""
                                            >
                                                <Checkbox key={"1"}>

                                                </Checkbox>
                                            </CheckboxGroup>

                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                    >
                                        <TableCell className="border-1 border-greyBorder text-sm font-[Calibri] text-left  p-[5px]">
                                            Speedometer Test
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left  p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder  text-sm text-left p-[5px] ">

                                            <CheckboxGroup
                                                radius="none"
                                                size="sm"
                                            
                                            >
                                                <Checkbox key={"1"}>

                                                </Checkbox>
                                            </CheckboxGroup>

                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                    >
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm font-[Calibri] text-left p-[5px]">
                                            Black Box(EDRD) Test
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm" }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key={1}>

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">

                                            <CheckboxGroup
                                                radius="none"
                                                size="sm"
                                            //className=""
                                            >
                                                <Checkbox key={"1"}>

                                                </Checkbox>
                                            </CheckboxGroup>

                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                    >
                                        <TableCell className="border-1 border-greyBorder text-sm font-[Calibri] text-left  p-[5px]">
                                            Speed Limiter Test
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left  p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key={"1"}>

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key={"1"}>

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder  text-sm text-left p-[5px] ">

                                            <CheckboxGroup
                                                radius="none"
                                                size="sm"
                                            //className=""
                                            >
                                                <Checkbox key={"1"}>

                                                </Checkbox>
                                            </CheckboxGroup>

                                        </TableCell>
                                    </TableRow>
                                    <TableRow
                                    >
                                        <TableCell className="  border-1 border-greyBorder bg-[#F0FFFF] text-sm font-[Calibri] text-left p-[5px]">
                                            FFTS

                                            <Search
                                                size={18}
                                                color="white"
                                                className="bg-[#00AF8F] rounded-sm ml-[40px] mt-[-17px] cursor-pointer"
                                                onClick={handleFftsDetails}

                                            />

                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"

                                                name="center"

                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm" }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className=" w-[5%] border-1 border-greyBorder bg-[#F0FFFF] text-sm text-left p-[5px] ">

                                            <CheckboxGroup
                                                radius="none"
                                                size="sm"
                                            //className=""
                                            >
                                                <Checkbox key={"1"}>

                                                </Checkbox>
                                            </CheckboxGroup>

                                        </TableCell>

                                    </TableRow>
                                    <TableRow
                                    >
                                        <TableCell className="border-1 border-greyBorder text-sm  font-[Calibri] text-left  p-[5px]">
                                            IVU
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left  p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"

                                                name="center"

                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key={1}>

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px]">
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"

                                                name="center"

                                                aria-label="center"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">

                                                </SelectItem>
                                            </Select>
                                        </TableCell>
                                        <TableCell className="border-1 border-greyBorder text-sm text-left p-[5px] ">

                                            <CheckboxGroup
                                                radius="none"
                                                size="sm"
                                            //className=""
                                            >
                                                <Checkbox key={"1"}>

                                                </Checkbox>
                                            </CheckboxGroup>

                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <div>
                                <div className="mr-2">
                                    <div className=" whitespace-nowrap flex mt-2">
                                        <div className="w-[60%]   mt-1 text-sm font-[Calibri] font-bold" >Over All Result</div>
                                        <div className="flex flex-col-span gap-3">
                                            <div className="  mb-2   "> 
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="left"
                                                variant="bordered"
                                                className="w-[120px] bg-white "
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">
                                                </SelectItem>
                                            </Select>
                                            </div>
                                            
                                            <div className="ml-[5px]"> <Select
                                             labelPlacement="outside-left"
                                                placeholder="Select"
                                                size="sm"
                                                name="center"
                                                aria-label="left"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                //classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">
                                                </SelectItem>
                                            </Select></div>
                                            <div className=" ml-[15px]" > 
                                            <Select
                                                labelPlacement="outside-left"
                                                size="sm"
                                                name="center"
                                                aria-label="left"
                                                variant="bordered"
                                                className="w-[120px] bg-white"
                                                classNames={{ trigger: "bg-[#e3e5ea] rounded-sm " }}
                                            >
                                                <SelectItem key="1">
                                                </SelectItem>
                                            </Select></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        ) : (
                            ""
                        )}
                    </h1>
                    <div>
                        <div className="flex justify-end mb-2 mr-1 mt-2">
                            <Button
                                className={` text-[gray] font-[Calibri] text-sm font-bold rounded-sm ml-1`}
                                variant="bordered"
                                size="sm"
                                type="submit"

                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            {showFftsDetailsPopup && (
                <FftsDetailsPopup
                    showFftsDetailsPopup={showFftsDetailsPopup}
                    closeFftsDetailsPopup={setFftsDetailsPopup}
                ></FftsDetailsPopup>
            )}
        </>
    );
}
