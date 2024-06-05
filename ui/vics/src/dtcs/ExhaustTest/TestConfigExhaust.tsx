import React from "react";

import {
    Modal,
    Button,
    ModalContent,
    ModalBody,
    ModalHeader,
    Select,
    SelectItem,
    Input,
} from "@nextui-org/react";
import {} from "@nextui-org/react";
import PropTypes from 'prop-types';

export function TestConfigExhaust(props) {
  const open = props.showTestConfigExhaust;
  const handleClose = () => {
     props.closeTestConfigExhaust(false);
  };
 
    return (
        <div className="w-screen h-screen">
            <Modal
                size="5xl"
                isOpen={open}
                onClose={handleClose}
                isDismissable={false}
                radius="none"
                className="h-[55%] rounded-sm"
                classNames={{
                    backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                    header: "bg-[#d8f1f0] font-bold text-[14px]",
                    closeButton: "hover:bg-white/4 active:bg-white/10",
                    body: "px-0 py-0",
                }}
            >
               <ModalContent>
                    <ModalHeader>
                        <div className="ml-[450px] ">Test Config</div>
                    </ModalHeader>
                    <ModalBody>
                    
                    
        <div className="grid grid-cols-2 gap-4 mt-3">
          
          <div className=" w-[100%] ml-4 flex justify-center items-center flex-1  ">
            <div className="w-[40%] text-right font-bold">Air Intake System</div>
            <div className="w-[65%] ml-1">
            <Select
                                    labelPlacement="outside-left"
                                    radius="none"
                                    className= "h-7 w-[60%] font-bold " 
                                    size="sm"
                                    variant="bordered"
                                    placeholder="Naturally Aspira" 
                                   
                                >
                                    <SelectItem className="text-[10px]" key={""}>
                                       
                                    </SelectItem>
                                </Select>
            </div>
          </div>
  
          
          <div><div className=" w-[100%] flex justify-center items-center flex-1  ">
            <div className="w-[30%] font-bold text-right">Propulsion</div>
            <div className="w-[65%] ml-1">
            <Select
                                    labelPlacement="outside-left"
                                    radius="none"
                                    className= "h-7 w-[60%] font-bold " 
                                    size="sm"
                                    variant="bordered"
                                    placeholder="ELECTRIC" 
                                   
                                >
                                    <SelectItem className="text-[10px]" key={""}>
                                       
                                    </SelectItem>
                                </Select>
            </div>
          </div></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          
          <div className=" w-[100%] ml-4 flex justify-center items-center flex-1  ">
            <div className="w-[40%] text-right font-bold">PGVW</div>
            <div className="w-[65%] ml-1">
              <Input
                size="sm"
                radius="none"
                variant="bordered"
                classNames={{ inputWrapper: "h-7 w-[60%] rounded-md " }}
              ></Input>
            </div>
          </div>
                         <div><div className=" w-[100%] flex justify-center items-center flex-1  ">
            <div className="w-[30%] font-bold text-right">No. of Axies</div>
            <div className="w-[65%] ml-1">
            <Select
                                    labelPlacement="outside-left"
                                    radius="none"
                                    className= "h-7 w-[60%] font-bold " 
                                    size="sm"
                                    variant="bordered"
                                    placeholder="2" 
                                   
                                >
                                    <SelectItem className="text-[10px]" key={""}>
                                       
                                    </SelectItem>
                                </Select>
            </div>
          </div></div>
                         </div>
                         <div className="grid grid-cols-2 gap-4 ">
          
          <div className=" w-[100%] ml-4 flex justify-center items-center flex-1  ">
            <div className="w-[40%] text-right font-bold">HSU Limit</div>
            <div className="w-[65%] ml-1">
              <Input
                size="sm"
                radius="none"
                placeholder="30" 
                variant="bordered"
                classNames={{ inputWrapper: "h-7 w-[60%] rounded-md " }}
              ></Input>
            </div>
          </div>
  
          
          <div><div className=" w-[100%] flex justify-center items-center flex-1  ">
            <div className="w-[30%] font-bold text-right">Idle Detection Time</div>
            <div className="w-[65%] ml-1">
            <Input
                size="sm"
                radius="none"
                variant="bordered"
                placeholder="10" 
                classNames={{ inputWrapper: "h-7 w-[60%] rounded-md " }}
              ></Input>
            </div>
          </div></div>
        </div>
        <div className="grid grid-cols-2 gap-4 ">
          
          <div className=" w-[100%] ml-6 flex justify-center items-center flex-1  ">
            <div className="w-[35%] text-right font-bold">High Idle Detection Time</div>
            <div className="w-[62%] ml-1">
              <Input
                size="sm"
                radius="none"
                variant="bordered"
                placeholder="10" 
                classNames={{ inputWrapper: "h-7 w-[60%] rounded-md " }}
              ></Input>
            </div>
          </div>
  
          
          <div><div className=" w-[100%] flex justify-center items-center flex-1  ">
            <div className="w-[30%] font-bold text-right">No. of FAT Test</div>
            <div className="w-[65%] ml-1">
            <Select
                                    labelPlacement="outside-left"
                                    className= "h-7 w-[60%] font-bold rounded-sm" 
                                    radius="none" 
                                    size="sm"
                                    variant="bordered"
                                    placeholder ="10" 
                                   
                                >
                                    <SelectItem className="text-[10px]" key={""}>
                                       
                                    </SelectItem>
                                </Select>
            </div>
          </div></div>
        </div>
                    </ModalBody>
                    
       
                     <div className=" flex justify-center mb-8 mt-4" >
                        <Button
                            className=" bg-[#009B77] text-white mr-6  font-bold text-xs rounded-sm w-[8%]"
                            type="submit"
                            size="sm"
                            radius="none">
                            Save
                        </Button>
                        <Button
                            className="bg-[#ffffff]  mr-6 font-bold text-xs rounded-sm w-[8%]"
                            variant="bordered"
                            type="submit"
                            size="sm"
                            radius="none"
                            onClick={handleClose}>
                            Quit
                        </Button>
                        </div>  
                </ModalContent>
            </Modal>
        </div>
    );
}
TestConfigExhaust.propTypes = {
  showTestConfigExhaust: PropTypes.bool,
  closeTestConfigExhaust: PropTypes.func,
};
export default TestConfigExhaust;