import React, { useState } from "react";
import { Button, Select, Checkbox, Input, SelectItem } from "@nextui-org/react";
import { Pencil } from "tabler-icons-react";
import { useNavigate } from "react-router";
import ChangePasswordPopup from "./ChangePasswordPopup";
import AddRolePopup from "./AddRolePopup";
import EditRolePopup from "./EditRolePopup";
import EditAccountPopup from "./EditAccountPopup";

function UserDetail() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const changePassword = () => {
    setPassword(true);
  };
  const addCentreRole = () => {
    setIsOpen(true);
  };
  const addRole = () => {
    setRoleOpen(true);
  };
  const editAccount = () => {
    setIsEdit(true);
  };
  const tableData = [
    {
      id: 1,
      centre: "",
      roleDesc: "TD Admin",
      remarks: "",
      effectivePeriod: "DB",
      lastUpdatedUser: "TKW",
      lastUpdatedDateTime: "18/02/2021 16:49",
      action: "",
    },
    {
      id: 2,
      centre: "TY2",
      roleDesc: "TKW Admin",
      remarks: "",
      effectivePeriod: "DB",
      lastUpdatedUser: "TKW",
      lastUpdatedDateTime: "24/08/2023 10:49",
      action: (
        <Button
        className="bg-[#FFFFFF] font-bold border border-[lightgrey] shadow-sm rounded-sm"
        size="sm"
        radius="none"
        variant="flat"
          onClick={() => setRoleOpen(true)}
        >
          Edit
        </Button>
      ),
    },
    {
      id: 3,
      centre: "",
      roleDesc: "TD Admin",
      remarks: "",
      effectivePeriod: "DB",
      lastUpdatedUser: "TKW",
      lastUpdatedDateTime: "18/02/2021 16:49",
      action: "",
    },
  ];
  return (
    <div>
      <div className="flex items-left text-[#007F62] p-[10px]  font-bold text-md">
        User Account {">"} Detail
      </div>
      <div className="ml-1 mr-1 mt-2 text-sm">
        <h1>
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
            Account Information
          </h5>
          <div className="grid grid-cols-5 p-2 ml-4">
            <div className="flex flex-row items-center">
              <div className="text-left font-bold">User ID</div>
              <div className="ml-[40px]">{"SCS001"}</div>
            </div>
            <div className="flex flex-row items-center">
              <div className="text-left font-bold">User Name</div>
              <div className="ml-[40px]">{"SCS001"}</div>
            </div>
            <div className="flex flex-row items-center">
              <div className="text-left font-bold">Login Method</div>
              <div className="ml-[40px]">{"DB"}</div>
            </div>
            <div className="flex flex-row items-center">
              <div className="text-left font-bold">Status</div>
              <div className="ml-[40px]">{"A"}</div>
            </div>
            <div className="flex flex-row items-center">
              <div className="pl-6">
                <Button
                  type="button"
                  className="bg-[#00AF8F] text-[#FFFFFF] shadow-sm rounded-sm font-bold ml-1"
                  size="sm"
                  radius="none"
                  variant="flat"
                  onClick={changePassword}
                >
                  Change Password
                </Button>
              </div>
              <div className="pl-[60px]">
                <Pencil
                  size="25"
                  strokeWidth={2}
                  className="bg-[#00AF8F] text-white rounded-sm"
                  onClick={editAccount}
                  // onClick={() => setIsEdit(!isEdit)}
                />
              </div>
            </div>
          </div>
        </h1>
      </div>

      <div className="ml-1 mr-1 mt-4 text-sm">
        <h1>
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
            Copy
          </h5>
          <div className="flex flex-row items-center p-2 ml-4">
            <div className="text-left font-bold">
              <span className="text-[red]">*</span>
              <span>Copy From</span>
            </div>
            <div className="w-[15%] ml-[40px]">
              <Select
                labelPlacement="outside-left"
                radius="none"
                variant="bordered"
                size="sm"
                placeholder="Select"
              >
                <SelectItem key="M">M</SelectItem>
              </Select>
            </div>
            <Button
              type="button"
              className="bg-[orange] text-[#FFFFFF] shadow-sm rounded-sm font-bold ml-1"
              size="sm"
              radius="none"
              variant="flat"
            >
              Confirm
            </Button>
          </div>
        </h1>
      </div>

      <div className="ml-1 mr-1 mt-4 text-sm">
        <h1>
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
            Role and Centre
          </h5>
          <div className="float-right mt-2 mr-2 mb-4">
            <Button
             type="button"
             className="bg-[#00AF8F] text-[#FFFFFF] shadow-sm rounded-sm font-bold ml-1"
             size="sm"
             radius="none"
             variant="flat"
              onClick={addCentreRole}
            >
              Add Role
            </Button>
          </div>
          <div className="ml-2 mr-2">
            <table
              width="100%"
              className="text-sm"
            >
              <thead className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
                <th className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                  Centre
                </th>
                <th className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                  Role Desc
                </th>
                <th className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                  Remarks
                </th>
                <th className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                  Effective Period
                </th>
                <th className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                  Last Updated User
                </th>
                <th className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                  LastUpdate DateTime
                </th>
                <th className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                  Action
                </th>
              </thead>
              <tbody>
                {tableData.map((item, id) => (
                  <tr key={id}>
                    <td className="border-1 border-[lightgray]">
                      {item.centre}
                    </td>
                    <td className="border-1 border-[lightgray]">
                      {item.roleDesc}
                    </td>
                    <td className="border-1 border-[lightgray]">
                      {item.remarks}
                    </td>
                    <td className="border-1 border-[lightgray]">
                      {item.effectivePeriod}
                    </td>
                    <td className="border-1 border-[lightgray]">
                      {item.lastUpdatedUser}
                    </td>
                    <td className="border-1 border-[lightgray]">
                      {" "}
                      {item.lastUpdatedDateTime}
                    </td>
                    <td className="border-1 border-[lightgray]">
                      {item.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </h1>
        <div className="float-left mt-1 ml-1">
          <Button
             className="bg-[#FFFFFF] font-bold border border-[lightgrey] shadow-sm rounded-sm"
             size="sm"
             radius="none"
             variant="flat"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>
      </div>
      {password && (
        <ChangePasswordPopup password={password} setPassword={setPassword} />
      )}
      {isOpen && <AddRolePopup isOpen={isOpen} setIsOpen={setIsOpen} />}
      {roleOpen && (
        <EditRolePopup roleOpen={roleOpen} setRoleOpen={setRoleOpen} />
      )}
      {isEdit && <EditAccountPopup isEdit={isEdit} setIsEdit={setIsEdit} />}
    </div>
  );
}
export default UserDetail;
