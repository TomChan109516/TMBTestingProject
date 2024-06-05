import { Button, Input } from "@nextui-org/react";
import React from "react";
function DippedLamp(props) {
  const handleClose = () => {
    props.closePopup(false);
  };
  return (
    <div className="item-center h-80">
      <span className=" text-black font-bold  ml-5 ">Dipped Lamp</span>
      <div>
        <div className="flex ">
          <div className="w-[50%] mt-2 flex justify-center  ml-[30px]">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              Light Intencity Acceptable Range
            </label>
            <div>
              <Input
                size="sm"
                radius="none"
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "h-8 w-[100%] md:w-[90%] lg:w-[100%] border  border-[black] shadow-sm rounded-md",
                }}
              ></Input>
            </div>
            <div className="ml-2 mt-1">Cd</div>
          </div>

          <div className="w-[50%] mt-2 flex justify-start ml-[30px] ">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              To
            </label>
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
            <div className="ml-2 mt-1">Cd</div>
          </div>
        </div>

        <div className="flex ">
          <div className="w-[50%] mt-2 flex justify-center  ml-[50px]">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              Verticle Offset Acceptable Range
            </label>
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
            <div className="mt-1 ml-3">mm/dam</div>
          </div>

          <div className="w-[50%] mt-2 flex justify-start ml-[10px] ">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              To
            </label>
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
            <div className="ml-2 mt-1">mm/dam</div>
          </div>
        </div>

        <div className="flex ">
          <div className="w-[50%] mt-2 flex justify-center  ml-[30px]">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              Upword angle Acceptable Range
            </label>
            <div>
              <Input
                size="sm"
                radius="none"
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "h-8 w-[100%] md:w-[85%] lg:w-[100%] border  border-[black] shadow-sm rounded-md",
                }}
              ></Input>
            </div>
            <div className="ml-2 mt-1">*</div>
          </div>

          <div className="w-[50%] mt-2 flex justify-start ml-[30px] ">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              To
            </label>
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
            <div className="ml-2 mt-1">*</div>
          </div>
        </div>

        <div className="flex ">
          <div className="w-[50%] mt-2 flex justify-center  ml-[44px]">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              Horizontal offset Acceptable Range
            </label>
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
            <div className="ml-2 mt-1">mm/dam</div>
          </div>

          <div className="w-[50%] mt-2 flex justify-start ml-[15px] ">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              To
            </label>
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
            <div className="ml-2 mt-1">mm/dam</div>
          </div>
        </div>

        <div className="flex ">
          <div className="w-[50%] mt-2 flex justify-center  ml-[28px]">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              Horizontal angle Acceptable Range
            </label>
            <div>
              <Input
                size="sm"
                radius="none"
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "h-8 w-[100%] md:w-[90%] lg:w-[100%] border  border-[black] shadow-sm rounded-md",
                }}
              ></Input>
            </div>
            <div className="ml-2 mt-1">Cd</div>
          </div>

          <div className="w-[50%] mt-2 flex justify-start ml-[30px] ">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              To
            </label>
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
            <div className="ml-2 mt-1">Cd</div>
          </div>
        </div>
        <div className="flex ">
          <div className="w-[50%] mt-2 flex justify-center  ml-[35px]">
            <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
              Lamp light not more than
            </label>
            <div>
              <Input
                size="sm"
                radius="none"
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "h-8 w-[100%] md:w-[80%] lg:w-[100%] border  border-[black] shadow-sm rounded-md",
                }}
              ></Input>
            </div>
            <div className="ml-2 mt-1">Cd</div>
          </div>
        </div>
        <div className="flex ">
          <div className="w-[50%] mt-2 flex justify-center  ml-[px]">
            <label className="font-bold ml-2 mt-1" htmlFor="Wheel Span">
              Left and Right Lamp Offset distance
              <p className="text-end"> not more than</p>
            </label>

            <div className="ml-7 ">
              <Input
                size="sm"
                radius="none"
                variant="bordered"
                classNames={{
                  inputWrapper:
                    "h-8 w-[100%] md:w-[90%] lg:w-[100%] border  border-[black] shadow-sm rounded-md",
                }}
              ></Input>
            </div>
            <div className="ml-2 mt-1">Cd</div>
          </div>
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
    </div>
  );
}
export default DippedLamp;
