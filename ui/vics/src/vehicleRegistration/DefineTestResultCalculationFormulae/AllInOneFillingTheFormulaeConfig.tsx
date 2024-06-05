import {
  Modal,
  ModalContent,
  ModalBody,
  Select,
  SelectItem,
  Input,
  ModalHeader,
} from "@nextui-org/react";
import dayjs from "dayjs";
import React, { useRef, useState } from "react";
import BrakeTestFormulaeInfo from "./BrakeTestFormulaeInfo";
import TwoInOneTestFormulae from "./TwoInOneTestFormulae";
import SddTestFormulae from "./SddTestFormulae";
import { IconCalendarMonth } from "@tabler/icons-react";
import CustomCalendar from "../../common/calendar/CustomCalendar";
import { useDispatch, useSelector } from "react-redux";
import { CustomCalendarConstants } from "../../common/calendar/constants";
import {
  setEffectiveDate,
  setToEffectiveDate as handleToEffectiveDate,
  setErrorEffectiveDate,
  setErrorManufacturingDate,
  setErrorFirstRegistrationDate,
  setManufacturingDate,
  setToFirstRegistrationDate as handleToFirstRegistrationDate,
  setToManufacturingDate as handleToManufacturingDate,
  setFirstRegistrationDate,
  setBackToInitialState,
} from "../../common/calendar/state/CustomCalendarSlice";
import useClickOutside from "../../common/hooks/useClickOutside";

