import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useCallback, useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { saveLoader } from "../login/state/loginSlice";
import { saveSearchResponse } from "./state/createAppointmentSlice";
import CreateAppointmentTable from "./CreateApopintmentTable";
import { exportExcelCSVHandler } from "../utils/exportUtils";
import {
  getVehicleClassSubClass,
  getVehicleMake,
  searchVehicle,
} from "./service/createAppointmentService";
import {
  ISearchVehicle,
  ISubClass,
  IVehicleClass,
  IVehicleMake,
} from "./model/createAppointmentSliceModel";

const regMarkData = [
  { label: "REG2234" },
  { label: "REG256" },
  { label: "REG1234" },
  { label: "REG7685" },
  { label: "REG564" },
  { label: "REG783" },
  { label: "REG564" },
];
const columns = [
  { header: "Vehicle Id", key: "vehicleId" },
  { header: "Chassis No", key: "vehicleChasisNumber" },
  { header: "Vehicle Class", key: "vehicleClassCode" },
  { header: "Make", key: "vehicleMakeId" },
  { header: "Doc No", key: "vehicleRegistrationDocumentTransactionNumber" },
  { header: "Vaild/Non-Vaild", key: "vehicleRecordTypeCode" },
  { header: "Reg. Mark", key: "vehicleRegMarkNumber" },
  { header: "C&E No", key: "cERefNumber" },
  { header: "T.A No", key: "vehicleTypeApprovalNumber" },
  { header: "Master/Child", key: "masterChild" },
];

interface SearchData {
  regMark: string;
  vehicleId: string;
  chasisNo: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleClass: string;
  SubClass: string;
  vehicleType: string;
  taNo: string;
  docNo: string;
  ceNo: string;
  masterChild: string;
}

