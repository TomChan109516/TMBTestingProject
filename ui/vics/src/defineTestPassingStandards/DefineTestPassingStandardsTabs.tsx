import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";
import DefineTestPassingStandardGeneralTable from "./DefineTestPassingStandardGeneralTable";
import DefineTestPassingStandardTaSpecificTable from "./DefineTestPassingStandardTaSpecificTable";
import PassingStandardConfigPopup from "./PassingStandardConfigPopup";

function DefineTestPassingStandardsTabs() {
  const [selectedTab, setSelectedTab] = useState("General");
  const [showPassingStandardConfigPopup, setPassingStandardConfigPopup] =
    useState(false);

  const closePassingStandardConfigPopup = (val) => {
    setPassingStandardConfigPopup(val);
  };

  return (
    <div>
      <div className="w-[100%] px-2 py-2">
        <div className=" mt-3 ">
          <div className="  flex font-calibri font-bold ml-2  justify-start text-[16px]">
            Define Test Passing Standards
          </div>
        </div>

        <div className="flex justify-end pb-[10px]   gap-1 mt-1">
          <div className=" w-[100%] text-right   ">
            <label className="   mr-5 " htmlFor="Test Type">
              Test Type
            </label>
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className=" inline-block md:w-[140px] border-greyBorder text-white rounded-md mr-3  w-[100%] "
              variant="bordered"
            ></Input>
            <label className="    mr-5 " htmlFor=" Vehicle Class">
              Vehicle Class
            </label>
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className=" inline-block md:w-[140px] border-greyBorder  text-white rounded-md mr-5  w-[100%]"
              variant="bordered"
            ></Input>
          </div>
          <div>
            {
              <Button
                className={`inline-block mr-3  text-center w-[50px] bg-tropicalrainforest h-8 text-white rounded-sm  ${
                  selectedTab == "General" ? "visible" : "invisible"
                }`}
                radius="none"
              >
                Search
              </Button>
            }
          </div>
          <Button
            className=" inline-block mr-2 text-center w-[50px] bg-tropicalrainforest h-8  text-white rounded-sm"
            radius="none"
            onClick={() => setPassingStandardConfigPopup(true)}
          >
            Add
          </Button>
        </div>
        <div className=" text-left w-[100%]  ">
          <Tabs
            aria-label="Tabs colors"
            radius="none"
            classNames={{
              tabContent:
                "group-data-[selected=true]:bg-persianGreen  group-data-[selected=true]:text-white text-white  px-7 py-7 bg-[gray]",
              tab: "max-w-fit px-0 h-5   text-center  bg-[gray] ",
            }}
            selectedKey={selectedTab}
            onSelectionChange={(key: unknown) => setSelectedTab(key as string)}
          >
            <Tab key="General" title="General">
              <div className="mt-[-11px]">
                <DefineTestPassingStandardGeneralTable />
              </div>
            </Tab>
            <Tab key="TA Specific" title="TA Specific">
              <div className="mt-[-11px]">
                <DefineTestPassingStandardTaSpecificTable />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      {showPassingStandardConfigPopup && (
        <PassingStandardConfigPopup
          showPassingStandardConfigPopup={showPassingStandardConfigPopup}
          closePassingStandardConfigPopup={closePassingStandardConfigPopup}
        ></PassingStandardConfigPopup>
      )}
    </div>
  );
}

export default DefineTestPassingStandardsTabs;
