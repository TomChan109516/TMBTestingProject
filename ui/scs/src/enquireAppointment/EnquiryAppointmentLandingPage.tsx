import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosGet, axiosPost } from "../utils/axiosInstance";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Select, Checkbox, Input, SelectItem } from "@nextui-org/react";
import {
  GET_VEHICLECLASS_URL,
  GET_CENTRES_URI,
  GET_LANEALL,
  BOOKING_CHANNEL,
  ENQUIRYAPPOINTMENT_API,
} from "../constants/urlConstants";
import dayjs from "dayjs";
import { saveSearchEnquiryResponse } from "./state/enquiryAppointmentSlice";
import EnquireTableData from "./EnquireTableData";
import * as ExcelJS from "exceljs";
import { exportExcelCSVHandler } from "../utils/exportUtils";

const columns = [
  { header: "Appointment No", key: "appointmentNumber" },
  { header: "Center", key: "centerCode" },
  { header: "Lane", key: "laneId" },
  { header: "Exam Date", key: "examDate" },
  { header: "Exam Code", key: "primaryExamCode" },
  { header: "Vehicle Class", key: "vehicleClassId" },
  { header: "Reg.Mark", key: "regMark" },
  { header: "Vehicle Id", key: "vehicleId" },
  { header: "Chassis No.", key: "chassisNumber" },
];

