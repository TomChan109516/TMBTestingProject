import dayjs from "dayjs";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Chip, Input } from "@nextui-org/react";
import AmendExam from "./AmendExam";
import { saveAmendDetailsData } from "../state/enquiryAppointmentSlice";

function AmendAppoitmentDetails(props) {
  const dispatch = useDispatch();
  const appointInfo = useSelector(
    (state) => state.enquiryAppointment.enquiryAppointmentInfo
  );
  const [appointInformation, setAppointInfo] = useState(appointInfo);

  useEffect(() => {
    console.log("json data = = = =   " + JSON.stringify(appointInformation));
  }, []);

  const updatePrimaryCode = (code) => {
    props.updatePrimaryCode(code);
  };
  const updateSuppCode = (code) => {
    props.updateSuppCode(code);
  };
  const handleValueChange = ({ target: { name, value } }) => {
    setAppointInfo({ ...appointInformation, [name]: value });
    dispatch(saveAmendDetailsData(appointInformation));
  };
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
        ) : (
          <> */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1 whitespace-nowrap ml-2">
                <div className="flex flex-row mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset] ">
                    Appointment No.{" "}
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-10">
                    {appointInformation.appointmentNumber}
                  </div>
                </div>
                <div className="flex flex-row mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Security Code{" "}
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-[20%]">
                    -
                  </div>
                </div>
                <div className="flex flex-row mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Appointment Status{" "}
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-6">
                    {appointInformation.appointment_Status}
                  </div>
                </div>
                <div className="flex flex-row mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    No. of Reschedules{" "}
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-7">
                    {appointInformation.numberOfReschedules}-
                  </div>
                </div>
                <div className="flex flex-row mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Center{" "}
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-[33%]">
                    {appointInformation.centreCode}
                  </div>
                </div>
                <div className="flex flex-row  mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset] ">
                    Date{" "}
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-[37%]">
                    {dayjs(appointInformation.appointmentDate).format(
                      "DD/MM/YYYY"
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row mt-[2px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Transaction Date
                  </div>
                  <div className="text-[11px] ml-10">-</div>
                </div>
                <div className="flex flex-row mt-[2px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Booking Channel
                  </div>
                  <div className="text-[11px] ml-9">
                    {appointInformation.bk_Chnl_Name}
                  </div>
                </div>
                <div className="flex flex-row mt-[2px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Hold Timeslot
                  </div>
                  <div className="text-[11px] ml-[20%]"> - </div>
                </div>
                <div className="flex flex-row mt-[2px]">
                  <div className="text-[11px] font-bold font-[unset]">Lane</div>
                  <div className="text-[11px] ml-[36%]">
                    {appointInformation.laneId}
                  </div>
                </div>
                <div className="flex flex-row mt-[2px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Time{" "}
                  </div>
                  <div className="text-[11px] ml-[36%]">
                    {dayjs(appointInformation.appointmentDate).format("HH:MM")}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 w-100">
              <div className="flex flex-row mt-[5px]">
                <AmendExam
                  updatePrimaryCode={updatePrimaryCode}
                  updateSuppCode={updateSuppCode}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 ml-2">
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <div className="flex flex-row mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset] ">
                    Free of Charge
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-[20%]">
                    {appointInformation.freeOfCharge}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <div className="flex flex-row mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset] ">
                    Exam Fee
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-6">
                    {appointInformation.examFee}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <div className="flex flex-row mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset] ">
                    Fee Wavier
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-6">
                    {appointInformation.feeWaiver}-
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-1 ml-2">
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <div className="flex flex-row mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset] ">
                    Inspection Status
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-6">-</div>
                </div>
                <div className="flex flex-row mt-[2px]">
                  <div className="text-[11px] font-bold font-[unset]">
                    Last Update{" "}
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-[19%]">
                    -
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <div className="flex flex-row mt-[1px]">
                  <div className="text-[11px] font-bold font-[unset] ">
                    Inspection Result
                  </div>
                  <div className="w-[85%] text-[11px] text-left ml-10">-</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 ml-2">
              <div className="flex flex-row ">
                <div className="text-[11px] font-bold font-[unset] mt-2">
                  Contact Person
                </div>
                <div className="w-[65%] text-[11px] text-left ml-2">
                  <Input
                    classNames={{ wrapper: "after:text-[10px]" }}
                    size="sm"
                    radius="sm"
                    variant="bordered"
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={appointInformation.contactPerson}
                    onChange={handleValueChange}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 whitespace-nowrap">
                <div className="flex flex-row">
                  <div className="text-[11px] font-bold font-[unset] mt-2">
                    Contact Number
                  </div>
                  <div className="w-[87%] text-[11px] text-left ml-3">
                    <Input
                      size="sm"
                      radius="sm"
                      variant="bordered"
                      name="contactNumber"
                      type="text"
                      id="contactNumber"
                      value={appointInformation.contactNumber}
                      onChange={handleValueChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 ml-2">
              <div className="flex flex-row mt-[5px]">
                <div className="text-[11px] font-bold font-[unset] mt-2">
                  Remarks
                </div>
                <div className="w-[85%] text-[11px] text-left ml-10">
                  <Input
                    size="sm"
                    radius="sm"
                    variant="bordered"
                    name="remarks"
                    value={appointInformation.remarks}
                    onChange={handleValueChange}
                    data-testid="input-test"
                  />
                </div>
              </div>
            </div>
          {/* </>
        )} */}
      </div>
    </div>
  );
}

export default AmendAppoitmentDetails;
AmendAppoitmentDetails.propTypes = {
  getApiReq: PropTypes.func,
  updatePrimaryCode: PropTypes.string,
  updateSuppCode: PropTypes.string,
};
