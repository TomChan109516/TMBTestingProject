import { Button, Checkbox, Select, SelectItem } from "@nextui-org/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ExaminationSchedule from "./ExaminationSchedule";
import { axiosGet, axiosPost } from "../../utils/axiosInstance";
import dayjs from "dayjs";
import {
  GET_CENTRES_URI,
  SEARCH_EXAMINATION_SCHEDULE_API,
} from "../../constants/urlConstants";
import { useDispatch } from "react-redux";
import { saveSearchExaminationScheduleResponse } from "./state/centerSlice";
import { saveLoader } from "../../login/state/loginSlice";
import { ICentres } from "../../login/model/loginModel";

function ExaminationScheduleData() {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [centerData, setCenterData] = useState<ICentres[]>([]);
  const [center, setCenter] = useState<Set<string>>(new Set([]));
  const [checkRegular, setCheckRegular] = useState<boolean>(true);
  const dispatch = useDispatch();

  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };
  const handleCenterData = async (event: ChangeEvent<HTMLSelectElement>) => {
    setCenter(new Set(event.target.value.split(",")));
  };
  const loadCenterCodes = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await axiosGet(GET_CENTRES_URI);
      setCenterData(response);
      dispatch(saveLoader(false));
    } catch (error) {
      console.error("Center code error", error);
      dispatch(saveLoader(false));
    }
  };
  useEffect(() => {
    loadCenterCodes();
  }, []);

  const searchExamSchedule = async () => {
    const requestData = {
      type: [checkRegular ? "RGLR" : ""],
      ctr_Id: center.values().next().value,
      examScheduleStartDate: dayjs(fromDate).toISOString(),
      examScheduleEndDate: dayjs(toDate).toISOString(),
    };
    const response = await axiosPost(
      SEARCH_EXAMINATION_SCHEDULE_API,
      requestData
    );
    dispatch(saveSearchExaminationScheduleResponse(response));
  };
  return (
    <div>
      <div className="ml-1 h-[200px]">
        <div className="flex items-left text-[#007F62] p-[10px]  font-[Calibri] font-bold text-sm">
          Examination Schedule {">"} Search
        </div>
        <div className="mr-1">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-[Calibri] text-[#00AF8F]">
              Searching Criteria
            </h5>
            <div className="grid grid-cols-2  mt-[15px] ">
              <div className="grid grid-rows-2 h-[400 px] grid-flow-col ml-6">
                <div className="flex flex-row items-center mt-2">
                  <div className="w-[10%] text-left text-sm  font-[Calibri] font-bold">Centre</div>
                  <div className="ml-[10px] w-4/5 mt-1">
                    <Select
                      labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                      placeholder="Select"
                      selectedKeys={center}
                      onChange={(e) => {
                        handleCenterData(e);
                      }}
                    >
                      {centerData?.map((center) => (
                        <SelectItem
                          key={center?.centerId}
                          value={center.centerId}
                          className="font-[Calibri] text-sm"
                        >
                          {center?.centerId}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className=" mt-2 flex flex-row  ">
                  <div className=" font-[Calibri] text-sm text-left font-bold mt-1  w-[14%]"> Type </div>
                  <div className="flex w-full">
                    <Checkbox
                      classNames={{ wrapper: `after:bg-[#00AF8F] text-left  ` }}
                      size="sm"
                      radius="none"
                      isSelected={checkRegular}
                      onChange={(e) => setCheckRegular(e.target.checked)}
                      defaultSelected
                    >
                      Regular{" "}
                    </Checkbox>
                    <Checkbox
                      classNames={{ wrapper: `after:bg-[#00AF8F]  ml-[15px]` }}
                      size="sm"
                      radius="none"
                      defaultSelected
                    >
                      Override{" "}
                    </Checkbox>
                    <Checkbox
                      classNames={{ wrapper: `after:bg-[#00AF8F]   ml-[15px]` }}
                      size="sm"
                      radius="none"
                      defaultSelected
                    >
                      Bi-annual{" "}
                    </Checkbox>
                  </div>
                </div>
              </div>

              <div className=" flex flex-row  mt-4 whitespace-nowrap">
                <div className="w-[25%] text-sm text-left  font-[Calibri] font-bold">
                  Effective Period
                </div>
                <div className="inline-flex border border-solid border-[lightgray] font-[Calibri] w-[40%] ml-[30px] h-8">
                  <CalendarEvent color="grey" size="25" />
                  <DatePicker
                    name="fromDate"
                    selected={fromDate}
                    onChange={handleFromDateChanged}
                    className="text-sm p-[4px] w-full"
                  />
                </div>
                <div className="w-[10%] ml-[1px] font-[Calibri] font-bold"> To </div>
                <div className=" inline-flex border border-solid border-[lightgray] w-[40%] ml-[1px] font-[Calibri] mr-1 h-8">
                  <CalendarEvent color="grey" size="25" />
                  <DatePicker
                    name="toDate"
                    selected={toDate}
                    onChange={handleToDateChanged}
                    className="text-sm p-[4px] w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end mb-2 mr-1">
              <Button
                className={`bg-[#ffffff] text-[black] font-[Calibri] font-bold rounded-sm ml-1 border border-[lightgray] text-sm`} //white: '#fff'
                variant="flat"
                size="sm"
                // onClick={resetFunc}
              >
                Reset
              </Button>
              <Button
                className={`bg-[#00AF8F] text-[white] font-[Calibri] font-bold rounded-sm ml-1 text-sm`}
                variant="flat"
                size="sm"
                type="submit"
                onClick={searchExamSchedule}
              >
                Search
              </Button>
            </div>
          </h1>
        </div>
      </div>
      <div>
        <ExaminationSchedule />
      </div>
    </div>
  );
}

export default ExaminationScheduleData;
