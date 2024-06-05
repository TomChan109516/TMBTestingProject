import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { saveExaminationCentres, saveLoader } from "../login/state/loginSlice";
import { useDispatch } from "react-redux";
import { getCenters } from "../login/service/login.service";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";

type CentreData = {
  centerId: string;
  centerName: string;
};

const VehicleClassData = [
  { id: 1, label: "001", value: "001", isChecked: true },
  { id: 2, label: "003", value: "003", isChecked: true },
  { id: 3, label: "004", value: "004", isChecked: true },
  { id: 4, label: "005", value: "005", isChecked: true },
  { id: 5, label: "006", value: "006", isChecked: true },
  { id: 6, label: "007", value: "007", isChecked: true },
  { id: 7, label: "011", value: "011", isChecked: true },
  { id: 8, label: "012", value: "012", isChecked: true },
  { id: 9, label: "013", value: "013", isChecked: true },
  { id: 10, label: "014", value: "014", isChecked: true },
  { id: 11, label: "015", value: "015", isChecked: true },
  { id: 12, label: "020", value: "020", isChecked: true },
  { id: 13, label: "030", value: "030", isChecked: true },
  { id: 14, label: "031", value: "031", isChecked: true },
  { id: 15, label: "032", value: "032", isChecked: true },
  { id: 16, label: "033", value: "033", isChecked: true },
  { id: 17, label: "034", value: "034", isChecked: true },
  { id: 18, label: "035", value: "035", isChecked: true },
  { id: 19, label: "036", value: "036", isChecked: true },
  { id: 20, label: "037", value: "037", isChecked: true },
  { id: 21, label: "038", value: "038", isChecked: true },
];

