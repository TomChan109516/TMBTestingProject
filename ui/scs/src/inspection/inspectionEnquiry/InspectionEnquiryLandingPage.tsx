import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import React, { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { CalendarEvent, Search } from "tabler-icons-react";

function InspectionEnquiryLandingPage() {
  const navigate = useNavigate();
  const [appointmentNumber, setAppointmentNumber] = useState("");
  const [centerState, setCenterState] = useState(new Set([]));
  const [inspectionStatus, setInspectionStatus] = useState(new Set([]));
  const [chassisNumber, setChassisNumber] = useState("");
  const [regMark, setRegMark] = useState("");
  const [vehicleClassState, setVehicleClassState] = useState(new Set([]));
  const [dateCheck, setDateCheck] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [inspectionResult, setInspectionResult] = useState(new Set([]));
  const [docNo, setDocNo] = useState("");
  const [laneState, setLaneState] = useState(new Set([]));
  const [checked, setChecked] = useState(false);
  const [vehicleId, setVehicleId] = useState("");
  const handleCheckBoxChange = () => {
    setDateCheck(!dateCheck);
  };
  const reset = () => {
    setAppointmentNumber("");
    setCenterState(new Set([]));
    setInspectionStatus(new Set([]));
    setChassisNumber("");
    setRegMark("");
    setVehicleClassState(new Set([]));
    setDateCheck(false);
    setFromDate(new Date());
    setToDate(new Date());
    setInspectionResult(new Set([]));
    setDocNo("");
    setLaneState(new Set([]));
    setChecked(false);
    setVehicleId("");
  };
  const inspectionData = [
    {
      date: "27/01/2023",
      time: "22:00",
      center: "TY1",
      laneId: "15",
      class: "007",
      vehicleId: "001",
      regMark: "REG123",
      chassisNo: "WD123",
      examCode: "006",
      appointmentNo: "2021908765",
      status: "Closed",
      result: "DNA",
    },
  ];
  return (
    <div>
      <div className="flex items-left text-[#007F62] p-[10px]  font-[Calibri] font-bold text-sm">
        Inspection Enquiry{">"} Search Inspection
      </div>
      <div>
        <div className="mt-[10px] ml-1 mr-1">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#007F62]">
              Search Criteria
            </h5>
            <div className="grid grid-cols-2 ml-1 mr-1">
              <div className="grid grid-rows-6 grid-flow-col whitespace-nowrap mt-2">
                <div className="flex flex-row">
                  <div className=" text-[13px] font-[Calibri] font-bold mt-[5px]">
                    Appointment No.
                  </div>
                  <div className="w-[96%] ml-[10px]">
                    <Input
                      variant="bordered"
                      radius="none"
                      name="appointmentNo"
                      size="sm"
                      data-testId="appointmentNo"
                      value={appointmentNumber}
                      onChange={(e) => {
                        setAppointmentNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className=" text-[13px] font-[Calibri] font-bold mt-[5px]">
                    Center
                  </div>
                  <div className="w-[96%] ml-[68px]">
                    <Select
                      labelPlacement="outside-left"
                      variant="bordered"
                      radius="none"
                      size="sm"
                      placeholder="Select.."
                      name="center"
                      data-testId="center"
                      selectedKeys={centerState}
                      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                        setCenterState(new Set(event.target.value.split(",")));
                      }}
                      aria-describedby="outlined-weight-helper-text"
                    >
                      <SelectItem key="l" value="l">
                        L
                      </SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className=" text-[13px] font-[Calibri] font-bold mt-[6px]">
                    Inspection Status
                  </div>
                  <div className="w-full ml-3">
                    <Select
                      labelPlacement="outside-left"
                      size="sm"
                      radius="none"
                      variant="bordered"
                      name="inspectionStatus"
                      data-testId="inspectionStatus"
                      placeholder="Select.."
                      selectedKeys={inspectionStatus}
                      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                        setInspectionStatus(
                          new Set(event.target.value.split(","))
                        );
                      }}
                      //   onChange={(e) => {
                      //     handleChangeClass(e);
                      //   }}
                    >
                      <SelectItem key="l" value="l">
                        L
                      </SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row  ">
                  <div className=" text-[13px] font-[Calibri] font-bold mt-[5px]">
                    Chassis Number
                  </div>
                  <div className="w-[96%] ml-[18px] mt-[2px]">
                    <Input
                      id="standard-basic"
                      name="chassisNumber"
                      data-testId="chassisNumber"
                      size="sm"
                      radius="none"
                      variant="bordered"
                      value={chassisNumber}
                      onValueChange={setChassisNumber}
                      endContent={chassisNumber.length + "/" + 25}
                    />
                  </div>
                </div>
                <div className="flex flex-row  ">
                  <div className=" text-[13px] font-[Calibri] font-bold mt-[5px]">
                    Reg Mark
                  </div>
                  <div className="w-[96%] ml-[52.5px] mt-[2px]">
                    <Input
                      id="standard-basic"
                      name="regMark"
                      data-testId="regMark"
                      size="sm"
                      radius="none"
                      variant="bordered"
                      value={regMark}
                      onValueChange={setRegMark}
                    />
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className=" text-[13px] font-[Calibri] font-bold mt-[6px]">
                    Vehicle Class
                  </div>
                  <div className="w-full ml-[35.5px]">
                    <Select
                      labelPlacement="outside-left"
                      size="sm"
                      radius="none"
                      variant="bordered"
                      name="vehicleClass"
                      data-testId="vehicleClass"
                      placeholder="Select.."
                      selectedKeys={vehicleClassState}
                      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                        setVehicleClassState(
                          new Set(event.target.value.split(","))
                        );
                      }}
                    >
                      <SelectItem key="l" value="l">
                        L
                      </SelectItem>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-6 grid-flow-col whitespace-nowrap mt-2">
                <div className="flex flex-row">
                  <div className="ml-1 text-[13px] font-[Calibri] font-bold mt-[5px]">
                    Inspection Date
                  </div>
                  <div className="ml-[24px]">
                    <p className="text-[13px] mt-1">
                      <Checkbox
                        radius="none"
                        size="sm"
                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                        isSelected={dateCheck}
                        onChange={handleCheckBoxChange}
                      />
                      From
                    </p>
                  </div>
                  <div className="flex flex-row justify-between ml-1">
                    <div className="border-1 h-8 border-[lightgray] flex justify-center items-center w-[50%]">
                      <div
                        className={
                          dateCheck
                            ? "flex justify-center items-center"
                            : " flex justify-center items-center opacity-40 pointer-events-none"
                        }
                      >
                        <i className="material-icons w-1">date_range</i>
                        <DatePicker
                          selected={fromDate}
                          onChange={(newValue) => {
                            setFromDate(newValue);
                          }}
                          startContent={
                            <CalendarEvent
                              data-testid="fromDate"
                              color="black"
                              size="20"
                              className="-ml-3"
                            />
                          }
                          disabled={!dateCheck}
                          className="w-[60%] text-xs p-1 text-left"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-1 text-[13px] ml-4 mr-4">
                      To
                    </div>
                    <div className="border-1 h-8 border-[lightgray] flex justify-center items-center w-[50%]">
                      <div
                        className={
                          dateCheck
                            ? "flex justify-center items-center"
                            : " flex justify-center items-center opacity-40 pointer-events-none"
                        }
                      >
                        <i className="material-icons w-1">date_range</i>
                        <DatePicker
                          selected={toDate}
                          onChange={(newValue: React.SetStateAction<Date>) => {
                            setToDate(newValue);
                          }}
                          startContent={
                            <CalendarEvent
                              color="black"
                              size="20"
                              className="-ml-3"
                            />
                          }
                          disabled={!dateCheck}
                          className="w-[60%] text-xs p-1 text-left"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="ml-1 text-[13px] font-[Calibri] font-bold mt-[5px]">
                    Lane
                  </div>
                  <div className="w-full ml-[79px]">
                    <Select
                      labelPlacement="outside-left"
                      variant="bordered"
                      radius="none"
                      size="sm"
                      //   maxLength={25}
                      name="center"
                      selectedKeys={laneState}
                      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                        setLaneState(new Set(event.target.value.split(",")));
                      }}
                      aria-describedby="outlined-weight-helper-text"
                    >
                      <SelectItem key="l" value="l">
                        L
                      </SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="ml-1 text-[13px] font-[Calibri] font-bold mt-[6px]">
                    Inspection Result
                  </div>
                  <div className="w-full ml-3">
                    <Select
                      labelPlacement="outside-left"
                      size="sm"
                      radius="none"
                      variant="bordered"
                      name="inspectionResult"
                      placeholder="Select.."
                      selectedKeys={inspectionResult}
                      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                        setInspectionResult(
                          new Set(event.target.value.split(","))
                        );
                      }}
                    >
                      <SelectItem key="l" value="l">
                        L
                      </SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="ml-1 text-[13px] font-[Calibri] font-bold mt-[5px]">
                    Length:{chassisNumber.length}
                  </div>
                  <div className="ml-16 mt-1 text-[13px] font-[Calibri]">
                    <Checkbox
                      id="standard-basic"
                      name="checkBox"
                      data-testid="checkboxId"
                      size="sm"
                      radius="none"
                      isSelected={checked}
                      classNames={{ wrapper: "after:bg-[#00AF8F] " }}
                      onValueChange={setChecked}
                    >
                      Compare Alphanumeric Characters only
                    </Checkbox>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="ml-1 text-[13px] font-[Calibri] font-bold mt-[5px]">
                    Vehicle Id
                  </div>
                  <div className="ml-[53px] w-full">
                    <Input
                      id="standard-basic"
                      name="vehicleId"
                      size="sm"
                      radius="none"
                      variant="bordered"
                      value={vehicleId}
                      onValueChange={setVehicleId}
                    />
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="ml-1 text-[13px] font-[Calibri] font-bold mt-[6px]">
                    Doc No.
                  </div>
                  <div className="w-full ml-[63px]">
                    <Input
                      id="standard-basic"
                      name="Doc.No"
                      data-testId="Doc.No"
                      size="sm"
                      radius="none"
                      variant="bordered"
                      value={docNo}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setDocNo(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mr-1 mt-1 mb-1">
              <Button
                size="sm"
                radius="none"
                variant="flat"
                className="border bg-white border-[lightgray] text-[#333333]"
                onClick={reset}
              >
                Reset
              </Button>
              <Button
                size="sm"
                radius="none"
                variant="flat"
                data-testId="serach"
                className="ml-1 bg-[#00AF8F] font-bold font-[Calibri] text-white"
              >
                Search
              </Button>
            </div>
          </h1>
          <div className="ml-1 mr-1">
            <div className="text-left  text-[#333333] font- [Calibri] text-xs">
              6 record(s) Found
            </div>
            <div className="text-left  bg-[#007F62] text-white font-[Calibri] font-bold text-[14px]">
              <span className="ml-1">Inspection</span>
            </div>
            <Table radius="none" classNames={{ wrapper: "p-0" }}>
              <TableHeader className="bg-[#009a23]">
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] first:rounded-none text-xs   font-bold`}
                >
                  Action
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Date
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Time
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Center
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Lane
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Class
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Vehicle Id
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Reg Mark
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Chassis No
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Exam Code
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Appointment No.
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] text-xs   font-bold`}
                >
                  Status
                </TableColumn>
                <TableColumn
                  className={`bg-[#A0D9C1] text-[#007F62] last:rounded-none text-xs   font-bold`}
                >
                  Result
                </TableColumn>
              </TableHeader>
              <TableBody>
                {inspectionData.map((data, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell className="text-left">
                        <Search
                          size={20}
                          data-testId="searchIcon"
                          className="bg-[#00AF8F] text-white rounded-sm"
                          onClick={() => navigate("/inspectionInfo")}
                        />
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.date}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.time}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.center}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.laneId}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.class}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.vehicleId}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.regMark}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.chassisNo}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.examCode}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.appointmentNo}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.status}
                      </TableCell>
                      <TableCell className="text-xs text-left font-[Calibri]">
                        {data.result}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InspectionEnquiryLandingPage;
