import React, { useState } from "react";

import {
    Button,
    Table,
    TableRow,
    TableCell,
    TableBody,
    TableHeader,
    TableColumn,
    Input,
    Switch,
    cn,
    Pagination,
    SelectItem,
    Select,
  } from "@nextui-org/react";

  import { Settings } from "tabler-icons-react";
import ManageUserManagementPage from "./ManageUserManagementPage";
import DisableUserAccount from "./DisableUserAccount";
import ReactiveUserAccount from "./ReactiveUserAccount";
  
  const uservalidityPeriodData = [
    {
      id : "DTCS",
      vehicleClass: "DTCS",
      updateTime: "DTCS",
      role:"DT",
      lane:"31",
      validityPeriod: "F",
      status: "Active",
    },
    {
      id: "VT11A",
      vehicleClass: "VT11A",
      updateTime: "VT11A",
      role:"VT",
      lane:"11",
      validityPeriod: "A",
    },
    {
      id: "VT11B",
      vehicleClass: "VT11B",
      updateTime: "VT11B",
      role:"VT",
      lane:"11",
      validityPeriod: "B",
    },
    {
      id: "VT11C",
      vehicleClass: "VT11C",
      updateTime: "VT11C",
      role:"VT",
      lane:"11",
      validityPeriod: "C",
    },
    {
      id: "VT11D",
      vehicleClass: "VT11D",
      updateTime: "VT11D",
      role:"VT",
      lane:"11",
      validityPeriod: "D",
      status: "21",
    },
    {
      id: "LS11E",
      vehicleClass: "LS11E",
      updateTime: "LS11E",
      role:"MVE-II",
      lane:"11",
      validityPeriod: "E",
    },
    {
      id: "MVE1",
      vehicleClass: "MVE1",
      updateTime: "MVE1",
      role:"MVE-I",
      lane:"13",
      validityPeriod: "E",
    },
    {
      id: "TEST-MVE-II",
      vehicleClass: "1",
      updateTime: "MVE-II",
      role:"MVE-II",
      lane:"15",
      validityPeriod: "A",
    },
    {
      id: "AM",
      vehicleClass: "AM",
      updateTime: "AM",
      role:"AM",
      lane:"16",
      validityPeriod: "E",
    },
    {
      id: "VT11",
      vehicleClass: "vt11",
      updateTime: "vt112",
      role:"MVE-II",
      lane:" ",
      validityPeriod: "A",
    },
  ];
  
  const UserManagementPage = () => {
    const [showManageUserManagementPage, setshowManageUserManagementPage] = useState(false);
  
    const handleManageUserManagementPage = () => {
      setshowManageUserManagementPage(true);
    };
    const closeManageUserManagementPage = (val) => {
      setshowManageUserManagementPage(val);
    };

    const [showDisableUserAccount, setshowDisableUserAccount] = useState(false);
  
    const handleDisableUserAccount = () => {
      setshowDisableUserAccount(true);
    };
    const closeDisableUserAccount = (val) => {
      setshowDisableUserAccount(val);
    };

    const [showReactiveUserAccount , setshowReactiveUserAccount ] = useState(false);
  
    const handleReactiveUserAccount  = () => {
      setshowReactiveUserAccount (true);
    };
    const closeReactiveUserAccount  = (val) => {
      setshowReactiveUserAccount (val);
    };

    
    
    return (
      <div>
      <div>
        <div className="grid grid-cols- gap-4 mt-4 ">
          <div className=" col-span-2 flex font-calibri font-bold ml-8  justify-start ">
            User Management
          </div>
        </div>
        <div className="flex mt-2">
          <div className="w-[50%] text-left ">
            <Button
              className=" text-right w-[50px] bg-persianGreen h-8  text-white rounded [-1px] ml-[30px] "
              radius="none" 
              onClick={handleManageUserManagementPage}>
              Add

            </Button>
          </div>
          <div className=" w-[50%] font-bold text-right -mr-[120px]  ">
            <label className="    mr-2 " htmlFor="wheel span">
              UserName
            </label>
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className=" inline-block md:w-[150px] border-greyBorder bg-insideInput  rounded-sm  "
            //   radius="sm"
              variant="bordered"
              defaultValue=""
            ></Input>
          </div>
          <div className="ml-[140px]">
            <Button
              className=" inline-block mr-[30px] text-right w-[50px] bg-persianGreen h-8  text-white rounded [-1px] "
              radius="none">
              Search
            </Button>
          </div>
        </div>
        <div className="ml-8 mt-4 mb-10 mr-7 ">
          <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }}>
            <TableHeader>
              <TableColumn className="bg-darkgreen border-1 border-white text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
                User Code
              </TableColumn>
              <TableColumn className="bg-darkgreen border-1 border-white text-white text-center text-sm font-bold ">
                User Name
              </TableColumn>
              <TableColumn className="bg-darkgreen border-1 border-white text-white text-center text-sm font-bold ">
                Real Name
              </TableColumn>
              <TableColumn className="bg-darkgreen border-1 border-white  text-white text-center text-sm font-bold ">
                Role
              </TableColumn>
              <TableColumn className="bg-darkgreen border-1 border-white  text-white text-center text-sm font-bold ">
                Lane
              </TableColumn>
              <TableColumn className="bg-darkgreen border-1 border-white text-white text-center text-sm font-bold ">
                Station
              </TableColumn>
              <TableColumn className="bg-darkgreen border-1 border-white text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
                Status
              </TableColumn>
            </TableHeader>
            <TableBody>
              {uservalidityPeriodData.map((details) => {
                return (
                  <TableRow
                    key={details.id}
                    className="even:bg-[#e7fbf6] odd:bg-[#f9ffff] font-calibri text-center">
                    <TableCell className=" font-calibri font-bold  text-sm border-1 border-greyBorder  text-center  ">
                      {details.id}
                    </TableCell>
                    <TableCell className=" font-calibri font-bold  text-sm border-1 border-greyBorder  text-center  ">
                      {details.vehicleClass}
                    </TableCell>
                    <TableCell className="   text-center  font-calibri border-1 border-greyBorder font-bold text-sm">
                      {details.updateTime}
                    </TableCell>
                    <TableCell className="   text-center  font-calibri border-1 border-greyBorder font-bold text-sm">
                      {details.role}
                    </TableCell>
                    <TableCell className="   text-center  font-calibri border-1 border-greyBorder font-bold text-sm">
                      {details.lane}
                    </TableCell>
                    <TableCell className="  text-centerfont-calibri border-1 border-greyBorder font-bold  text-sm">
                      {details.validityPeriod}
                    </TableCell>
                    <TableCell
                    className=" text-center font-calibri text-sm">
                      <div className="flex justify-center px-4">
                        <Switch
                          name="switch"
                          size="sm"
                          startContent={<p  onClick={handleReactiveUserAccount }>Active</p>}
                          endContent={<p onClick={handleDisableUserAccount}>Disable</p>}
                          classNames={{
                            wrapper:
                              "h-[24px] bg-[#bf0e0b] overflow-visible   group-data-[selected=true]:bg-[#00AF8F] w-[80px] ",
                            thumb: cn(
                              "w-5 h-5 shadow-md",
                              "group-data-[hover=true]:border-primary",
                              "group-data-[selected=true]:ml-12",
                              "group-data-[pressed=true]:w-7",
                              "group-data-[selected]:group-data-[pressed]:ml-4"
                            ),
                          }}
                          value="switch"
                          defaultSelected />
                        <Settings
                          size={22}
                          color="black"
                          className="rounded-sm mt-[2px]"/>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          
          <div className="flex justify-between mt-[10px]">
          <div className=" flex flex-row ">
            <div className=" font-[Calibri] text-sm mt-2 font-bold  ">
              Showing 1 to of 247 rows
            </div>
            <div className="ml-2 w-[60px] mt-1  ">
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
              rows per page
            </span>
          </div>
          <div className=" justify-end mt-2">
            <Pagination isCompact showControls total={16} initialPage={1} classNames={{
              wrapper:
                "gap-0 h-8  overflow-visiblerounded border border-divider bg-white ",
              item: "w-8 h-8 text-[12px] rounded-none text-[#3176AE] border font-bold  bg-transparent",
              prev: "h-8 rounded-none",
              next: " h-8 rounded-none",
              cursor:
                "bg-gradient-to-b shadow-lg from-[#3479B7] to-[#3479B7] rounded-none  text-[#f9ffff] font-bold h-8 border  ",
            }} />
          </div>
          </div>
        </div>
      </div>
      {showManageUserManagementPage && (
        <ManageUserManagementPage
          showManageUserManagementPage ={showManageUserManagementPage }
          closeManageUserManagementPage ={closeManageUserManagementPage }
        ></ManageUserManagementPage>
      )}

{showDisableUserAccount && (
        <DisableUserAccount
          showDisableUserAccount ={showDisableUserAccount }
          closeDisableUserAccount ={closeDisableUserAccount }
        ></DisableUserAccount>
      )}


{showReactiveUserAccount && (
        <ReactiveUserAccount
          showReactiveUserAccount={showReactiveUserAccount }
          closeReactiveUserAccount ={closeReactiveUserAccount }
        ></ReactiveUserAccount>
      )}
      </div>
      
    );
    
  };
  
  export default UserManagementPage;