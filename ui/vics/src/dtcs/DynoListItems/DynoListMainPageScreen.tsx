import {
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
  cn,
} from "@nextui-org/react";
import React, { useState } from "react";
import CloseStationNextPopup from "./CloseStationNextPopup";
const uservalidityPeriodData = [
  {
    a: "",
    DynoRoom: "Room 1(reassigned)",
    ApptNumber: "231020151942",
    VehicleClass: "FE100",
    RegMark: "FE100",
    Laneno: "01",
    PrintDynoChit: "2023-10-20 14:16:17",
    TestItem: "Dyno",
    Status: "Completed",
  },

  {
    a: "",
    DynoRoom: "Room 1",
    ApptNumber: "231020151942",
    VehicleClass: "FE100",
    RegMark: "FE100",
    Laneno: "01",

    PrintDynoChit: "2023-10-20 14:16:17",
    TestItem: "Non-Dyno",
    Status: "Completed",
  },
  {
    a: "",
    DynoRoom: "Room 1",
    ApptNumber: "231020151942",
    VehicleClass: "FE100",
    RegMark: "FE100",
    Laneno: "01",
    PrintDynoChit: "2023-10-20 14:16:17",
    TestItem: "Dyno",
    Status: "Completed",
  },
  {
    a: "",
    DynoRoom: "Room 1",
    ApptNumber: "231020151942",
    VehicleClass: "FE100",
    RegMark: "FE100",
    Laneno: "01",
    PrintDynoChit: "2023-10-20 14:16:17",
    TestItem: "Dyno",
    Status: "Completed",
  },
  {
    a: "",
    DynoRoom: "Room 1",
    ApptNumber: "231020151942",
    VehicleClass: "FE100",
    RegMark: "FE100",
    Laneno: "01",
    PrintDynoChit: "2023-10-20 14:16:17",
    TestItem: "Non-Dyno",
    Status: "Completed",
  },
  {
    a: "",
    DynoRoom: "Room 1",
    ApptNumber: "231020151942",
    VehicleClass: "FE100",
    RegMark: "FE100",
    Laneno: "01",
    PrintDynoChit: "2023-10-20 14:16:17",
    TestItem: "Non-Dyno",
    Status: "Completed",
  },
];

function DynoListMainPageScreen() {
  const [isCloseStationNextPopup, setIsCloseStationNextPopup] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleSwitchChange = () => {
    if (isActive) {
      setIsCloseStationNextPopup(true);
    } else {
      setIsCloseStationNextPopup(true);
    }
    setIsActive(!isActive);
  };

  function setPageSize(value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="ml-4 mt-8 mb-10 mr-7 ">
      <div className="flex flex-col items-start">
        <div className="font-bold mb-2">
          <p> Dyno Room Control -Dyno Room 1</p>
        </div>

        <div className="flex items-center mb-2 mt-5">
          <span className="font-bold mr-2">Station Open/Close:</span>

          <Switch
            name="switch"
            size="sm"
            placeholder="Active"
            onChange={handleSwitchChange}
            startContent={
              <div className="flex justify-center items-center ">Open</div>
            }
            endContent={
              <div className="flex justify-center items-center ">Close</div>
            }
            classNames={{
              wrapper:
                "h-[24px] bg-red overflow-visible   group-data-[selected=true]:bg-persianGreen w-[80px] ",
              thumb: cn(
                "w-5 h-5 shadow-md",
                "group-data-[hover=true]:border-primary",
                "group-data-[selected=true]:ml-12",
                "group-data-[pressed=true]:w-7",
                "group-data-[selected]:group-data-[pressed]:ml-4"
              ),
            }}
            defaultSelected
          />
        </div>

        <div>
          <div className="mt-2">
            <Tabs
              aria-label="Tabs colors"
              radius="none"
              classNames={{
                tabContent:
                  "group-data-[selected=true]:bg-persianGreen  group-data-[selected=true]:text-white text-white  px-7 py-7 bg-[gray]",
                tab: "max-w-fit px-0 h-5   text-center  bg-[gray] ml-5 mt-1 ",
                tabList: "justify-content: flex-start", // Add this line
              }}
            >
              <Tab key="Dyno Workload List" title="Dyno Workload List">
                <div className="mt-[-11px]"></div>
              </Tab>
              <Tab key="Dyno Draw List" title="Dyno Draw List">
                <div className="mt-[-11px]">
                  {/* <AppNumberScreenTable /> */}
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>

      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }}>
        <TableHeader>
          <TableColumn
            className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none"
            children="undefined"
          ></TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Dyno Room
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Appt Number
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Vehicle Class
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Reg.Mark
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Lane No.
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Print Dyno Chit
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Test Item
          </TableColumn>
          <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
            Status
          </TableColumn>
        </TableHeader>
        <TableBody>
          {uservalidityPeriodData.map((details) => {
            return (
              <TableRow
                key={details.a}
                className="even:bg-lightblue odd:bg-fadedwhite font-calibri text-center"
              >
                <TableCell className=" border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm ">
                  {details.a}
                </TableCell>
                <TableCell className="border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                  {details.DynoRoom}
                </TableCell>
                <TableCell className="border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                  {details.ApptNumber}
                </TableCell>

                <TableCell className="  border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                  {details.VehicleClass}
                </TableCell>
                <TableCell className="   border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                  {details.RegMark}
                </TableCell>
                <TableCell className="   border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                  {details.Laneno}
                </TableCell>
                <TableCell className="   border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                  {details.PrintDynoChit}
                </TableCell>
                <TableCell className="   border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                  {details.TestItem}
                </TableCell>
                <TableCell
                  className={cn(
                    "   border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm",
                    { "text-persianGreen": details.Status === "Completed" }
                  )}
                >
                  {details.Status}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      {isCloseStationNextPopup && (
        <CloseStationNextPopup
          setIsCloseStationNextPopup={setIsCloseStationNextPopup}
        />
      )}
    </div>
  );
}

export default DynoListMainPageScreen;