function EnquiryAppointmentLandingPage(){
  const dispatch = useDispatch();

  const [appointmentNo, setAppointmentNo] = useState<string>("");
  const [regMark, setRegMark] = useState<string>("");
  const [chassisNo, setChassisNo] = useState<string>("");
  const [vehicleClass, setVehicleClass] = useState<string[]>([]);
  const [vehicleClassState, setVehicleClassState] = useState<string>("");

  const [centreData, setCenterData] = useState<string[]>([]);
  const [centerId, setCenterId] = useState<string>("");
  const [lanes, setLanes] = useState<string[]>([]);
  const [selectedLaneId, setSelectedLaneId] = useState<string>("");
  const [appointmentStatus, setAppointmentStatus] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [vehicleId, setVehicleId] = useState<string>("");
  const [floatName, setFloatName] = useState<string>("");
  const [specialEvent, setSpecialEvent] = useState<string[]>([]);

  const [bookingChannel, setBookingChannel] = useState<string[]>([]);
  const [bookingId, setBookingId] = useState<string>("");

  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [apiErrorData, setApiErrorData] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [isDateEnabled, setIsDateEnabled] = useState<boolean>(false);

  const searchAppointmentData = useSelector(
    (state) => state.enquiryAppointment.searchEnquiryAppointment
  );

  const loadVehicleClass = async () => {
    const url = GET_VEHICLECLASS_URL;
    try {
      const response = await axiosGet(url);
      setVehicleClass(response);
    } catch (error) {
      console.error("Vehicle class Error", error);
    }
  };

  const loadCenterCodes = async () => {
    try {
      const response = await axiosGet(GET_CENTRES_URI);
      setCenterData(response);
    } catch (error) {
      console.error("Center code error", error);
    }
  };

  const loadLaneAll = async () => {
    try {
      const response = await axiosGet(GET_LANEALL);
      setLanes(response);
    } catch (error) {
      console.error("LaneData Error", error);
    }
  };

  // const loadAppointmentStatus = async () => {
  //   try {
  //     const response = await axiosGet(BOOKING_STATUS);
  //     setAppointmentStatus(response);
  //     console.log("Appointment status", response);
  //   } catch (error) {
  //     console.error("Appointment Status Error", error);
  //   }
  // };

  const loadBookingChannel = async () => {
    try {
      const response = await axiosGet(BOOKING_CHANNEL);
      setBookingChannel(response);
    } catch (error) {
      console.error("Booking Channel Error", error);
    }
  };

  useEffect(() => {
    loadVehicleClass();
    loadCenterCodes();
    loadLaneAll();
    // loadAppointmentStatus();
    loadBookingChannel();
  }, []);

  const searchHandler = async () => {
    const searchData = {
      appointmentNumber: parseInt(appointmentNo),
      centerCode: centerId,
      laneId: selectedLaneId,
      vehicleClassId: vehicleClassState,
      regMark: regMark,
      vehicleId: vehicleId,
      chassisNumber: checked ? alphanumericValidate(chassisNo) : chassisNo,
      appointmentStatus: appointmentStatus,
      bookingChannelId: bookingId,
      startDate: dayjs(startDate).toISOString(),
      endDate: dayjs(endDate).toISOString(),
    };
    const url = ENQUIRYAPPOINTMENT_API;
    try {
      const response = await axiosPost(url, searchData);
      dispatch(saveSearchEnquiryResponse(response));
      if (response.length >= 1) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } catch (error) {
      console.error("Enquiry Appointment Error", error);
    }
  };

  const resetFields = () => {
    setAppointmentNo("");
    setRegMark("");
    setChassisNo("");
    setVehicleClassState("");
    setCenterId("");
    setSelectedLaneId("");
    setAppointmentStatus("");
    setStartDate("");
    setEndDate("");
    setVehicleId("");
    setFloatName("");
    setSpecialEvent("");
    setBookingId("");
    setChecked(false);
  };

 
  const alphanumericValidate = (value) => {
    const newAlphaNumeric = value.replace(/[^a-zA-Z0-9]/g, "");
    return newAlphaNumeric;
  };

  const handleCheckBoxChange = () => {
    setIsDateEnabled(!isDateEnabled);

    if (!isDateEnabled) {
      setStartDate(() => {
        const beforeFourMonths = new Date();
        beforeFourMonths.setMonth(beforeFourMonths.getMonth() - 4);
        return beforeFourMonths;
      });
      setEndDate(new Date());
    }
  };
  const handleCheck = () => {
    setChecked(!checked);
  };
  const handleAppointmentNo = (event: ChangeEvent<HTMLInputElement>) => {
    setAppointmentNo(event.target.value);
  };
  const handleRegMark = (event: ChangeEvent<HTMLInputElement>) => {
    setRegMark(event.target.value);
  };
  const handleChassisNo = (event: ChangeEvent<HTMLInputElement>) => {
    setChassisNo(event.target.value);
  };
  const handleChangeClass = (event: ChangeEvent<HTMLSelectElement>) => {
    setVehicleClassState(event.target.value);
  };
  const handleCenterData = (event: ChangeEvent<HTMLSelectElement>) => {
    setCenterId(event.target.value);
  };
  const handleChangeLane = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("lanes", event.target.value);
    setSelectedLaneId(event.target.value);
  };

  const handleChangeStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAppointmentStatus(event.target.value);
  };
  const handleStartDateChange = (newValue: React.SetStateAction<Date>) => {
    setStartDate(newValue);
  };
  const handleEndDateChange = (newValue: React.SetStateAction<Date>) => {
    setEndDate(newValue);
  };
  const handleFloatName = (event: ChangeEvent<HTMLInputElement>) => {
    setFloatName(event.target.value);
  };

  const handleSpecialEvent = (event: ChangeEvent<HTMLSelectElement>) => {
    setSpecialEvent(event.target.value);
  };
  const handleBookingChannel = (event: ChangeEvent<HTMLSelectElement>) => {
    setBookingId(event.target.value);
  };
  return (
    <div className=" p-[5px] ml-1 mt-[10px]">
      <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-md">
        Appointment Enquiry {">"} Search Appointment
      </div>
      <div className="h-[400px]">
        <h1>
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
            Searching Criteria
          </h5>
          <div className="grid grid-cols-2 gap-2 mt-[12px] text-sm/[13px] font-bold">
            <div className="grid grid-rows-6 h-[250px] grid-flow-col ml-6">
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Appointment No.</div>
                <div className="w-[75%] ml-[30px]">
                  <Input
                    name="appointmentNo"
                    value={appointmentNo}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                      handleAppointmentNo(e);
                    }}
                    radius="none"
                    variant="bordered"
                    size="sm"
                    data-testid="appointmentNo"
                    maxLength={18}
                    endContent={appointmentNo.length + "/" + 18}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Reg. Mark </div>
                <div className="w-[75%] ml-[30px]">
                  <Input
                    name="regMark"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    value={regMark}
                    onChange={handleRegMark}
                    maxLength={10}
                    endContent={regMark.length + "/" + 10}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Chassis No. </div>
                <div className="w-[75%] ml-[30px]">
                  <Input
                    name="chassisNo"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    data-testid="input-test"
                    value={chassisNo}
                    onChange={handleChassisNo}
                    maxLength={25}
                    endContent={chassisNo.length + "/" + 25}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Vehicle Class</div>
                <div className="w-[75%] ml-[30px]">
                  <Select
                    id="vehicleClass"
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    variant="bordered"
                    selectedKeys={vehicleClassState}
                    onChange={handleChangeClass}
                  >
                    {vehicleClass.length > 0 &&
                      vehicleClass.map((data, index) => (
                        <SelectItem key={index} value={data.vehicleClassName}>
                          {data.vehicleClassName}
                        </SelectItem>
                      ))}
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center pt-1">
                <div className="w-[15%] text-left">Centre</div>
                <div className="w-[30%] ml-[30px]">
                  <Select
                    id="centreData"
                    data-testid="select-test"
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    variant="bordered"
                    value={centerId}
                    onChange={handleCenterData}
                  >
                    {centreData?.map((center) => (
                      <SelectItem key={center.centerId} value={center.centerId}>
                        {center.centerId}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
                <div className="w-[15%] text-center">Lane</div>
                <div className="w-[30%] mr-[16px]">
                  <Select
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    variant="bordered"
                    value={selectedLaneId}
                    onChange={handleChangeLane}
                  >
                    {lanes?.map((lane) => (
                      <SelectItem key={lane.laneId} value={lane.laneId}>
                        {lane.laneId.toString()}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center pt-2">
                <div className="w-[15%] text-left">Appointment Status</div>
                <div className="w-[75%]  ml-[30px]">
                  <Select
                    radius="none"
                    labelPlacement="outside-left"
                    variant="bordered"
                    size="sm"
                    id="appointmentStatus"
                    value={appointmentStatus}
                    onChange={handleChangeStatus}
                  >
                    <SelectItem key="Booked" value="Booked">
                      Booked
                    </SelectItem>
                    <SelectItem key="Draft" value="Draft">
                      Draft
                    </SelectItem>
                    <SelectItem key="Rescheduled" value="Rescheduled">
                      Rescheduled
                    </SelectItem>
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-6 grid-flow-col">
              <div className="flex flex-row gap-1 items-center ">
                <div className="w-[15%] text-left">Appointment Date</div>
                <div className="ml-[26px] ">
                  <p>
                    <Checkbox
                      radius="none"
                      data-testid="checkbox-test"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                      checked={isDateEnabled}
                      onChange={handleCheckBoxChange}
                    />
                    From
                  </p>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="border-2 border-[#dcdcdc] ml-2 h-8 flex justify-center items-center w-[65%]">
                    <div
                      className={
                        isDateEnabled
                          ? "flex justify-center items-center"
                          : " flex justify-center items-center opacity-40 pointer-events-none"
                      }
                    >
                      <i className="material-icons w-1">date_range</i>
                      <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                        disabled={!isDateEnabled}
                        className="w-[60%] -ml-[25px]"
                      />
                    </div>
                  </div>
                  <div className="text-center ml-5 mr-5">To</div>
                  <div className="border-2 border-[#dcdcdc] h-8 flex justify-center items-center w-[65%]">
                    <div
                      className={
                        isDateEnabled
                          ? "flex justify-center items-center"
                          : " flex justify-center items-center opacity-40 pointer-events-none"
                      }
                    >
                      <i className="material-icons w-1">date_range</i>
                      <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                        disabled={!isDateEnabled}
                        className="w-[60%] -ml-[25px]"
                        data-testid="datepicker-test"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Vehicle ID</div>
                <div className="w-[27%] ml-[30px] h-8">
                  <Input
                    id="standard-basic"
                    name="vehicleId"
                    radius="none"
                    className="h-8"
                    // labelPlacement="outside-left"
                    variant="bordered"
                    size="sm"
                    value={vehicleId}
                    onChange={(e) => setVehicleId(e.target.value)}
                  />
                </div>
                <div className="ml-[25px]">
                  <p>
                    <Checkbox
                      radius="none"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                    Includes Appts under same C&E No.
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">
                  Length: {chassisNo.length}
                </div>
                <div className="ml-[30px]">
                  <p>
                    <Checkbox
                      radius="none"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                      onChange={handleCheck}
                    />
                    Compare alphanumeric characters only
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Float Name</div>
                <div className="w-[76%] ml-[30px]">
                  <Input
                    id="standard-basic"
                    name="floatName"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    data-testid="floatName"
                    value={floatName}
                    onChange={handleFloatName}
                    maxLength={10}
                    endContent={floatName.length + "/" + 10}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Special Event</div>
                <div className="w-[76%] ml-[30px]">
                  <Select
                    radius="none"
                    labelPlacement="outside-left"
                    variant="bordered"
                    size="sm"
                    value={specialEvent}
                    onChange={handleSpecialEvent}
                  >
                    <SelectItem key={""}>{""}</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Booking Channel</div>
                <div className="w-[76%] ml-[30px] ">
                  <Select
                    radius="none"
                    labelPlacement="outside-left"
                    variant="bordered"
                    size="sm"
                    value={bookingId}
                    onChange={handleBookingChannel}
                  >
                    {bookingChannel.length > 0 &&
                      bookingChannel.map((booking, index) => (
                        <SelectItem key={index} value={booking.bk_Chnl_Name}>
                          {booking.bk_Chnl_Name}
                        </SelectItem>
                      ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end pb-[10px] mr-6 font-bold gap-1 mt-[10px]">
            <Button
              type="button"
              className="bg-[#FFFFFF]"
              size="sm"
              radius="none"
              variant="bordered"
              data-testid="exportButton"
              onClick={() => {
                exportExcelCSVHandler(
                  columns,
                  searchAppointmentData,
                  "enquireAppointment",
                  "xlsx"
                );
              }}
              >
              Export
            </Button>
            <Button
              type="reset"
              className="bg-[#FFFFFF]"
              size="sm"
              radius="none"
              variant="bordered"
              data-testid="resetButton"
              onClick={() => {
                resetFields();
              }}
            >
              Reset
            </Button>
            <Button
              type="button"
              className="bg-[#00AF8F] text-[#FFFFFF]"
              size="sm"
              radius="none"
              variant="bordered"
              data-testid="button-test"
              onClick={searchHandler}
            >
              Search
            </Button>
          </div>
        </h1>
      </div>
      {isValid === true ? <EnquireTableData /> : ""}
    </div>
  );
};

export default EnquiryAppointmentLandingPage;
