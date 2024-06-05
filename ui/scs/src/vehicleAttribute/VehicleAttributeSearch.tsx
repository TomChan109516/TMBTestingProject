import React, { useState } from "react";
import {
    Button,
    Select,
    Input,
    SelectItem,
} from "@nextui-org/react";

import VehicleAttributeTable from "./VehicleAttributeTable";


export default function VehicleAttributeSearch() {
    const [DeleteAtrributeColor, setDeleteAtrributeColor] = useState<boolean>(false);

    const [isOpen, setIsOpen] = useState<boolean>(false);


    const handleDeleteAtrributeColor = () => {
        setIsOpen(true);
    };

    return (
        <div className=" p-[5px] ml-1">
     
            <div className="flex items-left text-[#007F62] p-[10px]  font-bold text-md">
                Vehicle Enquiry {">"} Search Vehicle
            </div>

            <div className="h-[100%]">
                <h1>
                    <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                        Searching Criteria
                    </h5>
                    <div className="grid grid-cols-2 gap-1 mt-[10px] text-sm/[13px] font-bold">
                        <div className="grid grid-rows-3 h-[120px] grid-flow-col ml-6">

                            <div className="flex flex-row items-center">
                                <div className="w-[15%] text-left value={vehiclclass} ">Attribute</div>
                                <div className="w-[75%] ml-[25px]">
                                    <Select
                                        labelPlacement="outside-left"
                                        radius="none"
                                        size="sm"
                                        name="center"
                                        aria-label="center"
                                        variant="bordered"
                                    >
                                        <SelectItem key="1"></SelectItem>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="w-[15%] text-left">Make</div>
                                <div className="w-[75%] ml-[25px]">
                                    <Select
                                        labelPlacement="outside-left"
                                        radius="none"
                                        size="sm"
                                        name="center"
                                        aria-label="center"
                                        variant="bordered"
                                    >
                                        <SelectItem key="1"></SelectItem>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex flex-row items-center">
                                <div className="w-[15%] text-left">T.A No.</div>

                                <div className="w-[75%] ml-[25px]">
                                    <Input
                                        id="standard-basic"
                                        name="FloatName"
                                        radius="none"
                                        variant="bordered"
                                        size="sm"
                                        data-testid="FloatName"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-rows-3 grid-flow-col">

                            <div className="flex flex-row items-center">
                                <div className="w-[15%] text-left">Vehicle Class</div>
                                <div className="w-[75%] ml-[25px]">

                                    <Select
                                        labelPlacement="outside-left"
                                        radius="none"
                                        size="sm"
                                        name="center"
                                        aria-label="center"
                                        variant="bordered"
                                    >
                                        <SelectItem key="1"></SelectItem>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="w-[15%] text-left">Model</div>
                                <div className="w-[75%] ml-[25px]">
                                    <Input
                                        id="standard-basic"
                                        name="C&ENumber"
                                        radius="none"
                                        variant="bordered"
                                        size="sm"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="w-[15%] text-left">Engine Type</div>
                                <div className="w-[75%] ml-[25px]">
                                    <Select
                                        labelPlacement="outside-left"
                                        radius="none"
                                        size="sm"
                                        name="center"
                                        aria-label="center"
                                        variant="bordered"
                                    >
                                        <SelectItem key="1"></SelectItem>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end pb-[10px] mr-7 font-bold gap-1 mt-1">

                        <Button
                            type="reset"
                            className="bg-[#FFFFFF]"
                            size="sm"
                            radius="none"
                            variant="bordered"
                        >
                            Reset
                        </Button>
                        <Button
                            type="button"
                            className="bg-[#00AF8F] text-[#FFFFFF]"
                            size="sm"
                            radius="none"
                            variant="bordered"

                        >
                            Search
                        </Button>
                    </div>
                </h1>
                <div className="flex justify-start mb-2 mt-2 mr-1">
                    <Button
                        className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                        variant="bordered"
                        size="sm"
                        type="submit"

                    >
                        Add Attribute
                    </Button>
                    <Button
                        type="button"
                        radius="sm"
                        size="sm"
                        className="ml-[5px] text-white font-bold rounded"
                        style={{ backgroundColor: DeleteAtrributeColor ? "red" : "" }}
                        disabled={!DeleteAtrributeColor}
                        onClick={handleDeleteAtrributeColor}
                    >
                        Delete Attribute
                    </Button>
                </div>
               
            </div>
             
   
        <VehicleAttributeTable
                    checkFunc={setDeleteAtrributeColor}
                    check={DeleteAtrributeColor}
                />
        </div>
    );
}