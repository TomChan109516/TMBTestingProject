import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import PrintReport from "./PrintReport";

export default function Report(props) {

  const [showPrintReport, setshowPrintReport] = useState(props.showPrintReport);
  const handlePrintReport = () => {
    setshowPrintReport(true);
  };

  return (
    <>
      <div className="flex w-[100%] font-calibri mt-20 ml-10">
        <h1 className="w-[70%] mr-6 border-1 rounded-none border-darkGrey p-5">
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px]  text-innerInputTxt text-red">
            Report Generation
          </h5>
          <div className="border-2 border-darkGrey p-3 m-5">
            <Textarea
              variant="bordered"
              radius="none"
              placeholder=""
              className="max-w-xs mb-14 w-60 h-30"
              value="Exam Report No."
            />
            <div className="flex justify-between w-[100%] text-innerInputTxt text-start  mb-4">
              <div className="flex flex-col w-[33.3%] text-start">
                <p>
                  Exam. Date & Time{" "}
                  <span className="ml-6">17-10-2023 10:08</span>
                </p>
                <p>
                  Vehicle Reg.Mark{" "}
                  <span className="ml-8 font-bold">111210</span>
                </p>
                <p>
                  Year of Manufacture <span className="ml-4">2023</span>
                </p>
                <p>
                  Exam Code <span>008</span>
                </p>
                <p>
                  Axle Weight(t){" "}
                  <span className="ml-12">WT-1 ( / ) WT-2 ( / )</span>
                </p>
              </div>
              <div className="flex flex-col w-[20%] text-innerInputTxt text-start ">
                <p>
                  Lane No. <span className="ml-5">12</span>
                </p>
                <p>
                  Make <span className="ml-9">mm</span>
                </p>
                <p>
                  Model <span className="ml-8">Test</span>
                </p>
                <p>
                  Class <span className="ml-10 font-bold">001</span>
                </p>
              </div>
              <div className="flex flex-col w-[33.3%] text-innerInputTxt text-start ">
                <p>
                  Appointment No. <span className="ml-6">231017111157</span>
                </p>
                <p>
                  Chassis No/VIN <span className="ml-9 font-bold">11129</span>
                </p>
                <p>
                  Model Code. <span></span>
                </p>
                <p>
                  Type Approval No. <span className="ml-5">1</span>
                </p>
                <p>
                  PGVW<span></span>
                </p>
              </div>
            </div>
            <table className="w-full border-1 border-darkGrey border-collapse text-start">
              <tr className="text-start w-[100%]">
                <th className="text-popupHeading w-[40%] border-1 border-darkGrey">
                  ITEM
                </th>
                <th className="text-innerInputTxt w-[20%] border-1 border-darkGrey">
                  RESULTS
                </th>
                <th className="text-popupHeading w-[40%] border-1 border-darkGrey">
                  DEFECTS
                </th>
              </tr>
              <tr className="border-1 border-darkGrey">
                <td className="text-innerInputTxt border-1 border-darkGrey">
                  1. VISUAL INSPECTION
                </td>
                <td className="text-innerInputTxt border-1 border-darkGrey"></td>
                <td className="text-innerInputTxt border-1 border-darkGrey">
                  Rear axle broken
                </td>
              </tr>
            </table>
          </div>
        </h1>
        <div className="w-[15%]  ">
          <Input
            type="number"
            radius="none"
            label="Report Number"
            labelPlacement="outside"
            value="123798237470234"
            disabled
            variant="bordered"
            className="bg-darkwhite"
          />

          <div>
            <Button
              size="sm"
              className="bg-persianGreen font-bold text-white h-8 rounded w-[100%] m-2"
              radius="none"
              onClick={handlePrintReport}
            >
              Print Examination Report
            </Button>

            <Button
              size="sm"
              className="bg-persianGreen font-bold text-white h-8 rounded  w-[100%] m-2"
              radius="none"
            >
              Void Examination Report
            </Button>

          </div>
        </div>
      </div>
      {showPrintReport && (

        <PrintReport
          showPrintReport={showPrintReport}
          >
        </PrintReport>

      )}

    </>
  );
}
