import {
  Button,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Search } from "tabler-icons-react";
import { theme } from "../common/themes/themeConfig";
import React, { useState } from "react";
import ExamCodeInfo from "./ExamCodeInfo";
import ExamCodeSearchPopUp from "./ExamCodeSearchPopUp";
import { ListMaintainExamCodes } from "./modal/ExamCodeMaintenanceModel";
import { getSearchExamCode } from "./service/ExamCodeMaintenanceService";

function ExamCodeMaintenance() {
  const [showExamInfoPopup, setShowExamInfoPopup] = useState(false);
  const [showExamCodeSearchPopUp, setShowExamCodeSearchPopUp] = useState(false);
  const [selectedExamCode, setSelectedExamCode] = useState({});

  const examCodeInfo = () => {
    setShowExamInfoPopup(true);
  };

  const examCodeSearchPopUp = (selected) => {
    setSelectedExamCode(selected);
    setShowExamCodeSearchPopUp(true);
  };

  const ResetbtnFunc = () => {
    setExClass("");
    setExCode("");
  };

  const examTypes = [
    { value: "Select.." },
    { value: "Primary" },
    { value: "Supplementary" },
  ];

  const [exClass, setExClass] = useState<string>("");
  const [exCode, setExCode] = useState<string>("");

  const [examCodeData, setExamCodeData] = useState<ListMaintainExamCodes[]>([]);
  const search = async () => {
    const searchData =
      exClass || exCode
        ? new URLSearchParams({
            examClass: exClass,
            examCode: exCode,
          })
        : {};

    const response = await getSearchExamCode(searchData);
    setExamCodeData(response.listMaintainExamCodes);
  };

  return (
    <div className="pt-[10px]">
      <div className="flex">
        <div
          className={`text-[${theme?.colors?.tropicalRainForest}] flex flex-initial ml-5 p-[3px] font-bold text-sm`}
        >
          Exam Code Maintenance
        </div>
      </div>
      <div>
        <div className="mt-[12px] ml-6 mr-6">
          <h1>
            <h5
              className={`text-[${theme?.colors?.persianGreen}] font-[${theme?.fontFamily?.calibri}] absolute-top-2 start-3 pl-[10px] pr-[10px] font-bold`}
            >
              Searching Criteria
            </h5>
            <div className="grid grid-cols-3 pt-6 pr-2">
              <div>
                <div className="flex flex-col-2">
                  <span
                    className={`font-[${theme?.fontFamily?.calibri}] ml-1 mr-4 text-sm pl-5 font-bold mt-[2px]`}
                    data-testid="Exam Code"
                  >
                    Exam Code
                  </span>
                  <span className="text-[10.5px] text-black text-left ml-10 pl-10 ">
                    <Input
                      classNames={{
                        inputWrapper: `min-h-unit-6 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                      }}
                      id="standard-basic"
                      data-testid="input-test"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      maxLength={15}
                      placeholder="Input Exam Code"
                      value={exCode}
                      onValueChange={setExCode}
                    />
                  </span>
                </div>
              </div>
              <div className=" ...">
                <div className="flex flex-col-2 ">
                  <span
                    className={`font-[${theme?.fontFamily?.calibri}] ml-1 mr-4 text-sm pl-5 font-bold mt-[2px]`}
                    data-testid="Exam Type"
                  >
                    Exam Type
                  </span>
                  <span className="text-[10.5px] text-black text-left pl-10 ml-10">
                    <Select
                      classNames={{
                        trigger: `min-h-unit-2 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                      }}
                      items={examTypes}
                      labelPlacement="outside-left"
                      data-testid="select-test"
                      className="w-[194px]"
                      radius="none"
                      size="sm"
                      name="examType"
                      aria-label="examType"
                      variant="bordered"
                      placeholder="Choose Exam Type"
                      selectedKeys={[exClass]}
                      value={exClass}
                      onChange={(e) => {
                        setExClass(e.target.value);
                      }}
                    >
                      {(examTypes) => (
                        <SelectItem
                          key={examTypes.value}
                          value={examTypes.value}
                          className="text-[10px]"
                        >
                          {examTypes.value}
                        </SelectItem>
                      )}
                    </Select>
                  </span>
                </div>
              </div>
              <div>
                <div
                  className={`font-[${theme?.fontFamily?.calibri}] flex justify-end pb-[10px] pt-5 pr-5 mx-12`}
                >
                  <Button
                    className="bg-[#ffffff] float-right px-12 mr-5 rounded font-bold h-6 border border-solid border-blackBorder"
                    radius="none"
                    type="submit"
                    data-testid="resetButton"
                    fond-bold
                    onClick={ResetbtnFunc}
                  >
                    Reset
                  </Button>
                  <Button
                    className={`bg-[${theme?.colors?.persianGreen}] text-white mr-2 px-12 float-right font-bold rounded h-6 border border-solid border-blackBorder`}
                    radius="none"
                    type="submit"
                    data-testid="button-test"
                    fond-bold
                    onClick={search}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </h1>
          <div>
            <div className="flex justify-left pb-[7px] pt-3 mr-2">
              <Button
                className={`bg-[${theme?.colors?.persianGreen}] text-white mr-2 float-right rounded h-6 border border-solid border-blackBorder`}
                variant="bordered"
                type="submit"
                data-testid="examCodeInfo"
                fond-bold
                onClick={examCodeInfo}
              >
                Create New Exam Code
              </Button>
              {showExamInfoPopup && (
                <ExamCodeInfo
                  showExamInfoPopup={showExamInfoPopup}
                  setShowExamInfoPopup={setShowExamInfoPopup}
                  title="ExamCodeInfo"
                />
              )}
            </div>
            <div className="flex">
              <div className="flex-initial text-[#a6a6a6] p-[5px] font-bold text-sm">
                {examCodeData?.length} record(s) found.
              </div>
            </div>
            <div>
              <div className="border-2 border-white mr-20 ">
                <div
                  className={`text-left bg-[${theme?.colors?.persianGreen}] text-white border pl-2 `}
                >
                  Exam Code
                </div>
                <Table
                  radius="none"
                  shadow="sm"
                  classNames={{ wrapper: "p-0" }}
                >
                  <TableHeader
                    className={` bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}]  border-2 border-[#c2eedc] text-sm text-left font-bold `}
                  >
                    <TableColumn
                      className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] border-2 border-[#cae1d9] text-sm text-left font-bold first:rounded-none`}
                    >
                      Exam Code
                    </TableColumn>
                    <TableColumn
                      className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] border-2 border-[#cae1d9] w-[15%] text-sm text-left font-bold`}
                    >
                      Exam Name
                    </TableColumn>
                    <TableColumn
                      className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] border-2 border-[#cae1d9] w-[10%] text-sm text-left font-bold`}
                    >
                      Exam Type
                    </TableColumn>
                    <TableColumn
                      className={`bg-[#A0D9C1]  text-[${theme?.colors?.persianGreen}] border-2 border-[#cae1d9] w-[100%]  text-sm text-left font-bold`}
                    >
                      Description
                    </TableColumn>
                    <TableColumn
                      className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] border-2 border-[#cae1d9] text-sm text-left font-bold last:rounded-none`}
                    ></TableColumn>
                  </TableHeader>
                  <TableBody className="mt-0">
                    {examCodeData.map((examCode) => {
                      return (
                        <TableRow>
                          <TableCell className="border-2 border-[#cae1d9]">
                            {examCode.ExamCode}
                          </TableCell>
                          <TableCell className="border-2 text-left border-[#cae1d9]">
                            {examCode.InspectionTypeName}
                          </TableCell>
                          <TableCell className="border-2 text-left border-[#cae1d9]">
                            {examCode.ExamClass}
                          </TableCell>
                          <TableCell className="border-2 text-left border-[#cae1d9]">
                            {examCode.InspectionTypeDescription}
                          </TableCell>
                          <TableCell className="border-2 text-left border-[#cae1d9]">
                            <div className="flex">
                              <Search
                                size={20}
                                color="white"
                                className="bg-[#00AF8F] rounded-sm mt-[10px]"
                                data-testid="searchIcon"
                                onClick={() => examCodeSearchPopUp(examCode)}
                              />
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                {showExamCodeSearchPopUp && (
                  <ExamCodeSearchPopUp
                    showExamCodeSearchPopUp={showExamCodeSearchPopUp}
                    setShowExamCodeSearchPopUp={setShowExamCodeSearchPopUp}
                    selectedExamCode={selectedExamCode}
                    title="ExamCodeSearchPopUp"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExamCodeMaintenance;
