import React, { useState } from "react";
import {
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  TableColumn,
  Input,
  Switch,
  cn,
  Pagination,
  SelectItem,
  Select,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { Settings } from "tabler-icons-react";
import NewTestFormulae from "./NewTestFormulae";
import DisableTestFormulaeConfirmation from "./DisableTestFormulaeConfirmation";
import ReactiveTestFormulae from "./ReactiveTestFormulae";
const uservalidityPeriodData = [
  {
    id: "1",
    testType: "Speedometere",
    vehicleclass: "001",
    manufacturedate: "ALL",
    firstregdate: "2018-05-23 - 2020-18-09",
    effectiveperiod: "2018-05-23 - 2020-18-09",
    updatedtime: "2019-09-09",
    status: "",
  },
  {
    id: "2",
    testType: "Speedometer",
    vehicleclass: "001",
    manufacturedate: "ALL",
    firstregdate: "2008-05-01-Present",
    effectiveperiod: "2018-05-23 - 2020-18-09",
    updatedtime: "2019-09-09",
    status: "",
  },
  {
    id: "3",
    testType: "SDD",
    vehicleclass: "002",
    manufacturedate: "ALL",
    firstregdate: "ALL",
    effectiveperiod: "2018-05-23 - 2020-18-09",
    updatedtime: "2019-09-09",
    status: "",
  },
  {
    id: "4",
    testType: "Brake Test",
    vehicleclass: "001",
    manufacturedate: "ALL",
    firstregdate: "ALL",
    effectiveperiod: "2018-05-23 - 2020-18-09",
    updatedtime: "2019-09-09",
    status: "",
  },
  {
    id: "5",
    testType: "Brake Test",
    vehicleclass: "001",
    manufacturedate: "ALL",
    firstregdate: "ALL",
    effectiveperiod: "2018-05-23 - 2020-18-09",
    updatedtime: "2019-09-09",
    status: "",
  },
];
const DefineTestFormulaeHomePage = () => {
  const [isDisableTestFormulaeConfirmation, setIsDisableTestFormulaeConfirmation] = useState(false);
  const [isReactiveTestFormulae, setIsReactiveTestFormulae] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleSwitchChange = () => {
    if (isActive) {
      setIsDisableTestFormulaeConfirmation(true);
    } else {
      setIsReactiveTestFormulae(true);
    }
    setIsActive(!isActive);
  };
   const [showNewTestFormulae, setshowNewTestFormulae] = useState(false);

  const handleNewTestFormulae = () => {
    setshowNewTestFormulae(true);
  };
  const closeNewTestFormulae = (val) => {
    setshowNewTestFormulae(val);
  };
  const [showDisableTestFormulaeConfirmation, setshowDisableTestFormulaeConfirmation] = useState(false);
  const handleDisableTestFormulaeConfirmation = () => {
    setshowDisableTestFormulaeConfirmation(true);
  };
  const closeDisableTestFormulaeConfirmation = (val) => {
    setshowDisableTestFormulaeConfirmation(val);
  };
  const [showReactiveTestFormulae, setshowReactiveTestFormulae] = useState(false);
  const handleReactiveTestFormulae = () => {
    setshowReactiveTestFormulae(true);
  };
  return (
    <div className="w-[100%] px-2 py-2">
      <div>
        <div className=" mt-3 ">
          <div className="  flex font-calibri font-bold ml-2  justify-start text-[16px]">
            Define Test Formulae
          </div>
        </div>
        <div className=" w-[100%] text-right   ">
          <label className="   mr-5 " htmlFor="Test Type">
            Test Type
          </label>
          <Input
            radius="none"
            labelPlacement="outside-left"
            size="sm"
            className=" inline-block md:w-[140px] border-greyBorder text-white rounded-md mr-3  w-[100%] "
            variant="bordered"
          ></Input>
          <label className="    mr-5 " htmlFor=" Vehicle Class">
            Vehicle Class
          </label>
          <Input
            radius="none"
            labelPlacement="outside-left"
            size="sm"
            className=" inline-block md:w-[140px] border-greyBorder  text-white rounded-md mr-5  w-[100%]"
            variant="bordered"
          ></Input>

          <Button
            className="text-white rounded-[2px] font-calibri font-bold bg-tropicalrainforest border-white h-8 "
            variant="light"
            radius="none"

          >
            Search
          </Button>
          <Button
            className="text-white rounded-[2px] font-calibri font-bold bg-tropicalrainforest ml-4 h-8"
            radius="none"
            onClick={handleNewTestFormulae}

          >
            Add
          </Button>
        </div>
        <div className="flex font-calibri first:rounded-none last:rounded-none">
          <Tabs 
          aria-label="Tabs colors"
          radius="none"

          classNames={{
            tabContent:
              "group-data-[selected=true]:bg-persianGreen  group-data-[selected=true]:text-white text-white  px-7 py-7 bg-[gray] ",
            tab: "max-w-fit px-0 h-5   text-center  bg-[gray] radius-none  border-r-darkgreen  first:rounded-none last:rounded-none",
          }}>
            <Tab
              key="General"
              title="General"
              className="ml-[-6px]"
            />
            <Tab
              key="MOM"
              title="MOM Specfic"
              className="ml-[-6px]"
            />
            <Tab
              key="videos"
              title="TA Specfic"
              className="ml-[-6px] "
            />
          </Tabs>

        </div>
        <div >
          <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }}>
            <TableHeader>
              <TableColumn className="bg-darkgreen  border-white text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
                ID
              </TableColumn>
              <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold first:rounded-none last:rounded-none ">
                Test Type
              </TableColumn>
              <TableColumn className="bg-darkgreen  text-white text-center text-sm font-bold first:rounded-none last:rounded-none ">
                Vehicle Class
              </TableColumn>
              <TableColumn className="bg-darkgreen  text-white text-center text-sm font-bold first:rounded-none last:rounded-none ">
                Manufacture Date
              </TableColumn>
              <TableColumn className="bg-darkgreen  text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
                First Reg. Date
              </TableColumn>
              <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
                Effective Period
              </TableColumn>
              <TableColumn className="bg-darkgreen  text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
                Update Time
              </TableColumn>
              <TableColumn className="bg-darkgreen  text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
                Status
              </TableColumn>
            </TableHeader>
            <TableBody>
              {uservalidityPeriodData.map((details) => {
                return (
                  <TableRow
                    key={details.id}
                    className="even:bg-lightblue odd:bg-fadedwhite font-calibri text-center"
                  >
                    <TableCell className="font-calibri font-bold text-sm text-center">
                      {details.id}
                    </TableCell>
                    <TableCell className="font-calibri font-bold text-sm text-center">
                      {details.testType}
                    </TableCell>
                    <TableCell className="font-calibri font-bold text-sm text-center">
                      {details.vehicleclass}
                    </TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm">
                      {details.manufacturedate}
                    </TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm">
                      {details.firstregdate}
                    </TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm">
                      {details.effectiveperiod}
                    </TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm">
                      {details.updatedtime}
                    </TableCell>
                    <TableCell
                      className=" text-center font-calibri text-sm">
                      <div className="flex justify-center px-4">
                      <Switch
                        name="switch"
                        size="sm"
                        placeholder="Active"
                        onChange={
                          handleSwitchChange
                        }
                        startContent={
                          <div className="flex justify-center items-center ">
                            Active
                          </div>
                        }
                        endContent={
                          <div className="flex justify-center items-center ">
                            Disable
                          </div>
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
                        <Settings
                          size={22}
                          color="black"
                          className="rounded-sm mt-[2px]"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className="flex justify-between mt-[10px]">
            <div className=" flex flex-row ">
              <div className=" font-[Calibri] text-sm mt-2 font-bold  ">
                All of 5 Pages
              </div>
              <div className="ml-2 w-[60px] mt-1  ">
                <Select
                  labelPlacement="outside-left"
                  radius="none"
                  size="sm"
                  name="page"
                  variant="bordered"
                >
                  <SelectItem key="10" value="10">10 </SelectItem>
                  <SelectItem key="20" value="20">20 </SelectItem>
                  <SelectItem key="30" value="30">30 </SelectItem>
                  <SelectItem key="40" value="40">40 </SelectItem>
                  <SelectItem key="50" value="50">50 </SelectItem>
                </Select>
              </div>
              <span className="  inline-flex ml-2 mt-2 font-[Claibri] text-sm font-bold">
                 page
              </span>
            </div>
            <div className=" justify-end mt-2">
              <Pagination isCompact showControls total={16} initialPage={1}
                classNames={{
                  wrapper: "overflow-visible h-8  rounded-none ",
                  item: "w-8 h-8 text-small rounded-none bg-transparent ",
                  prev: "rounded-none",
                  next: "rounded-none",
                  cursor:
                    "bg-gradient-to-r shadow-lg from-navButton to-navButton rounded-none  text-white font-bold h-7 ",
                }} />
            </div>
          </div>
        </div>
      </div>
       {showNewTestFormulae && (
        <NewTestFormulae
          showNewTestFormulae={showNewTestFormulae}
          closeNewTestFormulae={closeNewTestFormulae}
        ></NewTestFormulae>
      )}
{isDisableTestFormulaeConfirmation && (
        <DisableTestFormulaeConfirmation setIsDisableTestFormulaeConfirmation={setIsDisableTestFormulaeConfirmation} />
      )}
      {isReactiveTestFormulae && (
        <ReactiveTestFormulae setIsReactiveTestFormulae={setIsReactiveTestFormulae} />
      )}
    </div>
  );
};
export default DefineTestFormulaeHomePage;