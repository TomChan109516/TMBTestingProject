import { Button, Input } from "@nextui-org/react";
import React from "react";
function OhmtestStandard(props) {
  const handleClose = () => {
    props.closePopup(false);
  };
  return (
    <div className="w-[100%]">
      <div className="flex justify-center mr-16  mt-6 font-calibri font-bold text-black">
        <div className="mr-2 mt-1" data-testId="Vehicle Length not Greater Than">Vehicle Length not Greater Than</div>
        <div>
          <Input
            size="sm"
            radius="none"
            variant="bordered"
            classNames={{
              inputWrapper:
                "h-8 w-[100%] border  border-[black] shadow-sm rounded-md",
            }}
          ></Input>
        </div>
        <div className="ml-2 mt-1">m</div>
      </div>
      <div className="flex justify-center mt-2 mr-16 font-calibri font-bold text-black">
        <div className="mr-2 mt-1" data-testId="Vehicle Width not Greater Than">Vehicle Width not Greater Than</div>
        <div>
          <Input
            size="sm"
            radius="none"
            variant="bordered"
            classNames={{
              inputWrapper:
                "h-8 w-[100%] border  border-[black] shadow-sm rounded-md",
            }}
          ></Input>
        </div>
        <div className="ml-2 mt-1">m</div>
      </div>
      <div className="flex justify-center mt-2 mr-16 font-calibri font-bold text-black">
        <div className="mr-2 mt-1" data-testId="Vehicle Height not Greater Than">Vehicle Height not Greater Than</div>
        <div>
          <Input
            size="sm"
            radius="none"
            variant="bordered"
            classNames={{
              inputWrapper:
                "h-8 w-[100%] border  border-[black] shadow-sm rounded-md",
            }}
          ></Input>
        </div>
        <div className="ml-2 mt-1">m</div>
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
    </div>
  );
}
export default OhmtestStandard;
