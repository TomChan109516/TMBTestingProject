import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Selection,
} from "@nextui-org/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";

function TaxiBiAnnualDetail() {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const handleDateChange = (newValue: React.SetStateAction<Date>) => {
    setCurrentDate(newValue);
  };

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };
  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };
  return (
    <div>
      <div>
        <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-sm">
          Examination Schedule(Bi-annual) {">"} Detail
        </div>
        <div className="mt-[10px] ml-2 mr-2">
          <h1>
            <h5 className="absolute -top-[5px] start-3 pl-[10px] pr-[10px]  text-sm/[13px] text-[#00AF8F]">
              Schedule Information
            </h5>
            <div className="grid grid-cols-2 mb-2">
              <div className="grid grid-col-2 grid-flow-row whitespace-nowrap">
                <div className="flex flex-row mt-[20px] ml-[20px]">
                  <div className="text-sm text-black font-bold text-left w-[270px] ">
                    Annual Inspection Month
                  </div>
                  <div className="text-sm text-right ml-[40px] ">
                    {"09/2023"}
                  </div>
                </div>
                <div className="flex flex-row mt-[20px] ml-[20px]">
                  <div className="text-sm text-black font-bold text-left w-[270px]">
                    Bi-annual Inspection Month
                  </div>
                  <div className="text-sm text-right ml-[40px] ">
                    {"12/2023"}
                  </div>
                </div>
                <div className="flex flex-row mt-[20px] ml-[20px]">
                  <div className="text-sm text-black font-bold text-left w-[270px]">
                    Level
                  </div>
                  <div className="text-sm text-right ml-[40px] ">
                    {"Level 0 (AM: 48, PM: 38, Total: 1978)"}
                  </div>
                </div>
              </div>
              <div className="grid grid-col-2 grid-flow-row whitespace-nowrap">
                <div className="flex flex-row mt-[20px]">
                  <div className="text-sm text-black font-bold text-left w-[270px]">
                    Current No. of AI Appointment
                  </div>
                  <div className="text-sm text-right ml-[30px]">{"0"}</div>
                </div>
                <div className="flex flex-row mt-[20px]">
                  <div className="text-sm text-black font-bold text-left w-[270px]">
                    No. of Working Days
                  </div>
                  <div className="text-sm text-right ml-[30px]">{"23"}</div>
                </div>
                <div className="flex flex-row mt-[20px]">
                  <div className="text-sm text-black font-bold text-left w-[270px]">
                    Description
                  </div>
                  <div className="text-sm text-right ml-[30px]">{}</div>
                </div>
              </div>
            </div>
          </h1>
          <div className="flex justify-between mt-2">
            <div className="justify-start">
              <Button
                className="bg-white text-[black] border border-solid border-black rounded"
                radius="sm"
                size="sm"
                onClick={() => navigate("/taxibischedule")}
              >
                Back
              </Button>
            </div>
            <div className="justify-end">
              <Button
                className="bg-[#F0FFFF] text-[#3EB489] border-[#75c3a5] border border-solid rounded"
                radius="sm"
                size="sm"
                onClick={() => navigate("/editAnnualExam")}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 border-persianGreen ml-2 mr-2 mt-2 mb-2">
        <div className="mt-5">
          <div className="flex justify-between">
            <div className="flex justify-start border-2 border-greyBorder h-6 items-center mb-2 ml-4 text-sm w-[15%]">
              <i className="material-icons w-1 mr-2">date_range</i>
              <DatePicker
                className="w-[90%] text-left ml-4"
                selected={currentDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="flex justify-end text-sm w-[15%] font-bold mr-2">
              <span className="text-left pr-2">Total quota assigned: 1978</span>
            </div>
          </div>
          <div className="flex justify-start ml-4 items-center">
            <button
              className="border-2 border-greyBorder h-[30px] w-[30px] rounded-sm"
              onClick={handlePrevWeek}
            >
              {"<"}
            </button>
            <button
              className="border-2 border-greyBorder h-[30px] w-[30px] rounded-sm ml-2"
              onClick={handleNextWeek}
            >
              {">"}
            </button>
            <div className="flex items-center">
              <span className="text-sm ml-4">
                Note: Dates with BI booked are colored in{" "}
              </span>
              <div className="bg-[yellow] h-[15px] w-[27px] solid ml-2"></div>
            </div>
          </div>
        </div>
        <div className="mt-2 mb-2">
          <div className="w-[99%] grid grid-cols-8 bg-[#b0ddd2] p-[5px] ml-[6px] text-sm font-bold border-2 border-greyBorder">
            <div></div>
            <div>28/02(Mon)</div>
            <div>01/03(Tue)</div>
            <div>02/03(Wed)</div>
            <div>03/03(Thu)</div>
            <div>04/03(Fri)</div>
            <div className="text-danger">05/03(Sat)</div>
            <div className="text-danger">06/03(Sun)</div>
          </div>
          <table className="w-[99%] ml-[6px] text-sm">
            <thead className="bg-[#b0ddd2] p-[5px]">
              {/* <tr className="bg-[#b0ddd2] p-[5px] mb-2 border-2 border-greyBorder">
                <th className="bg-[#b0ddd2] p-[5px]" colSpan={2}></th>
                <th className="bg-[#b0ddd2] p-[5px]" colSpan={2}>
                  28/02(Mon)
                </th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px]" colSpan={2}>
                  01/03(Tue)
                </th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px]" colSpan={2}>
                  02/03(Wed)
                </th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px]" colSpan={2}>
                  03/03(Thu)
                </th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px]" colSpan={2}>
                  04/03(Fri)
                </th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px] text-danger" colSpan={2}>
                  05/03(Sat)
                </th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px] text-danger" colSpan={2}>
                  06/03(Sun)
                </th>
              </tr> */}
              <tr className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder ">
                <th className="bg-[#b0ddd2] p-[5px]">Session</th>
                <th className="bg-[#b0ddd2] p-[5px]">Timeslot</th>
                <th className="bg-[#b0ddd2] p-[5px]">R1</th>
                <th className="bg-[#b0ddd2] p-[5px]">R2</th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px]">R1</th>
                <th className="bg-[#b0ddd2] p-[5px]">R2</th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px]">R1</th>
                <th className="bg-[#b0ddd2] p-[5px]">R2</th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px]">R1</th>
                <th className="bg-[#b0ddd2] p-[5px]">R2</th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px]">R1</th>
                <th className="bg-[#b0ddd2] p-[5px]">R2</th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px]">R1</th>
                <th className="bg-[#b0ddd2] p-[5px]">R2</th>
                <th className="bg-[#b0ddd2] p-[5px]"></th>
                <th className="bg-[#b0ddd2] p-[5px]">R1</th>
                <th className="bg-[#b0ddd2] p-[5px]">R2</th>
              </tr>
            </thead>
            <tbody className="mt-3">
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">AM1</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  08:45 - 09:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8 rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">AM1</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  09:00 - 10:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">AM1</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  10:00 - 11:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">AM2</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  11:00 - 12:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    8
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">AM2</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  12:00 - 13:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">AM2</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  13:00 - 14:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
              </tr>
              <tr className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder ">
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
              </tr>

              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">PM1</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  14:00 - 15:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8 rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">PM1</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  15:00 - 16:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8 rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    9
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">PM1</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  16:00 - 17:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8 rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    1
                  </span>
                </td>
              </tr>

              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">PM2</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  17:00 - 18:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">PM2</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  18:00 - 19:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">PM2</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  19:00 - 20:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">PM2</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  20:00 - 21:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
              </tr>
              <tr className="border-2 border-greyBorder">
                <td className="border-2 border-greyBorder p-[5px]">PM2</td>
                <td className="border-2 border-greyBorder p-[5px]">
                  21:00 - 22:00
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder w-[1%]"></td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
                <td className="border-2 border-greyBorder p-[5px]">
                  <span className="bg-[#F0FFFF]  border-1 border-greyBorder pt-1 pb-1 pl-2 pr-8  rounded ">
                    0
                  </span>
                </td>
              </tr>
              <tr className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder ">
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  24
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder"></th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
                <th className="bg-[#b0ddd2] p-[5px] border-2 border-greyBorder">
                  19
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaxiBiAnnualDetail;
