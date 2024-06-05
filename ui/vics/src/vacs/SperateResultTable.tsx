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
import { IconChevronsUp } from "@tabler/icons-react";

function SperateResultTable({ setIcondown }) {
  const [showWarningPopUp, setshowWarningPopUp] = useState(false);
  const [testPopup, setTestPopup] = useState(false);
  const [showUnconfirmedListPagePopup, setshowUnconfirmedListPgePopup] =
    useState(false);
  
  const { data } = useSelector((state) => state.inspectionData);
  const tableData = useSelector(
    (state) => state.inspectionData.unConfirmedListVehicleTableData
  );

  const [vehicleDetails, setVehicleDetails] = useState([]);

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

  return (
    <>
      {testPopup ? (
        <Testpopup setTestPopup={setTestPopup} />
      ) : (
        <>
          <div className=" w-full">
            <div className="flex items-stretch w-full gap-y-0">
              <Table
                radius="none"
                className="bg-white_color p-[3px] min-h-[200px] w-full flex"
                shadow="none"
              >
                <TableHeader className=" bg-persianGreen  font-[Calibir] text-start  font-bold text-inputTxt ">
                  <TableColumn className=" bg-green font-[Calibir] first:rounded-none text-start last:rounded-none text-sm text-white    font-bold border-1 border-greyBorder">
                    <div className="text-small text-start flex flex-row ">
                      <span>Separate</span>
                      <span>
                        <IconChevronsUp
                          size={25}
                          color="white"
                          onClick={() => setIcondown(false)}
                          data-testid="iconChevronsUp"
                        />
                      </span>
                    </div>
                  </TableColumn>
                  <TableColumn className="bg-green text-white   font-[Calibir]  text-sm   text-center    font-bold border-1 border-white">
                    <div className="text-small">AWB on G.L</div>
                  </TableColumn>
                  <TableColumn className="bg-green text-white      text-center  font-[Calibir]  text-sm font-bold border-1 border-white">
                    <div className="text-small">100m Brake</div>
                  </TableColumn>
                  <TableColumn className="bg-green text-white    text-center  font-[Calibir]  text-sm font-bold border-1 border-white">
                    <div className="text-small">4 Post Hoist</div>
                  </TableColumn>
                  <TableColumn className=" bg-green font-[Calibir]  first:rounded-none last:rounded-none text-sm text-white    text-center    font-bold border-1 border-white">
                    <div className="text-small">Hand Brake</div>
                  </TableColumn>
                  <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-white">
                    <div className="text-small">Motor Brake</div>
                  </TableColumn>
                  <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-white">
                    <div className="text-small">Port Brake</div>
                  </TableColumn>
                  <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-white">
                    <div className="text-small">Swipe Circle</div>
                  </TableColumn>
                  <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-white">
                    <div className="text-small">Tilt Test</div>
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1" className="mt-2 p-[3px] bg-[white_color] ">
                    <TableCell className="h-10  p-[3px]">
                      <b>Result</b>
                    </TableCell>
                    <TableCell key="" className="h-10  p-[3px] ">
                      <Button
                        radius="md"
                        className=" bg-persianGreen  text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm "
                        type="submit"
                        onClick={handleInspect}
                      >
                        Inspect
                      </Button>
                    </TableCell>
                    <TableCell key="" className="h-10  p-[3px] ">
                      <Button
                        radius="md"
                        className=" bg-persianGreen  text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm "
                        type="submit"
                        onClick={handleInspect}
                      >
                        Inspect
                      </Button>
                    </TableCell>
                    <TableCell key="" className="h-10  p-[3px] ">
                      <Button
                        radius="md"
                        className=" bg-persianGreen  text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm "
                        type="submit"
                        onClick={handleInspect}
                      >
                        Inspect
                      </Button>
                    </TableCell>
                    <TableCell key="" className="h-10  p-[3px] ">
                      <Button
                        radius="md"
                        className=" bg-persianGreen  text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm "
                        type="submit"
                        onClick={handleInspect}
                      >
                        Inspect
                      </Button>
                    </TableCell>
                    <TableCell key="" className="h-10  p-[3px] ">
                      <Button
                        radius="md"
                        className=" bg-persianGreen  text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm "
                        type="submit"
                        onClick={handleInspect}
                      >
                        Inspect
                      </Button>
                    </TableCell>
                    <TableCell key="" className="h-10  p-[3px] ">
                      <Button
                        radius="md"
                        className=" bg-persianGreen  text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm "
                        type="submit"
                        onClick={handleInspect}
                      >
                        Inspect
                      </Button>
                    </TableCell>

                    <TableCell key="" className="h-10  p-[3px] ">
                      <Button
                        radius="md"
                        className=" bg-persianGreen  text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm "
                        type="submit"
                        onClick={handleInspect}
                      >
                        Inspect
                      </Button>
                    </TableCell>
                    <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                      <b className="text-innerInputTxt">
                        {tableData?.tiltingTestResult === "P" ? (
                          "PASS"
                        ) : tableData?.tiltingTestResult === "F" ? (
                          "FAIL"
                        ) : (
                          <Button
                            radius="md"
                            className=" bg-persianGreen  text-white float-right mt-[10px] h-8 self-center font-bold text-base rounded-sm "
                            type="submit"
                            onClick={handleInspect}
                          >
                            Inspect
                          </Button>
                        )}
                      </b>
                    </TableCell>
                  </TableRow>

                  <TableRow key="2" className="bg-[#e8fbf5]">
                    <TableCell className="h-10   p-[3px]">
                      <b>Ctr Rm</b>
                    </TableCell>

                    <TableCell className="h-10  p-[3px] ">
                      <Select
                        placeholder="-"
                        labelPlacement="outside-left"
                        size="sm"
                        name="center"
                        radius="none"
                        aria-label="center"
                        variant="bordered"
                        className="w-[90px] bg-white_color rounded-sm "
                      >
                        <SelectItem key="" className="text-green">
                          -
                        </SelectItem>
                      </Select>
                    </TableCell>
                    <TableCell className="h-10  p-[3px] ">
                      <Select
                        placeholder="-"
                        labelPlacement="outside-left"
                        size="sm"
                        name="center"
                        radius="none"
                        aria-label="center"
                        variant="bordered"
                        className="w-[90px] bg-white_color rounded-sm "
                      >
                        <SelectItem key="" className="text-green">
                          -
                        </SelectItem>
                      </Select>
                    </TableCell>
                    <TableCell className="h-10  p-[3px] ">
                      <Select
                        placeholder="-"
                        labelPlacement="outside-left"
                        size="sm"
                        name="center"
                        radius="none"
                        aria-label="center"
                        variant="bordered"
                        className="w-[90px] bg-white_color rounded-sm "
                      >
                        <SelectItem key="" className="text-green">
                          -
                        </SelectItem>
                      </Select>
                    </TableCell>
                    <TableCell className="h-10  p-[3px] ">
                      <Select
                        placeholder="-"
                        labelPlacement="outside-left"
                        size="sm"
                        name="center"
                        radius="none"
                        aria-label="center"
                        variant="bordered"
                        className="w-[90px] bg-white_color rounded-sm "
                      >
                        <SelectItem key="" className="text-green">
                          -
                        </SelectItem>
                      </Select>
                    </TableCell>
                    <TableCell className="h-10  p-[3px] ">
                      <Select
                        placeholder="-"
                        labelPlacement="outside-left"
                        size="sm"
                        name="center"
                        radius="none"
                        aria-label="center"
                        variant="bordered"
                        className="w-[90px] bg-white_color rounded-sm "
                      >
                        <SelectItem key="" className="text-green">
                          -
                        </SelectItem>
                      </Select>
                    </TableCell>
                    <TableCell className="h-10  p-[3px] ">
                      <Select
                        placeholder="-"
                        labelPlacement="outside-left"
                        size="sm"
                        name="center"
                        radius="none"
                        aria-label="center"
                        variant="bordered"
                        className="w-[90px] bg-white_color rounded-sm "
                      >
                        <SelectItem key="" className="text-green">
                          -
                        </SelectItem>
                      </Select>
                    </TableCell>
                    <TableCell className="h-10  p-[3px] ">
                      <Select
                        placeholder="-"
                        labelPlacement="outside-left"
                        size="sm"
                        name="center"
                        radius="none"
                        aria-label="center"
                        variant="bordered"
                        className="w-[90px] bg-white_color rounded-sm "
                      >
                        <SelectItem key="" className="text-green">
                          -
                        </SelectItem>
                      </Select>
                    </TableCell>

                    <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                      <Select
                        placeholder={tableData?.tiltingTestResult}
                        labelPlacement="outside-left"
                        size="sm"
                        name="tiltingTestResult"
                        radius="none"
                        aria-label="tiltingTestResult"
                        variant="bordered"
                        className="w-[90px] bg-white rounded-sm "
                      >
                        <SelectItem key="" className="text-green">
                          -
                        </SelectItem>
                      </Select>
                    </TableCell>
                  </TableRow>

                  <TableRow key="3" className="bg-white_color_color">
                    <TableCell className="h-10  p-[3px]">
                      <b>Tester</b>
                    </TableCell>
                    <TableCell key="" className="h-10  p-[3px] " children={undefined}></TableCell>
                    <TableCell key="" className="h-10  p-[3px] " children={undefined}></TableCell>
                    <TableCell key="" className="h-10  p-[3px] " children={undefined}></TableCell>
                    <TableCell key="" className="h-10  p-[3px] " children={undefined}></TableCell>
                    <TableCell key="" className="h-10  p-[3px] " children={undefined}></TableCell>
                    <TableCell key="" className="h-10  p-[3px] " children={undefined}></TableCell>
                    <TableCell key="" className="h-10  p-[3px] " children={undefined}></TableCell>
                    <TableCell key="" className="h-10  p-[3px] ">
                      <b>
                        {tableData.tiltingTestResult &&
                        tableData?.tiltingTestResult !== ""
                          ? "VT1"
                          : ""}
                      </b>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
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

export default SperateResultTable;
