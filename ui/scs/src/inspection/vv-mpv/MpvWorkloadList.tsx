import React, { useState } from "react";
import {
  Button,
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarEvent, Refresh } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";

const laneList = ["K1-KOC K1", "K2-KOC K2", "K3-KOC K3"];
const sessionList = ["Pass", "Fail", "DNA"];

function MpvWorkloadList() {
  const navigate = useNavigate();
  const [toDate, setToDate] = useState(new Date());
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [checkedSession, setCheckedSession] = useState<string[]>([]);
  return (
    <>
      <div className="mt-2">
        <div className="flex">
          <div className="flex-initial text-[#00AF8F] ml-[15px] font-bold text-sm">
            VV/MPV WorkLoad List
          </div>
        </div>
        <div>
          <div className="mt-[10px] ml-2 mr-2">
            <h1>
              <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px]  text-[#00AF8F]">
                Filter
              </h5>
              <div className="pt-2 pb-2">
                <div className="float-right pr-[5px]">
                  <Refresh
                    size="20"
                    style={{
                      background: "#00AF8F",
                      color: "#FFFFFF",
                      borderRadius: "4px",
                    }}
                  // onClick={handleRegMarkPopup}
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-3 flex flex-row mt-2">
                    <div className="flex flex-row">
                      <div className="grid grid-rows-4 grid-flow-col mt-2 h-[100px] whitespace-nowrap w-1/2">
                        <div className="flex items-center">
                          <div className="ml-4 text-left text-sm w-[50px]">
                            Date
                          </div>
                          <div className="flex w-[130px] ml-[12px] border-2 border-[lightgrey] items-center">
                            <CalendarEvent color="grey" size="26" />
                            <DatePicker
                              name="toDate"
                              selected={toDate}
                              //   onChange={handleFromDateChanged}
                              className="text-sm w-[100px] pl-1"
                            />
                          </div>
                        </div>
                        <div className="flex mt-2 ">
                          <div className="ml-4 text-left text-sm mt-[5px] w-[50px]">
                            Centre
                          </div>
                          <div className="w-[130px] ml-[12px] ">
                            <Select
                              id="centreData"
                              data-testid="select-test"
                              radius="none"
                              variant="bordered"
                              size="sm"
                              labelPlacement="outside-left"
                            // value={centerId}
                            // onChange={handleCenterData}
                            >
                              <SelectItem key="TY1">TY1</SelectItem>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className="ml-[24px] mt-2">
                        <div className="flex flex-row items-center">
                          <div className="text-sm">Site</div>
                          <div className="flex flex-row ml-[12px]">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                              >
                                All
                              </Checkbox>
                            </CheckboxGroup>
                          </div>
                        </div>
                        <div className="ml-[30px] flex flex-row box-border h-[100px] mt-1 w-[160px] border-2 border-[lightgrey] overflow-x-hidden  ">
                          <CheckboxGroup
                            classNames={{
                              wrapper: "grid grid-cols-1 pb-5 pt-1 pl-1",
                            }}
                            value={checkedList}
                            onValueChange={setCheckedList}
                          >
                            {laneList.map((item, index) => (
                              <Checkbox
                                key={index}
                                value={item}
                                size="sm"
                                className="text-xs"
                                radius="none"
                                classNames={{
                                  wrapper:
                                    "after:bg-[#00AF8F] text-xs font-[Calibri]",
                                }}
                              >
                                {item}
                              </Checkbox>
                            ))}
                          </CheckboxGroup>
                        </div>
                      </div>
                      <div className="ml-[30px] mt-2">
                        <div className="flex flex-row items-center">
                          <div className="text-sm">Result</div>
                          <div className="flex flex-row ml-[12px]">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                              >
                                All
                              </Checkbox>
                            </CheckboxGroup>
                          </div>
                        </div>
                        <div className="ml-[46px] flex flex-row box-border h-[100px] mt-1 w-[130px] border-2 border-[lightgrey] overflow-x-hidden  ">
                          <CheckboxGroup
                            classNames={{
                              wrapper: "grid grid-cols-1 pt-1 pl-1",
                            }}
                            value={checkedList}
                            onValueChange={setCheckedList}
                          >
                            {sessionList.map((item, index) => (
                              <Checkbox
                                key={index}
                                value={item}
                                size="sm"
                                className="text-xs"
                                radius="none"
                                classNames={{
                                  wrapper:
                                    "after:bg-[#00AF8F] text-xs font-[Calibri]",
                                }}
                              >
                                {item}
                              </Checkbox>
                            ))}
                          </CheckboxGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </h1>
            <div className="text-left  flex flex-row text-sm ml-1 mr-1 h-[36px] rounded-sm">
              <div className=" p-2">
                <span className="">
                  Total : <span className="font-bold"></span>
                </span>
                <span className="ml-10">
                  Pass : <span className="font-bold">0</span>
                </span>
                <span className="ml-10">
                  Fail : <span className="font-bold">0</span>
                </span>
                <span className="ml-10">
                  DNA : <span className="font-bold">0</span>
                </span>

                <span className="ml-10">
                  Closed : <span className="font-bold">0</span>
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-[2px]">
              <div className="float-left">
                <Button
                  className="bg-[#FFFFFF] font-bold border border-[lightgrey] shadow-sm rounded-sm"
                  size="sm"
                  radius="none"
                  variant="flat"
                  onClick={() => navigate("/Vvmvp")}
                >
                  VV MPV Report
                </Button>
              </div>
              <div className="float-right">
                <Button
                  className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                  variant="flat"
                  size="sm"
                  type="submit"
                  onClick={() => navigate('/vehicleExamSearch')}
                >
                  VV/MPV Inspection
                </Button>
              </div>
            </div>
            <div className="mt-[10px]">
              <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
                <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
                    Site
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
                    Time
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
                    Class
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
                    Chassis No
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
                    Exam Code
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
                    Appointment No.
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
                    Float Name
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    VV No.
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    District Code
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Result
                  </TableColumn>
                  <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
                    Action
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-1 border-[lightgrey] p-[4px]">
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell>No Data</TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="float-left">
                <Button
                  className="bg-[#FFFFFF] font-bold border border-[lightgrey] shadow-sm rounded-sm"
                  size="sm"
                  radius="none"
                  variant="flat"
                >
                  VV MPV Report
                </Button>
              </div>
              <div className="float-right">
                <Button
                  className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                  variant="flat"
                  size="sm"
                  type="submit"
                  onClick={() => navigate('/vehicleExamSearch')}
                >
                  VV/MPV Inspection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MpvWorkloadList;
