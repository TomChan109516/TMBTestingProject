import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import Registration from "./Registration";
import MemoInput from "../memo/MemoInput";
import ImageCapture from "../imageCapture/CapturedPhotos";
import OhmScreen from "../ohm/OhmScreen";
import HeadLampLayoutButton from "../headLamp/HeadLampLayoutButton";
import FileUpload from "../fileUpload/FileUpload";
import Brake from "../brakeTest/BrakeTestPage";
import VehicleInfo from "../vi/VehicleTest";
import SealManagement from "../sealManagement/SealManagement";
import Speedometer from "../stationc/Speedometer";
import ExhaustMain from "../exhaust/ExhaustMain";
import ResultVerification from "../stationE/ResultVerification";
import Uci from "../uci/Uci";
import Inspection from "../../vacs/Inspection";
import SmokeTest from "../../dtcs/SmokeTest/SmokeTest";
import Taximeter from "../../dtcs/Taximeter/Taximeter";
import ExhaustTest from "../../dtcs/ExhaustTest/ExhaustTest";
// import ExaminationReport from "../../dtcs/SCR_CSM_004/ExaminationReport";
import OptionTabData from "../../option/OptionTabData";



const tabAvailable = [
  {
    key: "Registration",
    title: "Registration",
    component: <Registration />,
  },
  {
    key: "ohm",
    title: "OHM",
    component: <OhmScreen />,
  },
  {
    key: "inspection",
    title: "Inspection",
    component: <Inspection />,
  },
  {
    key: "vehicleInspec",
    title: "VI",
    component: <VehicleInfo />,
  },

  {
    key: "Uci",
    title: "UCI",
    component: <Uci />,
  },
  // {/* This tab under section E */}
  {
    key: "sealManagement",
    title: "sealManagement",
    component: <SealManagement />,
  },
  {
    key: "EDRD",
    title: "EDRD",
    component: <SealManagement />,
  },

  {
    key: "brake",
    title: "Brake",
    component: <Brake />,
    isSelected: true,
  },
  // {/* FYI Please don't remove, this tab not in sec A */}

  {
    key: "HT",
    title: "HT",
    component: <HeadLampLayoutButton />,
  },
  {
    key: "Exhaust",
    title: "Exhaust",
    component: <ExhaustMain />,
  },
  {
    key: "Speedometer",
    title: "Speedometer",
    component: <Speedometer />,
  },
  {
    key: "uci",
    title: "UCI",
    component: <Uci />,
  },
  
  {
    key: "photo",
    title: "Photos",
    component: <ImageCapture />,
  },
  {
    key: "upload",
    title: "Uploadfiles",
    component: <FileUpload />,
  },
  {
    key: "Merge Result",
    title: "Merge Result",
    component: <SealManagement />,
  },

  {
    key: "overallResultVerification",
    title: "Overall Result Verification",
    component: <ResultVerification />,
    isSelected: true,
  },
  {
    key: "Lane Status",
    title: "Lane Status",
    component: <SealManagement />,
  },
  {
    key: "Option",
    title: "Option",
    component: <OptionTabData />,
  },
  {
    key: "SmokeTest",
    title: "Dyno Test",
    component: <SmokeTest />,
  },
  {
    key: "TeximeterTest",
    title: "Taximeter Test",
    component: <Taximeter />,
  },
  {
    key: "ExhaustTest",
    title: "Exhaust Test",
    component: <ExhaustTest />,
  },

  {
    key: "memo",
    title: "Memo",
    component: <MemoInput />,
  },
  // {/* FYI Please don't remove this tab not in sec A */}
];

export default function TabsData(props) {
  const { AvailTabs, selectedKey } = props;

  const visibleTabs = tabAvailable.filter((tabs) =>
    AvailTabs.includes(tabs.key)
  );

  return (
    <div className="flex w-full flex-col justify-center">
      <Tabs
        aria-label="Options"
        key=""
        radius="none"
        defaultSelectedKey={selectedKey}
        classNames={{
          tabContent:
            " group-data-[selected=true]:bg-green group-data-[selected=true]:text-[white] text-[black] ",
          tab: " bg-lightGrey h-8",
          cursor: "group-data-[selected=true]:bg-green",
          tabList: "w-[99%] group-data-[selected=true]:bg-green ml-2",
        }}
      >
        {visibleTabs.map((tab) => (
          <Tab key={tab.key} title={tab.title} data-testId={tab.key}>
            <div className="-mt-[15px]">{tab.component}</div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
