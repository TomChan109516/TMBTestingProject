import { Button, Select, SelectItem } from "@nextui-org/react";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { CalendarEvent } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InspectionSchedulingSystemTable from "./InspectionSchedulingSystemTable";
import { getCenters } from "../login/service/login.service";
import { saveLoader } from "../login/state/loginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectPersoneLeavePopup from "./SelectPersoneLeavePopup";


type CentreData = {
  centerId: string;
  centerName: string;
};

function InspectionSchedulingSystem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [centreData, setCenterData] = useState<CentreData[]>([]);
  const [centerId, setCenterId] = useState<Set<string>>(new Set([]));
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [apiErrorData, setApiErrorData] = useState<string>("");
  const [showSelectPersoneLeavePopup, setShowSelectPersoneLeavePopup] = useState(false);
    

  const personeLeave = () => {
    setShowSelectPersoneLeavePopup(true);
  };

  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChanged = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };

  const handleCenterData = async (event: ChangeEvent<HTMLSelectElement>) => {
    setCenterId(new Set(event.target.value.split(",")));
  };

  const loadCentres = useCallback(async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getCenters();
      setCenterData(response);

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

  return (
    <div>
      <div className="ml-1 h-[470px]">
        <div className="flex items-left text-[#007F62] p-[10px]  font-bold text-md">
          Leave
        </div>
        <div className="mr-1">
          <h1>
            <h5 className="absolute -top mt-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Leave
            </h5>
            <div className="grid grid-cols-4 gap-4 pt-5 pr-2">
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <span className="text-[13px] text-black font-bold text-left pl-2 pt-2 w-1/6">
                    Centre
                  </span>
                  <span className="text-[13px] text-black text-left pl-5">
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
                      className="w-[498px] bg-white "
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
                  </span>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <span className="text-[13px] text-black font-bold text-left pl-2 pt-2 w-1/6">
                    User Name
                  </span>
                  <span className="text-[10.5px] text-black text-left pl-5">
                    <Select
                      labelPlacement="outside-left"
                      className="w-[498px]"
                      radius="none"
                      size="sm"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                      placeholder="Select"
                    >
                      <SelectItem className="text-[10px]"></SelectItem>
                    </Select>
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 pt-3 pr-2">
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <span className="text-[13px]  text-black font-bold text-left pl-2 pt-2 w-1/6">
                    Date
                  </span>
                  <span className="text-[13px] text-black text-left pl-4">
                    <div className="inline-flex border border-solid border-[lightgray] w-[498px] ml-[3px] h-8">
                      <CalendarEvent color="grey" size="25" className="mt-1" />
                      <DatePicker
                        name="fromDate"
                        selected={fromDate}
                        onChange={handleFromDateChanged}
                        className="text-[13px] p-[px]  selection:border-none mt-2"
                      />
                    </div>
                  </span>
                </div>
              </div>
              <div className="col-span-2 ...">
                <div className="flex flex-col-2  ...">
                  <span className="text-[13px] text-black font-bold text-left pl-2 pt-2 w-1/6">
                    Date To
                  </span>
                  <span className="text-[13px] text-black text-left pl-5">
                    <div className="inline-flex border border-solid border-[lightgray] w-[500px] ml-[px] h-8">
                      <CalendarEvent color="grey" size="25" className="mt-1" />
                      <DatePicker
                        name="fromDate"
                        selected={toDate}
                        onChange={handleToDateChanged}
                        className="text-[13px] p-[px]  selection:border-none mt-2"
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end  font-bold gap-2 mt-2 mr-4 mb-2">
              <Button
                type="button"
                className="bg-[#00AF8F] text-[#FFFFFF] rounded-sm text-[13px]"
                size="sm"
                radius="sm"
              >
                Delete
              </Button>
              <Button
                type="button"
                className="bg-[#00AF8F] text-[#FFFFFF] rounded-sm text-[13px]"
                size="sm"
                radius="sm"
              >
                Add By Month
              </Button>
              <Button
                type="button"
                className="bg-[#00AF8F] text-[#FFFFFF] rounded-sm text-[13px]"
                size="sm"
                radius="sm"
                onClick={personeLeave}
              >
                Add By Period
              </Button>
              {showSelectPersoneLeavePopup && (
                <SelectPersoneLeavePopup
                  showSelectPersoneLeavePopup={showSelectPersoneLeavePopup}
                  setShowSelectPersoneLeavePopup={
                    setShowSelectPersoneLeavePopup
                  }
                  title="PersoneLeave"
                />
              )}

              <Button
                type="button"
                className="bg-[#00AF8F] text-[#FFFFFF] rounded-sm text-[13px]"
                size="sm"
                radius="sm"
              >
                Search
              </Button>
            </div>
          </h1>
        </div>
        <InspectionSchedulingSystemTable
          check={undefined}
          checkFunc={undefined}
        />
      </div>
    </div>
  );
}
export default InspectionSchedulingSystem;
