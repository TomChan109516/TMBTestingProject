import React, { useState } from "react";
import { CircleMinus } from "tabler-icons-react"; 
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
Button} from "@nextui-org/react";
import BulkVehicle2 from "./BulkVehicle2";




  function BulkVehicle(props) {
    const open = props.showBulkVehicle;
    const handleClose = () => {
      props.closeBulkVehicle(false);
    };
    const [showBulkVehicle2, setshowBulkVehicle2] = useState(false);
    const handleBulkVehicle2 = () => {
        setshowBulkVehicle2(true);
    };
    const closeBulkVehicle2 = (val) => {
        setshowBulkVehicle2(val);
    };
  return (
    <>
      <Modal
        size="5xl"
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
              Bulk Vehicle Model Exemption Config
              </ModalHeader>
              <ModalBody>
              <div className=" mt-1 mb-40 mr-16 flex-row  ">
                <div>
                <Button
                onClick={handleBulkVehicle2}
                  className="text-black font-calibri font-bold rounded-sm bg-lightGreen border-[black] border-1 h-8 "
                  variant="light"
                  role="button5">
                  New Entry
                </Button>
                </div>
        <Table radius="none" shadow="none" classNames={{ wrapper: "p-0 " }}>
          <TableHeader>
            <TableColumn className="bg-persianGreen text-white text-center text-sm first:rounded-none last:rounded-none">
              Type Approval No.
            </TableColumn>
            <TableColumn className="bg-persianGreen text-white text-center text-sm ">
           Vehicle Model
            </TableColumn>
 
            <TableColumn className="bg-persianGreen text-white text-center text-sm  ">
             Vehicle Make
            </TableColumn>
            <TableColumn className="bg-persianGreen text-white text-center text-sm">
             Vehicle Class
            </TableColumn>
            <TableColumn className="bg-persianGreen text-white text-center text-sm   ">
             Year Start
            </TableColumn>
            <TableColumn className="bg-persianGreen text-white text-center text-sm  ">
             Year End
            </TableColumn>
            <TableColumn className=" text-white text-center bg-[white] text-sm  first:rounded-none last:rounded-none">
             
            </TableColumn>
            
          </TableHeader>
 
          <TableBody >
            <TableRow className="text-center ">
              <TableCell>-</TableCell>
              <TableCell>003</TableCell>
              <TableCell>11</TableCell>
              <TableCell>Private Car</TableCell>
              <TableCell>2020</TableCell>
              <TableCell>2021</TableCell>
              <TableCell><CircleMinus size={20} strokeWidth={1} color={'black'} /></TableCell>

              
            </TableRow>
           
          </TableBody>
        </Table>
      </div>
  
                </ModalBody>
              <ModalFooter className="justify-center mb-8 mt-8 ">
                <Button
                role="button3"
                  className="text-white font-calibri font-bold rounded-md bg-persianGreen border-greyBorder h-8 "
                  variant="light"
                  
                
                >
                  Save
                </Button>
                <Button 
                onClick={handleClose}
                className="text-black font-calibri font-bold  rounded-md bg-white border-1 border-greyBorder h-8 ml-4"
                 role="button4">
                  Cancel
                </Button>
               
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {showBulkVehicle2 && (
 
 <BulkVehicle2
     showBulkVehicle2={showBulkVehicle2}
     closeBulkVehicle2={closeBulkVehicle2}>
 </BulkVehicle2>
  
 )}
    </>
  );
}

export default BulkVehicle;