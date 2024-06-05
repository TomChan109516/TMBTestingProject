import dayjs from "dayjs";
import PropTypes from "prop-types";
import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";

function EnquiryAppointmentInfo(props) {
  const { mode } = props;

  const appointInfo = useSelector(
    (state) => state.enquiryAppointment.enquiryAppointmentInfo
  );

  const [showInput, setShowInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const cancelFeeWaiver = () => {
    setShowInput(true);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
console.log(appointInfo)
  return (
    <div className="p-2">
      <div className="grid grid-cols-2 gap-2">
        <div className="grid grid-col-14 grid-flow-row whitespace-nowrap">
          <div className="flex flex-row mt-[5px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]" data-testid="Appointment No.">
              Appointment No.

            </div>
            
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {appointInfo.appointmentNumber}
            </div>
          </div>
          <div className="flex flex-row mt-[10px] ">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Security Code
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">{}</div>
          </div>
          <div className="flex flex-row mt-[10px] ">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Appointment Status
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {appointInfo.appointment_Status}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Number of Reschedules
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {appointInfo.numberOfReschedules}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Centre
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {appointInfo.centreCode}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Date
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {dayjs(appointInfo.appointmentDate).format("DD/MM/YYYY")}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Primary Exam
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {appointInfo.primaryExamCode}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Free of Charge
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {appointInfo.freeOfCharge}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Exam Fee
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {appointInfo.examFee}
            </div>
          </div>
          <div className="flex flex-row mt-[10px] items-center">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Fee Waiver
            </div>
            <div className="text-xs text-left w-[20%] ml-[10px] items-center">
              {showInput ? (
                 <input
                 name="inputValue"
                 type="text"
                 className="w-[100%] h-[24px] border-1"
                 value={inputValue}
                 onChange={handleInputChange}
               />
              ) : (
                // <>{appointInfo.feeWaiver}</>
                <>{"VEF2019"}</>
              )} 
              <Button
                type="button"
                className="bg-[#00AF8F] text-[#FFFFFF] ml-4"
                size="sm"
                radius="sm"
                variant="bordered"
                data-testid="cancelButton"
                onClick={cancelFeeWaiver}
              >
                Cancel
              </Button>
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Inspection Status
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">{}</div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Last Update
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">{}</div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Contact Person
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {appointInfo.contactPerson}
            </div>
          </div>
          <div className="flex flex-row mt-[10px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]">
              Remarks
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]">
              {appointInfo.remarks}
            </div>
          </div>
        </div>

        <div className="grid grid-col-14 grid-flow-row whitespace-nowrap">
          <div className="flex flex-row mt-[5px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]  h-[18px]">
              Transaction Date
            </div>
            <div className="text-xs text-left w-[35%] ml-[10px]  h-[18px]">
              {}
            </div>
          </div>
          <div className="flex flex-row mt-[-6px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]  h-[18px]">
              Booking Channel
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]  h-[18px]">
              {appointInfo.bk_Chnl_Name}
            </div>
          </div>
          <div className="flex flex-row mt-[-2px] mb-8">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]  h-[18px]">
              Hold Timeslot{" "}
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]  h-[18px]">
              {}
            </div>
          </div>
          <div className="flex flex-row mt-[-6px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]  h-[18px]">
              Lane
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]  h-[18px]">
              {appointInfo.laneId}
            </div>
          </div>
          <div className="flex flex-row mt-[-2px]">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]  h-[18px]">
              Time
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]  h-[18px]">
            {dayjs(appointInfo.appointmentDate).format("HH:mm")}

            </div>
          </div>
          <div className="flex flex-row  mt-[-2px] mb-16">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]  h-[18px]">
              Supplementary Exam
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]  h-[18px]">
              {appointInfo.supplementaryExamCode}
            </div>
          </div>
          <div className="flex flex-row mt-[28px] mb-3">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]  h-[18px]">
              Inspection Result
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]  h-[18px]">
              {appointInfo.result}
            </div>
          </div>
          <div className="flex flex-row mt-[10px] mb-4">
            <div className="text-xs text-left font-bold font-[unset] w-[46%]  h-[18px]">
              Contact Number
            </div>
            <div className="text-xs text-left w-[30%] ml-[10px]  h-[18px]">
              {appointInfo.contactNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EnquiryAppointmentInfo;
