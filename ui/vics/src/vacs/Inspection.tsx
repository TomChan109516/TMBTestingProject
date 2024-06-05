import { Button, Select, SelectItem } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React, { useState } from "react";
import WarningPopUp from "./WarningPopUp";
import UnconfirmedListPagePopup from "./UnconfirmedListPagePopup";
import Testpopup from "./Testpopup";
import { useSelector } from "react-redux";
import { getUnconfirmedList } from "../login/service/login.service";
import SperateResultTable from "./SperateResultTable";
import { IconChevronsDown } from "@tabler/icons-react";

function Inspection() {
  const [showWarningPopUp, setshowWarningPopUp] = useState(false);
  const [testPopup, setTestPopup] = useState(false);
  const [showUnconfirmedListPagePopup, setshowUnconfirmedListPgePopup] =
    useState(false);
  // data from redux
  const { data } = useSelector((state) => state.inspectionData);
  const tableData = useSelector(
    (state) => state.inspectionData.unConfirmedListVehicleTableData
  );

  const [vehicleDetails, setVehicleDetails] = useState([]);

  const [getoverallResultData, setGetoverallResult] = useState({});
  const [resultStars, setResultStars] = useState({
    ohmstar: false,
    headlampResultstar: false,
    visualResultstar: false,
    brakeResultstar: false,
    exhaustResultstar: false,
    speedometerResultstar: false,
    underCarriageResultstar: false,
    tiltingTestResult: false,
  });
  const [PFresult] = useState([
    { P: "P", value: "P" },
    { F: "F", value: "F" },
  ]);

  const [iconDown, setIcondown] = useState(false);

  const firstTable = data.slice(0, 12);
  const secondTable = data.slice(12);

  const handleInspect = () => {
    setTestPopup(true);
  };
  const handleWarningPopUp = () => {
    setshowWarningPopUp(true);
  };
  const closeWarningPopUp = (val) => {
    setshowWarningPopUp(val);
  };
  const handleUnconfirmedListPagePopup = () => {
    setshowUnconfirmedListPgePopup(true);
    getData();
  };
  const closeUnconfirmedListPgePopup = (val) => {
    setshowUnconfirmedListPgePopup(val);
  };
  const getData = async () => {
    const response = await getUnconfirmedList();
    setVehicleDetails(response.unconfirmedList);
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
    } else if (name === "tiltingTestResult") {
      setResultStars((prevState) => ({
        ...prevState,
        tiltingTestResult: value !== getoverallResultData?.tiltingTestResult,
      }));
    }
  };

  return (
    <>
      {testPopup ? (
        <Testpopup setTestPopup={setTestPopup} />
      ) : (
        <>
          <div>
            <div className=" w-[100%] gap-y-0">
              <div className="">
                <Table
                  radius="none"
                  className="bg-white flex  font-calibri"
                  shadow="none"
                >
                  <TableHeader className=" bg-persianGreen  font-[Calibir]  text-center  font-bold text-inputTxt ">
                    <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
                      <div className="text-small"></div>
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
                    <TableRow
                      key="1"
                      className=" mb-2 bg-white text-innerInputTxt "
                    >
                      <TableCell className="h-10  p-[3px] border-1 border-greyBorder text-inputTxt ">
                        <b>Result</b>
                      </TableCell>

                      <TableCell className="h-10  p-[3px] border-1 border-greyBorder text-inputTxt ">
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
                        {resultStars.visualResultstar == true ? (
                          <span>*</span>
                        ) : (
                          ""
                        )}
                      </TableCell>

                      <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                        <b className="text-innerInputTxt">
                          {tableData?.brakeResult === "P"
                            ? "PASS"
                            : tableData?.brakeResult === "F"
                            ? "FAIL"
                            : ""}
                        </b>
                        {resultStars.brakeResultstar == true ? (
                          <span>*</span>
                        ) : (
                          ""
                        )}
                      </TableCell>
                      <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                        <b className="text-innerInputTxt">
                          {tableData?.headlampResult === "P"
                            ? "PASS"
                            : tableData?.headlampResult === "F"
                            ? "FAIL"
                            : ""}
                        </b>
                        {resultStars.headlampResultstar == true ? (
                          <span>*</span>
                        ) : (
                          ""
                        )}
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
                        {resultStars.exhaustResultstar == true ? (
                          <span>*</span>
                        ) : (
                          ""
                        )}
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
                            <SelectItem
                              key={item.value}
                              value={tableData?.ohmResult}
                            >
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
                      <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                        <Select
                          placeholder={tableData?.underCarriageResult}
                          labelPlacement="outside-left"
                          size="sm"
                          name="underCarriageResult"
                          radius="none"
                          aria-label="underCarriageResult"
                          className="w-[90px] bg-white rounded-sm "
                          variant="bordered"
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
                          {tableData?.ohmResult && tableData?.ohmResult !== ""
                            ? "VT1"
                            : ""}
                        </p>
                      </TableCell>
                      <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                        <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                          {tableData?.visualResult &&
                          tableData?.visualResult !== ""
                            ? "VT1"
                            : ""}
                        </p>
                      </TableCell>
                      <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                        <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                          {tableData?.brakeResult &&
                          tableData?.brakeResult !== ""
                            ? "VT1"
                            : ""}
                        </p>
                      </TableCell>
                      <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                        <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                          {tableData?.headlampResult &&
                          tableData?.headlampResult !== ""
                            ? "VT1"
                            : ""}
                        </p>
                      </TableCell>
                      <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                        <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                          {tableData?.exhaustResult &&
                          tableData?.exhaustResult !== ""
                            ? "VT1"
                            : ""}
                        </p>
                      </TableCell>
                      <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
                        <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                          {tableData?.speedometerResult &&
                          tableData?.speedometerResult !== ""
                            ? "VT1"
                            : ""}
                        </p>
                      </TableCell>
                      <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                        <p className=" text-innerInputTxt truncate  text-clip] w-20 font-bold">
                          {tableData?.underCarriageResult &&
                          tableData?.underCarriageResult !== ""
                            ? "VT1"
                            : ""}
                        </p>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between ">
            <div className="w-full">
              {iconDown ? (
                <SperateResultTable setIcondown={setIcondown} />
              ) : (
                <Table
                  radius="none"
                  className="bg-white flex mr-6 font-calibri w-full "
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
                  </TableHeader>
                  <TableBody children={undefined}></TableBody>
                </Table>
              )}
            </div>
            <div>
              <span className="flex flex-row">
                <div className="ml-2 mt-2 text-small">
                  <div className=" font-[Calibir] ml-12">
                    <Button
                      radius="md"
                      className=" bg-persianGreen text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm"
                      type="submit"
                      onClick={handleWarningPopUp}
                    >
                      Add to Unconfirmed List
                    </Button>
                  </div>
                  <div className="font-[Calibir]">
                    <Button
                      radius="sm"
                      className=" bg-persianGreen text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm "
                      type="submit"
                      onClick={handleUnconfirmedListPagePopup}
                    >
                      Retrive Unconfirmed List
                    </Button>
                  </div>
                </div>
              </span>
            </div>
          </div>

          <div className="ml-2">
            <div className=" h-12 ml-2 mr-2 mt-2 ">
              <h1 className="border- border-dotted border-greyBorder">
                <h5 className="absolute-top mt-1 start-3 pl-[1px] pr-[1px] font-bold text-sm font-[Calibri] text-red">
                  <p className="text-start text-red text-small">
                    <b>VI</b>
                  </p>{" "}
                </h5>
                <b className="text-small flex w-[100%] h-9 ml-2 mr-2 mt-2  rounded-sm  shadow-sm text-sm`">
                  Failed Items
                </b>
              </h1>
            </div>

            <div className=" h-12 ml-2 mr-2 mt-2 ">
              <h1 className="border- border-dotted border-greyBorder">
                <h5 className="absolute-top mt-1 start-3 pl-[1px] pr-[1px] font-bold text-sm font-[Calibri] text-red">
                  <p className="text-start text-red text-small">
                    <b>OCI</b>
                  </p>{" "}
                </h5>
                <b className="text-small flex w-[100%] h-9 ml-2 mr-2 mt-2  rounded-sm  shadow-sm text-sm`">
                  Failed Items
                </b>
              </h1>
            </div>

            <div className="  ml-2 mr-2 mt-2 ">
              <h1 className="border- border-dotted border-greyBorder">
                <h5 className="absolute-top mt-1 start-3 pl-[1px] pr-[1px] font-bold text-sm font-[Calibri] text-red">
                  <p className="text-start text-red text-small">
                    <b>OHM</b>
                  </p>{" "}
                </h5>
                <div className="  grid-cols-3 flex  md:border-dashed h-20 ml-1 mr-2 mt-2 rounded-sm bg-greyBorder p-1 shadow-none">
                  <div className="flex ">
                    <span className="ml-7 mr-2 text-small mt-5 font-bold">
                      Vehical length
                    </span>
                    <input className=" h-8 mt-4 border-2 w-[180px] border-greyBorder bg-greyBorder shadow-sm ml-10" />
                  </div>

                  <div className="flex ">
                    <span className="ml-14   text-small mt-5 font-bold">
                      Vehicle Width
                    </span>
                    <input className=" h-8 mt-4 ml-14 border-2 border-greyBorder w-[180px] bg-greyBorder shadow-sm " />
                  </div>
                  <div className="flex ">
                    <span className="ml-14 mr-2 text-small mt-5 font-bold">
                      Vehicle Height
                    </span>
                    <input className=" h-8 mt-4 border-2 border-greyBorder w-[180px] bg-greyBorder shadow-sm ml-4                                                                                                                                                                                        " />
                  </div>
                </div>
                <div>
                  <div className=" grid-cols-3 flex md:border-dashed h-20 ml-1 mr-2 mt-2  rounded-sm bg-greyBorder p-1 shadow-none">
                    <div className="flex ">
                      <span className="ml-6 mr-2 text-small mt-5 font-bold">
                        Serial Number
                      </span>
                      <input className=" h-8  ml-10 mt-4 border-2 w-[180px] border-greyBorder bg-greyBorder shadow-sm" />
                    </div>
                    <div className="flex ">
                      <span className="ml-14 mr-2 text-small mt-5 font-bold">
                        EDRD Make & Model
                      </span>
                      <input className=" h-8 mt-4 border-2 border-greyBorder bg-greyBorder shadow-sm w-[180px] ml-4" />
                    </div>
                  </div>
                  <div className="grid-cols-3 flex  md:border-dashed h-20 ml-1 mr-2 mt-2 rounded-sm bg-greyBorder p-1 shadow-none">
                    <div className="flex ">
                      <span className="ml-5 mr-2 text-small mt-5 font-bold">
                        Testing Speed(Km/h)
                      </span>
                      <input className=" h-8 mt-4 border-2 border-greyBorder bg-greyBorder w-[180px] shadow-sm" />
                    </div>
                    <div className="flex ">
                      <span className="ml-14 mr-2 text-small mt-5 font-bold">
                        Measured Speed(Km/h)
                      </span>
                      <input className=" h-8 mt-4 border-2 border-greyBorder bg-greyBorder w-[180px] shadow-sm" />
                    </div>
                  </div>
                </div>
              </h1>
            </div>
          </div>

          {showWarningPopUp && (
            <WarningPopUp
              showWarningPopUp={showWarningPopUp}
              closeWarningPopUp={closeWarningPopUp}
            ></WarningPopUp>
          )}

          {UnconfirmedListPagePopup && (
            <UnconfirmedListPagePopup
              showUnconfirmedListPagePopup={showUnconfirmedListPagePopup}
              closeUnconfirmedListPagePopup={closeUnconfirmedListPgePopup}
              vehicleDetails={vehicleDetails}
            ></UnconfirmedListPagePopup>
          )}
        </>
      )}
    </>
  );
}

export default Inspection;
