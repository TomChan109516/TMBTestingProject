import dayjs, { Dayjs } from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../../utils/calendar";
import cn from "../../utils/cn";
import { ArrowNarrowLeft, ArrowNarrowRight } from "tabler-icons-react";
import { useDispatch } from "react-redux";
import {
  setAllEffectiveDate,
  setAllFirstRegistrationDate,
  setAllManufacturingDate,
  setEffectiveDate,
  setFirstRegistrationDate,
  setManufacturingDate,
  setToEffectiveDate,
  setToFirstRegistrationDate,
  setToManufacturingDate,
  setErrorEffectiveDate,
  setErrorManufacturingDate,
  setErrorFirstRegistrationDate,
} from "./state/CustomCalendarSlice";
import { CustomCalendarConstants } from "./constants";

function CustomCalendar({
  setShow,
  name,
  startOrEnd,
}: {
  setShow: (arg0: boolean) => void;
  name: string;
  startOrEnd: string;
}) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [allradio, setAllRadio] = useState(false);
  const [specificDateRadio, setSpecificDateRadio] = useState(false);
  const [presentDateRadio, setPresentDateRadio] = useState(false);

  const dispatch = useDispatch();

  const handleDispatchOperation = (date: Dayjs) => {
    if (name === CustomCalendarConstants.EffectiveDate) {
      dispatch(setEffectiveDate(dayjs(date).format("MM/DD/YYYY")));
    }
    if (name === CustomCalendarConstants.toEffectiveDate) {
      dispatch(setToEffectiveDate(dayjs(date).format("MM/DD/YYYY")));
    }

    if (name === CustomCalendarConstants.ManufacturingDate) {
      dispatch(setManufacturingDate(dayjs(date).format("MM/DD/YYYY")));
    }
    if (name === CustomCalendarConstants.toManufacturingDate) {
      dispatch(setToManufacturingDate(dayjs(date).format("MM/DD/YYYY")));
    }

    if (name === CustomCalendarConstants.FirstRegistrationDate) {
      dispatch(setFirstRegistrationDate(dayjs(date).format("MM/DD/YYYY")));
    }
    if (name === CustomCalendarConstants.toFirstRegistrationDate) {
      dispatch(setToFirstRegistrationDate(dayjs(date).format("MM/DD/YYYY")));
    }
  };

  const handleDate = (date: Dayjs) => {
    if (allradio || presentDateRadio || specificDateRadio) {
      setSelectDate(date);
      handleDispatchOperation(date);
      setShow(false);
    }
  };

  const handleRadioClickedAll = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (startOrEnd === "start") {
      if (event.target.id === "all") {
        if (name === "EffectiveDate") {
          dispatch(setAllEffectiveDate(true));
          dispatch(setErrorEffectiveDate(false));
        }
        if (name === "ManufacturingDate") {
          dispatch(setAllManufacturingDate(true));
          dispatch(setErrorManufacturingDate(false));
        }
        if (name === "FirstRegistrationDate") {
          dispatch(setAllFirstRegistrationDate(true));
          dispatch(setErrorFirstRegistrationDate(false));
        }
        setAllRadio(true);
        setSpecificDateRadio(false);
        setShow(false);
      }
      if (event.target.id === "specific") {
        if (name === "EffectiveDate") dispatch(setAllEffectiveDate(false));
        if (name === "ManufacturingDate")
          dispatch(setAllManufacturingDate(false));
        if (name === "FirstRegistrationDate")
          dispatch(setAllFirstRegistrationDate(false));
        setAllRadio(false);
        setSpecificDateRadio(true);
        handleDispatchOperation(selectDate);
      }
    }

    if (startOrEnd === "end") {
      if (event.target.id === "present") {
        if (name === "toEffectiveDate") dispatch(setAllEffectiveDate(false));
        if (name === "toManufacturingDate")
          dispatch(setAllManufacturingDate(false));
        if (name === "toFirstRegistrationDate")
          dispatch(setAllFirstRegistrationDate(false));
        setPresentDateRadio(true);
        setAllRadio(false);
        setSpecificDateRadio(false);
        handleDispatchOperation(selectDate);
        setShow(false);
      }
      if (event.target.id === "specific") {
        if (name === "toEffectiveDate") dispatch(setAllEffectiveDate(false));
        if (name === "toManufacturingDate")
          dispatch(setAllManufacturingDate(false));
        if (name === "toFirstRegistrationDate")
          dispatch(setAllFirstRegistrationDate(false));
        setPresentDateRadio(false);
        setSpecificDateRadio(true);
        // setShow(false);
      }
    }
  };

  return (
    <div className="w-full border">
      <div className=" w-60 border p-2 bg-white">
        <div className="flex justify-between items-center mb-2">
          <h1 className="select-none font-semibold border-none ml-4">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex gap-5 items-center ">
            <ArrowNarrowLeft
              className="w-7 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />

            <ArrowNarrowRight
              className="w-7 h-5 cursor-pointer "
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-5 mb-3 w-9 grid place-content-center text-gray-500 select-none border-none text-darkGrey"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className=" grid grid-cols-7 ">
          {generateDate(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-7 grid place-content-center text-sm"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : " text-navGrey",
                      today ? " bg-darkGrey" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? " "
                        : "",
                      "h-7 w-7 grid place-content-center hover:bg-greyBorder transition-all cursor-pointer select-none border-none"
                    )}
                    onClick={() => handleDate(date)}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>

        <div className=" flex justify-evenly mt-2 -ml-4">
          <div className=" flex gap-1">
            <input
              type="radio"
              id="specific"
              checked={specificDateRadio}
              onChange={(e) => handleRadioClickedAll(e)}
            />
            <label htmlFor="specific">Specific Date</label>
          </div>
          <div className=" flex gap-1">
            {startOrEnd === "start" ? (
              <>
                <input
                  type="radio"
                  id="all"
                  checked={allradio}
                  onChange={(e) => handleRadioClickedAll(e)}
                />
                <label htmlFor="all">All</label>
              </>
            ) : (
              <>
                <input
                  type="radio"
                  id="present"
                  checked={presentDateRadio}
                  onChange={(e) => handleRadioClickedAll(e)}
                />
                <label htmlFor="present">Present</label>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCalendar;
