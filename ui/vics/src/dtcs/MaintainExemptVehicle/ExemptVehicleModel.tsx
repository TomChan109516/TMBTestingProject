import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  cn,
  Table,TableHeader,TableBody,TableColumn,TableRow,TableCell,
  Pagination
} from "@nextui-org/react";
import {Switch} from "@nextui-org/react";
import { Settings } from "tabler-icons-react";
import ModelConfig from "./ModelConfig";
import DisableVehicle from "./DisableVehicle";
import ReactivateVehicle from "./ReactivateVehicle";
import BulkVehicle from "./BulkVehicle";


const vehicleData = [
    {
      id: "1",
      Id: "ABCD001",
      Model: "Pruise",
      Make: "TY",
      from:"2020",
      to: "2021",
      assigned: ""
    },
    {
        id: "2",
        Id: "ABC002",
        Model: "jazz",
        Make: "TY",
        from:"1",
        to: "2023",
        assigned: ""
    },
    {
        id: "3",
        Id: "ABC002",
        Model: "Jazz",
        Make: "TY",
        from:"2000",
        to: "",
        assigned: ""
    },
    {
        id: "4",
        Id: "",
        Model: "TAR TAR",
        Make: "ATAL",
        from:"2019",
        to: "",
        assigned: ""
    },
   
  ];

