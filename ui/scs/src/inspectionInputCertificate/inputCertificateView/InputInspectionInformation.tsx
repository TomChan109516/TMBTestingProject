import exp from "constants";
import React from "react";


export default function InputInspectionInformation() {
    return(
        <div className="mt-4">
        <div className="mr-1 mt-2 ml-1">
          <h1>
            <h5 className="absolute -top  start-3  font-[Calibri]  pl-[10px] pr-[10px] text-md text-[#00AF8F] ">
              Inspection Information
            </h5>
            <div className="grid grid-cols-4 pt-4 pb-4 pr-1  pl-1gap-0  ">
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold font-[Calibri] text-left pl-2 pt-2">
                    Date{" "}
                    <span className="ml-2 font-normal font-[Calibri] ">
                      {" "}
                      {"06/11/2023"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm  font-[Calibri] text-black font-bold text-left pl-2 pt-2">
                    Time{" "}
                    <span className="ml-2 font-normal font-[Calibri]">
                      {" "}
                      {"09:00"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm font-[Calibri]  text-black font-bold text-left pl-2 pt-2">
                    Lane{" "}
                    <span className="ml-2 font-normal font-[Calibri] ">
                      {" "}
                      {" 11"}
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex-row flex-shrink col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm  font-[Calibri]  text-black font-bold text-left pl-2 pt-2">
                    Reg Mark{" "}
                    <span className="ml-1 text-sm font-[Calibri]  font-normal">
                      {" "}
                      {"XXX000"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm  font-[Calibri]  text-black font-bold text-left pl-2 pt-2">
                    Input By{" "}
                    <span className="ml-2 text-xs font-normal"> {""}</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm font-[Calibri]  text-black font-bold text-left pl-2 pt-2">
                    Source <span className="text-[black]">*</span>
                    <span className="ml-2 text-md font-normal font-[Calibri] ">
                      {" "}
                      {"SCS"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </div>
      </div>
    )
}