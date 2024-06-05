import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Select, Checkbox, Input, SelectItem } from "@nextui-org/react";
import {
  GET_SEARCHVEHICLE,
  GET_VEHICLECLASS_URL,
  GET_VEHICLEMAKE_URL,
} from "../constants/urlConstants";
import { axiosGet, axiosPost } from "../utils/axiosInstance";
import { saveLoader } from "../login/state/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSubClass } from "./service/searchVehicle.service";
import SearchVehicleTable from "./SearchVehicleTable";
import { saveSearchVehicleResponse } from "./state/searchVehicleSlice";
import { useNavigate } from "react-router";
import { exportExcelCSVHandler } from "../utils/exportUtils";


// import { saveSubClass } from "./state/searchVehicleSlice";
const columns = [
  { header: "Vehicle Id", key: "vehicleId" },
  { header: "Chassis No.", key: "chassisNumber" },
  { header: "Vehicle Class", key: "vehicleClass" },
  { header: "Make", key: "make" },
  { header: "Float Name", key: "" },
  { header: "Reg. Mark", key: "regMark" },
  { header: "Sub-Class", key: "" },
  { header: "C&E No.", key: "ceNumber" },
  { header: "T.A No.", key: "" },
];

export default function SearchVehicle() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [vehicleClass, setVehicleClass] = useState<string[]>([]);
  const [vehicleClassState, setVehicleClassState] = useState<string>("");
  const [vehicleMake, setVehicleMake] = useState<string[]>([]);
  const [vehicleMakeState, setVehicleMakeState] = useState<string>("");
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [vehicleSubClassState, setVehicleSubClassState] = useState<string>("");
  const [resetvalue, setResetvalue] = useState(""); //TA no
  const [regMark, setRegMark] = useState<string>("");
  const [chassisNo, setChassisNo] = useState<string>("");
  const [appointmentStatus, setAppointmentStatus] = useState<string>("");
  const [vehicleId, setVehicleId] = useState<string>("");
  const [floatName, setFloatName] = useState<string>("");
  const [vehicleSubClass, setVehicleSubClass] = useState<string[]>([]);
  const [ceNo, setCeNo] = useState<string>("");
  const [taNo, setTaNo] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);

  const searchVehicleData = useSelector(
    (state) => state.SearchVehicle.searchVehicleResponse
  );
  const handleChangeClass = (event: ChangeEvent<HTMLSelectElement>) => {
    setVehicleClassState(event.target.value);
  };
  const handleChangeMake = (event: ChangeEvent<HTMLSelectElement>) => {
    setVehicleMakeState(event.target.value);
  };
  const handleChangeSubClass = (event: ChangeEvent<HTMLSelectElement>) => {
    setVehicleSubClassState(event.target.value);
  };

  const ResetbtnFunc = () => {
    setVehicleId("");
    setChassisNo("");
    setVehicleClassState("");
    setVehicleMake("");
    setFloatName("");
    setRegMark("");
    setVehicleSubClassState("");
    setResetvalue("");
  };

  const loadVehicleClass = async () => {
    const url = GET_VEHICLECLASS_URL;
    try {
      const response = await axiosGet(url);
      setVehicleClass(response);
      console.log("VehicleClass", response);
    } catch (error) {
      console.error("Vehicle class Error", error);
    }
  };
  const loadVehicleMake = async () => {
    const url = GET_VEHICLEMAKE_URL;
    try {
      const response = await axiosGet(url);
      setVehicleMake(response);
      console.log("VehicleMake", response);
    } catch (error) {
      console.error("Vehicle Make Error", error);
    }
  };

  useEffect(() => {
    loadVehicleClass();
    loadVehicleMake();
  }, []);

  const params = {
    vehicleClassId: vehicleClassState,
  };

  useEffect(() => {
    searchVehicleSubClass();
  }, [vehicleClassState])
  

  const searchVehicleSubClass = async () => {
    try {
      dispatch(saveLoader(true));
      console.log("subclass1");
      const response = await getSubClass(params);
      setVehicleSubClass(response.data);
      console.log("subclass", vehicleSubClass);
      console.log(response);
      dispatch(saveLoader(false));
    } catch (error) {
      setShowApiError(true);
      dispatch(saveLoader(false));
    }
  };

  const searchHandler = async () => {
    const searchData = {
      vehicleId: vehicleId,
      chassisNumber: chassisNo,
      regMark: regMark,
      floatName: floatName,
      vehicleMake: vehicleMakeState,
      vehicleClass: vehicleClassState,
      vehicleSubClass: vehicleSubClassState,
    };

    const url = GET_SEARCHVEHICLE;

    try {
      const response = await axiosPost(url, searchData);
      dispatch(saveSearchVehicleResponse(response));
      if (response.length >= 1) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } catch (error) {
      console.error("Search Vehicle Error", error);
    }
  };
  const NewnonVallidHandler = () => {
    navigate("/nonValidVehicle");
  };

  return (
    <div className=" p-[5px] ml-1 mt-[10px]">
      <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-md">
        Vehicle Enquiry {">"} Search Vehicle
      </div>
      <div className="flex justify-end pb-[10px] font-bold gap-1 ">
        <Button
          type="button"
          className="bg-[#00AF8F] text-[#FFFFFF]"
          size="sm"
          radius="none"
          variant="bordered"
          data-testid="newNonValidButton"
          onClick={NewnonVallidHandler}
        >
          New Non-VALLID
        </Button>
      </div>
      <div className="h-[400px]">
        <h1>
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
            Searching Criteria
          </h5>
          <div className="grid grid-cols-2 gap-2 mt-[12px] text-sm/[13px] font-bold">
            <div className="grid grid-rows-5 h-[200 px] grid-flow-col ml-6">
              <div className="flex flex-row items-center mb-1">
                <div className="w-[15%] text-left">Vehicle ID</div>
                <div className="w-[75%] ml-[30px]">
                  <Input
                    id="standard-basic"
                    name="vehicleid"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    data-testid="vehicleid"
                    value={vehicleId}
                    onChange={(e) => {
                      setVehicleId(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Chassis No.</div>
                <div className="w-[75%] ml-[30px]">
                  <Input
                    id="standard-basic"
                    name="chassisno"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    value={chassisNo}
                    onChange={(e) => {
                      setChassisNo(e.target.value);
                    }}
                    data-testid="chassisNo"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left value={vehiclclass} ">
                  Vehicle Class
                </div>
                <div className="w-[75%] ml-[30px]">
                  <Select
                    radius="none"
                    labelPlacement="outside-left"
                    variant="bordered"
                    size="sm"
                    data-testId="vehicleclass"
                  selectedKeys={[vehicleClassState]}
                    onChange={handleChangeClass}
                  >
                    {vehicleClass.length > 0 &&
                      vehicleClass.map((data) => (
                        <SelectItem key={data.vehicleClassId} value={data.vehicleClassName}>
                          {data.vehicleClassName}
                        </SelectItem>
                      ))}
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Make</div>
                <div className="w-[75%] ml-[30px]">
                  <Select
                    radius="none"
                    labelPlacement="outside-left"
                    variant="bordered"
                    size="sm"
                    data-testid="mark"
                    selectedKeys={vehicleMakeState}
                    onChange={handleChangeMake}
                  >
                    {vehicleMake.length > 0 &&
                      vehicleMake.map((data, index) => (
                        <SelectItem key={index} value={data.makeName}>
                          {data.makeName}
                        </SelectItem>
                      ))}
                  </Select>
                </div>
              </div>

              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Float Name</div>
                <div className="w-[75%] ml-[30px]">
                  <Input
                    id="standard-basic"
                    name="floatName"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    value={floatName}
                    onChange={(e) => {
                      setFloatName(e.target.value);
                    }}
                    data-testid="floatName"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-rows-5 grid-flow-col ">
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Reg. Mark</div>
                <div className="w-[75%] ml-[30px]">
                  <Input
                    id="standard-basic"
                    name="regMark"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    value={regMark}
                    onChange={(e) => {
                      setRegMark(e.target.value);
                    }}
                    data-testid="regMark"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
              <div className="w-[15%] text-left">Length:{0}</div>
                <div className="ml-[30px]">
                  <p>
                    <Checkbox
                      radius="none"
                      data-testid="checkbox"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                    Compare alphanumeric characters only
                  </p>
                  </div>
                  </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">Sub-Class</div>
                <div className="w-[75%] ml-[30px]">
                  <Select
                    radius="none"
                    labelPlacement="outside-left"
                    variant="bordered"
                    size="sm"
                    data-testid="Subclass"
                    value={vehicleSubClassState}
                    selectedKeys={[vehicleSubClassState]}
                    onChange={handleChangeSubClass}
                  >
                    {vehicleSubClass.length > 0 &&
                      vehicleSubClass.map((data, index) => (
                        <SelectItem
                          key={index}
                          value={data.vehicleSubClassName}
                        >
                          {data.vehicleSubClassName}
                        </SelectItem>
                      ))}
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">C&E No.</div>
                <div className="w-[75%] ml-[30px]">
                  <Input
                    id="standard-basic"
                    name="C&ENumber"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    value={ceNo}
                    onChange={(e) => {
                      setCeNo(e.target.value);
                    }}
                    data-testid="C&ENo"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-[15%] text-left">T.A No.</div>
                <div className="w-[75%] ml-[30px]">
                  <Input
                    id="standard-basic"
                    name="TANo"
                    radius="none"
                    variant="bordered"
                    size="sm"
                    onChange={(e) => {
                      setTaNo(e.target.value);
                    }}
                    value={taNo}
                    data-testid="TANo"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end pb-[10px] mr-4 mt-1 font-bold gap-1 ">
            <Button
              type="reset"
              className="bg-[#FFFFFF]"
              size="sm"
              radius="none"
              variant="bordered"
              data-testid="resetButton"
              onClick={ResetbtnFunc}
            >
              Reset
            </Button>
            <Button
              type="button"
              className="bg-[#FFFFFF] border-[#6dcbba]"
              size="sm"
              radius="none"
              variant="bordered"
              data-testid="exportButton"
              onClick={() => {
                exportExcelCSVHandler(
                  columns,
                  searchVehicleData,
                  "searchVehicle",
                  "xlsx"
                );
              }}
            >
              Export
            </Button>
            <Button
              type="button"
              className="bg-[#00AF8F] text-[#FFFFFF]"
              size="sm"
              radius="none"
              variant="bordered"
              
              onClick={searchHandler}
            >
              Search
            </Button>
          </div>
          
        </h1>
      </div>
      {isValid === true ? <SearchVehicleTable /> : ""}
    </div>
  );
}
