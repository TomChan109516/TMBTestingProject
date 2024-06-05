import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Select,
  SelectItem,
} from "@nextui-org/react";
import {
  saveExaminationCentres,
  saveLoader,
} from "../login/state/loginSlice"
import { useDispatch } from "react-redux";
import { getCenters } from "../login/service/login.service";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import PaymentReconciliationReport from "./PaymentReconciliationReport";


type CentreData = {
  centerId: string;
  centerName: string;
};

const VehicleClassData = [
  { id: 3, label: "001", value: "001", isChecked: true },
  { id: 4, label: "003", value: "003", isChecked: true },
  { id: 4, label: "12", value: "12", isChecked: true },
  { id: 5, label: "12S", value: "12S", isChecked: true },
  { id: 6, label: "13", value: "13", isChecked: true },
  { id: 7, label: "14", value: "14", isChecked: true },
  { id: 8, label: "15", value: "15", isChecked: true },
  { id: 9, label: "16", value: "16", isChecked: true },
  { id: 10, label: "17", value: "17", isChecked: true },
  { id: 11, label: "18", value: "18", isChecked: true },
  { id: 12, label: "19", value: "19", isChecked: true },
  { id: 13, label: "1SE", value: "1SE", isChecked: true },
  { id: 14, label: "1TA", value: "1TA", isChecked: true },
  { id: 15, label: "1V1", value: "1V1", isChecked: true },
  { id: 16, label: "1V2", value: "1V2", isChecked: true },
  { id: 17, label: "20", value: "20", isChecked: true },
  { id: 18, label: "DB", value: "DB", isChecked: true },
];

