import { Textarea } from "@nextui-org/react";
import React from "react";

function TextArea() {
  return (
    <div>
      <div className="flex mt-4">
        <div className="text-[13px] text-black font-bold text-left ml-10    flex justify-end ">
          <span className=" self-end">Remark</span>
        </div>
        <div className="  sm:mr-8 sm:ml-4 md:ml-24 md:w-[69%] sm:mx-auto text-xs text-black text-left ml-2  border-[2px] border-shadeWhite rounded-sm ">
          <Textarea
            placeholder=""
            radius="none"
            className=" "
            classNames={{
              input: "resize-y min-h-[300px] hover: border-transparent p-2",
              inputWrapper: " p-0",
              innerWrapper: "pb-0",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TextArea;
