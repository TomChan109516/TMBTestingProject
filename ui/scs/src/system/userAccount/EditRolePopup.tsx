import { Button, SelectItem, Select, Textarea } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import React, { useState } from "react";
import { theme } from "../../common/themes/themeConfig";

function EditRolePopup(props) {
  const { roleOpen, setRoleOpen } = props;
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const handleClose = () => {
    setRoleOpen(false);
  };

  const roleListCol1 = [
    "+ Amend appointment schedule date time",
    "ASSIGN-DYNO",
    "ASSIGN-MVE",
    "ASSIGN-MNT",
    "Centre Manager",
    "Adm Officer",
    "MVE(CTC)",
    "General TD User",
    "MVE II",
    "Officer in Charge in appt.office",
    "Certificate Dispatcher",
    "MOM Office In Charge",
    "+ Data Config(Centre)",
    "+ Booking approval(Level2)",
    "+Maintain alert list",
    "+View appointments and inspections",
    "ASSIGN-RESERVE",
    "ASSIGN-VT",
    "PAYMENT-MANAGE",
    "ACO-CA(New role, GOVT",
    "Lane Supervisor",
    "CLERK/CASHIER",
    "+ Data Config(CTC)",
    "MVE I/SMVE",
    "Office Clerical Staff",
    "Vehicle Tester",
    "MOM Office Clerical Staff",
    "+ Data Config(System)",
    "+ Booking approval(Level1)",
    "+ Delete appointment within same date",
    "+ Maintain watchlist and alert list",
  ];

  return (
    <div className="w-[100%] h-[100%]">
      <Modal
        size="3xl"
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
                    Role List
                  </span>
                  <div className="mt-2">
                    <div className="flex flex-row">
                      <div className="text-xs ml-3 text-black font-bold text-left w-[100px]">
                        Centre
                      </div>
                      <div className="w-[600px] h-[10px] ml-2 text-xs">TY1</div>
                    </div>

                    <div className="flex flex-row mt-4">
                      <div className="text-xs ml-3 text-black font-bold text-left w-[100px] mt-1">
                        Role List
                      </div>
                      <div className="ml-1 border-2 border-[lightgrey]">
                        <CheckboxGroup
                          classNames={{ wrapper: "grid grid-cols-2 pl-1" }}
                          value={checkedList}
                          onValueChange={setCheckedList}
                        >
                          {roleListCol1.map((item, index) => (
                            <Checkbox
                              key={index}
                              value={item}
                              size="sm"
                              className="text-xs"
                              radius="none"
                              classNames={{
                                wrapper:
                                  "after:bg-[#00AF8F] text-xs font-[Calibri]",
                              }}
                            >
                              {item}
                            </Checkbox>
                          ))}
                        </CheckboxGroup>
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
export default EditRolePopup;
