import {
  Button,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Selection,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState, ChangeEvent } from "react";
import { SEARCHVEHICLE_WATCHLIST_API } from "../../constants/urlConstants";
import { axiosPost } from "../../utils/axiosInstance";
import VehicleWatchListTableData from "./VehicleWatchListTableData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import { saveVehicleWatchListResponse } from "./state/vehicleWatchListSlice";
import CancelWatchlist from "./CancelWatchlist";
import { useNavigate } from "react-router";

const columns = [
  { Header: "Class", key: "vhlClassId" },
  { Header: "Reg.Mark", key: "regMark" },
  { Header: "Chassis No.", key: "chassisNumber" },
  { Header: "Model", key: "model" },
  { Header: "Manu.Year", key: "manufactureYear" },
  { Header: "*PGV Weight", key: "pgvWeight" },
  { Header: "Reason", key: "whLst_Rsn_Key" },
  { Header: "Created Date", key: "createdDate" },
  { Header: "Created Centre", key: "center_Key" },
  { Header: "Cancelled Date", key: "" },
];

export function VehicleWatchlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkWatchList, setWatchList] = useState<boolean>(false);
  const [checkAlertList, setAlertList] = useState<boolean>(false);
  const [status, setStatus] = useState<Selection>(new Set([]));
  const [centre, setCentre] = useState<Selection>(new Set([]));
  const [vehicleClass, setVehicleClass] = useState<Selection>(new Set([]));
  const [reason, setReason] = useState<Selection>(new Set([]));
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cancelWatchColor, setCancelWatchColor] = useState<boolean>(false);

  const [isDateEnabled, setIsDateEnabled] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleDateCheckBox = () => {
    setIsDateEnabled(!isDateEnabled);
    if (!isDateEnabled) {
      setToDate(() => {
        const afterFourMonths = new Date();
        afterFourMonths.setMonth(afterFourMonths.getMonth() + 3);
        return afterFourMonths;
      });
      setFromDate(new Date("2023-10-14"));
    }
  };

  const handleFromDateChange = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };
  const handleToDateChange = (newValue: React.SetStateAction<Date>) => {
    setToDate(newValue);
  };

  const handleCheckbox = (checkboxName) => {
    if (checkboxName === "Watchlist") {
      setWatchList(!checkWatchList);
    } else if (checkboxName === "Alertlist") {
      setAlertList(!checkAlertList);
    }
  };

  const handleSearch = async () => {
    const searchWatchListData = {
      type: [
        checkWatchList ? "Watchlist" : "",
        checkAlertList ? "Alertlist" : "",
      ],
      createdDateFrom: isDateEnabled
        ? fromDate.toISOString().slice(0, 23).replace("T", " ")
        : null,
      createdDateTo: isDateEnabled
        ? toDate.toISOString().slice(0, 23).replace("T", " ")
        : null,
      center_Key: 0,
      status: "",
      rsn_Key: 0,
      vhlClassId: "",
    };
    searchWatchListData.type = searchWatchListData.type.filter(Boolean);
    const url = SEARCHVEHICLE_WATCHLIST_API;
    try {
      const response = await axiosPost(url, searchWatchListData);
      dispatch(saveVehicleWatchListResponse(response));
      if (response.length >= 1) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } catch (error) {
      console.error("Search Vehicle watchlist Error", error);
    }
  };

  const handleReset = () => {
    setStatus(new Set([]));
    setCentre(new Set([]));
    setVehicleClass(new Set([]));
    setReason(new Set([]));
    setFromDate("");
    setToDate("");
  };

  const handleExport = () => {};
  const handleCancelWatch = () => {
    setIsOpen(true);
  };

  const lanes = [{ value: "1" }, { value: "2" }, { value: "3" }];

  return (
    <div className="pt-[10px]">
      <div className="flex">
        <div className="flex-initial text-[#007F62] p-[10px] ml-[15px] font-bold text-sm">
          Vehicle {">"} Vehicle Watchlist
        </div>
      </div>
      <div>
        <div className="mt-[10px] ml-2 mr-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px]   text-sm/[13px] text-[#00AF8F]">
              Searching Criteria
            </h5>

            <div className="grid grid-cols-2 gap-2">
              <div className="grid grid-rows-4 grid-flow-col whitespace-nowrap">
                <div className="flex flex-col-2 pt-6">
                  <span className="text-[13.5px] text-black font-bold text-left pl-5 pt-1 w-[120px]">
                    Type{" "}
                  </span>
                  <span className="text-[10.5px] w-[520px] text-black text-left">
                    <div className="flex">
                      <div className="flex flex-col-2">
                        <span className="text-[10.5px] text-black  text-left  pt-1 w-[25px]">
                          <Checkbox
                            classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                            size="sm"
                            radius="none"
                            checked={checkWatchList}
                            onChange={() => handleCheckbox("Watchlist")}
                            data-testid={"Watch-list"}
                          />
                        </span>
                        <span className="text-[13.5px] text-black  text-left  pt-1 w-[80px]">
                          Watch-list
                        </span>
                      </div>
                      <div className="flex flex-col-2  ...">
                        <span className="text-[10.5px] text-black font-bold text-left  pt-1 w-[25px]">
                          <Checkbox
                            classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                            size="sm"
                            radius="none"
                            checked={checkAlertList}
                            onChange={() => handleCheckbox("Alertlist")}
                            data-testid={"Alert-list"}
                          />
                        </span>
                        <span className="text-[13.5px] text-black text-left  pt-1 w-[80px]">
                          Alert-list
                        </span>
                      </div>
                    </div>
                  </span>
                </div>

                <div className="flex flex-col-2  pt-2">
                  <span className="text-[13.5px] text-black font-bold text-left pl-5 pt-2 w-[100px]">
                    Status
                  </span>
                  <span className="text-[10.5px] text-black text-left pl-5">
                    <Select
                      labelPlacement="outside-left"
                      className="w-[485px]"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      name="center"
                      aria-label="center"
                      items={lanes}
                      data-testid={"Status"}
                      selectedKeys={status}
                      onChange={(e) => {
                        setStatus(new Set(e.target.value.split(",")));
                      }}
                    >
                      {(lanes) => (
                        <SelectItem
                          key={lanes.value}
                          value={lanes.value}
                          className="text-[10px]"
                        >
                          {lanes.value}
                        </SelectItem>
                      )}
                    </Select>
                  </span>
                </div>

                <div className="flex flex-col-2 ">
                  <span className="text-[13.5px] text-black font-bold text-left pl-5 pt-1 w-[100px]">
                    Centre
                  </span>
                  <span className="text-[10.5px] text-black text-left pl-5">
                    <Select
                      labelPlacement="outside-left"
                      className="w-[485px]"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      name="center"
                      data-testid={"Centre"}
                      aria-label="center"
                      items={lanes}
                      selectedKeys={centre}
                      onChange={(e) => {
                        setCentre(new Set(e.target.value.split(",")));
                      }}
                    >
                      {(lanes) => (
                        <SelectItem
                          key={lanes.value}
                          value={lanes.value}
                          className="text-[10px]"
                        >
                          {lanes.value}
                        </SelectItem>
                      )}
                    </Select>
                  </span>
                </div>
              </div>
              <div className="grid grid-rows-4 grid-flow-col mr-1">
                <div className="flex flex-row gap-1 items-center pt-5 ">
                  <div className="text-[13.5px] text-black font-bold text-left pl-2 pt-1 w-[100px]">
                    Created Date
                  </div>
                  <div className="ml-[15px] mr-2">
                    <p>
                      <Checkbox
                        radius="none"
                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                        checked={isDateEnabled}
                        data-testid={"Created Date"}
                        onChange={handleDateCheckBox}
                        size="sm"
                      />
                      From
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="border-2 border-[#dcdcdc] border-solid shadow-sm h-7 flex justify-center items-center w-[50%]">
                      <div
                        className={
                          isDateEnabled
                            ? "flex justify-center items-center"
                            : " flex justify-center items-center opacity-40 pointer-events-none"
                        }
                      >
                        <i className="material-icons w-1">date_range</i>
                        <DatePicker
                          selected={fromDate}
                          onChange={handleFromDateChange}
                          disabled={!isDateEnabled}
                          className="w-[60%] -ml-[25px]"
                        />
                      </div>
                    </div>
                    <div className="text-center ml-5 mr-5">To</div>
                    <div className="border-2 border-[#dcdcdc] border-solid shadow-sm h-7 flex justify-center items-center w-[50%]">
                      <div
                        className={
                          isDateEnabled
                            ? "flex justify-center items-center"
                            : " flex justify-center items-center opacity-40 pointer-events-none"
                        }
                      >
                        <i className="material-icons w-1">date_range</i>
                        <DatePicker
                          selected={toDate}
                          onChange={handleToDateChange}
                          disabled={!isDateEnabled}
                          className="w-[60%] -ml-[25px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col-2 py-2.5 ...">
                  <span className="text-[13.5px] text-black font-bold text-left pl-2 pt-1.5 w-[100px]">
                    Vehicle Class
                  </span>
                  <span className="text-[10.5px] text-black text-left pl-5">
                    <Select
                      labelPlacement="outside-left"
                      className="w-[485px]"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      name="center"
                      data-testid={"Vehicle Class"}
                      aria-label="center"
                      items={lanes}
                      selectedKeys={vehicleClass}
                      onChange={(e) => {
                        setVehicleClass(new Set(e.target.value.split(",")));
                      }}
                    >
                      {(lanes) => (
                        <SelectItem
                          key={lanes.value}
                          value={lanes.value}
                          className="text-[10px]"
                        >
                          {lanes.value}
                        </SelectItem>
                      )}
                    </Select>
                  </span>
                </div>

                <div className="flex flex-col-2">
                  <span className="text-[13.5px] text-black font-bold text-left pl-2 pt-1 w-[100px]">
                    Reason
                  </span>
                  <span className="text-[10.5px] text-black text-left pl-5">
                    <Select
                      labelPlacement="outside-left"
                      className="w-[485px]"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      name="center"
                      data-testid={"Reason"}
                      aria-label="center"
                      items={lanes}
                      selectedKeys={reason}
                      onChange={(e) => {
                        setReason(new Set(e.target.value.split(",")));
                      }}
                    >
                      {(lanes) => (
                        <SelectItem
                          key={lanes.value}
                          value={lanes.value}
                          className="text-[10px]"
                        >
                          {lanes.value}
                        </SelectItem>
                      )}
                    </Select>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-end pb-[10px] mr-2">
              <Button
                radius="sm"
                size="sm"
                type="reset"
                className="bg-white text-[black] border border-solid border-greyBorder rounded"
                onClick={handleReset}
                data-testid={"Reset"}
              >
                Reset
              </Button>
              <Button
                type="button"
                radius="md"
                size="sm"
                className="ml-[5px] bg-[#00AF8F] text-white rounded"
                onClick={handleSearch}
                data-testid={"Search"}
              >
                Search
              </Button>
            </div>
          </h1>
          <div className="flex justify-start pt-2 mr-1">
            <Button
              type="button"
              radius="sm"
              size="sm"
              className="ml-[5px] bg-[#00AF8F] text-white font-bold rounded"
              data-testid={"Add Watch"}
              onClick={() => {
                navigate("/addWatchList");
              }}
            >
              Add Watch
            </Button>
            <Button
              type="button"
              radius="sm"
              size="sm"
              className="ml-[5px] text-white font-bold rounded"
              style={{ backgroundColor: cancelWatchColor ? "red" : "" }}
              disabled={!cancelWatchColor}
              onClick={handleCancelWatch}
              data-testid={"Cancel Watch"}
            >
              Cancel Watch
            </Button>
            <Button
              type="button"
              className="ml-[5px] bg-[#F0FFFF] text-[#00AF8F] border-[#00AF8F] font-bold rounded"
              size="sm"
              variant="bordered"
              onClick={handleExport}
              data-testid={"Export"}
            >
              Export
            </Button>
          </div>
          {isValid === true ? (
            <VehicleWatchListTableData
              checkFunc={setCancelWatchColor}
              check={cancelWatchColor}
            />
          ) : (
            ""
          )}
          {isOpen && <CancelWatchlist isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default VehicleWatchlist;
