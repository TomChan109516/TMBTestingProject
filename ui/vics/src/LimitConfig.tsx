import { SelectItem, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React from "react";
import { Select, Table } from "@nextui-org/react";


function LimitConfig(props) {
  const open = props.showLimitConfig;


  return (
    <div>

      <div className="flex mt-7 ml-8">
        <b >  Reset/Abort/Suspend Limit configuration</b></div>
      <div className="mt-10 ml-10 mr-8">
        <div className="bg-persianGreen text-white w-[80px] ml-[1px] ">VICS</div>
        <Table
          radius="none"
          className="bg-white pt-0 flex font-calibri"
          classNames={{ wrapper: "p-0" }}
          shadow="none"
        >

          <TableHeader className=" p-0   bg-persianGreen font-[Calibir]  text-center  font-bold text-inputTxt ">
            <TableColumn className=" bg-green  font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
              <div className="text-small ">Section</div>
              <div className="-10 ... absolute top-[14%] mr-1 -ml-2 left-0">

              </div>
            </TableColumn>
            <TableColumn className="bg-green text-white  font-[Calibir]  text-sm   text-center font-bold border-1 border-greyBorder">
              <div className="text-small">Limit</div>
            </TableColumn>
            <TableColumn className="bg-green text-white  text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
              <div className="text-small">OHM</div>
            </TableColumn>
            <TableColumn className="bg-green text-white  text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
              <div className="text-small">VI</div>
            </TableColumn>
            <TableColumn className=" bg-green font-[Calibir]  first:rounded-none last:rounded-none text-sm text-white    text-center    font-bold border-1 border-greyBorder">
              <div className="text-small">Brake</div>
            </TableColumn>
            <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
              <div className="text-small">HT</div>
            </TableColumn>
            <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
              <div className="text-small">Exhaust</div>
            </TableColumn>
            <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
              <div className="text-small">Speed.</div>
            </TableColumn>
            <TableColumn className="bg-green text-white  text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
              <div className="text-small">Teximeter</div>
            </TableColumn>
            <TableColumn className="bg-green text-white  text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
              <div className="text-small">SDD</div>
            </TableColumn>
            <TableColumn className=" bg-green font-[Calibir]  first:rounded-none last:rounded-none text-sm text-white    text-center    font-bold border-1 border-greyBorder">
              <div className="text-small">UCI</div>
            </TableColumn>
            <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
              <div className="text-small">SLD</div>
            </TableColumn>
            <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
              <div className="text-small">EDRD</div>
            </TableColumn>
            <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
              <div className="text-small">AWB</div>
            </TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1" className=" mb-2 bg-lightblue  text-innerInputTxt ">
              <TableCell className="h-10 bg-lightblue p-[3px] border-1 border-greyBorder">
                <b className="text-innerInputTxt">
                  TD
                </b>
              </TableCell>
              <TableCell className="h-10 bg-lightblue p-[3px] border-1 border-greyBorder">
                <b className="text-innerInputTxt">
                  Retest
                </b>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>

            </TableRow>
            <TableRow
              key="2"
              className=" border-1 bg-lightblue border-greyBorder">
              <TableCell className="h-10 bg-lightblue p-[3px}">
                <b>MOM</b>
              </TableCell>
              <TableCell className="h-10 bg-lightblue p-[3px] border-1 border-greyBorder">
                <b>Retest</b>

              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="visualResult"
                  radius="none"
                  aria-label="visualResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="brakeResult"
                  radius="none"
                  aria-label="brakeResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >

                  <SelectItem
                    key=""
                  >

                  </SelectItem>

                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="headlampResult"
                  radius="none"
                  aria-label="headlampResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem
                    key="">

                  </SelectItem>

                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="exhaustResult"
                  radius="none"
                  aria-label="exhaustResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem
                    key=""
                  >

                  </SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="SpeedometerResult"
                  radius="none"
                  aria-label="SpeedometerResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem
                    key=""
                  >
                  </SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="undercarriageResult"
                  radius="none"
                  aria-label="undercarriageResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem
                    key=""
                  >
                  </SelectItem>
                </Select>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </div>

      <div className="mt-12 ml-10">
        <div className="bg-persianGreen text-white w-[83px] ml-[1px] ">VICS</div>
        <Table
          radius="none"
          className="bg-white flex font-calibri w-[40%]"
          classNames={{ wrapper: "p-0" }}

          shadow="none"
        >
          <TableHeader className=" bg-persianGreen font-[Calibir]  text-center  font-bold text-inputTxt ">
            <TableColumn className=" bg-green  font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
              <div className="text-small ">Section</div>
              <div className="-10 ... absolute top-[14%] mr-1 -ml-2 left-0">

              </div>
            </TableColumn>

            <TableColumn className="bg-green text-white  text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
              <div className="text-small">Limit</div>
            </TableColumn>
            <TableColumn className="bg-green text-white  text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
              <div className="text-small">Dyno</div>
            </TableColumn>
            <TableColumn className=" bg-green font-[Calibir]  first:rounded-none last:rounded-none text-sm text-white    text-center    font-bold border-1 border-greyBorder">
              <div className="text-small">Exhaust</div>
            </TableColumn>
            <TableColumn className="bg-green text-white  font-[Calibir]  text-sm   text-center font-bold border-1 border-greyBorder">
              <div className="text-small">Teximeter</div>
            </TableColumn>
            <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
              <div className="text-small">SLD</div>
            </TableColumn>

          </TableHeader>
          <TableBody>
            <TableRow key="1" className=" mb-2 bg-lightblue text-innerInputTxt ">
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <b>MOM</b>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <b>Retest</b>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>


            </TableRow>
            <TableRow key="2" className=" mb-2 bg-lightblue text-innerInputTxt ">
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <b>MOM</b>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <b>Abort</b>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>


            </TableRow>
            <TableRow key="3" className=" mb-2 bg-lightblue text-innerInputTxt ">
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <b>MOM</b>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <b>Suspend</b>

              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  data-testid="Select"
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>
              <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
                <Select
                  labelPlacement="outside-left"
                  size="sm"
                  name="ohmResult"
                  radius="none"
                  aria-label="ohmResult"
                  variant="bordered"
                  className="w-[90px] bg-white rounded-sm "
                >
                  <SelectItem key=""></SelectItem>
                </Select>
              </TableCell>


            </TableRow>

          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default LimitConfig;