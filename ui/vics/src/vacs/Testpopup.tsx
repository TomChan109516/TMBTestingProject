import React, { useEffect, useState } from "react";
import {
  Textarea,
  Button,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import { InfoCircle } from "tabler-icons-react";
import SubmissionConfirmationPopUp from "../vehicleRegistration/submissionConfirmation/SubmissionConfirmationPopUp";
import { SAVE_TILTING_TEST_RESULT_URL } from "../constants/urlConstants";
import { useDispatch, useSelector } from "react-redux";
import { setisAccepted } from "../vehicleRegistration/submissionConfirmation/state/SubmissionConfirmationSlice";
import { getAppointmentDetails } from "../login/service/login.service";
import { saveLoader } from "../login/state/loginSlice";
import { getalltestresult } from "./service/getAllTestResult";
import { setUnConfirmedListVehicleTableData } from "./state/InspectionDataSlice";

function Testpopup({ setTestPopup }) {
  const dispatch = useDispatch();
  const [MemoPopup, setMemoPopup] = React.useState(false);
  const [showdata, setShowdata] = useState(" ");
  const [isdisable, setIsdisable] = useState(false);
  const testPopupData = JSON.parse(
    localStorage.getItem("testPopupData") || "{}"
  );
  const [tiltAngle, setTiltAngle] = useState(testPopupData?.tiltAngle);
  const [remark, setRemark] = useState(testPopupData?.remark);
  const [result, setResult] = useState(testPopupData?.result);
  const [needInspection, setNeedInspection] = useState("Yes");
  const [submitted, setSubmitted] = useState("No");
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState(testPopupData?.result);

  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [tabName, setTabName] = useState("inspection");

  const { isAccepted } = useSelector(
    (state: any) => state.submissionConfirmation.inspection
  );

  const unConfirmedListVehicleData = useSelector(
    (state: any) => state.inspectionData.unConfirmedListVehicleData
  );

  const inspectionId = useSelector((state: any) => state.data.regdata);

  const saveTiltingtestResultPayload = {
    testDto: {
      inspectionId: inspectionId?.inspectionId,
      userId: unConfirmedListVehicleData.userId,
      // unConfirmedListVehicleData.station || "A"
      stationId: "",
      laneId: unConfirmedListVehicleData.laneId,
      mode: "",
      attempt: 0,
      testStartTime: "2024-04-03T06:40:02.515Z",
      testEndTime: "2024-04-03T06:40:02.515Z",
      skipTestFollowUpAction: "",
      abortSuspendTestReasonId: "",
      abortTestRemark: "",
      remark: "",
      appointmentId: unConfirmedListVehicleData.appointmentId,
    },

    tiltingTestResultDto: {
      remark: remark,
      result: selectedRadio,
      skipTestReasonId: "",
    },
  };

  useEffect(() => {
    const data = {
      tiltAngle: "",
      remark: "",
      result: "",
    };
    if (!localStorage.getItem("testPopupData")) {
      localStorage.setItem("testPopupData", JSON.stringify(data));
    }
  }, []);

  useEffect(() => {
    if (navigator.onLine) {
      setShowdata(" ");
      setIsdisable(false);
    } else {
      setShowdata("No Wifi");
      setIsdisable(true);
    }
    window.addEventListener("offline", function (e) {
      setShowdata("No Wifi");
      setIsdisable(true);
    });
    window.addEventListener("online", function (e) {
      setShowdata(" ");
      setIsdisable(false);
    });
  }, []);

  const openMemo = () => {
    setMemoPopup(true);
  };
  const handleSave = () => {
    const data = {
      tiltAngle,
      remark,
      result,
    };
    localStorage.setItem("testPopupData", JSON.stringify(data));
  };

  const handleClick = () => {
    setShowSubmitPopup(true);
  };

  const onRadioButtonChange = (value: string) => {
    dispatch(setisAccepted({ [tabName]: { isAccepted: false } }));
    setIsBtnDisable(false);
    setResult(value);
    setSelectedRadio(value);
  };

  const handleBackToUnconfirmedList = async () => {
    try {
      if (isdisable) {
        return setTestPopup(false);
      }
      dispatch(saveLoader(true));

      const testResultResponse = await getalltestresult(
        inspectionId?.inspectionId
      );

      dispatch(saveLoader(false));
      dispatch(setUnConfirmedListVehicleTableData(testResultResponse));
      const data = {
        tiltAngle: "",
        remark: "",
        result: "",
      };
      localStorage.setItem("testPopupData", JSON.stringify(data));
      setTiltAngle("");
      setRemark("");
      setResult("");
      setSelectedRadio("");
      setTestPopup(false);
    } catch (error) {
      dispatch(setUnConfirmedListVehicleTableData({}));
      dispatch(saveLoader(false));
    }
  };

  return (
    <>
      <div className="flex mt-2 ">
        <div className="flex flex-row pt-2 ml-14 ">
          <div className="font-bold text-small">
            Separate Test: Tilting Stability Test
          </div>
        </div>

        <div className="flex flex-row pt-2 ml-[67%] text-end">
          <div className="font-bold text-small">Submitted:</div>

          <div
            className={
              submitted === "No"
                ? "font-bold text-small  text-red ml-4 "
                : "font-bold text-small text-persianGreen ml-4 "
            }
          >
            {submitted}
          </div>
        </div>
      </div>
      <div className="flex pt-4 ">
        <div className="flex flex-row pt-1 ml-14 ">
          <div className="text-small text-black font-bold mt-1 ">
            Tilting angle
          </div>
        </div>
        <div className=" w-[12%] text-black ml-11">
          <Input
            id="standard-basic"
            radius="none"
            variant="bordered"
            size="sm"
            value={tiltAngle}
            onChange={(e) => setTiltAngle(e.target.value)}
            isDisabled={isBtnDisable}
          />
        </div>
      </div>
      <div className="flex flex-row pt-2">
        <span className="text-[13px] text-black font-bold  mt-64 pl-1 md:w-[18%] lg:w-[16%] xl:w-[13%]">
          Remark
        </span>
        <span className="text-xs text-black text-left ml-2  border-[2px] border-[#d3dcda] rounded-sm ">
          <Textarea
            placeholder=""
            radius="none"
            disableAnimation
            disableAutosize
            variant="bordered"
            classNames={{
              input: "resize-y min-h-[250px] md:w-[1000px] xm:w-[984px]  ",
            }}
            isDisabled={isBtnDisable}
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </span>
      </div>
      <div className="flex flex-row justify-center mt-4 mb-5 ml-2">
        <div className="flex justify-center items-center text-[13px] text-black font-bold ml-32">
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
        <div className=" flex ml-6 items-center font-bold text-small">
          Skip Test Reason
          <Select
            labelPlacement="outside-left"
            radius="none"
            size="sm"
            variant="bordered"
            className="ml-2 bg-lightGrey border-greyBorder w-44 rounded-sm h-1 mb-6"
          >
            <SelectItem key={1}>-</SelectItem>
          </Select>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-4 ">
        <Button
          className={
            isBtnDisable
              ? "bg-darkGrey  text-white font-calibri rounded-sm ml-80 mt-3 float-right"
              : `bg-persianGreen  text-white font-calibri rounded-sm ml-80 mt-3 float-right`
          }
          variant="bordered"
          size="sm"
          onClick={handleSave}
          isDisabled={isBtnDisable}
        >
          Save
        </Button>
        <Button
          size="sm"
          radius="none"
          className={
            selectedRadio === undefined ||
            selectedRadio === "" ||
            isdisable ||
            tiltAngle === undefined ||
            tiltAngle === "" ||
            remark === undefined ||
            remark === "" ||
            isBtnDisable
              ? "bg-darkGrey text-white font-calibri font-bold   rounded-sm ml-16 mr-5 mt-3 float-right"
              : "bg-persianGreen text-white font-calibri font-bold  rounded-sm ml-16 mr-5 mt-3 float-right"
          }
          onClick={handleClick}
          isDisabled={
            selectedRadio === undefined ||
            selectedRadio === "" ||
            isdisable ||
            tiltAngle === undefined ||
            tiltAngle === "" ||
            remark === undefined ||
            remark === "" ||
            isBtnDisable
          }
        >
          Submit
        </Button>

        <div className="text-red  mt-4 text-small font-calibri font-bold flex">
          {showdata === "No Wifi" && <InfoCircle className="text-red  mr-1" />}
          {showdata}
        </div>

        <div className="mb-5">
          <Button
            size="sm"
            className=" bg-persianGreen text-white font-bold rounded-sm ml-16 mr-32 mt-3 float-right"
            type="submit"
            onClick={handleBackToUnconfirmedList}
          >
            Back to Unconfirmed List
          </Button>
        </div>
      </div>
      {showSubmitPopup && (
        <SubmissionConfirmationPopUp
          showSubmissionConfirmationPopUp={showSubmitPopup}
          setSubmissionConfirmationPopUp={setShowSubmitPopup}
          setNeedInspection={setNeedInspection}
          setSubmitted={setSubmitted}
          setIsBtnDisable={setIsBtnDisable}
          url={SAVE_TILTING_TEST_RESULT_URL}
          data={saveTiltingtestResultPayload}
          tabName={tabName}
        ></SubmissionConfirmationPopUp>
      )}
    </>
  );
}

export default Testpopup;
