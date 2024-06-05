import React, { useState } from "react";
import {
  Button,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Search } from "tabler-icons-react";
import RoleAndPrivilegeInfoPopup from "./RolesAndPriviligesInfoPopup";
import RolePriviligesPopup from "./RolePriviligesPopup";

const roleNames = [
  { id: "1", label: "Adm Officer", Value: "Adm Officer" },
  { id: "2", label: "ASSIGN-VT", Value: "ASSIGN-VT" },
  {
    id: "3",
    label: "+ Booking qpproval (Level 1)",
    Value: "+Booking approval (Leveel 1)",
  },
  {
    id: "4",
    label: "+ Booking qpproval (Level 2)",
    Value: "+Booking approval (Leveel 2)",
  },
];

export default function RoleList() {
  const [showRoleAndPrivilegeInfoPopup, setShowRoleAndPrivilegeInfoPopup] =
    useState(false);
  const [showRolePriviligesPopup, setshowRolePriviligesPopup] = useState(false);

  const handleSwitchChange = (e) => {
    e.target.checked
      ? setshowRolePriviligesPopup(false)
      : setshowRolePriviligesPopup(true);
  };

  const handleRole = () => {
    setShowRoleAndPrivilegeInfoPopup(true);
  };

  return (
    <div>
      <h1 className="h-[340px] ml-5 mr-5 mt-10">
        <h5 className="absolute-top-2 start-3  pl-[10px] pr-[10px]  text-sm font-[Calibri] font-bold text-[#009b77]">
          Role List
        </h5>
        <div className="flex flex-row mt-7">
          <div className=" text-sm- font-[Calibri] text-[gray] ml-7">
            4 record(s) found.
          </div>
          <div className=" flex flex-row ml-[30%]">
            <Button
              className={`bg-[#00AF8F] font-[Calibri] text-sm font-bold text-[white]  rounded-sm ml-1 w-[150px]`}
              size="sm"
              type="submit"
              onClick={handleRole}
            >
              Add Role
            </Button>
          </div>
        </div>
        <div className="ml-5 mr-[30%]">
          <div className="text-left bg-[#009B77] text-white p-4 mt-2">{""}</div>
          <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
            <TableHeader className=" bg-[#A0D9C1] text-[#009B77] text-sm  text-center font-bold">
              <TableColumn className="bg-[#A0D9C1] w-[40%] text-[#009B77] text-sm text-left  font-bold border-2  border-[lightgray] first:rounded-none ">
                Role Name
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] w-[10%] text-[#009B77] text-sm text-center font-bold border-2 border-[lightgray]">
                Privilege
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#009B77] w-[10%] text-sm text-center font-bold border-2 border-[lightgray] last:rounded-none">
                Status
              </TableColumn>
            </TableHeader>
            <TableBody>
              {roleNames.map((items) => {
                return (
                  <TableRow>
                    <TableCell className="border-2 border-[lightgray] text-left text-sm font-[Calibri]">
                      {items.label}
                    </TableCell>
                    <TableCell className="border-2 border-[lightgray] items-center">
                      <Search
                        size={20}
                        color="white"
                        className="bg-[#00AF8F] rounded-sm"
                      />
                    </TableCell>
                    <TableCell className="border-2 border-[lightgray]">
                      <Switch
                        defaultSelected
                        size="sm"
                        aria-label="Action"
                        classNames={{
                          wrapper:
                            "group-data-[selected=true]:bg-[#00AF8F] group:data-[pressed=true]:bg-[#00AF8F]",
                        }}
                        onChange={handleSwitchChange}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div></div>
        </div>
      </h1>
      <>
        {showRoleAndPrivilegeInfoPopup && (
          <RoleAndPrivilegeInfoPopup
            showRoleAndPrivilegeInfoPopup={showRoleAndPrivilegeInfoPopup}
            closeRoleAndPrivilegesInfoPopup={setShowRoleAndPrivilegeInfoPopup}
          />
        )}
        {showRolePriviligesPopup && (
          <RolePriviligesPopup
            showRolePriviligesPopup={showRolePriviligesPopup}
            closeRolePriviligesPopup={setshowRolePriviligesPopup}
          />
        )}
      </>
    </div>
  );
}
