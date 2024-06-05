import { Button, Input, Select, SelectItem, Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/react";
import React, { useState } from "react";

export const AddVehicleWatchReasonPopup = ({ setShowModal, onSubmit, header, defaultValue, setRowToEdit }) => {
  const handleClose = () => {
    setShowModal(false);
    setRowToEdit(null);
  };
  const [formState, setFormState] = useState(
    defaultValue || {
      centre: "TY1",
      type: "",
      reason: "",
      description: "",
      status: "",
      record: "",
    }
  );
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = (e) => {
    e.preventDefault();
    onSubmit(formState);
    handleClose();
  };
  return (
    <div className="text-left font-[Calibri]">
      <Modal
        isOpen={true}
        onClose={handleClose}
        size="3xl"
        className="font-[Calibri]">
        <ModalContent className="rounded-md">
          {() => (
            <>
              <div className="flex flex-col gap-1 text-[#00AF8F] text-sm pt-4 pl-4 pb-2.5 font-bold">
                {header}
              </div>
              <ModalBody className="font-bold text-[14px]">
                <div className="grid grid-cols-8 gap-1">
                  <div className="col-span-2">
                    <div className="pl-3 pb-[11px]">Centre</div>
                    <div className="pl-3 pb-[11px]">Type</div>
                    <div className="pl-3 pb-[11px]">Reason</div>
                    <div className="pl-3 pb-[11px]">Description</div>
                    <div className="pl-3 pb-[11px]">Status</div>
                    <div className="pl-3">System Record</div>
                  </div>
                  <div className="col-span-6 mr-4">
                    <Select
                      isRequired
                      labelPlacement="outside-left"
                      radius="none"
                      classNames={{ trigger: "min-h-unit-2 h-7 rounded-sm" }}
                      variant="bordered"
                      name="centre"
                      value={formState.centre}
                      onChange={handleChange}
                      aria-label="centre"
                      className=" font-[Calibri]">
                      <SelectItem key="TY1" value="TY1">
                        TY1
                      </SelectItem>
                      <SelectItem key="TY2" value="TY2">
                        TY2
                      </SelectItem>
                    </Select>
                    <Select
                      isRequired
                      labelPlacement="outside-left"
                      radius="none"
                      placeholder="Select..."
                      classNames={{ trigger: "min-h-unit-2 h-7 rounded-sm mt-[3px]" }}
                      variant="bordered"
                      name="type"
                      value={formState.type}
                      onChange={handleChange}
                      aria-label="type"
                      className=" font-[Calibri]">
                      <SelectItem key="Watch" value="watch">
                        Watch
                      </SelectItem>
                      <SelectItem key="Alert" value="alert">
                        Alert
                      </SelectItem>
                    </Select>
                    <Input
                    isRequired
                      name="reason"
                      value={formState.reason}
                      onChange={handleChange}
                      type="text"
                      variant="bordered"
                      classNames={{ inputWrapper: "min-h-unit-6 h-7 w-[522px] rounded-sm mt-[3px]" }}
                      radius="none"
                    />
                    <Input
                    isRequired
                      name="description"
                      value={formState.description}
                      onChange={handleChange}
                      type="text"
                      variant="bordered"
                      classNames={{ inputWrapper: "min-h-unit-6 h-7 w-[522px] rounded-sm mt-[3px]" }}
                      radius="none"
                    />
                    <Select
                      isRequired
                      labelPlacement="outside-left"
                      radius="none"
                      classNames={{ trigger: "min-h-unit-2 h-7 rounded-sm mt-[3px]" }}
                      variant="bordered"
                      name="status"
                      value={formState.status}
                      onChange={handleChange}
                      aria-label="status"
                      className=" font-[Calibri]">
                      <SelectItem key="Action" value="active">
                        Active
                      </SelectItem>
                      <SelectItem key="Inaction" value="inactive">
                        Inactive
                      </SelectItem>
                    </Select>
                    <Select
                      isRequired
                      labelPlacement="outside-left"
                      radius="none"
                      classNames={{ trigger: "min-h-unit-2 h-7 rounded-sm mt-[3px]" }}
                      variant="bordered"
                      name="record"
                      value={formState.record}
                      onChange={handleChange}
                      aria-label="record"
                      className=" font-[Calibri]">
                      <SelectItem key="Y" value="y">
                        Y
                      </SelectItem>
                      <SelectItem key="N" value="n">
                        N
                      </SelectItem>
                    </Select>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="py-2 pb-4">
                <div className="mr-1.5">
                  <Button
                    radius="none"
                    type="button"
                    size="sm"
                    className="bg-white text-black border border-solid border-greyBorder rounded-[3px]  min-w-unit-14 text-[13px] font-bold px-1 py-0.5"
                    onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSave}
                    type="submit"
                    size="sm"
                    radius="none"
                    className="rounded-[3px]  min-w-unit-12 bg-warning text-white font-bold text-md text-[13px] px-1 py-0.5 ml-2">
                    Save
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
