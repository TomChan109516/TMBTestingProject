import { Button, Input, Select, SelectItem, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Switch, cn, Pagination } from "@nextui-org/react";
import React from "react";
import { Settings } from "tabler-icons-react";
import { useState } from "react";
import NewPopUp from "./NewPopUp";
import DisableReason from "./DisableReason";
import ReactivateReason from "./ReactivateReason";

const vehicleData = [
  {
    id: "1",
    Id: "555",
    Model: "5555",
    Make: "From Dyno Test",
    assigned: ""
  },

];

const SkipTest = () => {
  const [showNewPopUp, setshowNewPopUp] = useState(false);
  const [isReactivateReason, setIsReactivateReason] = useState(false);
  const [isDisableReason, setIsDisableReason] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const handleSwitchChange = () => {
    if (isActive) {
      setIsDisableReason(true);
    } else {
      setIsReactivateReason(true);
    }
    setIsActive(!isActive);
  };
  const handleNewPopUp = () => {
    setshowNewPopUp(true);
  };
  const closeNewPopUp = (val) => {
    setshowNewPopUp(val);
  };

  return (

    <div>
      <div className="ml-5 mr-5">
        <>
          <div className="flex flex-col text-Black font-calibri font-bold  text-left i justify-center  gap-1 mb-2 mt-1">
            Skip Test Reason Maintenance
          </div>

          <div>
            <div className="flex flex-col sm:flex-row justify-between mb-2 mt-4">
              <div>
                <Button
                  className="text-white font-calibri font-bold rounded-md bg-tropicalrainforest border-greyBorder h-8"
                  variant="light"
                  onClick={handleNewPopUp}
                >
                  New
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row">

                <div className="flex">
                  <span className="font-bold text-[14px] mr-1 mt-1 sm:ml-4 md:ml-4 lg:ml-30"> Code </span>
                  <Input
                    labelPlacement="inside"
                    className="w-full sm:w-[120px] md:w-[45px] lg:w-[160px]"
                    radius="sm"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                  />
                </div>

                <div className="flex">
                  <span className="font-bold text-[14px] mt-1 mr-1 md:ml-4 w-16">Test Type </span>
                  <Select
                    radius="sm"
                    size="sm"
                    variant="bordered"
                    className="w-full sm:w-[160px] md:w-[70px] lg:w-[200px] font-bold bg-white border-greyBorder rounded-sm"
                  >
                    <SelectItem key={1}>-</SelectItem>
                  </Select>
                </div>

                <div className="flex">
                  <span className="font-bold text-[14px] mt-1 mr-1 md:ml-4">Description</span>
                  <Input
                    labelPlacement="inside"
                    className="w-full sm:w-[160px] md:w-[80px] lg:w-[270px] rounded-sm"

                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                  />
                </div>

                <div className="flex ml-4">
                  <Button
                    className="text-white font-calibri font-bold rounded-md bg-tropicalrainforest border-greyBorder h-8"
                    variant="light" >
                    Reset
                  </Button>
                </div>
                <div className="flex ml-4">
                  <Button
                    className="text-white font-calibri font-bold rounded-md bg-tropicalrainforest border-greyBorder h-8"
                    variant="light" >
                    Search
                  </Button>
                </div>

              </div>
            </div>
            <div className="  mb-10  ">
              <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }}>
                <TableHeader className=" bg-persianGreen text-darkwhite  font-[Calibir]  text-sm    text-center   text-sm font-bold">
                  <TableColumn className=" bg-darkgreen  text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none ">
                    Code
                  </TableColumn>
                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white  ">
                    Description
                  </TableColumn>

                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white   ">
                    Test Type
                  </TableColumn>

                  <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
                    Option
                  </TableColumn>
                </TableHeader>
                <TableBody>
                  {vehicleData.map((details) => {
                    return (
                      <TableRow className="odd:bg-fadedwhite even:bg-lightblue key={details.id}">
                        <TableCell className="font-calibri font-bold  text-sm   text-center">
                          {details.Id}
                        </TableCell>
                        <TableCell className=" font-calibri font-bold  text-sm   text-center ">
                          {details.Model}
                        </TableCell>

                        <TableCell className=" font-calibri font-bold  text-sm  text-center  ">
                          {details.Make}

                        </TableCell>

                        <TableCell className=" text-center font-calibri text-sm w-[200px]">
                          <div className="flex justify-center px-4">  {details.assigned}
                            <Switch
                              name="switch"
                              data-testid="switch"
                              size="md"
                              onChange={() => {
                                handleSwitchChange();
                              }}
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
                              value="switch"
                              defaultSelected
                            />
                            <Settings size={18} color="black" className=" mt-1 ml-3" />
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>

              <div className="flex flex-row justify-between">
                <div className=" text-sm mt-2 font-bold font-calibri  ">
                  Showing 1 to 4 of 4 rows
                </div>

                <div className="flex mt-4">
                  <Pagination
                    isCompact
                    showControls
                    total={1}
                    classNames={{
                      wrapper: "gap-0 overflow-visible h-8  rounded-none bg-lightGreen",
                      item: "w-8 h-6 text-small rounded-none bg-transparent ",
                      prev: "rounded-none",
                      next: "rounded-none",
                      cursor:
                        "bg-gradient-to-b shadow-lg from-navButton to-navButton rounded-none  text-white font-bold h-5 ",
                    }}
                    initialPage={1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div >
          </div>
        </>

      </div>
      {showNewPopUp && (

        <NewPopUp
          showNewPopUp={showNewPopUp}
          closeNewPopUp={closeNewPopUp}>
        </NewPopUp>

      )}

      {isDisableReason && (
        <DisableReason setIsDisableReason={setIsDisableReason} />
      )}
      {isReactivateReason && (
        <ReactivateReason setIsReactivateReason={setIsReactivateReason} />
      )}
    </div>
  );
}

export default SkipTest;