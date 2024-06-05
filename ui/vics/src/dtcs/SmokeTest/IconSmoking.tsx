import React from "react";
import { Button, Checkbox } from "@nextui-org/react";
import {
    Modal,
    ModalContent,
    ModalBody,
    ModalHeader,
    Select,
    SelectItem,
} from "@nextui-org/react";

export function IconSmoking(props) {
    const { password, setPassword } = props;
    const handleClose = () => {
        setPassword(false);
    };

    return (
        <div className="w-screen h-screen">
            <Modal
                size="xl"
                isOpen={true}
                onClose={handleClose}
                isDismissable={false}
                radius="none"
                className="h-[60%] rounded-sm"
                classNames={{
                    backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    header: "bg-[#d8f1f0] font-bold text-[14px]",
                    closeButton: "hover:bg-white/4 active:bg-white/10",
                    body: "px-0 py-0",
                }}
            >
                <ModalContent>
                    <ModalHeader>
                        <div className="ml-[185px]">Skip DYNO Test</div>
                    </ModalHeader>
                    <ModalBody>
                        
                        <div className="flex flex-row items-center justify-center ml-6 mt-6 mb-1">
                            <p className="text-sm text-black font-bold text-center w-[450px]" style={{ whiteSpace: "nowrap" }}>
                                <b>Please confirm that you will skip dynamometer test</b>
                            </p>
                        </div>
                        <div className=" border-b-3 w-full border-dashed  mt-1 opacity-100 " style={{ borderColor: "#50C878" }}></div>
                     
                        <div className="flex flex-row items-center  justify-center mb-2">
                            
                            <div className="flex flex-row">
                                <span className="text-sm text-black font-bold text-left w-[450px] mt-1 mr-6 " >
                                    Reason
                                </span>
                                
                                &nbsp;
                                
                                <Select
                                    labelPlacement="outside-left"
                                    className="text-lg text-black font-bold  w-[500%] "
                                    radius="none"
                    
                                    size="sm"
                                    name="center"
                                    aria-label="center"
                                    variant="bordered"
                                    // placeholder="OHM Test"

                                >
                                    <SelectItem className="text-[50px]" key={""}>
                                        1
                                    </SelectItem>
                                </Select>
                            </div>
                        </div>
                        <div className=" border-b-3 w-full border-dashed  mt-1  opacity-200 "style={{ borderColor: "#50C878" }}></div>
                    </ModalBody>
                    <div className="flex  flex-col justify-center  mb-10 ml-10 gap-3">
          <span>Fllow up Action</span>
          <Checkbox defaultSelected radius="none">
              Perform FAT
            </Checkbox>
            
            <Checkbox defaultSelected radius="none">
              Skip This Vehicle Dyno Test
            </Checkbox>
            
          </div>

                    <div className=" flex justify-center mb-10 ml-8 " >

                        <Button
                            className=" bg-[#009B77] text-white rounded-sm mr-8  font-bold text-xs"
                            type="submit"
                            size="sm"
                            radius="none">
                            YES
                        </Button>
                        <Button
                            className="bg-[#ffffff] rounded-sm mr-8 font-bold text-xs "
                            variant="bordered"
                            type="submit"
                            size="sm"
                            radius="none"
                            onClick={handleClose}>
                            Quiz
                        </Button>
                    </div>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default IconSmoking;