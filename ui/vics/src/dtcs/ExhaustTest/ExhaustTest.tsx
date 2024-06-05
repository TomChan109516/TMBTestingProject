import React, { useState } from "react";
import { Button, Radio, RadioGroup, Input } from "@nextui-org/react";
import TestConfigExhaust from "./TestConfigExhaust";
import SubmissionConfirmation from "../TestExhaust/SubmissionConfirmation";
function ExhaustTest() {
  const [showTestConfigExhaust, setshowTestConfigExhaust] = useState(false);

  const handleTestConfigExhaust = () => {
    setshowTestConfigExhaust(true);
  };
  const closeTestConfigExhaust = (val) => {
    setshowTestConfigExhaust(val);
  };

  const [showSubmissionConfirmation, setshowSubmissionConfirmation] =  useState(false);
  

  const handleSubmissionConfirmation = () => {
    setshowSubmissionConfirmation(true);
  };
  const closeSubmissionConfirmation = (val) => {
    setshowSubmissionConfirmation(val);
  };
  return (
    <>
    <div className="flex justify-end gap-5">
      <div className=" font-bold text-[13px] text  mt-2">
        Need Inspection: <span className="text-red">No</span> </div>
        <div className=" font-bold text-[13px] text  mt-2">
        Submitted: <span className="text-red">No</span> </div>
        </div>
      <div className="flex flex-col text-black  font-bold text-[16px]  text-center justify-center ml-16 ">
        Diesel
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div>
          <div className="justify-center font-bold text-[10px] mt-3 mb-5 mr-3"></div>
          <div className="flex justify-center gap-20 ml-16">
            <div className="font-bold  text-[12px] text-center justify-center inline-block ">
              HSU
            </div>

            <div className="text-[12px] flex justify-center  ml-8 ">
              RPM
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center  ml-1 rounded-sm">
          <div className="justify-center font-bold text-[12px] rounded-md mt-3 mr-2">
            1st Test
          </div>
          <div className="justify-center rounded-md  mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px]"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="justify-center mt-2 rounded-md  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] rounded-md"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div className="flex flex-row justify-center ">
          <div className="justify-center font-bold text-[12px] mt-3 mr-2">
            2nd Test
          </div>
          <div className="justify-center mt-2  ml-4 ">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="rounded-md justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] rounded-md"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div className="flex flex-row justify-center ">
          <div className="justify-center font-bold text-[12px] mt-3 mr-3">
            3rd Test
          </div>
          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="justify-center  mt-2 ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] rounded-sm"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div className="flex flex-row justify-center ">
          <div className="justify-center font-bold text-[12px] mt-3 mr-3">
            4th Test
          </div>
          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] rounded-sm"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div className="flex flex-row justify-center ">
          <div className="justify-center font-bold text-[12px] mt-3 mr-3">
            5th Test
          </div>
          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] rounded-sm"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div className="flex flex-row justify-center ">
          <div className="justify-center font-bold text-[12px] mt-3 mr-3">
            6th Test
          </div>
          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] rounded-sm"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div className="flex flex-row justify-center ">
          <div className="justify-center font-bold text-[12px] mt-3 mr-3">
            7th Test
          </div>
          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] rounded-sm"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div className="flex flex-row justify-center ">
          <div className="justify-center font-bold text-[12px] mt-3 mr-3">
            8th Test
          </div>
          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="justify-center mt-2 ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] rounded-sm"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div className="flex flex-row justify-center ">
          <div className="justify-center font-bold text-[12px] mt-3 mr-3">
            9th Test
          </div>
          <div className="justify-center mt-2  ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="justify-center mt-2 ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] rounded-sm"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div className="flex flex-row justify-center mr-2 ">
          <div className="justify-center font-bold text-[12px] mt-3 mr-3">
            10th Test
          </div>
          <div className="justify-center mt-2 ml-4 ">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="justify-center mt-2 ml-4 ">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>
      <div className="  w-[100%] items-left text-left text-black font-bold">
        <div className="flex flex-row justify-center mr-1">
          <div className="justify-center font-bold text-[12px] mt-3 mr-3">
            Average
          </div>
          <div className="justify-center mt-2 ml-4">
            <Input
              labelPlacement="outside-left"
              className="w-[130px] "
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>

          <div className="justify-center mt-2 ml-4">
            <Input
              labelPlacement="outside-left"
              data-testid="vehicleClass"
              className="w-[130px] rounded-sm"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center ml-12">
        <div className=" flex ml-2 pt-10 items-center font-bold">
          <span className="text-left w-[auto] mr-4 text-[12px] ">
            Cancel Reason
          </span>
          <div className="text-xs w-40  text-black ml-2 mr-6">
            <Input
              labelPlacement="outside-left"
              id="standard-basic"
              radius="sm"
              variant="bordered"
              size="sm"
            />
          </div>
        </div>

        <div className="flex justify-center items-center text-[12px] text-black font-bold ml-16 mr-40 pt-10">
          <span> Result</span>
          <div className="ml-[14px]">
            <RadioGroup orientation="horizontal" className="ml-4">
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
                <span className="text-red mr-4">FAIL</span>
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
                <span className="text-lightCyan mr-4">PASS</span>
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Triangle"
              >
                <span className="text-red mr-4">SKIP</span>
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="justify-center mb-4 mt-10 mr-16 ">
        <Button
          className="text-white font-bold rounded-sm bg-persianGreen border-1 border-[#e0dede] h-8 "
          //variant="light"
          radius="none"
        >
          Test Start
        </Button>
        <Button className="text-white font-bold  rounded-sm bg-persianGreen border-1 border-[#e0dede] h-8 ml-4">
          Restart
        </Button>
        <Button
          onClick={handleSubmissionConfirmation}
          className="text-white font-bold  rounded-sm bg-persianGreen border-1 border-[#e0dede] h-8 ml-4"
        >
          Submit
        </Button>
        <Button
          onClick={handleTestConfigExhaust}
          className="text-white font-bold  rounded-sm bg-persianGreen border-1 border-[#e0dede] h-8 ml-4"
        >
          Test Config
        </Button>
        <Button className="text-white font-bold  rounded-sm bg-persianGreen border-1 border-[#e0dede] h-8 ml-4">
          Save
        </Button>
      </div>
      {showTestConfigExhaust && (
        <TestConfigExhaust
          showTestConfigExhaust={showTestConfigExhaust}
          closeTestConfigExhaust={closeTestConfigExhaust}
        ></TestConfigExhaust>
      )}
      {showSubmissionConfirmation && (
        <SubmissionConfirmation
          showSubmissionConfirmation={showSubmissionConfirmation}
          closeSubmissionConfirmationt={closeSubmissionConfirmation}
        ></SubmissionConfirmation>
      )}
    </>
  );
}
export default ExhaustTest;
