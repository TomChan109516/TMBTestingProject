import { Button, Input } from "@nextui-org/react";
import React from "react";
function SddTestStandards(props) {
  const handleClose = () => {
    props.closePopup(false);
  };
  return (
    <div>
      <div className="flex justify-center mr-16 font-calibri font-bold text-black mt-10 items-center">
        <div className="mr-2">Vehicle Perform this test at</div>
        <div>
          <Input
            size="sm"
            radius="sm"
            variant="bordered"
            classNames={{ inputWrapper: "h-8 w-[100%] border" }}
          ></Input>
        </div>
        <div className="ml-2">m</div>
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
export default SddTestStandards;