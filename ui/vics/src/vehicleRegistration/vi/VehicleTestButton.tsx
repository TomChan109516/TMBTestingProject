import { Checkbox, Select, SelectItem } from '@nextui-org/react'
import React from 'react'

function VehicleTestButton() {
  const tableData = [
    { id: 1, name: "Axle" },
    { id: 2, name: "Brake System" },
    { id: 3, name: "Chassis/Body Structure*" },
    { id: 4, name: "Dimension/Weight*" },
    { id: 5, name: "Documents" },
    { id: 6, name: "Door/Emergency Exit*" },
    { id: 7, name: "Driver cab/Bodywork*" },
    { id: 8, name: "Driver's view" },
  ];
  return (
    <div className='font-calibri font-bold'>
      <div className="flex flex-row mt-2 ">
        <div className="flex  ">
          <span className="mr-2 ml-5 text-small mt-3 w-[100%] ">
            Total no. of fixed axles
          </span>{" "}
          <input
            type="text"
            value='2'
            radius="none"
            data-testId="Wheel Span"
            name="Wheel Span"
            className="w-[100%] md:w-[236px] lg:w-[160px] xl:w-[130px] h-8 mt-2 border-1.5 border-darkGrey rounded-s bg-[#e6e3e3] p-1 text-innerInputTxt"
          />
        </div>
        <div className="flex   ">
          <span className="mr-2 ml-2 text-small w-[120%]  mt-3">
            Total no. of Retrackable axles
          </span>{" "}
          <input
            type="text"
            value='2'
            radius="none"
            id="Wheel Span"
            name="Wheel Span"
            className="w-[100%]  md:w-[236px] lg:w-[160px] xl:w-[130px] h-8 mt-2 border-1.5 border-darkGrey rounded-s bg-[#e6e3e3] p-1 text-innerInputTxt"
          />
        </div>
        <div className="flex  ">
          <span className="mr-2 ml-2 w-[60%] text-small mt-3">
            Total no. axles
          </span>{" "}
          <input
            type="text"
            value='2'
            radius="none"
            id="Wheel Span"
            name="Wheel Span"
            className="w-[100%] md:w-[236px] lg:w-[160px] xl:w-[130px] h-8 mt-2 border-1.5 border-darkGrey rounded-s bg-[#fff] p-1 text-innerInputTxt"
          />
        </div>
      </div>
      <div className="flex ">
        <span className="mr-2 ml-5 text-small mt-4">
          Retrackable axles position
        </span>{" "}
        <span className="mr-8">
          {" "}
          <Checkbox radius="none" size="sm" defaultSelected={false} data-testId="checkbox-1" >
            1
          </Checkbox>
        </span>
        <span>
          {" "}
          <Checkbox radius="none" size="sm" defaultSelected={false}>
            2
          </Checkbox>
        </span>
      </div>

      <table className=" border-1 border-tropicalrainforest mt-2 mb-8 w-[98%] justify-end text-inputTxt font-calibri font-bold mr-4 ml-4 ">
        <tr className=" bg-tropicalrainforest text-white text-innerInputTxt ">
          <th className="border-l-1 mb-0 h-8 border-greyBorder border-b-1 w-12">
            Code
          </th>
          <th className="border-l-1 border-greyBorder border-b-1 w-[40%]">
            Description
          </th>
          <th className="border-l-1 border-greyBorder border-b-1 w-12 ">F</th>
          <th className="border-l-1 border-greyBorder border-b-1 w-12 ">N/S</th>
          <th className="border-l-1 border-greyBorder border-b-1 w-12 ">O/S</th>
          <th className="border-l-1 border-greyBorder border-b-1 w-12 ">R</th>
          <th className="border-l-1 border-greyBorder border-b-1 w-12 ">N/S</th>
          <th className="border-l-1 border-greyBorder border-b-1 w-12 ">O/S</th>
          <th className="border-l-1 border-greyBorder border-b-1 w-[20%]">
            Result
          </th>
        </tr>
        {tableData.map((item) => (
          <tr id={item.name} className="border-b-1 boxNotes border-lightGrey  ">
            <td className="border-l-1 border-greyBorder  ">{item.id}</td>
            <td className="border-l-1 border-greyBorder  ">{item.name}</td>
            <td className="border-l-1 border-greyBorder  ">
              {" "}
              <Checkbox
                radius="none"
                size="sm"
                defaultSelected={false}
              ></Checkbox>
            </td>
            <td className="border-l-1 border-greyBorder  ">
              <Checkbox
                radius="none"
                size="sm"
                defaultSelected={false}
              ></Checkbox>
            </td>
            <td className="border-l-1 border-greyBorder  ">
              <Checkbox
                radius="none"
                size="sm"
                defaultSelected={false}
              ></Checkbox>
            </td>
            <td className="border-l-1 border-greyBorder   ">
              <Checkbox
                radius="none"
                size="sm"
                defaultSelected={false}
              ></Checkbox>
            </td>
            <td className="border-l-1 border-greyBorder   ">
              <Checkbox
                radius="none"
                size="sm"
                defaultSelected={false}
              ></Checkbox>
            </td>
            <td className="border-l-1 border-greyBorder  ">
              <Checkbox
                radius="none"
                size="sm"
                defaultSelected={false}
              ></Checkbox>
            </td>
            <td className="border-l-1 border-greyBorder  h-12">
              <Select
                placeholder="p"
                labelPlacement="outside-left"
                className="w-[50%]"
                radius="none"
                size="sm"
                name="center"
                aria-label="center"
                variant="bordered"
              >
                <SelectItem key={2}>Pass</SelectItem>
                <SelectItem key={2}>Fail</SelectItem>
              </Select>
            </td>
          </tr>
        ))}
      </table>

    </div>
  )
}

export default VehicleTestButton