import {
  Button,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubmissionConfirmationPopUp from "../submissionConfirmation/SubmissionConfirmationPopUp";
import { setisAccepted } from "../submissionConfirmation/state/SubmissionConfirmationSlice";
import { SAVE_EXHAUST_TEST_RESULT_URL } from "../../constants/urlConstants";

const buttons = [
  { id: 1, name: "Test Start", value: "Test Start" },
  { id: 2, name: "Test Config", value: "Test Config" },
  { id: 3, name: "Save", value: "Save" },
  { id: 4, name: "Submit", value: "Submit" },
];

const exhaustTestData = () => {
  const [selectedResult, setSelectedResult] = useState("");
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [showTestData, setShowTestData] = useState(false);
  const [needInspection, setNeedInspection] = useState("Yes");
  const [submitted, setSubmitted] = useState("No");
  const [buttonName, setButtonName] = useState("Test Start");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [tabName, setTabName] = useState("exhaust");
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const userName = useSelector(
    (state: { login: { userID: string } }) => state.login.userID
  );
  const data = useSelector((state: any) => state.data.regdata);
  const appointmentId = useSelector((state: any) => state.data.appointmentId);
  const [startTime, setStartTime] = useState("");

  const headTestData = {
    testDto: {
      inspectionId: data.inspectionId,
      userId: userName,
      stationId: JSON.parse(localStorage.getItem("station") || "{}"),
      laneId: JSON.parse(localStorage.getItem("lane") || "{}"),
      mode: "",
      attempt: 0,
      testStartTime: startTime,
      testEndTime: startTime,
      skipTestFollowUpAction: "",
      abortSuspendTestReasonId: "",
      abortTestRemark: "",
      remark: "",
      appointmentId: appointmentId,
    },

    exhaustTestResultDto: {
      petrolInd: true,
      coIdle: "0",
      coHighIdle: "0",
      hcIdle: "0",
      hcHighIdle: "0",
      cO2Idle: "0",
      cO2HighIdle: "0",
      o2Idle: "0",
      o2HighIdle: "0",
      noIdle: "0",
      noHighIdle: "0",
      lambdaHighIdle: "0",
      hsu1: 50,
      hsu2: 50,
      hsu3: 50,
      hsu4: 50,
      hsu5: 50,
      hsu6: 50,
      hsu7: 50,
      hsu8: 50,
      hsu9: 50,
      hsu10: 50,
      hsuAvg: 50,
      rpm1: 60,
      rpm2: 60,
      rpm3: 60,
      rpm4: 60,
      rpm5: 60,
      rpm6: 60,
      rpm7: 60,
      rpm8: 60,
      rpm9: 60,
      rpm10: 60,
      rpmAvg: 60,
      result: selectedResult,
      skipTestReasonId: "",
      dynoInd: false,
    },
  };

  const dispatch = useDispatch();
  buttons[0].name = buttonName;
  const submitNavigateData = {
    NI: "Need Inspection:",
    ST: "Submitted:",
  };

  const { isAccepted } = useSelector(
    (state) => state.submissionConfirmation.exhaust
  );

  useEffect(() => {
    if (isAccepted === true) {
      setSelectedRadio("");
    }
  }, [isAccepted]);

  const onRadioButtonChange = (value: string) => {
    dispatch(setisAccepted({ [tabName]: { isAccepted: false } }));
    setSelectedRadio(value);
  };

  const handleClick = (buttonValue) => {
    if (buttonValue === "Submit") {
      setShowSubmitPopup(true);
    } else if (buttonValue === "Test Start") {
      setButtonName("Retest");
      setShowTestData(true);
      setStartTime(new Date().toISOString());
    }
  };
  return (
    <div className="flex flex-col text-inputTxt font-calibri m-4 font-bold">
      <div
        className="flex text-small justify-end mt-2 "
        data-testId="need-inspection"
      >
        Need Inspection:{" "}
        <span
          className={
            needInspection === "No"
              ? "mr-16 text-red"
              : "mr-16 text-persianGreen"
          }
        >
          {needInspection}
        </span>{" "}
        Submitted:{" "}
        <span
          className={
            submitted === "No" ? "mr-16 text-red" : "mr-16 text-persianGreen"
          }
        >
          {submitted}
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div>
          <span className="font-calibri font-bold text-[15px] ml-[80px] w-[85px] p-1 ">
            {" "}
            Petrol{" "}
          </span>
        </div>
        <div className="flex ">
          <span className="text-black font-bold text-left ml-[130px] w-[85px] mb-4 ">
            {" "}
            Idle{" "}
          </span>
          <span className="text-black font-bold text-left  w-[85px] ">
            {" "}
            High Idle{" "}
          </span>
        </div>
        <div className="flex flex-col-5 mb-4 ...">
          <span className="text-black font-bold text-left   pl-5 pt-1 w-[85px]">
            CO
          </span>
          <span className="text-black text-left   mt-[-3px]">
            <Input
              labelPlacement="outside-left"
              className="w-[100px]"
              radius="none"
              size="sm"
              name="center"
              variant="bordered"
              placeholder=""
              value={
                showTestData ? headTestData.exhaustTestResultDto.coIdle : ""
              }
            />{" "}
          </span>
          <div className="flex flex-col-2  ...">
            <span className="  text-black text-left ml-4   mt-[-3px]">
              <Input
                labelPlacement="outside-left"
                className="w-[100px]"
                radius="none"
                size="sm"
                name="center"
                variant="bordered"
                placeholder=""
                value={
                  showTestData
                    ? headTestData.exhaustTestResultDto.coHighIdle
                    : ""
                }
              />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col-4 mb-4   ...">
          <span className="text-black font-bold text-left   pl-5 pt-1 w-[85px]">
            HC
          </span>
          <span className="text-black text-left   mt-[-3px]">
            <Input
              labelPlacement="outside-left"
              className="w-[100px]"
              radius="none"
              size="sm"
              name="center"
              variant="bordered"
              placeholder=""
              value={
                showTestData ? headTestData.exhaustTestResultDto.hcIdle : ""
              }
            />{" "}
          </span>
          <div className="flex flex-col-2  ...">
            <span className="  text-black text-left ml-4   mt-[-3px]">
              <Input
                labelPlacement="outside-left"
                className="w-[100px]"
                radius="none"
                size="sm"
                name="center"
                variant="bordered"
                placeholder=""
                value={
                  showTestData
                    ? headTestData.exhaustTestResultDto.hcHighIdle
                    : ""
                }
              />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col-4 mb-4   ...">
          <span className="text-black font-bold text-left   pl-5 pt-1 w-[85px]">
            CO2
          </span>
          <span className="text-black text-left   mt-[-3px]">
            <Input
              labelPlacement="outside-left"
              className="w-[100px]"
              radius="none"
              size="sm"
              name="center"
              variant="bordered"
              placeholder=""
              value={
                showTestData ? headTestData.exhaustTestResultDto.cO2Idle : ""
              }
            />{" "}
          </span>
          <div className="flex flex-col-2    ...">
            <span className="  text-black text-left ml-4   mt-[-3px]">
              <Input
                labelPlacement="outside-left"
                className="w-[100px]"
                radius="none"
                size="sm"
                name="center"
                variant="bordered"
                placeholder=""
                value={
                  showTestData
                    ? headTestData.exhaustTestResultDto.cO2HighIdle
                    : ""
                }
              />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col-4 mb-4   ...">
          <span className="text-black font-bold text-left   pl-5 pt-1 w-[85px]">
            O2
          </span>
          <span className="text-black text-left   mt-[-3px]">
            <Input
              labelPlacement="outside-left"
              className="w-[100px]"
              radius="none"
              size="sm"
              name="center"
              variant="bordered"
              placeholder=""
              value={
                showTestData ? headTestData.exhaustTestResultDto.o2Idle : ""
              }
            />{" "}
          </span>
          <div className="flex flex-col-2  ...">
            <span className="  text-black text-left ml-4   mt-[-3px]">
              <Input
                labelPlacement="outside-left"
                className="w-[100px]"
                radius="none"
                size="sm"
                name="center"
                variant="bordered"
                placeholder=""
                value={
                  showTestData
                    ? headTestData.exhaustTestResultDto.o2HighIdle
                    : ""
                }
              />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col-4  mb-4  ...">
          <span className="text-black font-bold text-left   pl-5 pt-1 w-[85px]">
            NO
          </span>
          <span className="text-black text-left   mt-[-3px]">
            <Input
              labelPlacement="outside-left"
              className="w-[100px]"
              radius="none"
              size="sm"
              name="center"
              variant="bordered"
              placeholder=""
              value={
                showTestData ? headTestData.exhaustTestResultDto.noIdle : ""
              }
            />{" "}
          </span>

          <div className="flex flex-col-2  ...">
            <span className="  text-black text-left ml-4   mt-[-3px]">
              <Input
                labelPlacement="outside-left"
                className="w-[100px]"
                radius="none"
                size="sm"
                name="center"
                variant="bordered"
                placeholder=""
                value={
                  showTestData
                    ? headTestData.exhaustTestResultDto.noHighIdle
                    : ""
                }
              />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col-4  ...">
          <span className="text-black font-bold text-left pl-5 pt-1 w-[85px]">
            λ
          </span>
          <span className="text-black text-left mt-[-3px]">
            <Input
              labelPlacement="outside-left"
              className="w-[100px]"
              radius="none"
              size="sm"
              isDisabled={true}
            />{" "}
          </span>
          <div className="flex flex-col-2  ...">
            <span className="  text-black text-left ml-4 mt-[-3px]">
              <Input
                labelPlacement="outside-left"
                className="w-[100px]"
                radius="none"
                size="sm"
                name="center"
                variant="bordered"
                placeholder=""
                value={
                  showTestData
                    ? headTestData.exhaustTestResultDto.lambdaHighIdle
                    : ""
                }
              />{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-5 mb-5">
        <div className="flex justify-center items-center">
          <span> Result</span>
          <div className="ml-[14px]">
            <RadioGroup
              orientation="horizontal"
              className="ml-4"
              onChange={(e) => {
                setSelectedResult(e.target.value);
              }}
              value={selectedRadio}
              onValueChange={onRadioButtonChange}
            >
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="F"
              >
                <span className="text-red mr-4">FAIL</span>
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="P"
              >
                <span className="text-lightCyan mr-4">PASS</span>
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen",
                }}
                value="S"
              >
                <span className="text-darkRed mr-4">SKIP</span>
              </Radio>
            </RadioGroup>
          </div>
        </div>
        <div className=" flex ml-12 items-center font-bold">
          <span>Skip Test Reason</span>
          <Select
            label="-"
            size="sm"
            classNames={{ trigger: "h-8 min-h-7" }}
            className="ml-2 bg-lightGrey border-greyBorder w-[200px]"
            radius="none"
            variant="bordered"
          >
            <SelectItem key={1}>-</SelectItem>
          </Select>
        </div>
      </div>
      <div>
        {buttons.map((button) => (
          <Button
            size="sm"
            key={button.id}
            className={` ${(button.value === "Submit" && !selectedRadio) || isBtnDisable
                ? "bg-darkGrey"
                : "bg-persianGreen"
              } text-white m-3  h-6`}
            radius="none"
            isDisabled={(button.value === "Submit" && !selectedRadio) || isBtnDisable}
            onClick={() => handleClick(button?.value)}
          >
            {button.name}
          </Button>
        ))}
      </div>
      {showSubmitPopup && (
        <SubmissionConfirmationPopUp
          showSubmissionConfirmationPopUp={showSubmitPopup}
          setSubmissionConfirmationPopUp={setShowSubmitPopup}
          setNeedInspection={setNeedInspection}
          setSubmitted={setSubmitted}
          setIsBtnDisable={setIsBtnDisable}
          data={headTestData}
          tabName={tabName}
          url={SAVE_EXHAUST_TEST_RESULT_URL}
        ></SubmissionConfirmationPopUp>
      )}
    </div>
  );
};

export default exhaustTestData;