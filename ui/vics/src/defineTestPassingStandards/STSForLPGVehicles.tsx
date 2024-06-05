import { Button, Input } from "@nextui-org/react";
import React from "react";
function STSForLPGVehicles(props) {
  const handleClose = () => {
    props.closePopup(false);
  };
  return (
    <>
      <div className="grid grid-cols-2 gap-1">
        <div className="flex justify-center items-center ">
          <label className="font-bold mr-1 " htmlFor="Wheel Span">
            Default Idle Time
          </label>
          <div>
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              classNames={{
                inputWrapper:
                  "h-8 w-[150px] border border-[black] shadow-sm rounded-md",
              }}
            ></Input>
          </div>
          <div className="ml-1">S</div>
        </div>

        <div className="flex justify-center items-center">
          <label className="font-bold mr-1 w-[100px]" htmlFor="Wheel Span">
            Default High Idle Time
          </label>
          <div>
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              classNames={{
                inputWrapper:
                  "h-8 w-[150px] border  border-[black] shadow-sm rounded-md",
              }}
            ></Input>
          </div>
          <div className="ml-1">S</div>
        </div>

        <div className="flex justify-end"></div>

        <div className="flex justify-center items-center">
          <label className="font-bold mr-1 w-[140px]" htmlFor="Wheel Span">
            Default High Idle RPM Level
          </label>
          <div>
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              classNames={{
                inputWrapper:
                  "h-8 w-[150px] border  border-[black] shadow-sm rounded-md",
              }}
            ></Input>
          </div>
          <div className="ml-1">mm/dam</div>
        </div>

        <div className="flex justify-center items-center ">
          <label className="font-bold mr-1 " htmlFor="Wheel Span">
            CO Level at High Idle<br></br> not greater than
          </label>

          <div>
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              classNames={{
                inputWrapper:
                  "h-8 w-[150px] border  border-[black] shadow-sm rounded-md",
              }}
            ></Input>
          </div>
          <div className="ml-1">% vol</div>
        </div>

        <div className=" flex justify-center items-center">
          <label className="font-bold mr-1 w-[120px]" htmlFor="Wheel Span">
            CO Level at High Idle <br></br>not greater than
          </label>
          <div>
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              classNames={{
                inputWrapper:
                  "h-8 w-[150px] border  border-[black] shadow-sm rounded-md",
              }}
            ></Input>
          </div>
          <div className="ml-1">% vol</div>
        </div>
        <div className=" flex justify-center items-center ml-5">
          <label className="font-bold mr-1" htmlFor="Wheel Span">
            Hydrocarbons at Idle<br></br> not greater than
          </label>
          <div>
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              classNames={{
                inputWrapper:
                  "h-8 w-[150px] border  border-[black] shadow-sm rounded-md",
              }}
            ></Input>
          </div>
          <div className="ml-1">mm/dam</div>
        </div>

        <div className="flex justify-center items-center ">
          <label className="font-bold mr-1 w-[140px]" htmlFor="Wheel Span">
            Hydrocarbons at Idle<br></br> not greater than
          </label>
          <div>
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              classNames={{
                inputWrapper:
                  "h-8 w-[150px] border border-[black] shadow-sm rounded-md",
              }}
            ></Input>
          </div>
          <div className="ml-1">mm/dam</div>
        </div>
      </div>

      <div className="flex justify-center mt-5 ">
        <Button
          className={`bg-[#00AF8F] font-[Calibri] text-sm font-bold text-[white] rounded-none ml-1`}
          size="sm"
          onClick={handleClose}
        >
          Save
        </Button>
        <Button
          className={`bg-[#ffffff] text-[black] font-[Calibri] text-sm font-bold  rounded-none ml-1`}
          variant="bordered"
          size="sm"
          onClick={handleClose}
        >
          Cancel
        </Button>
      </div>
    </>
  );
}
export default STSForLPGVehicles;
