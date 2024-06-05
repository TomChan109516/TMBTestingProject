import { Button } from "@nextui-org/react";
import React from "react";

function InspectionInformation() {
  return (
    <div className="p-2">
      <div>
        <div className="grid grid-cols-2 gap-3">
          <div className="grid grid-col-7 grid-flow-row whitespace-nowrap">
            <div className="flex flex-row ">
              <div className="text-[11px] font-bold font-[unset] mt-[3px]">
                Date
              </div>
              <div className="w-[85%] text-[11px] text-left ml-2 mt-[3px]"></div>
            </div>
            <div className="flex flex-row mt-[12px]">
              <div className="text-[11px] font-bold font-[unset]">Lane</div>
              <div className="w-[85%] text-[11px] text-left ml-16"></div>
            </div>

            <div className="flex flex-row mt-[12px]">
              <div className="text-[11px] font-bold font-[unset] ">InputBy</div>
              <div className="text-[11px] ml-[22px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-[10px]">
            <div className="flex flex-row mt-[3px]">
              <div className="text-[11px] font-bold font-[unset]">Time</div>
              <div className="text-[11px] ml-[105px]"></div>
            </div>
            <div className="flex flex-row">
              <div className="text-[11px] font-bold font-[unset]">RegMark </div>
              <div className="text-[11px] ml-[105px]"></div>
            </div>
            <div className="flex flex-row">
              <div className="text-[11px] font-bold font-[unset] ">Source</div>
              <div className="text-[11px] ml-5"></div>
            </div>
          </div>
        </div>
        <div className="mt-[15px]">
          <Button
            radius="none"
            size="sm"
            className="float-right bg-white shadow-sm ml-2 rounded-sm  border-persianGreen border-solid border text-persianGreen"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InspectionInformation;
