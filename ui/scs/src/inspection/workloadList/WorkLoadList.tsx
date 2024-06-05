import React, {  useState } from "react";
import {
  Button,
  Input,
  Checkbox,
  Select,
  CheckboxGroup,
  SelectItem,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { IconInfoCircle } from "@tabler/icons-react";
import { CalendarEvent } from "tabler-icons-react";
import { Search } from "tabler-icons-react";
import { Refresh } from "tabler-icons-react";
import DatePicker from "react-datepicker";
import { GET_CENTRES_URI } from "../../constants/urlConstants";
import ExportWorkLoad from "./ExportWorkLoad";
import { ExtractData } from "./ExtractData";
import GenerateJobCard from "./GenerateJobCard";
import { useNavigate } from "react-router-dom";

const laneList = ["11", "11S", "12", "12S", "13", "14"];
const sessionList = ["AM", "AM1", "PM", "PM1"];
const statusList = ["Todo", "In-progress", "Closed"];
const resultList = ["Pass", "Fail", "DNA", "Rejected", "No Result"];

function WorkLoadList({ check, checkFunc }) {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState(new Date());
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [checkedSession, setCheckedSession] = useState<string[]>([]);
  const [checkedStatus, setCheckedStatus] = useState<string[]>([]);
  const [checkedResult, setCheckedResult] = useState<string[]>([]);
  const [showModal,setShowModal] = useState<boolean>(false);
  const [showModal1,setShowModal1] = useState<boolean>(false);
  const[showGenerateJobCard ,setShowGenerateJobCard]=useState<boolean>(false)

  const handleGenerateJobCard=()=>{
    setShowGenerateJobCard(true)
  }

  const onCheckboxChange = (e) => {
    checkFunc(e.target.checked);
  };
  const handleFromDateChanged = (newValue: React.SetStateAction<Date>) => {
    setFromDate(newValue);
  };

  // const [allChecked, setAllChecked] = useState(false);
  // const [checkedList, setCheckedList] = useState<{ value: string; isChecked: boolean }[]>(laneList.map((data) => ({ value: data, isChecked: false })));

  // const onAllCheckboxChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (allChecked) {
  //     setAllChecked(false);
  //     const updatedLaneList = checkedList.map((data) => ({
  //       value: data.value,
  //       isChecked: false,
  //     }));
  //     setCheckedList(updatedLaneList);
  //   } else {
  //     setAllChecked(true);
  //     const updatedLaneList = checkedList.map((data) => ({
  //       value: data.value,
  //       isChecked: true,
  //     }));
  //     setCheckedList(updatedLaneList);
  //   }
  // };

  return (
    <>
      <div className="pt-[5px]">
        <div className="flex">
          <div className="flex-initial text-[#00AF8F] p-[10px] ml-[15px] font-bold text-sm">
            WorkLoad List
          </div>
        </div>
        <div>
          <div className="mt-[10px] ml-2 mr-2">
            <h1>
              <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px]  text-[#00AF8F]">
                Filter
              </h5>
              <div className="pt-2 pb-2">
                <div className="float-right pt-[15px]  pr-[5px]">
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
                <div className="grid grid-cols-6 gap-4">
                  <div className="col-span-5 mt-5">
                    <div className="text-[10.5px] font-bold flex flex-row  ">
                      <div className="grid grid-rows-4 mt-2 h-[100px] grid-flow-col whitespace-nowrap w-1/2">
                        <div className="flex flex-row items-center">
                          <div className="ml-2 text-left text-sm font-bold w-[20%]">
                            <span className="text-[red] mr-1">*</span>
                            Date
                          </div>
                          <div className=" flex w-[70%] ml-[20px] border-2 border-[lightgrey] items-center">
                            <CalendarEvent color="grey" size="26" />
                            <DatePicker
                              name="fromDate"
                              selected={fromDate}
                              onChange={handleFromDateChanged}
                              className="text-sm w-[170px] pl-1 text-[10px]"
                            />
                          </div>
                        </div>
                        <div className="flex mt-2">
                          <div className="ml-4 text-left text-sm font-bold mt-[5px] w-[20%]">
                            Center
                          </div>
                          <div className="w-[70%] ml-[12px] ">
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
                      <div className="w-[25%]  ml-[20px] mt-2">
                        <div className="flex flex-row items-center ml-1 w-40 ">
                          <div className="text-sm font-bold">Lane</div>
                          <div className="flex flex-row ml-2">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                                // isSelected={allChecked} value="ALL" onChange= {onAllCheckboxChanged}
                              >
                                All
                              </Checkbox>
                            </CheckboxGroup>
                          </div>
                        </div>
                        <div className="ml-1 flex flex-row  box-border h-[100px]  mt-1 w-40 border-2 border-[lightgrey] overflow-x-hidden  ">
                          <CheckboxGroup
                            classNames={{
                              wrapper: "grid grid-cols-2 pt-1 pb-5 pl-1",
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
                      <div className="w-[25%]  ml-[25px] mt-2">
                        <div className="flex flex-row items-center ml-1 w-40 ">
                          <div className="text-sm font-bold">Session</div>
                          <div className="flex flex-row ml-2">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              >
                                All
                              </Checkbox>
                            </CheckboxGroup>
                          </div>
                        </div>
                        <div className="ml-1 h-[100px] flex flex-row box-border mt-1 w-40 border-2 border-[lightgrey] overflow-x-hidden  ">
                          <CheckboxGroup
                            classNames={{
                              wrapper: "grid grid-cols-2 pt-1 pb-3 pl-1",
                            }}
                            value={checkedSession}
                            onValueChange={setCheckedSession}
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
                      <div className="w-[25%]  ml-[25px] mt-2">
                        <div className="flex flex-row items-center ml-1 w-40 ">
                          <div className="text-sm font-bold">Status</div>
                          <div className="flex flex-row ml-2">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              >
                                All
                              </Checkbox>
                            </CheckboxGroup>
                          </div>
                        </div>
                        <div className="ml-1 h-[100px] flex flex-row box-border mt-1 w-40 border-2 border-[lightgrey] overflow-x-hidden  ">
                          <CheckboxGroup
                            classNames={{
                              wrapper: "grid grid-cols-1 pt-1 pb-3 pl-1",
                            }}
                            value={checkedStatus}
                            onValueChange={setCheckedStatus}
                          >
                            {statusList.map((item, index) => (
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
                      <div className="w-[25%]  ml-[25px] mt-2">
                        <div className="flex flex-row items-center ml-1 w-40 ">
                          <div className="text-sm font-bold">Result</div>
                          <div className="flex flex-row ml-2">
                            <CheckboxGroup>
                              <Checkbox
                                name="selectCheckbox"
                                radius="none"
                                size="sm"
                                classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                                onChange={(e) => onCheckboxChange(e)}
                                isSelected={check}
                              >
                                All
                              </Checkbox>
                            </CheckboxGroup>
                          </div>
                        </div>
                        <div className="ml-1 h-[100px] flex flex-row box-border mt-1 w-52 border-2 border-[lightgrey] overflow-x-hidden  ">
                          <CheckboxGroup
                            classNames={{
                              wrapper: "grid grid-cols-2 pt-1 pb-3 pl-1",
                            }}
                            value={checkedResult}
                            onValueChange={setCheckedResult}
                          >
                            {resultList.map((item, index) => (
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
                  Total : <span className="font-bold">3</span>
                </span>
                <span className="ml-10">
                  Pass : <span className="font-bold">0</span>
                </span>
                <span className="ml-10">
                  Rejected : <span className="font-bold">0</span>
                </span>
                <span className="ml-10">
                  Fail : <span className="font-bold">0</span>
                </span>
                <span className="ml-10">
                  DNA : <span className="font-bold">0</span>
                </span>
                <span className="ml-10">
                  No Result : <span className="font-bold">0</span>
                </span>
                <span className="ml-10">
                  Todo : <span className="font-bold">3</span>
                </span>
                <span className="ml-10">
                  In Progress : <span className="font-bold">0</span>
                </span>
                <span className="ml-10">
                  Closed : <span className="font-bold">0</span>
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-[10px]">
              <div className="justify start ml-2">
                <Button
                  className=" bg-white rounded-sm shadow-sm border-2 border-[lightgrey] font-bold"
                  type="submit"
                  size="sm"
                  onClick={() => setShowModal1(true)}
                >
                  Extract Data
                </Button>
                <Button
                  className=" bg-white rounded-sm shadow-sm border-2 border-[lightgrey] font-bold  ml-1"
                  type="submit"
                  size="sm"
                  onClick={() => setShowModal(true)}
                >
                  Export WorkLoad List
                </Button>
                <Button
                  className=" bg-white rounded-sm shadow-sm border-2 border-[lightgrey] font-bold ounded-sm ml-1"
                  type="submit"
                  size="sm"
                  onClick={handleGenerateJobCard}
                >
                  Generate Job Card
                </Button>
              </div>
              <div className=" justify-end">
                <Button
                  className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                  size="sm"
                  type="submit"
                >
                  Random Check
                </Button>
                <Button
                  className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                  size="sm"
                  type="submit"
                  onClick={() => navigate('/laneReallocationFilter')}

                >
                  Lane Rellocation
                </Button>
                <Button
                  className={`bg-[#00AF8F] text-white rounded-sm ml-1`}
                  size="sm"
                  type="submit"
                  onClick={() => navigate('/batchresult')}
                >
                  Batch Result
                </Button>
              </div>
            </div>
            {showModal && <ExportWorkLoad setShowModal={setShowModal} />}
            {showModal1 && <ExtractData setShowModal1={setShowModal1} />}
            {showGenerateJobCard && (
      <GenerateJobCard
      showGenerateJobCard={
        showGenerateJobCard
        }
        closeGeneratedJobCard={
         setShowGenerateJobCard
        }
      ></GenerateJobCard>
    )}
          </div>
        </div>
      </div>
  {/* ---------------------------- TABLE----------------------- */}
      <div className="mt-[10px]">
        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
          <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-sm  text-center font-bold">
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
              Lane
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
              Time
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
              Class
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
              Vehicle Id
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
              Reg. Mark
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
              Chassis No
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white first:rounded-sm ">
              PSL
            </TableColumn>

            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
              ATTN
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
              Exam Code
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
              Recheck
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
              Random Check
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
              Appointment No.
            </TableColumn>

            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
              Status
            </TableColumn>
            <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white">
              Result
            </TableColumn>
            <TableColumn
              className="bg-[#A0D9C1] text-[#00AF8F] text-sm text-center font-bold border-1 border-white last:rounded-sm "
              children={undefined}
            ></TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                11
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                09:00(1)
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                007
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                003221048
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                VX2465
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                JTGFN718606000772
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <IconInfoCircle
                  size={18}
                  strokeWidth={3}
                  color={"orange"}
                  className="mr-2 ml-1"
                />
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <IconInfoCircle
                  size={18}
                  strokeWidth={3}
                  color={"orange"}
                  className="mr-2 ml-1"
                />
              </TableCell>
              <TableCell className="border-1   border-greyBorder p-[1px]">
                008
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                N
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[1px]"
                children={undefined}
              ></TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                112021991685
              </TableCell>

              <TableCell className="border-1  border-greyBorder p-[1px]">
                Closed
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                Pass
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <Search
                  size={20}
                  color="white"
                  className="bg-[#00AF8F] rounded-sm mt-[10px]"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                12
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                09:00(1)
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                007
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                003221048
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                VX2465
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                JTGFN718606000772
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <IconInfoCircle
                  size={18}
                  strokeWidth={3}
                  color={"orange"}
                  className="mr-2 ml-1"
                />
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <IconInfoCircle
                  size={18}
                  strokeWidth={3}
                  color={"orange"}
                  className="mr-2 ml-1"
                />
              </TableCell>
              <TableCell className="border-1   border-greyBorder p-[1px]">
                008
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                N
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[1px]"
                children={undefined}
              ></TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                112021991685
              </TableCell>

              <TableCell className="border-1  border-greyBorder p-[1px]">
                Closed
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                Pass
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <Search
                  size={20}
                  color="white"
                  className="bg-[#00AF8F] rounded-sm mt-[10px]"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                13
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                09:00(1)
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                007
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                003221048
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                VX2465
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                JTGFN718606000772
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <IconInfoCircle
                  size={18}
                  strokeWidth={3}
                  color={"orange"}
                  className="mr-2 ml-1"
                />
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <IconInfoCircle
                  size={18}
                  strokeWidth={3}
                  color={"orange"}
                  className="mr-2 ml-1"
                />
              </TableCell>
              <TableCell className="border-1   border-greyBorder p-[1px]">
                008
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                N
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[1px]"
                children={undefined}
              ></TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                112021991685
              </TableCell>

              <TableCell className="border-1  border-greyBorder p-[1px]">
                Closed
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                Pass
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <Search
                  size={20}
                  color="white"
                  className="bg-[#00AF8F] rounded-sm mt-[10px]"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                14
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                09:00(1)
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                007
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                003221048
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                VX2465
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                JTGFN718606000772
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <IconInfoCircle
                  size={18}
                  strokeWidth={3}
                  color={"orange"}
                  className="mr-2 ml-1"
                />
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <IconInfoCircle
                  size={18}
                  strokeWidth={3}
                  color={"orange"}
                  className="mr-2 ml-1"
                />
              </TableCell>
              <TableCell className="border-1   border-greyBorder p-[1px]">
                008
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                N
              </TableCell>
              <TableCell
                className="border-1  border-greyBorder p-[1px]"
                children={undefined}
              ></TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                112021991685
              </TableCell>

              <TableCell className="border-1  border-greyBorder p-[1px]">
                Closed
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                Pass
              </TableCell>
              <TableCell className="border-1  border-greyBorder p-[1px]">
                <Search
                  size={20}
                  color="white"
                  className="bg-[#00AF8F] rounded-sm mt-[10px]"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
export default WorkLoadList;
