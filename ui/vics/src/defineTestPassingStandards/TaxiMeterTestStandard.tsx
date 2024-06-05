import { Button, Input } from "@nextui-org/react";
import React from "react";

function TaxiMeterTestStandard() {
  return (
    <div className=" h-full">
      <div className="mx-auto mr-[11.4rem] ml-[11.4rem] mb-3">
        <div className="flex font-calibri font-bold text-black mt-3">
          <div className="mr-2 flex items-center ">
            <span>Testing Speed</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">km/hr</div>
        </div>
      </div>

      <div className="flex col mx-auto mr-[8rem] ml-[8.2rem] flex-wrap gap-x-14 gap-y-3">
        <div className="flex font-calibri font-bold text-black">
          <div className="mr-2 flex items-center ">
            <span>Test 1 Acceptance range</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">m</div>
        </div>{" "}
        <div className="flex font-calibri font-bold text-black ">
          <div className="mr-2 flex items-center ">
            <span>to</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">m</div>
        </div>{" "}
        <div className="flex font-calibri font-bold text-black">
          <div className="mr-2 flex items-center ">
            <span>Test 2 Acceptance range</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">m</div>
        </div>{" "}
        <div className="flex font-calibri font-bold text-black ">
          <div className="mr-2 flex items-center ">
            <span>to</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">m</div>
        </div>
        <div className="flex font-calibri font-bold text-black ">
          <div className="mr-2 flex items-center ">
            <span>Test 3 Acceptance range</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">m</div>
        </div>
        <div className="flex font-calibri font-bold text-black ">
          <div className="mr-2 flex items-center ">
            <span>to</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">m</div>
        </div>
        <div className="flex font-calibri font-bold text-black ">
          <div className="mr-2 flex items-center ">
            <span>Test 4 Acceptance range</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">m</div>
        </div>
        <div className="flex font-calibri font-bold text-black ">
          <div className="mr-2 flex items-center ">
            <span>to</span>
          </div>
          <div>
            <Input
              size="sm"
              radius="sm"
              variant="bordered"
              classNames={{ inputWrapper: "h-8 w-[100%] border" }}
            ></Input>
          </div>
          <div className="ml-2 items-center flex font-bold">m</div>
        </div>
      </div>
      <div className="flex justify-center  md:absolute md:left-[40%] md:bottom-3 gap-5">
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

export default TaxiMeterTestStandard;
