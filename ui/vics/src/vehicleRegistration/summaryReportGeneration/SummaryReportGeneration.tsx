import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Input,
} from "@nextui-org/react";
import { Download } from "tabler-icons-react";
import GenerationReportPopup from "./GenerationReportPopup";

const vehicleData = [
  {
    id: "002",
    fileName: "20231213_vics_daily_report_L17.pdf",
    type: "Daily Test Result",
    updateTime: "13/09/2023 17:23:00",
    operation: "",
  },
  {
    id: "001",
    fileName: "20231212_vics_daily_report_L17.pdf",
    type: "Daily Test Result",
    updateTime: "12/09/2023 17:53:10",
    operation: "",
  },
];

const button1 = [{ id: 1, name: "Generate Report" }];
const button2 = [{ id: 2, name: "Search" }];

export default function SummaryReportGeneration() {
  const [showGenerationReportPopup, setshowGenerationReportPopup] =
    useState(false);

  const handleGenerationReportPopup = () => {
    setshowGenerationReportPopup(true);
  };

  return (
    <>
      <div className=" flex justify-between h1Heading calibri ">
        <div className="  flex mt-4 ml-8 font-bold ">
          <p>Summary Report Generation Enquiry</p>
        </div>
      </div>

      <div className="flex flex-row justify-between inputTxt calibri">
        <div className="flex ml-8">
          {button1.map((button) => (
            <Button
              size="sm"
              key={button.id}
              className="bg-persianGreen font-bold text-white h-7 mt-3 rounded p-1"
              radius="none"
              onClick={handleGenerationReportPopup}
            >
              {button.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-row ">
          <div className="flex flex-row  items-center ">
            <label className="text-innerInputTxt mr-2">From</label>
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className="w-[160px] inline-block border-greyBorder "
              variant="bordered"
              type="date"
            ></Input>
          </div>

          <div className="flex flex-row items-center ml-2">
            <label className="text-innerInputTxt mr-2">To</label>
            <Input
              radius="none"
              labelPlacement="outside-left"
              size="sm"
              className="w-[160px] inline-block border-greyBorder "
              variant="bordered"
              type="date"
            ></Input>

            <div className="justify-end mr-6">
              {button2.map((button) => (
                <Button
                  size="sm"
                  key={button.id}
                  className="bg-persianGreen font-bold text-white m-2 w-auto md:w-[150px] lg:w-[120px] xl:w-[100px] h-8 mt-2 border-1.5 rounded p-1 ml-2"
                  radius="none"
                >
                  {button.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="m-8  mt-4">
        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
          <TableHeader className="bg-tropicalrainforest ">
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              ID
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white">
              File Name
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white">
              Type
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white">
              Update Time
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white">
              Operation
            </TableColumn>
          </TableHeader>
          <TableBody>
            {vehicleData.map((details) => {
              return (
                <TableRow
                  key={details.id}
                  className="even:bg-lightGreen odd:bg-[#f9ffff] font-calibri text-center"
                >
                  <TableCell className="border-1 border-greyBorder font-bold text-sm">
                    {details.id}
                  </TableCell>
                  <TableCell className="border-1 border-greyBorder font-bold text-sm">
                    {details.fileName}
                  </TableCell>
                  <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                    {details.type}
                  </TableCell>
                  <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                    {details.updateTime}
                  </TableCell>
                  <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                    <Download
                      size={20}
                      strokeWidth={2}
                      color={"black"}
                      className="ml-24"
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      {showGenerationReportPopup && (
        <GenerationReportPopup
          showGenerationReportPopup={showGenerationReportPopup}
          setGenerationReportPopup={setshowGenerationReportPopup}
        ></GenerationReportPopup>
      )}
    </>
  );
}
