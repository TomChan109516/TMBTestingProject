import {
  Button,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import HeadLampLayoutTable from "./HeadLampLayoutTable";
import LightingConfigPopup from "./LightingConfigPopup";
import SubmissionConfirmationPopUp from "../submissionConfirmation/SubmissionConfirmationPopUp";
import { SseMessageEventData, sse } from "../../utils/sseInstance";
import { useSelector, useDispatch } from "react-redux";
import { SAVE_HT_TEST_RESULT_URL } from "../../constants/urlConstants";
import { setisAccepted } from "../submissionConfirmation/state/SubmissionConfirmationSlice";

const headTestData = [
  {
    main: 140,
    dipped: 100,
    vmain: 100,
    vdipped: 100,
    hmain: 100,
    hdipped: 140,
    cmain: 100,
    cdipped: 120,
    uangle: 5,
    hangle: 5,
  },
];
const buttons = [
  { id: 1, name: "Test Start", value: "Test Start" },
  { id: 2, name: "Test Config", value: "TestConfig" },
  { id: 3, name: "Save", value: "Save" },
  { id: 4, name: "Submit", value: "Submit" },
];
export default function HeadLampLayoutButton() {
  const [HeadlampPopUp, setHeadlampPopUp] = useState(false);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [selectedResult, setSelectedResult] = useState("");
  const [needInspection, setNeedInspection] = useState("Yes");
  const [submitted, setSubmitted] = useState("No");
  const [buttonName, setButtonName] = useState("Test Start");
  buttons[0].name = buttonName;
  const appointmentId = useSelector((state: any) => state.data.appointmentId);
  const vehicleData = useSelector((state: any) => state.data.regdata);
  const stationId = JSON.parse(localStorage.getItem("station") || "{}");
  const laneId = JSON.parse(localStorage.getItem("lane") || "{}");
  const userName = useSelector(
    (state: { login: { userID: string } }) => state.login.userID
  );
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const { isAccepted } = useSelector(
    (state: any) => state.submissionConfirmation.ht
  );
  const [tabName, setTabName] = useState("ht");
  const dispatch = useDispatch();
  const closePopup = () => {
    setHeadlampPopUp(false);
  };
  const handleClick = () => {
    setShowSubmitPopup(true);
  };
  // const closeSubmitPopUp = () => {
  //   setShowSubmitPopup(false);
  // };
  // const handlePopup = (buttonvalue) => {
  //   if (buttonvalue === "Test Start" || buttonvalue === "Retest") {
  //     setTestStarted(true);
  //     setButtonName("Retest")
  //   }
  //   if (buttonvalue === "TestConfig") {
  //     setHeadlampPopUp(true);
  //   }
  //   if (buttonvalue === "Submit") {
  //     setShowSubmitPopup(true);
  //   }
  // };
  const [data, setData] = useState<SseMessageEventData>();
  useEffect(() => {
    if (testStarted) {
      SSEEvent();
    }
    if (isAccepted === true) {
      setSelectedResult("");
    }
  }, [testStarted, isAccepted]);

  function SSEEvent() {
    try {
      const urlData = `checkteststatus/${appointmentId}/${laneId}/HT`;
      const eventSource = sse(urlData);
      eventSource.subscribe({
        next(x) {
          setData(x);
          console.log(x);
          console.log("SSEDATA", data);
        },
        complete() {
          console.log("Done");
          setTestStarted(false);
        },
        error(onError) {
          console.log(onError);
          setTestStarted(false);
        },
      });
      console.log("eventSource", eventSource);
    } catch (error) {
      console.log("error_log");
    }
  }
  const onRadioButtonChange = (value: string) => {
    dispatch(setisAccepted({ [tabName]: { isAccepted: false } }));
    setSelectedResult(value);
  };
  const reqestedData = {
    testDto: {
      inspectionId: vehicleData.inspectionId,
      userId: userName,
      stationId: stationId,
      laneId: laneId,
      mode: "",
      attempt: 0,
      testStartTime: "2024-04-03T06:40:02.515Z",
      testEndTime: "2024-04-03T06:40:02.515Z",
      skipTestFollowUpAction: "",
      abortSuspendTestReasonId: "",
      abortTestRemark: "",
      remark: "",
      appointmentId: appointmentId,
    },
    saveHeadLampTestResultDto: {
      leftMainIntensity: "",
      rightMainIntensity: "",
      leftMainHeight: "",
      rightMainHeight: "",
      leftDippedHeight: "",
      rightDippedHeight: "",
      leftMainVOffset: "",
      leftMainHOffset: "",
      rightMainVOffset: "",
      rightMainHOffset: "",
      leftDippedVOffset: "",
      leftDippedHOffset: "",
      rightDippedVOffset: "",
      rightDippedHOffset: "",
      leftDippedUpwardAngle: "",
      rightDippedUpwardAngle: "",
      leftDippedHorizontAngle: "",
      rightDippedHorizontAngle: "",
      leftMainVOffsetH: "",
      rightMainVOffsetH: "",
      leftDippedVOffsetH: "",
      rightDippedVOffsetH: "",
      leftTotalAdj: "",
      rightTotalAdj: "",
      leftIsCapAngleIndicator: "",
      rightIsCapAngleIndicator: "",
      skipTestReasonId: "",
      result: selectedResult,
    },
  };

  return (
    <>
      <HeadLampLayoutTable
        headTestData={testStarted && data ? [data] || headTestData : [{}]}
        needInspection={needInspection}
        submitted={submitted}
      />
      <div className=" p-6 pl-0 flex justify-center items-center text-inputTxt">
        <div className="flex justify-center items-center font-bold ">
          <span> Result</span>
          <div className="ml-[14px]">
            <RadioGroup
              orientation="horizontal"
              onValueChange={onRadioButtonChange}
              className="ml-4"
              value={selectedResult}
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
                <span className="text-red ">FAIL</span>
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen ml-6",
                }}
                value="P"
              >
                <span className="text-lightCyan ">PASS</span>
              </Radio>
              <Radio
                size="sm"
                classNames={{
                  wrapper:
                    "group-data-[selected=true]:bg-persianGreen group-data-[selected=true]:border-persianGreen text-inputTxt font-calibri",
                  control: "bg-white",
                  base: "border-persianGreen ml-6 ",
                }}
                value="S"
              >
                <span className="text-drakRed ">SKIP</span>
              </Radio>
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col-2  ...">
          <span className=" text-black font-bold text-left pl-8 pt-1 w-[150px]">
            Skip Test Reason{" "}
          </span>
          <span className=" text-black text-left ml-4 mt-[-3px]">
            <Select
              labelPlacement="outside-left"
              data-testid="vehicleClass"
              className="w-[165px]"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
              placeholder="Select"
            >
              <SelectItem className="text-[10px]" key={""}>
                --
              </SelectItem>
            </Select>
          </span>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center mt-4 ">
        <Button
          size="sm"
          radius="none"
          className={
            isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold  h-6"
              : "bg-persianGreen text-white font-calibri font-bold h-6"
          }
          onClick={() => {
            setTestStarted(true);
            setButtonName("Retest");
          }}
          isDisabled={isBtnDisable}
        >
          {buttonName}
        </Button>
        <Button
          size="sm"
          radius="none"
          className={
            isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold  h-6"
              : "bg-persianGreen text-white font-calibri font-bold h-6"
          }
          onClick={() => setHeadlampPopUp(true)}
          isDisabled={isBtnDisable}
        >
          Test Config
        </Button>
        <Button
          size="sm"
          radius="none"
          className={
            isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold  h-6"
              : "bg-persianGreen text-white font-calibri font-bold h-6"
          }
          isDisabled={isBtnDisable}
        >
          Save
        </Button>
        <Button
          size="sm"
          radius="none"
          className={
            selectedResult === "" || isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold  h-6"
              : "bg-persianGreen text-white font-calibri font-bold h-6"
          }
          onClick={handleClick}
          isDisabled={selectedResult === "" || isBtnDisable}
        >
          Submit
        </Button>
      </div>

      {showSubmitPopup && (
        <SubmissionConfirmationPopUp
          showSubmissionConfirmationPopUp={showSubmitPopup}
          setSubmissionConfirmationPopUp={setShowSubmitPopup}
          setNeedInspection={setNeedInspection}
          setSubmitted={setSubmitted}
          setIsBtnDisable={setIsBtnDisable}
          url={SAVE_HT_TEST_RESULT_URL}
          data={reqestedData}
          tabName={tabName}
        ></SubmissionConfirmationPopUp>
      )}

      {HeadlampPopUp && (
        <LightingConfigPopup
          HeadlampPopUp={HeadlampPopUp}
          closePopup={closePopup}
        ></LightingConfigPopup>
      )}
    </>
  );
}
