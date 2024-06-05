import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import VehcleInfoPopup from "../vi/VehicleInfoPopup";
import SubmitPopupInOHMRegistration from "../ohm/SubmitPopupInOHMRegistration";
import MoreInforation from "../moreInformation/MoreInfoPop";
import BrakeTestConfigPopUp from "../brakeTest/BrakeTestConfigPopUp";
import LightingConfigPopup from "../headLamp/LightingConfigPopup";
import SpeedConfigPopUp from "../speed/SpeedConfigPopUp";
import ExhaustPopup from "../exhaust/ExhaustPopup";
import DynometerConfigPopUp from "../dyno/DynometerConfigPopUp";
import ConfirmPhotoCapturePopup from "../imageCapture/PhotoCapturePopup";

const ButtonsData = () => {
  const buttons = [
    { id: 1, name: "Vehicle Info" },
    // { id: 12, name: "OHM" },
    { id: 2, name: "Brake" },
    { id: 3, name: "Speed" },
    { id: 4, name: "Headlamp" },
    { id: 5, name: "Exhaust" },
    { id: 6, name: "Dyno" },
    { id: 7, name: "More Info" },
    { id: 8, name: "Statistic Info" },
    { id: 9, name: "Permit" },
    { id: 10, name: "PSL" },
    { id: 11, name: "StartInspection" },
  ];

  const [VehiclePopup, setVehiclepopup] = useState(false);
  const [ImagePopup, setImagepopup] = useState(false);
  const [startInspection, setStartInspection] = useState(false);
  const [MoreInfo, setMoreInfo] = useState(false);
  const [BrakePopUp, setBrakePopUp] = useState(false);
  const [HeadlampPopUp, setHeadlampPopUp] = useState(false);
  const [SpeedPopUp, setSpeedPopUp] = useState(false);
  const [ExhaustPopUp, setExhaustPopUp] = useState(false);
  const [DynoPopUp, setDynoPopUp] = useState(false);
  // const [OHMPopup, setOHMpopup] = useState(false);

  const handleButtons = (name) => {
    if (name === "Vehicle Info") {
      setVehiclepopup(true);
    }
    // if (name === "Dyno") {
    //   setImagepopup(true);
    // }
    // if (name === "OHM") {
    //   setOHMpopup(true);
    // }

    if (name === "Brake") {
      setBrakePopUp(true);
    }
    if (name === "Headlamp") {
      setHeadlampPopUp(true);
    }
    if (name === "Speed") {
      setSpeedPopUp(true);
    }
    if (name === "Exhaust") {
      setExhaustPopUp(true);
    }
    if (name === "Dyno") {
      setDynoPopUp(true);
    }
    if (name === "More Info") {
      setMoreInfo(true);
    }
    if (name === "StartInspection") {
      // setRegistration(true);
      setStartInspection(true);
    }
    // if (name === "StartInspection") {
    //   setMoreInfo(true);
    // }
  };
  const closePopup = () => {
    setVehiclepopup(false);
    setImagepopup(false);
    setMoreInfo(false);
    setBrakePopUp(false);
    setHeadlampPopUp(false);
    setSpeedPopUp(false);
    setExhaustPopUp(false);
    setDynoPopUp(false);
    setStartInspection(false);
    // setOHMpopup(false);
  };

  return (
    <div className="mb-2 ml-2 mr-2 text-inputTxt font-calibri ">
      {/* -----------buttons----------------- */}
      <div className="flex mt-5">
        <div className="flex-none w-[50px] ml-1 text-persianGreen text-left font-bold ">
          Test Item
        </div>
        <div className="md:w-[90%] lg:w-[60%] mx-auto">
          {buttons.map((button) => (
            <Button
              key={button.name}
              data-testId={button.name}
              className={
                button.name === "Dyno"
                  ? "bg-[white] text-[black] font-bold  ml-[40px]  mb-3 h-6 rounded-md border-greyBorder"
                  : "bg-persianGreen text-white ml-[40px] mb-3 h-6 rounded-md "
              }
              radius="none"
              variant={button.name === "Dyno" ? "bordered" : undefined}
              onClick={() => handleButtons(button.name)}
            >
              {button.name}
            </Button>
          ))}
        </div>
      </div>
      {VehiclePopup && (
        <VehcleInfoPopup
          VehiclePopup={VehiclePopup}
          closePopup={closePopup}
        ></VehcleInfoPopup>
      )}
      {/* {ImagePopup && (
        <ImageCapturePopup
          ImagePopup={ImagePopup}
          closePopup={closePopup}
        ></ImageCapturePopup>
      )} */}
      {MoreInfo && (
        <MoreInforation
          MoreInfo={MoreInfo}
          closePopup={closePopup}
        ></MoreInforation>
      )}

      {/* {OHMPopup && (
        <SubmitPopupInOHMRegistration
          ImagePopup={OHMPopup}
          closePopup={closePopup}
          name="Test Config"
        ></SubmitPopupInOHMRegistration>
      )} */}

      {BrakePopUp && (
        <BrakeTestConfigPopUp
          ImagePopup={BrakePopUp}
          closePopup={closePopup}
        ></BrakeTestConfigPopUp>
      )}

      {HeadlampPopUp && (
        <LightingConfigPopup
          HeadlampPopUp={HeadlampPopUp}
          closePopup={closePopup}
        ></LightingConfigPopup>
      )}

      {SpeedPopUp && (
        <SpeedConfigPopUp
          SpeedPopUp={SpeedPopUp}
          closePopup={closePopup}
        ></SpeedConfigPopUp>
      )}

      {ExhaustPopUp && (
        <ExhaustPopup
          ExhaustPopUp={ExhaustPopUp}
          closePopup={closePopup}
        ></ExhaustPopup>
      )}

      {DynoPopUp && (
        <DynometerConfigPopUp
          DynoPopUp={DynoPopUp}
          closePopup={closePopup}
        ></DynometerConfigPopUp>
      )}
      {startInspection && (
        <ConfirmPhotoCapturePopup
          startInspection={startInspection}
          closePopup={closePopup}
        ></ConfirmPhotoCapturePopup>
      )}
    </div>
  );
};

export default ButtonsData;
