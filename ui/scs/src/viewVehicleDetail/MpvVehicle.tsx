import {
  Button,
  Input,
  Select,
  Selection,
  SelectItem,
} from "@nextui-org/react";
// import React from "react";
import React, { useState } from "react";

export default function App() {
  const [subClass, setSubClass] = useState<Selection>(new Set([]));
  const [resetvalue, setResetvalue] = useState("");
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
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Vehicle Class
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        size="sm"
                        maxLength={15}
                        placeholder="MPV - Movement Permit Vehicles"
                        disabled
                        data-testid="vehicleClass"
                      />
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
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
                        data-testId="subclassDropdown"
                        aria-label="center"
                        variant="bordered"
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
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Float Name
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[485px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={floatName}
                        onChange={(e) => {
                          setFloatName(e.target.value);
                        }}
                        placeholder="Float Name"
                        data-testid="floatName"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Permit No.
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={permitNo}
                        onChange={(e) => {
                          setPermitNo(e.target.value);
                        }}
                        placeholder="Permit No."
                        data-testid="permitNo"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      VV No.
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={vvNo}
                        onChange={(e) => {
                          setVvNo(e.target.value);
                        }}
                        placeholder="VV No."
                        data-testid="vvNo"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Chassis No.{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[485px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={chassisno}
                        onChange={(e) => {
                          setChassisno(e.target.value);
                        }}
                        placeholder="Chassis No."
                        data-testid="chassisNo"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Country Code
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                         radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px] ">
                          country code
                        </SelectItem>
                      </Select>
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Make
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={make}
                        onChange={(e) => {
                          setMake(e.target.value);
                        }}
                        placeholder="Engine Make"
                        data-testid="engineMake"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Model{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={model}
                        onChange={(e) => {
                          setModel(e.target.value);
                        }}
                        placeholder="Modal"
                        data-testid="modal"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Body Type{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                         radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select..."
                      >
                        <SelectItem
                          className="text-[10px]"
                          placeholder="Select..."
                        >
                          Body type
                        </SelectItem>
                      </Select>
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Manu Year
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={manuYear}
                        onChange={(e) => {
                          setManuYear(e.target.value);
                        }}
                        placeholder="Manu. Year"
                        data-testid="manuYear"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-1 pt-1 w-[85px]">
                      Seat Capacity{" "}
                    </span>
                    <span className="text-[10.5px] w-[520px] text-black text-left pl-1">
                      <div className="flex">
                        <div className="flex flex-col-2  ...">
                          <span className="text-[10.5px] text-black font-bold text-left  pt-1 w-[45px]">
                            Lower
                          </span>
                          <span className="text-[10.5px] text-black text-left ">
                            <Input
                              className="w-[122px]"
                              id="standard-basic"
                               radius="none"
                              size="sm"
                              variant="bordered"
                              value={lower}
                              onChange={(e) => {
                                setLower(e.target.value);
                              }}
                              maxLength={15}
                              placeholder="Lower"
                              data-testid="lower"
                            />
                          </span>
                        </div>
                        <div className="flex flex-col-2  ...">
                          <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[45px]">
                            Upper
                          </span>
                          <span className="text-[10.5px] text-black text-left ">
                            <Input
                              className="w-[122px]"
                              id="standard-basic"
                               radius="none"
                              size="sm"
                              variant="bordered"
                              value={upper}
                              onChange={(e) => {
                                setUpper(e.target.value);
                              }}
                              maxLength={15}
                              placeholder="Upper"
                              data-testid="upper"
                            />
                          </span>
                        </div>
                        <div className="flex flex-col-2  ...">
                          <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[45px]">
                            Stand
                          </span>
                          <span className="text-[10.5px] text-black text-left ">
                            <Input
                              className="w-[122px]"
                              id="standard-basic"
                               radius="none"
                              size="sm"
                              variant="bordered"
                              value={stand}
                              onChange={(e) => {
                                setStand(e.target.value);
                              }}
                              maxLength={15}
                              placeholder="Stand"
                              data-testid="stand"
                            />
                          </span>
                        </div>
                      </div>
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left -ml-[5px] pt-1 w-[85px]">
                      Engine Size
                    </span>
                    <span className="text-[10.5px] text-black text-left ml-[10px]">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={engineSize}
                        onChange={(e) => {
                          setEngineSize(e.target.value);
                        }}
                        placeholder="Engine Size"
                        data-testid="engineSize"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Engine No.{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={engineNo}
                        onChange={(e) => {
                          setEngineNo(e.target.value);
                        }}
                        placeholder="Engine No"
                        data-testid="engineNo"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Engine Type
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={engineType}
                        onChange={(e) => {
                          setEngineType(e.target.value);
                        }}
                        placeholder="Select"
                        data-testid="engineType"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Reg. Doc. No{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={regDocNo}
                        onChange={(e) => {
                          setRegDocNo(e.target.value);
                        }}
                        placeholder="Reg. Doc. No."
                        data-testid="regDocNo"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      District Code{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={districtCode}
                        onChange={(e) => {
                          setDistrictCode(e.target.value);
                        }}
                        placeholder="District Code"
                        data-testid="districtCode"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Engine Make{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={engineMake}
                        onChange={(e) => {
                          setEngineMake(e.target.value);
                        }}
                        placeholder="Engine Make"
                        // data-testid="engineMake"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      District Location
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={districtLocation}
                        onChange={(e) => {
                          setDistrictLocation(e.target.value);
                        }}
                        placeholder="District Location"
                        data-testid="districtLocation"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Vehicle Type{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={vehicleType}
                        onChange={(e) => {
                          setVehicleType(e.target.value);
                        }}
                        placeholder="Vehicle Type"
                        data-testid="vehicleType"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Service Brake{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={serviceBrake}
                        onChange={(e) => {
                          setServiceBrake(e.target.value);
                        }}
                        placeholder="Service Brake"
                        data-testid="servicebrake"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Parking Brake{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={parkingBrake}
                        onChange={(e) => {
                          setParkingBrake(e.target.value);
                        }}
                        placeholder="Parking Brake"
                        data-testid="parkingbrake"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Steering System
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={steeringSystem}
                        onChange={(e) => {
                          setSteeringSystem(e.target.value);
                        }}
                        placeholder="Steering System"
                        data-testid="steeringsystem"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Location{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={locate}
                        onChange={(e) => {
                          setLocate(e.target.value);
                        }}
                        placeholder="Location"
                        data-testid="location"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Location (Chinese){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={locateChinese}
                        onChange={(e) => {
                          setLocateChinese(e.target.value);
                        }}
                        placeholder="Location(Chinese)"
                        data-testid="location(chinese)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Renewal Date{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={renewalDate}
                        onChange={(e) => {
                          setRenewalDate(e.target.value);
                        }}
                        placeholder="Renewal Date"
                        size="sm"
                        name="startDate"
                        type="date"
                      />
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Primary Color
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                         radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select..."
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Secondary Color{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                         radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select..."
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Tyre Size (1){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={tyreSize1}
                        onChange={(e) => {
                          settyreSize1(e.target.value);
                        }}
                        placeholder="Tyre Sixe(1)"
                        data-testid="tyresixe(1)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Tyre Size (2){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={tyreSize2}
                        onChange={(e) => {
                          setTyreSize2(e.target.value);
                        }}
                        placeholder="Tyre Sixe(2)"
                        data-testid="tyresixe(2)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Tyre Size (3)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={tyreSize3}
                        onChange={(e) => {
                          setTyreSize3(e.target.value);
                        }}
                        placeholder="Tyre Sixe(3)"
                        data-testid="tyresixe(3)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Tyre Size (4)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={tyreSize4}
                        onChange={(e) => {
                          setTyreSize4(e.target.value);
                        }}
                        placeholder="Tyre Sixe(4)"
                        data-testid="tyresixe(4)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Tyre Size (5)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={tyreSize5}
                        onChange={(e) => {
                          setTyreSize5(e.target.value);
                        }}
                        placeholder="Tyre Sixe(5)"
                        data-testid="tyresixe(5)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Tyre Size (6){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={tyreSize6}
                        onChange={(e) => {
                          setTyreSize6(e.target.value);
                        }}
                        placeholder="Tyre Sixe(6)"
                        data-testid="tyresixe(6)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Tyre Size (7)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={tyreSize7}
                        onChange={(e) => {
                          setTyreSize7(e.target.value);
                        }}
                        placeholder="Tyre Sixe(7)"
                        data-testid="tyresixe(7)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Size (L)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={sizeL}
                        onChange={(e) => {
                          setSizeL(e.target.value);
                        }}
                        placeholder="Size (L)"
                        data-testid="size(L)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Size (W)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={sizeW}
                        onChange={(e) => {
                          setSizeW(e.target.value);
                        }}
                        placeholder="Size (W)"
                        data-testid="size(W)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Size (H){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={sizeH}
                        onChange={(e) => {
                          setSizeH(e.target.value);
                        }}
                        placeholder="Size (H)"
                        data-testid="size(H)"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Contact Person
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={contactPerson}
                        onChange={(e) => {
                          setContactPerson(e.target.value);
                        }}
                        placeholder="Contact persons"
                        data-testid="contactpersons"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Telephone No{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                         radius="none"
                        variant="bordered"
                        value={telephoneNo}
                        onChange={(e) => {
                          setTelephoneNo(e.target.value);
                        }}
                        placeholder="Telephone No"
                        data-testid="telephoneNo"
                        size="sm"
                        maxLength={15}
                      />{" "}
                    </span>
                  </div>
                </div>
              </h1>
            </div>
          </div>
          <div className="justify-end">
            <Button
              type="button"
              className="ml-[5px] bg-[#ffffff] float-left rounded-none"
              size="sm"
              radius="none"
              variant="bordered"
              data-testId="backButton"
              // onClick={handleHistoryPopup}
            >
              Back
            </Button>

            <Button
              type="button"
              className="ml-[5px] bg-[#00AF8F] text-white mr-2 float-right rounded-sm"
              size="sm"
              radius="none"
              variant="bordered"
              data-testId="saveButton"
              // onClick={handleHistoryPopup}
            >
              Save
            </Button>

            <Button
              type="button"
              className="ml-[5px] bg-[#ffffff]  mr-2 float-right rounded-sm"
              size="sm"
              radius="none"
              variant="bordered"
              onClick={ResetbtnFunc}
              data-testId="resetButton"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
