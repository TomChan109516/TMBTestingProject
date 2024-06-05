import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

export default function HeadLampLayoutTable(props) {
  const { headTestData, submitted, needInspection } = props;
  return (
    <>
        <div className="flex text-small justify-end mt-2 ">
        Need Inspection: <span className={needInspection==="No"?"mr-16 text-red":"mr-16 text-persianGreen"}>{needInspection}</span> Submitted:{" "}
        <span className={submitted==="No"?"mr-16 text-red":"mr-16 text-persianGreen"}>{submitted}</span>
      </div>

      <table key={1} className="border-1 border-tropicalrainforest mt-8 mb-8 w-full justify-end text-inputTxt">
        <tr className=" bg-tropicalrainforest text-white text-innerInputTxt  ">
          <th rowSpan="2" className=" mb-0 h-20">
            HT
          </th>

          <th colSpan="2" className="border-l-1 border-greyBorder border-b-1">
            {" "}
            Intensity(cd)
          </th>

          <th colSpan="2" className="border-l-1 border-greyBorder border-b-1">
            {" "}
            Vertical Offset(mm/dam)
          </th>

          <th colSpan="2" className="border-l-1 border-greyBorder border-b-1">
            {" "}
            Horizontal Offset(mm/dam)
          </th>

          <th colSpan="2" className="border-l-1 border-greyBorder border-b-1">
            {" "}
            Center Height(mm)
          </th>

          <th rowSpan="2" className="border-l-1 border-greyBorder  mb-0">
            {" "}
            Upware Angle(*){" "}
          </th>

          <th rowSpan="2" className="border-l-1 border-greyBorder mb-0">
            {" "}
            Horizontal Angle(8*){" "}
          </th>

          <th rowSpan="2" className="border-l-1 border-greyBorder mb-0">
            {" "}
            Cap Angle{" "}
          </th>

          <th rowSpan="2" className="border-l-1 border-greyBorder mb-0">
            {" "}
            Result{" "}
          </th>
        </tr>

        <tr className=" bg-tropicalrainforest text-white w-full  ">
          <th className="border-l-1 border-greyBorder"> Main </th>

          <th className="border-l-1 border-greyBorder "> Dipped</th>

          <th className="border-l-1 border-greyBorder"> Main </th>

          <th className="border-l-1 border-greyBorder"> Dipped</th>

          <th className="border-l-1 border-greyBorder"> Main </th>

          <th className="border-l-1 border-greyBorder"> Dipped</th>
          <th className="border-l-1 border-greyBorder"> Main </th>

          <th className="border-l-1 border-greyBorder"> Dipped</th>
        </tr>
        {headTestData.map((data, index) => {
          return (
            <tr className="">
              <td className="border-l-1 border-greyBorder ">Left Lamp</td>

              <td className="border-l-1 border-greyBorder ">{data.LeftMainIntensity}</td>

              <td className="border-l-1 border-greyBorder ">{data.LeftDippedIntensity}</td>

              <td className="border-l-1 border-greyBorder ">{data.LeftMainVOffset}</td>

              <td className="border-l-1 border-greyBorder ">{data.LeftDippedVOffset}</td>

              <td className="border-l-1 border-greyBorder ">{data.LeftMainHOffset}</td>

              <td className="border-l-1 border-greyBorder ">{data.LeftDippedHOffset}</td>

              <td className="border-l-1 border-greyBorder ">{data.LeftMainHeight}</td>

              <td className="border-l-1 border-greyBorder ">{data.LeftDippedHeight}</td>

              <td className="border-l-1 border-greyBorder ">{data.LeftDippedUpwardAngle}</td>

              <td className="border-l-1 border-greyBorder ">{data.LeftDippedHorizontAlAngle}</td>

              <td className="border-l-1 border-greyBorder ">
                <Select
                  labelPlacement="outside-left"
                  className="w-[80px]"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                  placeholder="Select"
                >
                  <SelectItem className="" key={""}>
                    NO
                  </SelectItem>
                </Select>
              </td>

              <td className="border-l-1 border-greyBorder "></td>
            </tr>
          );
        })}

        {headTestData.map((data, index) => {
          return (
            <tr className="border-l-1 border-lightGreen  bg-lightGreen">
              <td className="border-l-1 border-greyBorder">Right Lamp</td>

              <td className="border-l-1 border-greyBorder ">{data.RightMainIntensity}</td>

              <td className="border-l-1 border-greyBorder ">{data.RightDippedIntensity}</td>

              <td className="border-l-1 border-greyBorder ">{data.RightMainVOffset}</td>

              <td className="border-l-1 border-greyBorder ">{data.RightDippedVOffset}</td>

              <td className="border-l-1 border-greyBorder ">{data.RightMainHOffset}</td>

              <td className="border-l-1 border-greyBorder ">{data.RightDippedHOffset}</td>

              <td className="border-l-1 border-greyBorder ">{data.RightMainHeight}</td>

              <td className="border-l-1 border-greyBorder ">{data.RightDippedHeight}</td>

              <td className="border-l-1 border-greyBorder ">{data.RightDippedUpwardAngle}</td>

              <td className="border-l-1 border-greyBorder ">{data.RightDippedHorizontAlAngle}</td>

              <td className="border-l-1 border-greyBorder ">
                <Select
                  labelPlacement="outside-left"
                  className="w-[80px]"
                  radius="none"
                  size="sm"
                  name="center"
                  aria-label="center"
                  variant="bordered"
                  placeholder="Select"
                >
                  <SelectItem className="text-[10px]" key={""}>
                    NO
                  </SelectItem>
                </Select>
              </td>
              <td className="border-l-1 border-greyBorder "></td>
            </tr>
          );
        })}
      </table>
    </>
  );
}