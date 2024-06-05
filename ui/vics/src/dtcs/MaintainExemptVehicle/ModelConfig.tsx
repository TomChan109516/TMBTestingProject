import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";



  function ModelConfig(props) {
    const open = props.showModelConfig;
    const handleClose = () => {
      props.closeModelConfig(false);
    };
  

 
  return (
    
      <Modal
        size="xl"
        className="rounded-md "
        onClose={handleClose}
        isOpen={open}
        isDismissable={false}
        hideCloseButton={true}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col text-black bg-lightGreen font-calibri font-bold  text-center i justify-center  gap-1">
               Vehicle Model Exemption Config
              </ModalHeader>
              <ModalBody>
              <div className="flex flex-row justify-center mt-4 text-right">
              <div className="justify-center font-bold text-[12px] mt-2">
                      (Optional)Type Approval No.
                    </div>
                    <div className="justify-center mr-12 ml-2">
                      <Input
                        labelPlacement="inside-left"
                        label=" - "
                        
                        className="w-[170px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row justify-center ml-8 mt-2 ">
              <div className="justify-center font-bold text-[12px] text-right mt-1">
                      Vehicle Model
                    </div>
                    <div className="justify-center ml-2">
                      <Input
                        labelPlacement="inside-left"
                        label="003"
                        
                        className="w-[170px] font-bold"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row justify-center mt-2 ml-10  ">
              <div className="justify-center font-bold text-[12px] text-right mt-1">
                      Vehicle Make
                    </div>
                    <div className="justify-center ml-2">
                      <Input
                        labelPlacement="inside-left"
                        label="11"
                        className="w-[170px] font-bold"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className=" flex flex-row justify-center mt-2 ml-12">
                     <span className="justify-center font-bold text-[12px] mt-1">
                        Vehicle Class</span>
                     <Select
                      labelPlacement="inside-left"
                      label="Private Car"
                      data-testid="Car"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      className="ml-2 mr-2 font-bold bg-white border-greyBorder w-44 rounded-sm"
                          >
                    <SelectItem key={1}>-</SelectItem>
                    </Select>
                    </div>

                    <div className="flex flex-row justify-center mt-2 mr-20 ">
              <div className="justify-center font-bold text-[12px] text-right mt-1">
                      Exempt Year Start(Start-Inclusive)
                    </div>
                    <div className="justify-center ml-2">
                      <Input
                        labelPlacement="inside-left"
                        label="2020"
                        
                        className="w-[170px] font-bold"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>

                    <div className="flex flex-row justify-center mt-2 mr-16 ">
              <div className="justify-center font-bold text-[12px] text-right mt-1">
                      Exempt Year End(End-Inclusive)
                    </div>
                    <div className="justify-center ml-2">
                      <Input
                        labelPlacement="inside-left"
                        label="2021"
                        
                        className="w-[170px] font-bold"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>
                    </div>
               
               
                </ModalBody>
              <ModalFooter className="justify-center mb-8 mt-4 ">
                <Button
                onClick={handleClose}
                role="button"
                  className="text-white font-calibri font-bold rounded-md bg-persianGreen border-greyBorder h-8 "
                  variant="light"
                   >
                  Save
                </Button>
                <Button 
                onClick={handleClose}
                className="text-black font-calibri font-bold  rounded-md bg-white border-1 border-greyBorder h-8 ml-4"
                role="button2">
                  Cancel
                </Button>
               
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      
    
    
  );
  
}



export default ModelConfig;