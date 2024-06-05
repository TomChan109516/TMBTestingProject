import React, { useState } from "react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import LocationDropDownEnglish from "./LocationDropDownEnglish";
import LocationTable from "./LocationTable";
import SystemPage from "./SystemPage";
import ComponentPage from "./ComponentPage";
import DefectPage from "./DefectPage";
import LocationDropDownChinese from "./LocationDropDownChinese";
import LocationDropDownEngChinese from "./LocationDropDownEngChinese";
// option tab is yet to be designed

const visibleTabs = [
  {
    key: "location",
    title: "Location",
    component: <LocationTable />,
  },
  {
    key: "location-Drop Down",
    title: "Location-Drop Down",

    component: {
      en: <LocationDropDownEnglish />,
      chi: <LocationDropDownChinese />,
      both: <LocationDropDownEngChinese />,
    },
  },
  {
    key: "system",
    title: "System",
    component: <SystemPage />,
  },
  {
    key: "component",
    title: "Component",
    component: <ComponentPage />,
  },

  {
    key: "defetcs",
    title: "Defects",
    component: <DefectPage />,
  },
];

export default function MaintainInspectionTabData() {
  const [selected, setSelected] = useState("location");
  const [selectedLanguages, setSelectedLanguages] = useState(["en"]);

  const getCurrentComponent = () => {
    const currentTab = visibleTabs.find((tab) => tab.key === selected);
    if (selected === "location-Drop Down") {
      return selectedLanguages.length === 1
        ? currentTab?.component[selectedLanguages[0]]
        : currentTab?.component["both"];
    }
    return currentTab ? currentTab.component : null;
  };

  const onLanguageClick = (lang) => {
    if (selectedLanguages.length === 1 && lang === selectedLanguages[0]) return;
    const isLangSelected = selectedLanguages.includes(lang);
    if (isLangSelected) {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== lang));
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  return (
    <div className="flex  flex-col justify-center ">
      <div className="flex mb-2 mr-8">
        <div className="flex-1 flex flex-col ">
          <Tabs
            aria-label="Options"
            key=""
            radius="none"
            // defaultSelectedKey={selectedKey}
            classNames={{
              tabContent:
                " group-data-[selected=true]:bg-green group-data-[selected=true]:text-[white] text-[white] ",
              tab: " bg-darkGrey h-8",
              cursor: "group-data-[selected=true]:bg-green",
              tabList: " w-[70%] group-data-[selected=true]:bg-green ml-8",
            }}
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            {visibleTabs.map((tab) => (
              <Tab key={tab.key} title={tab.title} data-testId={tab.key}></Tab>
            ))}
          </Tabs>
        </div>
        <div className="flex">
          <Button
            onClick={() => {
              onLanguageClick("en");
            }}
            radius="none"
            size="sm"
            className={`h-8  ${
              selectedLanguages.includes("en") ? "bg-tropicalrainforest" : ""
            }`}
          >
            Eng
          </Button>
          <Button
            onClick={() => {
              onLanguageClick("chi");
            }}
            radius="none"
            size="sm"
            className={`h-8 ml-2 ${
              selectedLanguages.includes("chi") ? "bg-tropicalrainforest" : ""
            }`}
          >
            Chi
          </Button>
        </div>
      </div>
      <div className="-mt-[25px]">{getCurrentComponent()}</div>
    </div>
  );
}
