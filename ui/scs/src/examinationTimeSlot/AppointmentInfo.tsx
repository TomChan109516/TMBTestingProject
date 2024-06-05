import dayjs from "dayjs";
import PropTypes from "prop-types";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosGet } from "../utils/axiosInstance";
import { GET_LANEALL } from "../constants/urlConstants";
import { saveAllLane } from "../examinationTimeSlot/state/examTimeSlotSlice";
import { saveLoader } from "../login/state/loginSlice";
import { Checkbox, Input, Select, SelectItem, Chip } from "@nextui-org/react";
import {
  ICreateAppointmentInitialState,
  IexamDetails,
} from "../createAppointment/model/createAppointmentSliceModel";
import AuthorizationPopup from "./AuthorizationPopup";
import { getLaneCenterId } from "./service/timeLine.service";
import { ILane } from "./model/examTimeSlotModel";

function AppointmentInfo(props) {
  const { mode, getApiReq, appointmentDetails } = props;
  const dispatch = useDispatch();
  const centreId: string | null = new URLSearchParams(
    window.location.search
  )?.get("centreId");
  const centre: string | null = new URLSearchParams(
    window.location.search
  )?.get("centre");
  const vehicleId: string | null = new URLSearchParams(
    window.location.search
  ).get("vehicleId");
  const inspectionTypeIds = new URLSearchParams(window.location.search).get(
    "InspectionTypeId"
  );
  const primaryCode = new URLSearchParams(window.location.search).get(
    "primaryCode"
  );
  const supplementaryCode = new URLSearchParams(window.location.search).get(
    "supplementaryCode"
  );
  const examFee = new URLSearchParams(window.location.search).get("examFee");
  const examDate = new URLSearchParams(window.location.search).get("examDate");
  const [contactPerson, setContactPerson] = useState("");
  const [contactNumber, setContactNumber] = useState<number>(0);
  const [freeCharge, setFreeCharge] = useState<string>("No");
  const [overBook, setOverBook] = useState<string>("N");
  const [laneData, setLaneData] = useState<ILane[]>([]);
  const [manualCheck, setManualCheck] = useState<boolean>(false);
  const [overrideExamFeeWaiver, setOverrideExamFeeWaiver] =
    useState<boolean>(false);
  const [remarks, setRemarks] = useState<string>("");
  const [selectedLane, setSelectedLane] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showApiError, setShowApiError] = useState(false);
  const [apiErrorData, setApiErrorData] = useState(false);
  const [allowOverBook, setAllowOverBook] = useState(false);

  const { examDetails } = useSelector(
    (state: { createAppointment: ICreateAppointmentInitialState }) =>
      state.createAppointment
  );
  const selectDate = useSelector((state) => state.timeExamSlot.selectedDate);
  const selectedDateTime = selectDate ? selectDate : examDate;
  const { physicalLaneId, virtualLaneId } = useSelector(
    (state) => state.timeExamSlot
  );

  const validDateTime = selectedDateTime
    ? dayjs(selectedDateTime).format("DD/MM/YYYY")
    : examDetails.examDate
    ? dayjs(examDetails.examDate).format("DD/MM/YYYY")
    : "";
  console.log("selectedDateTime", validDateTime);

  const saveSelectedTime = useSelector(
    (state) => state.timeExamSlot.selectedTime
  );
  const selectedTimeSlotId = useSelector(
    (state) => state.timeExamSlot.selectedTimeSlotId
  );

  const data = {
    centreId: centreId,
  };

  const loadLaneAll = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getLaneCenterId(data);
      setLaneData(response.laneDetails);
      const laneId = response.laneDetails.find((data) => {
        if (data.laneId === physicalLaneId || data.laneId === virtualLaneId) {
          return data.laneName;
        }
      });
      setSelectedLane(laneId);
      dispatch(saveAllLane(response));
      dispatch(saveLoader(false));
    } catch (error) {
      setShowApiError(true);
      dispatch(saveLoader(false));
      if (!error.response) {
        setApiErrorData("Server Error");
      } else {
        if (error.response.status === 401) {
          setApiErrorData(error.message);
        } else if (error.response.status === 500) {
          setApiErrorData("500 - Internal Error");
        } else if (error.response.status === 400) {
          setApiErrorData("400 - Bad Request");
        } else if (error.response.status === 404) {
          setApiErrorData("404 - website could not found on their server");
        } else {
          setApiErrorData(error.response.status);
        }
      }
    }
  };
  const newDateTime = `${selectedDateTime}T${saveSelectedTime}:00.000Z`;
  const formData = {
    userId: "Admin",
    centreId: centreId,
    vehicleId: vehicleId,
    laneId: selectedLane,
    laneTimeSlotId: selectedTimeSlotId,
    allowOverbookIndicator: overBook,
    freeOfChargeIndicator: freeCharge,
    examFee: examFee,
    appointmentContactName: contactPerson,
    appointmentContactNumber: contactNumber,
    appointmentRemark: remarks,
    securityCode: "12345",
    appointmentAdditionalInformation: "okay",
    appointmentCreateSystemId: "SCS",
    appointmentStatus: "Created",
    primaryExamCodeId: inspectionTypeIds?.split(","),
    inspectionDateTime: selectedDateTime && saveSelectedTime ? newDateTime : "",
  };
  useEffect(() => {
    if (mode === "e" && centreId) {
      loadLaneAll();
    }
  }, []);

  useMemo(() => {
    if (getApiReq) {
      getApiReq(formData);
    }
  }, [
    contactNumber,
    contactPerson,
    remarks,
    selectedLane,
    selectedDateTime,
    saveSelectedTime,
  ]);

  const convert = () => {
    const date = new Date(examDetails.examDate);
    const mnth = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    setSelectedDate([day, mnth, date.getFullYear()].join("/"));
    setSelectedTime(
      date.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  };
  const handleGetLanesData = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedLane(value);
  };
  const handleContactPerson = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setContactPerson(e.target.value);
  };
  const handleContactNumber = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setContactNumber(e.target.value);
  };
  const handleRemarks = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRemarks(e.target.value);
  };
  const handleManualCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "manual") {
      setManualCheck(e.target.checked);
    }
    if (e.target.name === "OverrideExamFeeWaiver") {
      setOverrideExamFeeWaiver(e.target.checked);
    }
    if (e.target.name === "freeCharge") {
      if (e.target.checked === true) {
        setFreeCharge("Yes");
      }
      if (e.target.checked === false) {
        setFreeCharge("No");
      }
    }
    if (e.target.name === "overbook") {
      if (e.target.checked === true) {
        setOverBook("Y");
        // setAllowOverBook(true);
      }
      if (e.target.checked === false) {
        setOverBook("N");
        // setAllowOverBook(false);
      }
    }
  };
  return (
    <div className="p-2">
      {mode === "e" && (
        <div>
          <div className="grid grid-cols-2 gap-2">
            <div className="grid grid-col-7 grid-flow-row whitespace-nowrap">
              <div className="flex flex-row mt-[2px] mb-1">
                <div
                  className="text-xs font-calibri font-bold "
                  data-testid="primaryExam"
                >
                  Primary Exam
                </div>
                <div className="w-[85%] text-xs font-calibri text-left ml-2">
                  {primaryCode}
                </div>
              </div>
              <div className="flex flex-row mt-[2px] mb-1 ">
                <div
                  className="text-xs font-calibri font-bold  "
                  data-testid="center"
                >
                  Center
                </div>
                <div className="w-[85%] text-xs font-calibri text-left ml-2">
                  {centre}
                </div>
              </div>
              <div className="flex flex-row mt-[2px] ">
                <div
                  className="text-xs font-calibri font-bold  "
                  data-testid="date"
                >
                  Date{" "}
                </div>
                <div className="w-[85%] text-xs font-calibri text-left ml-2">
                  {selectedDateTime
                    ? dayjs(selectedDateTime).format("DD/MM/YYYY")
                    : ""}
                </div>
              </div>
              <div className="flex flex-row mt-[2px]">
                <div className="text-xs font-calibri font-bold  mt-[5px]">
                  <Checkbox
                    size="sm"
                    radius="none"
                    name="overbook"
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    onChange={(e) => {
                      handleManualCheck(e);
                    }}
                  />
                  Allow Overbook
                </div>
              </div>
              <div className="flex flex-row mt-[2px]">
                <div
                  className="text-xs font-calibri font-bold "
                  data-testid="examFee"
                >
                  Exam Fee
                </div>
                <div className="w-[85%] text-xs font-calibri text-left ml-1">
                  {examFee}
                </div>
              </div>
              <div className="flex flex-row mt-[2px]">
                <div
                  className="text-xs font-calibri font-bold  "
                  data-testid="feeWaiver"
                >
                  Fee Waiver
                </div>
                <div className="w-[85%] text-xs font-calibri text-left"></div>
              </div>
              <div className="flex flex-row">
                <div
                  className="text-xs font-calibri font-bold  mt-[6px]"
                  data-testid="contactPerson"
                >
                  Contact Person
                </div>
                <div className="w-[80%] text-xs font-calibri ml-2">
                  <Input
                    size="sm"
                    radius="none"
                    variant="bordered"
                    name="contactPerson"
                    value={contactPerson}
                    onChange={(e) => {
                      handleContactPerson(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-col-7 grid-flow-row whitespace-nowrap">
              <div className="flex flex-row mt-[2px]">
                <div
                  className="text-xs font-calibri font-bold  "
                  data-testid="supplementaryExam"
                >
                  Supplementary Exam
                </div>
                <div className="w-[80%] text-xs font-calibri text-left ml-2">
                  {supplementaryCode}
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div
                  className="text-xs font-calibri font-bold  mt-[15px]"
                  data-testid="lane"
                >
                  Lane
                </div>
                <div className="w-[40%] mt-[5px]">
                  <Select
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    name="lane"
                    value={selectedLane}
                    defaultSelectedKeys={[selectedLane]}
                    variant="bordered"
                    isDisabled={!manualCheck}
                    onChange={(e) => {
                      handleGetLanesData(e);
                    }}
                  >
                    {laneData?.length > 0 &&
                      laneData.map((lane) => (
                        <SelectItem key={lane?.laneId} value={lane?.laneId}>
                          {lane?.laneName}
                        </SelectItem>
                      ))}
                  </Select>
                </div>
                <div className="w-[40%] -ml-4 mt-[5px]">
                  <Checkbox
                    name="manual"
                    size="sm"
                    radius="none"
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    onChange={(e) => {
                      handleManualCheck(e);
                    }}
                  />
                  <label className="text-xs font-calibri">Manual</label>
                </div>
              </div>
              <div className="flex flex-row mt-[2px] ">
                <div
                  className="text-xs font-calibri font-bold  "
                  data-testid="time"
                >
                  Time
                </div>
                <div className="text-xs font-calibri text-left ml-2">
                  {saveSelectedTime}
                </div>
              </div>
              <div className="flex flex-row mt-[2px] ">
                <div className="text-xs font-calibri font-bold  mt-[5px]">
                  <Checkbox
                    size="sm"
                    radius="none"
                    name="freeCharge"
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    onChange={(e) => {
                      handleManualCheck(e);
                    }}
                  />
                  <label>Fee Of Charge Booking</label>
                </div>
              </div>
              <div className="flex flex-row mt-[2px]">
                <div className="text-xs font-calibri font-bold  mt-[5px]">
                  <Checkbox
                    size="sm"
                    radius="none"
                    name="OverrideExamFee"
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    onChange={(e) => {
                      handleManualCheck(e);
                    }}
                  />
                  <label>Override Exam Fee</label>
                </div>
              </div>
              <div className="flex flex-row mt-[2px]">
                <div className="text-xs font-calibri font-bold  mt-[5px]">
                  <Checkbox
                    size="sm"
                    radius="none"
                    name="OverrideExamFeeWaiver"
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    onChange={(e) => {
                      handleManualCheck(e);
                    }}
                  />
                  <label> Override Exam Fee waiver</label>
                </div>
              </div>
              <div className="flex flex-row mt-[2px] mb-1 ">
                <div
                  className="text-xs font-calibri font-bold  text-left mt-[6px]"
                  data-testid="contactNumber"
                >
                  Contact Number
                </div>
                <div className="w-[80%] text-xs font-calibri ml-2 mr-1">
                  <Input
                    size="sm"
                    name="contactNumber"
                    value={
                      contactNumber.toString() === "0"
                        ? ""
                        : contactNumber.toString()
                    }
                    type="number"
                    variant="bordered"
                    radius="none"
                    onChange={(e) => {
                      handleContactNumber(e);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 ">
            <div
              className="text-xs font-calibri font-bold  mt-[2px]"
              data-testid="remarks"
            >
              Remarks
            </div>
            <div className="w-[85%] text-xs font-calibri ml-[25px]">
              <Input
                size="sm"
                variant="bordered"
                name="remarks"
                radius="none"
                value={remarks}
                onChange={(e) => {
                  handleRemarks(e);
                }}
              />
            </div>
          </div>
        </div>
      )}
      {mode === "v" && (
        <div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid grid-col-7 grid-flow-row whitespace-nowrap">
              <div className="flex flex-row ">
                <div className="text-xs font-calibri font-bold mt-[5px]">
                  Appointment No.
                </div>
                <div className="w-[85%] text-md text-left ml-2">
                  {appointmentDetails?.appointmentNumber}
                </div>
              </div>
              <div className="flex flex-row mt-[15px]">
                <div className="text-xs font-calibri font-bold ">Center </div>
                <div className="w-[85%] text-xs font-calibri text-left ml-[62px]">
                  {appointmentDetails?.centreCode}
                </div>
              </div>
              <div className="flex flex-row mt-[15px]">
                <div className="text-xs font-calibri font-bold">Date </div>
                <div className="w-[85%] text-xs font-calibri text-left ml-[72px]">
                  {appointmentDetails?.appointmentCreateDateTime
                    ? dayjs(
                        appointmentDetails?.appointmentCreateDateTime
                      ).format("DD/MM/YYYY")
                    : ""}
                </div>
              </div>
              <div className="flex flex-row mt-[15px]">
                <div className="text-xs font-calibri font-bold">
                  Primary Exam
                </div>
                <div className="text-xs font-calibri text-left ml-[27px]">
                  {appointmentDetails?.primaryExamCode}
                </div>
              </div>
              <div className="flex flex-row mt-[15px]">
                <div className="text-xs font-calibri font-bold">
                  Free of Charge
                </div>
                <div className="text-xs font-calibri ml-[25px]">
                  {appointmentDetails?.freeOfChargeIndicator}
                </div>
              </div>
              <div className="flex flex-row mt-[15px]">
                <div className="text-xs font-calibri font-bold">Exam Fee </div>
                <div className="text-xs font-calibri ml-[50px]">
                  {appointmentDetails?.examFee}
                </div>
              </div>
              <div className="flex flex-row mt-[15px]">
                <div className="text-xs font-calibri font-bold">
                  Fee Waiver{" "}
                </div>
                <div className="text-xs font-calibri ml-[42px]">
                  {appointmentDetails?.feeWaiver}
                </div>
              </div>
              <div className="flex flex-row mt-[15px]">
                <div className="text-xs font-calibri font-bold">
                  Contact Person{" "}
                </div>
                <div className=" text-xs font-calibri ml-[23px]">
                  {appointmentDetails?.appointmentContactName}
                </div>
              </div>
              <div className="flex flex-row mt-[15px]">
                <div className="text-xs font-calibri font-bold">Remarks </div>
                <div className="text-xs font-calibri ml-[55px]">
                  {appointmentDetails?.appointmentRemark}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row mt-9">
                <div className="text-xs font-calibri font-bold">Lane</div>
                <div className="text-xs font-calibri ml-[101px]">
                  {appointmentDetails?.lane}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="text-xs font-calibri font-bold">Time </div>
                <div className="text-xs font-calibri ml-[100px]">
                  {appointmentDetails?.appointmentCreateDateTime
                    ? dayjs(
                        appointmentDetails?.appointmentCreateDateTime
                      ).format("HH:mm")
                    : ""}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="text-xs font-calibri font-bold">
                  Supplementary Exam{" "}
                </div>
                <div className="text-xs font-calibri ml-5">
                  {appointmentDetails?.supplementaryExamCode}
                </div>
              </div>
              <div className="flex flex-row mt-[92px]">
                <div className="text-xs font-calibri font-bold">
                  Contact Number{" "}
                </div>
                <div className="text-xs font-calibri ml-[45px]">
                  {appointmentDetails?.appointmentContactNumber}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <AuthorizationPopup
        allowOverBook={allowOverBook}
        setAllowOverBook={setAllowOverBook}
      /> */}
    </div>
  );
}

export default AppointmentInfo;
AppointmentInfo.propTypes = {
  getApiReq: PropTypes.func,
  mode: PropTypes.string,
  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object,
};
