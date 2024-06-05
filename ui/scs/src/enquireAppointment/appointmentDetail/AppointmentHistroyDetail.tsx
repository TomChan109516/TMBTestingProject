import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import React from "react";

// const { appointmentEnquiryDetails } = useSelector((state) => state.enquiryAppointment);
export default function App() {
  const router = useNavigate();

  const handleClose = () => {
    router("/appointmentDetail");
  };
  return (
    <>
      <div>
        <div>
          <div className="flex">
            <div className="flex-initial text-[#0a923d] p-[10px] ml-[15px] font-bold text-sm">
              Appointment History Detail
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[50%] p-[5px] pl-2 ">
              <h1>
                <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                  Appointment Information
                </h5>
                <div className="min-h-[380px] max-h-[380px] h-[380px] overflow-x-hidden text-black">
                  {/* <div className="gird grid col-2"> */}
                  {/* <div className="grid col-span- 2"> */}
                  <div className="grid grid-rows-10 grid-flow-col gap-x-5 text-[12px] ml-3">
                    <div className="flex flex-row pt-[15px] ">
                      <div className="font-bold">Appointment No</div>
                      <div >324909</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Booking Channel</div>
                      <div className="ml-[27%]">SCS</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Number of Reschedules</div>
                      <div className="ml-[15%]">YES</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Date</div>
                      <div className="ml-[48%]">27/10/2023</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Primary Exam</div>
                      <div className="ml-[32%]">008</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Fee Charge</div>
                      <div className="ml-[36%]">No</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Fee Wavier</div>
                      <div className="ml-[37%]">-</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Created By User</div>
                      <div className="ml-[28%]">TKW</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Contact No</div>
                      <div className="ml-[37%]">12345</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Transaction Date</div>
                      <div className="ml-[27%]">27/10/2023 </div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Hold TimeSlot</div>
                      <div className="ml-[20%]">-</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Centre</div>
                      <div className="ml-[36%]">TY2</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Lane</div>
                      <div className="ml-[40%]">21</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Time</div>
                      <div className="ml-[40%]">13:25</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Supplementary Exam</div>
                      <div className="ml-[7%]">-</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Exam Fee</div>
                      <div className="ml-[30%]">0.00</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Created By System</div>
                      <div className="ml-[10%]">SCS</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Contact Person</div>
                      <div className="ml-[20%]">sa</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Remarks</div>
                      <div className="ml-[35%]">-</div>
                    </div>
                  </div>
                  {/* </div> */}
                  <div className="grid col-span- 2"></div>
                  {/* </div> */}
                </div>
              </h1>
            </div>
            <div className="w-[50%] p-[5px] pr-2 p-b ">
              <h1>
                <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                  Vehicle particular
                </h5>
                <div className="  max-h-[150px] h-[150px] overflow-x-hidden text-black">
                  <div className="grid grid-rows-4 pl-3 grid-flow-col  gap-x-20  text-[12px] ">
                    <div className="flex flex-row pt-[15px]">
                      <div className="font-bold">Vehicle Id</div>
                      <div className="ml-[22%]">564678</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Vehicle Class</div>
                      <div className="ml-[14%]">030</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Chassis No.</div>
                      <div className="ml-[16%]">ASDFTYG1234</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">T.A No.</div>
                      <div className="ml-[26%]">VVKRT5589</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Reg. Mark</div>
                      <div className="ml-[25%]">WE5596</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Sub Class</div>
                      <div className="ml-[25%]">L</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="font-bold">Doc No.</div>
                      <div className="ml-[30%]">-</div>
                    </div>
                  </div>
                </div>
              </h1>
            </div>
          </div>
          <div className="text-right pr-4">
            <Button
              className="bg-[#ffffff] rounded h-8"
              variant="bordered"
              type="submit"
              fond-bold
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
