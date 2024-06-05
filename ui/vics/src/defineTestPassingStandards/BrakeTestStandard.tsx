import { Button, Input } from "@nextui-org/react";
import React from "react";

function BrakeTestStandard() {
  return (
    <div className=" mt-10 h-full">
      <div className=" flex justify-around gap-5">
        <div className="flex justify-center font-calibri font-bold text-black mb-7">
          <div className="mr-2 flex flex-col items-end" data-testId="Parking brake efficiency">
            <span>Parking brake efficiency </span>
            <span>not less than</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">%</div>
        </div>

        <div className="flex justify-center font-calibri font-bold text-black" data-testId="Parking brake imbalance">
          <div className="mr-2 flex flex-col items-end">
            <span>Parking brake imbalance</span>
            <span> not greater than</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 flex font-bold mt-2">%</div>
        </div>
      </div>

      <div className="flex justify-center font-calibri font-bold text-black lg:-ml-[30rem] md:-ml-[24rem] mb-7">
        <div className=" mr-2 flex flex-col -ml-4 items-end">
          <span> (Least efficient) Secondary brake</span>
          <span> efficiency not less than</span>
        </div>
        <div className="">
          <Input
            size="sm"
            radius="sm"
            variant="bordered"
            classNames={{ inputWrapper: "h-8 w-[100%] border" }}
          ></Input>
        </div>
        <div className="ml-2 items-center flex font-bold">%</div>
      </div>
      <div className=" flex justify-around">
        <div className="flex justify-center font-calibri font-bold text-black">
          <div className="mr-2 flex flex-col items-end">
            <span>Parking brake efficiency </span>
            <span>not less than</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">%</div>
        </div>

        <div className="flex justify-center font-calibri font-bold text-black">
          <div className="mr-2 flex flex-col items-end">
            <span>Parking brake imbalance</span>
            <span> not greater than</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">%</div>
        </div>
      </div>
      <div className="flex justify-center  md:absolute md:left-[43%] md:bottom-5 gap-5">
        <Button
          className={`bg-[#00AF8F] font-[Calibri] text-sm font-bold text-[white] rounded-none ml-1`}
          size="sm"
        >
          Save
        </Button>
        <Button
          className={`bg-[#ffffff] text-[black] font-[Calibri] text-sm font-bold  rounded-none ml-1`}
          variant="bordered"
          size="sm"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default BrakeTestStandard;
