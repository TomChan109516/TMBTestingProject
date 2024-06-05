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
import { useDispatch, useSelector } from "react-redux";
import { setisAccepted } from "../submissionConfirmation/state/SubmissionConfirmationSlice";
import { SAVE_UNDER_CARRIAGE_TEST_RESULT_URL } from "../../constants/urlConstants";

const tableData = [
  { id: 3, name: "Brake System" },
  { id: 4, name: "Chassis/Body Structure*" },
  { id: 8, name: "Driver cab/Bodywork*" },
  { id: 11, name: "Electric System*" },
  { id: 12, name: "Engine/Transmission" },
  { id: 13, name: "Exhaust & Attachment" },
  { id: 14, name: "Fuel System" },
  { id: 17, name: "Others" },
  { id: 21, name: "steering & Attachment" },
  { id: 22, name: "Suspension System" },
  { id: 24, name: "Tyre" },
  { id: 25, name: "Vehicle/Trailer Equipment*" },
  { id: 27, name: "Wheel/Axle Alignment*" },
  { id: 28, name: "Wheel/Hub*" },
  { id: 29, name: "Wheelguard" },
];

const tableData1 = [
  { id: 3, name: "制动系统" },
  { id: 4, name: "底盘/车身结构*" },
  { id: 8, name: "驾驶室/车身*" },
  { id: 11, name: "电气系统*" },
  { id: 12, name: "发动机/变速箱" },
  { id: 13, name: "排气和附件" },
  { id: 14, name: "燃油系统" },
  { id: 17, name: "别人" },
  { id: 21, name: "转向和附件" },
  { id: 22, name: "悬架系统" },
  { id: 24, name: "轮胎" },
  { id: 25, name: "车辆/拖车设备*" },
  { id: 27, name: "车轮/车轴定位*" },
  { id: 28, name: "车轮/轮毂*" },
  { id: 29, name: "车轮护罩" },
];

const buttons = [
  { id: 1, name: "Test Start" },
  { id: 2, name: "Save" },
  { id: 3, name: "Submit", value: "Submit" },
];

