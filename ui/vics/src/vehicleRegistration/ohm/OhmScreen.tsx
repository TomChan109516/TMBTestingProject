import {
  Button,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import SubmissionConfirmationPopUp from "../submissionConfirmation/SubmissionConfirmationPopUp";
import SubmitPopupInOHMRegistration from "./SubmitPopupInOHMRegistration";
import { useDispatch, useSelector } from "react-redux";
import { setOHMData } from "../state/ohmSlice";
import { SseMessageEventData, sse } from "../../utils/sseInstance";
import { SAVE_OHM_TEST_RESULT_URL } from "../../constants/urlConstants";
import { setisAccepted } from "../submissionConfirmation/state/SubmissionConfirmationSlice";

const OhmScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.ohmData.ohmdata);
  const appointmentId = useSelector((state: any) => state.data.appointmentId);
  const [needInspection, setNeedInspection] = useState("Yes");
  const [submitted, setSubmitted] = useState("No");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [buttonName, setButtonName] = useState("Test Start");
  const vehicleData = useSelector((state: any) => state.data.regdata);
  const stationId = JSON.parse(localStorage.getItem("station") || "{}");
  const laneId = JSON.parse(localStorage.getItem("lane") || "{}");
  const userName = useSelector((state: { login: { userID: string } }) => state.login.userID);
  const { isAccepted } = useSelector(
    (state: any) => state.submissionConfirmation.ohm
  );
  const [tabName, setTabName] = useState("ohm");
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);

  const [isBtnDisable, setIsBtnDisable] = useState(false);

  useEffect(() => {
    SSEEvent();
    // dispatch(
    //   setOHMData({
    //     vehicleLength: "1500",
    //     vehicleWidth: "1500",
    //     vehicleHeight: "1500",
    //     result: "Pass",
    //     skipTestReason: null,
    //   })
    // );
    if (isAccepted === true) {
      setSelectedRadio("");
    }
  }, [isAccepted]);
  const handleClick = () => {
    setShowSubmitPopup(true);
  };
  const onRadioButtonChange = (value: string) => {
    dispatch(setisAccepted({ [tabName]: { isAccepted: false } }));
    setSelectedRadio(value);
  };

  const reqestedData =
  {
    "testDto": {
      "inspectionId": vehicleData.inspectionId,
      "userId": userName,
      "stationId": stationId,
      "laneId": laneId,
      "mode": "",
      "attempt": 0,
      "testStartTime": "2024-04-03T06:40:02.515Z",
      "testEndTime": "2024-04-03T06:40:02.515Z",
      "skipTestFollowUpAction": "",
      "abortSuspendTestReasonId": "",
      "abortTestRemark": "",
      "remark": "",
      "appointmentId": appointmentId
    },
    "ohmTestResultDto": {
      "length": 0,
      "width": 0,
      "height": 0,
      "result": selectedRadio,
      "skipTestReasonId": ""
    }
  };

  const inputFieldList = [
    { id: "VehicleLength", name: "Vehicle Length", value: "", dimension: "mm" },
    { id: "VehicleWidth", name: "Vehicle Width", value: "", dimension: "mm" },
    { id: "VehicleHeight", name: "Vehicle Height", value: "", dimension: "mm" },
  ];

  const [showSubmissionConfirmationPopUp, setshowSubmissionConfirmationPopUp] =
    useState(false);
  const [OHMPopup, setOHMpopup] = useState(false);

  const handleSubmissionConfirmationPopUp = (value) => {
    if (value === "Submit") {
      setshowSubmissionConfirmationPopUp(true);
    }
    if (value === "Test Config") {
      setOHMpopup(true);
    }
  };

  const closePopup = () => {
    setOHMpopup(false);
  };

  const inputData = {
    "Vehicle Length": data?.vehicleLength || "0",
    "Vehicle Width": data?.vehicleWidth || "0",
    "Vehicle Height": data?.vehicleHeight || "0",
  };

  const [eventResponse, setEventResponse] = useState<SseMessageEventData>();

  function SSEEvent() {
    try {
      const urlData = `checkteststatus/${appointmentId}/${laneId}/OHM`
      const eventSource = sse(urlData);
      eventSource.subscribe({
        next(x) {
          setEventResponse(x);
          console.log("x", x);
          dispatch(
            setOHMData({
              vehicleLength: x.VehicleLength,
              vehicleWidth: x.VehicleWidth,
              vehicleHeight: x.VehicleHeight,
              result: "Pass",
              skipTestReason: null,
            })
          );
        },
        complete() {
          console.log('Done');
        },
        error(onError) {
          console.log(onError);
        }
      })
      console.log('eventSource', eventSource);
    } catch (error) {
      console.log("error_log")
    }
  }
  console.log("eventResponse", eventResponse);
  return (
    <div className="flex flex-col text-inputTxt font-calibri m-4">
      <div className="flex flex-row items-center justify-end">
        <p className="mr-3">
          Need Inspection:{" "}
          <span
            className={
              needInspection === "No"
                ? "mr-16 text-red"
                : "mr-16 text-persianGreen"
            }
          >
            {needInspection}
          </span>
        </p>
        <p>
          Submitted:{" "}
          <span
            className={
              submitted === "No" ? "mr-16 text-red" : "mr-16 text-persianGreen"
            }
          >
            {submitted}
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center">
        {inputFieldList.map((data) => (
          <div className="flex items-center m-5">
            <label htmlFor={data.name} className="mr-3">
              {data.name}
            </label>
            <input
              type="text"
              size={0}
              id={data.name}
              name={data.name}
              value={String(eventResponse ? eventResponse[data.id] : inputData[data.name])}
              className="w-[200px] border-1 border-greyBorder p-2"
            />
            <span className="ml-2">{data.dimension}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full ">
        <div className="flex  items-center m-5 ">
          <span className="ml-[410px]">Manual Override Reason</span>
          <Select
            placeholder=""
            size="sm"
            className="ml-[14px] bg-white border-greyBorder w-[200px]"
            radius="none"
            variant="bordered"
          >
          </Select>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-5 mb-5">
        <div className="flex justify-center items-center">
          <span> Result</span>
          <div className="ml-[14px]">
            <RadioGroup
              orientation="horizontal"
              className="ml-4"
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
                <span className="text-drakRed">SKIP</span>
              </Radio>
            </RadioGroup>
          </div>
        </div>

        <div className=" flex ml-12 items-center font-bold">
          <span>SKip Test Reason</span>
          <Select
            label="-"
            size="sm"
            className="ml-2 bg-lightGrey border-greyBorder w-[200px]"
            radius="none"
            variant="bordered"
          >
            <SelectItem key={1}>-</SelectItem>
          </Select>
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
          isDisabled={isBtnDisable}
        >
          Historical Test Data
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
          OHM List
        </Button>
        <Button
          size="sm"
          radius="none"
          className={
            isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold  h-6"
              : "bg-persianGreen text-white font-calibri font-bold h-6"
          }
          data-testid="Test Config"
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
          data-testid="Save"
          isDisabled={isBtnDisable}
        >
          Save
        </Button>
        <Button
          size="sm"
          radius="none"
          data-testid="Submit"
          className={
            selectedRadio === "" || isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold  h-6"
              : "bg-persianGreen text-white font-calibri font-bold h-6"
          }
          onClick={handleClick}
          isDisabled={selectedRadio === "" || isBtnDisable}

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
          url={SAVE_OHM_TEST_RESULT_URL}
          data={reqestedData}
          tabName={tabName}
        ></SubmissionConfirmationPopUp>
      )}

      {OHMPopup && (
        <SubmitPopupInOHMRegistration
          ImagePopup={OHMPopup}
          closePopup={closePopup}
          name="Test Config"
        ></SubmitPopupInOHMRegistration>
      )}
    </div>
  );
};
export default OhmScreen;