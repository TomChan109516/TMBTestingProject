import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Refresh } from "tabler-icons-react";
import Calendar from "react-calendar";
import "./CalendarDates.css";
import { useDispatch } from "react-redux";
import { getExamDates, getTimeSlots } from "../service/timeLine.service";
import { saveSelectedDate, saveSelectedTime } from "../state/examTimeSlotSlice";
import { IExamSlot } from "../model/examTimeSlotModel";

const customWeekDays = ["S", "M", "T", "W", "T", "F", "S"];

function CalendarDates() {
  const dispatch = useDispatch();
  const examDate: string | number | Date = new URLSearchParams(
    window.location.search
  )?.get("examDate") as string | number | Date;
  const centreId: string | null = new URLSearchParams(
    window.location.search
  )?.get("centreId");
  const vehicleClassId: string | null = new URLSearchParams(
    window.location.search
  ).get("vehicleClassId");
  const inspectionTypeIds = new URLSearchParams(window.location.search).get(
    "InspectionTypeId"
  ) as string;
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [noQuotaDates, setNoQuotaDates] = useState<string[]>([]);
  const [weekendDates, setWeekendDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(examDate));
  const [weekDayName, setWeekDayName] = useState<string>(
    new Date(examDate).toLocaleString("default", {
      weekday: "long",
    })
  );
  const [inspectionScheduleId, setInspectionScheduleId] = useState<string>("");
  const [amTimeSlots, setAmTimeSlots] = useState<IExamSlot[]>([]);
  const [pmTimeSlots, setPmTimeSlots] = useState<IExamSlot[]>([]);
  const [evTimeSlots, setEvTimeSlots] = useState<IExamSlot[]>([]);
  const [isRotated, setIsRotated] = useState<boolean>(false);
  const [centresDto, setCentresDto] = useState<string[]>([]);
  const [examsAvailableDateDtos, setExamsAvailableDateDtos] = useState<
    string[]
  >([]);
  const [centreHolidays, setCentreHolidays] = useState<string[]>([]);
  const integratedData = {
    Available: { value: examsAvailableDateDtos.length, color: "orange" },
    Selected: { value: "1", color: "blue" },
    "No Quota": { value: "1", color: "black" },
    "Public Holiday": { value: centreHolidays.length, color: "red" },
  };
  const data: Record<string, string | null> = new URLSearchParams({
    FromDate: selectedDate !== null ? dayjs(selectedDate).toISOString() : "",
    ToDate:
      selectedDate !== null
        ? dayjs(selectedDate).add(31, "day").toISOString()
        : "",
    CentreId: centreId || "",
    vehicleClassId: vehicleClassId || "",
  });

  inspectionTypeIds
    ?.split(",")
    .forEach((value) => data.append("InspectionTypeId", value));

  const fetchExamDates = async () => {
    try {
      const response = await getExamDates(data);
      console.log("response", response);
      if (response) {
        const { centresDto, examsAvailableDateDtos, inspectionScheduleId } =
          response.availableQuotaForSelectedDateRangeResponse;
        setCentresDto(centresDto);
        setExamsAvailableDateDtos(examsAvailableDateDtos);
        setCentreHolidays(centresDto[0].centreHolidays);
        setInspectionScheduleId(inspectionScheduleId);
        setWeekendDates(
          centresDto[0].centreHolidays.map((data) =>
            dayjs(data.holidayDate).format("YYYY-MM-DD")
          )
        );
        setAvailableDates(
          examsAvailableDateDtos.map((data) =>
            dayjs(data.date).format("YYYY-MM-DD")
          )
        );
      } else {
        console.error("Date format is incorrect");
      }
    } catch (error) {
      console.error("Error fetching morning data:", error);
    }
    setIsRotated(!isRotated);
    dispatch(saveSelectedDate(""));
    dispatch(saveSelectedTime(""));
  };

  useEffect(() => {
    if (selectedDate && weekDayName) {
      const params = new URLSearchParams({
        Date: selectedDate.toLocaleDateString("en-CA").split(",")[0],
        InspectionScheduleId: inspectionScheduleId,
        WeekDayName: weekDayName,
        VehicleClassId: vehicleClassId,
      });
      inspectionTypeIds
        ?.split(",")
        .forEach((value) => params.append("InspectionTypeId", value));
      const requiredParams = [
        "Date",
        "InspectionScheduleId",
        "WeekDayName",
        "VehicleClassId",
        "InspectionTypeId",
      ];
      if (
        inspectionScheduleId !== null &&
        requiredParams.every(
          (param) => params.has(param) && params.get(param) !== ""
        )
      ) {
        fetchTimeSlots(params);
      }
    }
  }, [selectedDate, inspectionScheduleId]);
  const fetchTimeSlots = async (params) => {
    try {
      const response = await getTimeSlots(params);
      const amSlots = response.examSlotsAvailabilityDtos
        .filter((time) => time.dayOfSession === "AM")
        .sort((a, b) => a.timeSlot.localeCompare(b.timeSlot));
      setAmTimeSlots([...amSlots]);

      const pmSlots = response.examSlotsAvailabilityDtos
        .filter((time) => time.dayOfSession === "PM")
        .sort((a, b) => a.timeSlot.localeCompare(b.timeSlot));
      setPmTimeSlots([...pmSlots]);

      const evSlots = response.examSlotsAvailabilityDtos
        .filter((time) => time.dayOfSession === "EV")
        .sort((a, b) => a.timeSlot.localeCompare(b.timeSlot));
      setEvTimeSlots([...evSlots]);
    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  };
  useEffect(() => {
    if (
      availableDates.indexOf(dayjs(selectedDate).format("YYYY-MM-DD")) === -1
    ) {
      fetchExamDates();
    }
  }, [selectedDate]);

  const handleDateSelection = (selectedDate) => {
    setSelectedDate(new Date(selectedDate));
    const weekday = selectedDate.toLocaleString("default", {
      weekday: "long",
    });
    setWeekDayName(weekday);
    dispatch(saveSelectedDate(dayjs(selectedDate).format("YYYY-MM-DD")));
  };

  const handleTimeSelection = (timeSlotId) => {
    const getTimeSlot = (timeSlots) => {
      return timeSlots.filter((time) => time.laneTimeSlotId === timeSlotId)[0];
    };
    const amTime = getTimeSlot(amTimeSlots);
    const pmTime = getTimeSlot(pmTimeSlots);
    const evTime = getTimeSlot(evTimeSlots);
    const selectedTime = amTime || pmTime || evTime;
    const timeSlot = {
      timeSlotId: timeSlotId,
      time: selectedTime.timeSlot.split("-")[0],
      physicalLaneId: selectedTime.physicalLaneId,
      virtualLaneId: selectedTime.virtualLaneId,
    };
    dispatch(saveSelectedTime(timeSlot));
  };

  const getTileClassName = ({ date, view }) => {
    const dateString = dayjs(date).format("YYYY-MM-DD");
    if (
      view === "month" &&
      weekendDates.some(
        (weekendDate) => dayjs(weekendDate).format("YYYY-MM-DD") === dateString
      )
    ) {
      return "weekend-date";
    }
    if (
      view === "month" &&
      availableDates.some(
        (availableDate) =>
          dayjs(availableDate).format("YYYY-MM-DD") === dateString
      )
    ) {
      return "available-date";
    }
    if (
      view === "month" &&
      noQuotaDates.some(
        (noQuotaDate) => dayjs(noQuotaDate).format("YYYY-MM-DD") === dateString
      )
    ) {
      return "no-quota";
    }
  };

  const formatDate = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };
  const today = new Date();
  const updatedTime = formatDate(today);

  const getColorForValue = (value) => {
    return value > 0 ? "#5858ed" : "grey";
  };
  const getColorForTime = (value) => {
    return value > 0 ? "#5858ed" : "lightgrey";
  };
  const isDisabled = (value) => value === 0;
  return (
    <div>
      <div>
        <h5 className="text-sm/[13px] pl-4 pt-1 pb-1 text-left bg-tropicalRainForest text-[#FFFFFF] h-45">
          Examination TimeSlot
        </h5>
      </div>
      <div className="flex flex-row-wrap ml-40 mt-1 items-center gap-2">
        <p className="text-xs ml-1 font-calibri">last update: {updatedTime}</p>
        <div className="flex flex-row text-xs bg-[#00AF8F] text-[#FFFFFF] ml-1 rounded-sm w-[23px] h-[22px]">
          <Refresh
            size="15"
            className={`sync-icon ${isRotated ? "rotate" : ""} ml-1 mt-1 p-0`}
            onClick={fetchExamDates}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 -mt-[25px] gap-3">
        <div className="w-full font-calibri min-h-[165px] max-h-[170px] h-[165px] mt-8">
          <Calendar
            calendarType="US"
            formatShortWeekday={(locale, date) => customWeekDays[date.getDay()]}
            value={selectedDate}
            view="month"
            onChange={handleDateSelection}
            tileClassName={getTileClassName}
            tileDisabled={({ date, view }) =>
            view === 'month' && 
            dayjs(date).isBefore(dayjs(), 'day')
          }
          />
        </div>

        <div className="grid-cols-3 max-w-[250px] min-h-[165px] max-h-[170px] h-[165px] mt-8 ml-2">
          <div className="flex flex-row-wrap cursor-pointer">
            <div>
              <table className="border-[1px]">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="bg-[#566D7E] text-[#FFFFFF] text-xs font-calibri p-[2px] w-[80px]"
                    >
                      AM
                    </th>
                  </tr>
                </thead>
                <tbody className={`h-[${amTimeSlots.length * 20.9}px]`}>
                  {amTimeSlots.map((time) => (
                    <tr key={time?.laneTimeSlotId}>
                      <td
                        className="w-[42px] border-1 border-[grey] text-xs font-calibri font-semibold h-5"
                        style={{ color: getColorForTime(time.quota) }}
                        onClick={() => handleTimeSelection(time.laneTimeSlotId)}
                      >
                        {time.timeSlot.split("-")[0]}
                      </td>
                      <td
                        className="w-[30px] border-1 border-[grey] text-xs font-calibri font-semibold h-5"
                        style={{ color: getColorForValue(time.quota) }}
                      >
                        {time.quota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <table className="border-[1px] ">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="bg-[#566D7E] text-[#FFFFFF] text-xs p-[2px] font-calibri w-[80px]"
                    >
                      PM
                    </th>
                  </tr>
                </thead>
                <tbody className={`h-[${pmTimeSlots.length * 20}px]`}>
                  {pmTimeSlots.map((time) => (
                    <tr key={time.laneTimeSlotId}>
                      <td
                        className="w-[42px] border-1 border-[grey] text-xs font-calibri font-semibold"
                        style={{ color: getColorForTime(time.quota) }}
                        onClick={() => handleTimeSelection(time.laneTimeSlotId)}
                      >
                        {time.timeSlot.split("-")[0]}
                      </td>
                      <td
                        className="w-[30px] border-1 border-[grey] text-xs font-calibri font-semibold"
                        style={{ color: getColorForValue(time.quota) }}
                      >
                        {time.quota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <table className="border-[1px]">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="bg-[#566D7E] text-[#FFFFFF] text-xs p-[2px] font-calibri  w-[80px]"
                    >
                      EV
                    </th>
                  </tr>
                </thead>
                <tbody className={`h-[${evTimeSlots.length * 20}px]`}>
                  {evTimeSlots.map((time) => (
                    <tr key={time?.laneTimeSlotId}>
                      <td
                        className="w-[42px] border-1 border-[grey] text-xs font-calibri  font-semibold"
                        style={{ color: getColorForTime(time.quota) }}
                        onClick={() => handleTimeSelection(time.laneTimeSlotId)}
                      >
                        {time.timeSlot.split("-")[0]}
                      </td>
                      <td
                        className="w-[30px] border-1 border-[grey] text-xs font-calibri font-semibold"
                        style={{ color: getColorForValue(time.quota) }}
                      >
                        {time.quota}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row-wrap ml-4 mt-1">
        {Object.keys(integratedData).map((key) => (
          <div key={key} className="flex text-sm align-center mr-[7px]">
            <p
              style={{
                color: integratedData[key].color,
              }}
              className="flex items-center w-[10px] h-[15px] bg-[#DADBDD] font-calibri  font-semibold"
            >
              {integratedData[key].value}
            </p>
            <p className="text-xs ml-1">{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CalendarDates;
