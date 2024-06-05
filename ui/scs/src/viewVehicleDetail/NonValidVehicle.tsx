import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NonValidVehicle() {
  const [resetvalue, setResetvalue] = useState("");

  const [vehicleClass, setVehicleClass] = useState<Selection>(new Set([]));
  const [countryCode, setCountryCode] = useState<Selection>(new Set([]));
  const [make, setMake] = useState<Selection>(new Set([]));
  const [bodyType, setBodyType] = useState<Selection>(new Set([]));
  const [engineType, setEngineType] = useState<Selection>(new Set([]));
  const [lantauVehicle, setLantauVehicle] = useState<Selection>(new Set([]));
  const [privateRoadVehicle, setPrivateRoadVehicle] = useState<Selection>(
    new Set([])
  );
  const [hybirdVehicle, setHybirdVehicle] = useState<Selection>(new Set([]));
  const [leftHandSteering, setLeftHandSteering] = useState<Selection>(
    new Set([])
  );
  const [primaryColor, setPrimaryColor] = useState<Selection>(new Set([]));
  const [secondaryColor, setSecondaryColor] = useState<Selection>(new Set([]));

  const [floatName, setFloatName] = useState("");
  const [chassisno, setChassisno] = useState("");
  const [ceno, setCEno] = useState("");
  const [tano, setTaNo] = useState("");
  const [regmark, setRegMark] = useState("");
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
  const [lugWeight, setLugWeight] = useState("");
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

  const navigate = useNavigate();

  const ResetbtnFunc = () => {
    setResetvalue(new Set([]));
    setVehicleClass(new Set([]));
    setCountryCode(new Set([]));
    setMake(new Set([]));
    setBodyType(new Set([]));
    setEngineType(new Set([]));
    setLantauVehicle(new Set([]));
    setPrivateRoadVehicle(new Set([]));
    setHybirdVehicle(new Set([]));
    setLeftHandSteering(new Set([]));
    setPrimaryColor(new Set([]));
    setSecondaryColor(new Set([]));

    setFloatName("");
    setChassisno("");
    setCEno("");
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
    setLugWeight("");
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
  const searchHandle = () => {
    navigate(`/searchVehicle`);
  };
  return (
    <>
      <div>
        <div>
          <div className="flex">
            <div className="flex-initial text-[#007F62] ml-[20px] mb-1 font-bold text-sm">
              Vehicle Enquiry {">"} Vehicle Detail
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
                      Vehicle Type
                    </span>
                    <span className="text-[11.5px] text-black text-left pl-3 w-[220px] mt-1">
                      Non-VALID
                    </span>
                  </div>
                  <div className="flex flex-col-2 ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pt-1 w-[100px]">
                      vehicle ID
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-[186px] "></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Float Name
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[485px]"
                        id="standard-basic"
                        data-testid="floatName"
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
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Ref. No.
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-[210px]"></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[128px]"></span>
                    <span className="text-[10.5px] text-black text-left pl-[167px]"></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Chassis No.{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[485px]"
                        id="standard-basic"
                        data-testid="chassisNo"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Chassis No."
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
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Vehicle Class
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        data-testid="vehicleClass"
                        className="w-[190px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body Type
                        </SelectItem>
                      </Select>
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Sub-Class
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="subClass"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="N/A"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      C&E No.{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="CandENo"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="C&E No."
                        value={ceno}
                        onChange={(e) => {
                          setCEno(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      T.A. No{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="TANo"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="T.A. No."
                        value={tano}
                        onChange={(e) => {
                          setTaNo(e.target.value);
                        }}
                      />
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Reg. Mark
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="regMark"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Reg. Mark"
                        value={regmark}
                        onChange={(e) => {
                          setRegMark(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Country Code
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="countryCode"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Make{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="make"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>
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
                        data-testid="model"
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
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Body Type{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="bodyType"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      manu.year
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="manuYear"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="manu.year"
                        value={manuYear}
                        onChange={(e) => {
                          setManuYear(e.target.value);
                        }}
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
                          <span className="text-[10.5px] text-black font-bold text-left  pt-1 w-[60px]">
                            Lower
                          </span>
                          <span className="text-[10.5px] text-black text-left ">
                            <Input
                              className="w-[100px]"
                              id="standard-basic"
                              data-testid="lower"
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
                          <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[60px]">
                            Upper
                          </span>
                          <span className="text-[10.5px] text-black text-left ">
                            <Input
                              className="w-[100px]"
                              id="standard-basic"
                              data-testid="upper"
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
                          <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[60px]">
                            Stand
                          </span>
                          <span className="text-[10.5px] text-black text-left ">
                            <Input
                              className="w-[100px]"
                              id="standard-basic"
                              data-testid="stand"
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
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Engine Size{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="engineSize"
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Engine No.
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="engineNo"
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Engine Type{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="engineType"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Reg.Doc.No{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="regDocNo"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Reg.Doc.No"
                        value={regDocNo}
                        onChange={(e) => {
                          setRegDocNo(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[108px]">
                      PSL{" "}
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[188px]"
                      data-testid="PSL"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[106px]">
                      Permit
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[188px]"
                      data-testid="Permit"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[108px]">
                      First.Reg.Date{" "}
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[188px]"
                      data-testid="firstRegDate"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Licence Expiry{" "}
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[210px]"
                      data-testid="licenseExpiry"
                    ></span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[108px]">
                      VICO{" "}
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[188px]"
                      data-testid="VICO"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[90px]">
                      AD approval Date
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[204px]"
                      data-testid="adApprovalDate"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[108px]">
                      Renewal Date{" "}
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[188px]"
                      data-testid="renewalDate"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Last Update{" "}
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[210px]"
                      data-testid="lastUpdate"
                    ></span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Cancel Reason{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="cancelReason"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[106px]">
                      Insp.Order
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[188px]"
                      data-testid="InspOrder"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[110px]">
                      Status Code
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[187px]"
                      data-testid="statusCode"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Rated Power
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[210px]"
                      data-testid="ratedPower"
                    ></span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[108px]">
                      Weight Code{" "}
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[187px]"
                      data-testid="weightCode"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      PGV Weight
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="PGVWeight"
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      PCV Weight
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="PCVWeight"
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      LUG Weight
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="LUGWeight"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="LUG Weight"
                        value={lugWeight}
                        onChange={(e) => {
                          setLugWeight(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Axle 1{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="Axle1"
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Axle 2
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="Axle2"
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Axle 3{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="Axle3"
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Axle 4{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="Axle4"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Axle 4"
                        value={axle4}
                        onChange={(e) => {
                          setAxle4(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Axle 5{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="Axle5"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Axle 5"
                        value={axle5}
                        onChange={(e) => {
                          setAxle5(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Axle 6
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="Axle6"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Axle 6"
                        value={axle6}
                        onChange={(e) => {
                          setAxle6(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Axle 7{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="Axle7"
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
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Lantau Vehicle{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="LantauVehicle"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Private Road Vehicle
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="privateRoadVehicle"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Hybird Vehicle
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        data-testid="hybridVehicle"
                        className="w-[190px]"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Left Hand Steering{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="LHSteering"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>
                    </span>
                  </div>

                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      PVRM{" "}
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[210px]"
                      data-testid="PVRM"
                    ></span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[108px]">
                      PVRM Double Line{" "}
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[188px]"
                      data-testid="PVRMDoubleLine"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[106px]">
                      PVRM Line 1
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[188px]"
                      data-testid="PVRM1Line"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[108px]">
                      PVRM Line 2{" "}
                    </span>
                    <span
                      className="text-[10.5px] text-black text-left pl-[188px]"
                      data-testid="PVRM2Line"
                    ></span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Primary Color{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="primaryColor"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Secondary Color{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Select
                        labelPlacement="outside-left"
                        className="w-[190px]"
                        data-testid="secondaryColor"
                        radius="none"
                        size="sm"
                        name="center"
                        aria-label="center"
                        variant="bordered"
                        placeholder="Select"
                      >
                        <SelectItem className="text-[10px]">
                          Body type
                        </SelectItem>
                      </Select>{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Tyre Size (Front)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="tyreSize"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Tyre Size (Front)"
                        value={tyreSizeFront}
                        onChange={(e) => {
                          setTyreSizeFront(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Tyre Size (rear){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="tyreSizeRear"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Tyre Size (rear)"
                        value={tyreSizeRear}
                        onChange={(e) => {
                          setTyreSizeRear(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Size L{" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="sizeL"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Size L"
                        value={sizeL}
                        onChange={(e) => {
                          setSizeL(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                </div>
                <div className="flex p-1">
                  <div className="flex flex-col-4  ...">
                    <span className="text-[10.5px] text-black font-bold text-left  pl-2 pt-1 w-[85px]">
                      Size (W){" "}
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="sizeW"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder="Size (W)"
                        value={sizeW}
                        onChange={(e) => {
                          setSizeW(e.target.value);
                        }}
                      />{" "}
                    </span>
                  </div>
                  <div className="flex flex-col-2  ...">
                    <span className="text-[10.5px] text-black font-bold text-left pl-2 pt-1 w-[85px]">
                      Size (H)
                    </span>
                    <span className="text-[10.5px] text-black text-left pl-5">
                      <Input
                        className="w-[190px]"
                        id="standard-basic"
                        data-testid="sizeH"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        placeholder=" Size (H)"
                        value={sizeH}
                        onChange={(e) => {
                          setSizeH(e.target.value);
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
              onClick={() => searchHandle()}
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
              // data-test-id="ResetbtnFunc"
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
export default NonValidVehicle;