import React, { useState } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { theme } from "../../common/themes/themeConfig";

function AddJob() {
const [Enabled, setEnabled] = useState("");
const [JobType, setJobType] = useState("");

  return (
    <div>
      <div
        className={`ml-3 mt-1 text-left text-[${theme?.colors?.tropicalRainForest}] font-[${theme?.fontFamily.calibri}] font-bold text-sm`}
      >
        Add Job
      </div>
      <h1 className="h-[240px]  mt-4 ml-2 mr-2">
        <h5
          className={`absolute-top-2  mt-1 start-2 pl-[9px] pr-[9px] text-sm text-[${theme?.colors?.persianGreen}] font-[${theme?.fontFamily.calibri}]`}
        >
          Job Particulars
        </h5>
        <div className="grid grid-cols-3  mt-4 mb-1">
          <div className="flex flex-row">
            <div
              className={`text-sm mt-1 font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap ml-3`}
            >
              Job Name
            </div>
            <div className="w-full ml-[60px]">
              <Input
                id="standard-basic"
                name="rate"
                radius="none"
                variant="bordered"
                size="sm"
                classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
              />
            </div>
          </div>
          <div className="flex flex-row -ml-15">
            <div
              className={`whitespace-nowrap text-sm mt-1 text-[${theme?.colors?.black}] font-[${theme?.fontFamily?.calibri}] font-bold mr-10 ml-7`}
            >
              Job Group Name
            </div>
            <div className="w-full">
              <Input
                id="standard-basic"
                name="rate"
                radius="none"
                variant="bordered"
                size="sm"
                classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
              />
            </div>
          </div>
          <div className="flex flex-row mr-2">
            <div
              className={`whitespace-nowrap text-sm mt-1  text-[${theme?.colors?.black}] font-[${theme?.fontFamily?.calibri}] font-bold mr-8 ml-5`}
            >
              Descrption
            </div>
            <div className=" w-full ml-3">
              <Input
                id="standard-basic"
                name="rate"
                radius="none"
                variant="bordered"
                size="sm"
                classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mb-1">
          <div className="flex flex-row">
            <div
              className={`text-sm mt-1 font-[${theme?.fontFamily?.calibri}] text-[${theme?.colors?.black}] font-bold whitespace-nowrap ml-3`}
            >
              Cron
            </div>
            <div className="w-full ml-[90px]">
              <Input
                id="standard-basic"
                name="rate"
                radius="none"
                variant="bordered"
                size="sm"
                classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
              />
            </div>
          </div>
          <div className="flex flex-row -ml-15">
            <div
              className={`whitespace-nowrap text-sm mt-1 text-[${theme?.colors?.black}] font-[${theme?.fontFamily?.calibri}] font-bold mr-10 ml-7`}
            >
              Job Type
            </div>
            <div className=" w-full ml-[46px]">
              <Select
                isRequired
                labelPlacement="outside-left"
                radius="none"
                size="sm"
                variant="bordered"
                name="enabled"
                selectedKeys={JobType}
                onChange={(e) => {
                  setJobType(e.target.value);
                }}
                aria-label="enabled"
                className={`max-w-xs text-xs text-[${theme?.colors?.black}] font-[${theme?.fontFamily?.calibri}]`}
              >
                <SelectItem key="L" value="L">
                  Local
                </SelectItem>
                <SelectItem key="NL" value="NL">
                  Non-Local
                </SelectItem>
              </Select>
            </div>
          </div>
          <div className="flex flex-row mr-2">
            <div
              className={`whitespace-nowrap text-sm mt-1  text-[${theme?.colors?.black}] font-[${theme?.fontFamily?.calibri}] font-bold mr-8 ml-5`}
            >
              Enabled Ind
            </div>
            <div className=" w-full ml-[6px]">
              <Select
                isRequired
                labelPlacement="outside-left"
                radius="none"
                size="sm"
                variant="bordered"
                name="enabled"
                selectedKeys={Enabled}
                onChange={(e) => {
                  setEnabled(e.target.value);
                }}
                aria-label="enabled"
                className={`max-w-xs text-xs text-[${theme?.colors?.black}] font-[${theme?.fontFamily?.calibri}]`}
              >
                <SelectItem key="Y" value="Yes">
                  Yes
                </SelectItem>
                <SelectItem key="N" value="No">
                  No
                </SelectItem>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div
            className={` ml-3 whitespace-nowrap font-bold  text-sm text-[${theme?.colors?.black}] font-[${theme?.fontFamily?.calibri}]  `}
          >
            Class Name
          </div>
          <div className="w-full ml-[50px] mr-2">
            <Input
              id="standard-basic"
              name="rate"
              radius="none"
              variant="bordered"
              size="sm"
              classNames={{ inputWrapper: "min-h-unit-6 h-8 rounded-sm" }}
            />
          </div>
        </div>
        <div className="flex flex-row  mt-1">
          <div
            className={` ml-3 whitespace-nowrap font-bold  text-sm text-[${theme?.colors?.black}] font-[${theme?.fontFamily?.calibri}]  `}
          >
            Job Data Json
          </div>
          <div className="w-full ml-[38px] mr-2">
            <Input
              id="standard-basic"
              name="rate"
              radius="none"
              variant="bordered"
              size="sm"
              classNames={{ inputWrapper: "min-h-unit-6 h-[80px] rounded-sm" }}
            />
          </div>
        </div>
      </h1>
      <div className="flex justify-end mr-2 mt-1 gap-1">
        <Button
          className={`text-sm font-[${theme?.fontFamily?.calibri}] font-bold text-[${theme?.colors?.black}] rounded-sm bg-[${theme?.colors?.white}] border-2 border-[lightgray]`}
          radius="none"
        >
          Reset
        </Button>
        <Button
          className={`text-sm font-[${theme?.fontFamily?.calibri}] font-bold text-[${theme?.colors?.white}] bg-[${theme?.colors?.persianGreen}] rounded-sm`}
          radius="none"
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default AddJob;
