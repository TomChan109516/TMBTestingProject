import { Button, SelectItem, Select, Textarea } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import React, { useState } from "react";
import { theme } from "../../common/themes/themeConfig";

function EditAccountPopup(props) {
  const { isEdit, setIsEdit } = props;

  const handleClose = () => {
    setIsEdit(false);
  };

  return (
    <div className="w-[100%] h-[100%]">
      <Modal
        size="2xl"
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
                <div>
                  <span className="text-sm text-[#00AF8F] font-bold">
                    Account Edit
                  </span>
                  <div className="mt-2">
                    <div className="flex flex-row">
                      <div className="text-xs ml-3 text-black font-bold text-left w-[100px]">
                        User ID
                      </div>
                      <div className="w-[500px] ml-2 text-xs">
                        <Input
                          variant="bordered"
                          className="w-[100%]"
                          size="xs"
                          radius="none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row mt-1">
                      <div className="text-xs ml-3 text-black font-bold text-left w-[100px]">
                        User Name
                      </div>
                      <div className="w-[500px] ml-2 text-xs">
                        <Input
                          variant="bordered"
                          className="w-[100%]"
                          size="xs"
                          radius="none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row mt-1">
                      <div className="text-xs ml-3 text-black font-bold text-left w-[100px]">
                        Login Method
                      </div>
                      <div className="w-[500px] ml-2 text-xs">
                        <Input
                          variant="bordered"
                          className="w-[100%]"
                          size="xs"
                          radius="none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row mt-1">
                      <div className="text-xs ml-3 text-black font-bold text-left w-[100px]">
                        Status
                      </div>
                      <div className="w-[500px] ml-2">
                        <RadioGroup orientation="horizontal">
                          <Radio value="active">Active</Radio>
                          <Radio value="inActive">InActive</Radio>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="reset"
                  className="bg-[#FFFFFF] font-bold border border-[lightgrey] shadow-sm rounded-sm"
                  size="sm"
                  radius="none"
                  variant="flat"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className="bg-[#00AF8F] text-[#FFFFFF] font-bold rounded-sm ml-2"
                  size="sm"
                  radius="none"
                  variant="flat"
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
export default EditAccountPopup;
