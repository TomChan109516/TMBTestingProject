import { Button, Select, SelectItem } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ReportGenerationPopup from "./ReportGenerationPopup";
import DefectlistConfigPopup from "./DefectlistConfigPopup";
import FinalResultConfirmationPopup from "./FinalResultConfirmationPopup";
import ReportGeneration from "./ReportGeneration";
import { saveLoader } from "../../login/state/loginSlice";
import { getOverallService } from "./service/overallReport.service";
import { SAVE_ALL_TEST_RESULT_URL } from "../../constants/urlConstants";
import WarningPopUp from "./WarningPopUp";
import RemoteAuthorization from "./RemoteAuthorizations";
import { IconChevronsDown } from "@tabler/icons-react";
import { IconChevronsRight } from "@tabler/icons-react";
import FinalVerificationOfVehicle from "../finalVerificationOfVehicle/FinalVerificationOfVehicle";
import UnconfirmedNewListPopUp from "../UnconfirmedListNew/UnconfirmedListNew";


function ResultVerification() {

  const [showUnconfirmedNewListPopUp, setshowUnconfirmedNewListPopUp] = useState(false);
  const handleUnconfirmedNewListPopUp = () => {
    setshowUnconfirmedNewListPopUp(true);
  };
  const closeUnconfirmedNewListPopUp = (val) => {
    setshowUnconfirmedNewListPopUp(val);
  };
  const dispatch = useDispatch();
  const [showReportGenerationPopup, setshowReportGenerationPopup] =
    useState(false);
  const [confirm, setConfirm] = useState(false);
  const [showDefectlistConfigPopup, setshowDefectlistConfigPopup] =
    useState(false);
  const [
    showFinalResultConfirmationPopup,
    setshowFinalResultConfirmationPopup,
  ] = useState(false);

  const [showWarningPopUp, setShowWarningPopUp] = useState(false);

  const [remoteAuthorizationPopup, setRemoteAuthorizationPopup] =
    useState(false);
  const remoteAuthorizationPopupOpen = () => {
    setRemoteAuthorizationPopup(true);
  };

  const [iconDown, setIcondown] = useState(false);

  const [PFresult] = useState([
    { P: "P", value: "P" },
    { F: "F", value: "F" },
  ]);
  const [resultStars, setResultStars] = useState({
    ohmstar: false,
    headlampResultstar: false,
    visualResultstar: false,
    brakeResultstar: false,
    exhaustResultstar: false,
    speedometerResultstar: false,
    underCarriageResultstar: false,
  });

  const [finalResult, setFinalResult] = useState(false);

  const handleReportGenerationPopup = (data) => {
    setshowReportGenerationPopup(data);
  };

  const handleDefectlistConfigPopup = (data) => {
    setshowDefectlistConfigPopup(data);
    handleReportGenerationPopup(false);
  };
  const appointmentDetails = useSelector((state: any) => state.data.regdata);
  const appointmentDetailsLength = Object.keys(appointmentDetails).length;
  const [tableData, settableData] = useState({});
  const [getoverallResultData, setGetoverallResult] = useState({});

  useEffect(() => {
    if (appointmentDetailsLength !== 0) {
      getOverallResult();
    } else {
      settableData("");
      setResultStars((prevState) => ({
        ...prevState,
        ohmstar: false,
        headlampResultstar: false,
        visualResultstar: false,
        brakeResultstar: false,
        exhaustResultstar: false,
        speedometerResultstar: false,
        underCarriageResultstar: false,
      }));
    }
  }, [appointmentDetails, appointmentDetailsLength]);

  const handleFinalResultConfirmationPopup = (data) => {
    setshowFinalResultConfirmationPopup(data);
    handleDefectlistConfigPopup(false);
  };

  const getOverallResult = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getOverallService(appointmentDetails.inspectionId); // Remove the argument from the function call
      setGetoverallResult(response);
      settableData(response);
      dispatch(saveLoader(false));
    } catch (AxiosError) {
      dispatch(saveLoader(false));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "ohmResult") {
      setResultStars((prevState) => ({
        ...prevState,
        ohmstar: value !== getoverallResultData?.ohmResult,
      }));
    } else if (name === "headlampResult") {
      setResultStars((prevState) => ({
        ...prevState,
        headlampResultstar: value !== getoverallResultData?.headlampResult,
      }));
    } else if (name === "visualResult") {
      setResultStars((prevState) => ({
        ...prevState,
        visualResultstar: value !== getoverallResultData?.visualResult,
      }));
    } else if (name === "brakeResult") {
      setResultStars((prevState) => ({
        ...prevState,
        brakeResultstar: value !== getoverallResultData?.brakeResult,
      }));
    } else if (name === "exhaustResult") {
      setResultStars((prevState) => ({
        ...prevState,
        exhaustResultstar: value !== getoverallResultData?.exhaustResult,
      }));
    } else if (name === "speedometerResult") {
      setResultStars((prevState) => ({
        ...prevState,
        speedometerResultstar:
          value !== getoverallResultData?.speedometerResult,
      }));
    } else if (name === "underCarriageResult") {
      setResultStars((prevState) => ({
        ...prevState,
        underCarriageResultstar:
          value !== getoverallResultData?.underCarriageResult,
      }));
    }
    settableData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUnConfirmedList = () => {
    setShowWarningPopUp(true);
  };

  const closeWarningPopUp = (val) => {
    setShowWarningPopUp(val);
  };

  const saveAllResultData = {
    inspectionId: appointmentDetails.inspectionId,
    ohmResult: tableData?.ohmResult,
    ohmTestId: tableData?.ohmTestId,
    headlampResult: tableData?.headlampResult,
    headlampTestId: tableData?.headlampTestId,
    axleWeightResult: tableData?.axleWeightResult,
    axleWeightTestId: tableData?.axleWeightTestId,
    visualResult: tableData?.visualResult,
    visualTestId: tableData?.visualTestId,
    brakeResult: tableData?.brakeResult,
    brakeTestId: tableData?.brakeTestId,
    speedometerResult: tableData?.speedometerResult,
    speedometerTestId: tableData?.speedometerTestId,
    taximeterResult: tableData?.taximeterResult,
    taximeterTestId: tableData?.taximeterTestId,
    underCarriageResult: tableData?.underCarriageResult,
    underCarriageTestId: tableData?.underCarriageTestId,
    exhaustResult: tableData?.exhaustResult,
    exhaustTestId: tableData?.exhaustTestId,
  };

  function setIconright(arg0: boolean) {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="flex items-stretch w-[100%] gap-y-0">
        <div className=" flex w-[100%] -ml-3 -mr-[130px]">
          <Table
            radius="none"
            className="bg-white flex  font-calibri"
            shadow="none"
          >
            <TableHeader className=" bg-persianGreen  font-[Calibir]  text-center  font-bold text-inputTxt ">
              <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
                <div className="text-small"></div>
                <div className="-10 ... absolute top-[10%] mr-1 -ml-1 left-0">
                  <Button
                    data-testid="rs-confirm-close-button"
                    className="bg-green absolute-left font-bold first:rounded-none -top-6 last:rounded-md text-white h-8  rounded-right  w-[100%]"
                    radius="none"
                    onPress={remoteAuthorizationPopupOpen}
                  >
                    <p className="  w-4 h-4 ml-2 text-center text-white rounded-full bg-red">
                      4
                    </p>
                    <p className="bg-green col-span-2  text-white  justify-right">
                      <p>
                        <IconChevronsRight
                          size={25}
                          color="white"
                          onClick={() => setIconright(true)}
                        />
                      </p>
                    </p>
                  </Button>
                </div>
              </TableColumn>
              <TableColumn className="bg-green text-white   font-[Calibir]  text-sm   text-center    font-bold border-1 border-greyBorder">
                <div className="text-small">OHM</div>
              </TableColumn>
              <TableColumn className="bg-green text-white      text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
                <div className="text-small">VI</div>
              </TableColumn>
              <TableColumn className="bg-green text-white    text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
                <div className="text-small">Brake</div>
              </TableColumn>
              <TableColumn className=" bg-green font-[Calibir]  first:rounded-none last:rounded-none text-sm text-white    text-center    font-bold border-1 border-greyBorder">
                <div className="text-small">HT</div>
              </TableColumn>
              <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
                <div className="text-small">Exhaust</div>
              </TableColumn>
              <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
                <div className="text-small">Speed.</div>
              </TableColumn>
              <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
                <div className="text-small">UCI</div>
              </TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1" className=" mb-2 bg-white text-innerInputTxt ">
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder text-inputTxt ">
                  <b>Result</b>
                </TableCell>

                <TableCell
                  className="h-10  p-[3px] border-1 border-greyBorder text-inputTxt "
                  data-testid="ohmResultInput"
                >
                  <b className="text-innerInputTxt">
                    {tableData?.ohmResult === "P"
                      ? "PASS"
                      : tableData?.ohmResult === "F"
                        ? "FAIL"
                        : ""}
                  </b>
                  {resultStars.ohmstar == true ? <span>*</span> : ""}
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <b className="text-innerInputTxt">
                    {tableData?.visualResult === "P"
                      ? "PASS"
                      : tableData?.visualResult === "F"
                        ? "FAIL"
                        : ""}
                  </b>
                  {resultStars.visualResultstar == true ? <span>*</span> : ""}
                </TableCell>

                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <b className="text-innerInputTxt">
                    {tableData?.brakeResult === "P"
                      ? "PASS"
                      : tableData?.brakeResult === "F"
                        ? "FAIL"
                        : ""}
                  </b>
                  {resultStars.brakeResultstar == true ? <span>*</span> : ""}
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <b className="text-innerInputTxt">
                    {tableData?.headlampResult === "P"
                      ? "PASS"
                      : tableData?.headlampResult === "F"
                        ? "FAIL"
                        : ""}
                  </b>
                  {resultStars.headlampResultstar == true ? <span>*</span> : ""}
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  {" "}
                  <b className="text-innerInputTxt">
                    {tableData?.exhaustResult === "P"
                      ? "PASS"
                      : tableData?.exhaustResult === "F"
                        ? "FAIL"
                        : ""}
                  </b>
                  {resultStars.exhaustResultstar == true ? <span>*</span> : ""}
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  {" "}
                  <b className="text-innerInputTxt">
                    {tableData?.speedometerResult === "P"
                      ? "PASS"
                      : tableData?.speedometerResult === "F"
                        ? "FAIL"
                        : ""}
                  </b>
                  {resultStars.speedometerResultstar == true ? (
                    <span>*</span>
                  ) : (
                    ""
                  )}
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <b className="text-innerInputTxt">
                    {tableData?.underCarriageResult === "P"
                      ? "PASS"
                      : tableData?.underCarriageResult === "F"
                        ? "FAIL"
                        : ""}
                  </b>
                  {resultStars.underCarriageResultstar == true ? (
                    <span>*</span>
                  ) : (
                    ""
                  )}
                </TableCell>
              </TableRow>
              <TableRow
                key="2"
                className="bg-[#e8fbf5] border-1 border-greyBorder"
              >
                <TableCell className="h-10   p-[3px]">
                  <b>Ctr Rm</b>
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <Select
                    placeholder={tableData?.ohmResult}
                    labelPlacement="outside-left"
                    size="sm"
                    name="ohmResult"
                    radius="none"
                    aria-label="ohmResult"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                    onChange={handleChange}
                  >
                    {PFresult.map((item) => (
                      <SelectItem key={item.value} value={tableData?.ohmResult}>
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <Select
                    placeholder={tableData?.visualResult}
                    labelPlacement="outside-left"
                    size="sm"
                    name="visualResult"
                    radius="none"
                    aria-label="visualResult"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                    onChange={handleChange}
                  >
                    {PFresult.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={tableData?.visualResult}
                      >
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <Select
                    placeholder={tableData?.brakeResult}
                    labelPlacement="outside-left"
                    size="sm"
                    name="brakeResult"
                    radius="none"
                    aria-label="brakeResult"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                    onChange={handleChange}
                  >
                    {PFresult.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={tableData?.brakeResult}
                      >
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <Select
                    placeholder={tableData?.headlampResult}
                    labelPlacement="outside-left"
                    size="sm"
                    name="headlampResult"
                    radius="none"
                    aria-label="headlampResult"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                    onChange={handleChange}
                  >
                    {PFresult.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={tableData?.headlampResult}
                      >
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <Select
                    placeholder={tableData?.exhaustResult}
                    labelPlacement="outside-left"
                    size="sm"
                    name="exhaustResult"
                    radius="none"
                    aria-label="exhaustResult"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                    onChange={handleChange}
                  >
                    {PFresult.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={tableData?.exhaustResult}
                      >
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <Select
                    placeholder={tableData?.speedometerResult}
                    labelPlacement="outside-left"
                    size="sm"
                    name="speedometerResult"
                    radius="none"
                    aria-label="speedometerResult"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                    onChange={handleChange}
                  >
                    {PFresult.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={tableData?.speedometerResult}
                      >
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                </TableCell>

                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <Select
                    placeholder={tableData?.underCarriageResult}
                    labelPlacement="outside-left"
                    size="sm"
                    name="underCarriageResult"
                    radius="none"
                    aria-label="underCarriageResult"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                    onChange={handleChange}
                  >
                    {PFresult.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={tableData?.underCarriageResult}
                      >
                        {item.value}
                      </SelectItem>
                    ))}
                  </Select>
                </TableCell>
              </TableRow>
              <TableRow
                key="3"
                className="bg-white   border-1 border-greyBorder "
              >
                <TableCell className="h-10  p-[3px] font-bold   border-1 border-greyBorder">
                  <b className=" text-innerInputTxt">Tester</b>
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                    {appointmentDetailsLength !== 0 && "VT1"}
                  </p>
                </TableCell>
                <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                  <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                    {appointmentDetailsLength !== 0 && "VT1"}
                  </p>
                </TableCell>
                <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                  <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                    {appointmentDetailsLength !== 0 && "VT1"}
                  </p>
                </TableCell>
                <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                  <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                    {appointmentDetailsLength !== 0 && "VT1"}
                  </p>
                </TableCell>
                <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                  <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                    {appointmentDetailsLength !== 0 && "VT1"}
                  </p>
                </TableCell>
                <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                  <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                    {appointmentDetailsLength !== 0 && "VT1"}
                  </p>
                </TableCell>
                <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                  <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                    {appointmentDetailsLength !== 0 && "VT1"}
                  </p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className=" text-right mt-3 ">
          <div className="">
            <span className="text-red  font-bold text-inputTxt">Overall</span>
            <Select
              placeholder="PASS"
              labelPlacement="outside-left"
              size="sm"
              radius="none"
              name="center"
              aria-label="center"
              variant="bordered"
              className="w-[100px] ml-5 bg-lightGrey rounded-md "
            >
              <SelectItem key={""}>PASS</SelectItem>
              <SelectItem key={""}>FAIL</SelectItem>
            </Select>
          </div>
          <div>
            <Button
              size="sm"
              className={`bg-${finalResult ? "red" : "persianGreen"
                } font-bold text-white h-8 rounded w-[55%]`}
              radius="none"
              onClick={() => handleReportGenerationPopup(true)}
              data-testid="ConfirmFinalResult"
            >
              {finalResult ? "Amend" : "Confirm"} Final Result
            </Button>
            <Button
              size="sm"
              className="bg-persianGreen font-bold text-white h-8  rounded  w-[55%]       "
              radius="none"
              onClick={handleUnConfirmedList}
            >
              Add to Unconfirmed List
            </Button>
            <Button
              size="sm"
              className="bg-persianGreen font-bold text-white h-8 rounded w-[55%] "
              radius="none"
              onClick={handleUnconfirmedNewListPopUp}
            >
              Retreive Unconfirmed list
            </Button>
          </div>
        </div>
      </div>
      {iconDown ? (
        <FinalVerificationOfVehicle setIcondown={setIcondown} />
      ) : (
        <Table
          radius="none"
          className="bg-white  ml-[-14px] flex mr-6 font-calibri w-[60%] xl:w-[82%]"
          shadow="none"
        >
          <TableHeader className=" bg-persianGreen  font-[Calibir]  text-start  font-bold text-inputTxt h-4 ">
            <TableColumn className=" bg-green font-[Calibir] first:rounded-none text-start last:rounded-none text-sm text-white     font-bold border-1 border-greyBorder ">
              <div className="text-small text-start flex flex-row ">
                <span>Separate</span>
                <span>
                  <IconChevronsDown
                    size={25}
                    color="white"
                    onClick={() => setIcondown(true)}
                  />
                </span>
              </div>
            </TableColumn>

            <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder w-10  ">
              <div className="text-small  text-start flex flex-row ">
                <span>Dyno Test</span>
                <span>
                  <IconChevronsDown
                    size={25}
                    color="white"
                    onClick={() => setIcondown(true)}
                  />
                </span>
              </div>
            </TableColumn>
          </TableHeader>
          <TableBody children={undefined}></TableBody>
        </Table>
      )}
      {confirm ? (
        <ReportGeneration />
      ) : (
        <div className="w-[100%]   text-innerInputTxt  ">
          <div className=" ml-1   font-calibri font-bold ">
            <h1 className="border- border-dotted border-greyBorder">
              <h5 className="absolute-top mt-1 start-3 pl-[10px] pr-[10px] font-bold text-sm font-calibri  text-red">
                VI
              </h5>

              <div className="flex justify-start items-center mt-2 ml-4 mb-2">
                Failed Items:
                <Button
                  size="sm"
                  className="bg-persianGreen font-bold text-white h-5  rounded ml-[88%] "
                  radius="none"
                >
                  Modify
                </Button>
              </div>
            </h1>
          </div>
          <div className="  ml-1  mt-2 font-calibri font-bold ">
            <h1 className="border- border-dotted border-greyBorder">
              <h5 className="absolute-top mt-1 start-3 pl-[10px] pr-[10px] font-bold text-sm font-[Calibri] text-red">
                UCI
              </h5>

              <div className="flex justify-start items-center mt-2 ml-4 mb-2">
                Failed Items:
                <Button
                  size="sm"
                  className="bg-persianGreen font-bold text-white h-5  rounded ml-[88%] "
                  radius="none"
                >
                  Modify
                </Button>
              </div>
            </h1>
          </div>

          <div className=" ml-1  mt-2">
            <h1 className="border- border-dotted border-greyBorder">
              <h5 className="absolute-top mt-1 start-3 pl-[10px] pr-[10px] font-bold text-sm font-[Calibri] text-red">
                OHM
              </h5>

              <div className="flex flex-row mt-1 ml-2 mb-2 font-calibri font-bold ">
                <div className="flex justify-center  w-[30%]">
                  <span className=" mt-1 ml-16">Vehicle Length</span>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder=""
                      id="Wheel Span"
                      name="Wheel Span"
                      data-testid="input"
                      className="w-[80%]  h-6 mt-1 ml-7 mr-2 border-1.5 border-darkGrey rounded-s bg-lightGrey p-2"
                    />
                    <span className="w-[39%]  mt-1">mm</span>
                  </div>
                </div>
                <div className="flex justify-center w-[33.3%]">
                  <span className="w-[28%] mt-1 ml-16">Vehicle Width</span>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder=""
                      id="Wheel Span"
                      name="Wheel Span"
                      className="w-[60%]  h-6 mt-1 ml-5 mr-1 border-1.5 border-darkGrey rounded-s bg-lightGrey p-2"
                    />
                    <span className="w-[40%]  mt-1">mm</span>
                  </div>
                </div>
                <div className="flex justify-center w-[33.3%]">
                  <span className="w-[42%] mt-1">Vehicle Height</span>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder=""
                      id="Wheel Span"
                      name="Wheel Span"
                      className="w-[60%]  h-6 mt-1 ml-2 mr-2 border-1.5 border-darkGrey rounded-s bg-lightGrey p-2"
                    />
                    <span className="w-[40%]  mt-1">mm</span>
                  </div>
                </div>
              </div>
            </h1>
          </div>
          <div className="  ml-1 mr-2 mt-2">
            <h1 className="border- border-dotted border-greyBorder">
              <h5 className="absolute-top mt-1 start-3 pl-[10px] pr-[10px] font-bold text-sm font-[Calibri] text-red">
                EDRD
              </h5>

              <div className="flex flex-row mt-1 ml-2 mb-2 font-calibri font-bold ">
                <div className="flex justify-center w-[30%]">
                  <span className="w-[36%] mt-1 ml-4">Serial Number</span>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder=""
                      id="Wheel Span"
                      name="Wheel Span"
                      className="w-[74%]  h-6 mt-1 ml- mr-2 border-1.5 border-darkGrey rounded-s bg-lightGrey p-2"
                    />
                  </div>
                </div>
                <div className="flex justify-center w-[33.3%]">
                  <span className="w-[42%] mt-1 mr-1">EDRD Make & Model</span>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder=""
                      id="Wheel Span"
                      name="Wheel Span"
                      className="w-[62%]  h-6 mt-1 ml-2 mr-2 border-1.5 border-darkGrey rounded-s bg-lightGrey p-2"
                    />
                  </div>
                </div>
              </div>
            </h1>
          </div>
          <div className="  ml-1 mr-2 mt-2">
            <h1 className="border- border-dotted border-greyBorder">
              <h5 className="absolute-top mt-1 start-3 pl-[10px] pr-[10px] font-bold text-sm font-[Calibri] text-red">
                Speedometer
              </h5>

              <div className="flex flex-row mt-1  mb-2 font-calibri font-bold ">
                <div className="flex justify-center w-[30%]">
                  <span className="w-[40%] mt-1">Testing Speed (km/h)</span>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder=""
                      id="Wheel Span"
                      name="Wheel Span"
                      className="w-[69%]  h-6 mt-1 ml-3 mr-2 border-1.5 border-darkGrey rounded-s bg-lightGrey p-2"
                    />
                  </div>
                </div>
                <div className="flex justify-center w-[33.3%]">
                  <span className="w-[42%] mt-1 mr-3">
                    Measured Speed (km/h)
                  </span>
                  <div className="flex flex-row">
                    <input
                      type="text"
                      placeholder=""
                      id="Wheel Span"
                      name="Wheel Span"
                      className="w-[62%]  h-6 mt-1 ml-2 mr-2 border-1.5 border-darkGrey rounded-s bg-lightGrey p-2"
                    />
                  </div>
                </div>
              </div>
            </h1>
          </div>
        </div>
      )}
      {showUnconfirmedNewListPopUp && (
        <UnconfirmedNewListPopUp
          showUnconfirmedNewListPopUp ={showUnconfirmedNewListPopUp }
          closeUnconfirmedNewListPopUp ={closeUnconfirmedNewListPopUp }
        ></UnconfirmedNewListPopUp>
      )}
      {showReportGenerationPopup && (
        <ReportGenerationPopup
          showReportGenerationPopup={showReportGenerationPopup}
          handleDefectlistConfigPopup={(data) =>
            handleDefectlistConfigPopup(data)
          }
          confirm={confirm}
          setConfirm={setConfirm}
          setFinalResult={setFinalResult}
        ></ReportGenerationPopup>
      )}

      {showDefectlistConfigPopup && (
        <DefectlistConfigPopup
          showDefectlistConfigPopup={showDefectlistConfigPopup}
          handleDefectlistConfigPopup={(data) =>
            handleDefectlistConfigPopup(data)
          }
          handleFinalResultConfirmationPopup={() =>
            handleFinalResultConfirmationPopup(true)
          }
          confirm={confirm}
          setConfirm={setConfirm}
          setFinalResult={setFinalResult}
        ></DefectlistConfigPopup>
      )}

      {showFinalResultConfirmationPopup && (
        <FinalResultConfirmationPopup
          showFinalResultConfirmationPopup={showFinalResultConfirmationPopup}
          setshowFinalResultConfirmationPopup={
            setshowFinalResultConfirmationPopup
          }
          handleFinalResultConfirmationPopup={(data) =>
            handleFinalResultConfirmationPopup(data)
          }
          confirm={confirm}
          setConfirm={setConfirm}
          data={saveAllResultData}
          url={SAVE_ALL_TEST_RESULT_URL}
          finalResult={finalResult}
          setFinalResult={setFinalResult}
        ></FinalResultConfirmationPopup>
      )}

      {showWarningPopUp && (
        <WarningPopUp
          showWarningPopUp={showWarningPopUp}
          closeWarningPopUp={closeWarningPopUp}
        ></WarningPopUp>
      )}

      {remoteAuthorizationPopup && (
        <RemoteAuthorization
          remoteAuthorizationPopup={remoteAuthorizationPopup}
          setRemoteAuthorizationPopup={setRemoteAuthorizationPopup}
        ></RemoteAuthorization>
      )}
    </>
  );
}
export default ResultVerification;
