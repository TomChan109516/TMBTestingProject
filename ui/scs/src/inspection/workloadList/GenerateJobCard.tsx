import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import DatePicker from "react-datepicker";
import { CalendarEvent } from "tabler-icons-react";
import React, { useState } from "react";

const laneItems = [
  { id: 1, label: "11", value: "11", isChecked: true },
  { id: 2, label: "11S", value: "11S", isChecked: true },
  { id: 3, label: "12", value: "12", isChecked: true },
  { id: 4, label: "12S", value: "12S", isChecked: true },
  { id: 5, label: "13", value: "13", isChecked: true },
  { id: 6, label: "14", value: "14", isChecked: true },
  { id: 7, label: "15", value: "15", isChecked: true },
  { id: 8, label: "16", value: "17", isChecked: true },
  { id: 9, label: "18", value: "18", isChecked: true },
  { id: 10, label: "19", value: "19", isChecked: true },
  { id: 11, label: "1SE", value: "1SE", isChecked: true },
  { id: 12, label: "1TA", value: "1TA", isChecked: true },
  { id: 13, label: "1V1", value: "1V1", isChecked: true },
  { id: 14, label: "1V2", value: "1V2", isChecked: true },
  { id: 15, label: "20", value: "20", isChecked: true },
  { id: 16, label: "DB", value: "DB", isChecked: true },
];

const sessionItems = [
  { id: 1, label: "AM1", value: "AM1", isCheckedSession: true },
  { id: 2, label: "AM2", value: "AM2", isCheckedSession: true },
  { id: 3, label: "PM1", value: "PM1", isCheckedSession: true },
  { id: 4, label: "PM2", value: "PM2", isCheckedSession: true },
];

export default function GenerateJobCard(props) {
  const { isOpen } = useDisclosure();
  const { showGenerateJobCard, closeGeneratedJobCard } = props;
  const [date, setDate] = useState(new Date());
  const [allChecked, setAllChecked] = useState(true);
  const [allCheckedSession, setAllCheckedSession] = useState(true);
  const [checkedList, setCheckedList] = useState(laneItems);
  const [checkedSession, setCheckedSession] = useState(sessionItems);

  const handleDateChanged = (newValue: React.SetStateAction<Date>) => {
    setDate(newValue);
  };

  const onCheckboxChangeSession = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (allCheckedSession) {
      setAllCheckedSession(false);
      sessionItems.map((data) => (data.isCheckedSession = false));
      setCheckedSession(sessionItems);
    } else {
      setAllCheckedSession(true);
      sessionItems.map((data) => (data.isCheckedSession = true));
      setCheckedSession(sessionItems);
    }
  };

  const handleSessionCheckboxChange = (id: number) => {
    const updateSessionList = sessionItems.map((data) => {
      if (data.id === id) {
        data.isCheckedSession === !data.isCheckedSession;
      }
      return data;
    });
    setCheckedSession(updateSessionList);
  };

  const onCheckboxChangeLane = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (allChecked) {
      setAllChecked(false);
      laneItems.map((data) => (data.isChecked = false));
      setCheckedList(laneItems);
    } else {
      setAllChecked(true);
      laneItems.map((data) => (data.isChecked = true));
      setCheckedList(laneItems);
    }
  };
  const handleLaneCheckboxChange = (id: number) => {
    const updateLaneList = checkedList.map((data) => {
      if (data.id === id) {
        data.isChecked == !data.isChecked;
      }
      return data;
    });
    setCheckedList(updateLaneList);
  };

  const handleClose = () => {
    closeGeneratedJobCard(false);
  };

  return (
    <div>
      <Modal
        isOpen={showGenerateJobCard}
        onClose={handleClose}
        size="4xl"
        className="font-[Calibri]"
      >
        <ModalContent className="rounded-md">
          {(onClose) => (
            <>
              <div className="flex flex-col gap-1 text-[#00AF8F] text-md pt-4 pl-4 pb-0 font-bold">
                Generate Job card
              </div>
              <ModalBody className="font-bold text-sm">
                <div className="grid grid-cols-1 m-4">
                  <div className="flex flex-row">
                    <div className="mr-6">Date</div>
                    <div className="inline-flex flex-grow-[1]  border-1 border-solid border-[lightgray] ml-[19.5px] h-8  ">
                      <CalendarEvent color="grey" size="30" />
                      <DatePicker
                        name="date"
                        selected={date}
                        onChange={handleDateChanged}
                        className="text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-content-start pt-1 text-left">
                    <div className="mr-6">Centre</div>
                    <Select
                      className="ml-2 border-1 border-[lightgray]"
                      labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                    >
                      <SelectItem key={""}>TY1</SelectItem>
                    </Select>
                  </div>
                  <div className="grid grid-row mt-2">
                    <div className="flex flex-col-2 gap-3">
                      <div className="flex flex-row">
                        <div className="mr-5">Lane</div>
                        <Checkbox
                          size="sm"
                          radius="none"
                          className="pl-2 ml-4 font-normal rounded-sm"
                          classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                          onChange={onCheckboxChangeLane}
                          isSelected={allChecked}
                          value="ALL"
                        >
                          All
                        </Checkbox>
                      </div>
                    </div>
                    <div className="flex mt-1  ml-[70px] font-normal">
                      <div className="border-1 border-[lightgray]">
                        <div className="h-[75px]">
                          {laneItems.map((data) => (
                            <Checkbox
                              key={data.id}
                              onChange={() => handleLaneCheckboxChange(data.id)}
                              isSelected={data.isChecked}
                              value={data.value}
                              radius="none"
                              size="sm"
                              classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                              className="rounded-sm p-4"
                            >
                              {data.label}
                            </Checkbox>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-row mt-2">
                    <div className="flex flex-col-2 gap-3">
                      <div className="flex flex-row mb-1">
                        <div className="mr-1">Session</div>
                        <Checkbox
                          size="sm"
                          radius="none"
                          className="pl-2 ml-4 font-normal rounded-sm"
                          classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                          onChange={onCheckboxChangeSession}
                          isSelected={allCheckedSession}
                          value="ALL"
                        >
                          All
                        </Checkbox>
                      </div>
                    </div>
                    <div className="ml-11 font-normal">
                      <div className="flex flex-col grow border-1 border-[lightgray] p-2 ml-[26px]">
                        <div className="flex flex-row gap-6 mr-2">
                          {checkedSession.map((data) => (
                            <Checkbox
                              key={data.id}
                              onChange={() =>
                                handleSessionCheckboxChange(data.id)
                              }
                              isSelected={data.isCheckedSession}
                              value={data.value}
                              radius="none"
                              size="sm"
                              classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                              className="rounded-sm"
                            >
                              {data.label}
                            </Checkbox>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="mr-3">
                  <Button
                    className="bg-white text-sm font-bold rounded-sm border-[lightgray] border-solid border-1 mr-3"
                    size="sm"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    className="bg-[#00AF8F] text-sm font-bold rounded-sm ml-30 text-white"
                    size="sm"
                    onClick={onClose}
                  >
                    Generate
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
