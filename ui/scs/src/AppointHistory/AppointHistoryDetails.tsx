import React from "react";

export default function App() {
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
                  <div className="gird grid col-2">
                    <div className="grid col-span- 2">
                      <div className="grid grid-rows-10 px-8 grid-flow-col  gap-x-20  mt-[20px] items-start justify-start text-sm text-left ">
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Appointment No </b>
                          </div>
                          <div className="text-left">324909</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Booking Channel </b>
                          </div>
                          <div className="text-left">SCS</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Number of Reschedules </b>
                          </div>
                          <div className="pl-8 ...text-left">YES</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Date </b>
                          </div>
                          <div className="text-left">27/10/2023</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Primary Exam </b>
                          </div>
                          <div className="text-left">008</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Fee Charge </b>
                          </div>
                          <div className="text-left">No</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Fee Wavier </b>
                          </div>
                          <div className="text-left"></div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Created By User </b>
                          </div>
                          <div className="text-left">TKW</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Contact No </b>
                          </div>
                          <div className="text-left">12345</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Transaction Date </b>
                          </div>
                          <div className="text-left">27/10/2023 </div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Hold TimeSlot </b>
                          </div>
                          <div className="text-left"></div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Centre </b>
                          </div>
                          <div className="text-left">TY2</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Lane </b>
                          </div>
                          <div className="text-left">21</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Time </b>
                          </div>
                          <div className="text-left">13:25</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[100%] text-left">
                            <b>Supplementary Exam </b>
                          </div>
                          <div className="text-left"></div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Exam Fee </b>
                          </div>
                          <div className="text-left">0.00</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Created By System</b>
                          </div>
                          <div className="pl-8 ...text-left">SCS</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Contact Person </b>
                          </div>
                          <div className="text-left">sa</div>
                        </div>
                        <div className="flex flex-row  pt-[15px]">
                          <div className="w-[90%] text-left">
                            <b>Remarks</b>
                          </div>
                          <div className="text-left"></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid col-span- 2"></div>
                  </div>
                </div>
              </h1>
            </div>
            <div className="w-[50%] p-[5px] pr-2 ">
              <h1>
                <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                  Vehicle particular
                </h5>
                <div className="  max-h-[380px] h-[380px]overflow-x-hidden text-black">
                  <div className="grid grid-rows-4 px-8  grid-flow-col  gap-x-20  mt-[20px] items-start justify-start text-sm text-left">
                    <div className="flex flex-row pt-[15px]">
                      <div className="w-[90%] text-left">
                        <b>Vehicle Id</b>
                      </div>
                      <div className="text-left">564678</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="w-[90%] text-left">
                        <b>Vehicle Class</b>
                      </div>
                      <div className="text-left">030</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="w-[90%] text-left">
                        <b>Chassis No.</b>
                      </div>
                      <div className="text-left pl-5">ASDFTYG1234</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="w-[90%] text-left">
                        <b>T.A No.</b>
                      </div>
                      <div className="text-left">VVKRT5589</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="w-[90%] text-left">
                        <b>Reg. Mrak </b>
                      </div>
                      <div className="pl-8 ...text-left">WE5596</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="w-[90%] text-left">
                        <b>Sub Class</b>
                      </div>
                      <div className="text-left">L</div>
                    </div>
                    <div className="flex flex-row  pt-[15px]">
                      <div className="w-[90%] text-left">
                        <b>Doc No.</b>
                      </div>
                      <div className="text-left"></div>
                    </div>
                  </div>
                  <div className="grid col-span- 2"></div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
