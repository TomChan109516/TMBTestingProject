// import { Input } from "@nextui-org/input";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { theme } from "../../common/themes/themeConfig";
import { useNavigate } from "react-router";

function AddWatchList() {
  const [vehicleClass, setVehicleClass] = useState([]);
  const [vehicleClassState, setVehicleClassState] = useState<Set<string>>(new Set([]));
  const [regMark, setRegMark] = useState("");
  const [chassisNo, setChassisNo] = useState("");
  const [vehicleId, setVehicleId] = useState('');
  const [bodyType, setBodyType] = useState([]);
  const [bodyTypeState, setBodyTypeState] = useState(new Set([]));
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [make1, setMake1] = useState("");
  const [numAxel, setNumAxel] = useState("");
  const [pslService, setPslService] = useState("");
  const [vehicleSubClass, setVehicleSubClass] = useState([]);
  const [vehicleSubClassState, setVehicleSubClassState] = useState(new Set([]));
  const [engineType, setEngineType] = useState([]);
  const [engineTypeState, setEngineTypeState] = useState<Set<string>>(new Set([]));
  const [manuYear, setManuYear] = useState([]);
  const [manuYearState, setManuYearState] = useState<Set<string>>(new Set([]));
  const [manuYear1, setManuYear1] = useState([]);
  const [manuYearState1, setManuYearState1] = useState<Set<string>>(new Set([]));
  const [manuYear2, setManuYear2] = useState([]);
  const [manuYearState2, setManuYearState2] = useState<Set<string>>(new Set([]));
  const [firstRegDate, setFirstRegDate] = useState([]);
  const [firstRegDateState, setFirstRegDateState] = useState<Set<string>>(new Set([]));
  const [firstRegDate1, setFirstRegDate1] = useState(new Date());
  const [firstRegDate2, setFirstRegDate2] = useState(new Date());
  const [pgvWeight, setPgvWeight] = useState([]);
  const [pgvWeightState, setPgvWeightState] = useState<Set<string>>(new Set([]));
  const [pgvWeight1, setPgvWeight1] = useState("");
  const [pgvWeight2, setPgvWeight2] = useState("");
  const [standing, setStanding] = useState([]);
  const [standingState, setStandingState] = useState<Set<string>>(new Set([]));
  const [standing1, setStanding1] = useState("");
  const [standing2, setStanding2] = useState("");
  const [lowerCap, setLowerCap] = useState([]);
  const [lowerCapState, setLowerCapState] = useState<Set<string>>(new Set([]));
  const [lowerCap1, setLowerCap1] = useState("");
  const [lowerCap2, setLowerCap2] = useState("");
  const [upperCap, setUpperCap] = useState([]);
  const [upperCapState, setUpperCapState] = useState<Set<string>>(new Set([]));
  const [upperCap1, setUpperCap1] = useState("");
  const [upperCap2, setUpperCap2] = useState("");
  const [hybridVehicle, setHybridVehicle] = useState(false);
  const [showVehicle, setShowVehicle] = useState(false);
  const [alphaCheck, setAlphaCheck] = useState(false);
  const [taNo, setTaNo] = useState("");
  const navigate = useNavigate();
  const handleHybrid = (e : React.ChangeEvent<HTMLInputElement>) => {
    setHybridVehicle(e.target.checked);
  };
  const handleShowVehicle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowVehicle(e.target.checked);
  };
  const handleAlphaCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlphaCheck(e.target.checked);
  };
  const handleDateChange = (newValue: React.SetStateAction<Date>) => {
    setFirstRegDate1(newValue);
  };
  const handleDateChange1 = (newValue: React.SetStateAction<Date>) => {
    setFirstRegDate2(newValue);
  };
  const reset=()=>{
    setVehicleClassState(new Set([]));
    setRegMark('');
    setChassisNo('');
    setVehicleId('');
    setBodyTypeState(new Set([]));
    setModel('');
    setMake('');
    setMake1('');
    setNumAxel('');
    setPslService('');
    setHybridVehicle(false);
    setShowVehicle(false);
    setVehicleSubClassState(new Set([]));
    setTaNo('');
    setAlphaCheck(false);
    setEngineTypeState(new Set([]));
    setManuYearState(new Set([]));
    setManuYearState1(new Set([]));
    setManuYearState2(new Set([]));
    setFirstRegDateState(new Set([]));
    setFirstRegDate1('');
    setFirstRegDate2('');
    setPgvWeightState(new Set([]));
    setPgvWeight1('');
    setPgvWeight2('');
    setStandingState(new Set([]));
    setStanding1('');
    setStanding2('');
    setLowerCapState(new Set([]));
    setLowerCap1('');
    setLowerCap2('');
    setUpperCapState(new Set([]));
    setUpperCap1('');
    setUpperCap2('');
  }
  return (
    <div className="">
      <div className="flex">
        <div
          className={`flex-initial text-[#007F62] p-[10px] font-[Calibri] font-bold text-sm`}
        >
          Vehicle Watchlist {">"} Add
        </div>
      </div>
      <div>
        <div className="ml-2 mr-2 ">
          <h1>
            <h5
              className={`absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]`}
            >
              Search Criteria
            </h5>
            <div className="grid grid-cols-2 h-[350px]">
              <div className="grid grid-rows-10 grid-flow-col ml-1 mt-2 mr-4 whitespace-nowrap">
                <div className="flex flex-row">
                  <div className="text-sm font-[Calibri] font-bold mt-[10px]">
                    Vehicle Class
                  </div>
                  <div className="ml-5 w-full">
                    <Select
                    labelPlacement="outside"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="vehicleClass"
                      aria-label="vehicleClass"
                      aria-labelledby="vehicleClass"
                      placeholder="Select"
                      selectedKeys={vehicleClassState}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setVehicleClassState(new Set(e.target.value.split(",")))}
                    >
                      <SelectItem key="M">M</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="text-sm font-[Calibri] font-bold mt-[5px]">Reg. Mark</div>
                  <div className="ml-[35px] w-full">
                    <Input
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="regMark"
                      value={regMark}
                      onValueChange={setRegMark}
                      maxLength={10}
                      endContent={regMark.length + "/" + 10}
                    />
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm font-[Calibri] font-bold mt-[5px]">Chassis No.</div>
                  <div className="ml-[28px] w-full ">
                    <Input
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="chassisNo"
                      value={chassisNo}
                      onValueChange={setChassisNo}
                      maxLength={25}
                      endContent={chassisNo.length + "/" + 25}
                    />
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm font-[Calibri] font-bold mt-[5px]">Vehicle ID</div>
                  <div className="ml-[36px] w-full">
                    <Input
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="vehicleId"
                      value={vehicleId}
                    onValueChange={setVehicleId}
                    maxLength={10}
                      endContent={vehicleId.length + "/" + 10}
                    />
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm font-[Calibri] font-bold mt-[10px]">Body Type</div>
                  <div className="ml-[33px] w-full">
                    <Select
                    labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="bodyType"
                      aria-label="bodyType"
                      aria-labelledby="bodyType"
                      placeholder="Select"
                      selectedKeys={bodyTypeState}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setBodyTypeState(new Set(e.target.value.split(",")))}
                    >
                      <SelectItem key="L" value="L">L</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="text-sm font-[Calibri] font-bold mt-[5px]">Model</div>
                  <div className="ml-[55.5px] w-full">
                    <Input radius="none" size="sm" variant="bordered" name="model" value={model} onValueChange={setModel} />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="text-sm font-[Calibri] font-bold mt-[5px]">Make</div>
                  <div className="ml-[60.5px] w-[70%]">
                    <Input radius="none" size="sm" variant="bordered" name="make" value={make} onValueChange={setMake} />
                  </div>
                  <div className="ml-1 w-[30%]">
                    <Input radius="none" size="sm" variant="bordered" name="make1" value={make1} onValueChange={setMake1} />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="text-sm font-[Calibri] font-bold mt-[5px]">Num of axle</div>
                  <div className="ml-[23px] w-full">
                    <Input
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="numOfAxle"
                      value={numAxel}
                      onValueChange={setNumAxel}
                    />
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="text-sm font-[Calibri] font-bold mt-[5px]">PSL Service</div>
                  <div className="ml-7 w-[70%]">
                    <Input
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="PslService"
                      value={pslService}
                      onValueChange={setPslService}
                    />
                  </div>
                  <div className="ml-1 font-[Calibri] text-[lightgray]">
                    (e.g A06,A08)
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-1 font-[Calibri]  ">
                  <div className="ml-1">
                    <Checkbox
                      size="sm"
                      radius="none"
                      name="hybridVehicle"
                      isSelected={hybridVehicle}
                      onChange={(e)=>handleHybrid(e)}
                      classNames={{
                        wrapper: `after:bg-[#00AF8F]`,
                      }}
                    >
                      Hybrid Vehicle Indicator
                    </Checkbox>
                  </div>
                  <div className="mr-4">
                    <Checkbox
                      size="sm"
                      radius="none"
                      name="showVehicle"
                      isSelected={showVehicle}
                      onChange={(e)=>{handleShowVehicle(e)}}
                      classNames={{
                        wrapper: `after:bg-[#00AF8F]`,
                      }}
                    >
                      Show vehicle over 2 years license expiry
                    </Checkbox>
                  </div>
                </div>
              </div>
              <div className="grid grid-rows-10 grid-flow-col whitespace-nowrap mr-4 mt-2">
                <div className="flex flex-row ">
                  <div className="text-sm font-[Calibri] font-bold mt-[10px]">Sub-Class </div>
                  <div className="ml-[38px] w-full">
                    <Select
                      labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      placeholder="Select"
                      name="subClass"
                      aria-label="subClass"
                      aria-labelledby="subClass"
                      selectedKeys={vehicleSubClassState}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setVehicleSubClassState(new Set(e.target.value.split(",")))}
                    >
                      <SelectItem key="M">M</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-left text-sm font-[Calibri] font-bold mt-[5px]">T.A No.</div>
                  <div className="ml-[51px] w-full">
                    <Input
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="taNo"
                      value={taNo}
                      onValueChange={setTaNo}
                    />
                  </div>
                </div>
                <div className=" flex flex-row row-auto">
                  <div className=" text-sm text-left text-[lightGray] pt-[5px] font-[Calibri]  content-stretch">
                    Length:{chassisNo.length}
                  </div>
                  <div className="ml-14 font-[Calibri]">
                    <Checkbox
                      size="sm"
                      radius="none"
                      name="alphaNumeric"
                      isSelected={alphaCheck}
                      onChange={(e)=>{handleAlphaCheck(e)}}
                      classNames={{
                        wrapper: `after:bg-[#00AF8F]`,
                      }}
                    >
                      Compare alphanumeric characters only
                    </Checkbox>
                  </div>
                </div>
                <div className="flex flex-row  ">
                  <div className="text-sm text-left font-[Calibri] font-bold mt-[10px]">Engine Type</div>
                  <div className="ml-6 w-full">
                    <Select
                    labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="enginetype"
                      aria-label="enginetype"
                      aria-labelledby="enginetype"
                      placeholder="Select"
                      value={engineTypeState}
                      selectedKeys={engineTypeState}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setEngineTypeState(new Set(e.target.value.split(",")))}
                    >
                      <SelectItem key="Select.." value="Select.">
                        SelectP..
                      </SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm text-left font-[Calibri] font-bold mt-[10px]">Manu. Year</div>
                  <div className="ml-7 w-2/6">
                    <Select
                    labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="manuYear"
                      aria-label="manuyear"
                      aria-labelledby="manuyear"
                      selectedKeys={manuYearState}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setManuYearState((new Set(e.target.value.split(","))))}
                    >
                      <SelectItem key="Select.." value="Select..">
                        Select...
                      </SelectItem>
                      <SelectItem key="<" value="<">
                        {"<"}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"<="}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"="}
                      </SelectItem>
                      <SelectItem key=">" value=">">
                        {">"}
                      </SelectItem>
                      <SelectItem key=">=" value=">=">
                        {">="}
                      </SelectItem>
                      <SelectItem key="between" value="between">
                        between
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="ml-1 w-2/6">
                    <Select
                    labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="manuYear1"
                      aria-label="manuyear1"
                      aria-labelledby="manuyear1"
                      selectedKeys={manuYearState1}
                      onSelectionChange={(e)=>setManuYearState1(new Set(e.target.value.split(",")))}
                    >
                      <SelectItem key="O">1990</SelectItem>
                    </Select>
                  </div>
                  <div className="ml-1 w-2/6">
                    <Select
                    labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="manuYear2"
                      aria-label="manuyear2"
                      aria-labelledby="manuyear2"
                      selectedKeys={manuYearState2}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setManuYearState2(new Set(e.target.value.split(",")))}
                    >
                      <SelectItem key="M">2022</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm text-left font-[Calibri] font-bold mt-[10px]">
                    First Reg.Date
                  </div>
                  <div className="ml-[13.5px] w-2/6">
                    <Select
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    variant="bordered"
                    name="firstRegDate"
                    aria-label="firstRegDate"
                    aria-labelledby="firstRegDate"
                    selectedKeys={firstRegDateState}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setFirstRegDateState((new Set(e.target.value.split(","))))}
                    >
                      <SelectItem key="Select.." value="Select..">
                        Select...
                      </SelectItem>
                      <SelectItem key="<" value="<">
                        {"<"}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"<="}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"="}
                      </SelectItem>
                      <SelectItem key=">" value=">">
                        {">"}
                      </SelectItem>
                      <SelectItem key=">=" value=">=">
                        {">="}
                      </SelectItem>
                      <SelectItem key="between" value="between">
                        between
                      </SelectItem>
                    </Select>
                  </div>
                  <div
                    className={`ml-1 w-2/6 h-8 border-[2px]  border-[lightgray]`}
                  >
                    <DatePicker
                      className="text-xs font-[Calibri] p-[4px] w-[90px]"
                      name="firstRegDate1"
                      selected={firstRegDate1}
                      onChange={handleDateChange}
                    />
                  </div>
                  <div
                    className={`ml-1 w-2/6  h-8 border-[2px]  border-[lightgray]`}
                  >
                    <DatePicker
                      className="text-xs font-[Calibri] p-[4px] w-[90px]"
                      name="firstRegDate2"
                      selected={firstRegDate2}
                      onChange={handleDateChange1}
                    />
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm text-left font-[Calibri] font-bold mt-[10px]">PGV Weight</div>
                  <div className="ml-[25px] w-2/6">
                    <Select
                    labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="pgvweight"
                      aria-label="pgvweight"
                      aria-labelledby="pgvweight"
                      selectedKeys={pgvWeightState}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setPgvWeightState(new Set(e.target.value.split(",")))}
                    >
                      <SelectItem key="Select.." value="Select..">
                        Select...
                      </SelectItem>
                      <SelectItem key="<" value="<">
                        {"<"}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"<="}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"="}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"="}
                      </SelectItem>
                      <SelectItem key=">" value=">">
                        {">"}
                      </SelectItem>
                      <SelectItem key=">=" value=">=">
                        {">="}
                      </SelectItem>
                      <SelectItem key="between" value="between">
                        between
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="ml-1 w-2/6">
                    <Input
                      radius="none"
                      size="sm"
                      variant="bordered"
                      defaultValue="0.0"
                      name="pgvWeight1"
                      value={pgvWeight1}
                      onValueChange={setPgvWeight1}
                    />
                  </div>
                  <div className="ml-1 w-2/6">
                    <Input
                      radius="none"
                      size="sm"
                      variant="bordered"
                      defaultValue="10.0"
                      name="pgvWeight2"
                      value={pgvWeight2}
                      onValueChange={setPgvWeight2}
                    />
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm text-left font-[Calibri] font-bold mt-[10px]">Standing</div>
                  <div className="ml-[43.5px] w-2/6">
                    <Select
                    labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="Standing"
                      aria-label="Standing"
                      aria-labelledby="Standing"
                      selectedKeys={standingState}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setStandingState((new Set(e.target.value.split(","))))}
                    >
                      <SelectItem key="Select.." value="Select..">
                        Select...
                      </SelectItem>
                      <SelectItem key="<" value="<">
                        {"<"}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"<="}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"="}
                      </SelectItem>
                      <SelectItem key=">" value=">">
                        {">"}
                      </SelectItem>
                      <SelectItem key=">=" value=">=">
                        {">="}
                      </SelectItem>
                      <SelectItem key="between" value="between">
                        between
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="ml-1 w-2/6">
                    <Input radius="none" size="sm" variant="bordered" name="standing1" value={standing1} onValueChange={setStanding1} />
                  </div>
                  <div className="ml-1 w-2/6">
                    <Input radius="none" size="sm" variant="bordered" name="standing2" value={standing2} onValueChange={setStanding2} />
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm text-left font-[Calibri] font-bold mt-[10px]">Lower Cap</div>
                  <div className="ml-[33.5px] w-2/6">
                    <Select
                    labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="lowerCap"
                    aria-label="lowerCap"
                    aria-labelledby="lowerCap"
                    selectedKeys={lowerCapState}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setLowerCapState(new Set(e.target.value.split(",")))}
                    >
                      <SelectItem key="Select.." value="Select..">
                        Select...
                      </SelectItem>
                      <SelectItem key="<" value="<">
                        {"<"}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"<="}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"="}
                      </SelectItem>
                      <SelectItem key=">" value=">">
                        {">"}
                      </SelectItem>
                      <SelectItem key=">=" value=">=">
                        {">="}
                      </SelectItem>
                      <SelectItem key="between" value="between">
                        between
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="ml-1 w-2/6">
                    <Input radius="none" size="sm" variant="bordered" name="lowerCap1" value={lowerCap1} onValueChange={setLowerCap1}/>
                  </div>
                  <div className="ml-1 w-2/6">
                    <Input radius="none" size="sm" variant="bordered" name="lowerCap2" value={lowerCap2} onValueChange={setLowerCap2}/>
                  </div>
                </div>
                <div className="flex flex-row ">
                  <div className="text-sm text-left font-[Calibri] font-bold mt-[10px]">Upper Cap</div>
                  <div className="ml-[33.5px] w-2/6">
                    <Select
                    labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      variant="bordered"
                      name="upperCap"
                      aria-label="upperCap"
                      aria-labelledby="upperCap"
                      selectedKeys={upperCapState}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>setUpperCapState(new Set(e.target.value.split(",")))}
                    >
                      <SelectItem key="Select.." value="Select..">
                        Select...
                      </SelectItem>
                      <SelectItem key="<" value="<">
                        {"<"}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"<="}
                      </SelectItem>
                      <SelectItem key="<=" value="<=">
                        {"="}
                      </SelectItem>
                      <SelectItem key=">" value=">">
                        {">"}
                      </SelectItem>
                      <SelectItem key=">=" value=">=">
                        {">="}
                      </SelectItem>
                      <SelectItem key="between" value="between">
                        between
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="ml-1 w-2/6">
                    <Input radius="none" size="sm" variant="bordered" name="upperCap1" value={upperCap1} onValueChange={setUpperCap1}/>
                  </div>
                  <div className="ml-1 w-2/6">
                    <Input radius="none" size="sm" variant="bordered" name="upperCap2" value={upperCap2} onValueChange={setUpperCap2}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end pb-[10px] mr-4 mt-2">
              <Button
                radius="sm"
                size="sm"
                type="reset"
                className="bg-white border border-solid border-[lightgray] font-[bold] rounded-sm"
                onClick={reset}
              >
                Reset
              </Button>
              <Button
                type="button"
                radius="none"
                size="sm"
                className={`ml-[5px] bg-[#00AF8F] text-white font-[Calibri] font-bold rounded-sm`}
                  onClick={()=>{navigate('/addwatchlistdata')}}
              >
                Search
              </Button>
            </div>
          </h1>
        </div>
        <Button
          type="button"
          radius="none"
          size="sm"
          variant="bordered"
          className="float-left bg-white shadow-sm ml-2  font-[Calibri] font-bold rounded-sm border border-[lightgray] mt-1"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export default AddWatchList;