function CreateAppointmentlanding() {
  const navigate = useNavigate();
  const [appoint, setAppoint] = useState<SearchData>({
    regMark: "",
    vehicleId: "",
    chasisNo: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleClass: "",
    vehicleType: "",
    SubClass: "",
    taNo: "",
    docNo: "",
    ceNo: "",
    masterChild: "",
  });
  const [vehicleClass, setVehicleClass] = useState<IVehicleClass[]>([]);
  const [vehicleClassState, setVehicleClassState] = useState<string>("");
  const [vehicleSubClassState, setVehicleSubClassState] = useState<string>("");
  const [vehicleSubClass, setVehicleSubClass] = useState<ISubClass[]>([]);
  const [vehicleMake, setVehicleMake] = useState<IVehicleMake[]>([]);
  const [vehicleMakeState, setVehicleMakeState] = useState<string>("");
  const [vechicleMasterChild, setVehicleMasterChild] = useState<string[]>([]);
  const [vehicleDetails, setVehicleDetails] = useState<ISearchVehicle[]>([]);
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [noData, setNoData] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  //const [regMarkList, setRegMarkList] = useState(regMarkData);
  const [suggestion, setSuggestion] = useState<{ label: string }[]>([]);

  const searchAppointmentData = useSelector(
    (state) => state.createAppointment.searchCreateAppointment
  );

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength >= 3
      ? regMarkData.filter(
          (regMark) =>
            regMark.label.toLowerCase().slice(0, inputLength) === inputValue
        )
      : [];
  };

  useEffect(() => {
    setSuggestion(getSuggestions(appoint.regMark));
  }, [appoint.regMark]);

  const search = async () => {
    if (
      appoint.regMark === "" &&
      appoint.chasisNo === "" &&
      appoint.vehicleId === ""
    ) {
      setIsValid(true);
    } else {
      const searchData = new URLSearchParams({
        VehicleId: appoint.vehicleId,
        VehicleRegMarkNumber: appoint.regMark,
        VehicleChasisNumber: checked
          ? alphanumericValidate(appoint.chasisNo)
          : appoint.chasisNo,
        VehicleClassId: vehicleClassState,
        VehicleSubclassId: vehicleSubClassState,
        VehicleMakeId: vehicleMakeState,
        CERefNumber: appoint.ceNo,
        VehicleRegistrationDocumentTransactionNumber: appoint.docNo,
        VehicleTypeApprovalNumber: appoint.taNo,
        VehicleRecordTypeCode: "",
        MasterChild: "",
      });
      try {
        dispatch(saveLoader(true));
        const response = await searchVehicle(searchData);
        setVehicleDetails(response.searchVehicle);
        dispatch(saveSearchResponse(response.searchVehicle));
        dispatch(saveLoader(false));
        setNoData(false);
        if (response.searchVehicle.length === 1) {
          navigate(
            `/examination?vehicleId=${response.searchVehicle[0].vehicleId}`
          );
        }
      } catch (error) {
        dispatch(saveLoader(false));
        if (error.response.status === 404 && vehicleDetails.length === 0) {
          setNoData(true);
        }
      }
    }
  };
  const handleChangeClass = async (e: ChangeEvent<HTMLSelectElement>) => {
    setVehicleClassState(e.target.value);
    const selectedClass = vehicleClass.find(
      (data) => data.classID === e.target.value
    );
    if (selectedClass) {
      setVehicleSubClass(selectedClass.subClasses);
    } else {
      setVehicleSubClass([]);
    }
  };
  const handleChangeSubClass = (e: ChangeEvent<HTMLSelectElement>) => {
    setVehicleSubClassState(e.target.value);
  };
  const handleChangeMake = (e: ChangeEvent<HTMLSelectElement>) => {
    setVehicleMakeState(e.target.value);
  };
  const resetFields = () => {
    setAppoint({
      regMark: "",
      vehicleId: "",
      chasisNo: "",
      vehicleMake: "",
      vehicleModel: "",
      vehicleClass: "",
      vehicleType: "",
      SubClass: "",
      taNo: "",
      docNo: "",
      ceNo: "",
      masterChild: "",
    });
    setVehicleClassState("");
    setVehicleSubClassState("");
    setVehicleMakeState("");
    setChecked(false);
    setIsValid(false);
  };
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setAppoint({ ...appoint, [e.target?.name]: e.target?.value });
    setIsValid(false);
  };
  const params = {
    status: "All",
  };
  const loadVehicleClass = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getVehicleClassSubClass(params);
      setVehicleClass(response.vehicleClassWithSubClasses);
      dispatch(saveLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(saveLoader(false));
    }
  };

  const handleCheck = () => {
    setChecked(!checked);
  };
  const alphanumericValidate = (value) => {
    const newAlphaNumeric = value.replace(/[^a-zA-Z0-9]/g, "");
    return newAlphaNumeric;
  };
  const loadVehicleMake = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getVehicleMake(params);
      setVehicleMake(response.vehicleMakes);
      dispatch(saveLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(saveLoader(false));
    }
  };
  useEffect(() => {
    loadVehicleClass();
    loadVehicleMake();
  }, []);

  return (
    <div className="pt-[10px]">
      <div className="flex flex-row gap-1 justify-end w-full  ">
        <Button
          className="bg-[#00AF8F] mb-2 text-white font-[Claibri] font-bold mr-2 rounded-sm"
          size="sm"
          radius="none"
          type="submit"
        >
          Create Non-VALID Vehicle
        </Button>
      </div>
      <div>
        <div className="h-[280px] m-1">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px]  text-[#009b77] text-sm font-[Calibri] font-bold">
              Searching Criteria
            </h5>
            <div className="grid grid-cols-2 gap-2 mt-[12px] text-sm/[13px] font-bold">
              <div className="grid grid-rows-6 h-[200 px] grid-flow-col ml-3">
                <div className="flex flex-row items-center mb-1">
                  <div className="whitespace-nowrap text-left text-sm font-[Calibri] font-extrabold">
                    Vehicle ID
                  </div>
                  <div className="w-full ml-[66px]">
                    <Input
                      id="standard-basic"
                      data-testid="vehicleId"
                      variant="bordered"
                      radius="none"
                      name="vehicleId"
                      size="sm"
                      maxLength={10}
                      value={appoint.vehicleId}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      style={{
                        border: isValid ? "2px solid red" : "initial",

                        width: "100%",
                      }}
                      endContent={appoint.vehicleId.length + "/" + 10}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="whitespace-nowrap text-left text-sm font-[Calibri] font-extrabold">
                    Chassis No.
                  </div>
                  <div className="w-full ml-[58px]">
                    <Input
                      id="standard-basic"
                      data-testid="chassisNo"
                      variant="bordered"
                      radius="none"
                      name="chasisNo"
                      size="sm"
                      maxLength={25}
                      value={appoint.chasisNo}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      style={{
                        border: isValid ? "2px solid red" : "initial",

                        width: "100%",
                      }}
                      endContent={
                        //appoint.chasisNo === undefined ||
                        // appoint.chasisNo === ""
                        //   ? 0
                        //   :
                        appoint.chasisNo.length + "/" + 25
                      }
                      aria-describedby="outlined-weight-helper-text"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="whitespace-nowrap text-left text-sm font-[Calibri] font-extrabold ">
                    Vehicle Class
                  </div>
                  <div className="w-full ml-[49px]">
                    <Select
                      labelPlacement="outside-left"
                      data-testid="vehicleClass"
                      size="sm"
                      radius="none"
                      name="vehicleClass"
                      variant="bordered"
                      selectedKeys={[vehicleClassState]}
                      value={vehicleClassState}
                      onChange={handleChangeClass}
                    >
                      {vehicleClass.length > 0 &&
                        vehicleClass.map((data) => (
                          <SelectItem key={data.classID} value={data.classID}>
                            {data.classCode}
                          </SelectItem>
                        ))}
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div
                    className="whitespace-nowrap text-left text-sm font-[Calibri] font-extrabold"
                    data-testid="makeLabel"
                  >
                    Make
                  </div>
                  <div className="w-full ml-[90px]">
                    <Select
                      radius="none"
                      labelPlacement="outside-left"
                      data-testid="make"
                      variant="bordered"
                      size="sm"
                      name="mark"
                      selectedKeys={[vehicleMakeState]}
                      value={vehicleMakeState}
                      onChange={handleChangeMake}
                    >
                      {vehicleMake.length > 0 &&
                        vehicleMake.map((data) => (
                          <SelectItem
                            key={data.makeId}
                            value={data.vehicleMakeName}
                          >
                            {data.vehicleMakeName}
                          </SelectItem>
                        ))}
                    </Select>
                  </div>
                </div>

                <div className="flex flex-row items-center">
                  <div className="whitespace-nowrap text-left text-sm font-[Calibri] font-extrabold">
                    Doc. No.
                  </div>

                  <div className="w-full ml-[73px]">
                    <Input
                      id="standard-basic"
                      name="docNo"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      value={appoint.docNo}
                      onChange={handleChange}
                      data-testid="docNo"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div
                    className="whitespace-nowrap text-left text-sm font-[Calibri] font-extrabold "
                    data-testid="validnonvalid"
                  >
                    Vaild/Non-Vaild
                  </div>
                  <div className="w-full ml-[30px]">
                    <Select
                      radius="none"
                      labelPlacement="outside-left"
                      variant="bordered"
                      size="sm"
                      name="vehcileType"
                      data-testid="vehicleType"
                      //selectedKeys={vehicleClassState}
                      //onChange={handleChangeClass}
                    >
                      <SelectItem key={""}></SelectItem>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="grid grid-rows-6 grid-flow-col">
                <div className="flex flex-row items-center">
                  <div className="w-[15%] text-left text-sm font-[Calibri] font-extrabold">
                    Reg. Mark
                  </div>

                  <div className="w-[75%] ml-[30px]">
                    <Input
                      data-testid="regMark"
                      variant="bordered"
                      radius="none"
                      name="regMark"
                      size="sm"
                      maxLength={10}
                      value={appoint.regMark}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      list="regMark-suggestions"
                      style={{
                        border: isValid ? "2px solid red" : "initial",

                        width: "100%",
                      }}
                      endContent={
                        // appoint.regMark === undefined || appoint.regMark === ""
                        //   ? 0:
                        appoint.regMark.length + "/" + 10
                      }
                      aria-describedby="outlined-weight-helper-text"
                    />
                    <datalist id="regMark-suggestions">
                      {suggestion.map((suggestion, index) => (
                        <option key={index} value={suggestion.label} />
                      ))}
                    </datalist>

                    {/* <AutoComplete
    value={appoint.regMark}
    onChange={(value) => setAppoint({ ...appoint, regMark: value })}
    options={regMarkList.map((suggestion) => ({ label: suggestion, value: suggestion }))}
  /> */}
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  {/* <div className="w-[15%] text-left text-sm font-[Calibri] font-bold">Length:{0}</div> */}
                  <div className="ml-[40%]">
                    <p>
                      <Checkbox
                        radius="none"
                        size="md"
                        classNames={{
                          wrapper: "after:bg-[#009B77] mt-1 text-sm",
                        }}
                        isSelected={checked}
                        onChange={handleCheck}
                      />
                      Compare alphanumeric characters only
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-[15%] text-left text-sm font-[Calibri] font-extrabold">
                    Sub-Class
                  </div>
                  <div className="w-[75%] ml-[30px]">
                    <Select
                      labelPlacement="outside-left"
                      size="sm"
                      radius="none"
                      name="subclass"
                      data-testid="subClass"
                      variant="bordered"
                      value={vehicleSubClassState}
                      selectedKeys={[vehicleSubClassState]}
                      onChange={handleChangeSubClass}
                    >
                      {vehicleSubClass?.length > 0 &&
                        vehicleSubClass.map((data) => (
                          <SelectItem
                            key={data.subClassID}
                            value={data.subClassID}
                          >
                            {data.subClassCode}
                          </SelectItem>
                        ))}
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-[15%] text-left text-sm font-[Calibri] font-extrabold">
                    C&E No.
                  </div>
                  <div className="w-[75%] ml-[30px]">
                    <Input
                      variant="bordered"
                      radius="none"
                      name="ceNo"
                      size="sm"
                      maxLength={10}
                      value={appoint.ceNo}
                      onChange={handleChange}
                      data-testid="c&eNo"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div className="w-[15%] text-left text-sm font-[Calibri] font-extrabold">
                    T.A. No.
                  </div>
                  <div className="w-[75%] ml-[30px]">
                    <Input
                      variant="bordered"
                      radius="none"
                      name="taNo"
                      size="sm"
                      data-testid="taNo"
                      value={appoint.taNo}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      maxLength={10}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <div
                    className="w-[15%] text-left text-sm font-[Calibri] font-extrabold"
                    data-testid="masterchild"
                  >
                    Master/Child
                  </div>
                  <div className="w-[75%] ml-[30px]">
                    <Select
                      radius="none"
                      labelPlacement="outside-left"
                      variant="bordered"
                      size="sm"
                      data-testid="master/child"
                      //value={vehicleSubClassState}
                      //selectedKeys={vehicleSubClassState}
                      //onChange={handleChangeSubClass}
                    >
                      <SelectItem key={""}></SelectItem>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end pb-[10px] mr-4 mt-1 font-bold gap-1   ">
              <Button
                type="reset"
                name="reset"
                className="bg-[#FFFFFF] text-sm font-[Calibri] font-bold"
                size="sm"
                radius="none"
                variant="bordered"
                onClick={resetFields}
              >
                Reset
              </Button>
              <Button
                type="reset"
                className="bg-[#FFFFFF] border-[#6dcbba] text-sm font-[Calibri] font-bold"
                size="sm"
                radius="none"
                variant="bordered"
                name="export"
                data-testid="exportButton"
                onClick={() => {
                  exportExcelCSVHandler(
                    columns,
                    vehicleDetails,
                    "createAppointment",
                    "xlsx"
                  );
                }}
              >
                Export
              </Button>
              <Button
                type="button"
                className="bg-[#00AF8F] text-white text-sm font-[Calibri] font-bold"
                size="sm"
                radius="none"
                variant="bordered"
                data-testid="searchButton"
                name="search"
                onClick={search}
              >
                Search
              </Button>
            </div>
          </h1>
        </div>
      </div>
      {noData && (
        <div className="text-left ml-3 text-md font-calibri fond-bold text-black">
          No record's found.
        </div>
      )}
      {vehicleDetails.length > 1 && (
        <CreateAppointmentTable vehicleDetails={vehicleDetails} />
      )}
    </div>
  );
}

export default CreateAppointmentlanding;
