import React, { useState } from "react";

import { Settings } from "tabler-icons-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  Button,
  Input,
  TableRow,
  TableCell,
  Select,
  SelectItem,
  Pagination,
  Switch,
  cn,
} from "@nextui-org/react";
import TestExemptVehicle from "./TestExemptVehicle";
import DisableExemption from "./DisableExemption";
import ReactiveExemption from "./ReactiveExemption";
const uservalidityPeriodData = [
  {
    id: "1",
    vehicleid: "115547fd",
    vehicleclass: "001",
    regmark: "1",
    chassisnumber: "1155453",
    reason: "FaultyEquipment",
    remark: "-",
  },
];

export default function ExemptVehicle() {
  const [isDisableExemption, setIsDisableExemption] = useState(false);
  const [isReactiveExemption, setIsReactiveExemption] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleSwitchChange = () => {
    if (isActive) {
      setIsDisableExemption(true);
    } else {
      setIsReactiveExemption(true);
    }
    setIsActive(!isActive);
  };
  const [testExemptVehicle, setTestExemptVehicle] = useState(false);
  const [showDisableExemption, setshowDisableExemption] = useState(false);

  const handleDisableExemption = () => {
    setshowDisableExemption(true);
  };
  const closeDisableExemption = (val) => {
    setshowDisableExemption(val);
  };

  const [showReactiveExemption, setshowReactiveExemption] = useState(false);

  const handleReactiveExemption = () => {
    setshowReactiveExemption(true);
  };
  const closeReactiveExemption = (val) => {
    setshowReactiveExemption(val);
  };

  const handleNewClick = () => {
    setTestExemptVehicle(true);
  };
  return (
    <>
      <div className=" flex mt-4 ml-8 ">
        <div className="font-bold">
          <div className=" flex justify-between ml-0">
            <p> Exempt Vehicle from Test Maintenance</p>
          </div>
          <div className=" flex justify-center mb-4 "></div>
          <Button
            className=" bg-lightGreen text-white rounded-sm mr-8 font-bold text-xs float-left"
            variant="bordered"
            type="submit"
            size="sm"
            radius="none"
            onClick={handleNewClick}
          >
            New
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 text-right gap-1  font-calibri text-inputTxt font-bold ">
        <div className=" flex flex-grow-0 m-1 items-center mt-5 font-calibri  ">
          <span className="ml-1   w-[70%] ">Veh.ID</span>
          <Input
            placeholder=" "
            data-testid="bodyType"
            labelPlacement="outside-left"
            size="sm"
            className="ml-1  w-[80%]"
            radius="none"
            variant="bordered"
          ></Input>
        </div>
        <div className="flex m-1 items-center mt-5 font-calibri justify   ">
          <span className="ml-1 w-[36%] ">Vehicle class</span>
          <Select
            placeholder=""
            data-testid="engineModelid"
            labelPlacement="outside-left"
            size="sm"
            className="ml-1 w-[50%]"
            radius="none"
            variant="bordered"
          >
            <SelectItem className="text-[10px]" key={""}></SelectItem>
          </Select>
        </div>
        <div className="flex m-1 items-center mt-5 font-calibri justify   ">
          <span className="ml-1 w-[36%] ">Reg.Mark</span>
          <Input
            placeholder=""
            data-testid="engineModel"
            labelPlacement="outside-left"
            size="sm"
            className="ml-1 w-[60%]"
            radius="none"
            variant="bordered"
          ></Input>
        </div>

        <div className="flex m-1 items-center mt-5 font-calibri justify   ">
          <span className="ml-1 w-[36%] ">Chassis Number</span>
          <Input
            placeholder=""
            data-testid="enineModel"
            labelPlacement="outside-left"
            size="sm"
            className="ml-1 w-[60%]"
            radius="none"
            variant="bordered"
          ></Input>
        </div>
      </div>
      <div className="grid grid-cols-4 text-right gap-1 font-calibri text-inputTxt font-bold">
        <div className=" flex flex-grow-0 m-1 items-center mt-1 font-calibri  ">
          <span className="ml-1    w-[70%] ">Skip Reason</span>
          <Input
            placeholder=" "
            data-testid="bodyType"
            labelPlacement="outside-left"
            size="sm"
            className="ml-1  w-[80%]"
            radius="none"
            variant="bordered"
          ></Input>
        </div>

        <div className="flex m-1 items-center mt-1 font-calibri   ">
          <span className="ml-16 w-[36%] ">Remark</span>
          <Input
            placeholder=""
            data-testid="engineModelid"
            labelPlacement="outside-left"
            size="sm"
            className="ml-2  w-[140%]"
            radius="none"
            variant="bordered"
          ></Input>
        </div>
      </div>
      <div className=" flex justify-center mt-1 float-right">
        <Button
          className=" bg-lightGreen text-white rounded-sm mr-8  font-bold text-xs"
          variant="bordered"
          type="submit"
          size="sm"
          radius="none"
        >
          Reset
        </Button>
        <Button
          className=" bg-lightGreen text-white rounded-sm mr-8  font-bold text-xs"
          variant="bordered"
          type="submit"
          size="sm"
          radius="none"
        >
          Search
        </Button>
      </div>
      <div className="ml-8 mt-4 mb-10 mr-7 ">
        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }}>
          <TableHeader>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              ID
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              Veh.ID
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              Vehicle Class
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              Reg.Mark
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              Chssis Number
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              Reason
            </TableColumn>

            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              Remark
            </TableColumn>

            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              Option
            </TableColumn>
          </TableHeader>
          <TableBody>
            {uservalidityPeriodData.map((details) => {
              return (
                <TableRow
                  key={details.id}
                  className="even:bg-lightblue odd:bg-fadedwhite font-calibri text-center"
                >
                  <TableCell className=" border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm ">
                    {details.id}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                    {details.vehicleid}
                  </TableCell>
                  <TableCell className="border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                    {details.vehicleclass}
                  </TableCell>

                  <TableCell className="  border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                    {details.regmark}
                  </TableCell>
                  <TableCell className="   border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                    {details.chassisnumber}
                  </TableCell>
                  <TableCell className="   border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                    {details.reason}
                  </TableCell>
                  <TableCell className="   border-1  border-greyBorder   text-centerfont-calibri font-bold  text-sm">
                    {details.remark}
                  </TableCell>

                  <TableCell className=" text-center font-calibri text-sm">
                    <div className="flex justify-center px-4">
                      <Switch
                        name="switch"
                        title="switch"
                        size="sm"
                        placeholder="Active"
                        onChange={handleSwitchChange}
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
                            "h-[24px] bg-limeGreen overflow-visible   group-data-[selected=true]:bg-persianGreen w-[80px] ",
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
        <div className="  flex justify-end  mr-10 mt-2">
          <Pagination
            isCompact
            showControls
            color="success"
            total={1}
            initialPage={1}
            classNames={{
              wrapper:
                "gap-0 overflow-visible h-8  rounded-none border-[black]",
              item: "w-8 h-8 text-[12px] rounded-none text-[blue] font-bold",
              prev: "h-8 rounded-none",
              next: " h-8 rounded-none",
              cursor:
                "bg-gradient-to-b shadow-lg from-[#61dafbaa] to-[#61dafbaa] rounded-none  text-white font-bold h-8 border-[black]",
            }}
          />
        </div>
      </div>{" "}
      {testExemptVehicle && (
        <TestExemptVehicle
          testExemptVehicle={testExemptVehicle}
          setTestExemptVehicle={setTestExemptVehicle}
        />
      )}
      {isDisableExemption && (
        <DisableExemption setIsDisableExemption={setIsDisableExemption} />
      )}
      {isReactiveExemption && (
        <ReactiveExemption setIsReactiveExemption={setIsReactiveExemption} />
      )}
    </>
  );
}
