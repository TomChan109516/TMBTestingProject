import {
  Button,
  Checkbox,
  CheckboxGroup,
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
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Plus, Pencil } from "tabler-icons-react";
import { theme } from "../../common/themes/themeConfig";
import LanePopUp from "./LanePopUp";
import CopyLanePopup from "./CopyLanePopup";
import { axiosGet } from "../../utils/axiosInstance";
import { GET_LANEALL } from "../../constants/urlConstants";
import { useDispatch } from "react-redux";
import AddVehicleClassAndExamCodePopup from "./AddVehicleClassAndExamCodePopup";

interface OverrideDetail {
  id: number;
  session: string;
  timeSlot: string;
  lane: number;
  quota: number;
  reviewQuota: number;
  schedule: string;
  vehicleClass: string;
  examCode: string;
}
const OverrideDetail = () => {
  const dispatch = useDispatch();
  const [laneState, setLaneState] = useState<string[]>(new Set([]));
  const [laneData, setLaneData] = useState<string>([]);
  const [quota, setQuota] = useState<string>("");
  const [reviewQuota, setReviewQuota] = useState<string>("");
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState(false);
  const [selectedSessions, setSelectedSessions] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [copyLanePopup, setCopyLanePopup] = useState(false);
  const [showLanePopUp, setShowLanePopUp] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [
    showAddVehicleClassAndExamCodePopup,
    setAddVehicleClassAndExamCodePopup,
  ] = useState(false);
  const handleAddVehicleClassAndExamCodePopup = () => {
    setAddVehicleClassAndExamCodePopup(true);
  };
  const closeAddVehicleClassAndExamCodePopup = (val) => {
    setAddVehicleClassAndExamCodePopup(val);
  };
  // const handleMasterCheck = (e: ChangeEvent<HTMLInputElement>) => {
  //   setCheckedAll(e.target.checked);
  //   setChecked(!checked);
  //   // setChecked(e.target.checked)
  // };

  // Update List Item's state and Master Checkbox State
  // const handleItemCheck = (e: ChangeEvent<HTMLInputElement>) => {
  //   // setChecked((prevState) => {
  //   //   const newState = { ...prevState };
  //   //   newState[inputName] = e.target.checked;
  //   //   return newState;
  //   // });
  //   setChecked(e.target.checked);
  //   // setChecked(!checked);
  //   // //To Control Master Checkbox State
  //   // const totalItems = Object.keys(checked).length;
  //   // const totalCheckedItems = Object.values(checked).filter((e) => e).length;
  //   // // Update State
  //   // setCheckedAll(totalItems === totalCheckedItems);
  // };
  // const handleSelectAll = (e) => {
  //   setSelectAll(e.target.checked);
  //   if (e.target.checked) {
  //     setSelectedSessions(rowData.map((data) => data.session));
  //     // setSelectedSessions([...data.session]);
  //   } else {
  //     setSelectedSessions([]);
  //   }
  // };

  // const handleSelectSession = (e, session) => {
  //   if (e.target.checked) {
  //     setSelectedSessions([...selectedSessions, session]);
  //   } else {
  //     setSelectedSessions(
  //       selectedSessions.filter(
  //         (selectedSession) => selectedSession !== session
  //       )
  //     );
  //   }
  // };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (checked) {
      const allCheckedItems = yourArray.map((item) => item.id);
      setCheckedItems(allCheckedItems);
    } else {
      setCheckedItems([]);
    }
  };
  const handleItemCheck = (e, itemId) => {
    const checked = e.target.checked;
    if (checked) {
      setCheckedItems([...checkedItems, itemId]);
    } else {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    }
  };
  const navigate = useNavigate();
  const rowData: OverrideDetail[] = [
    {
      id: 1,
      session: "AM1",
      timeSlot: "08:45 - 09:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 2,
      session: "AM1",
      timeSlot: "08:45 - 09:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 3,
      session: "AM1",
      timeSlot: "08:45 - 09:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 4,
      session: "AM1",
      timeSlot: "08:45 - 09:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 5,
      session: "AM1",
      timeSlot: "08:45 - 09:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 6,
      session: "AM1",
      timeSlot: "08:45 - 09:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 7,
      session: "AM1",
      timeSlot: "08:45 - 09:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 8,
      session: "PM1",
      timeSlot: "16:00 - 17:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 8,
      session: "PM1",
      timeSlot: "16:00 - 17:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 9,
      session: "PM2",
      timeSlot: "17:00 - 18:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 10,
      session: "PM2",
      timeSlot: "18:00 - 19:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 11,
      session: "PM2",
      timeSlot: "19:00 - 20:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 12,
      session: "PM2",
      timeSlot: "20:00 - 21:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
    {
      id: 13,
      session: "PM2",
      timeSlot: "21:00 - 22:00",
      lane: 21,
      quota: 0,
      reviewQuota: 0,
      schedule: "Override",
      vehicleClass: "",
      examCode: "",
    },
  ];
  const handleLanePopUp = () => {
    setShowLanePopUp(true);
  };
  useEffect(() => {
    loadLaneAll();
  }, []);

  const loadLaneAll = async () => {
    const response = await axiosGet(GET_LANEALL);
    setLaneData(response);
  };
  // const table = useTable({
  //   columns,
  //   data,
  //   initialState: {
  //     hiddenColumns: ['email'] // hide the email column
  //   }
  // });
  return (
    <>
      <div>
        <div className="flex items-left text-[#0a923d] p-[10px]  font-bold text-sm">
          Examination Schedule(Override) {">"} Detail
        </div>
        <div className="ml-1 mr-1">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Searching Criteria
            </h5>
            <div className="grid grid-cols-2  mt-[10px] mb-[10px]">
              <div className="grid grid-rows-2  grid-flow-col ml-6">
                <div className="flex flex-row">
                  <div className="text-sm font-bold">Centre</div>
                  <div className="text-sm ml-[60px]">TY2</div>
                </div>
                <div className="flex flex-row mt-[5px]">
                  <div className="text-sm font-bold">Description</div>
                  <div className="text-sm ml-7"></div>
                </div>
              </div>

              <div className="grid grid-rows-2 grid-flow-col">
                <div className="flex flex-row">
                  <div className="text-sm font-bold">Effective Date</div>
                  <div className="text-sm ml-[15px]">18/09/2021</div>
                  <div className="pt-1 pl-1 text-xs bg-[lightgray] text-white font-bold ml-8">
                    InActive
                  </div>
                  <div className="absolute right-10">
                    <Pencil
                      size="18"
                      strokeWidth={2}
                      // color={'#000000'}
                      className="bg-[#00AF8F] text-white rounded-sm"
                      // onClick={() => setIsEdit(!isEdit)}
                    />
                  </div>
                </div>
                <div className="flex flex-row mt-[5px]">
                  <div className="text-sm font-bold">Last Update</div>
                  <div className="text-sm ml-7">17/09/2021</div>
                </div>
              </div>
            </div>
          </h1>
        </div>
        <div className="justify-end mt-1">
          <Button
            type="button"
            radius="none"
            size="sm"
            className="float-left bg-white shadow-sm ml-2 rounded-sm border border-[lightgray]"
            onClick={() => {
              isEdit ? setIsEdit(false) : navigate(-1);
            }}
          >
            {isEdit ? "Cancel" : "Back"}
          </Button>
          <Button
            type="button"
            radius="none"
            size="sm"
            className={`ml-[5px] bg-[${theme?.colors?.persianGreen}] text-white rounded-sm float-right mr-2`}
            // onClick={search}
            onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? "Save" : "Edit"}
          </Button>
        </div>
        <div>
          <div className="border-[#00AF8F] border-solid border-[2px] mt-10 ml-1 mr-1 ">
            <div>
              <div className="flex flex-row justify-stretch mt-1">
                <div className="ml-2 text-xs font-bold mt-[5px]">Lane</div>
                <div className="ml-5 w-1/4">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    variant="bordered"
                    name="lane"
                    aria-label="lane"
                    value={laneState}
                    onSelectionChange={setLaneState}
                  >
                    {laneData?.length > 0 &&
                      laneData.map((lane) => (
                        <SelectItem key={lane?.laneId} value={lane?.laneId}>
                          {lane?.laneId}
                        </SelectItem>
                      ))}
                  </Select>
                </div>
                <div hidden={!isEdit}>
                  <Button
                    size="sm"
                    radius="none"
                    className="text-[#33333] bg-white border border-solid border-greyBorder shadow-sm absolute right-[10px]"
                    onClick={() => setCopyLanePopup(true)}
                  >
                    Copy Lane to Lanes
                  </Button>
                </div>
              </div>
              <div className=" m-1">
                <Table
                  removeWrapper
                  radius="none"
                  shadow="sm"
                  classNames={{
                    wrapper: "p-0 border border-solid",
                  }}
                >
                  <TableHeader>
                    <TableColumn className=" bg-[#A0D9C1] text-[#00AF8F] texts-xs text-left font-bold border first:rounded-none">
                      Session
                    </TableColumn>
                    <TableColumn className=" bg-[#A0D9C1] text-[#00AF8F] texts-xs text-left font-bold border w-[120px]">
                      TimeSlot
                    </TableColumn>
                    <TableColumn className=" bg-[#A0D9C1] text-[#00AF8F] texts-xs text-left font-bold border w-[100px]">
                      Lane
                    </TableColumn>
                    <TableColumn className=" bg-[#A0D9C1] text-[#00AF8F] texts-xs text-left font-bold border w-[120px]">
                      Quota
                    </TableColumn>
                    <TableColumn className=" bg-[#A0D9C1] text-[#00AF8F] texts-xs text-left font-bold border w-[120px]">
                      Review Quota
                    </TableColumn>
                    <TableColumn className=" bg-[#A0D9C1] text-[#00AF8F] texts-xs text-left font-bold border w-16">
                      Block
                      <Checkbox
                        radius="none"
                        size="sm"
                        // name="block"
                        name="selectAll"
                        // isSelected={checkedAll}
                        onChange={handleSelectAll}
                        isSelected={isChecked}
                        classNames={{
                          wrapper: "ml-1 after:bg-[#00AF8F] rounded-sm",
                        }}
                      ></Checkbox>
                    </TableColumn>
                    <TableColumn className=" bg-[#A0D9C1] text-[#00AF8F] texts-xs text-left font-bold border w-0">
                      Schedule
                    </TableColumn>
                    <TableColumn className=" bg-[#A0D9C1] text-[#00AF8F] texts-xs text-left font-bold border">
                      Vehicle Class
                    </TableColumn>
                    <TableColumn
                      colSpan={2}
                      className=" bg-[#A0D9C1] text-[#00AF8F] texts-xs text-left font-bold border w-[150px]"
                    >
                      Exam Code
                    </TableColumn>
                    <TableColumn
                      hidden={true}
                      className=" bg-[#A0D9C1] text-[#00AF8F] texts-xs text-left font-bold border"
                    >
                      ''
                    </TableColumn>
                  </TableHeader>
                  <TableBody>
                    {rowData.map((data, index) => {
                      return (
                        <TableRow key={index} className="border">
                          <TableCell className="border w-14 text-left">
                            {data.session}
                          </TableCell>
                          <TableCell className="border  text-left">
                            {data.timeSlot}
                          </TableCell>
                          <TableCell className="border text-left">
                            <span className="inline-flex">
                              <span>{data.lane}</span>
                              <span>
                                {isEdit ? (
                                  <Plus
                                    size={20}
                                    strokeWidth={3}
                                    className="bg-[#00AF8F] text-white rounded-sm ml-1"
                                    onClick={handleLanePopUp}
                                  />
                                ) : (
                                  ""
                                )}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell key={index} className="border text-left">
                            <span className="inline-flex">
                              {data.quota}
                              <Input
                                radius="none"
                                size="sm"
                                variant="bordered"
                                name="quota"
                                aria-label="quota"
                                value={quota}
                                onValueChange={setQuota}
                                className="ml-2 w-[70px]"
                              />
                            </span>
                          </TableCell>
                          <TableCell className="border text-left">
                            <span className="inline-flex">
                              {data.reviewQuota}
                              <Input
                                radius="none"
                                size="sm"
                                variant="bordered"
                                name="quota"
                                aria-label="quota"
                                value={reviewQuota}
                                onValueChange={setReviewQuota}
                                className=" ml-1 w-[70px]"
                              />
                            </span>
                          </TableCell>
                          <TableCell className="border text-left">
                            <Checkbox
                              name="selectSession"
                              radius="none"
                              size="sm"
                              isSelected={checkedItems.includes(data.id)}
                              onChange={(e) => handleItemCheck(e, data.id)}
                              classNames={{
                                wrapper: "after:bg-[#00AF8F] rounded-sm",
                              }}
                            />
                          </TableCell>
                          <TableCell className="border text-left">
                            {data.schedule}
                          </TableCell>
                          <TableCell className="border">
                            {data.vehicleClass}
                          </TableCell>
                          <TableCell className="border">
                            {data.examCode}
                          </TableCell>
                          <TableCell className="border w-0">
                            {isEdit ? (
                              <Plus
                                size={20}
                                strokeWidth={3}
                                className="bg-[#00AF8F] text-white rounded-full"
                                onClick={handleAddVehicleClassAndExamCodePopup}
                              />
                            ) : (
                              ""
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          <div className="justify-end mt-1">
            <Button
              type="button"
              radius="none"
              size="sm"
              className="float-left bg-white shadow-sm ml-2 rounded-sm border border-[lightgray]"
              onClick={() => {
                isEdit ? setIsEdit(false) : navigate(-1);
              }}
            >
              {isEdit ? "Cancel" : "Back"}
            </Button>
            <Button
              type="button"
              radius="none"
              size="sm"
              className={`ml-[5px] bg-[${theme?.colors?.persianGreen}] text-white rounded-sm float-right mr-2`}
              // onClick={search}
            >
              {isEdit ? "Save" : "Edit"}
            </Button>
          </div>
        </div>
      </div>
      {showLanePopUp && (
        <LanePopUp
          showLanePopUp={showLanePopUp}
          setShowLanePopUp={setShowLanePopUp}
        />
      )}
      {copyLanePopup && (
        <CopyLanePopup
          copyLanePopup={copyLanePopup}
          setCopyLanePopup={setCopyLanePopup}
          selectedLane={laneState}
        />
      )}
      {showAddVehicleClassAndExamCodePopup && (
        <AddVehicleClassAndExamCodePopup
          showAddVehicleClassAndExamCodePopup={
            showAddVehicleClassAndExamCodePopup
          }
          closeAddVehicleClassAndExamCodePopup={
            closeAddVehicleClassAndExamCodePopup
          }
        />
      )}
    </>
  );
};

export default OverrideDetail;
