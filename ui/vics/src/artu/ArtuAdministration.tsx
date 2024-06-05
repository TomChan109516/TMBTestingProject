import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  Switch,
  Pagination,
  SelectItem,
  Chip,
} from "@nextui-org/react";
import { IconInfoCircle } from "@tabler/icons-react";
import LastErrorPopUp from "./LastErrorPopUp";
import VEEPairingPopUp from "./VEEPairingPopUp";
import { Select, Settings } from "tabler-icons-react";
import LastResultPopUp from "./LastResultPopUP";
import {
  toggleConnection,
  getArtuTable,
} from "./service/ArtAdministration.service";

function ArtuAdministation() {
  const [showLastErrorPopUp, setshowLastErrorPopUp] = useState(false);
  const [showLastResultPopUp, setshowLastResultPopUp] = useState(false);
  const [showVEEPairingPopUp, setshowVEEPairingPopUp] = useState(false);
  const [addVeePairingData, setaddVeePairingData] = useState(false);
  const [switchState, setSwitchState] = useState({});
  const [tabledetails, setTableDetails] = useState<[]>([]);

  const [testResult, setTestResult] = useState({});

  const [testError, setTestError] = useState({});

  const [selectedSwitch, setSelectedSwitch] = useState("");

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(tabledetails.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return tabledetails.slice(start, end);
  }, [page, tabledetails]);

  const handleLastResultPopUp = (item) => {
    setshowLastResultPopUp(true);
    setTestResult(item);
  };
  const handleLastErrorPopUp = (item) => {
    setshowLastErrorPopUp(true);
    setTestError(item);
  };
  const closeLastResultPopUp = (val) => {
    setshowLastResultPopUp(val);
  };
  const closeVEEPairingPopUp = async (val) => {
    setshowVEEPairingPopUp(val);
  };
  const closeLastErrorPopUp = (val) => {
    setshowLastErrorPopUp(val);
  };
  const onAddVeePairingData = () => {
    setaddVeePairingData(true);
    setshowVEEPairingPopUp(false);
  };

  const [errorToggleMessage, setErrorToggleMessage] = useState([]);

  const [toggleMessage, setToggleMessage] = useState([]);
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [apiErrorData, setApiErrorData] = useState<string>("");

  const handleSwitchChange = async (id, index) => {
    setSelectedSwitch(id);
    try {
      const toggleStatus = !switchState[id];
      setSwitchState((prevState) => ({
        ...prevState,
        [id]: toggleStatus,
      }));

      const response = await toggleConnection({
        id: id.toString(),
        toggleStatus: toggleStatus,
      });

      tabledetails[index].switch = response.toggleStatus;

      if (response.message === "operation successful") {
        setToggleMessage(["Operation successful"]); 
      } else {
        setToggleMessage([...toggleMessage, id]);
        console.log("responsemessage", response.message);
      }
    } catch (error) {
      tabledetails[index].switch = true;

      setErrorToggleMessage([...errorToggleMessage, id]);
    }
    const resp = await toggleConnection({
      id: id.toString(),
      toggleStatus: toggleStatus,
    });
    console.log(resp);
  };
  const handleVEEPairingPopUp = () => {
    setshowVEEPairingPopUp(true);
    setaddVeePairingData(false);
  };

  const TableDetails = async () => {
    try {
      const response = await getArtuTable();
      response.entities = response.entities.map((item) => {
        item.switch = false;
        return item;
      });
      console.log(response);
      setTableDetails(response.entities);
      setShowApiError(false);
    } catch (error) {
      setShowApiError(true);
      if (!error.response) {
        setShowApiError(true);
        setApiErrorData("Server Error");
      } else {
        if (error.response.status === 401) {
          setApiErrorData(error.message);
        } else if (error.response.status === 500) {
          setApiErrorData("500 - Internal Error");
        } else {
          setApiErrorData(error.response.status);
        }
      }
    }
  };
  useEffect(() => {
    TableDetails();
  }, [addVeePairingData]);

  return (
    <>
      <div className="mt-[10px] text-[calibri]">
        <div className="grid grid-cols-4 gap-2 mt-[12px] text-[12px] font-bold w-full ">
          <div className="grid grid-rows-2 h-[200 px] grid-flow-col ml-6">
            <div className="flex flex-row items-center">
              <div
                className="w-[100%] text-left text-[calibri] persianGreen text-[14px] mt-1 text-persianGreen"
                data-testid="ARTU Management Page"
              >
                ARTU Management Page
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 grid-flow-col ">
            <div className="flex flex-row  ">
              <div className="w-[25%] text-left items-cente mt-2 text-[calibri] text-[grey]">
                Search For
              </div>
              <div className="w-[75%] mb-2 ">
                <Input
                  aria-label="SearchFor"
                  data-testid="SearchFor"
                  name="rate"
                  variant="bordered"
                  size="sm"
                  classNames={{ inputWrapper: "h-8 mt-1 rounded-md" }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 ">
            <div className="flex flex-row ">
              <div className="w-[100%] ml-[5px] ">
                <Button
                  type="button"
                  className="bg-persianGreen text-white rounded-sm text-[13px]"
                  size="sm"
                  radius="sm"
                  onClick={handleVEEPairingPopUp}
                  data-testId=" Add VEEPairing"
                >
                  Add VEE Pairing
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Table
          radius="none"
          aria-label="Example table with client side pagination"
          bottomContent={
            <div className="flex w-full justify-end pt-0 table-auto">
              {tabledetails.length > 5 ? (
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={pages}
                  classNames={{
                    wrapper:
                      "gap-0 overflow-visible h-8  rounded-none border border-divider",
                    item: "w-8 h-8 text-[12px] rounded-none",
                    prev: "h-8 rounded-none ",
                    next: " h-8 rounded-none",
                    cursor:
                      "bg-gradient-to-b shadow-lg from-navButton to-navButton rounded-none  text-white font-bold h-8  ",
                  }}
                  onChange={(page) => setPage(page)}
                />
              ) : (
                ""
              )}
            </div>
          }
          classNames={{
            wrapper: "min-h-[50px]",
            table: "w-full",
          }}
        >
          <TableHeader className="  border-darkwhite  persianGreen text-[12px]  text-left font-bold h-[20px]">
            <TableColumn className=" border-darkwhite text-[12px] text-left font-bold border-b-2 border-persianGreen first:rounded-none text-[black] justify-center ">
              Config/ON/OFF
            </TableColumn>
            <TableColumn className=" border-darkwhite  text-[12px] font-bold  border-b-2 border-persianGreen  text-[black] bor">
              <div className="flex justify-left">
                {" "}
                Status{" "}
                <Select className=" h-[17px]">
                  <SelectItem key={""}></SelectItem>
                </Select>
              </div>
            </TableColumn>
            <TableColumn className=" border-darkwhite  text-[12px]  font-bold border-b-2 border-persianGreen  text-[black]  ">
              <div className="flex justify-center">
                {" "}
                Lane{" "}
                <Select className="h-[17px] ">
                  <SelectItem key={""}>a</SelectItem>
                </Select>
              </div>
            </TableColumn>
            <TableColumn className=" border-darkwhite  text-[12px] font-bold border-b-2 border-persianGreen  text-[black] ">
              <div className="flex justify-center">
                {" "}
                Station{" "}
                <Select className="h-[17px] ">
                  <SelectItem key={""}>a</SelectItem>
                </Select>
              </div>
            </TableColumn>
            <TableColumn className=" border-darkwhite  text-[12px]  font-bold border-b-2 border-persianGreen   text-[black]  ">
              <div className="flex justify-center">
                {" "}
                Address{" "}
                <Select className="h-[17px] ">
                  <SelectItem key={""}>a</SelectItem>
                </Select>
              </div>
            </TableColumn>
            <TableColumn className=" border-darkwhite  text-[12px]  font-bold border-b-2 border-persianGreen   text-[black]">
              <div className="flex justify-center">
                {" "}
                Port{" "}
                <Select className="h-[17px] ">
                  <SelectItem key={""}>a</SelectItem>
                </Select>
              </div>
            </TableColumn>
            <TableColumn className=" border-darkwhite  text-[12px] font-bold  border-b-2 border-persianGreen  text-[black] text-center">
              View Last Result
            </TableColumn>
            <TableColumn className=" border-darkwhite  text-[12px] text-center font-bold  border-b-2 border-persianGreen  last:rounded-none text-[black] ">
              {" "}
              View Last Error
            </TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {tabledetails.map((item, index) => {
              const switchStateItem = switchState[item.artuConfigId];
              const [switchStateID] = Object.keys(switchState).filter(
                (key) => key === item.artuConfigId
              );
              let switchBgColor;
              if (switchStateID === item.artuConfigId) {
                if (switchState[switchStateID] === true) {
                  if (errorToggleMessage.includes(item.artuConfigId)) {
                    switchBgColor = "bg-[red]";
                  } else if (toggleMessage.includes(item.artuConfigId)) {
                    switchBgColor = "bg-[limegreen]";
                  } else {
                    switchBgColor = "bg-[white]";
                  }
                }
              }
              return (
                <TableRow
                  key={item.artuConfigId}
                  className="even:bg-lightblue odd:bg- fadedwhite"
                >
                  <TableCell className="p-[5px] text-[12px] text-left">
                    <div className="flex">
                      <Settings
                        size={18}
                        color="gray"
                        className="rounded-sm mt-[10px]"
                      />
                      <Switch
                        name="switch"
                        size="sm"
                        classNames={{
                          wrapper: `h-[22px] overflow-visible ml-2 mt-2 group-data-[selected=true]:bg-persianGreen `,
                        }}
                        value="switch"
                        isSelected={switchStateItem}
                        onChange={() =>
                          handleSwitchChange(item.artuConfigId, index)
                        }
                      />
                    </div>
                  </TableCell>

                  <TableCell className="p-[px] flex justify-left  ">
                    <div className="flex items-left mt-2">
                      <div className="mr-2">
                        {switchStateItem &&
                        errorToggleMessage.includes(item.artuConfigId) ? (
                          <IconInfoCircle
                            size={18}
                            strokeWidth={2}
                            color={"red"}
                            className="w-[18px] h-[18px] mt-[1px]"
                          />
                        ) : (
                          <div className="w-[18px] h-[18px] mt-[1px]" />
                        )}
                      </div>

                      <div className="flex items-center">
                        <div
                          className={`flex w-[15px] h-[15px] border border-[gray] mt-[2px] mr-1 ${switchBgColor} rounded-full justify-center`}
                        ></div>

                        <p className="text-small text-default-500 justify-center">
                          {switchStateItem ? "ON" : "OFF"}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="p-[5px] text-[12px] justify-center">
                    {item.laneId}
                  </TableCell>
                  <TableCell className="p-[5px] text-[12px] justify-center">
                    {item.stationId}
                  </TableCell>
                  <TableCell className="p-[5px] text-[12px] justify-center">
                    {item.veesIp}
                  </TableCell>
                  <TableCell className="p-[5px] text-[12px] justify-center">
                    {item.veesPort}
                  </TableCell>
                  <TableCell className="p-[5px] text-[12px] justify-center">
                    <Button
                      type="button"
                      className="bg-persianGreen text-white rounded-sm text-[12px] h-6"
                      size="sm"
                      radius="sm"
                      onClick={() => {
                        handleLastResultPopUp(item);
                      }}
                    >
                      Last Result
                    </Button>
                  </TableCell>
                  <TableCell className="p-[5px] text-[12px] text-center ">
                    {switchStateItem &&
                    errorToggleMessage.includes(item.artuConfigId) ? (
                      <Button
                        className="bg-persianGreen text-white rounded-sm text-[12px] h-6"
                        size="sm"
                        radius="sm"
                        onClick={handleLastErrorPopUp}
                        data-testId="Last Error"
                      >
                        Last Error
                      </Button>
                    ) : null}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {showApiError === true ? (
          <div className="flex transition-timing-function: cubic-bezier(0.4, 0, 1, 1) p-4 justify-center ...">
            <div>
              <Chip color="default" radius="full">
                <div className="text-center">{apiErrorData}</div>
              </Chip>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {showLastErrorPopUp && (
        <LastErrorPopUp
          showLastErrorPopUp={showLastErrorPopUp}
          closeLastErrorPopUp={closeLastErrorPopUp}
          testError={testError}
        ></LastErrorPopUp>
      )}
      ,
      {showLastResultPopUp && (
        <LastResultPopUp
          showLastResultPopUp={showLastResultPopUp}
          closeLastResultPopUp={closeLastResultPopUp}
          testResult={testResult}
        ></LastResultPopUp>
      )}
      {showVEEPairingPopUp && (
        <VEEPairingPopUp
          showVEEPairingPopUp={showVEEPairingPopUp}
          closeVEEPairingPopUp={closeVEEPairingPopUp}
          onAddVeePairingData={onAddVeePairingData}
        ></VEEPairingPopUp>
      )}
    </>
  );
}
export default ArtuAdministation;
