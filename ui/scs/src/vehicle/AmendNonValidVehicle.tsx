import React, { useState, ChangeEvent } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Selection,
} from "@nextui-org/react";

export default function AmendNonValidVehicle() {
  const [resetvalue, setResetvalue] = useState("");
  const [subClass, setSubClass] = useState<Selection>(new Set([]));
  const [countryCode, setCountryCode] = useState<Selection>(new Set([]));
  const [make, setMake] = useState<Selection>(new Set([]));
  const [bodyType, setBodyType] = useState<Selection>(new Set([]));
  const [engineType, setEngineType] = useState<Selection>(new Set([]));
  const [cancleReason, setCancleReason] = useState<Selection>(new Set([]));
  const [lantauVehicle, setLantauVehicle] = useState<Selection>(new Set([]));
  const [privateRoadVehicle, setPrivateRoadVehicle] = useState<Selection>(new Set([]));
  const [hybridVehicle, setHybridVehicle] = useState<Selection>(new Set([]));
  const [leftHandSteering, setLeftHandSteering] = useState<Selection>(new Set([]));
  const [primaryColor, setPrimaryColor] = useState<Selection>(new Set([]));
  const [secondaryColor, setSecondaryColor] = useState<Selection>(new Set([]));

  const [floatName, setFloatName] = useState("");
  const [chassisNo, setChassisNo] = useState("");
  const [vehicleClass, setVehicleClass] = useState("");
  const [ceNo, setCeNo] = useState("");
  const [taNo, setTaNo] = useState("");
  const [regMark, setRegMark] = useState("");
  const [model, setModel] = useState("");
  const [manuYear, setManuYear] = useState("");
  const [lower, setLower] = useState("");
  const [upper, setUpper] = useState("");
  const [stand, setStand] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [engineNo, setEngineNo] = useState("");
  const [regDocNo, setRegDocNo] = useState("");
  const [pgvWeight, setPgvWeight] = useState("");
  const [pcvWeight, setPcvWeight] = useState("");
  const [luvWeight, setLuvWeight] = useState("");
  const [axle1, setAxle1] = useState("");
  const [axle2, setAxle2] = useState("");
  const [axle3, setAxle3] = useState("");
  const [axle4, setAxle4] = useState("");
  const [axle5, setAxle5] = useState("");
  const [axle6, setAxle6] = useState("");
  const [axle7, setAxle7] = useState("");
  const [tyreSizeFront, setTyreSizeFront] = useState("");
  const [tyreSizeRear, setTyreSizeRear] = useState("");
  const [sizeL, setSizeL] = useState("");
  const [sizeW, setSizeW] = useState("");
  const [sizeH, setSizeH] = useState("");

  const handleChange = (event) => {
    setResetvalue(event.target.value);
  };

  const ResetbtnFunc = () => {
    setSubClass(new Set([]));
    setCountryCode(new Set([]));
    setMake(new Set([]));
    setBodyType(new Set([]));
    setEngineType(new Set([]));
    setCancleReason(new Set([]));
    setLantauVehicle(new Set([]));
    setPrivateRoadVehicle(new Set([]));

    setHybridVehicle(new Set([]));
    setLeftHandSteering(new Set([]));
    setPrimaryColor(new Set([]));
    setSecondaryColor(new Set([]));

    setFloatName("");
    setChassisNo("");
    setVehicleClass("");
    setCeNo("");
    setTaNo("");
    setRegMark("");
    setModel("");
    setManuYear("");
    setLower("");
    setUpper("");
    setStand("");
    setEngineSize("");
    setEngineNo("");
    setRegDocNo("");
    setPgvWeight("");
    setPcvWeight("");
    setLuvWeight("");
    setAxle1("");
    setAxle2("");
    setAxle3("");
    setAxle4("");
    setAxle5("");
    setAxle6("");
    setAxle7("");
    setTyreSizeFront("");
    setTyreSizeRear("");
    setSizeL("");
    setSizeW("");
    setSizeH("");
  };
  const lanes = [{ value: "1" }, { value: "2" }, { value: "3" }];
  return (
    <>
      <div>
        <div>
          <div className="flex">
            <div className="flex-initial text-[#007F62]  ml-[20px] mb-1 font-bold text-sm">
              Vehicle Enquiry {">"} Amend Village Vehicle
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[100%] p-[5px] pl-2 ">
              <h1>
                <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
                  Vehicles Particulars
                </h5>

                <div className="grid grid-cols-4 gap-4 pt-3 pr-2">
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Vehicle Type
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 w-[85px]">
                        Non-VALID
                      </span>
                    </div>
                  </div>
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Vehicle ID
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 w-[85px]"></span>
                    </div>
                  </div>
                  <div className="col-span-2 ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Float Name
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          className="w-[535px]"
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
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className="col-span-2 ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Ref. No.
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 w-[85px]">
                        NV-2000039
                      </span>
                    </div>
                  </div>
                  <div className="col-span-2 ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Chassis No.
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          className="w-[535px]"
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Chassis No."
                          value={chassisNo}
                          onChange={(e) => {
                            setChassisNo(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Vehicle Class
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Vehicle Class"
                          value={vehicleClass}
                          onChange={(e) => {
                            setVehicleClass(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Sub-Class
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[194px]"
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
                  </div>
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        C&E No.
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="C&E No."
                          value={ceNo}
                          onChange={(e) => {
                            setCeNo(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        T.A. No.
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="T.A. No."
                          value={taNo}
                          onChange={(e) => {
                            setTaNo(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Reg. Mark
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder=" Reg. Mark"
                          value={regMark}
                          onChange={(e) => {
                            setRegMark(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Country Code
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[194px]"
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
                  </div>
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Make
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[192px]"
                          radius="none"
                          size="sm"
                          name="center"
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
                          selectedKeys={make}
                          onChange={(e) => {
                            setMake(new Set(e.target.value.split(",")));
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
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Model
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Model"
                          value={model}
                          onChange={(e) => {
                            setModel(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Body Type
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[197px]"
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
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Manu. Year
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Manu. Year"
                          value={manuYear}
                          onChange={(e) => {
                            setManuYear(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className="col-span-2 ...">
                    <div className="flex flex-col-2 ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-1 pt-1 w-[85px]">
                        Seat Capacity{" "}
                      </span>
                      <span className="text-[10.5px]  w-[520px] text-black text-left pl-1">
                        <div className="flex">
                          <div className="flex flex-col-2  ...">
                            <span className="text-[10.5px] pl-4 text-black  font-bold text-left  pt-2 w-[45px]">
                              Lower
                            </span>
                            <span className="text-[10.5px] pl-2 text-black text-left ">
                              <Input
                                className="w-[120px]"
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
                            <span className="text-[10.5px]  text-black font-bold text-left pl-4 pt-2 w-[45px]">
                              Upper
                            </span>
                            <span className="text-[10.5px] pl-2 text-black text-left ">
                              <Input
                                className="w-[120px]"
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
                            <span className="text-[10.5px] text-black font-bold text-left pl-4 pt-2 w-[45px]">
                              Stand
                            </span>
                            <span className="text-[10.5px] pl-2 text-black text-left ">
                              <Input
                                className="w-[120px]"
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
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Engine Size
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Engine Size"
                          value={engineSize}
                          onChange={(e) => {
                            setEngineSize(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Engine No.
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Engine No."
                          value={engineNo}
                          onChange={(e) => {
                            setEngineNo(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Engine Type
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[194px]"
                          radius="none"
                          size="sm"
                          name="center"
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
                          selectedKeys={engineType}
                          onChange={(e) => {
                            setEngineType(new Set(e.target.value.split(",")));
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

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Reg. Doc. No.
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Reg. Doc. No."
                          value={regDocNo}
                          onChange={(e) => {
                            setRegDocNo(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        PSL
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 "></span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Permit
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5"></span>
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        First Reg. Date
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5"></span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Licence Expiry
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5"></span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        VICO
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 "></span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Ad Approval Date
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5"></span>
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Renew Date
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5"></span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Last Update
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        28/06/2021 15:55
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2 ">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Cancel Reason
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[195px]"
                          radius="none"
                          size="sm"
                          name="center"
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
                          selectedKeys={cancleReason}
                          onChange={(e) => {
                            setCancleReason(new Set(e.target.value.split(",")));
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

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Insp. Order
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5"></span>
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Status Code
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5"></span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Rated Power
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5"></span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Weight Code
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        0
                      </span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        PGV Weight
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="PGV Weight"
                          value={pgvWeight}
                          onChange={(e) => {
                            setPgvWeight(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        PCV Wight
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="PCV Weight"
                          value={pcvWeight}
                          onChange={(e) => {
                            setPcvWeight(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        LUV Weight
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="LUV Weight"
                          value={luvWeight}
                          onChange={(e) => {
                            setLuvWeight(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Axle 1
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Axle 1"
                          value={axle1}
                          onChange={(e) => {
                            setAxle1(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Axle 2
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Axle 2"
                          value={axle2}
                          onChange={(e) => {
                            setAxle2(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Axle 3
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Axle 3"
                          value={axle3}
                          onChange={(e) => {
                            setAxle3(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Axle 4
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder=" Axle 4"
                          value={axle3}
                          onChange={(e) => {
                            setAxle4(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Axle 5
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder=" Axle 5"
                          value={axle5}
                          onChange={(e) => {
                            setAxle5(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Axle 6
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Engine No."
                          value={axle6}
                          onChange={(e) => {
                            setAxle6(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Axle 7
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Axle 7"
                          value={axle7}
                          onChange={(e) => {
                            setAxle7(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Lantau Vehicle
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[194px]"
                          radius="none"
                          size="sm"
                          name="center"
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
                          selectedKeys={lantauVehicle}
                          onChange={(e) => {
                            setLantauVehicle(new Set(e.target.value.split(",")));
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

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Private Road Vehicle
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[197px]"
                          radius="none"
                          size="sm"
                          name="center"
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
                          selectedKeys={privateRoadVehicle}
                          onChange={(e) => {
                            setPrivateRoadVehicle(new Set(e.target.value.split(",")));
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

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Hybrid Vehicle
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[194px]"
                          radius="none"
                          size="sm"
                          name="center"
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
                          selectedKeys={hybridVehicle}
                          onChange={(e) => {
                            setHybridVehicle(new Set(e.target.value.split(",")));
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
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Left Hand Steering
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[194px]"
                          radius="none"
                          size="sm"
                          name="center"
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
                          selectedKeys={leftHandSteering}
                          onChange={(e) => {
                            setLeftHandSteering(new Set(e.target.value.split(",")));
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
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        PVRM
                      </span>
                      
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        PVRM Double Line
                      </span>
                      
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        PVRM Line 1
                      </span>
                     
                    </div>
                  </div>
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        PVRM Line 2
                      </span>
                      
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Primary Color
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[194px]"
                          radius="none"
                          size="sm"
                          name="center"
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
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
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Secondary Color
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        <Select
                          items={lanes}
                          labelPlacement="outside-left"
                          className="w-[197px]"
                          radius="none"
                          size="sm"
                          name="center"
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
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
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Tyre Size (Front)
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Tyre Size(Front)"
                          value={tyreSizeFront}
                          onChange={(e) => {
                            setTyreSizeFront(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Tyre Size (Rear)
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Tyre Size (Rear)"
                          value={tyreSizeRear}
                          onChange={(e) => {
                            setTyreSizeRear(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Size (L)
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Size (L)"
                          value={sizeL}
                          onChange={(e) => {
                            setSizeL(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4 pb-2 pt-2 pr-2">
                  <div className=" ...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-3 pt-1 w-[85px]">
                        Size (W)
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-2 pt-1 ">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder=" Size (W)"
                          value={sizeW}
                          onChange={(e) => {
                            setSizeW(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>

                  <div className="...">
                    <div className="flex flex-col-2  ...">
                      <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                        Size(H)
                      </span>
                      <span className="text-[10.5px] text-black text-left pl-5">
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          maxLength={15}
                          placeholder="Size (H)"
                          value={sizeH}
                          onChange={(e) => {
                            setSizeH(e.target.value);
                          }}
                        />{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </h1>
            </div>
          </div>
          <div className="justify-end">
            <Button
              className="bg-[#ffffff] float-left ml-2 rounded "
              variant="bordered"
              type="submit"
              size="md"
              fond-bold
            >
              Back
            </Button>

            <Button
              className="text-white bg-[#00AF8F] mr-2 float-right rounded"
              variant="bordered"
              type="submit"
              size="md"
              fond-bold
            >
              Save
            </Button>
            <Button
              className="bg-[#ffffff] float-right mr-2 rounded "
              variant="bordered"
              type="submit"
              size="md"
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
