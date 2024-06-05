import React, { useEffect, useState } from "react";
import Appointment from "./registration/Appointment";
import Tabs from "./registration/TabsData";
import Registration from "./registration/Registration";
import { useSelector } from "react-redux";
import StartInspectionButton from "../common/components/StartInspectionButton";
import {
  stationA,
  stationB,
  stationC,
  stationD,
  stationE,
  stationF,
  DTCS,
} from "../common/components/CommonStatios";

function LandingPage() {
  const [currentStation, setCurrentStation] = useState();
  const showTabs = useSelector((state) => state.tabs.tabs);
  const laneId = localStorage.getItem("lane") || "";
  const userId = localStorage.getItem("userName") || "";

  const deviceType = localStorage.getItem("deviceType") || "";

  useEffect(() => {
    const station = JSON.parse(localStorage.getItem("station") || "{}");
    setCurrentStation(station);
  }, []);

  return (
    <div className=" text-h1Heading pl-4 pr-3 pt-5">
      <Appointment />
      {deviceType === "Tablet" ? (
        <Tabs selectedKey="inspection" AvailTabs={stationF} />
      ) : (
        <>
          {currentStation === "A" ? (
            showTabs ? (
              <Tabs AvailTabs={stationA} />
            ) : (
              <Registration />
            )
          ) : null}

          {showTabs === false &&
            (currentStation === "B" ||
              currentStation === "C" ||
              currentStation === "D") && (
              <StartInspectionButton
                station={currentStation}
                laneId={laneId}
                userId={userId}
              />
            )}

          {showTabs && currentStation === "B" ? (
            <Tabs selectedKey="brake" AvailTabs={stationB} />
          ) : (
            ""
          )}

          {showTabs && currentStation === "C" ? (
            <Tabs AvailTabs={stationC} />
          ) : (
            ""
          )}
          {currentStation === "E" ? (
            <Tabs
              selectedKey="overallResultVerification"
              AvailTabs={stationE}
            />
          ) : (
            ""
          )}
          {currentStation === "DTCS" ? (
            <Tabs selectedKey="SmokeTest" AvailTabs={DTCS} />
          ) : (
            ""
          )}
          {showTabs && currentStation === "D" ? (
            <Tabs AvailTabs={stationD} />
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default LandingPage;
