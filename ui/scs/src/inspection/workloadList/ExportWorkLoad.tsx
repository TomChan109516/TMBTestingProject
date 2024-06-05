import React, { useState } from "react";
import {
  Modal,
  Radio,
  Checkbox,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
} from "@nextui-org/react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectItem } from "@nextui-org/react";

export default function ExportWorkLoad(props) {
  const { setShowModal } = props;
  const centerData = [
    { label: "TY1", value: "TY1" },
    { label: "TY2", value: "TY2" },
  ];

  const laneData = [
    { id: 2, label: "11", value: "11", isChecked: true },
    { id: 3, label: "11S", value: "11S", isChecked: true },
    { id: 4, label: "12", value: "12", isChecked: true },
    { id: 5, label: "12S", value: "12S", isChecked: true },
    { id: 6, label: "13", value: "13", isChecked: true },
    { id: 7, label: "14", value: "14", isChecked: true },
    { id: 8, label: "15", value: "15", isChecked: true },
    { id: 9, label: "16", value: "16", isChecked: true },
    { id: 10, label: "17", value: "17", isChecked: true },
    { id: 11, label: "18", value: "18", isChecked: true },
    { id: 12, label: "19", value: "19", isChecked: true },
    { id: 13, label: "1SE", value: "1SE", isChecked: true },
    { id: 14, label: "1TA", value: "1TA", isChecked: true },
    { id: 15, label: "1V1", value: "1V1", isChecked: true },
    { id: 16, label: "1V2", value: "1V2", isChecked: true },
    { id: 17, label: "20", value: "20", isChecked: true },
    { id: 18, label: "DB", value: "DB", isChecked: true },
  ];

  const typeData = [
    {
      id: 1,
      label: "Daily WorkLoad List",
      value: "Daily WorkLoad List",
      isDisabled: false,
    },
    {
      id: 2,
      label: "Daily WorkLoad List (Summary)",
      value: "Daily WorkLoad List (Summay)",
      isDisabled: false,
    },
    {
      id: 3,
      label: "Daily WorkLoad List (With Vehicle Details)",
      value: "Daily WorkLoad List (With Vehicle Details)",
      isDisabled: true,
      errorMsg: "*Not apply to past inspection.",
    },
    {
      id: 4,
      label: "Daily WorkLoad List (With Vehicle Details Without PSL rder ATTN)",
      value: "Daily WorkLoad List (With Vehicle Details Without PSL rder ATTN)",
      isDisabled: true,
      errorMsg: "*Not apply to past inspection.",
    },
    {
      id: 5,
      label: "Random Checklist For Office",
      value: "Random Checklist For Office",
      isDisabled: true,
    },
    {
      id: 6,
      label: "Random Checklist For Lane",
      value: "Random Checklist For Lane",
      isDisabled: true,
    },
  ];

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };

  const [allChecked, setAllChecked] = useState(true);
  const [checkedList, setCheckedList] = useState(laneData);
  const onAllCheckboxChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (allChecked) {
      setAllChecked(false);
      laneData.map((data) => (data.isChecked = false));
      setCheckedList(laneData);
    } else {
      setAllChecked(true);
      laneData.map((data) => (data.isChecked = true));
      setCheckedList(laneData);
    }
  };

  const handleCheckboxChange = (id: number) => {
    const updatedCheckedList = checkedList.map((data) => {
      if (data.id === id) {
        data.isChecked = !data.isChecked;
      }
      return data;
    });
    setCheckedList(updatedCheckedList);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  
  return (
    <div className="text-left font-[Calibri]">
      <Modal
        isOpen={true}
        onClose={handleClose}
        size="4xl"
        className="font-[Calibri]"
      >
        <ModalContent>
          {() => (
            <>
              <div className="flex flex-col gap-1 text-[#00AF8F] text-[16px] pt-4 pl-4 pb-0 font-bold">
                Export WorkLoad List
              </div>
              <ModalBody>
                <div className="grid grid-cols-1 m-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-row gap-2">
                      <div className="mr-3">From </div>
                      <div className="inline-flex flex-grow border items-center border-solid border-[lightgray] text-sm ml-3 h-8">
                        <CalendarEvent color="grey" size="25" />
                        <DatePicker
                          name="fromDate"
                          selected={fromDate}
                          onChange={handleFromDateChanged}
                          className="text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <div className="ml-1">To</div>
                      <div className="inline-flex flex-grow border items-center border-solid border-[lightgray] ml-2 h-8">
                        <CalendarEvent color="grey" size="25" />
                        <DatePicker
                          name="toDate"
                          selected={toDate}
                          onChange={handleToDateChanged}
                          className="text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-content-start pt-2 text-left">
                    {" "}
                    <div className="mr-3">Centre</div>
                    <Select
                      className="flex ml-2"
                      variant="bordered"
                      labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                    >
                      {centerData.map((data) => (
                        <SelectItem key={data.value} value={data.value}>
                          {data.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <div className="grid grid-row mt-2">
                    <div className="flex flex-col-2 gap-3">
                      <div className="flex flex-row">
                        <div className="mr-3">Lane</div>{" "}
                        <Checkbox
                          size="sm"
                          radius="none"
                          className="pl-2 ml-4 rounded-sm"
                          classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                          isSelected={allChecked}
                          value="ALL"
                          onChange={onAllCheckboxChanged}
                        >
                          ALL
                        </Checkbox>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="flex grow border border-[lightgray] p-1 pl-2 ml-12">
                        <div className="grid grid-cols-11">
                          {checkedList.map((data) => (
                            <Checkbox
                              key={data.id}
                              isSelected={data.isChecked}
                              value={data.value}
                              radius="none"
                              size="sm"
                              classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                              className="rounded-sm m-2"
                              onChange={() => handleCheckboxChange(data.id)}
                            >
                              {data.label}
                            </Checkbox>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-2">
                    <span className="mr-3">Type</span>
                    <div className="flex flex-col gap-2 ml-5">
                      <RadioGroup size="sm">
                        {typeData.map((data) => (
                          <Radio
                            key={data.id}
                            isDisabled={data.isDisabled}
                            value={data.value}
                            size="sm"
                            classNames={{
                              wrapper:
                                "group-data-[selected=true]:bg-[#00AF8F] group-data-[selected=true]:border-[#00Af8F] text-xs font-[Calibri]",
                              control: "bg-white",
                              base: "border-[#00AF8F]",
                            }}
                          >
                            {data.label}
                            {data.errorMsg && (
                              <span className="text-sm block">
                                {data.errorMsg}
                              </span>
                            )}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="border-[#e4e4e7] fontsize-13px text-black rounded-sm"
                  variant="bordered"
                  radius="none"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  className="bg-[#00AF8F] fontsize-13px ml-30 text-white rounded-sm"
                  radius="none"
                >
                  Generate
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
