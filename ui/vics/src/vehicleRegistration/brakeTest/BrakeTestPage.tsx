import {
  Button,
  Radio,
  RadioGroup,
  SelectItem,
  Select,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import BreakTestpopup from "./BrakeTestConfigPopUp";
import SubmissionConfirmationPopUp from "../submissionConfirmation/SubmissionConfirmationPopUp";
import { SAVE_BRAKE_TEST_RESULT_URL } from "../../constants/urlConstants";
import { useDispatch, useSelector } from "react-redux";
import { setisAccepted } from "../submissionConfirmation/state/SubmissionConfirmationSlice";
import { tableData, tableFooter } from "./dummyDataBrakeTable";

function BrakeTestPage() {
  const [BreakTest, setBreakTest] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [needInspection, setNeedInspection] = useState("Yes");
  const [submitted, setSubmitted] = useState("No");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [tabName, setTabName] = useState("brake");
  const [buttonName, setButtonName] = useState("Test Start");
  const dispatch = useDispatch();
  const { isAccepted } = useSelector(
    (state) => state.submissionConfirmation.brake
  );
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const data = useSelector((state: any) => state.data.regdata);
  const appId = useSelector((state: any) => state.data.appointmentId);
  const stationId = JSON.parse(localStorage.getItem("station") || "{}");
  const laneId = JSON.parse(localStorage.getItem("lane") || "{}");
  const userName = localStorage.getItem("userName");

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
    testDto: {
      inspectionId: data.inspectionId,
      userId: userName,
      stationId: stationId,
      laneId: laneId,
      mode: "",
      attempt: 0,
      testStartTime: new Date(),
      testEndTime: new Date(),
      skipTestFollowUpAction: "",
      abortSuspendTestReasonId: "",
      abortTestRemark: "",
      remark: "",
      appointmentId: appId,
    },
    saveBrakeTestResultDto: {
      weightLAxle1: "",
      weightLAxle2: "",
      weightLAxle3: "",
      weightLAxle4: "",
      weightLAxle5: "",
      weightLAxle6: "",
      weightLAxle7: "",
      weightLAxle8: "",
      weightRAxle1: "",
      weightRAxle2: "",
      weightRAxle3: "",
      weightRAxle4: "",
      weightRAxle5: "",
      weightRAxle6: "",
      weightRAxle7: "",
      weightRAxle8: "",
      brakeLAxle1: "",
      brakeLAxle2: "",
      brakeLAxle3: "",
      brakeLAxle4: "",
      brakeLAxle5: "",
      brakeLAxle6: "",
      brakeLAxle7: "",
      brakeLAxle8: "",
      brakeRAxle1: "",
      brakeRAxle2: "",
      brakeRAxle3: "",
      brakeRAxle4: "",
      brakeRAxle5: "",
      brakeRAxle6: "",
      brakeRAxle7: "",
      brakeRAxle8: "",
      brakeImbAxle1: "",
      brakeImbAxle2: "",
      brakeImbAxle3: "",
      brakeImbAxle4: "",
      brakeImbAxle5: "",
      brakeImbAxle6: "",
      brakeImbAxle7: "",
      brakeImbAxle8: "",
      secondBrakeLAxle1: "",
      secondBrakeLAxle2: "",
      secondBrakeLAxle3: "",
      secondBrakeLAxle4: "",
      secondBrakeLAxle5: "",
      secondBrakeLAxle6: "",
      secondBrakeLAxle7: "",
      secondBrakeLAxle8: "",
      secondBrakeRAxle1: "",
      secondBrakeRAxle2: "",
      secondBrakeRAxle3: "",
      secondBrakeRAxle4: "",
      secondBrakeRAxle5: "",
      secondBrakeRAxle6: "",
      secondBrakeRAxle7: "",
      secondBrakeRAxle8: "",
      parkingBrakeLAxle1: "",
      parkingBrakeLAxle2: "",
      parkingBrakeLAxle3: "",
      parkingBrakeLAxle4: "",
      parkingBrakeLAxle5: "",
      parkingBrakeLAxle6: "",
      parkingBrakeLAxle7: "",
      parkingBrakeLAxle8: "",
      parkingBrakeRAxle1: "",
      parkingBrakeRAxle2: "",
      parkingBrakeRAxle3: "",
      parkingBrakeRAxle4: "",
      parkingBrakeRAxle5: "",
      parkingBrakeRAxle6: "",
      parkingBrakeRAxle7: "",
      parkingBrakeRAxle8: "",
      parkingBrakeImbAxle1: "",
      parkingBrakeImbAxle2: "",
      parkingBrakeImbAxle3: "",
      parkingBrakeImbAxle4: "",
      parkingBrakeImbAxle5: "",
      parkingBrakeImbAxle6: "",
      parkingBrakeImbAxle7: "",
      parkingBrakeImbAxle8: "",
      serviceBrake: 70,
      serviceBrakeEfficiency: 70,
      secondaryBrake: 60,
      secondaryBrakeEfficiency: 60,
      parkingBrake: 50,
      parkingBrakeEfficiency: 50,
      skipTestReasonId: "",
      result: selectedRadio,
    },
  };
  const closePopup = () => {
    setBreakTest(false);
  };
  const handleClick = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <div className="flex text-innerInputTxt justify-end gap-4 font-calibri font-bold ">
        <div>
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
        </div>
        <div>
          Submitted:{" "}
          <span
            className={
              submitted === "No" ? "mr-16 text-red" : "mr-16 text-persianGreen"
            }
          >
            {submitted}
          </span>
        </div>
      </div>
      <table className="border-1 border-tropicalrainforest mt-2 mb-8 w-full justify-end text-inputTxt font-calibri font-bold">
        <tr className=" bg-tropicalrainforest text-white text-innerInputTxt  ">
          <th rowSpan={2} className=" mb-0 h-20">
            Item
          </th>

          <th colSpan={2} className="border-l-1 border-greyBorder border-b-1">
            {" "}
            Weight(kg)
          </th>

          <th colSpan={3} className="border-l-1 border-greyBorder border-b-1">
            {" "}
            Service Brake
          </th>

          <th colSpan={2} className="border-l-1 border-greyBorder border-b-1">
            {" "}
            Secondary Brake
          </th>

          <th colSpan={3} className="border-l-1 border-greyBorder border-b-1">
            {" "}
            Parking Brake
          </th>
        </tr>

        <tr className=" bg-tropicalrainforest text-white  ">
          <th className="border-l-1 border-greyBorder"> Left </th>

          <th className="border-l-1 border-greyBorder "> Right</th>

          <th className="border-l-1 border-greyBorder"> Left(kN) </th>

          <th className="border-l-1 border-greyBorder"> Right(kN)</th>

          <th className="border-l-1 border-greyBorder"> Imb(%) </th>

          <th className="border-l-1 border-greyBorder"> Left(kN)</th>
          <th className="border-l-1 border-greyBorder">Right(kN) </th>

          <th className="border-l-1 border-greyBorder"> Left(kN) </th>
          <th className="border-l-1 border-greyBorder">Right(kN) </th>
          <th className="border-l-1 border-greyBorder"> Imb(%) </th>
        </tr>

        {tableData.map((row, index) => (
          <tr
            className={
              index % 2 === 0
                ? "border-l-1 border-lightGreen h-8"
                : "border-l-1 border-lightGreen  bg-lightGreen h-8"
            }
            key={index}
          >
            <td className="border-l-1 border-greyBorder">{row.item}</td>
            <td className="border-l-1 border-greyBorder">
              {buttonName === "Retest" ? row.weight.left : ""}
            </td>
            <td className="border-l-1 border-greyBorder">
              {buttonName === "Retest" ? row.weight.right : ""}
            </td>
            <td className="border-l-1 border-greyBorder">
              {buttonName === "Retest" ? row.serviceBrake.left : ""}
            </td>
            <td className="border-l-1 border-greyBorder">
              {buttonName === "Retest" ? row.serviceBrake.right : ""}
            </td>
            <td className="border-l-1 border-greyBorder">
              {buttonName === "Retest" ? row.serviceBrake.imb : ""}
            </td>
            <td className="border-l-1 border-greyBorder">
              {buttonName === "Retest" ? row.secondaryBrake.left : ""}
            </td>
            <td className="border-l-1 border-greyBorder">
              {buttonName === "Retest" ? row.secondaryBrake.right : ""}
            </td>
            <td className="border-l-1 border-greyBorder">
              {buttonName === "Retest" ? row.parkingBrake.left : ""}
            </td>
            <td className="border-l-1 border-greyBorder">
              {buttonName === "Retest" ? row.parkingBrake.right : ""}
            </td>
            <td className="border-l-1 border-greyBorder">
              {buttonName === "Retest" ? row.parkingBrake.imb : ""}
            </td>
          </tr>
        ))}

        <tr className="h-5">
          <td colSpan={10} className="border-l-1 border-greyBorder ">
            {" "}
          </td>
          <td className="border-l-1 border-greyBorder "></td>
        </tr>

        {tableFooter.map((row, index) => (
          <>
            <tr key={index}>
              <td
                rowSpan={3}
                className="border-l-1 border-greyBorder  bg-lightGreen"
              >
                Total
              </td>
              <td
                colSpan={2}
                className="border-l-1 border-greyBorder  bg-lightGreen h-8"
              >
                Service Brake(kN)
              </td>
              <td
                colSpan={3}
                className="border-l-1 border-greyBorder bg-lightGreen"
              >
                {buttonName === "Retest" ? row.serviceBrake : ""}
              </td>
              <td
                colSpan={2}
                className="border-l-1 border-greyBorder  bg-lightGreen "
              >
                Service Brake Efficiency(%)
              </td>
              <td
                colSpan={3}
                className="border-l-1 border-greyBorder bg-lightGreen"
              >
                {buttonName === "Retest" ? row.serviceBrakeEfficiency : ""}
              </td>
            </tr>
            <tr>
              {" "}
              <td colSpan={2}>Secondary Brake(kN)</td>
              <td colSpan={3} className="border-l-1 border-greyBorder h-8">
                {buttonName === "Retest" ? row.secondaryBrake : ""}
              </td>
              <td colSpan={2} className="border-l-1 border-greyBorder ">
                Secondary Brake Efficiency(%)
              </td>
              <td colSpan={3} className="border-l-1 border-greyBorder ">
                {buttonName === "Retest" ? row.secondaryBrakeEfficiency : ""}
              </td>
            </tr>
            <tr>
              {" "}
              <td
                colSpan={2}
                className="border-l-1 border-greyBorder bg-lightGreen "
              >
                Parking Brake
              </td>
              <td
                colSpan={3}
                className="border-l-1 border-greyBorder bg-lightGreen h-8"
              >
                {buttonName === "Retest" ? row.parkingBrake : ""}
              </td>
              <td
                colSpan={2}
                className="border-l-1 border-greyBorder  bg-lightGreen"
              >
                Parking Brake Efficiency(%)
              </td>
              <td
                colSpan={3}
                className="border-l-1 border-greyBorder  bg-lightGreen"
              >
                {buttonName === "Retest" ? row.parkingBrakeEfficiency : ""}
              </td>
            </tr>
          </>
        ))}
      </table>
      <div className=" font-calibri font-bold mt-1 ">
        <div className="flex gap-4 justify-center ">
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
            label="-"
            size="sm"
            radius="none"
            classNames={{ trigger: "h-7 min-h-6" }}
            className=" border-2 border-darkGrey mb-2 w-[15%] "
          >
            <SelectItem key={""} value={""}></SelectItem>
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
          onClick={() => setButtonName("Retest")}
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
          onClick={() => setBreakTest(true)}
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
            isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold  h-6"
              : "bg-persianGreen text-white font-calibri font-bold h-6"
          }
          isDisabled={isBtnDisable}
        >
          Recalculate Brake Rate
        </Button>
        <Button
          size="sm"
          radius="none"
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

      {BreakTest && (
        <BreakTestpopup
          BreakTest={BreakTest}
          closePopup={closePopup}
        ></BreakTestpopup>
      )}

      {showPopup && (
        <SubmissionConfirmationPopUp
          showSubmissionConfirmationPopUp={showPopup}
          setSubmissionConfirmationPopUp={setShowPopup}
          setNeedInspection={setNeedInspection}
          setSubmitted={setSubmitted}
          setIsBtnDisable={setIsBtnDisable}
          url={SAVE_BRAKE_TEST_RESULT_URL}
          data={dummyData}
          tabName={tabName}
        ></SubmissionConfirmationPopUp>
      )}
    </div>
  );
}

export default BrakeTestPage;
