import React, { useState, ChangeEvent } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Selection,
} from "@nextui-org/react";

export default function App() {
  const [resetvalue, setResetvalue] = useState("");
  const [subClass, setSubClass] = useState<Selection>(new Set([]));
  const [countryCode, setCountryCode] = useState<Selection>(new Set([]));
  const [bodyType, setBodyType] = useState<Selection>(new Set([]));
  const [primaryColor, setPrimaryColor] = useState<Selection>(new Set([]));
  const [secondaryColor, setSecondaryColor] = useState<Selection>(new Set([]));

  const [floatName, setFloatName] = useState("");
  const [permitNo, setPermitNo] = useState("");
  const [vvNo, setVvNo] = useState("");
  const [chassisno, setChassisno] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [manuYear, setManuYear] = useState("");
  const [lower, setLower] = useState("");
  const [upper, setUpper] = useState("");
  const [stand, setStand] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [engineNo, setEngineNo] = useState("");
  const [engineType, setEngineType] = useState("");
  const [regDocNo, setRegDocNo] = useState("");
  const [districtCode, setDistrictCode] = useState("");
  const [engineMake, setEngineMake] = useState("");
  const [districtLocation, setDistrictLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [serviceBrake, setServiceBrake] = useState("");
  const [parkingBrake, setParkingBrake] = useState("");
  const [steeringSystem, setSteeringSystem] = useState("");
  const [locate, setLocate] = useState("");
  const [locateChinese, setLocateChinese] = useState("");
  const [renewalDate, setRenewalDate] = useState("");
  const [tyreSize1, setTyreSize1] = useState("");
  const [tyreSize2, setTyreSize2] = useState("");
  const [tyreSize3, setTyreSize3] = useState("");
  const [tyreSize4, setTyreSize4] = useState("");
  const [tyreSize5, setTyreSize5] = useState("");
  const [tyreSize6, setTyreSize6] = useState("");
  const [tyreSize7, setTyreSize7] = useState("");
  const [sizeL, setSizeL] = useState("");
  const [sizeW, setSizeW] = useState("");
  const [sizeH, setSizeH] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [telephoneNo, setTelephoneNo] = useState("");

  const handleChange = (event) => {
    setResetvalue(event.target.value);
  };

  const ResetbtnFunc = () => {
    setSubClass(new Set([]));
    setCountryCode(new Set([]));
    setBodyType(new Set([]));
    setPrimaryColor(new Set([]));
    setSecondaryColor(new Set([]));

    setFloatName("");
    setPermitNo("");
    setVvNo("");
    setChassisno("");
    setMake("");
    setModel("");
    setManuYear("");
    setLower("");
    setUpper("");
    setStand("");
    setEngineSize("");
    setEngineNo("");
    setEngineType("");
    setRegDocNo("");
    setDistrictCode("");
    setEngineMake("");
    setDistrictLocation("");
    setVehicleType("");
    setServiceBrake("");
    setParkingBrake("");
    setSteeringSystem("");
    setLocate("");
    setLocateChinese("");
    setRenewalDate("");
    setTyreSize1("");
    setTyreSize2("");
    setTyreSize3("");
    setTyreSize4("");
    setTyreSize5("");
    setTyreSize6("");
    setTyreSize7("");
    setSizeL("");
    setSizeW("");
    setSizeH("");
    setContactPerson("");
    setTelephoneNo("");
  };
  const lanes = [{ value: "1" }, { value: "2" }, { value: "3" }];
  return (
    <>
      <div>
        <div>
          <div className="flex">
            <div className="flex-initial text-[#007F62]  ml-[20px] mb-1 font-bold text-sm">
              Vehicle Enquiry {">"} Vehicle Add
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[100%] p-[5px] pl-2 ">
              <h1>
                <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                  Vehicles Particulars
                </h5>
              
                <div className="flex p-1 pt-4">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-2 text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Vehicle Class
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        size="sm"
                        maxLength={15}
                        placeholder="VV Village Vehicle"
                        disabled
                      />
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-3 text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Sub-Class
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        items={lanes}
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                        selectedKeys={subClass}
                        onChange={(e) => {
                          setSubClass(new Set(e.target.value.split(",")));
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-3 text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Float Name
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[497px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Float Name"
                        value={floatName}
                        onChange={(e) => {
                          setFloatName(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-2 text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Permit No.
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Permit No."
                        value={permitNo}
                        onChange={(e) => {
                          setPermitNo(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-3 text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      VV No.
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="VV No."
                        maxLength={15}
                        value={vvNo}
                        onChange={(e) => {
                          setVvNo(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-3 text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Chassis No.{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[497px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Chassis No."
                        maxLength={15}
                        value={chassisno}
                        onChange={(e) => {
                          setChassisno(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] ml-2 text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Country Code
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        items={lanes}
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                        selectedKeys={countryCode}
                        onChange={(e) => {
                          setCountryCode(new Set(e.target.value.split(",")));
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-3 text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Make
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Make"
                        maxLength={15}
                        value={make}
                        onChange={(e) => {
                          setMake(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-3 text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Model{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Model"
                        maxLength={15}
                        value={model}
                        onChange={(e) => {
                          setModel(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-3 text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Body Type{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        items={lanes}
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                        selectedKeys={bodyType}
                        onChange={(e) => {
                          setBodyType(new Set(e.target.value.split(",")));
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
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-2 pl-2 pt-1 w-[85px]">
                      Manu Year
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Manu Year"
                        maxLength={15}
                        value={manuYear}
                        onChange={(e) => {
                          setManuYear(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-3 text-black font-bold text-left pl-1 pt-1 w-[85px]">
                      Seat Capacity{" "}
                    </span>
                    <span className="text-[10.5px] w-[520px] text-black text-left pl-1">
                      <div className="flex">
                        <div className="flex flex-col-2  ...">
                          <span className="text-[10.5px] ml-1 text-black font-bold text-left  pt-1 w-[45px]">
                            Lower
                          </span>
                          <span className="text-[10.5px] text-black text-left ">
                            <Input
                              className="w-[122px]"
                              id="standard-basic"
                              radius="none"
                              size="sm"
                              variant="bordered"
                              maxLength={15}
                              placeholder="Lower"
                              value={lower}
                              onChange={(e) => {
                                setLower(e.target.value);
                              }}
                            />
                          </span>
                        </div>
                        <div className="flex flex-col-2  ...">
                          <span className="text-[10.5px] ml-1 text-black font-bold text-left pl-2 pt-1 w-[45px]">
                            Upper
                          </span>
                          <span className="text-[10.5px] text-black text-left ">
                            <Input
                              className="w-[122px]"
                              id="standard-basic"
                              radius="none"
                              size="sm"
                              variant="bordered"
                              maxLength={15}
                              placeholder="Upper"
                              value={upper}
                              onChange={(e) => {
                                setUpper(e.target.value);
                              }}
                            />
                          </span>
                        </div>
                        <div className="flex flex-col-2  ...">
                          <span className="text-[10.5px] ml-1 text-black font-bold text-left pl-2 pt-1 w-[45px]">
                            Stand
                          </span>
                          <span className="text-[10.5px] text-black text-left ">
                            <Input
                              className="w-[122px]"
                              id="standard-basic"
                              radius="none"
                              size="sm"
                              variant="bordered"
                              maxLength={15}
                              placeholder="Stand"
                              value={stand}
                              onChange={(e) => {
                                setStand(e.target.value);
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] ml-5 text-black font-bold text-left pt-1 w-[85px]">
                      Engine Size
                    </span>
                    <span className="text-[10.5px] text-black text-left ml-[10px]">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Engine Size (cc)"
                        maxLength={15}
                        value={engineSize}
                        onChange={(e) => {
                          setEngineSize(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-2 pl-2 pt-1 w-[85px]">
                      Engine No.{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Engine Number"
                        maxLength={15}
                        value={engineNo}
                        onChange={(e) => {
                          setEngineNo(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Engine Type
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Engine type"
                        maxLength={15}
                        value={engineType}
                        onChange={(e) => {
                          setEngineType(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Reg. Doc. No{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Reg. Doc. No."
                        maxLength={15}
                        value={regDocNo}
                        onChange={(e) => {
                          setRegDocNo(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      District Code{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="District Code"
                        maxLength={15}
                        value={districtCode}
                        onChange={(e) => {
                          setDistrictCode(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-2 pl-2 pt-1 w-[85px]">
                      Engine Make{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Engine Make"
                        maxLength={15}
                        value={engineMake}
                        onChange={(e) => {
                          setEngineMake(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 ml-3 pt-1 w-[85px]">
                      District Location
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="District Location"
                        maxLength={15}
                        value={districtLocation}
                        onChange={(e) => {
                          setDistrictLocation(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Vehicle Type
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Vehicle Type"
                        maxLength={15}
                        value={vehicleType}
                        onChange={(e) => {
                          setVehicleType(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Service Brake{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Service Brake"
                        maxLength={15}
                        value={serviceBrake}
                        onChange={(e) => {
                          setServiceBrake(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-2 pl-2 pt-1 w-[85px]">
                      Parking Brake{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Parking Brake"
                        maxLength={15}
                        value={parkingBrake}
                        onChange={(e) => {
                          setParkingBrake(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Steering System
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Steering System"
                        maxLength={15}
                        value={steeringSystem}
                        onChange={(e) => {
                          setSteeringSystem(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Location{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Location"
                        maxLength={15}
                        value={locate}
                        onChange={(e) => {
                          setLocate(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Location (Chinese){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Location (Chinese)"
                        maxLength={15}
                        value={locateChinese}
                        onChange={(e) => {
                          setLocateChinese(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-2 pl-2 pt-1 w-[85px]">
                      Renewval Date{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        name="startDate"
                        type="date"
                        value={renewalDate}
                        onChange={(e) => {
                          setRenewalDate(e.target.value);
                        }}
                      />
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Primary Color
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        items={lanes}
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        radius="none"
                        size="sm"
                        placeholder="Select"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        selectedKeys={primaryColor}
                        onChange={(e) => {
                          setPrimaryColor(new Set(e.target.value.split(",")));
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Secondary Color{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        items={lanes}
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        radius="none"
                        size="sm"
                        placeholder="Select"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        selectedKeys={secondaryColor}
                        onChange={(e) => {
                          setSecondaryColor(new Set(e.target.value.split(",")));
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Tyre Size (1){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Tyre Size (1)"
                        maxLength={15}
                        value={tyreSize1}
                        onChange={(e) => {
                          setTyreSize1(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-2 pl-2 pt-1 w-[85px]">
                      Tyre Size (2){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Tyre Size (2)"
                        maxLength={15}
                        value={tyreSize2}
                        onChange={(e) => {
                          setTyreSize2(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Tyre Size (3)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Tyre Size (3)"
                        maxLength={15}
                        value={tyreSize3}
                        onChange={(e) => {
                          setTyreSize3(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Tyre Size (4)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Tyre Size (4)"
                        maxLength={15}
                        value={tyreSize4}
                        onChange={(e) => {
                          setTyreSize4(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Tyre Size (5)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Tyre Size (5)"
                        maxLength={15}
                        value={tyreSize5}
                        onChange={(e) => {
                          setTyreSize5(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-2 pl-2 pt-1 w-[85px]">
                      Tyre Size (6){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Tyre Size (6)"
                        maxLength={15}
                        value={tyreSize6}
                        onChange={(e) => {
                          setTyreSize6(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Tyre Size (7)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Tyre Size (7)"
                        maxLength={15}
                        value={tyreSize7}
                        onChange={(e) => {
                          setTyreSize7(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Size (L)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Size (L)"
                        maxLength={15}
                        value={sizeL}
                        onChange={(e) => {
                          setSizeL(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Size (W)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Size (W)"
                        maxLength={15}
                        value={sizeW}
                        onChange={(e) => {
                          setSizeW(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-2 pl-2 pt-1 w-[85px]">
                      Size (H){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Size (H)"
                        maxLength={15}
                        value={sizeH}
                        onChange={(e) => {
                          setSizeH(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Contact Person
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Contact Person"
                        maxLength={15}
                        value={contactPerson}
                        onChange={(e) => {
                          setContactPerson(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left ml-3 pl-2 pt-1 w-[85px]">
                      Telephone No{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        placeholder="Telephone No."
                        maxLength={15}
                        value={telephoneNo}
                        onChange={(e) => {
                          setTelephoneNo(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
              </h1>
            </div>
          </div>
          <div className="justify-end">
            <Button
              className="bg-[#ffffff] float-left ml-2 rounded h-6"
              variant="bordered"
              type="submit"
              fond-bold
            >
              Back
            </Button>

            <Button
              className="text-white bg-[#00AF8F] mr-2 float-right rounded h-6"
              variant="bordered"
              type="submit"
              fond-bold
            >
              Save
            </Button>
            <Button
              className="bg-[#ffffff] float-right mr-2 rounded h-6"
              variant="bordered"
              type="submit"
              fond-bold
              onClick={ResetbtnFunc}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
