import { Button, Input } from "@nextui-org/react";
import React from "react";

function SmokeTestStandardDieselVehicle() {
  return (
    <div className=" h-full">
      <div className="grid grid-cols-2 gap-y-6 mt-9 mb-16 ">
        <div className="flex mx-auto justify-end">
          <div className=" flex items-center">
            <h3 className=" font-bold" data-testId="Max number of FAT Test">Max number of FAT Test</h3>
          </div>
          <div className="flex ml-5">
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className=" inline-block md:w-[140px] border-greyBorder text-white rounded-md mr-3  w-[100%] "
              variant="bordered"
            ></Input>
          </div>
          <div className=" flex items-center">
            <p className=" font-bold">Tests</p>
          </div>
        </div>
        <div className="flex mx-auto ">
          <div className=" -ml-12 flex items-center font-bold" data-testId="Consecutive passes required">
            <h3>Consecutive passes required</h3>
          </div>
          <div className=" flex ml-4 ">
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className=" inline-block md:w-[140px] border-greyBorder text-white rounded-md mr-3  w-[100%] "
              variant="bordered"
            ></Input>
          </div>
          <div className=" mt-2">
            <p>Tests</p>
          </div>
        </div>
        <div className="flex mx-auto ">
          <div className=" -ml-5 flex items-center font-bold" data-testId="Smoke Level not greater than">
            <h3>Smoke Level not greater than</h3>
          </div>
          <div className=" flex ml-4 ">
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className=" inline-block md:w-[140px] border-greyBorder text-white rounded-md mr-3  w-[100%] "
              variant="bordered"
            ></Input>
          </div>
          <div className=" flex items-center font-bold">
            <p>HSU</p>
          </div>
        </div>
        <div className="flex mx-auto ">
          <div className=" -ml-5 flex items-center font-bold" data-testId="% of Max RPM Used">
            <h3>% of Max RPM Used</h3>
          </div>
          <div className=" flex ml-4 ">
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className=" inline-block md:w-[140px] border-greyBorder text-white rounded-md mr-3  w-[100%] "
              variant="bordered"
            ></Input>
          </div>
          <div className=" flex items-center font-bold">
            <p>%</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center  md:absolute md:left-[43%] md:bottom-10 gap-5 ">
        <Button
          className={`bg-[#00AF8F] font-[Calibri] text-sm font-bold text-[white] rounded-none ml-1`}
          size="sm"
          //onClick={handleClose}
        >
          Save
        </Button>
        <Button
          className={`bg-[#ffffff] text-[black] font-[Calibri] text-sm font-bold  rounded-none ml-1`}
          variant="bordered"
          size="sm"
          //onClick={handleClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default SmokeTestStandardDieselVehicle;
