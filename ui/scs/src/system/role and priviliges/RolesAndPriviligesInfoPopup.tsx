import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";

 const RoleAndPrivilegeInfoPopup = (props) => {
  const { showRoleAndPrivilegeInfoPopup, closeRoleAndPrivilegesInfoPopup } =
    props;
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [infoRow, setInfoRow] = useState([
    "Amend appointment",
    "Authorize bypass of validation rule (level 1)",
    "Authorize bypass of validation rule (level 2)",
    "Batch reschedule appointment",
    "Cancel appointment",
    "Cancel Fee Waiver of Appointment",
    "Create appointment",
    "Delete appointment",
    "Delete draft appointment to release temp-hold",
    "Lane reallocation",
    "Release held timeslot for cancelled appointment",
    "Reschedule appointment",
    "Search and view appointment detail",
    "Maintain examination schedule for tax BI",
    "Maintain examination schedule",
    "Maintain reservations exam schedule",
    "Maintain inspection lanes",
    "Maintain special event rescheduling arrangement",
    "Login to Specific Centre",
    "Amend VV / MPV inspection",
    "Input VV / MPV inspection",
    "Delete VV / MPV inspection",
    "Amend inspection result",
    "Batch input inspection overall result",
    "Dispatch certificate",
    "Issue certificates and documents to an inspection",
    "Input inspection result",
    "Create / amend history inspection result (over 7 days)",
    "Revert inspection result",
    "Update COF Expiry Date",
    "Search and view inspection result",
    "Extract data",
    "View workload list",
    "Maintain data repository",
    "Search and view data repository",
    "Management Reports",
  ]);
  const handleClose = () => {
    closeRoleAndPrivilegesInfoPopup(false);
  };

  return (
    <div className="text-left font-[Calibri]">
      <Modal
        isOpen={showRoleAndPrivilegeInfoPopup}
        onClose={handleClose}
        size="5xl"
        className="font-[Calibri]"
      >
        <ModalContent className="rounded-md">
          {(onClose) => (
            <>
              <div className="text-[#00AF8F] text-[13.5px] pt-4 pl-6 font-bold font-[Calibri]">
                Role and Privilege
              </div>
              <ModalBody>
                <div className="mt-[10px]">
                  <h1 className="font-[Calibri]">
                    <h5 className="absolute-top-2 start-3 pl-[10px] pr-[10px] text-[13px] font-bold text-[#00AF8F] font-[Calibri]">
                      Role and Privileges Information
                    </h5>
                    <div className="grid grid-cols-10 mt-4">
                      <div className="col-span-2 ml-4 text-[14px] text-left font-[Calibri] font-bold">
                        Role Name
                      </div>
                      <div className="flex-grow col-span-3">
                        <Input
                          type="text"
                          variant="bordered"
                          classNames={{
                            inputWrapper: "min-h-unit-6 h-6 rounded-sm",
                          }}
                          radius="none"
                        />
                      </div>
                    </div>
                    <div className="border-1 border-[lightgray] mt-4 ml-4 mr-4"></div>
                    <CheckboxGroup
                      value={checkedList}
                      onValueChange={setCheckedList}
                      classNames={{
                        wrapper:
                          "grid grid-cols-3 mt-6 mb-3 ml-4 mr-4 whitespace-nowrap",
                      }}
                    >
                      {infoRow.map((data, index) => {
                        return (
                          <Checkbox
                            key={index}
                            radius="none"
                            size="sm"
                            value={data}
                            className={
                              index === 28 || index === 29
                                ? `pt-0 ml-2`
                                : `pt-0`
                            }
                            classNames={{
                              wrapper: "after:bg-[lightgray] text-left ",
                            }}
                          >
                            {data}
                          </Checkbox>
                        );
                      })}
                    </CheckboxGroup>
                  </h1>
                </div>
              </ModalBody>
              <ModalFooter className="py-0 px-4 pb-3 pt-1">
                <div className="mr-1.5">
                  <Button
                    radius="none"
                    type="reset"
                    size="sm"
                    className="bg-white text-black border border-solid border-greyBorder rounded-[3px]  min-w-unit-2 w-16 h-7 text-[14px] font-bold  py-0"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                  //onClick={handleClose}
                    type="submit"
                    size="sm"
                    radius="none"
                    className="rounded-[3px]  min-w-unit-2 w-16 h-7 bg-[#00AF8F] text-white font-bold text-md text-[14px]  py-0 ml-2"
                  >
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
export default RoleAndPrivilegeInfoPopup;