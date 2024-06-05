import React, { useState, ChangeEvent } from "react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { theme } from "../../common/themes/themeConfig";

const BatchJob = () => {
  const navigate=useNavigate();
  const [sysId, setSysId] = useState<string>("");
  const [sysDesc, setSysDesc] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");

  const handleSysId = (event: ChangeEvent<HTMLInputElement>) => {
    setSysId(event.target.value);
  };
  const handleSysDesc = (event: ChangeEvent<HTMLInputElement>) => {
    setSysDesc(event.target.value);
  };
  const handleJobType = (e: ChangeEvent<HTMLInputElement>) => {
    setJobType(e.target.value);
  };
  const resetFields = () => {
    setSysId("");
    setSysDesc("");
    setJobType("");
  };
  return (
    <>
      <div className="p-[5px] ml-1">
        <div
          className={`text-[${theme?.colors?.tropicalRainForest}] flex flex-initial p-[2px] font-bold text-sm`}
        >
          Batch Job
        </div>
      </div>
      <div className="mt-[10px] ml-1 mr-1 ">
        <h1>
          <h5
            className={`text-[${theme?.colors?.persianGreen}] font-[${theme?.fontFamily?.calibri}] absolute-top-2 start-3 pl-[10px] pr-[10px] font-bold`}
          >
            Searching Criteria
          </h5>
          <div className="grid grid-rows-1 grid-flow-col whitespace-nowrap  p-5 pb-1.5">
            <div className="flex flex-row w-full flex-wrap md:flex-nowrap gap-4">
              <div
                className={`font-[${theme?.fontFamily?.calibri}] ml-1 mr-4 text-md font-bold mt-[2px]`}
              >
                Job Name
              </div>
              <Input
                classNames={{
                  inputWrapper: `min-h-unit-6 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                }}
                variant="bordered"
                size="sm"
                radius="none"
                name="sysConfigID"
                value={sysId}
                type="text"
                onChange={handleSysId}
                aria-describedby="outlined-weight-helper-text"
              />

              <div
                className={`font-[${theme?.fontFamily?.calibri}] ml-1 mr-4 text-md font-bold mt-[2px]`}
              >
                Job Group Name
              </div>
              <Input
                classNames={{
                  inputWrapper: `min-h-unit-6 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                }}
                variant="bordered"
                size="sm"
                radius="none"
                name="sysConfigID"
                value={sysId}
                type="text"
                onChange={handleSysId}
                aria-describedby="outlined-weight-helper-text"
              />

              <div
                className={`font-[${theme?.fontFamily?.calibri}] ml-2 text-md font-bold mt-[2px]`}
              >
                Description
              </div>
              <Input
                variant="bordered"
                size="sm"
                radius="none"
                name="sysConfigDesc"
                value={sysDesc}
                classNames={{ inputWrapper: `min-h-unit-6 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]` }}
                type="text"
                aria-describedby="outlined-weight-helper-text"
                onChange={handleSysDesc}
              />
            </div>
          </div>
          <div className="flex flex-col-2 ml-5">
            <span className="ml-1 mr-4 text-md font-bold font-[Calibri] mt-[5px] ">
              Job Type
            </span>
            <span className="text-[10.5px] text-black text-left pl-6">
              <Select
                classNames={{
                  trigger: `min-h-unit-2 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                }}
                labelPlacement="outside-left"
                className="w-[190px]"
                data-testid="JobType"
                radius="none"
                size="sm"
                name="jobType"
                aria-label="jobType"
                variant="bordered"
                placeholder="Select"
                value={jobType}
                selectedKeys={[jobType]}
                onChange={(e) => handleJobType(e)}
              >
                <SelectItem className="text-[10px]" key={""}>
                  Job type
                </SelectItem>
              </Select>{" "}
            </span>
          </div>

          <div
            className={`font-[${theme?.fontFamily?.calibri}] flex justify-end mb-2 mt-0 mr-2`}
          >
            <Button
              type="button"
              radius="none"
              size="sm"
              className={`bg-[${theme?.colors?.persianGreen}] rounded-sm mr-1 min-w-unit-12 text-white font-bold   text-sm px-1 py-1`}
              onClick={()=>navigate("/addjob")}
            >
              Add
            </Button>
            <Button
              radius="none"
              size="sm"
              type="reset"
              className="bg-white text-black border border-solid border-greyBorder rounded-[3px]  min-w-unit-16 text-[13px] font-bold px-1 py-1 mr-1"
              onClick={() => {
                resetFields();
              }}
            >
              Reset
            </Button>
            <Button
              type="button"
              radius="none"
              size="sm"
              className={`bg-[${theme?.colors?.persianGreen}] rounded-[3px] min-w-unit-16 text-white font-bold text-md text-[13px] px-1 py-1`}
            >
              Search
            </Button>
          </div>
        </h1>
      </div>
    </>
  );
};
export default BatchJob;
