import React, { useState, useEffect } from "react";
import { Button, SelectItem, Select } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";

function ChangePasswordPopup(props) {
  const [newPassword, setNewPassword] = useState<string>()
  const [confirmPassword, setConfirmPassword] = useState<string>()

  const { password, setPassword } = props;

  const handleClose = () => {
    setPassword(false);
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
                    Change Password, Only For Login Method By DB
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <span className="text-xs text-black font-bold text-left w-[120px]">
                    New Password
                  </span>
                  <div className="text-xs w-[70%]  text-black ml-8">
                    <Input
                      id="standard-basic"
                      radius="none"
                      variant="bordered"
                      size="xs"
                      maxLength={15}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <span className="text-xs text-black font-bold text-left w-[120px]">
                    Confirm Password
                  </span>
                  <div className="text-xs w-[70%] text-black ml-8">
                    <Input
                      id="standard-basic"
                      radius="none"
                      variant="bordered"
                      size="xs"
                      maxLength={15}
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ffffff] rounded-sm ml-2 font-bold text-xs "
                  variant="bordered"
                  type="submit"
                  size="sm"
                  radius="none"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  className=" bg-[#00AF8F] text-white rounded-sm ml-1 mr-1 font-bold text-xs"
                  variant="bordered"
                  type="submit"
                  size="sm"
                  radius="none"
                  // onClick={handleClose}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
export default ChangePasswordPopup;
