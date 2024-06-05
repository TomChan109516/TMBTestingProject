import { Select, SelectItem, Switch, cn } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import React, { useState } from "react";
import CloselanePopup from "./CloselanePopup";

function OptionTabData() {
  const [showCloselanePopup, setshowCloselanePopup] = useState(false);
  const handleCloselanePopup = () => {
    setshowCloselanePopup(true);
  };
  const closeCloselanePopup = (val) => {
    setshowCloselanePopup(val);
  };
  return (
    <>
      <div className="w-[100%]  ">
        <div className="flex grid-cols-4 w-[100%] text-small font-bold mt-3">
          <div className="w-[15%] text-left ml-5">Current Lane :</div>
          <div className="w-[10%] text-left">13</div>
          <div className="w-[10%]" data-testId="System Date:">
            {" "}
            System Date :
          </div>
          <div className="w-[10%]">31/10/2024</div>
        </div>
        <div className="w-[100%]">
          <Table
            radius="none"
            className="bg-white  w-[70%]"
            shadow="none"
            classNames={{ table: "min-h-[200px]" }}
          >
            <TableHeader className=" bg-persianGreen text-[navButton]  font-[Calibir]  text-sm    text-center  text-small font-bold">
              <TableColumn className=" bg-darkgreen font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-white">
                <div className="text-small">Station</div>
              </TableColumn>
              <TableColumn className="bg-darkgreen text-white   font-[Calibir]  text-sm   text-center    font-bold border-1 border-white">
                <div className="text-small">ART</div>
              </TableColumn>
              <TableColumn className="bg-darkgreen text-white      text-center  font-[Calibir]  text-sm font-bold border-1 border-white">
                <div className="text-small">VPT</div>
              </TableColumn>
              <TableColumn className="bg-darkgreen text-white    text-center  font-[Calibir]  text-sm font-bold border-1 border-white">
                <div className="text-small">TMB Display</div>
              </TableColumn>
              <TableColumn className=" bg-darkgreen font-[Calibir]  first:rounded-none last:rounded-none text-sm text-white    text-center    font-bold border-1 border-white">
                <div className="text-small">Alternative IRS</div>
              </TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1" className="mt-2 p-[3px] bg-[fadedwhite] ">
                <TableCell className="h-10  p-[3px] ">A</TableCell>
                <TableCell className="h-10 p-[3px]">
                  {
                    <Select
                      placeholder="--"
                      labelPlacement="outside-left"
                      size="sm"
                      radius="none"
                      name="center"
                      aria-label="center"
                      variant="bordered"
                      className="w-[90px] bg-white"
                    >
                      <SelectItem>On</SelectItem>
                      <SelectItem>Off</SelectItem>
                    </Select>
                  }
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
              </TableRow>
              <TableRow key="2" className="bg-tablebg">
                <TableCell className="h-10  p-[3px]">B</TableCell>

                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    aria-label="center"
                    radius="none"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
              </TableRow>
              <TableRow key="3" className="bg-[fadedwhite]">
                <TableCell className="h-10  p-[3px]">C</TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                  </Select>
                </TableCell>
              </TableRow>
              <TableRow key="4" className="bg-tablebg">
                <TableCell className="h-10  p-[3px]">D</TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    radius="none"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    aria-label="center"
                    radius="none"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    radius="none"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
              </TableRow>
              <TableRow key="5" className="bg-[fadedwhite]">
                <TableCell className="h-10  p-[3px]">E</TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    aria-label="center"
                    radius="none"
                    variant="bordered"
                    className="w-[90px] bg-white "
                    classNames={{ trigger: "bg-gray" }}
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white"
                    classNames={{ trigger: "bg-gray" }}
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    radius="none"
                    aria-label="center"
                    variant="bordered"
                    className="w-[90px] bg-white rounded-sm "
                    classNames={{ trigger: "bg-gray" }}
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
                <TableCell className="h-10  p-[3px]">
                  <Select
                    placeholder="--"
                    labelPlacement="outside-left"
                    size="sm"
                    name="center"
                    aria-label="center"
                    variant="bordered"
                    radius="none"
                    className="w-[90px] bg-white rounded-sm "
                  >
                    <SelectItem>On</SelectItem>
                    <SelectItem>Off</SelectItem>
                  </Select>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="flex text-small w-100% ml-5">
            <b>Lane Open/Close:</b>
            <Switch
              name="switch"
              size="sm"
              data-testId="OPEN"
              startContent={<p>OPEN</p>}
              endContent={<p>CLOSE</p>}
              onClick={handleCloselanePopup}
              classNames={{
                wrapper:
                  "h-[24px] bg-[red] overflow-visible  ml-40 mt-1 group-data-[selected=true]:bg-green w-[70px] ",
                thumb: cn(
                  "w-3.5 h-3.5 shadow-lg",
                  "group-data-[hover=true]:border-primary",
                  "group-data-[selected=true]:ml-12",
                  "group-data-[pressed=true]:w-7",
                  "group-data-[selected]:group-data-[pressed]:ml-4"
                ),
              }}
              value="switch"
            />
          </div>

          <div className="flex ml-5">
            <div className="text-small mt-2">
              <b>Vehical Trafic Control (VTC) Mode:</b>
            </div>
            <Switch
              name="switch"
              size="sm"
              startContent={<p>AUTO</p>}
              endContent={<p>OPEN</p>}
              classNames={{
                wrapper:
                  "h-[24px] bg-[red] overflow-visible ml-12 mt-2 group-data-[selected=true]:bg-green w-[70px] ",
                thumb: cn(
                  "w-3.5 h-3.5 shadow-lg",
                  "group-data-[hover=true]:border-primary",
                  "group-data-[selected=true]:ml-12",
                  "group-data-[pressed=true]:w-7",
                  "group-data-[selected]:group-data-[pressed]:ml-4"
                ),
              }}
              value="switch"
            />
          </div>

          <div className="justify start ml-2  mb-3"></div>
          <div className=" justify-end"></div>
        </div>
      </div>

      {showCloselanePopup && (
        <CloselanePopup
          showCloselanePopup={showCloselanePopup}
          closeCloselanePopup={closeCloselanePopup}
        ></CloselanePopup>
      )}
    </>
  );
}

export default OptionTabData;
