import React, { useState, useEffect } from "react";
import { Button, SelectItem, Select } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";

function CreateUserAccountPopup(props) {
  const { addAccountInfo, setAddAccountInfo } = props;
  const [userId, setUserId] = useState<string[]>("");
  const [userName, setUserName] = useState<string[]>("");
  const [loginMethod, setLoginMethod] = useState(new Set([]));
  const [password, setPassword] = useState<string[]>("");
  const [confirmPassword, setConfirmPassword] = useState<string[]>("");

  const handleClose = () => {
    setAddAccountInfo(false);
  };
  return (
    <div className="w-[100%] h-[100%]">
      <Modal
        size="xl"
        isOpen={true}
        onClose={handleClose}
        radius="none"
        classNames={{
          base: "rounded-sm",
          body: "py-4",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          closeButton: " hover:bg-white/5 active:bg-white/20",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div className="flex">
                  <div className="flex-initial text-[#00AF8F] mb-1 font-bold text-sm">
                    Account Information
                  </div>
                </div>
                <div>
                  <div className="flex flex-row items-center">
                    <span className="text-[red]">*</span>
                    <span className="text-xs text-black font-bold text-left w-[120px]">
                      User ID
                    </span>
                    <div className="text-xs w-[70%]  text-black ml-[35px]">
                      <Input
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="xs"
                        value={userId}
                        onValueChange={setUserId}
                        maxLength={15}
                        placeholder="test 1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <span className="text-[red]">*</span>
                    <span className="text-xs text-black font-bold text-left w-[120px]">
                      User Name
                    </span>
                    <div className="text-xs w-[70%]  text-black ml-[35px]">
                      <Input
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="xs"
                        value={userName}
                        onValueChange={setUserName}
                        maxLength={15}
                        placeholder="Test 1"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <span className="text-[red]">*</span>
                    <span className="text-xs text-black font-bold text-left w-[120px]">
                      Login Method
                    </span>
                    <div className="text-xs w-[70%] text-black ml-[35px]">
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="xs"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        value={loginMethod}
                        onChange={setLoginMethod}
                      >
                        <SelectItem key="DB">DB</SelectItem>
                      </Select>
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <span className="text-[red]">*</span>
                    <span className="text-xs  text-black font-bold text-left w-[120px]">
                      Password
                    </span>
                    <div className="text-xs w-[70%] text-black ml-[35px]">
                      <Input
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="xs"
                        maxLength={15}
                        value={password}
                        onChange={setPassword}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center mt-1">
                    <span className="text-xs text-black font-bold text-left w-[126px]">
                      Confirm Password
                    </span>
                    <div className="text-xs w-[70%] text-black ml-[35px]">
                      <Input
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="xs"
                        maxLength={15}
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                      />
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#FFFFFF] font-bold border border-[lightgrey] shadow-sm rounded-sm"
                  size="sm"
                  radius="none"
                  variant="flat"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  className=" bg-[#e0a648] text-white rounded-sm ml-1 mr-1 font-bold text-xs"
                  variant="flat"
                  type="submit"
                  size="sm"
                  radius="none"
                  // onClick={handleClose}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
export default CreateUserAccountPopup;