function ExemptVehicleModel() {
    const [isReactivateVehicle, setIsReactivateVehicle] = useState(false);
    const [isDisableVehicle, setIsDisableVehicle] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const handleSwitchChange = () => {
      if (isActive) {
        setIsDisableVehicle(true);
      } else {
        setIsReactivateVehicle(true);
      }
      setIsActive(!isActive);
    };
    const [showModelConfig, setshowModelConfig] = useState(false);
    const handleModelConfig = () => {
        setshowModelConfig(true);
    };
    const closeModelConfig = (val) => {
        setshowModelConfig(val);
    };



    const [showBulkVehicle, setshowBulkVehicle] = useState(false);
    const handleBulkVehicle = () => {
        setshowBulkVehicle(true);
    };
    const closeBulkVehicle = (val) => {
        setshowBulkVehicle(val);
    };

  
  return (
    <>
      <Modal
        size="full"
        className="rounded-md "
        isOpen={open}
        isDismissable={false}
        hideCloseButton={true}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col text-Black font-calibri font-bold  text-left i justify-center  gap-1">
               Exempt Vehicle Model From Test Maintenance
              </ModalHeader>
              <ModalBody>
        <div className="flex flex-row gap-1">
                    <div className="flex flex-row gap-6">
              <Button
              onClick={handleModelConfig}
                  className="text-white font-calibri font-bold rounded-md bg-persianGreen border-greyBorder h-8 "
                  variant="light"
                  >
                 New
                </Button>
                <Button
                 onClick={handleBulkVehicle}
                  className="text-white font-calibri font-bold rounded-md bg-persianGreen border-greyBorder h-8 "
                  variant="light"
                   role="Bulk Create">
                  Bulk Create
                </Button>
                </div>
                
                
              <div className="text-left font-bold text-[12px] mt-2 ml-8" >
                      Type Approval No.
                    </div>
                    <div className="justify-center  ">
                      <Input
                        labelPlacement="inside"
                        className="w-[170px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>

                    <div className="text-left font-bold text-[12px] mt-2 ml-4">
                      Vehicle Model
                    </div>
                    <div className="justify-center  ">
                      <Input
                        labelPlacement="inside"
                        className="w-[170px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>

                    <div className="text-left font-bold text-[12px] mt-2 ml-4">
                      Vehicle Make
                    </div>
                    <div className="justify-center  ">
                      <Input
                        labelPlacement="inside"
                        className="w-[170px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                      />
                    </div>

                    <div className="text-left font-bold text-[12px] ml-4">
                    <Button
                  className="text-white font-calibri font-bold rounded-md bg-persianGreen border-greyBorder h-8 "
                  variant="light"
                  >
                 Reset
                </Button>
            
                <Button className="text-white font-calibri font-bold  rounded-md bg-persianGreen border-1 border-greyBorder h-8 ml-4"
                >
                  Search
                </Button>
                    </div>
                    

        </div>
        <div className=" mt-1 mb-10 mr-4 ">  
        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0  w-full ml-2 " }}>
        <TableHeader className=" bg-persianGreen text-darkwhite  font-[Calibir]  text-sm    text-center   text-sm font-bold">
          <TableColumn className=" bg-darkgreen  first:rounded-none last:rounded-none text-sm text-white    text-center ">
            Type Approval No.
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white     text-sm   text-center  ">
            Vehicle Model
          </TableColumn>
         
          <TableColumn className="bg-darkgreen text-white   first:rounded-none last:rounded-none text-center text-sm  ">
            Vehicle Make
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
              From
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
              To
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
              Option
            </TableColumn>
        </TableHeader>
        <TableBody>
          {vehicleData.map((details) => {
            return (
              <TableRow className="odd:bg-fadedwhite even:bg-[#e8fbf5] key={details.id}
                ">
                <TableCell className="font-calibri font-bold  text-sm  text-center">
                  {details.Id}
                </TableCell>
                <TableCell className=" font-calibri font-bold  text-sm   text-center ">
                  {details.Model}
                </TableCell>
               
                <TableCell className=" font-calibri font-bold  text-sm  text-center  ">
                   {details.Make}
                  
                </TableCell>
                <TableCell className=" font-calibri font-bold  text-sm  text-center  ">
                   {details.from}
                  
                </TableCell>
                <TableCell className=" font-calibri font-bold  text-sm  text-center  ">
                   {details.to}
                  
                </TableCell>
                <TableCell className=" text-center font-calibri text-sm">
                      <div className="flex justify-center px-4">  {details.assigned}
                  <Switch
                  defaultSelected
                      name="switch"
                      size="sm"
                
                      placeholder="Active"
                      onChange={() => {
                        handleSwitchChange();
                      }}
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
                          "h-[24px] bg-darkRed overflow-visible   group-data-[selected=true]:bg-persianGreen w-[80px] ",
                        thumb: cn(
                          "w-5 h-5 shadow-md",
                          "group-data-[hover=true]:border-primary",
                          "group-data-[selected=true]:ml-12",
                          "group-data-[pressed=true]:w-7",
                          "group-data-[selected]:group-data-[pressed]:ml-4"
                        ),
                      }}
                    
                    /> 
                  <Settings  size={18} color="black" className=" mt-1 ml-3" />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

        <div className="flex flex-row justify-between">
        <div className=" text-sm mt-2 font-bold font-calibri  ">
              Showing 1 to 4 of 4 rows
            </div>

         <div className=" justify-end mt-2">
            <Pagination
              isCompact
              showControls
              color="success"
              total={1}
              initialPage={1}
              classNames={{
                wrapper:
                  "gap-0 overflow-visible h-8  rounded-none border-[black]",
                item: "w-8 h-8 text-[12px] rounded-none text-[blue] font-bold",
                prev: "h-8 rounded-none",
                next: " h-8 rounded-none",
                cursor:
                  "bg-gradient-to-b shadow-lg from-[lightGrey] to-[lightGrey] rounded-none  text-white font-bold h-8 border-[black]",
              }}
            />
          </div>
          </div>
          {isDisableVehicle && (
        <DisableVehicle setIsDisableVehicle={setIsDisableVehicle} />
      )}
       {isReactivateVehicle && (
        <ReactivateVehicle setIsReactivateVehicle={setIsReactivateVehicle} />
      )}
        </div>

            </ModalBody>
              <ModalFooter >
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {showModelConfig && (
 
 <ModelConfig
     showModelConfig={showModelConfig}
     closeModelConfig={closeModelConfig}>
 </ModelConfig>
  
 )}


{showBulkVehicle && (
 
 <BulkVehicle
     showBulkVehicle={showBulkVehicle}
     closeBulkVehicle={closeBulkVehicle}>
 </BulkVehicle>
  
 )}
    </>
  );
}

export default ExemptVehicleModel;









