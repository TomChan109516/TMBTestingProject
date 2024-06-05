import React, { useState } from "react";
import {
  Textarea,
  Button,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import TestConfig from "./TestConfig";

function Taximeter() {
  const [showTestConfig, setshowTestConfig] = useState(false);
  const handleTestConfig = () => {
    setshowTestConfig(true);
  };
  const closeTestConfig = (val) => {
    setshowTestConfig(val);
  };
  return (
    <>
      <div className="flex justify-center gap-[39%] mt-8 ">
        <div className="justify-center">
          <h3 className="text-[20px] font-bold">
            Measured Distance Travelled(m)
          </h3>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="pt-2">
          <div className=" flex ml-4 items-center font-bold">
            <span className="text-center w-[70%] text-navHeading">
              Taximeter Test1
            </span>
            <div className="text-xs w-[350px]  text-black mr-6">
              <Input
                id="standard-basic"
                radius="none"
                variant="bordered"
                size="sm"
                maxLength={15}
              />
            </div>
          </div>
          <div className=" flex ml-4 pt-2 items-center font-bold">
            <span className="text-center w-[70%] text-navHeading">
              Taximeter Test2
            </span>
            <div className="text-xs w-[350px]  text-black mr-6">
              <Input
                id="standard-basic"
                radius="none"
                variant="bordered"
                size="sm"
                maxLength={15}
              />
            </div>
          </div>
          <div className=" flex ml-4 pt-2 items-center font-bold">
            <span className="text-center w-[70%] text-navHeading">
              Taximeter Test3
            </span>
            <div className="text-xs w-[350px]  text-black mr-6">
              <Input
                id="standard-basic"
                radius="none"
                variant="bordered"
                size="sm"
                maxLength={15}
              />
            </div>
          </div>
          <div className=" flex ml-4 pt-2 items-center font-bold">
            <span className="text-center w-[70%] text-navHeading">
              Taximeter Test4
            </span>
            <div className="text-xs w-[350px]  text-black mr-6">
              <Input
                id="standard-basic"
                radius="none"
                variant="bordered"
                size="sm"
                maxLength={15}
              />
            </div>
          </div>
        </div>

        <div className="pt-2 pl-2">
          <div className=" flex ml-8 items-center font-bold text-navHeading">
            <span>Waiting Time Result</span>
            <Select
              labelPlacement="inside-left"
              label="PASS"
              radius="none"
              size="sm"
              variant="bordered"
              className="ml-20 bg-white border-greyBorder w-44 rounded-sm"
            >
              <SelectItem key={1}>-</SelectItem>
            </Select>
          </div>
          <div className=" flex ml-4 pt-2 items-center font-bold text-navHeading">
            <span>Long-distance Test Result</span>
            <Select
              labelPlacement="inside-left"
              label="SKIP"
              radius="none"
              size="sm"
              variant="bordered"
              className="ml-14 bg-white border-greyBorder w-44 rounded-sm"
            >
              <SelectItem key={1}>-</SelectItem>
            </Select>
          </div>
          <div className=" flex ml-8 pt-2 items-center font-bold text-navHeading">
            <span>Anti Tampering Result</span>
            <Select
              labelPlacement="inside-left"
              label="SKIP"
              radius="none"
              size="sm"
              variant="bordered"
              className="ml-16 bg-white border-greyBorder w-44 rounded-sm"
            >
              <SelectItem key={1}>-</SelectItem>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center ml-12 pt-8">
        <div className=" flex  pt-2 ml-20 items-center font-bold text-navHeading">
          <span className="text-left w-[auto] mr-4 ">Cancel Reason</span>
          <div className="text-xs w-40  text-black ml-2 mr-6">
            <Input
              id="standard-basic"
              radius="sm"
              variant="bordered"
              size="xs"
              maxLength={15}
            />
          </div>
        </div>

        <div className="flex justify-center items-center text-[15px] text-black font-bold ml-16 mr-40 pt-2">
          <span> Result</span>
          <div className="ml-[14px] ">
            <RadioGroup orientation="horizontal" className="ml-4">
              <Radio
                size="lg"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="F/R"
              >
                <span className="text-red mr-4 text-navHeading">FAIL</span>
              </Radio>
              <Radio
                size="lg"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Diagonal"
              >
                <span className="text-lightCyan mr-4 text-navHeading">
                  PASS
                </span>
              </Radio>
              <Radio
                size="lg"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Triangle"
              >
                <span className="text-red mr-4 text-navHeading">SKIP</span>
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center mr-8 mb-4 gap-3">
        <div className="flex justify-center pt-2">
          <Button
            className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
            size="sm"
          >
            Test Start
          </Button>
        </div>

        <div className="flex justify-center pt-2">
          <Button
            className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
            size="sm"
          >
            Retest
          </Button>
        </div>

        <div className="flex justify-center pt-2">
          <Button
            className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
            size="sm"
          >
            Submit
          </Button>
        </div>

        <div className="flex justify-center pt-2">
          <Button
            className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
            size="sm"
            onClick={handleTestConfig}
          >
            Test Config
          </Button>
        </div>

        <div className="flex justify-center pt-2">
          <Button
            className={`bg-persianGreen  text-[white] font-bold rounded-sm `}
            size="sm"
          >
            Save
          </Button>
        </div>
      </div>

      {showTestConfig && (
        <TestConfig
          showTestConfig={showTestConfig}
          closeTestConfig={closeTestConfig}
        ></TestConfig>
      )}
    </>
  );
}

export default Taximeter;
