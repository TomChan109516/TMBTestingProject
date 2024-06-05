import React from "react";
import { Button, Select, SelectItem } from "@nextui-org/react";
import RoleList from "./RoleList";

export default function RolePriviliges() {
  return (
    <div>
      <div className="flex text-sm font-[Calibri] font-bold text-left text-[#009b77]">
        System {">"} Role And Privilege
      </div>
      <h1 className="h-[80px] m-5">
        <h5 className="absolute-top-2 stat-3 pl-[10px] pr-[10px]  text-sm font-[Calibri] font-bold text-[#009b77]">
          Role Search
        </h5>
        <div className="flex flex-row items-center">
          <div className="text-sm font-[Calibri] font-bold text-left ml-4 mt-6">
            Role
          </div>
          <div className="w-[40%] ml-[60px] mt-6">
            <Select
              labelPlacement="outside-left"
              size="sm"
              radius="none"
              name="role"
              variant="bordered"
              placeholder="Choose Role"
            >
              <SelectItem key={"Role"}> Role</SelectItem>
            </Select>
          </div>
          <div className="flex flex-row ml-[30%] mt-5">
            <Button
              className={`bg-[#00AF8F] font-[Calibri] text-sm font-bold text-[white] rounded-sm ml-1 w-[150px]`}
              size="sm"
              type="submit"
              //onClick={search}
            >
              Search
            </Button>
          </div>
        </div>
      </h1>
      <RoleList />
    </div>
  );
}
