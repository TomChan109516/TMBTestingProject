import React from "react";
import { Checkbox, Radio, RadioGroup } from "@nextui-org/react";
import ButtonsData from "./Buttons";
import { useSelector } from "react-redux";

const Registration = () => {
  const appId = useSelector((state: any) => state.data.appointmentId);
  const data = useSelector((state: any) => state.data.regdata);
  const dataLength = Object.keys(data).length;

  return (
    <div className="mb-2 text-[14px] font-calibri w-[99.6%]">
      <h5
        className="bg-green text-white mt-1 mb-1 p-1"
        data-testid="registration-component"
      >
        Registration
      </h5>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1  ">
        <div className="flex items-center justify-around">
          <label htmlFor="Body Type" className="mr-2">
            Body Type
          </label>
          <input
            disabled
            type="text"
            id="Body Type"
            name="Body Type"
            value={dataLength !== 0 ? data.vehicleBodyTypeId : ""}
            className=" w-[100%] md:ml-2 md:w-[66%] lg:w-[65%] border-1.5 border-greyBorder rounded-s bg-lightGrey p-1"
          />
        </div>
        <div className="flex items-center justify-around">
          <label htmlFor="No.of axles" className="mr-2">
            No.of axles
          </label>
          <input
            disabled
            type="text"
            id="No.of axles"
            name="No.of axles"
            value={dataLength !== 0 ? data.vehicleAxle1Weight : " "}
            className=" w-[100%] md:w-[65%] border-1.5 border-greyBorder rounded-s bg-lightGrey p-1"
          />
        </div>
        <div className="flex items-center justify-around">
          <label htmlFor="Manu. Year" className="mr-2">
            Manu. Year
          </label>
          <input
            disabled
            type="text"
            id="Manu. Year"
            name="Manu. Year"
            value={dataLength !== 0 ? data.vehicleMfcYear : " "}
            className=" w-[100%] md:w-[65%] border-1.5 border-greyBorder rounded-s bg-lightGrey p-1"
          />
        </div>
        <div className="flex items-center justify-around">
          <label htmlFor="Seating Cap." className="mr-2">
            Seating Cap.
          </label>
          <input
            disabled
            type="text"
            id="Seating Cap."
            name="Seating Cap."
            value={dataLength !== 0 ? data.vehicleLowerSeatCapQuantity : " "}
            className=" w-[100%] md:w-[65%] border-1.5 border-greyBorder rounded-s bg-lightGrey p-1"
          />
        </div>
      </div>

      <div className=" grid-cols-4 gap-2 mt-2 mb-2 hidden lg:grid ">
        <div className="flex flex-row justify-around items-center">
          <label htmlFor="Wheel Span" className="text-left ">
            Wheel Span
          </label>
          <input
            disabled
            type="text"
            id="Wheel Span"
            name="Wheel Span"
            value={dataLength !== 0 ? data.vehicleWheelSpan : " "}
            className="w-[65%] ml-2  border-1.5 border-greyBorder rounded-s bg-lightGrey p-1"
          />
        </div>
        <div className="col-span-2 flex  items-center">
          <label htmlFor="VIN Location" className="">
            VIN Location
          </label>
          <input
            disabled
            type="text"
            id="VIN Location"
            name="VIN Location"
            value={dataLength !== 0 ? data.vinLocation : " "}
            className="w-[83%] ml-8 border-1.5 border-greyBorder rounded-s bg-lightGrey p-1 "
          />
        </div>
        <div className="flex justify-start items-center">
          <label htmlFor="Hybrid Vehicle" className="">
            Hybrid Vehicle
          </label>
          <Checkbox
            value="Hybrid Vehicle"
            radius="none"
            id="Hybrid Vehicle"
            name="Hybrid Vehicle"
            size="sm"
            checked={data?.hybridVehicleIndicator === "N" ? true : false}
            classNames={{ wrapper: "after:bg-persianGreen bg-lightGrey" }}
            className="rounded-sm ml-1"
          ></Checkbox>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-1 mb-1 lg:hidden ">
        <div className="flex flex-row justify-around items-center w-[100%]">
          <label htmlFor="Wheel Span" className="text-left">
            Wheel Span
          </label>
          <input
            disabled
            type="text"
            id="Wheel Span"
            name="Wheel Span"
            value={dataLength !== 0 ? data.vehicleWheelSpan : " "}
            className=" w-[65%]  border-1.5 border-greyBorder rounded-s bg-lightGrey p-1"
          />
        </div>
        <div className=" flex justify-around items-center ">
          <label htmlFor="VIN Location" className="">
            VIN Location
          </label>
          <input
            disabled
            type="text"
            id="VIN Location"
            name="VIN Location"
            value={dataLength !== 0 ? data.vinLocation : " "}
            className=" w-[65%] ml-2 border-1.5 border-greyBorder rounded-s bg-lightGrey p-1 "
          />
        </div>
      </div>
      <div className="flex justify-start items-center lg:hidden">
        <label htmlFor="Hybrid Vehicle" className="ml-1">
          Hybrid Vehicle
        </label>
        <Checkbox
          value="Hybrid Vehicle"
          radius="none"
          id="Hybrid Vehicle"
          name="Hybrid Vehicle"
          size="sm"
          checked={data?.hybridVehicleIndicator === "N" ? true : false}
          classNames={{ wrapper: "after:bg-persianGreen" }}
          className="rounded-sm ml-7"
        ></Checkbox>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
        <div className="flex items-center justify-around">
          <label htmlFor="Propulsion" className="mr-2">
            Propulsion
          </label>
          <input
            disabled
            type="text"
            id="Propulsion"
            name="Propulsion"
            value={dataLength !== 0 ? data.vehiclePropulsion : " "}
            className="w-[100%] md:w-[65%] border-1.5 border-greyBorder rounded-s bg-lightGrey p-1"
          />
        </div>
        <div className="flex items-center justify-around">
          <label htmlFor="Engine No." className="mr-2">
            Engine No.
          </label>
          <input
            disabled
            type="text"
            id="Engine No."
            name="Engine No."
            value={dataLength !== 0 ? data.vehicleEngineNumber : ""}
            className="w-[100%] md:w-[65%] border-1.5 border-greyBorder rounded-s bg-lightGrey p-1"
          />
        </div>
        <div className="flex items-center justify-around">
          <label htmlFor="Engine Cap." className="mr-2">
            Engine Cap.
          </label>
          <input
            disabled
            type="text"
            id="Engine Cap."
            name="Engine Cap."
            value={dataLength !== 0 ? data.vehicleEngineSizeQty : " "}
            className="w-[100%] md:w-[65%] border-1.5 border-greyBorder rounded-s bg-lightGrey p-1"
          />
        </div>
        <div className="flex items-center justify-around">
          <label htmlFor="Engine Model" className="mr-2">
            Engine Model
          </label>
          <input
            disabled
            type="text"
            id="Engine Model"
            name="Engine Model"
            value={dataLength !== 0 ? data.vehicleEngineTypeCode : " "}
            className="w-[100%] md:-ml-5 md:w-[65.5%] lg:w-[65%] border-1.5 border-greyBorder rounded-s bg-lightGrey p-1"
          />
        </div>
      </div>
      <div className="pt-2 border-b-1 border-tropicalrainforest mt-3 bg-lightGrey">
        <div className="grid grid-rows-2 grid-flow-col gap-2  ">
          <div className="flex items-center ">
            Service Brake : {dataLength !== 0 ? data.vehicleServiceBrake : " "}
          </div>

          <div className="flex items-center ">
            Parking Brake : {dataLength !== 0 ? data.vehicleParkingBrake : " "}
          </div>

          <div className="flex justify-end mr-16">
            T/B Parking
            <RadioGroup orientation="horizontal" className="ml-6">
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Yes"
              >
                Yes
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="No"
              >
                No
              </Radio>
            </RadioGroup>
          </div>

          <div className="flex justify-end mr-5  ">
            Brake System
            <RadioGroup orientation="horizontal" className="ml-[14px]">
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Split"
              >
                Split
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Non-Split"
              >
                Non-Split
              </Radio>
            </RadioGroup>
          </div>
        </div>

        <div className="flex pt-2">
          <div className="w-[20px] mr-8 ml-2">
            <span> Secondary</span>
            <span className=" ml-7"> Brake</span>
          </div>
          <div className="md:w-[100%] lg:w-[55%] flex justify-start">
            <RadioGroup
              orientation="horizontal"
              className="ml-4 flex flex-grow w-[100%]"
              classNames={{ wrapper: "flex justify-around" }}
            >
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="F/R"
              >
                F/R
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Diagonal"
              >
                Diagonal
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Triangle"
              >
                Triangle
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Combine Service Brake"
              >
                Combine Service Brake
              </Radio>

              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Combine Parking Brake"
              >
                Combine Parking Brake
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="Custom"
              >
                Custom
              </Radio>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* ---------------weight Table ---------*/}
      <table className="border-1 border-tropicalrainforest mt-1 mb-1 w-full">
        <tr className=" bg-green text-white ">
          <th rowSpan="2" className=" mb-0">
            Weight(t)
          </th>
          <th> Axle1</th>
          <th> Axle2</th>
          <th> Axle3</th>
          <th> Axle4</th>
          <th> Axle5</th>
          <th> Axle6</th>
          <th> Axle7</th>
          <th> Axle8</th>
          <th> PGVW</th>
        </tr>
        <tr className="bg-lightGreen h-6">
          <td className="border-l-1 border-white">
            {dataLength !== 0 ? data?.vehicleAxle1Weight : "-"}
          </td>

          <td className="border-l-1 border-white ">
            {dataLength !== 0 ? data?.vehicleAxle2Weight : " "}
          </td>

          <td className="border-l-1 border-white ">
            {dataLength !== 0 ? data?.vehicleAxle3Weight : ""}
          </td>

          <td className="border-l-1 border-white ">
            {dataLength !== 0 ? data?.vehicleAxle4Weight : ""}
          </td>
          <td className="border-l-1 border-white">
            {dataLength !== 0 ? data?.vehicleAxle5Weight : ""}
          </td>

          <td className="border-l-1 border-white ">
            {dataLength !== 0 ? data?.vehicleAxle6Weight : ""}
          </td>

          <td className="border-l-1 border-white ">
            {dataLength !== 0 ? data?.vehicleAxle7Weight : ""}
          </td>

          <td className="border-l-1 border-white ">
            {dataLength !== 0 ? data?.vehicleAxle8Weight : ""}
          </td>
          <td className="border-l-1 border-white ">
            {dataLength !== 0 ? data?.vehicleMaxRPM : ""}
          </td>
        </tr>
      </table>
      <ButtonsData />
    </div>
  );
};

export default Registration;