const ExamCodeData = [
  { id: 3, label: "001", value: "001", isCheckedExamCode: true },
  { id: 4, label: "003", value: "003", isCheckedExamCode: true },
  { id: 4, label: "12", value: "12", isCheckedExamCode: true },
  { id: 5, label: "12S", value: "12S", isCheckedExamCode: true },
  { id: 6, label: "13", value: "13", isCheckedExamCode: true },
  { id: 7, label: "14", value: "14", isCheckedExamCode: true },
  { id: 8, label: "15", value: "15", isCheckedExamCode: true },
  { id: 9, label: "16", value: "16", isCheckedExamCode: true },
  { id: 10, label: "17", value: "17", isCheckedExamCode: true },
  { id: 11, label: "18", value: "18", isCheckedExamCode: true },
  { id: 12, label: "19", value: "19", isCheckedExamCode: true },
  { id: 13, label: "1SE", value: "1SE", isCheckedExamCode: true },
  { id: 14, label: "1TA", value: "1TA", isCheckedExamCode: true },
  { id: 15, label: "1V1", value: "1V1", isCheckedExamCode: true },
  { id: 16, label: "1V2", value: "1V2", isCheckedExamCode: true },
  { id: 17, label: "20", value: "20", isCheckedExamCode: true },
  { id: 18, label: "DB", value: "DB", isCheckedExamCode: true },
];
function PaymentReport() {
  const dispatch = useDispatch();


  const [centreData, setCenterData] = useState<CentreData[]>([]);
  const [centerId, setCenterId] = useState<Set<string>>(new Set([]));
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [apiErrorData, setApiErrorData] = useState<string>("")
  const [allChecked, setAllChecked] = useState(true);
  const [checkedList, setCheckedList] = useState(VehicleClassData);

  const onAllCheckboxChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (allChecked) {
      setAllChecked(false);
      VehicleClassData.map((data) => (data.isChecked = false));
      setCheckedList(VehicleClassData);
    } else {
      setAllChecked(true);
      VehicleClassData.map((data) => (data.isChecked = true));
      setCheckedList(VehicleClassData);
    }
  };

  const handleCheckboxChange = (id: number) => {
    const updatedCheckedList = checkedList.map((data) => {
      if (data.id === id) {
        data.isChecked = !data.isChecked;
      }
      return data;
    });
    setCheckedList(updatedCheckedList);
  };

  const [allCheckedExamCode, setallCheckedExamCode] = useState(true);
  const [checkedListExamCode, setcheckedListExamCode] = useState(ExamCodeData);
  const onAllCheckboxChangedExamCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (allCheckedExamCode) {
      setallCheckedExamCode(false);
      ExamCodeData.map((data) => (data.isCheckedExamCode = false));
      setcheckedListExamCode(ExamCodeData);
    } else {
      setallCheckedExamCode(true);
      ExamCodeData.map((data) => (data.isCheckedExamCode = true));
      setcheckedListExamCode(ExamCodeData);
    }
  };
  const handleCheckboxChangeExamCode = (id: number) => {
    const updatedCheckedListExamCodeData = checkedListExamCode.map((data) => {
      if (data.id === id) {
        data.isCheckedExamCode = !data.isCheckedExamCode;
      }
      return data;
    });
    setcheckedListExamCode(updatedCheckedListExamCodeData);
  };

  const handleCenterData = async (event: ChangeEvent<HTMLSelectElement>) => {
    setCenterId(new Set(event.target.value.split(",")));
  };

  const loadCentres = useCallback(async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getCenters();
      setCenterData(response);
      dispatch(saveExaminationCentres(response));
      dispatch(saveLoader(false));
    } catch (error) {
      setShowApiError(true);
      dispatch(saveLoader(false));
      if (!error.response) {
        setShowApiError(true);
        setApiErrorData("Server Error");
      } else {
        if (error.response.status === 401) {
          setApiErrorData(error.message);
        } else if (error.response.status === 500) {
          setApiErrorData("500 - Internal Error");
        } else {
          setApiErrorData(error.response.status);
        }
      }
    }
  }, [dispatch]);

  useEffect(() => {
    loadCentres();
  }, [loadCentres]);

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };

  return (
    <div >
      <div className="flex items-left text-[#00AF8F] p-[10px]  font-bold text-sm font-[Calibri] ">
        Payment Report
      </div>
      <div className="  mt-3 ">
        <h1 className="h-[250px]    mr-2 ml-2  ">
          <h5 className="absolute -top-3 start-3 pl-[10px] pr-[10px] text-[13px] text-[#00AF8F] font-[Calibri] ">
            Searching Criteria
          </h5>
          <div className="grid grid-cols-2  row-3 gap-2 mt-[13px] text-[12px] font-bold font-[Calibri] w-[100%]  ">
            <div className="grid grid-rows-3 h-[100px] grid-flow-col ml-6">
              <div className="flex flex-row items-center">
                <div className="w-[5%] text-left">Centre</div>
                <div className="w-[95%] ml-[30px]">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    placeholder="Select"
                    selectedKeys={centerId}
                    onChange={(e) => {
                      handleCenterData(e);
                    }}
                    className="w-[85%] bg-white ml-[17px]"
                  >
                    {centreData?.map((center) => (
                      <SelectItem
                        key={center?.centerId}
                        value={center.centerId}
                        className="text-xs"
                      >
                        {center?.centerId}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center mt-1">
                <div className="w-[15%] text-left">Vehicle Class</div>
                <div className=" w-[15%]">
                  <div className="flex flex-row">

                    <Checkbox
                      size="sm"
                      radius="none"
                      className="pl-2 ml-4 rounded-sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                      isSelected={allChecked}
                      value="ALL"
                      onChange={onAllCheckboxChanged}
                    >
                      ALL
                    </Checkbox>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center mt-1 pr-[10px] w-[97%] ">
                <div className="flex grow border border-[lightgray]   mt-[75px]  " >
                  <div className="grid grid-cols-5 overflow-y-scroll h-[100px] w-[100%]">
                    {checkedList.map((data) => (
                      <Checkbox
                        key={data.id}
                        isSelected={data.isChecked}
                        value={data.value}
                        radius="none"
                        size="sm"
                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                        className="rounded-sm m-[px]"
                        onChange={() => handleCheckboxChange(data.id)}
                      >
                        {data.label}
                      </Checkbox>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid  grid-flow-col">
              <div className="grid grid-rows-3 h-[90px] grid-flow-col ml-6 mt-[px]">
                <div className="flex flex-row items-center">
                  <div className="w-[15%] text-left">Transaction Date</div>
                 <div className="flex flex-row  mt-2 w-[85%] ml-[20px]">
                    <div className="inline-flex border border-solid border-[lightgray] w-[42%] ml-[px] h-8">
                      <CalendarEvent color="grey" size="25" />
                      <DatePicker
                        name="fromDate"
                        selected={fromDate}
                        onChange={handleFromDateChanged}
                        className="text-[12px] p-[2px] w-[140%] selection:border-none mt-1"
                      />
                    </div>
                    <div className="w-[10%] ml-[5px]">  To </div>
                    <div className=" inline-flex border border-solid border-[lightgray] w-[42%]  mr-1 h-8">
                      <CalendarEvent color="grey" size="25" />
                      <DatePicker
                        name="toDate"
                        selected={toDate}
                        onChange={handleToDateChanged}
                        className="text-[12px] p-[px] w-[140%] mt-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-3">
                  <div className="w-[15%] text-left">Exam Code</div>
                  <div className=" w-[15%]">
                    <div className="flex flex-row ">

                      <Checkbox
                        size="sm"
                        radius="none"
                        className="pl-2 ml-4 rounded-sm"
                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                        isSelected={allCheckedExamCode}
                        value="ALL"
                        onChange={onAllCheckboxChangedExamCode}
                      >
                        ALL
                      </Checkbox>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-1 pr-[10px] w-[97%] ">
                <div className="flex grow border border-[lightgray]   mt-[90px]   " >
                  <div className="grid grid-cols-5 overflow-y-scroll h-[100px] w-[100%]">
                      {checkedListExamCode.map((data) => (
                        <Checkbox
                          key={data.id}
                          isSelected={data.isCheckedExamCode}
                          value={data.value}
                          radius="none"
                          size="sm"
                          classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                          className="rounded-sm m-[px]"
                          onChange={() => handleCheckboxChangeExamCode(data.id)}
                        >
                          {data.label}
                        </Checkbox>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 " >
            <div className="flex justify-end  font-bold gap-1  ">
              <Button
                className={`bg-[#00af8f] text-white rounded-sm mr-5 mt-4`}
                variant="bordered"
                size="sm"
                type="submit"
              >
                Generate
              </Button>
            </div>
          </div>
        </h1>
      </div>
      <PaymentReconciliationReport />
    </div>
  );
}
export default PaymentReport;