import React, { useState } from "react";
import { Button, Select, Checkbox, Input, SelectItem } from "@nextui-org/react";
import { Search, Printer, CircleX, X } from "tabler-icons-react";
import { useNavigate } from "react-router";
import CreateUserAccountPopup from "./CreateUserAccountPopup";
import DeleteAccountPopup from "./DeleteAccountPopup";

function SearchUserAccount() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState<string[]>([]);
  const [userName, setUserName] = useState<string[]>([]);
  const [assignedCentre, setAssignedCentre] = useState(new Set([]));
  const [assignedRole, setAssignedRole] = useState(new Set([]));
  const [accountStatus, setAccountStatus] = useState(new Set([]));
  const [loginMethod, setLoginMethod] = useState(new Set([]));

  const [addAccountInfo, setAddAccountInfo] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const resetHandler = () => {
    setUserId("");
    setUserName("");
    setAssignedCentre(new Set([]));
    setAssignedRole(new Set([]));
    setAccountStatus(new Set([]));
    setLoginMethod(new Set([]));
  };
  const addUserAccount = () => {
    setAddAccountInfo(true);
  };
  const deletePopup = () => {
    setShowConfirmPopup(true);
  };
  return (
    <div>
      <div className="flex items-left text-[#007F62] p-[10px]  font-bold text-md">
        System {">"} Account
      </div>
      <div className="ml-2 mr-2">
        <h1>
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
            Searching Criteria
          </h5>
          <div className="grid grid-cols-2 gap-2 mt-[12px] text-sm/[13px] font-bold">
            <div className="grid grid-rows-3 grid-flow-col ml-6">
              <div className="flex flex-row items-center">
                <div className="w-[20%] text-left">User ID</div>
                <div className="w-[72%] ml-[20px]">
                  <Input
                    id="standard-basic"
                    radius="none"
                    variant="bordered"
                    size="xs"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center mt-1">
                <div className="w-[20%] text-left">Assigned Centre</div>
                <div className="w-[72%] ml-[20px]">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    placeholder="Select"
                    selectedKeys={assignedCentre}
                    onChange={(e) => setAssignedCentre(new Set(e.target.value.split(",")))}
                  >
                    <SelectItem key="M">M</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center mt-1">
                <div className="w-[20%] text-left">Account Status</div>
                <div className="w-[72%] ml-[20px]">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    placeholder="Select"
                    selectedKeys={accountStatus}
                    onChange={(e) => {
                      setAccountStatus(new Set(e.target.value.split(",")));
                    }}
                   
                  >
                    <SelectItem key="M">M</SelectItem>
                  </Select>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-3 grid-flow-col ml-1">
              <div className="flex flex-row items-center">
                <div className="w-[20%] text-left">User Name</div>
                <div className="w-[72%] ml-[20px]">
                  <Input
                    id="standard-basic"
                    radius="none"
                    variant="bordered"
                    size="xs"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center mt-1">
                <div className="w-[20%] text-left">Assigned Role</div>
                <div className="w-[72%] ml-[20px]">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    placeholder="Select"
                    selectedKeys={assignedRole}
                    onChange={(e) => {
                      setAssignedRole(new Set(e.target.value.split(",")));
                    }}
                  >
                    <SelectItem key="M">M</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center mt-1">
                <div className="w-[20%] text-left">Login Method</div>
                <div className="w-[72%] ml-[20px]">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    placeholder="Select"
                    selectedKeys={loginMethod}
                    onChange={(e) => {
                      setLoginMethod(new Set(e.target.value.split(",")));
                    }}
                  >
                    <SelectItem key="M">M</SelectItem>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end pb-[10px] mr-5 mt-2">
            <Button
              type="reset"
              className="bg-[#FFFFFF] font-bold border border-[lightgrey] shadow-sm rounded-sm"
              size="sm"
              radius="none"
              variant="flat"
              onClick={resetHandler}
            >
              Reset
            </Button>
            <Button
              type="button"
              className="bg-[#00AF8F] text-[#FFFFFF] font-bold rounded-sm ml-2"
              size="sm"
              radius="none"
              variant="flat"
            >
              Search
            </Button>
          </div>
        </h1>
        <div className="flex justify-start mt-2 ">
          <Button
            type="button"
            className="bg-[#00AF8F] text-[#FFFFFF] font-bold rounded-sm"
            size="sm"
            radius="none"
            variant="flat"
            onClick={addUserAccount}
          >
            Create Account
          </Button>
        </div>
      </div>
      <div className="mt-2 ml-2 mr-2">
        <table
          width="100%"
          className="text-sm"
          // classNames={{ wrapper: "p-0 border-1 border-[lightgray]" }}
        >
          <thead className=" bg-[#A0D9C1] text-[#007F62] text-sm  text-center font-bold">
            <th className="bg-[#A0D9C1] text-[#007F62] text-sm text-center font-bold border-1 border-white">
              User ID
            </th>
            <th className="bg-[#A0D9C1] text-[#007F62] text-sm text-center font-bold border-1 border-white">
              User Name
            </th>
            <th className="bg-[#A0D9C1] text-[#007F62] text-sm text-center font-bold border-1 border-white">
              Status
            </th>
            <th className="bg-[#A0D9C1] text-[#007F62] text-sm text-center font-bold border-1 border-white">
              Login Method
            </th>

            <th className="bg-[#A0D9C1] text-[#007F62] text-sm text-center font-bold border-1 border-white">
              LastUpdateTime
            </th>
            <th className="bg-[#A0D9C1] text-[#007F62] text-sm text-center font-bold border-1 border-white">
              Action
            </th>
          </thead>
          <tbody>
            <tr>
              <td className="border-1 border-[lightgray]">TD</td>
              <td className="border-1 border-[lightgray]">TD Admin</td>
              <td className="border-1 border-[lightgray]">Active</td>
              <td className="border-1 border-[lightgray]">DB</td>
              <td className="border-1 border-[lightgray]">
                {"18/02/2021 16:49"}
              </td>
              <td className="border-1 border-[lightgray] bg-white">
                <div className="inline-flex">
                  <Search
                    size="20"
                    color="white"
                    className="bg-[#00AF8F] rounded-sm"
                    onClick={() => navigate("/userDetail")}
                  />
                  <X
                    size={18}
                    color="white"
                    className="ml-2 bg-[red] rounded-xl"
                    onClick={deletePopup}
                    // onClick={() => {
                    //   handleDeleteRecordPopup(item);
                    // }}
                  />
                </div>
              </td>
            </tr>
            {/* <tr>
              <td className="border-1 border-[lightgray]">TKW</td>
              <td className="border-1 border-[lightgray]">TKW Admin</td>
              <td className="border-1 border-[lightgray]">Active</td>
              <td className="border-1 border-[lightgray]">DB</td>
              <td className="border-1 border-[lightgray]">
                {"24/08/2023 10:49"}
              </td>
              <td className="border-1 border-[lightgray] bg-white">
                <div className="inline-flex">
                  <Search
                    size="20"
                    color="white"
                    className="bg-[#00AF8F] rounded-sm"
                    // onClick={() => searchHandle(searchVehicleinfo.vehicleId)}
                  ></Search>
                  <X
                    size={18}
                    color="white"
                    className="ml-2 bg-[red] rounded-xl"
                    // onClick={() => {
                    //   handleDeleteRecordPopup(item);
                    // }}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-1 border-[lightgray]">TD</td>
              <td className="border-1 border-[lightgray]">TD Admin</td>
              <td className="border-1 border-[lightgray]">Active</td>
              <td className="border-1 border-[lightgray]">DB</td>
              <td className="border-1 border-[lightgray]">
                {"18/02/2021 16:49"}
              </td>
              <td className="border-1 border-[lightgray] bg-white">
                <div className="inline-flex">
                  <Search
                    size="20"
                    color="white"
                    className="bg-[#00AF8F] rounded-sm"
                    // onClick={() => searchHandle(searchVehicleinfo.vehicleId)}
                  ></Search>
                  <X
                    size={18}
                    color="white"
                    className="ml-2 bg-[red] rounded-xl"
                    // onClick={() => {
                    //   handleDeleteRecordPopup(item);
                    // }}
                  />
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
      {addAccountInfo && (
        <CreateUserAccountPopup
          addAccountInfo={addAccountInfo}
          setAddAccountInfo={setAddAccountInfo}
        />
      )}
      {showConfirmPopup && (
        <DeleteAccountPopup
          showConfirmPopup={showConfirmPopup}
          setShowConfirmPopup={setShowConfirmPopup}
        />
      )}
    </div>
  );
}
export default SearchUserAccount;
