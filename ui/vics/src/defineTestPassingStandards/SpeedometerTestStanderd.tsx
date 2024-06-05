import { Button, Input } from "@nextui-org/react";
import { IconAlertCircle } from "@tabler/icons-react";
import React from "react";
function SpeedometerTestStanderd(props) {
  const errorMsg =
    "Warning The highlighted fields have overlapped with existing active Passing Standard, unable to save current standard. Please amend the date before proceeding.";
  const errorEffectiveDateMarkUp = props.errorEffectiveDate;
  const errorManufacturingDateMarkUp = props.errorManufacturingDate;
  const errorFirstRegistrationDateMarkUp = props.errorFirstRegistrationDate;
  const hndClose = () => {
    props.handleClose();
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

      <div className="flex justify-center mt-10 ">
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
          onClick={hndClose}
        >
          Cancel
        </Button>
      </div>
      {errorEffectiveDateMarkUp ||
      errorFirstRegistrationDateMarkUp ||
      errorManufacturingDateMarkUp ? (
        <div className=" text-darkRed text-[12px] ml-2 font-bold mt-5 flex ">
          <div className="flex justify-center align-middle text-center mr-1">
            <IconAlertCircle stroke={2} />
          </div>
          <div className="flex justify-center text-center mt-1">{errorMsg}</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default SpeedometerTestStanderd;