import { Checkbox, Chip, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import dayjs from "dayjs";
import React, {ChangeEvent,useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosGet } from "../../utils/axiosInstance";
import { saveAllLane } from "../../examinationTimeSlot/state/examTimeSlotSlice";
import { saveLoader } from "../../login/state/loginSlice";
import { GET_LANEALL } from "../../constants/urlConstants";
import { getLane } from "./service/reschedule.service";

interface LaneData {
  laneId: number;
  laneType: string;
  floor: string;
}
function RescheduleAppointmentInfo(props) {
  const dispatch = useDispatch();
  const { getApiReq, mode} = props;
  const [overBook, setOverBook] = useState<string>("N");
  const [laneData, setLaneData] = useState<LaneData[]>([]);
  const [manualCheck, setManualCheck] = useState<boolean>(false);
  const [remarks, setRemarks] = useState<string>("");
  const [selectedLane, setSelectedLane] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showApiError, setShowApiError] = useState(false);
  const [apiErrorData, setApiErrorData] = useState(false);
  const appointInfo = useSelector(
    (state) => state.enquiryAppointment.enquiryAppointmentInfo
  );
  const rescheduleAppointInfo = useSelector(
    (state) => state.enquiryAppointment.rescheduleAppointmentInfo
  );
  const vehicleInfo  = useSelector((state) => state.enquiryAppointment.enquiryVehicleInfo);
  const selectedDateTime = useSelector((state) => state.timeExamSlot.selectedDate)
  const saveSelectedTime = useSelector((state) => state.timeExamSlot.selectedTime)
  const loadLaneAll = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getLane();
      setLaneData(response);
      setSelectedLane(response[0].laneId);
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
  const formData = {
    appointmentNumber:appointInfo.appointmentNumber,
    appointmentDate:selectedDateTime,
    centreCode: appointInfo.center,
    remarks,
    laneId: selectedLane,
    vehicleId: vehicleInfo.vehicleId,
    isOverBooked: overBook,
  };
  useEffect(() => {
    if (appointInfo.examDate !== undefined) {
      convert();
    }
    loadLaneAll();
  }, []);

  useMemo(() => {
    if (getApiReq) {
      getApiReq(formData);
    }
  }, [remarks, selectedLane, selectedDateTime]);

  const convert = () => {
    const date = new Date(appointInfo.examDate);
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
  const handleRemarks = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRemarks(e.target.value);
  };
  const handleManualCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "manual") {
        setManualCheck(e.target.checked);
      }
    if (e.target.name === "overbook") {
      if (e.target.checked === true) {
        setOverBook("Y");
      }
      if (e.target.checked === false) {
        setOverBook("N");
      }
    }
  };
  return (
    <div className="p-3">
    {mode=== 'e' && (<div>
      <div className="flex flex-row">
        <div className="flex flex-col w-full">
          <div className="flex flex-row mt-2">
            <div className="text-xs font-bold font-[unset]">
              Primary Exam{" "}
            </div>
            <div className=" text-xs text-left ml-2">
              {appointInfo.primaryExamCode}
            </div>
          </div>
          <div className="flex flex-row mt-[14px] ">
            <div className="text-xs font-bold font-[unset] ">Center </div>
            <div className="w-[85%] text-xs text-left ml-2">
              {appointInfo.centreCode}
            </div>
          </div>
          <div className="flex flex-row mt-4 ">
            <div className="text-xs font-bold font-[unset] ">Date </div>
            <div className="w-[85%] text-xs text-left ml-2">
            {dayjs(selectedDateTime).format("DD/MM/YYYY")}
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div className="text-xs font-bold font-[unset] mt-[5px]">
              <Checkbox
                size="sm"
                radius="sm"
                name="overbook"
                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                onChange={(e) => {
                  handleManualCheck(e);
                }}
              />
              Allow Overbook
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row mt-2">
            <div className="text-xs font-bold font-[unset] ">
              Supplementary Exam{" "}
            </div>
            <div className="text-xs text-left ml-2">
              {appointInfo.supplementaryExamCode}
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="text-xs font-bold font-[unset] mt-[15px]">
              Lane{" "}
            </div>
            <div className="w-[40%] mt-[5px]">
              <Select
              labelPlacement="outside-left"
                size="sm"
                radius="none"
                name="lane"
                value={selectedLane}
                variant="bordered"
                isDisabled={!manualCheck}
                onChange={(e) => {
                  handleGetLanesData(e);
                }}
              >
                {laneData?.length > 0 &&
                  laneData.map((lane) => (
                    <SelectItem key={lane?.laneId} value={lane?.laneId}>
                      {lane?.laneId.toString()}
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
              <label className="text-xs">Manual</label>
            </div>
          </div>
          <div className="flex flex-row mt-[2px] ">
            <div className="text-xs font-bold font-[unset] ">Time </div>
            <div className="text-xs text-left ml-2"> {saveSelectedTime}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-[10px] ">
        <div className="text-[12px] font-bold font-[unset] mt-[2px]">
          Remarks{" "}
        </div>
        <div className="w-[85%] text-xs">
          <Textarea
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
      </div>)}
      {mode === "v" && (
        <div>
          {rescheduleAppointInfo?.appointmentNumber === "" ||
          rescheduleAppointInfo?.appointmentNumber === undefined ? (
            <div className="flex transition-timing-function: cubic-bezier(0.4, 0, 1, 1) p-2 ...">
              <div>
                <Chip color="default" radius="full">
                  <div className="text-center">Network not reachable</div>
                </Chip>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <div className="grid grid-col-7 grid-flow-row whitespace-nowrap">
                <div className="flex flex-row ">
                  <div className="text-[11px] font-bold font-[unset] mt-[5px]">
                    Appointment No.{" "}
                  </div>
                  <div className="w-[85%] text-md text-left ml-2">
                    {rescheduleAppointInfo.appointmentNumber}
                  </div>
                </div>
                <div className="flex flex-row mt-[15px]">
                  <div className="text-[11px] font-bold font-[unset]">Center </div>
                  <div className="w-[85%] text-[11px] text-left ml-16">
                    {rescheduleAppointInfo.centreCode}
                  </div>
                </div>
                <div className="flex flex-row mt-[15px] ">
                  <div className="text-[11px] font-bold font-[unset] ">Date </div>
                  <div className="w-[85%] text-[11px] text-left ml-[76px]">
                    {dayjs(rescheduleAppointInfo.appointmentDate).format("DD/MM/YYYY")}
                  </div>
                </div>
                <div className="flex flex-row mt-[15px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Primary Exam
                  </div>
                  <div className="text-[11px] text-left ml-[27px]">
                    {rescheduleAppointInfo.primaryExamCode}
                  </div>
                </div>
                <div className="flex flex-row mt-[15px]">
                  <div className="text-[11px] font-bold font-[unset] ">
                    Free of Charge
                  </div>
                  <div className="text-[11px] ml-6">
                    {rescheduleAppointInfo.freeOfCharge}
                  </div>
                </div>
                <div className="flex flex-row mt-[15px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Exam Fee{" "}
                  </div>
                  <div className="text-[11px] ml-[50px]">
                    {rescheduleAppointInfo.examFee}
                  </div>
                </div>
                <div className="flex flex-row mt-[15px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Fee Waiver{" "}
                  </div>
                  <div className="text-[11px] ml-[43px]">
                    {rescheduleAppointInfo.feeWaiver}
                  </div>
                </div>
                <div className="flex flex-row mt-[15px]">
                  <div className="text-[11px] font-bold font-[unset] ">
                    Contact Person{" "}
                  </div>
                  <div className=" text-[11px] ml-5">
                    {rescheduleAppointInfo.contactPerson}
                  </div>
                </div>
                <div className="flex flex-row mt-[15px]">
                  <div className="text-[11px] font-bold font-[unset]">Remarks </div>
                  <div className="text-[11px] ml-14">
                    {rescheduleAppointInfo.remarks}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row mt-[42px]">
                  <div className="text-[11px] font-bold font-[unset]">Lane</div>
                  <div className="text-[11px] ml-[105px]">
                    {rescheduleAppointInfo.laneId}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="text-[11px] font-bold font-[unset]">Time </div>
                  <div className="text-[11px] ml-[105px]">
                    {dayjs(rescheduleAppointInfo.appointmentDate).format("HH:mm")}
                    {/* {saveSelectedTime} */}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="text-[11px] font-bold font-[unset] ">
                    Supplementary Exam{" "}
                  </div>
                  <div className="text-[11px] ml-5">
                    {rescheduleAppointInfo.supplementaryExamCode}
                  </div>
                </div>
                <div className="flex flex-row mt-[100px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Contact Number{" "}
                  </div>
                  <div className="text-[11px] ml-[46px]">
                    {rescheduleAppointInfo.contactNumber}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RescheduleAppointmentInfo;
