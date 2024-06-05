import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import { useNavigate } from "react-router-dom";

function EditExaminationSchedulePopUp(props) {
  const {
    showEditExaminationSchedulePopUp,
    closeEditExaminationSchedulePopUp,
  } = props;
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const handleClose = () => {
    closeEditExaminationSchedulePopUp(false);
  };
  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };

  return (
    <>
      <Modal
        size="5xl"
        radius="none"
        isOpen={showEditExaminationSchedulePopUp}
        onClose={handleClose}
        className="rounded-sm"
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div className="flex">
                  <div className="flex-initial text-[#009b77] mb-1 font-bold text-sm">
                    Edit Schedule Information
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="...">
                    <div className="col-span-2 ...">
                      <div className="text-[10.5px] flex flex-row pl-2">
                        <div className="w-1/5 pt-2 text-left font-bold">
                          Centre
                        </div>
                        <div className="w-1/5 pt-2 text-left">TY1</div>
                      </div>
                    </div>
                  </div>
                  <div className="...">
                    <div className="col-span-2 ...">
                      <div className="text-[10.5px]  flex flex-row">
                        <div className="w-1/5 pt-2 font-bold text-left">
                          Effective Period
                        </div>
                        <div className="inline-flex border-2 border-solid border-[lightgray] w-[40%] h-8">
                          <CalendarEvent color="grey" size="25" />
                          <DatePicker
                            name="fromDate"
                            selected={fromDate}
                            onChange={handleFromDateChanged}
                            className="text-[13px] p-[4px] w-[100%] selection:border-none"
                          />
                        </div>
                        <div className="w-[3%] mx-1 pt-2"> To </div>
                        <div className=" inline-flex border-2 border-solid border-[lightgray] w-[40%] ml-[1px] mr-1 h-8">
                          <CalendarEvent color="grey" size="25" />
                          <DatePicker
                            name="toDate"
                            selected={toDate}
                            onChange={handleToDateChanged}
                            className="text-[13px] p-[4px] w-[100%]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="...">
                    <div className="col-span-2 ...">
                      <div className="flex flex-col-2  ...">
                        <span className="text-[10.5px] pl-2  text-black font-bold text-left pt-2 w-1/6">
                          Description
                        </span>
                        <span className="text-[10.5px] text-black text-left pl-4">
                          <Input
                            className="w-[350px]"
                            id="standard-basic"
                            radius="none"
                            variant="bordered"
                            size="sm"
                            maxLength={15}
                            placeholder="Regular Exam Schdule(2020)"
                            // value={floatName}
                            onChange={(e) => {
                              // setFloatName(e.target.value);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="flex justify-end mb-2 mt-0 mr-1 font-[Calibri] ">
                  <Button
                    radius="none"
                    size="sm"
                    type="reset"
                    className="bg-white text-black border border-solid border-greyBorder rounded-[3px]  min-w-unit-16 text-[13px] font-bold px-1 py-1 mr-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    radius="none"
                    size="sm"
                    className="rounded-[3px]  min-w-unit-16 bg-[#00AF8F] text-white font-bold text-md text-[13px] px-1 py-1"
                  >
                    Save
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default EditExaminationSchedulePopUp;
