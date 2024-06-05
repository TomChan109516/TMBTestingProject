import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Select,
  SelectItem,
} from "@nextui-org/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PrimarySecondaryExam from "./primarySecondaryExam";
import { axiosGet, axiosGetwithParam } from "../utils/axiosInstance";
import {
  GET_LANEALL,
  GET_VEHICLECLASS_URL,
  APPOINTMENT_SUBCLASS,
} from "../constants/urlConstants";

function SpecialEventAddSchedule(props) {
  const [firstRegDate1, setFirstRegDate1] = useState(new Date());
  const [firstRegDate2, setFirstRegDate2] = useState(new Date());
  const [checkedDays, setCheckedDays] = useState<string[]>([]);
  const [checkedTime, setCheckedTime] = useState<string[]>([]);
  const [vehicleClass, setVehicleClass] = useState<string[]>([]);
  const [lane, setLanes] = useState<string[]>([]);
  const [vehicleClassData, setVehicleClassData] = useState<string>("");
  const [vehicleSubClassState, setVehicleSubClassState] = useState<string>("");
  const [vehicleSubClass, setVehicleSubClass] = useState<string>("");
  const [weekDays] = useState<string[]>([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);
  const [timeSlot] = useState<string[]>([
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
  ]);
  const loadLaneAll = async () => {
    try {
      const response = await axiosGet(GET_LANEALL);
      setLanes(response);
    } catch (error) {
      console.error("LaneData Error", error);
    }
  };
  const loadVehicleClass = async () => {
    const url = GET_VEHICLECLASS_URL;
    try {
      const response = await axiosGet(url);
      // const response = [{vehicleClassId:'001',vehicleClassName:'bus'},{vehicleClassId:'002',vehicleClassName:'train'}];
      setVehicleClass(response);
    } catch (error) {
      console.error("Vehicle class Error", error);
    }
  };
  const loadVehicleSubClass = async (data) => {
    const vehicleIdData = {
      vehicleClassId: data,
    };

    try {
      const response = await axiosGetwithParam(
        APPOINTMENT_SUBCLASS,
        vehicleIdData
      );
      setVehicleSubClassState(response.data);
    } catch (error) {
      console.error("SubVehicle class Error", error);
    }
  };

  const updatePrimaryCode = (code) => {
    props.updatePrimaryCode(code);
  };
  const updateSuppCode = (code) => {
    props.updateSuppCode(code);
  };
  const handleDateChange = (newValue: React.SetStateAction<Date>) => {
    setFirstRegDate1(newValue);
  };
  const handleDateChange1 = (newValue: React.SetStateAction<Date>) => {
    setFirstRegDate2(newValue);
  };
  const handleCheckboxChange = (day) => {
    setCheckedDays((prevDays) => {
      if (prevDays.includes(day)) {
        return prevDays.filter((d) => d !== day);
      } else {
        return [...prevDays, day];
      }
    });
  };
  const handleTimeslotChange = (time) => {
    setCheckedTime((Timing) => {
      if (Timing.includes(time)) {
        return Timing.filter((d) => d !== time);
      } else {
        return [...Timing, time];
      }
    });
  };
  const handleCheckChange = (laneId, checked) => {
    setLane(
      lane.map((item) => (item.laneId === laneId ? { ...item, checked } : item))
    );
  };
  const handleClose = () => {
    props.closeAddScheduleSettingBtn(false);
  };
  const handleChangeVehicleClass = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const field = event.target.value.split("-")[0];
    setVehicleClassData(field);
    loadVehicleSubClass(field);
  };
  const handleChangeVehicleSubClass = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setVehicleSubClass(event.target.value);
  };
  useEffect(() => {
    loadLaneAll();
    loadVehicleClass();
  }, []);
  return (
    <Modal
      size="5xl"
      isOpen={props.AddSchedulePopup}
      onClose={handleClose}
      className="overflow-auto"
    >
      <ModalContent>
        {() => (
          <>
            <div className="flex flex-col text-sm p-2 pl-5  text-[#00AF8F] font-bold">
              {" "}
              Add Schedule Settings
            </div>
            <ModalBody>
              <div className="flex flex-col md:flex-row">
                <div className="md:flex-none">
                  <span className="text-xs font-bold">
                    Effective Date : From{" "}
                  </span>
                  <DatePicker
                    className="mt-1 ml-2 w-24 min-w-8 border-2 border-solid border-gray-300 text-xs p-1"
                    selected={firstRegDate1}
                    onChange={handleDateChange}
                  />
                </div>
                <div className="md:flex-none">
                  <span className="text-xs font-bold ml-2">To </span>
                  <DatePicker
                    className="mt-1 ml-2 w-24 min-w-8 border-2 border-solid border-gray-300 text-xs p-1"
                    selected={firstRegDate2}
                    onChange={handleDateChange1}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="flex-none">
                  <span className="text-xs font-bold">Day of Week : </span>
                </div>
                <div className="flex ml-2">
                  {weekDays?.map((day) => (
                    <Checkbox
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                      className="ml-1"
                      radius="none"
                      size="sm"
                      key={day}
                      checked={checkedDays.includes(day)}
                      onChange={() => handleCheckboxChange(day)}
                    >
                      <span className="text-xs">{day}</span>
                    </Checkbox>
                  ))}
                </div>
              </div>
              <div className="flex-none">
                <div className="flex flex-col sm:flex-row">
                  <span className="text-xs font-bold pt-2">Quota</span>
                  <Input
                    radius="none"
                    size="sm"
                    variant="bordered"
                    className="w-16 sm:w-20 h-0 ml-2"
                    name="pgvWeight1"
                    value="  "
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-0">
                <div className="flex-none">
                  <span className="text-xs font-bold">TimeSlot : </span>
                </div>
                <div className="flex ml-2">
                  {timeSlot?.map((time) => (
                    <Checkbox
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                      className="ml-1"
                      radius="none"
                      size="sm"
                      key={time}
                      checked={checkedTime.includes(time)}
                      onChange={() => handleTimeslotChange(time)}
                    >
                      <span className="text-xs">{time}</span>
                    </Checkbox>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-none w-44 sm:w-45">
                  <span className="text-xs font-bold">Lane </span>
                  <Checkbox
                    className="ml-2"
                    defaultSelected
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    radius="none"
                    size="sm"
                  >
                    <span className="text-xs ml-2">ALL</span>
                  </Checkbox>
                </div>
                <div className="flex-none w-72 sm:w-75 ml-5">
                  <span className="text-xs font-bold">Vehicle Class </span>
                </div>
                <div className="flex-none w-44 sm:w-45">
                  <span className="text-xs font-bold">Exam Code </span>
                  <Checkbox
                    className="ml-2"
                    defaultSelected
                    classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    radius="none"
                    size="sm"
                  >
                    <span className="text-xs ml-2">ALL</span>
                  </Checkbox>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="flex-none w-full sm:w-36">
                  <div className="h-[290px] border-2 border-default-200 overflow-auto">
                    {lane.map((LaneData) => (
                      <Checkbox
                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                        className="ml-1 gap-6"
                        radius="none"
                        size="sm"
                        key={LaneData.laneId}
                        checked={checkedDays.includes(LaneData.laneId)}
                        onChange={(e) =>
                          handleCheckChange(LaneData.laneId, e.target.checked)
                        }
                      >
                        <span className="text-xs gap-6">{LaneData.laneId}</span>
                      </Checkbox>
                    ))}
                  </div>
                </div>
                <div className="flex-none w-full sm:w-60 ml-5">
                  <div className="h-[290px] border-2 border-default-200 overflow-auto">
                    {/* <div className="h-[260px] border border-default-200 overflow-auto"> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-1 pb-0 mr-1">
                      <div className="text-xs mt-2 ml-4">Class</div>
                      <div>
                        <Select
                          labelPlacement="outside-left"
                          className="w-full md:w-30  text-xs"
                          radius="none"
                          size="sm"
                          name="center"
                          value={vehicleClassData}
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
                          onChange={handleChangeVehicleClass}
                        >
                          {vehicleClass?.map((data) => (
                            <SelectItem
                              key={
                                data.vehicleClassId +
                                "-" +
                                data.vehicleClassName
                              }
                              value={
                                data.vehicleClassId +
                                "-" +
                                data.vehicleClassName
                              }
                              className="text-[10px]"
                            >
                              {data.vehicleClassId}_{data.vehicleClassName}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-1 pb-0 mt-1 mr-1">
                      <div className="text-xs mt-2 ml-4">Sub-Class</div>
                      <div>
                        <Select
                          labelPlacement="outside-left"
                          className="w-full md:w-30  text-xs"
                          radius="none"
                          size="sm"
                          name="center"
                          value={vehicleSubClass}
                          aria-label="center"
                          variant="bordered"
                          placeholder="Select"
                          onChange={handleChangeVehicleSubClass}
                        >
                          {vehicleSubClassState?.map((data) => (
                            <SelectItem
                              key={data.vehicleSubClassName}
                              value={data.vehicleSubClassName}
                              className="text-[10px]"
                            >
                              {data.vehicleSubClassId}_
                              {data.vehicleSubClassName}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-1 pb-0 mt-1 mr-1">
                      <div className="text-xs mt-2 ml-4">Attribute</div>
                      <div>
                        <Select
                          labelPlacement="outside-left"
                          className="w-full md:w-30  text-xs"
                          radius="none"
                          size="sm"
                          name="attribute"
                          aria-label="attribute"
                          variant="bordered"
                          placeholder="Select"
                        >
                          <SelectItem key="" className="text-xs">
                            Attribute
                          </SelectItem>
                        </Select>
                      </div>
                    </div>
                    <div className="flex justify-end mt-2 mr-1">
                      <Button
                        data-testid="confirm"
                        name="confirm"
                        className="bg-white float-right ml-1 border-neutral-600 border font-bold rounded h-6 text-xs"
                        // onClick={handleConfirm}
                      >
                        Delete
                      </Button>
                      <Button
                        data-testid="confirm"
                        name="confirm"
                        className="bg-white w-12 float-right ml-1 text-gray-400 border border-gray-300 font-bold rounded h-6 text-xs"
                        // onClick={handleConfirm}
                      >
                        Add
                      </Button>
                    </div>

                    <div className="h-[124px] m-1 border-2 border-default-200 mt-[8px] overflow-auto">
                      {/* {lane.map((LaneData) => (
                      <Checkbox
                        classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                        className="ml-1 gap-6"
                        radius="none"
                        size="sm"
                        key={LaneData.laneId}
                        checked={checkedDays.includes(LaneData.laneId)}
                        onChange={(e) =>
                          handleCheckChange(LaneData.laneId, e.target.checked)
                        }
                      >
                        <span className="text-xs gap-6">{LaneData.laneId}</span>
                      </Checkbox>
                    ))} */}
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-24 sm:w-25 ml-5">
                  <div className="h-[290px] border-2 border-default-200 overflow-auto">
                    <PrimarySecondaryExam
                      updatePrimaryCode={updatePrimaryCode}
                      updateSuppCode={updateSuppCode}
                    />
                  </div>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="float-right -mt-[10px]">
                <Button
                  data-testid="close"
                  name="Close"
                  className="bg-[white] ml-[5px] text-[black] border border-[black] font-bold rounded h-8"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  data-testid="confirm"
                  name="confirm"
                  className="bg-[#F0FFFF] float-right ml-[5px] text-[#00AF8F] border border-[#00AF8F] font-bold rounded h-8"
                  // onClick={handleConfirm}
                >
                  Save
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
export default SpecialEventAddSchedule;
