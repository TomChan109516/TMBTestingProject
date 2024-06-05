import React, { useEffect, useState } from "react";
import { ChevronDown } from "tabler-icons-react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  link,
} from "@nextui-org/react";
import { Wifi, WifiOff } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import SeperateTestsMenu from "./SeperateTestsMenu";
import { IconCaretRightFilled } from "@tabler/icons-react";
import WorkLoadListPopUp from "../vehicleRegistration/WorkLoadListPopUp/WorkLoadListPopUp";

export default function NavMenu() {
  const navigate = useNavigate();
  const [currentStation, setCurrentStation] = useState();
  const [deviceType, setDeviceType] = useState("");
  const [displayShow, setDisplayShow] = useState(true);
  const [isdisableone, setIsdisableone] = useState(false);
  const dropDownButtons = [
    { id: 1, name: "Inspection Config", data: [] },
    { id: 2, name: "Define Seal Management", data: [] },
    { id: 3, name: "User Management", data: [
      {
        id: 1,
        name: "User Management",
        link: "usermanagementhomepage",
      },
    ] },
    {
      id: 4,
      name: "Device Management",
      data: [
        {
          id: 1,
          name: "Define Test Pass Standards",
          link: "DefineTestPassingStandardsTabs",
        },
        {
          id: 2,
          name: "Define Equpment Item And Details",
          link: "device-management",
        },
        { id: 3, name: "Define Test Result Calculation Formulae", link: "DefineTestFormulaeHomePage" },
      ],
    },
    {
      id: 5,
      name: "Station Management",
      data: [
        {
          id: 1,
          name: "Define Examination Type and Associated Test Items",
          link: "station-management",
        },
        {
          id: 2,
          name: "Define Location And Details",
          link: "locationAndDetails",
        },
        
        {
          id: 3,
          name: "Inspection Item Code Maintenance",
          link: "DefectItemMaintenanceInterface",
        },
      ],
    },
    { id: 6, name: "Lane Management", data: [] },
    { id: 7, name: "Device Status", data: [] },
  ];
  const dtcsDropDownButtons = [
    { id: 1, name: "Skip Test Reason Maintenance" , link: "SkipTest"},
    { id: 2, name: "Abort Test Reason Maintenance", link: "SuspendReason", },
    { id: 3, name: "Dyno Maintenance Item Maintenance" },
    { id: 4, name: "Dyno Usage Maintenance" },
    { id: 5, name: "Exempt Vehicle From Dyno Test Maintenance" },
    { id: 6, name: "Exempt Vehicle Model From Test Maintenance" , link: "ExemptVehicleModel" },
    { id: 7, name: "Dyno Test Standard Maintenance" },
    { id: 8, name: "Dyno Room Maintenance" },
    { id: 9, name: "Dyno Test Standard VehicleModel Update From EPD" },
    { id: 10, name: "Dyno Room Scheduling" },
    { id: 11, name: "Dyno Room Control", link:"DynoListMainPageScreen" },
  ];

  const dropDownButtonsOutlane = [
    { id: 1, name: "Seprate Tests", data: [{ id: 1, name: "Axle Weigh Bridge On Ground Level", link: "AxleWeighBridgeOnGroundLevel" }, { id: 2, name: "100m Brake Test Lane", link: "brakeTestLane" }, { id: 3, name: "Four Post Hoist", link: "FourPostHoist" }, { id: 4, name: "Hand Brake Test Ramp", link: "handBrakeTestRamp" }, { id: 5, name: "Motorcycle Brake Test Ramp", link: "motorcycleBrakeTestRamp" }, { id: 6, name: "Portable Brake Roller Tester", link: "portable-brake-roller-tester" }, { id: 7, name: "Swept Circle Test Area", link: "swept-circle-test-area" }, { id: 8, name: "Tilting Stability Test", link: "TiltingStabilityTest" }] },
    { id: 2, name: "Vehicle Approval Seprate Test Result Entry " },
  ]
  useEffect(() => {
    if (navigator.onLine) {
      setIsdisableone(false);
    } else {
      setIsdisableone(true);
    }
    window.addEventListener("offline", function (e) {
      setIsdisableone(true);
    });
    window.addEventListener("online", function (e) {
      setIsdisableone(false);
    });
  }, []);
  useEffect(() => {
    const station = JSON.parse(localStorage.getItem("station") || "{}");
    const device = localStorage.getItem("deviceType") || "{}";
    setDeviceType(device);
    setCurrentStation(station);
  }, []);

  const [showWorkLoadListPopUp, setshowWorkLoadListPopUp] = useState(false);
  
  const handleWorkLoadListPopUp = () => {
    setshowWorkLoadListPopUp(true);
  };
  const closeWorkLoadListPopUp = (val) => {
    setshowWorkLoadListPopUp(val);
  };

  return (
    <div>
      {currentStation !== "DTCS" ? (
        <div className=" flex justify-between bg-navGrey">
          <div className=" bg-navGrey sm:w-[50%] sm:flex sm:flex-wrap md:w-[70%]">
            <Navbar className=" flex items-start justify-start bg-navGrey">
              <NavbarContent>
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="px-2 bg-transparent data-[focus=true]:text-navButton data-[hover=true]:text-navButton"
                        endContent={<ChevronDown size="15" />}
                        radius="sm"
                        variant="light"
                      >
                        Floor Managment
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                </Dropdown>
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[focus=true]:text-navButton data-[hover=true]:text-navButton"
                        endContent={<ChevronDown size="15" />}
                        radius="sm"
                        variant="light"
                        onClick={() => setDisplayShow(true)}
                      >
                        Outlane
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  {displayShow ? (
                    <DropdownMenu
                      className="block w-[330px] "
                      itemClasses={{
                        base: "gap-4",
                      }}
                      closeOnSelect={false}
                    >
                      {dropDownButtonsOutlane.map((btn) => <DropdownItem
                        shortcut={<IconCaretRightFilled color="gray-100" size="15" />}
                        className="data-[focus=true]:bg-navButton data-[hover=true]:bg-navButton data-[focus=true]:text-white data-[hover=true]:text-white">
                        <SeperateTestsMenu setDisplayShow={setDisplayShow} btnName={btn.name} key={btn.id} dropDownItem={btn?.data} />
                      </DropdownItem>)}

                    </DropdownMenu>
                  ) : (
                    <DropdownMenu
                      className="w-[200px] hidden"
                      itemClasses={{
                        base: "gap-4 hidden",
                      }}
                    >
                      {dropDownButtons.map((btn) => <DropdownItem
                        shortcut={<IconCaretRightFilled color="gray-100" size="15" />}
                        className="data-[focus=true]:bg-navButton data-[hover=true]:bg-navButton data-[focus=true]:text-white data-[hover=true]:text-white">
                        <SeperateTestsMenu setDisplayShow={setDisplayShow} btnName={btn.name} key={btn.id} dropDownItem={btn?.data} />
                      </DropdownItem>)}
                    </DropdownMenu>
                  )}
                </Dropdown>

                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[focus=true]:text-navButton data-[hover=true]:text-navButton"
                        endContent={<ChevronDown size="15" />}
                        radius="sm"
                        variant="light"
                      >
                        Summary
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    className="w-[200px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    <DropdownItem
                      key="Summary 1"
                      onClick={() => {
                        navigate("/SummaryReportGeneration");
                      }}
                    >
                      {" "}
                      Summary Report Generation
                    </DropdownItem>
                    <DropdownItem key="vehicle_watchlist">
                      Summary 2
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <Dropdown
                  classNames={{
                    content: ` ${displayShow
                        ? "shadow-sm rounded-none border-1 border-greyBorder rounded"
                        : "shadow-none outline-0 rounded-none p-0 "
                      }`,
                    base: `${displayShow ? "relative" : " absolute"}`,
                  }}
                >
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 pr-2 pl-2 bg-transparent data-[focus=true]:bg-navButton data-[hover=true]:bg-navButton data-[focus=true]:text-white data-[hover=true]:text-white"
                        endContent={<ChevronDown size="15" />}
                        radius="sm"
                        variant="light"
                        onClick={() => setDisplayShow(true)}
                      >
                        Settings
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  {displayShow ? (
                    <DropdownMenu
                      className="block w-[200px] "
                      itemClasses={{
                        base: "gap-4",
                      }}
                      closeOnSelect={false}
                    >
                      {dropDownButtons.map((btn) => (
                        <DropdownItem
                          shortcut={
                            <IconCaretRightFilled color="gray-100" size="15" />
                          }
                          className="data-[focus=true]:bg-navButton data-[hover=true]:bg-navButton data-[focus=true]:text-white data-[hover=true]:text-white"
                        >
                          <SeperateTestsMenu
                            setDisplayShow={setDisplayShow}
                            btnName={btn.name}
                            key={btn.id}
                            dropDownItem={btn?.data}
                          />
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  ) : (
                    <DropdownMenu
                      className="w-[200px] hidden"
                      itemClasses={{
                        base: "gap-4 hidden",
                      }}
                    >
                      {dropDownButtons.map((btn) => (
                        <DropdownItem
                          shortcut={
                            <IconCaretRightFilled color="gray-100" size="15" />
                          }
                          className="data-[focus=true]:bg-navButton data-[hover=true]:bg-navButton data-[focus=true]:text-white data-[hover=true]:text-white"
                        >
                          <SeperateTestsMenu
                            setDisplayShow={setDisplayShow}
                            btnName={btn.name}
                            key={btn.id}
                            dropDownItem={btn?.data}
                          />
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  )}
                </Dropdown>
                <div className=" text-navHeading font-calibri">VACS</div>
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[focus=true]:text-navButton data-[hover=true]:text-navButton"
                        endContent={<ChevronDown size="15" />}
                        radius="sm"
                        variant="light"
                      >
                        Inspection
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    className="w-[200px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    <DropdownItem key="staff_assignment">
                      Inspection 1
                    </DropdownItem>
                    <DropdownItem key="inspection_enquiry">
                      Inspection 2
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[focus=true]:text-navButton data-[hover=true]:text-navButton"
                        endContent={<ChevronDown size="15" />}
                        radius="sm"
                        variant="light"
                      >
                        ARTU
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    className="w-[200px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    <DropdownItem
                      key="ArtuAdministration"
                      onClick={() => {
                        navigate("/ArtuAdministration");
                      }}
                    >
                      {" "}
                      ARTU Management
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarContent>
              <Button className="   font-calibri text-white h-6 bg-persianGreen border-white  rounded-sm ml-8" onClick={() => handleWorkLoadListPopUp()}>
                DynoList
              </Button>
            </Navbar>
          </div>
          <div className="flex justify-between  sm:w-[50%] md:w-[40%]  items-center align-middle bg-navGrey">
            <div className=" text-popupHeading font-calibri ml-2">
              <span>
                current station:{" "}
                {deviceType === "Tablet" ? deviceType : currentStation}
              </span>
            </div>
            <div className=" text-popupHeading font-calibri ">
              <span>
                {deviceType && deviceType === "Tablet" ? (
                  isdisableone ? (
                    <WifiOff />
                  ) : (
                    <Wifi />
                  )
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className=" text-navHeading  font-calibri bg-persianGreen p-[2px] px-3 text-white">
              Workload List
            </div>
            <div className=" text-navHeading  font-calibri bg-persianGreen p-[2px] px-3 text-white mr-8">
              Return Lane
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex justify-between bg-navGrey">
          <div className=" bg-navGrey sm:w-[50%] sm:flex sm:flex-wrap md:w-[70%]">
            <Navbar className=" flex items-start justify-start bg-navGrey">
              <NavbarContent>
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-navButton data-[focus=true]:text-white data-[hover=true]:text-white text-white data-[focus=true]:bg-navButton data-[hover=true]:bg-navButton"
                        radius="sm"
                        variant="light"
                      >
                        DynoList
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                </Dropdown>
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[focus=true]:text-navButton data-[hover=true]:text-navButton"
                        endContent={<ChevronDown size="15" />}
                        radius="sm"
                        variant="light"
                      >
                        Enquiry
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    className="w-[200px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    <DropdownItem key="vehicle_enquiry">Enquiry 1</DropdownItem>
                    <DropdownItem key="vehicle_watchlist">
                      Enquiry 2
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[focus=true]:text-navButton data-[hover=true]:text-navButton"
                        endContent={<ChevronDown size="15" />}
                        radius="sm"
                        variant="light"
                      >
                        Settings
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    className="w-[200px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    {dtcsDropDownButtons.map((btn) => (
                      <DropdownItem
                        onClick={() => { navigate(`/${btn.link}`) }}
                        key={btn.name}
                        className=" data-[focus=true]:text-white data-[hover=true]:text-white data-[focus=true]:bg-navButton data-[hover=true]:bg-navButton"
                      >
                        {btn.name}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </NavbarContent>
            </Navbar>
          </div>
        </div>
      )}
       {showWorkLoadListPopUp && (
    <WorkLoadListPopUp
      showWorkLoadListPopUp ={showWorkLoadListPopUp }
      closeWorkLoadListPopUp ={closeWorkLoadListPopUp }
    ></WorkLoadListPopUp>
  )}
    </div>
  );
}
export { WifiOff, Wifi };
