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
import DatePicker from "react-datepicker";

const roleList1 = [
  "CTB",
  "KBI",
  "NT_TW",
  "TYS",
  "CTCMU",
  "KBMIII",
  "NWFB",
  "TYV",
  "DCTC",
  "KCRC",
  "SKC",
  "TYX",
  "ISL_CC",
  "KMB",
  "TKW",
  "ISL_LAMMA",
  "NLB",
  "TY1",
  "ISL_PC",
  "TYG",
  "NT_LANTAU",
];

const roleList2 = [
  "New role, GOVT",
  "Lane Supervisor",
  "Cashier",
  "System Login",
  "VT-ASSIGNMENT",
  "DYNO-ASSIGNMENT",
  "MVE (CTC)",
  "General TD User",
  "MVE II",
  "Officer in charge in appt.office",
  "Certificate Dispatcher",
  "MOM Office In Charge",
  "+ Data Config(Centre)",
  "Centre Manager",
  "Adm Officer",
  "Random Check Manage",
  "ASSIGNMENT-MNT",
  "MVE-ASSIGNMENT",
  "PAYMENT-MANAGE",
  "+ Data Config(CTC)",
  "MVE I/SMVE",
  "Office Clerical Staff",
  "Vehicle Tester",
  "MOM Office Clerical Staff",
  "+ Data Config(System)",
  "+ Booking approval(Level 1)",
];

function AddRolePopup(props) {
  const { isOpen, setIsOpen } = props;
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const handleClose = () => {
    setIsOpen(false);
  };

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
                    Role and Centre
                  </span>
                  <div className="mt-2">
                    <div className="flex flex-row">
                      <div className="text-xs ml-3 text-black font-bold text-left w-[100px]">
                        Centre
                      </div>
                      <div className="ml-2 w-[600px] border-2 border-[lightgrey]">
                        <CheckboxGroup
                          classNames={{ wrapper: "grid grid-cols-6 pl-1" }}
                          value={checkedList}
                          onValueChange={setCheckedList}
                        >
                          {roleList1.map((item, index) => (
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
                    <div className="flex flex-row mt-1">
                      <div className="text-xs ml-3 text-black font-bold text-left w-[100px] mt-1">
                        Effective Period
                      </div>
                      <div className="flex flex-row justify-between items-center ml-2">
                        <div className="border-2 border-[lightgrey] w-[150px]">
                          <DatePicker
                            selected={fromDate}
                            className="w-[100%]"
                          />
                        </div>
                        <div className="ml-1 w-[30px] text-center">To</div>
                        <div className="border-2 border-[lightgrey] w-[150px] ml-1">
                          <DatePicker selected={toDate} className="w-[100%]" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row mt-1">
                      <div className="text-xs ml-3 text-black font-bold text-left w-[100px] mt-1">
                        Role List
                      </div>
                      <div className="ml-2 w-[600px] border-2 border-[lightgrey]">
                        <CheckboxGroup
                          classNames={{ wrapper: "grid grid-cols-2 pl-1" }}
                          value={checkedList}
                          onValueChange={setCheckedList}
                        >
                          {roleList2.map((item, index) => (
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
export default AddRolePopup;
