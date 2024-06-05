import React from "react";
import { CircleMinus } from "tabler-icons-react"; 
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
Button} from "@nextui-org/react";


  function BulkVehicle2(props) {
    const open = props.showBulkVehicle2;
    const handleClose = () => {
      props.closeBulkVehicle2(false);
    };


  return (
    
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
                  className="text-black font-calibri font-bold rounded-sm bg-lightGreen border-[black] border-1 h-8 "
                  variant="light"
                  role="button6">
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
            <TableRow className="text-center bg-lightblue" >
              <TableCell>{ }</TableCell>
              <TableCell>{ }</TableCell>
              <TableCell>{ }</TableCell>
              <TableCell>{ }</TableCell>
              <TableCell>{ }</TableCell>
              <TableCell>{ }</TableCell>
              <TableCell className="bg-[white]"><CircleMinus size={20} strokeWidth={1} color={'black'} /></TableCell>
              
            </TableRow>
          </TableBody>
        </Table>
      </div>
  
                </ModalBody>
              <ModalFooter className="justify-center mb-8 mt-8 ">
                <Button
                  className="text-white font-calibri font-bold rounded-md bg-persianGreen border-greyBorder h-8 "
                  variant="light"
                  
                
                  role="button7">
                  Save
                </Button>
                <Button
                onClick={handleClose} 
                className="text-black font-calibri font-bold  rounded-md bg-white border-1 border-greyBorder h-8 ml-4"
                  role="button8">
                  Cancel
                </Button>
               
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    
  );
}

export default BulkVehicle2;