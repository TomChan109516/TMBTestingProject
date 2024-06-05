import React from "react";
import { Button, Checkbox, Input, Select,  } from "@nextui-org/react";
import {
  SelectItem,
} from "@nextui-org/react";
import "react-datepicker/dist/react-datepicker.css";
import { IconAlertCircle } from "@tabler/icons-react";
export function TwoInOneTestFormulae(props) {
  const { password, setPassword } = props;
  const errorMsg =
    "Warning The highlighted fields have overlapped with existing active Passing Standard, unable to save current standard. Please amend the date before proceeding.";
  const errorEffectiveDateMarkUp = props.errorEffectiveDate;
  const errorManufacturingDateMarkUp = props.errorManufacturingDate;
  const errorFirstRegistrationDateMarkUp = props.errorFirstRegistrationDate;
  const hndClose = () => {
    props.handleClose();
    setPassword(false);
  };
  return (
    <div className="">
          <p className="font-calibri font-bold mt-4 ml-8 text-[16px] ">Actual speed (A) and Display speed (D) should satisfy:</p>
          <div className="flex mt-8 ">
            <Select
              labelPlacement="outside-left"
              size="sm"
              className="ml-8 w-[9%]"
              radius="none"
              variant="bordered"
            >
              <SelectItem>D</SelectItem>
              <SelectItem> </SelectItem>
            </Select>

            <div className="ml-1 text-[16px]">
              *
            </div>
            <Input
              labelPlacement="outside-left"
              className="ml-1 w-[7%] h-2"
              radius="none"
              size="sm"
              variant="bordered"
              placeholder="0"
            ></Input>
            <div className="ml-1 text-[16px]" >
              +
            </div>
            <Input
              labelPlacement="outside-left"
              className="ml-1 w-[5%] h-2"
              radius="none"
              size="sm"
              variant="bordered"
              placeholder="0"
            ></Input>
            <div className=" ml-3 text-[16px]">
              ≤
            </div>
            <div className="w-[10%] ml-4 text-[16px]">
              D-A /
            </div>
            <Select
              labelPlacement="outside-left"
              size="sm"
              className="w-[9%] h-2 ml-0"
              radius="none"
              variant="bordered"
            >
              <SelectItem>1</SelectItem>
              <SelectItem> </SelectItem>
            </Select>
            <div className="ml-4 text-[16px] ">
              ≤
            </div>
            <Select
              labelPlacement="outside-left"
              size="sm"
              className="ml-4 w-[9%] h-2"
              radius="none"
              variant="bordered"
            >
              <SelectItem>D</SelectItem>
              <SelectItem> </SelectItem>
            </Select>
            <div className="ml-2 text-[16px]">
              *
            </div>
            <Input
              labelPlacement="outside-left"
              className="ml-2 w-[7%] h-2"
              radius="none"
              size="sm"
              variant="bordered"
              placeholder="0.1"
            ></Input>
            <div className="ml-1 text-[16px]" >
              +
            </div>
            <Input
              labelPlacement="outside-left"
              className="ml-2 w-[6%] h-2"
              radius="none"
              size="sm"
              variant="bordered"
              placeholder="4"
            ></Input> 
            <p className="ml-2 text-[16px]">Km/H</p>
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
          <div className="justify-center ml-48 mb-4 mt-20 ">
            <Button
              className="text-white h-9  font-bold bg-tropicalrainforest rounded-md mr-6 w-[24%]"
              variant="light" radius="none"
            >
              Save
            </Button>
            <Button className="w-[24%] text-black h-9 font-calibri font-bold bg-white border-1 ml-16 mr-10 rounded-md" radius="none" onClick={hndClose}>
              Cancel
            </Button>
          </div>
    </div>
  );
}
export default TwoInOneTestFormulae;


