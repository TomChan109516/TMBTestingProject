import {
  RadioGroup,
  SelectItem,
  Radio,
  Select,
  Button,
  Input,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { } from "tabler-icons-react";
import SubmissionConfirmationPopUp from "../submissionConfirmation/SubmissionConfirmationPopUp";
import { setisAccepted } from "../submissionConfirmation/state/SubmissionConfirmationSlice";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_SPEEDOMETER_TEST_RESULT } from '../../constants/urlConstants'


const buttons = [
  { id: 1, name: "Start Test", value: "Start Test", data_testId: "retest" },
  {
    id: 2,
    name: "Test Config",
    value: "TestConfig",
    data_testId: "test-config",
  },
  { id: 3, name: "Save", value: "Save", data_testId: "save" },
  { id: 4, name: "Submit", value: "Submit", data_testId: "submit" },
];
// const speedometerTestData = { id: 1, testingSpeed: 100, measuredSpeed: 150 };

function Speedometer() {
  const [speedometerTestSpeed, setSpeedometerTestSpeed] = useState({
    testingSpeed: "50",
    measuredSpeed: "50",
  });
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("");
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [needInspection, setNeedInspection] = useState("Yes");
  const [submitted, setSubmitted] = useState("No");
  const [tabName, setTabName] = useState("speedometer");
  const [buttonName, setButtonName] = useState("Test Start");
  const [selectedRadio, setSelectedRadio] = useState("");

  const [isBtnDisable, setIsBtnDisable] = useState(false);

  buttons[0].name = buttonName;
  const userName = useSelector((state: { login: { userID: string } }) => state.login.userID);
  const data = useSelector((state: any) => state.data.regdata);
  const appointmentId = useSelector((state: any) => state.data.appointmentId);
  const dispatch = useDispatch();
  const { isAccepted } = useSelector(
    (state) => state.submissionConfirmation.speedometer
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

  const handlePopup = (buttonvalue) => {
    if (buttonvalue === "Start Test") {
      setStartTime(new Date().toISOString());
      setTestStarted(true);
      setButtonName("Retest");
    }
    if (buttonvalue === "Submit") {
      setShowSubmitPopup(true);
    }
  };
  const speedometerTestData = {
    testDto: {
      appointmentId: appointmentId,
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
    },
    speedometerTestResultDto: {
      testingSpeed: 50,
      measuredSpeed: 50,
      result: selectedRadio,
      skipTestReasonId: "",
    },
  };
  return (
    <div className="font-calibri font-bold text-inputTxt ">
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

      <div
        className=" flex justify-center items-center mr-4 mt-12 "
        data-testId="testing-speed"
      >
        <span className=" w-[15%] ">Testing Speed(km/h)</span>
        <Input
          className=" w-[15%] min-h-unit-6  h-unit-6 bg-white   "
          classNames={{ inputWrapper: " min-h-unit-8 h-unit-8 " }}
          variant="bordered"
          radius="none"
          type="text"
          value={`${testStarted ? speedometerTestSpeed.testingSpeed : ""}`}
          onChange={(e) =>
            setSpeedometerTestSpeed({
              ...speedometerTestSpeed,
              testingSpeed: e.target.value,
            })
          }
        />
      </div>
      <div className=" flex justify-center items-center mr-4 mt-8 ">
        <span className=" w-[15%] ">Measured Speed(km/h)</span>
        <Input
          className=" w-[15%] min-h-unit-6  h-unit-6 bg-white   "
          classNames={{ inputWrapper: " min-h-unit-8 h-unit-8 " }}
          variant="bordered"
          radius="none"
          type="text"
          value={`${testStarted ? speedometerTestSpeed.measuredSpeed : ""}`}
          onChange={(e) =>
            setSpeedometerTestSpeed({
              ...speedometerTestSpeed,
              measuredSpeed: e.target.value,
            })
          }
        />
      </div>

      <div className="flex gap-4 justify-center font-calibri font-bold mt-12 ">
        <RadioGroup
          orientation="horizontal"
          className="ml-4 mt-1"
          value={selectedRadio}
          onValueChange={onRadioButtonChange}
        >
          <span className="mr-4 text-popupHeading" data-testId="result">
            Result
          </span>
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
            <span className="text-red">FAIL</span>
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
            <span className="text-lightCyan">PASS</span>
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
            <span className="text-darkRed">SKIP</span>
          </Radio>
        </RadioGroup>
        <span className="ml-4 mt-1 text-popupHeading" data-testId="skip-test">
          Skip Test Reason
        </span>

        <Select
          placeholder="-"
          labelPlacement="outside-left"
          data-testid="vehicleClass"
          classNames={{ trigger: "h-8 min-h-7 " }}
          className="w-[12%] mt-1 "
          radius="none"
          size="sm"
          name="center"
          aria-label="center"
          variant="bordered"
        >
          <SelectItem key={2}>Data</SelectItem>
        </Select>
      </div>
      <div className="flex gap-6 items-center justify-center mt-8 font-calibri font-bold ">
        {buttons.map((button) => (
          <Button
            key={button.id}
            size="sm"
            radius="none"
            className={` ${(button.value === "Submit" && !selectedRadio) || isBtnDisable
                ? "bg-darkGrey"
                : "bg-persianGreen"
              } text-white m-3  h-6`}
            data-testId={button.data_testId}
            isDisabled={(button.value === "Submit" && !selectedRadio) || isBtnDisable}
            onClick={() => handlePopup(button?.value)}
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
          tabName={tabName}
          data={speedometerTestData}
          url={SAVE_SPEEDOMETER_TEST_RESULT}
        ></SubmissionConfirmationPopUp>
      )}
    </div>
  );
}
export default Speedometer;