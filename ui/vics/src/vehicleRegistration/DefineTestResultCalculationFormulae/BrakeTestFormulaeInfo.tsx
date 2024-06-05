import React from "react";
import { Select, SelectItem, Button } from "@nextui-org/react";
import "react-datepicker/dist/react-datepicker.css";
import { IconAlertCircle } from "@tabler/icons-react";
export function BrakeTestFormulaeInfo(props) {
  const errorMsg =
    "Warning The highlighted fields have overlapped with existing active Passing Standard, unable to save current standard. Please amend the date before proceeding.";
  const errorEffectiveDateMarkUp = props.errorEffectiveDate;
  const errorManufacturingDateMarkUp = props.errorManufacturingDate;
  const errorFirstRegistrationDateMarkUp = props.errorFirstRegistrationDate;

  const hndClose = () => {
    props.handleClose();
  };
  return (
    <div className="  ml-8 " data-testid="brake-test-formulae-info">
      <span className=" text-Black  ml- text-[15px] ">Service Brake</span>
      <div className="flex  mr-16 font-calibri font-bold text-black">
        <div className="  text-[15px]">
          {" "}
          Braking Efficiency = Braking Force /
        </div>
        <div>
          <Select
            labelPlacement="outside-left"
            className="text-lg text-black font-bold ml-52  w-[80%] mr-4  "
            radius="none"
            size="sm"
            name="center"
            aria-label="center"
            variant="bordered"
            placeholder="Total Axle Weight"
          >
            <SelectItem className="text-[60px] h-10" key={""}>
              Total Axle Weight
            </SelectItem>
          </Select>
        </div>
      </div>
      <span className=" text-Black  text-[15px] ">Minimum Secondary Brake</span>
      <div className="flex  mt-1 mr-16 font-calibri font-bold text-black">
        <div className="text-[15px]">Braking Efficiency = Braking Force /</div>
        <div>
          <Select
            labelPlacement="outside-left"
            className="text-lg text-black font-bold ml-52   w-[100%] mr-4 "
            radius="none"
            size="sm"
            name="center"
            aria-label="center"
            variant="bordered"
            placeholder="GVW"
          >
            <SelectItem className="text-[100px] h-10" key={""}>
              GVW
            </SelectItem>
          </Select>
        </div>
      </div>
      <span className=" text-Black  m text-[15px] ">
        Minimum Secondary Brake
      </span>
      <div className="flex mt-1 mr-16 font-calibri font-bold text-black">
        <div className=" text-[15px]">Braking Efficiency = Braking Force /</div>
        <div>
          <Select
            labelPlacement="outside-left"
            className="text-lg text-black font-bold ml-52   w-[100%] mr-4 "
            radius="none"
            size="sm"
            name="center"
            aria-label="center"
            variant="bordered"
            placeholder="GVW"
          >
            <SelectItem className="text-[100px] h-10" key={""}>
              GVW
            </SelectItem>
          </Select>
        </div>
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
      <div className="justify-center  mt-5 ml-44">
        <Button
          className="text-white h-7  font-bold bg-tropicalrainforest rounded-md mr-6 w-[20%]"
          variant="light"
          radius="none"
        >
          Save
        </Button>
        <Button
          className="w-[20%] text-black h-7 font-calibri font-bold bg-white border-1 ml-14 mr-10 rounded-md"
          radius="none"
          onClick={hndClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
export default BrakeTestFormulaeInfo;