function AllInOneFillingTheFormulaeConfig(props) {
  const dispatch = useDispatch();
  const wrapperRef = useRef("calendar");
  const [showEffectiveDate, setShowEffectiveDate] = useState(false);
  const [toEffectiveDate, setToEffectiveDate] = useState(false);

  const [showManufacturingDate, setShowManufacturingDate] = useState(false);
  const [toManufacturingDate, setToManufacturingDate] = useState(false);

  const [showFirstRegistrationDate, setShowFirstRegistrationDate] =
    useState(false);
  const [toFirstRegistrationDate, setToFirstRegistrationDate] = useState(false);

  const handleClose = () => {
    props.closeAllInOneFillingTheFormulaeConfig(false);
    props.handleClose();
    dispatch(setBackToInitialState());
  };
  const open = props.showAllInOneFillingTheFormulaeConfig;
  const testType = props.testType;
  const testSpecific = props.testSpecific;

  const {
    effectiveDate,
    toEffectiveDate: toEff,
    manufacturingDate,
    toManufacturingDate: toManu,
    firstRegistrationDate,
    toFirstRegistrationDate: toFregis,
    allEffectiveDate,
    allManufacturingDate,
    allFirstRegistrationDate,
    errorEffectiveDate,
    errorManufacturingDate,
    errorFirstRegistrationDate,
  } = useSelector((state) => state.calendar);

  useClickOutside(wrapperRef, () => {
    setShowEffectiveDate(false);
    setToEffectiveDate(false);
    setShowManufacturingDate(false);
    setToManufacturingDate(false);
    setShowFirstRegistrationDate(false);
    setToFirstRegistrationDate(false);
  });

  const handleClicked = (name: string) => {
    if (name === CustomCalendarConstants.EffectiveDate)
      setShowEffectiveDate(!showEffectiveDate);
    if (name === CustomCalendarConstants.toEffectiveDate)
      setToEffectiveDate(!toEffectiveDate);
    if (name === CustomCalendarConstants.ManufacturingDate)
      setShowManufacturingDate(!showManufacturingDate);
    if (name === CustomCalendarConstants.toManufacturingDate)
      setToManufacturingDate(!toManufacturingDate);
    if (name === CustomCalendarConstants.FirstRegistrationDate)
      setShowFirstRegistrationDate(!showFirstRegistrationDate);
    if (name === CustomCalendarConstants.toFirstRegistrationDate)
      setToFirstRegistrationDate(!toFirstRegistrationDate);
  };

  const handleIsDateGreater = (
    endDate: dayjs.Dayjs,
    startDate: dayjs.Dayjs,
    errorFn
  ) => {
    if (startDate !== undefined || startDate) {
      const isDateBeyond = endDate > startDate;
      if (isDateBeyond) {
        dispatch(errorFn(false));
        return dayjs(endDate).format("MM/DD/YYYY");
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const handleDateIfFalse = (startFn, endFn, errorFn) => {
    dispatch(startFn(undefined));
    dispatch(endFn(undefined));
    dispatch(errorFn(true));
    return "mm/dd/yyyy";
  };

  const handleAllCondition = (endDate, startDate, errorFn, startFn, endFn) => {
    const isDateGreater = handleIsDateGreater(endDate, startDate, errorFn);
    if (isDateGreater === false) {
      return handleDateIfFalse(startFn, endFn, errorFn);
    } else {
      return isDateGreater;
    }
  };

  const renderDate = (date, defaultText) => {
    if (date !== undefined) {
      return dayjs(date).format("MM/DD/YYYY");
    } else {
      return defaultText;
    }
  };

  const renderToDate = (
    date,
    defaultText,
    effectiveDate,
    setErrorEffectiveDate,
    setEffectiveDate,
    handleToEffectiveDate
  ) => {
    if (date !== undefined) {
      return handleAllCondition(
        date,
        effectiveDate,
        setErrorEffectiveDate,
        setEffectiveDate,
        handleToEffectiveDate
      );
    } else {
      return defaultText;
    }
  };

  return (
    <Modal
      size="full"
      isOpen={open}
      onClose={handleClose}
      radius="none"
      className=" flex font-calibri text-inputTxt w-[70%] h-[95%] "
      classNames={{
        backdrop: "bg-lightBlack/50 backdrop-opacity-40",
        header: "bg-lightGreen p-2  font-bold text-[13px] ",
        closeButton: "hover:bg-white/4 active:bg-white/10",
        body: "px-0 py-0",
      }}
    >
      <ModalContent className="mb-3 ">
        <ModalHeader className="flex flex-col text-black font-calibri font-bold  bg-lightGreen i justify-center  gap-1">
          Formulae
        </ModalHeader>
        <ModalBody className="ml-2">
          <div className="">
            <div className="flex">
              <div className="w-[50%] mt-3 flex justify-end">
                <label className="font-bold mr-4 mt-1" htmlFor="Wheel Span">
                  Test Type
                </label>
                <div className="w-[50%] justify-start">
                  <Input
                    value={testType}
                    radius="none"
                    labelPlacement="outside-left"
                    size="sm"
                    className=" w-[100%] inline-block md:w-[75%] border-white bg-white "
                    variant="bordered"
                    disabled
                  />
                </div>
              </div>

              <div className="w-[50%] mt-3 ">
                <label className="font-bold ml-[35px] " htmlFor="Wheel Span">
                  Vehicle Class
                </label>
                <Select
                  labelPlacement="outside-left"
                  className=" ml-2 w-[36%]"
                  radius="none"
                  size="sm"
                  variant="bordered"
                  placeholder="001"
                >
                  <SelectItem className="text-[60px] h-10" key={""}>
                    001
                  </SelectItem>
                </Select>
              </div>
            </div>

            <div className="flex ">
              <div className="w-[50%] mt-3 flex justify-end ">
                <label className="font-bold mr-4" htmlFor="Wheel Span">
                  Formulae type
                </label>
                <div className="w-[50%] justify-start">
                  <Input
                    labelPlacement="outside-left"
                    className=" w-[100%] inline-block md:w-[75%]"
                    radius="none"
                    size="sm"
                    variant="bordered"
                    placeholder={testSpecific}
                  >
                    {testSpecific}
                  </Input>
                </div>
              </div>

              <div className="w-[50%] mt-3 ">
                <label className="font-bold ml-[60px]" htmlFor="Wheel Span">
                  ID
                </label>
                <Input
                  type="text"
                  radius="none"
                  labelPlacement="outside-left"
                  size="sm"
                  className=" w-[100%]  ml-[34px] inline-block md:w-[37%] border-white bg-white "
                  variant="bordered"
                />
              </div>
            </div>

            <div className="flex z-10 ">
              <div className="w-[50%] mt-3 flex justify-end  relative items-center">
                <label
                  className="font-bold md:mr-1 lg:mr-4"
                  htmlFor="Wheel Span"
                >
                  Manufaturing date(Start-Inclusive)
                </label>
                <div className="w-[50%] flex items-center">
                  <div
                    className={`  md:w-[90%] lg:w-[74%] h-8 flex justify-between items-center ${
                      !errorManufacturingDate
                        ? "border-navGrey"
                        : "border-darkRed"
                    }  border-2 hover:border-darkGrey`}
                  >
                    <p className=" pl-2  text-lightBlack text-navHeading ">
                      {allManufacturingDate
                        ? "All"
                        : renderDate(manufacturingDate, "mm/dd/yyyy")}
                    </p>
                    <IconCalendarMonth
                      onClick={() =>
                        handleClicked(CustomCalendarConstants.ManufacturingDate)
                      }
                      className=" w-5 pr-1"
                    />
                    {showManufacturingDate ? (
                      <div
                        className=" absolute top-8 -right-7 z-50"
                        ref={wrapperRef}
                      >
                        <CustomCalendar
                          setShow={setShowManufacturingDate}
                          name="ManufacturingDate"
                          startOrEnd="start"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="w-[50%] mt-3 flex justify-start  relative items-center">
                <label className="font-bold mr-4" htmlFor="Wheel Span">
                  to(Start-Inclusive)
                </label>
                <div className="w-[50%] flex items-center">
                  <div
                    className={`md:w-[94%] lg:w-[74%] h-8 flex justify-between items-center ${
                      !errorManufacturingDate
                        ? "border-navGrey"
                        : "border-darkRed"
                    }  border-2 hover:border-darkGrey`}
                  >
                    <p className=" pl-2  text-lightBlack text-navHeading ">
                      {allManufacturingDate
                        ? "All"
                        : renderToDate(
                            toManu,
                            "mm/dd/yyyy",
                            manufacturingDate,
                            setErrorManufacturingDate,
                            setManufacturingDate,
                            handleToManufacturingDate
                          )}
                    </p>
                    <IconCalendarMonth
                      onClick={() =>
                        handleClicked(
                          CustomCalendarConstants.toManufacturingDate
                        )
                      }
                      className=" w-5 pr-1"
                    />
                    {toManufacturingDate ? (
                      <div className=" absolute top-8  z-50" ref={wrapperRef}>
                        <CustomCalendar
                          setShow={setToManufacturingDate}
                          name="toManufacturingDate"
                          startOrEnd="end"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex ">
              <div className="w-[50%] mt-3 flex justify-end items-center">
                <label
                  className="font-bold md:ml-1 lg:mr-4"
                  htmlFor="Wheel Span"
                >
                  First Registration date(Start-Inclusive)
                </label>
                <div className="w-[50%] relative flex items-center">
                  <div
                    className={`  md:w-[90%] lg:w-[74%] h-8 flex justify-between items-center ${
                      !errorFirstRegistrationDate
                        ? "border-navGrey"
                        : "border-darkRed"
                    }  border-2 hover:border-darkGrey`}
                  >
                    <p className=" pl-2  text-lightBlack text-navHeading ">
                      {allFirstRegistrationDate
                        ? "All"
                        : renderDate(firstRegistrationDate, "mm/dd/yyyy")}
                    </p>
                    <IconCalendarMonth
                      onClick={() =>
                        handleClicked(
                          CustomCalendarConstants.FirstRegistrationDate
                        )
                      }
                      className=" w-5 pr-1"
                    />
                    {showFirstRegistrationDate ? (
                      <div
                        className=" absolute top-8 left-2 z-50"
                        ref={wrapperRef}
                      >
                        <CustomCalendar
                          setShow={setShowFirstRegistrationDate}
                          name="FirstRegistrationDate"
                          startOrEnd="start"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="w-[50%] mt-3 flex justify-start  relative items-center">
                <label className="font-bold mr-4" htmlFor="Wheel Span">
                  to(Start-Inclusive)
                </label>
                <div className="w-[50%] flex items-center">
                  <div
                    className={`md:w-[94%] lg:w-[74%] h-8 flex justify-between items-center ${
                      !errorFirstRegistrationDate
                        ? "border-navGrey"
                        : "border-darkRed"
                    }  border-2 hover:border-darkGrey`}
                  >
                    <p className=" pl-2  text-lightBlack text-navHeading ">
                      {allFirstRegistrationDate
                        ? "All"
                        : renderToDate(
                            toFregis,
                            "mm/dd/yyyy",
                            firstRegistrationDate,
                            setErrorFirstRegistrationDate,
                            setFirstRegistrationDate,
                            handleToFirstRegistrationDate
                          )}
                    </p>
                    <IconCalendarMonth
                      onClick={() =>
                        handleClicked(
                          CustomCalendarConstants.toFirstRegistrationDate
                        )
                      }
                      className=" w-5 pr-1"
                    />
                    {toFirstRegistrationDate ? (
                      <div className=" absolute top-8  z-50" ref={wrapperRef}>
                        <CustomCalendar
                          setShow={setToFirstRegistrationDate}
                          name="toFirstRegistrationDate"
                          startOrEnd="end"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex ">
              <div className="w-[50%] mt-3 flex justify-end items-center ">
                <label className="font-bold mr-4" htmlFor="Wheel Span">
                  Effective date(Start-Inclusive)
                </label>
                <div className="w-[50%] relative flex items-center">
                  <div
                    className={`  md:w-[90%] lg:w-[74%] h-8 flex justify-between items-center ${
                      !errorEffectiveDate ? "border-navGrey" : "border-darkRed"
                    }  border-2 hover:border-darkGrey`}
                  >
                    <p className=" pl-2  text-lightBlack text-navHeading ">
                      {allEffectiveDate
                        ? "All"
                        : renderDate(effectiveDate, "mm/dd/yyyy")}
                    </p>
                    <IconCalendarMonth
                      onClick={() =>
                        handleClicked(CustomCalendarConstants.EffectiveDate)
                      }
                      className=" w-5 pr-1"
                    />
                    {showEffectiveDate ? (
                      <div
                        className=" absolute top-8 left-2 z-50"
                        ref={wrapperRef}
                      >
                        <CustomCalendar
                          setShow={setShowEffectiveDate}
                          name="EffectiveDate"
                          startOrEnd="start"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="w-[50%] mt-3 flex justify-start  relative items-center">
                <label className="font-bold mr-4" htmlFor="Wheel Span">
                  to(Start-Inclusive)
                </label>
                <div className="w-[50%] flex items-center">
                  <div
                    className={`md:w-[94%] lg:w-[74%] h-8 flex justify-between items-center ${
                      !errorEffectiveDate ? "border-navGrey" : "border-darkRed"
                    }  border-2 hover:border-darkGrey`}
                  >
                    <p className={`" pl-2 $ text-lightBlack text-navHeading "`}>
                      {allEffectiveDate
                        ? "All"
                        : renderToDate(
                            toEff,
                            "mm/dd/yyyy",
                            effectiveDate,
                            setErrorEffectiveDate,
                            setEffectiveDate,
                            handleToEffectiveDate
                          )}
                    </p>
                    <IconCalendarMonth
                      onClick={() =>
                        handleClicked(CustomCalendarConstants.toEffectiveDate)
                      }
                      className=" w-5 pr-1"
                    />
                    {toEffectiveDate ? (
                      <div className=" absolute top-8  z-50" ref={wrapperRef}>
                        <CustomCalendar
                          setShow={setToEffectiveDate}
                          name="toEffectiveDate"
                          startOrEnd="end"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className=" border-b-2  border-dotted   mt-4  opacity-25 w-[100%] "></div>
          </div>

          {testType === "Brake Test" && (
            <BrakeTestFormulaeInfo
              errorEffectiveDate={errorEffectiveDate}
              errorManufacturingDate={errorManufacturingDate}
              errorFirstRegistrationDate={errorFirstRegistrationDate}
              handleClose={handleClose}
            />
          )}
          {testType === "SDD" && (
            <SddTestFormulae
              errorEffectiveDate={errorEffectiveDate}
              errorManufacturingDate={errorManufacturingDate}
              errorFirstRegistrationDate={errorFirstRegistrationDate}
            />
          )}
          {testType === "Speedometer" && (
            <TwoInOneTestFormulae
              errorEffectiveDate={errorEffectiveDate}
              errorManufacturingDate={errorManufacturingDate}
              errorFirstRegistrationDate={errorFirstRegistrationDate}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
export default AllInOneFillingTheFormulaeConfig;
