import {
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import SubmissionConfirmationPopUp from "../submissionConfirmation/SubmissionConfirmationPopUp";
import VehicleTestButton from "./VehicleTestButton";
import { useDispatch, useSelector } from "react-redux";
import { setisAccepted } from "../submissionConfirmation/state/SubmissionConfirmationSlice";
import { SAVE_VISUAL_TEST_RESULT_URL } from "../../constants/urlConstants";
import VisualInspectionAndAdditionalInfo from "../VisualInspectionAndAdditionalInfo/VisualInspectionAndAdditionalInfo";

const VehicleTest = () => {
  const [showVisualInspectionAndAdditionalInfo, setVisualInspectionAndAdditionalInfo] =
    useState(false);

  const closeVisualInspectionAndAdditionalInfo = (val) => {
    setVisualInspectionAndAdditionalInfo(val);
  };


  const [showPopup, setShowPopup] = useState(false);
  const [needInspection, setNeedInspection] = useState("Yes");
  const [submitted, setSubmitted] = useState("No");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [testStart, setTestStart] = useState(false);
  const [buttonName, setButtonName] = useState("Test Start");
  const [tabName, setTabName] = useState("vi");

  const [isBtnDisable, setIsBtnDisable] = useState(false);

  const dispatch = useDispatch();
  const { isAccepted } = useSelector(
    (state) => state.submissionConfirmation.vi
  );
  const data = useSelector((state: any) => state.data.regdata);
  const appId = useSelector((state: any) => state.data.appointmentId)
  const stationId = JSON.parse(localStorage.getItem("station") || "{}");
  const laneId = JSON.parse(localStorage.getItem("lane") || "{}");
  const userName = useSelector((state: { login: { userID: string } }) => state.login.userID);
  const tableData = [
    { id: 1, name: "Axle" },
    { id: 2, name: "Brake System" },
    { id: 3, name: "Chassis/Body Structure*" },
    { id: 4, name: "Dimension/Weight*" },
    { id: 5, name: "Documents" },
    { id: 6, name: "Door/Emergency Exit*" },
    { id: 7, name: "Driver cab/Bodywork*" },
    { id: 8, name: "Driver's view" },
    { id: 9, name: "Seat/SRS/Seat belt*" },
    { id: 10, name: "Steering and Attachment" },
    { id: 11, name: "Suspension System" },
    { id: 12, name: "Tyre" },
    { id: 13, name: "Vehicle/Trailer equipment*" },
    { id: 14, name: "Ventilation" },
    { id: 15, name: "Wheel/Axle alignment" },
    { id: 16, name: "Wheel/Hub*" },
    { id: 17, name: "Wheelguard" },
  ];

  const handleClick = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    if (isAccepted === true) {
      setSelectedRadio("");
    }
  }, [isAccepted]);

  const onRadioButtonChange = (value: string) => {
    dispatch(setisAccepted({ [tabName]: { isAccepted: false } }));
    setSelectedRadio(value);
  };

  const dummyData = {
    "testDto": {
      "inspectionId": data.inspectionId,
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
      "appointmentId": appId
    },
    "saveVisualTestResultDto": {
      "numFixedAxles": 0,
      "numRetractAxles": 0,
      "numTotalAxles": 0,
      "retractAxlesPos": "",
      "axleTestLevel": "",
      "axlesTestResult": "",
      "brakeTestLevel": "",
      "brakeTestResult": "",
      "chsssTestLevel": "",
      "chsssTestResult": "",
      "dimensionTestLevel": "",
      "dimensionTestResult": "",
      "documentTestLevel": "",
      "documentTestResult": "",
      "doorTestLevel": "",
      "doorTestResult": "",
      "driverCabTestLevel": "",
      "driverCabTestResult": "",
      "driverViewTestLevel": "",
      "driverViewTestResult": "",
      "result": selectedRadio,
      "skipTestReasonId": ""
    }
  };

  return (
    <div className="font-calibri font-bold  ">
      <div className="flex text-small justify-end mt-2 ">
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

      <div className="flex justify-between">
        <div className=" flex mt-4 ">
          <Button
            size="sm"
            radius="none"
            className="mr-4 ml-4 h-6 text-white font-calibri font-bold bg-persianGreen "
          >
            ENG
          </Button>
          <Button size="sm" className="h-6" radius="none">
            Chinese
          </Button>
        </div>

        <div className="flex  mt-4">
          <Checkbox radius="none" size="sm" defaultSelected={false}>
            Show Failed VI Items Only
          </Checkbox>
          <Button
            size="sm"
            radius="none"
            className="mr-4 ml-4 h-6  text-white font-calibri font-bold bg-persianGreen "
          >
            Reset
          </Button>
        </div>
      </div>
      {testStart ? (
        <VehicleTestButton />
      ) : (
        <>
          <div className="flex flex-row mt-2 ">
            <div className="flex  ">
              <span className="mr-2 ml-5 text-small mt-3 w-[100%] ">
                Total no. of fixed axles
              </span>{" "}
              <input
                type="text"
                radius="none"
                id="Wheel Span"
                name="Wheel Span"
                className="w-[100%] md:w-[236px] lg:w-[160px] xl:w-[130px] h-8 mt-2 border-1.5 border-darkGrey rounded-s bg-[#e6e3e3] p-1"
              />
            </div>
            <div className="flex   ">
              <span className="mr-2 ml-2 text-small w-[120%]  mt-3">
                Total no. of Retrackable axles
              </span>{" "}
              <input
                type="text"
                radius="none"
                id="Wheel Span"
                name="Wheel Span"
                className="w-[100%]  md:w-[236px] lg:w-[160px] xl:w-[130px] h-8 mt-2 border-1.5 border-darkGrey rounded-s bg-[#e6e3e3] p-1"
              />
            </div>
            <div className="flex  ">
              <span className="mr-2 ml-2 w-[60%] text-small mt-3">
                Total no. axles
              </span>{" "}
              <input
                type="text"
                radius="none"
                id="Wheel Span"
                name="Wheel Span"
                className="w-[100%] md:w-[236px] lg:w-[160px] xl:w-[130px] h-8 mt-2 border-1.5 border-darkGrey rounded-s bg-[#fff] p-1"
              />
            </div>
          </div>
          <div className="flex ">
            <span className="mr-2 ml-5 text-small mt-4">
              Retrackable axles position
            </span>{" "}
            <span className="mr-8">
              {" "}
              <Checkbox radius="none" size="sm" defaultSelected={false}>
                1
              </Checkbox>
            </span>
            <span>
              {" "}
              <Checkbox radius="none" size="sm" defaultSelected={false}>
                2
              </Checkbox>
            </span>
          </div>

          <table className=" border-1 border-tropicalrainforest mt-2 mb-8 w-[98%] justify-end text-inputTxt font-calibri font-bold mr-4 ml-4 ">
            <tr className=" bg-tropicalrainforest text-white text-innerInputTxt ">
              <th className="border-l-1 mb-0 h-8 border-greyBorder border-b-1 w-12">
                Code
              </th>
              <th className="border-l-1 border-greyBorder border-b-1 w-[40%]">
                Description
              </th>
              <th className="border-l-1 border-greyBorder border-b-1 w-12 ">
                F
              </th>
              <th className="border-l-1 border-greyBorder border-b-1 w-12 ">
                N/S
              </th>
              <th className="border-l-1 border-greyBorder border-b-1 w-12 ">
                O/S
              </th>
              <th className="border-l-1 border-greyBorder border-b-1 w-12 ">
                R
              </th>
              <th className="border-l-1 border-greyBorder border-b-1 w-12 ">
                N/S
              </th>
              <th className="border-l-1 border-greyBorder border-b-1 w-12 ">
                O/S
              </th>
              <th className="border-l-1 border-greyBorder border-b-1 w-[20%]">
                Result
              </th>
            </tr>
            {tableData.map((item) => (
              <tr
                id={item.name}
                className="border-b-1 boxNotes border-lightGrey  "
              >
                <td className="border-l-1 border-greyBorder  ">{item.id}</td>
                <td className="border-l-1 border-greyBorder  ">{item.name}</td>
                <td className="border-l-1 border-greyBorder  ">
                  {" "}
                  <Checkbox
                    radius="none"
                    size="sm"
                    defaultSelected={false}
                  ></Checkbox>
                </td>
                <td className="border-l-1 border-greyBorder  ">
                  <Checkbox
                    radius="none"
                    size="sm"
                    defaultSelected={false}
                  ></Checkbox>
                </td>
                <td className="border-l-1 border-greyBorder  ">
                  <Checkbox
                    radius="none"
                    size="sm"
                    defaultSelected={false}
                  ></Checkbox>
                </td>
                <td className="border-l-1 border-greyBorder   ">
                  <Checkbox
                    radius="none"
                    size="sm"
                    defaultSelected={false}
                  ></Checkbox>
                </td>
                <td className="border-l-1 border-greyBorder   ">
                  <Checkbox
                    radius="none"
                    size="sm"
                    defaultSelected={false}
                  ></Checkbox>
                </td>
                <td className="border-l-1 border-greyBorder  ">
                  <Checkbox
                    radius="none"
                    size="sm"
                    defaultSelected={false}
                  ></Checkbox>
                </td>
                <td className="border-l-1 border-greyBorder  h-12">
                  <Select
                    placeholder="p"
                    labelPlacement="outside-left"
                    className="w-[50%]"
                    radius="none"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                  >
                    <SelectItem key={2}>P</SelectItem>
                    <SelectItem key={3}>F</SelectItem>
                  </Select>
                </td>
              </tr>
            ))}
          </table>
        </>
      )}
      <div className="flex gap-4 justify-center font-calibri font-bold ">
        <RadioGroup
          orientation="horizontal"
          className="ml-4 mt-1"
          value={selectedRadio}
          onValueChange={onRadioButtonChange}
        >
          <span className="mr-4 text-popupHeading">Result</span>
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
        <span className="ml-4 mt-1 text-popupHeading">Skip Test Reason</span>

        <Select
          placeholder="-"
          labelPlacement="outside-left"
          data-testid="vehicleClass"
          className="w-[15%]"
          radius="none"
          size="sm"
          name="center"
          aria-label="center"
          variant="bordered"
        >
          <SelectItem key={2}>Data</SelectItem>
        </Select>
      </div>

      <div className="flex gap-4 items-center justify-center mt-4 font-calibri font-bold ">
      <Button
          radius="none"

          className={
            isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold mb-3 h-6"
              : "bg-persianGreen text-white font-calibri font-bold mb-3 h-6 "
          }
          // id="save-btn"
          // isDisabled={isBtnDisable}
        >
          Statistic Info
        </Button>
      <Button
          radius="none"

          className={
            isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold mb-3 h-6"
              : "bg-persianGreen text-white font-calibri font-bold mb-3 h-6 "
          }
          onClick={() => setVisualInspectionAndAdditionalInfo(true)}
          // id="save-btn"
          // isDisabled={isBtnDisable}
        >
          Other Checklist
        </Button>
        <Button
          radius="none"
          className={isBtnDisable
            ? "bg-darkGrey text-white font-calibri font-bold mb-3 h-6"
            : "bg-persianGreen text-white font-calibri font-bold mb-3 h-6 "}
          onClick={() => setButtonName("Retest")}
          id="TestStart-btn"
          isDisabled={isBtnDisable}
        >
          {buttonName}
        </Button>
        <Button
          radius="none"

          className={
            isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold mb-3 h-6"
              : "bg-persianGreen text-white font-calibri font-bold mb-3 h-6 "
          }
          id="save-btn"
          isDisabled={isBtnDisable}
        >
          Save
        </Button>
        <Button
          radius="none"
          className={
            selectedRadio === "" || isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold mb-3 h-6"
              : "bg-persianGreen text-white font-calibri font-bold mb-3 h-6"
          }
          onClick={handleClick}
          isDisabled={selectedRadio === "" || isBtnDisable}
          id="submit-btn"
        >
          Submit
        </Button>
      </div>

      {showVisualInspectionAndAdditionalInfo && (
        <VisualInspectionAndAdditionalInfo
          setIsVisualInspectionAndAdditionalInfo={closeVisualInspectionAndAdditionalInfo}
        ></VisualInspectionAndAdditionalInfo>
      )}
      {showPopup && (
        <SubmissionConfirmationPopUp
          showSubmissionConfirmationPopUp={showPopup}
          setSubmissionConfirmationPopUp={setShowPopup}
          setNeedInspection={setNeedInspection}
          setSubmitted={setSubmitted}
          setIsBtnDisable={setIsBtnDisable}
          url={SAVE_VISUAL_TEST_RESULT_URL}
          data={dummyData}
          tabName={tabName}
        ></SubmissionConfirmationPopUp>
      )}
    </div>
  );
};
export default VehicleTest;