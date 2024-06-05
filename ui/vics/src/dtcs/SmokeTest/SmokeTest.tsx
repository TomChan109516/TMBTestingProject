import React, { useState } from "react";
import { Button, Radio, RadioGroup, Input } from "@nextui-org/react";
// import VehicalVerification from "./VehicalVerification";
import RemoteAuthorization from "./RemoteAuthorization";
import SkipDyno from "./SkipDyno";
import SelectReason from "./SelectReason";
import PhotoInfo from "./PhotoInfo";
import Tips from "../../tips";
import DynoTestConfig from "../DynoLugDown/DynoTestConfig";

function SmokeTest() {
  // const [showVehicalVerification, setshowVehicalVerification] = useState(false);
  const [showRemoteAuthorization, setshowRemoteAuthorization] = useState(false);
  const [showtips, setshowtips] = useState(false);
  const [showSkipDyno, setshowSkipDyno] = useState(false);
  const [showSelectReason, setshowSelectReason] = useState(false);
  const [showPhotoInfo, setshowPhotoInfo] = useState(false);
  const [showRemoteAuth, setshowRemoteAuth] = useState(false);
  const [showDynoTestConfig, setshowDynoTestConfig] = useState(false);

  const handleClickAccept = () => {
    setshowSelectReason(false);
    setshowRemoteAuth(true);
  };

  const closeRemoteAuth = (val) => {
    setshowRemoteAuth(val);
  };

  const handleRemoteAuthorization = () => {
    setshowRemoteAuthorization(true);
  };
  const closeRemoteAuthorization = (val) => {
    setshowRemoteAuthorization(val);
  };
  const handletips = () => {
    setshowtips(true);
  };
  const closetips = (val) => {
    setshowtips(val);
  };
  const handleSkipDyno = () => {
    setshowSkipDyno(true);
  };
  const closeSkipDyno = (val) => {
    setshowSkipDyno(val);
  };
  const handleSelectReason = () => {
    setshowSelectReason(true);
  };
  const closeSelectReason = (val) => {
    setshowSelectReason(val);
  };
  const handlePhotoInfo = () => {
    setshowPhotoInfo(true);
  };
  const closePhotoInfo = (val) => {
    setshowPhotoInfo(val);
  };
  const handleDynoTestConfig = () => {
    setshowDynoTestConfig(true);
  };
  const closeDynoTestConfig = (val) => {
    setshowDynoTestConfig(val);
  };
  return (
    <>
      <div className="flex   mr-4 flex-col">
        <div className="flex flex-row justify-end 0">
          <Button
            className={`bg-persianGreen  text-[white] font-bold rounded-sm ml-80`}
            variant="bordered"
            size="sm"
            onClick={handlePhotoInfo}
          >
            Image Capture
          </Button>
          <Button
            className={`bg-persianGreen  text-[white] font-bold rounded-sm ml-8 mr-2`}
            variant="bordered"
            size="sm"
            onClick={handleSelectReason}
          >
            Abort Test
          </Button>
        </div>

        <div className="flex flex-row">
          <label className="text-[red] text-[15px] font-bold ml-2 ">
            Standard
          </label>
        </div>

        <div className="flex flex-row  ">
          <label
            htmlFor="Minimum Required Power(KW)"
            className="text-[14px] text-left font-bold  pt-3 w-[20%] "
          >
            Minimum Required Power(KW)
          </label>
          <div className="text-xs w-[11%] text-black ml-2">
            <Input
              id="standard-basic"
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
              variant="bordered"
            />
          </div>

          <label
            htmlFor="Engine Speed Lower Limit(RPM)"
            className="text-[14px] text-left pt-3 font-bold ml-8 "
          >
            Engine Speed Lower Limit(RPM)
          </label>
          <div className="text-xs w-[11%] ml-8 text-black ">
            <Input
              id="standard-basic"
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
              variant="bordered"
            />
          </div>
          <label
            htmlFor="Engine Speed Upper Limit(RPM)"
            className="text-[14px] text-left pt-3 font-bold ml-8 "
          >
            Engine Speed Upper Limit(RPM)
          </label>
          <div className="text-xs w-[11%] ml-8 text-black">
            <Input
              id="standard-basic"
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
              variant="bordered"
            />
          </div>
        </div>

        <div className="flex flex-row  ">
          <label
            htmlFor="Engine Speed Upper Limit(RPM)"
            className="text-[14px] text-left font-bold  "
          >
            Emission Limit(HSU)
          </label>
          <div className="text-xs w-[11%]  text-black ml-32">
            <Input
              id="standard-basic"
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
              variant="bordered"
            />
          </div>
        </div>

        <div className="bg-[#F5F5F5] ">
          <div className="flex flex-row">
            <label className="text-[red] text-[15px] font-bold ml-2 ">
              Data
            </label>
          </div>

          <div className="flex ">
            <div className="ml-2 justify-start">
              <div className="flex flex-row items-center   ">
                <span className="text-[14px] text-black font-bold text-left  ml-6 mr-9 w-[45%]">
                  Corrected Maximum Power Measured(kW)
                </span>
                <div className="text-xs w-[30%] text-black">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center  ">
                <span className="text-[14px] text-black font-bold text-left ml-6 mr-9 w-[45%]">
                  RPM AT 100%(RPM)
                </span>
                <div className="text-xs w-[30%]  text-black ">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center ">
                <span className="text-[14px] text-black font-bold text-left ml-6 mr-9 w-[45%]">
                  Smoke At 100%(HSU)
                </span>
                <div className="text-xs w-[30%]  text-black">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center ">
                <span className="text-[14px] text-black font-bold text-left ml-6 mr-9 w-[45%]">
                  Ambient Temperature(C)
                </span>
                <div className="text-xs w-[30%]  text-black">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
            </div>
            <div className=" mr-12">
              <div className="flex justify-start  ">
                <span className="text-[14px] text-black font-bold text-left mt-3  mr-24 w-[40%]">
                  VelMaxHP(km/h)
                </span>
                <div className="text-xs w-[55%] text-black">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center ">
                <span className="text-[14px] text-black font-bold text-left  mr-20 w-[45%]">
                  RPM At 90%(RPM)
                </span>
                <div className="text-xs w-[49%] text-black">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center ">
                <span className="text-[14px] text-black font-bold text-left  mr-16 w-[48%]">
                  Smoke At 90%(RPM)
                </span>
                <div className="text-xs w-[47%] text-black">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center ">
                <span className="text-[14px] text-black font-bold text-left mr-8 w-[65%]">
                  Atmospheric pressure(kPa)
                </span>
                <div className="text-xs w-[51%] text-black">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify- end mr-12 ">
                <span className="text-[14px] text-black font-bold mt-3 text-left mr-8 w-[150%]">
                  Max.Engine Speed(RPM)
                </span>
                <div className="text-xs w-[120%] text-black ">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center mr-12 ">
                <span className="text-[14px] text-black font-bold text-left mr-8 w-[120%]">
                  RPM At 80%(RPM)
                </span>
                <div className="text-xs w-[93%] text-black">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center mr-12 ">
                <span className="text-[14px] text-black font-bold text-left mr-8 w-[120%]">
                  Smoke At 80%(HSU)
                </span>
                <div className="text-xs w-[93%]  text-black ">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center mr-12 ">
                <span className="text-[14px] text-black font-bold text-left mr-8 w-[120%]">
                  Humidity(%)
                </span>
                <div className="text-xs w-[93%] text-black">
                  <Input
                    id="standard-basic"
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className="w-[158px]  inline-block  border-[#e0dede] bg-[rgb(250,250,250)] p-1"
                    variant="bordered"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-center">
          <RadioGroup orientation="horizontal" className="">
            <Radio
              size="sm"
              classNames={{
                wrapper:
                  "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                control: "bg-white",
                base: "border-persianGreen",
              }}
              value="F/R"
            >
              <span className="text-red font-bold mr-4">FAIL</span>
            </Radio>
            <Radio
              size="sm"
              classNames={{
                wrapper:
                  "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                control: "bg-white",
                base: "border-persianGreen",
              }}
              value="Diagonal"
            >
              <span className="text-lightCyan font-bold mr-4">PASS</span>
            </Radio>
            <Radio
              onClick={handleSkipDyno}
              size="sm"
              classNames={{
                wrapper:
                  "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                control: "bg-white",
                base: "border-persianGreen",
              }}
              value="Triangle"
            >
              <span className="text-[#CC5500] font-bold mr-4">SKIP</span>
            </Radio>
          </RadioGroup>
        </div>

        <div className="flex justify-center gap-4 pt-3">
          <div className="flex justify-center ">
            <Button
              className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
              variant="bordered"
              size="sm"
              onClick={handleRemoteAuthorization}
            >
              Start Inspection
            </Button>
          </div>

          <div className="flex justify-center ">
            <Button
              className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
              variant="bordered"
              size="sm"
            >
              Retest
            </Button>
          </div>

          <div className="flex justify-center ">
            <Button
              className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
              variant="bordered"
              size="sm"
            >
              Submit
            </Button>
          </div>

          <div className="flex justify-center ">
            <Button
              onClick={handleDynoTestConfig}
              className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
              variant="bordered"
              size="sm"
            >
              Test Config
            </Button>
          </div>
          <div className="flex justify-center ">
            <Button
              className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
              variant="bordered"
              size="sm"
              onClick={handletips}
            >
              Abort/Suspend Test
            </Button>
          </div>

          <div className="flex justify-center ">
            <Button
              className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
              variant="bordered"
              size="sm"
            >
              Remote Authorization
            </Button>
          </div>
        </div>
      </div>

      {/* {showVehicalVerification && (
  <VehicalVerification
    showVehicalVerification={showVehicalVerification}
    closeVehicalVerification={closeVehicalVerification}
  ></VehicalVerification>
)}  */}
      {showRemoteAuthorization && (
        <RemoteAuthorization
          showRemoteAuthorization={showRemoteAuthorization}
          closeRemoteAuthorization={closeRemoteAuthorization}
        ></RemoteAuthorization>
      )}
      {showSkipDyno && (
        <SkipDyno
          showSkipDyno={showSkipDyno}
          closeSkipDyno={closeSkipDyno}
        ></SkipDyno>
      )}
      {showSelectReason && (
        <SelectReason
          showSelectReason={showSelectReason}
          handleClickAccept={handleClickAccept}
          closeSelectReason={closeSelectReason}
        ></SelectReason>
      )}

      {showPhotoInfo && (
        <PhotoInfo
          showPhotoInfo={showPhotoInfo}
          closePhotoInfo={closePhotoInfo}
        ></PhotoInfo>
      )}

      {showRemoteAuth && (
        <RemoteAuthorization
          showRemoteAuthorization={showRemoteAuth}
          closeRemoteAuthorization={closeRemoteAuth}
        ></RemoteAuthorization>
      )}
         {showtips && (
        <Tips
          showtips={showtips}
          closetips={closetips}
        ></Tips>
      )}

{showDynoTestConfig && (
        <DynoTestConfig
          showDynoTestConfig={showDynoTestConfig}
          closeDynoTestConfig={closeDynoTestConfig}
        ></DynoTestConfig>
      )}
    </>
  );
}

export default SmokeTest;
