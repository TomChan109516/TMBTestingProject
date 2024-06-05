import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import DatePicker from "react-datepicker";
import { theme } from "../../common/themes/themeConfig";
import { useNavigate } from "react-router-dom";

const laneItems = [
  { id: 1, label: "11", value: "11", isChecked: true },
  { id: 2, label: "11S", value: "11S", isChecked: true },
  { id: 3, label: "12", value: "12", isChecked: true },
  { id: 4, label: "12S", value: "12S", isChecked: true },
  { id: 5, label: "13", value: "13", isChecked: true },
  { id: 6, label: "14", value: "14", isChecked: true },
];

const sessionItems = [
  { id: 1, label: "AM1", value: "AM1", isCheckedSession: true },
  { id: 2, label: "AM2", value: "AM2", isCheckedSession: true },
  { id: 3, label: "PM1", value: "PM1", isCheckedSession: true },
  { id: 4, label: "PM2", value: "PM2", isCheckedSession: true },
];

function LaneReallocationFilter({ check, checkFunc }) {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState(new Date());
  const [allChecked, setAllChecked] = useState(true);
  const [allCheckedSession, setAllCheckedSession] = useState(true);
  const [checkedList, setCheckedList] = useState(laneItems);
  const [checkedSession, setCheckedSession] = useState(sessionItems);
  const onCheckboxChangeSession = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (allCheckedSession) {
      setAllCheckedSession(false);
      sessionItems.map((data) => (data.isCheckedSession = false));
      setCheckedSession(sessionItems);
    } else {
      setAllCheckedSession(true);
      sessionItems.map((data) => (data.isCheckedSession = true));
      setCheckedSession(sessionItems);
    }
  };

  const handleSessionCheckboxChange = (id: number) => {
    const updateSessionList = sessionItems.map((data) => {
      if (data.id === id) {
        data.isCheckedSession === !data.isCheckedSession;
      }
      return data;
    });
    setCheckedSession(updateSessionList);
  };

  const onCheckboxChangeLane = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (allChecked) {
      setAllChecked(false);
      laneItems.map((data) => (data.isChecked = false));
      setCheckedList(laneItems);
    } else {
      setAllChecked(true);
      laneItems.map((data) => (data.isChecked = true));
      setCheckedList(laneItems);
    }
  };
  const handleLaneCheckboxChange = (id: number) => {
    const updateLaneList = checkedList.map((data) => {
      if (data.id === id) {
        data.isChecked == !data.isChecked;
      }
      return data;
    });
    setCheckedList(updateLaneList);
  };

  const onCheckboxChange = (e) => {
    checkFunc(e.target.checked);
  };
  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };

  return (
    <>
      <div className={`font-[${theme?.fontFamily?.calibri}] pt-[5px]`}>
        <div className="flex">
          <div
            className={` text-[${theme?.colors?.tropicalRainForest}] flex-initial ml-[15px] font-bold text-sm`}
          >
            Inspection {">"} Lane Reallocation
          </div>
        </div>
        <div>
          <div className="mt-[10px] ml-2 mr-2">
            <h1>
              <h5
                className={`text-[${theme?.colors?.persianGreen}] absolute -top-[10px] start-3 pl-[10px] pr-[10px] text-sm`}
              >
                Filter
              </h5>
              <div className="pt-2 pb-2">
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-5 mt-5">
                    <div className="text-sm font-bold flex flex-row  ">
                      <div className="grid grid-rows-4 mt-2 h-[100px] grid-flow-col whitespace-nowrap w-1/2">
                        <div className="flex flex-row items-center">
                          <div className="ml-2 text-left text-sm font-bold w-[20%]">
                            <span className="text-[red] mr-1">*</span>
                            Date
                          </div>
                          <div
                            className={`flex w-[70%] ml-[20px] border border-solid border-[${theme?.colors?.greyBorder}] items-center`}
                          >
                            <DatePicker
                              name="fromDate"
                              selected={fromDate}
                              onChange={handleFromDateChanged}
                              className="text-sm w-[170px] pl-1 h-7"
                            />
                          </div>
                        </div>
                        <div className="flex mt-2">
                          <div className="ml-4 text-left text-sm font-bold mt-[5px] w-[20%]">
                            Center
                          </div>
                          <div className="w-[70%] ml-[12px] ">
                            <Select
                              classNames={{
                                trigger: `min-h-unit-2 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
                              }}
                              id="centreData"
                              data-testid="select-test"
                              radius="none"
                              variant="bordered"
                              size="sm"
                              labelPlacement="outside-left"
                            >
                              <SelectItem key="TY1">TY1</SelectItem>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className="w-[25%]  ml-[20px] mt-2">
                        <div className="flex flex-row items-center ml-1 w-40 ">
                          <div className="text-sm font-bold">Lane</div>
                          <div className="flex flex-row ml-2">
                            <Checkbox
                              size="sm"
                              radius="none"
                              className="pl-2 ml-4 font-normal rounded-sm"
                              classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                              onChange={onCheckboxChangeLane}
                              isSelected={allChecked}
                              value="ALL"
                            >
                              All
                            </Checkbox>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 overflow-y-scroll h-[100px] w-40 ml-1 box-border border-2 border-[lightgrey] mt-1">
                          {laneItems.map((data) => (
                            <Checkbox
                              key={data.id}
                              onChange={() => handleLaneCheckboxChange(data.id)}
                              isSelected={data.isChecked}
                              value={data.value}
                              radius="none"
                              size="sm"
                              classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                              className="rounded-sm p-4"
                            >
                              {data.label}
                            </Checkbox>
                          ))}
                        </div>
                      </div>
                      <div className="w-[25%]  ml-[25px] mt-2">
                        <div className="flex flex-row items-center ml-1 w-40 ">
                          <div className="text-sm font-bold">Session</div>
                          <div className="flex flex-row ml-2">
                            <Checkbox
                              size="sm"
                              radius="none"
                              className="pl-2 ml-4 font-normal rounded-sm"
                              classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                              onChange={onCheckboxChangeSession}
                              isSelected={allCheckedSession}
                              value="ALL"
                            >
                              All
                            </Checkbox>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 overflow-y-scroll pl-2 h-[100px] w-40 ml-1 box-border border-2 border-[lightgrey] mt-1">
                          {checkedSession.map((data) => (
                            <Checkbox
                              key={data.id}
                              onChange={() =>
                                handleSessionCheckboxChange(data.id)
                              }
                              isSelected={data.isCheckedSession}
                              value={data.value}
                              radius="none"
                              size="sm"
                              classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                              className="rounded-sm"
                            >
                              {data.label}
                            </Checkbox>
                          ))}
                        </div>
                      </div>
                      <div className="w-[25%]  ml-[25px] mt-2">
                        <div className="flex flex-row items-center ml-1 w-40"></div>
                      </div>
                      <div className="w-[25%]  ml-[25px] mt-2">
                        <div className="flex flex-row items-center ml-1 w-40"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </h1>
          </div>
        </div>
      </div>
      {/* ---------------------------- TABLE----------------------- */}
      <div className={`font-[${theme?.fontFamily?.calibri}]`}>
        <div className="mt-[10px]">
          <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
            <TableHeader
              className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm  text-center font-bold`}
            >
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white last:rounded-none first:rounded-none h-[30px]`}
              >
                <Checkbox
                  name="selectCheckbox"
                  radius="none"
                  size="sm"
                  classNames={{
                    wrapper: `after:bg-[${theme?.colors?.persianGreen}]`,
                  }}
                  onChange={(e) => onCheckboxChange(e)}
                  isSelected={check}
                ></Checkbox>
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white first:rounded-sm`}
              >
                Lane
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white first:rounded-sm`}
              >
                Time
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white first:rounded-sm`}
              >
                Class
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white first:rounded-sm`}
              >
                Vehicle Id
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white first:rounded-sm`}
              >
                Reg. Mark
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white first:rounded-sm`}
              >
                Chassis No
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white first:rounded-sm`}
              >
                PSL
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white`}
              >
                Exam Code
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white`}
              >
                Recheck
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white`}
              >
                Appointment No.
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white`}
              >
                Status
              </TableColumn>
              <TableColumn
                className={`bg-[#A0D9C1] text-[${theme?.colors?.persianGreen}] text-sm text-center font-bold border-1 border-white first:rounded-none last:rounded-none h-[30px]`}
              >
                New Lane
              </TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
                <TableCell className="border-1   border-greyBorder p-[1px]">
                  No Data
                </TableCell>
                <TableCell
                  className="border-1  border-greyBorder p-[1px]"
                  children={undefined}
                ></TableCell>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
                <TableCell className="border-1  border-greyBorder p-[1px]"></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex mt-2">
          <div className="ml-4 text-left text-sm font-bold mt-[5px] w-[26%]">
            Reallocated lane of the selected appointment(s):
          </div>
          <div className="w-[15%] ">
            <Select
              id="centreData"
              data-testid="select-test"
              radius="none"
              variant="bordered"
              size="sm"
              labelPlacement="outside-left"
              classNames={{
                trigger: `min-h-unit-2 h-8 rounded-sm border border-solid border-[${theme?.colors?.greyBorder}]`,
              }}
            >
              <SelectItem key="TY1">Select</SelectItem>
            </Select>
          </div>
          <span className="pt-0.5">
            <Button
              className={`bg-[orange] text-white rounded-sm ml-1`}
              variant="flat"
              size="sm"
              type="submit"
            >
              Apply
            </Button>
            <Button
              type="button"
              className={`text-[${theme?.colors?.persianGreen}] bg-[${theme?.colors?.white}] border-[${theme?.colors?.white}] ml-[5px] font-bold rounded-sm`}
              size="sm"
              variant="bordered"
              data-testid={"Clear"}
            >
              Clear
            </Button>
          </span>
        </div>
        <div className="flex justify-between mt-[10px]">
          <div className="float-left pl-2">
            <Button
              className={`text-[${theme?.colors?.black}] bg-[${theme?.colors?.white}] font-bold border border-[lightgrey] shadow-sm rounded-sm`}
              size="sm"
              radius="none"
              variant="flat"
              onClick={() => navigate("/workloadlist")}
            >
              Daily Workload List
            </Button>
          </div>
          <div className="float-right pr-2">
            <Button
              isDisabled
              className={`text-[${theme?.colors?.black}] bg-[#cfd3d3] rounded-sm ml-1`}
              variant="flat"
              size="sm"
              type="submit"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default LaneReallocationFilter;
