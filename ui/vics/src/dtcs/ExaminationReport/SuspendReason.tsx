
import React, { useState } from "react";
import {
  Button,
  Select,
  SelectItem,
  Input,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  cn,
  Switch,
} from "@nextui-org/react";
import { Settings } from "tabler-icons-react";
import { Pagination } from "@nextui-org/react";
import EditTestReason from "./EditTestReason";
import ReactivateReason from "./ReactivateReason";
import DisableReason from "./DisableReason";
import AddTestReason from "../ExaminationReport/AddTestReason";

const vehicleData = [
  {
    id: "1",
    Id: "ID202306506",
    Description: "Equipment Error",
    status: "Abort",
    assigned: ""
  },
  {
    id: "2",
    Id: "ID202306507",
    Description: "Equipment Error",
    status: "Abort",
    assigned: ""
  },
  {
    id: "3",
    Id: "ID202306508",
    Description: "Equipment Error",
    status: "Abort",
    assigned: ""
  },
  {
    id: "4",
    Id: "ID202306509",
    Description: "Equipment Error",
    status: "Abort",
    assigned: ""
  },
  {
    id: "5",
    Id: "ID202306510",
    Description: "Equipment Error",
    status: "Suspend",
    assigned: ""
  },
  {
    id: "6",
    Id: "ID202306511",
    Description:"Equipment Error",
    status: "Abort",
    assigned: ""
  },
  {
    id: "7",
    Id: "ID202306512",
    Description: "Equipment Error" ,
    status: "Abort",
    assigned: ""
  },
];

export default function SuspendReason() {
  const [showEditTestReason, setshowEditTestReason] = useState(false);
  const [showAddTestReason, setshowAddTestReason] = useState(false);
  const [EditData, setEditData] = useState();
  const [isReactivateReason, setIsReactivateReason] = useState(false);
  const [isDisableReason, setIsDisableReason] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const handleSwitchChange = () => {
    if (isActive) {
      setIsDisableReason(true);
    } else {
      setIsReactivateReason(true);
    }
    setIsActive(!isActive);
  };
    const handleEditTestReason = (details) => {
        setshowEditTestReason(true);
        setEditData(details)
    };
    const closeEditTestReason = (val) => {
        setshowEditTestReason(val);
    };
    const handleAddTestReason = () => {
      setshowAddTestReason(true);
      
  };
  const closeAddTestReason = (val) => {
      setshowAddTestReason(val);
  };
  
  return (
    <>
      <div className=" flex font-calibri font-bold ml-3 mt-4 justify-start ">
        Abort/Suspend Test Reason Maintainance
      </div>
      <div className="grid grid-cols-6 gap-5 items-center font-calibri font-bold mb-3 ">
        <div className=" mt-2 ">
          <Button onClick={handleAddTestReason}  className="w-[90%] bg-persianGreen h-8 text-white rounded-sm" radius="none" size="sm">
          Add Abort/Suspend Test Reason
          </Button>
        </div>
        <div className=" w-[100%] flex justify-center items-center flex-1 ml-2">
          <span className=" w-[100%] mr-2 ">Test Type</span>
          <Select
            labelPlacement="outside-left"
            radius="none"
            size="sm"
            name="page"
            aria-label="center"
            variant="bordered"
          >
            <SelectItem key="10" value="10">17 </SelectItem>
            <SelectItem key="20" value="20">34 </SelectItem>
            <SelectItem key="30" value="30">35 </SelectItem>
            <SelectItem key="40" value="40">40 </SelectItem>
            <SelectItem key="50" value="50">50 </SelectItem>
          </Select>
        </div>
        <div className="flex flex-row items-center h-[1%] ml-4">
          <div className="w-[100%] text-right">Description</div>
          <div className="w-[100%] ml-2">
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              classNames={{ inputWrapper: "h-7 w-[170%] " }}
            ></Input>
          </div>
        </div>
        <div className="flex flex-row items-center h-[1%] ml-4">
          <div className="w-[100%] text-right ">Code</div>
          <div className="w-[100%] ml-2">
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              classNames={{ inputWrapper: "h-7 w-[170%] " }}
            ></Input>
          </div>
        </div>
        <div className="flex flex-row items-center h-[1%] ">
          <div className="w-[90%] text-right ">to</div>
          <div className="w-[100%] ml-2">
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              classNames={{ inputWrapper: "h-7 w-[150%] " }}
            ></Input>
          </div>
        </div>
        <div className="w-[100%] flex justify-end items-end mr-10 ">
          <Button className="w-[70%] bg-persianGreen h-8 text-white rounded-sm" radius="none" size="sm">
            Search
          </Button>
        </div>
      </div>
      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0  w-full ml-2 " }}>
        <TableHeader className=" bg-persianGreen text-darkwhite  font-[Calibir]  text-sm    text-center   text-sm font-bold">
          <TableColumn className=" bg-darkgreen  first:rounded-none last:rounded-none text-sm text-white    text-center ">
            Code
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white     text-sm   text-center  ">
            Description
          </TableColumn>
         
          <TableColumn className="bg-darkgreen text-white   first:rounded-none last:rounded-none text-center text-sm  ">
            Reason Type
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
              Status
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
                  {details.Description}
                </TableCell>
               
                <TableCell className=" font-calibri font-bold  text-sm  text-center  ">
                   {details.status}
                  
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
                  <Settings onClick={() => handleEditTestReason(details)} size={18} color="black" className=" mt-1 ml-3" />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="ml-8 mt-1 mb-10 mr-7 w-full ">
        <div className="flex justify-between mt-[10px]">
          <div className=" flex flex-row ml-2  ">
            <div className=" font-[Calibri] text-sm mt-2 font-bold  ">
              All 5 pages
            </div>
            <div className="ml-2 w-[70px] mt-1  ">
              <Select
                labelPlacement="outside-left"
                radius="none"
                size="sm"
                name="page"
                variant="bordered"
              >
                <SelectItem key="10" value="10">10 </SelectItem>
                <SelectItem key="20" value="20">20 </SelectItem>
                <SelectItem key="30" value="30">30 </SelectItem>
                <SelectItem key="40" value="40">40 </SelectItem>
                <SelectItem key="50" value="50">50 </SelectItem>
              </Select>
            </div>
            <span className="  inline-flex ml-2 mt-2 font-[Claibri] text-sm font-bold">
              page
            </span>
          </div>
          <div className="flex mt-4">
            <Pagination
              isCompact
              showControls
              total={10}
              classNames={{
                wrapper: "gap-0 overflow-visible h-8  rounded-none bg-lightGreen",
                item: "w-8 h-6 text-small rounded-none bg-transparent ",
                prev: "rounded-none",
                next: "rounded-none",
                cursor:
                  "bg-gradient-to-b shadow-lg from-navButton to-navButton rounded-none  text-white font-bold h-5 ",
              }}
              initialPage={1}
            />
          </div>
        </div>
       
      {isDisableReason && (
        <DisableReason setIsDisableReason={setIsDisableReason} />
      )}
       {isReactivateReason && (
        <ReactivateReason setIsReactivateReason={setIsReactivateReason} />
      )}
      </div>
      {showEditTestReason && (

<EditTestReason
    showEditTestReason={showEditTestReason}
    closeEditTestReason={closeEditTestReason}
    EditData={EditData}
    setEditData={setEditData}>     
</EditTestReason>

)}
  {showAddTestReason && (
<AddTestReason
    showAddTestReason={showAddTestReason}
    closeAddTestReason={closeAddTestReason}
      >
</AddTestReason>

)}
    </>
  );
}