const ExamCodeData = [
  { id: 1, label: "001", value: "001", isChecked: true },
  { id: 2, label: "002", value: "002", isChecked: true },
  { id: 3, label: "002+023", value: "002+023", isChecked: true },
  { id: 4, label: "002+024", value: "002+024", isChecked: true },
  { id: 5, label: "002+035", value: "002+035", isChecked: true },
  { id: 6, label: "003", value: "003", isChecked: true },
  { id: 7, label: "003+011", value: "003+011", isChecked: true },
  { id: 8, label: "012", value: "012", isChecked: true },
  { id: 9, label: "013", value: "013", isChecked: true },
  { id: 10, label: "014", value: "014", isChecked: true },
  { id: 11, label: "015", value: "015", isChecked: true },
  { id: 12, label: "020", value: "020", isChecked: true },
  { id: 13, label: "030", value: "030", isChecked: true },
  { id: 14, label: "031", value: "031", isChecked: true },
  { id: 15, label: "032", value: "032", isChecked: true },
  { id: 16, label: "033", value: "033", isChecked: true },
  { id: 17, label: "034", value: "034", isChecked: true },
  { id: 18, label: "035", value: "035", isChecked: true },
  { id: 19, label: "036", value: "036", isChecked: true },
  { id: 20, label: "037", value: "037", isChecked: true },
  { id: 21, label: "038", value: "038", isChecked: true },
];
function ExceptionReport(){
  const dispatch = useDispatch();
  const [centreData, setCenterData] = useState<CentreData[]>([]);
  const [centerId, setCenterId] = useState<Set<string>>(new Set([]));
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [apiErrorData, setApiErrorData] = useState<string>("");
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

  const [allCheckedExamCode, setAllCheckedExamCode] = useState(true);
  const [checkedListExamCode, setCheckedListExamCode] = useState(ExamCodeData);
  const onAllCheckboxChangedExamCode = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (allCheckedExamCode) {
      setAllCheckedExamCode(false);
      ExamCodeData.map((data) => (data.isCheckedExamCode = false));
      setCheckedListExamCode(ExamCodeData);
    } else {
      setAllCheckedExamCode(true);
      ExamCodeData.map((data) => (data.isCheckedExamCode = true));
      setCheckedListExamCode(ExamCodeData);
    }
  };
  const handleCheckboxChangeExamCode = (id: number) => {
    const updatedCheckedListExamCodeData = checkedListExamCode.map((data) => {
      if (data.id === id) {
        data.isCheckedExamCode = !data.isCheckedExamCode;
      }
      return data;
    });
    setCheckedListExamCode(updatedCheckedListExamCodeData);
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
    <div>
      <div className="flex items-left text-[#00AF8F] p-[10px]  font-bold text-sm font-[Calibri] ">
        Exception Report
      </div>
      <div className="mt-3">
        <h1 className="h-[230px] mr-2 ml-2">
          <h5 className="absolute -top-3 start-3 pl-[10px] pr-[10px] text-[13px] text-[#00AF8F] font-[Calibri] ">
            Appointment Double Booking Report
          </h5>
          <div className="grid grid-cols-2 mt-[13px] text-sm font-bold font-[Calibri] w-[100%]">
            <div className="grid grid-rows-3 h-[100px] ml-6">
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
              <div className="flex flex-row items-center mt-3">
                <div className="w-[14%] text-left">Vehicle Class</div>
                <div className="flex flex-row">
                  <Checkbox
                    size="sm"
                    radius="none"
                    className="rounded-sm"
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    isSelected={allChecked}
                    value="ALL"
                    onChange={onAllCheckboxChanged}
                  >
                    ALL
                  </Checkbox>
                </div>
              </div>
              <div className="flex flex-row items-center mt-1 pr-[10px] w-[97%] ">
                <div className="flex grow border border-[lightgray] mt-[75px]  ">
                  <div className="grid grid-cols-7 overflow-y-scroll h-[100px] w-[100%]">
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
            <div className="grid grid-rows-3 h-[90px]">
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Schedule Date</div>
                <div className="flex flex-row w-[85%] ml-[20px] items-center">
                  <div className="inline-flex items-center border border-solid border-[lightgray] w-[42%] ml-[px] h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="fromDate"
                      selected={fromDate}
                      onChange={handleFromDateChanged}
                      className="w-[100%] selection:border-none"
                    />
                  </div>
                  <div className="w-[10%] ml-[5px]">To</div>
                  <div className="inline-flex items-center border border-solid border-[lightgray] w-[42%] h-8">
                    <CalendarEvent color="grey" size="25" />
                    <DatePicker
                      name="toDate"
                      selected={toDate}
                      onChange={handleToDateChanged}
                      className="w-[100%]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center mt-3">
                <div className="w-[13%] text-left">Exam Code</div>
                <div className="flex flex-row ">
                  <Checkbox
                    size="sm"
                    radius="none"
                    className="rounded-sm"
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    isSelected={allCheckedExamCode}
                    value="ALL"
                    onChange={onAllCheckboxChangedExamCode}
                  >
                    ALL
                  </Checkbox>
                </div>
              </div>
              <div className="flex flex-row items-center mt-1 pr-[10px] w-[100%] ">
                <div className="flex grow border border-[lightgray]   mt-[90px]   ">
                  <div className="grid grid-cols-7 overflow-y-scroll h-[100px] w-[100%]">
                    {checkedListExamCode.map((data) => (
                      <Checkbox
                        key={data.id}
                        isSelected={data.isCheckedExamCode}
                        value={data.value}
                        radius="none"
                        size="sm"
                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                        className="rounded-sm"
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
        </h1>
      </div>
      <div className="mt-5 text-sm">
        <div className="mr-2 mt-3 ml-2">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-[Calibri] text-[#00AF8F] ">
              New Bus With Standee is Registered On Road
            </h5>
            <div>
              <div className="flex flex-row items-center mt-3 ">
                <div className="w-[10%] text-left font-bold ml-5"> Date</div>
                <div className="flex flex-row justify-between items-center">
                  <div className="inline-flex mb-2 border-2 border-[lightgray] w-[300px]">
                    <CalendarEvent
                      size="28"
                      className="text-[gray]"
                    />
                    <DatePicker className="text-xs p-[4px] w-[100px] font-[Calibri]" />
                  </div>
                  <div className="text-center ml-5 mr-5">To</div>
                  <div className="inline-flex mb-2 border-2 border-[lightgray] w-[300px] h-8">
                    <CalendarEvent
                      size="28"
                      className="text-[gray]"
                    />
                    <DatePicker className="w-[100px] font-[Calibri]"/>
                  </div>
                </div>
              </div>
              <div>
                <div className="justify-end pb-10">
                  <Button
                    size="sm"
                    radius="none"
                    variant="shadow"
                    className="bg-[#00AF8F] float-right mr-[22px] text-white font-bold rounded-sm"
                  >
                    Generate
                  </Button>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className="mr-2 mt-3 ml-2">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-[Calibri] text-[#00AF8F] ">
              NF Bus With Standee is Registered On Road
            </h5>
            <div>
              <div className="flex flex-row items-center mt-3 ">
                <div className="w-[10%] text-left font-bold ml-5"> Date</div>
                <div className="flex flex-row justify-between items-center">
                  <div className="inline-flex mb-2 border-2 border-[lightgray] w-[300px]">
                    <CalendarEvent
                      size="28"
                      className="text-[gray]"
                    />
                    <DatePicker className="text-xs p-[4px] w-[100px] font-[Calibri]" />
                  </div>
                  <div className="text-center ml-5 mr-5">To</div>
                  <div className="inline-flex mb-2 border-2 border-[lightgray] w-[300px] h-8">
                    <CalendarEvent
                      size="28"
                      className="text-[gray]"
                    />
                    <DatePicker className="w-[100px] font-[Calibri]"/>
                  </div>
                </div>
              </div>
              <div>
                <div className="justify-end pb-10">
                  <Button
                    size="sm"
                    radius="none"
                    variant="shadow"
                    className="bg-[#00AF8F] float-right mr-[22px] text-white font-bold rounded-sm"
                  >
                    Generate
                  </Button>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className="mr-2 mt-3 ml-2">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-[Calibri] text-[#00AF8F] ">
              Bus Type Change Approval Report
            </h5>
            <div>
              <div className="flex flex-row items-center mt-3 ">
                <div className="w-[10%] text-left font-bold ml-5"> Date</div>
                <div className="flex flex-row justify-between items-center">
                  <div className="inline-flex mb-2 border-2 border-[lightgray] w-[300px]">
                    <CalendarEvent
                      size="28"
                      className="text-[gray]"
                    />
                    <DatePicker className="text-xs p-[4px] w-[100px] font-[Calibri]" />
                  </div>
                  <div className="text-center ml-5 mr-5">To</div>
                  <div className="inline-flex mb-2 border-2 border-[lightgray] w-[300px] h-8">
                    <CalendarEvent
                      size="28"
                      className="text-[gray]"
                    />
                    <DatePicker className="w-[100px] font-[Calibri]"/>
                  </div>
                </div>
              </div>
              <div>
                <div className="justify-end pb-10">
                  <Button
                    size="sm"
                    radius="none"
                    variant="shadow"
                    className="bg-[#00AF8F] float-right mr-[22px] text-white font-bold rounded-sm"
                  >
                    Generate
                  </Button>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className="mr-2 mt-3 ml-2">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-[Calibri] text-[#00AF8F] ">
              Bus Class Change Report
            </h5>
            <div>
              <div className="flex flex-row items-center mt-3 ">
                <div className="w-[10%] text-left font-bold ml-5"> Date</div>
                <div className="flex flex-row justify-between items-center">
                  <div className="inline-flex mb-2 border-2 border-[lightgray] w-[300px]">
                    <CalendarEvent
                      size="28"
                      className="text-[gray]"
                    />
                    <DatePicker className="text-xs p-[4px] w-[100px] font-[Calibri]" />
                  </div>
                  <div className="text-center ml-5 mr-5">To</div>
                  <div className="inline-flex mb-2 border-2 border-[lightgray] w-[300px] h-8">
                    <CalendarEvent
                      size="28"
                      className="text-[gray]"
                    />
                    <DatePicker className="w-[100px] font-[Calibri]"/>
                  </div>
                </div>
              </div>
              <div>
                <div className="justify-end pb-10">
                  <Button
                    size="sm"
                    radius="none"
                    variant="shadow"
                    className="bg-[#00AF8F] float-right mr-[22px] text-white font-bold rounded-sm"
                  >
                    Generate
                  </Button>
                </div>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default ExceptionReport;
