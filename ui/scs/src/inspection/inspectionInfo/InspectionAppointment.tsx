import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { Chip } from "@nextui-org/react";
import { ICreateAppointmentInitialState } from "../../createAppointment/model/createAppointmentSliceModel";

function AppointmentInfo() {
  const { examDetails } = useSelector(
    (state: { createAppointment: ICreateAppointmentInitialState }) =>
      state.createAppointment
  );
  const appointInformation = useSelector(
    (state) => state.timeExamSlot.appointInfo
  );
  const selectedDateTime = useSelector(
    (state) => state.timeExamSlot.selectedDate
  );

  const validDateTime = selectedDateTime
    ? dayjs(selectedDateTime).format("DD/MM/YYYY")
    : dayjs(examDetails.examDate).format("DD/MM/YYYY");
  console.log("selectedDateTime", validDateTime);

  const saveSelectedTime = useSelector(
    (state) => state.timeExamSlot.selectedTime
  );

  return (
    <div className="p-2">
      <div>
        {/* {appointInformation.appointmentNumber === "" ||
        appointInformation.appointmentNumber === undefined ? (
          <div className="flex transition-timing-function: cubic-bezier(0.4, 0, 1, 1) p-2 ...">
            <div>
              <Chip color="default" radius="full">
                <div className="text-center">Network not reachable</div>
              </Chip>
            </div>
          </div>
        ) : ( */}
          <div className="grid grid-cols-2 gap-3">
            <div className="grid grid-col-7 grid-flow-row whitespace-nowrap">
              <div className="flex flex-row ">
                <div className="text-[11px] font-bold font-[unset] mt-[3px]">
                  Appointment No.{" "}
                </div>
                <div className="w-[85%] text-[11px] text-left ml-2 mt-[3px]">
                  {appointInformation.appointmentNumber}
                </div>
              </div>
              <div className="flex flex-row mt-[12px]">
                <div className="text-[11px] font-bold font-[unset]">
                  Center{" "}
                </div>
                <div className="w-[85%] text-[11px] text-left ml-16">
                  {appointInformation.centreCode}
                </div>
              </div>
              <div className="flex flex-row mt-[12px] ">
                <div className="text-[11px] font-bold font-[unset] ">Date </div>
                <div className="w-[85%] text-[11px] text-left ml-[76px]">
                  {dayjs(appointInformation.appointmentDate).format(
                    "DD/MM/YYYY"
                  )}
                </div>
              </div>
              <div className="flex flex-row mt-[12px]">
                <div className="text-[11px] font-bold font-[unset]">
                  Primary Exam
                </div>
                <div className="text-[11px] text-left ml-[27px]">
                  {appointInformation.primaryExamCode}
                </div>
              </div>

              <div className="flex flex-row mt-[12px]">
                <div className="text-[11px] font-bold font-[unset] ">
                  Contact Person{" "}
                </div>
                <div className=" text-[11px] ml-5">
                  {appointInformation.contactPerson}
                </div>
              </div>
              <div className="flex flex-row mt-[12px]">
                <div className="text-[11px] font-bold font-[unset]">
                  Remarks{" "}
                </div>
                <div className="text-[11px] ml-14">
                  {appointInformation.remarks}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row mt-[30px]">
                <div className="text-[11px] font-bold font-[unset]">Lane</div>
                <div className="text-[11px] ml-[105px]">
                  {appointInformation.laneId}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="text-[11px] font-bold font-[unset]">Time </div>
                <div className="text-[11px] ml-[105px]">{saveSelectedTime}</div>
              </div>
              <div className="flex flex-row">
                <div className="text-[11px] font-bold font-[unset] ">
                  Supplementary Exam{" "}
                </div>
                <div className="text-[11px] ml-5">
                  {appointInformation.supplementaryExamCode}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="text-[11px] font-bold font-[unset]">
                  Contact Number{" "}
                </div>
                <div className="text-[11px] ml-12">
                  {appointInformation.contactNumber}
                </div>
              </div>
            </div>
          </div>
        {/* )} */}
      </div>
    </div>
  );
}

export default AppointmentInfo;
