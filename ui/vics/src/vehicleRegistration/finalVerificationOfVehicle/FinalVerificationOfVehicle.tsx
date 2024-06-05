import React from "react";
import {
  Select,
  SelectItem,
  Table,
  TableHeader,
  TableColumn,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@nextui-org/react";
import { IconChevronsUp } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function FinalVerificationOfVehicle({ setIcondown }) {
  const navigate = useNavigate();
  return (
    <div className="w-[60%] xl:w-[82%]  m-[-14px]">
      <Table
        radius="none"
        className="bg-white  w-full flex mr-6 font-calibri"
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
          <TableColumn className="bg-green text-white   font-[Calibir]  text-sm   text-center    font-bold border-1 border-greyBorder">
            <div className="text-small">AWB on G.L</div>
          </TableColumn>
          <TableColumn className="bg-green text-white      text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
            <div className="text-small">100m Brake</div>
          </TableColumn>
          <TableColumn className="bg-green text-white    text-center  font-[Calibir]  text-sm font-bold border-1 border-greyBorder">
            <div className="text-small">4 Post Hoist</div>
          </TableColumn>
          <TableColumn className=" bg-green font-[Calibir]  first:rounded-none last:rounded-none text-sm text-white    text-center    font-bold border-1 border-greyBorder">
            <div className="text-small">Hand Brake</div>
          </TableColumn>
          <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
            <div className="text-small">Motor Brake</div>
          </TableColumn>
          <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
            <div className="text-small">Port. Brake</div>
          </TableColumn>
          <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
            <div className="text-small">Swipe Cricle</div>
          </TableColumn>
          <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
            <div className="text-small">Tilt Test</div>
          </TableColumn>
          <TableColumn className=" bg-green font-[Calibir] first:rounded-none last:rounded-none text-sm text-white   text-center  font-bold border-1 border-greyBorder">
            <div className="text-small text-start flex flex-row">
              <span>Dyno Test</span>
              <span>
                <IconChevronsUp
                  size={25}
                  color="white"
                  onClick={() => setIcondown(false)}
                />
              </span>
            </div>
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" className=" mb-2 bg-white text-innerInputTxt ">
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder text-inputTxt ">
              <b>Result</b>
            </TableCell>

            <TableCell className="h-10  p-[3px] border-1 border-greyBorder text-inputTxt ">
              <b className="text-innerInputTxt">PASS</b>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <b className="text-innerInputTxt">
                <Button
                  size="sm"
                  className="bg-persianGreen font-bold text-white h-8  rounded  w-[55%]       "
                  radius="none"
                  onClick={() => navigate("/brakeTestLane")}
                >
                  Inspect
                </Button>
              </b>
            </TableCell>

            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <b className="text-innerInputTxt">*PASS</b>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <Button
                size="sm"
                className="bg-persianGreen font-bold text-white h-8  rounded  w-[55%]       "
                radius="none"
                onClick={() => navigate("/handBrakeTestRamp")}
              >
                Inspect
              </Button>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              {" "}
              <b className="text-innerInputTxt">
                <Button
                  size="sm"
                  className="bg-persianGreen font-bold text-white h-8  rounded  w-[55%]       "
                  radius="none"
                  onClick={() => navigate("/motorcycleBrakeTestRamp")}
                >
                  Inspect
                </Button>
              </b>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              {" "}
              <b className="text-innerInputTxt">
                <Button
                  size="sm"
                  className="bg-persianGreen font-bold text-white h-8  rounded  w-[55%]       "
                  radius="none"
                >
                  Inspect
                </Button>
              </b>
            </TableCell>

            <TableCell className="h-10 p-[3px] border-1 border-greyBorder">
              <Button
                size="sm"
                className="bg-persianGreen font-bold text-white h-8  rounded  w-[55%]       "
                radius="none"
              >
                Inspect
              </Button>
            </TableCell>

            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <Button
                size="sm"
                className="bg-persianGreen font-bold text-white h-8  rounded  w-[55%]       "
                radius="none"
              >
                Inspect
              </Button>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <b className="text-innerInputTxt"></b>
            </TableCell>
          </TableRow>
          <TableRow key="2" className="bg-[#e8fbf5] border-1 border-greyBorder">
            <TableCell className="h-10   p-[3px]">
              <b>Ctr Rm</b>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <Select
                placeholder="P"
                labelPlacement="outside-left"
                size="sm"
                name="center"
                radius="none"
                aria-label="center"
                variant="bordered"
                className="w-[90px] bg-white rounded-sm "
              >
                <SelectItem key={""}>P</SelectItem>
                <SelectItem key={""}>F</SelectItem>
              </Select>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
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
                <SelectItem key={""}>P</SelectItem>
                <SelectItem key={""}>F</SelectItem>
              </Select>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <Select
                placeholder="P"
                labelPlacement="outside-left"
                size="sm"
                name="center"
                radius="none"
                aria-label="center"
                variant="bordered"
                className="w-[90px] bg-white rounded-sm "
              >
                <SelectItem key={""}>P</SelectItem>
                <SelectItem key={""}>F</SelectItem>
              </Select>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <Select
                placeholder="S"
                labelPlacement="outside-left"
                size="sm"
                name="center"
                radius="none"
                aria-label="center"
                variant="bordered"
                className="w-[90px] bg-white rounded-sm "
              >
                <SelectItem key={""}>P</SelectItem>
                <SelectItem key={""}>F</SelectItem>
              </Select>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <Select
                placeholder="F"
                labelPlacement="outside-left"
                size="sm"
                name="center"
                radius="none"
                aria-label="center"
                variant="bordered"
                className="w-[90px] bg-white rounded-sm "
              >
                <SelectItem key={""}>P</SelectItem>
                <SelectItem key={""}>F</SelectItem>
              </Select>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
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
                <SelectItem key={""}>P</SelectItem>
                <SelectItem key={""}>F</SelectItem>
              </Select>
            </TableCell>

            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <Select
                placeholder="--"
                labelPlacement="outside-left"
                size="sm"
                name="center"
                radius="none"
                aria-label="center"
                variant="bordered"
                classNames={{ trigger: "bg-lightGrey" }}
              >
                <SelectItem key={""}>P</SelectItem>
                <SelectItem key={""}>F</SelectItem>
              </Select>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <Select
                placeholder="--"
                labelPlacement="outside-left"
                size="sm"
                radius="none"
                name="center"
                aria-label="center"
                variant="bordered"
                className="w-[90px] bg-white rounded-sm "
                classNames={{ trigger: "bg-lightGrey" }}
              >
                <SelectItem key={""}>P</SelectItem>
                <SelectItem key={""}>F</SelectItem>
              </Select>
            </TableCell>
            <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
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
                <SelectItem key={""}>P</SelectItem>
                <SelectItem key={""}>F</SelectItem>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow key="3" className="bg-white   border-1 border-greyBorder ">
            <TableCell className="h-10  p-[3px] font-bold   border-1 border-greyBorder">
              <b className=" text-innerInputTxt">Tester</b>
            </TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <b className=" text-innerInputTxt">VT1</b>
            </TableCell>
            <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
              <b className=" text-innerInputTxt"></b>
            </TableCell>
            <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
              <b className=" text-innerInputTxt">VT1</b>
            </TableCell>
            <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
              <b className=" text-innerInputTxt">VT1</b>
            </TableCell>
            <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
              <b className=" text-innerInputTxt">VT1</b>
            </TableCell>
            <TableCell className="h-10  p-[3px]  border-1 border-greyBorder">
              <b className=" text-innerInputTxt"></b>
            </TableCell>
            <TableCell
              className="h-10  p-[3px] border-1 border-greyBorder"
              children={undefined}
            ></TableCell>
            <TableCell
              className="h-10  p-[3px]"
              children={undefined}
            ></TableCell>
            <TableCell className="h-10  p-[3px] border-1 border-greyBorder">
              <b className=" text-innerInputTxt"></b>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default FinalVerificationOfVehicle;
