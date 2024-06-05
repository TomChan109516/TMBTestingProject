import React from "react";
import { IconInfoCircle } from "@tabler/icons-react";
import TestModuleResult from "./TestModuleResult";
import InputInspectionInformation from "./InputInspectionInformation";
import StampInputCertificate from "./StampInputCertificate";
import CertificateInput from "./CertifcateInput";

export default function InputCertificateSearch() {
  return (
    <>
      <div>
        <div className="mb-3 ml-3">
          <div className="flex bg-[#f3f4f6] h-6">
            <IconInfoCircle
              size={18}
              strokeWidth={2}
              className="bg-[gray] text-white rounded-xl"
            />
            <span className="text-sm text-[gray] ml-1  font-[Calibri]">
              Inspection Status:Closed
            </span>
          </div>
        </div>
        <div className="mr-1 mt-3 ml-1">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-[Calibri] text-[#00AF8F] ">
              Appointment Information
            </h5>
            <div className="grid grid-cols-8 pt-4 pb-4 pr-1  pl-1gap-0  ">
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold font-[Calibri] text-left pl-2 pt-2">
                    Vehicle ID
                    <span className="ml-2 font-[Calibri] font-normal">
                      {"000328190"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold font-[Calibri] text-left pl-2 pt-2">
                    Vehicle Class
                    <span className="ml-2  font-[Calibri] font-normal">
                      {"001"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black  font-[Calibri] font-bold text-left pl-2 pt-2">
                    Chassis No.
                    <span className="ml-2 font-[Calibri] font-normal">
                      {" WDC1569432J673421"}
                    </span>
                  </div>
                </div>
              </div>
              <div className=" flex-row flex-shrink col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm  font-[Calibri] text-black font-bold text-left pl-2 pt-2">
                    Reg Mark
                    <span className="ml-1 text-sm  font-[Calibri] font-normal">
                      {"XXX000"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm font-[Calibri] text-black font-bold text-left pl-2 pt-2">
                    Appointment No.
                    <span className="ml-2 text-sm font-[Calibri]  font-normal">
                      {"112023000490"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold  font-[Calibri] text-left pl-2 pt-2">
                    Center(Lane)
                    <span className="ml-2 text-md  font-[Calibri] font-normal">
                      {"TY(11)"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold font-[Calibri] text-left pl-2 pt-2">
                    Exam Code
                    <span className="ml-2 text-md  font-[Calibri] font-normal">
                      008
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <div className="text-sm text-black font-bold font-[Calibri] text-left pl-2 pt-2">
                    Inspection Date
                    <span className="ml-2 text-sm font-[Calibri]  font-normal">
                      06/11/2023 09.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <InputInspectionInformation />
        <StampInputCertificate />
        <CertificateInput />
        <TestModuleResult />
      </div>
    </>
  );
}
