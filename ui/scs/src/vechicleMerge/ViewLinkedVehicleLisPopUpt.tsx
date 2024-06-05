import React from "react";
import { Modal, ModalContent, ModalBody, Button, useDisclosure, Tab, Tabs } from "@nextui-org/react";

import AddMasterVehicleTable from "./AddMasterVehcileTable";

import CurrentVehicleMembersTable from "./CurrentVehicleMembersTable";
import SearchMasterVehicleType from "./SearchMasterVehicleType";


export default function ViewLinkedVehicleListPopUp() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    return (
        <>
            <Button onPress={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full" className="w-[90%] h-[100%] overflow-y-auto " >
                <ModalContent>
                    {() => (
                        <>
                            <div className="flex">
                                <div className="flex-initial text-[#0a923d] p-[0px] ml-[15px] font-bold text-sm">
                                    View Linked Vehicle List
                                </div>
                            </div>
                            <ModalBody>
                                <>
                                    <SearchMasterVehicleType />
                                    <Tabs
                                        aria-label="Tabs colors"
                                        classNames={{
                                            tabContent:
                                                " group-data-[selected=true]:bg-[#007f62] group-data-[selected=true]:text-white text-white  rounded-xl",
                                            tab: " bg-[grey]   h-6",
                                            cursor: "group-data-[selected=true]:bg-[#007f62]",
                                          
                                        }}>

                                        <Tab key="Current Vehicle Members" title="Current Vehicle Members">
                                            <div className=" mt-5">   <CurrentVehicleMembersTable/></div>
                                           
                                        </Tab>
                                        <Tab key="Add Vehicle Members" title="Add vehicle Members ">
                                            <AddMasterVehicleTable />
                                        </Tab>
                                    </Tabs>
                                </>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
