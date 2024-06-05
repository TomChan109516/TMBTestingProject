import React, { useState } from "react"
import { Modal, Checkbox, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"

import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Select, SelectItem } from "@nextui-org/react";

export const ExtractData = ({ check, checkFunc, setShowModal1 }) => {

  const onCheckboxChange = (e) => {
    checkFunc(e.target.checked);
  };
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };
  const centerData = [
    { label: "TY1", value: "TY1" },
    { label: "TY2", value: "TY2" }
  ]
  const templateData = [
    { label: "STANDARD", value: "STANDARD" },
    { label: "NORMAL", value: "NORMAL" }
  ]

  const laneData =
    [{ id: 1, label: "11", value: "11" },
    { id: 2, label: "11S", value: "11S"},
    { id: 3, label: "12", value: "12"},
    { id: 4, label: "12S", value: "12S"},
    { id: 5, label: "13", value: "13"},
    { id: 6, label: "14", value: "14"},
    { id: 7, label: "15 ", value: "15"},
    { id: 8, label: "16", value: "16"},
    { id: 9, label: "17", value: "17"},
    { id: 10, label: "18", value: "18"},
    { id: 11, label: "19", value: "19"},]

  const laneData2 =
    [{ id: 12, label: "1SE", value: "1SE"},
    { id: 13, label: "1TA", value: "1TA"},
    { id: 14, label: "1V1", value: "1V1"},
    { id: 15, label: "1V2", value: "1V2"},
    { id: 16, label: "20", value: "20"},
    { id: 17, label: "DB", value: "DB"},]

    const handleClose = () => {
        setShowModal1(false);
      };

  return (
    <div className="text-left font-[Calibri]">
      {/* <Button onPress={onOpen}>Extract data</Button> */}
      <Modal isOpen={true} onClose={handleClose} size="4xl" className="font-[Calibri]">
        <ModalContent className="rounded-md">
          {() => (
            <>
              <div className="flex flex-col gap-1 text-[#00AF8F] text-[16px] pt-4 pl-4 pb-0 font-bold">Extract Data to CSV</div>
              <ModalBody className="font-bold text-[16px]">
                <div className="grid grid-cols-1 m-4 mb-1.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-row gap-2">
                      <div className="mr-6  ">Date</div>
                      <div className="inline-flex flex-grow border border-solid border-[lightgray] ml-3 h-8">
                        <CalendarEvent color="grey" size="30" />
                        <DatePicker
                          name="fromDate"
                          selected={fromDate}
                          onChange={handleFromDateChanged}
                          className="text-[10px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-2">
                      <div className="ml-3 font-normal">  To </div>
                      <div className="inline-flex flex-grow border border-solid border-[lightgray]  h-8">
                        <CalendarEvent color="grey" size="30" />
                        <DatePicker
                          name="toDate"
                          selected={toDate}
                          onChange={handleToDateChanged}
                          className="text-[10px]"
                        />
                      </div>
                    </div>
                  </div>
                  {/*Center */}
                  <div className="flex flex-row justify-content-start pt-1 text-left"> <div className="mr-6">Centre</div>
                    <Select

                      className="ml-2"
                      variant="bordered"
                      labelPlacement="outside-left" radius="none" size="sm"
                    >
                      {centerData.map((data) => (
                        <SelectItem key={data.value} value={data.value}>
                          {data.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  {/*Lane*/}
                  <div className="grid grid-row mt-2">
                    <div className="flex flex-col-2 gap-3">
                      <div className="flex flex-row mb-1.5"><div className="mr-6">Lane</div> <Checkbox size="sm" radius="none" className="pl-2 ml-4 font-normal rounded-sm"
                        classNames={{ wrapper: "after:bg-[#00AF8F]" }} onChange={(e) => onCheckboxChange(e)} isSelected={check} value="ALL" >All</Checkbox></div>
                    </div>
                    <div className="ml-12 font-normal">

                      <div className="flex flex-col grow border border-[lightgray] p-2 ml-7 ">
                        <div className="flex flex-row gap-6 mr-2">
                          {laneData.map((data) => (
                            <Checkbox key={data.id} onChange={(e) => onCheckboxChange(e)} isSelected={check} value={data.value} radius="none" size="sm" classNames={{ wrapper: "after:bg-[#00AF8F]" }} className="rounded-sm">{data.label}</Checkbox>
                          ))}
                        </div>

                        <div className="flex flex-row gap-5 mt-4 mb-4 mr-2">
                          {laneData2.map((data) => (
                            <Checkbox key={data.id} onChange={(e) => onCheckboxChange(e)} isSelected={check} value={data.value} radius="none" size="sm" classNames={{ wrapper: "after:bg-[#00AF8F]" }} className="rounded-sm">{data.label}</Checkbox>

                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* TEMPLATE */}
                  <div className="flex flex-row justify-content-start pt-1 text-left">
                    <div className="ml-0 mr-2">Template</div>
                    <Select

                      className="ml-2"
                      variant="bordered"
                      labelPlacement="outside-left" radius="none" size="sm"
                    >
                      {templateData.map((data) => (
                        <SelectItem key={data.value} value={data.value}>
                          {data.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  {/* Footer */}
                </div>
              </ModalBody>

              <ModalFooter >
                <div className=" mr-3">
                <Button className="bg-white text-[16px] font-semibold rounded-sm border-[lightgray] border-solid border-1 mr-3 " size="sm" onClick={handleClose}>Close</Button>
                <Button className="bg-[#00AF8F] text-[16px] font-semibold rounded-sm ml-30 text-white" size="sm" >Generate</Button>
              </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}