const Uci = () => {
  const [showSubmissionConfirmationPopUp, setshowSubmissionConfirmationPopUp] =
    useState(false);

  const [selectedRadio, setSelectedRadio] = useState("");

  const [needInspection, setNeedInspection] = useState("Yes");
  const [submitted, setSubmitted] = useState("No");
  const [buttonName, setButtonName] = useState("Test Start");
  const [tabName, setTabName] = useState("uci");

  const [english, setEnglish] = useState(true);
  const [chinese, setchinese] = useState(false);

  const handleEnglish = () => {
    setEnglish(true);
    setchinese(false);
  };

  const handleChinese = () => {
    setEnglish(false);
    setchinese(true);
  };

  const data = useSelector((state: any) => state.data.regdata);
  const appId = useSelector((state: any) => state.data.appointmentId);
  const stationId = JSON.parse(localStorage.getItem("station") || "{}");
  const laneId = JSON.parse(localStorage.getItem("lane") || "{}");
  const userName = useSelector(
    (state: { login: { userID: string } }) => state.login.userID
  );

  const [isBtnDisable, setIsBtnDisable] = useState(false);

  const dispatch = useDispatch();
  const { isAccepted } = useSelector(
    (state) => state.submissionConfirmation.uci
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
    undercarriageTestResultDto: {
      numFixedAxles: 0,
      numRetractAxles: 0,
      numTotalAxles: 0,
      retractAxlesPos: "",
      brakeSystemTestLevel: "",
      brakeSystemTestResult: "",
      chassisStructureTestLevel: "",
      chassisStructureTestResult: "",
      driverCabTestLevel: "",
      driverCabTestResult: "",
      eletricalSystemTestLevel: "",
      eletricalSystemTestResult: "",
      engineTestLevel: "",
      engineTestResult: "",
      exhaustAttachmentTestLevel: "",
      exhaustAttachmentTestResult: "",
      fuelSystemTestLevel: "",
      fuelSystemTestResult: "",
      otherTestLevel: "",
      otherTestResult: "",
      steeringAttachmentTestLevel: "",
      steeringAttachmentTestResult: "",
      suspensionSystemTestLevel: "",
      suspensionSystemTestResult: "",
      tyreTestLevel: "",
      tyreTestResult: "",
      vehicleEquipmentTestLevel: "",
      vehicleEquipmentTestResult: "",
      wheelAlignmentTestLevel: "",
      wheelAlignmentTestResult: "",
      wheelTestLevel: "",
      wheelTestResult: "",
      wheelguardTestLevel: "",
      wheelguardTestResult: "",
      result: selectedRadio,
      skipTestReasonId: "",
    },
  };

  const handleSubmissionConfirmationPopUp = (value) => {
    if (value === "Submit") {
      setshowSubmissionConfirmationPopUp(true);
    }
  };

  return (
    <div className="font-calibri font-bold  ">
      <div className="flex text-small justify-end mt-2 ">
        Need Inspection:
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
            className={`bg-${
              english ? "green" : "darkGrey"
            } font-bold text-white h-7 rounded w-[55%] mr-4 ml-4  font-calibri`}
            onClick={handleEnglish}
          >
            ENG
          </Button>
          <Button
            size="sm"
            className={`bg-${
              chinese ? "green" : "darkGrey"
            } font-bold text-white h-7 rounded w-[55%] font-calibri`}
            radius="none"
            onClick={handleChinese}
          >
            中文
          </Button>
        </div>

        <div className="flex  mt-4">
          <Checkbox radius="none" size="sm" defaultSelected={false}>
            Show Failed UCI Items Only
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

      <div className="flex flex-row mt-2 ">
        <div className="flex  ">
          <span className="mr-2 ml-5 text-small mt-3 w-[100%] ">
            Total no. of fixed axles
          </span>{" "}
          <input
            type="text"
            id="Wheel Span"
            name="Wheel Span"
            className="w-[100%] md:w-[236px] lg:w-[160px] xl:w-[130px] h-8 mt-2 border-1.5 border-darkGrey bg-insideInput p-1 rounded-none"
          />
        </div>
        <div className="flex   ">
          <span className="mr-2 ml-2 text-small w-[120%]  mt-3">
            Total no. of Retrackable axles
          </span>{" "}
          <input
            type="text"
            id="Wheel Span"
            name="Wheel Span"
            className="w-[100%]  md:w-[236px] lg:w-[160px] xl:w-[130px] h-8 mt-2 border-1.5 border-darkGrey  bg-insideInput p-1"
          />
        </div>
        <div className="flex  ">
          <span className="mr-2 ml-2 w-[60%] text-small mt-3">
            Total no. axles
          </span>{" "}
          <input
            type="text"
            id="Wheel Span"
            name="Wheel Span"
            className="w-[100%] md:w-[236px] lg:w-[160px] xl:w-[130px] h-8 mt-2 border-1.5 border-darkGrey  bg-insideInput p-1"
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
      <div className=" h-[300px] overflow-y-scroll overflow-x-clip mb-4">
        <table className=" border-1 border-tropicalrainforest mt-2 mb-8 w-[98%] justify-end text-inputTxt font-calibri font-bold mr-4 ml-4 ">
          <tr className=" bg-tropicalrainforest text-white text-innerInputTxt ">
            <th className="border-l-1 mb-0 h-8 border-greyBorder border-b-1 w-12">
              Code
            </th>
            <th className="border-l-1 border-greyBorder border-b-1 w-[40%]">
              Description
            </th>
            <th className="border-l-1 border-greyBorder border-b-1 w-12 ">F</th>
            <th className="border-l-1 border-greyBorder border-b-1 w-12 ">
              N/S
            </th>
            <th className="border-l-1 border-greyBorder border-b-1 w-12 ">
              O/S
            </th>
            <th className="border-l-1 border-greyBorder border-b-1 w-12 ">R</th>
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
          {english &&
            tableData.map((item) => (
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
                    <SelectItem key={2}>Data</SelectItem>
                  </Select>
                </td>
              </tr>
            ))}

          {chinese &&
            tableData1.map((item) => (
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
                    <SelectItem key={2}>Data</SelectItem>
                  </Select>
                </td>
              </tr>
            ))}
        </table>
      </div>

      <div className="flex gap-4 justify-center font-calibri font-bold ">
        <RadioGroup
          orientation="horizontal"
          className="ml-4 mt-1"
          onValueChange={onRadioButtonChange}
          value={selectedRadio}
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

      <div className="flex flex-row items-center justify-center">
        {buttons.map((button) =>
          button.name == "Test Start" ? (
            <Button
              radius="none"
              className={
                isBtnDisable
                  ? "bg-darkGrey text-white m-3  h-6"
                  : "bg-persianGreen text-white m-3  h-6"
              }
              onClick={() => setButtonName("Retest")}
              isDisabled={isBtnDisable}
            >
              {buttonName}
            </Button>
          ) : (
            <Button
              key={button.id}
              className={` ${
                (button.value === "Submit" && !selectedRadio) || isBtnDisable
                  ? "bg-darkGrey"
                  : "bg-persianGreen"
              } text-white m-3  h-6`}
              radius="none"
              data-testid={button.name}
              onClick={() => handleSubmissionConfirmationPopUp(button.name)}
              isDisabled={
                (button.value === "Submit" && !selectedRadio) || isBtnDisable
              }
            >
              {button.name}
            </Button>
          )
        )}
      </div>

      {showSubmissionConfirmationPopUp && (
        <SubmissionConfirmationPopUp
          showSubmissionConfirmationPopUp={showSubmissionConfirmationPopUp}
          setSubmissionConfirmationPopUp={setshowSubmissionConfirmationPopUp}
          setNeedInspection={setNeedInspection}
          setSubmitted={setSubmitted}
          setIsBtnDisable={setIsBtnDisable}
          url={SAVE_UNDER_CARRIAGE_TEST_RESULT_URL}
          data={dummyData}
          tabName={tabName}
        ></SubmissionConfirmationPopUp>
      )}
    </div>
  );
};

export default Uci;
