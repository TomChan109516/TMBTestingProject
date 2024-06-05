import {
  Button,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
} from "@nextui-org/react";
import { AlertCircle, Search } from "tabler-icons-react";
import { theme } from "../common/themes/themeConfig";
import React, { useState } from "react";

function MaintainVehicleAttribute() {
  const [resetvalue, setResetvalue] = useState("");
  const [subClass, setSubClass] = useState<Selection>(new Set([]));
  const [vehicleClass, setVehicleClass] = useState("");

  const handleChange = (event) => {
    setResetvalue(event.target.value);
  };

  const ResetbtnFunc = () => {
    setSubClass(new Set([]));
    setVehicleClass("");
  };

  const lanes = [
    { value: "Select.." },
    { value: "Primary" },
    { value: "Supplementary" },
  ];

  return (
    <div className="">
      <div className="flex-initial text-[#0a923d] p-[5px] text-left ml-2 font-bold text-sm">
        Vehicle Attributelist {">"}Add
      </div>

      <div className="flex text-left text-xs ml-2 bg-[#f5f5dc] text-[#daa520] p-2">
        <AlertCircle
          size={18}
          strokeWidth={2}
          color={"#daa520"}
          className="mr-2"
        />
        Only the first 1000 matching attribute records since there were too many
        record found. Please refine your searching Criteria if necessary
      </div>

      <div className="flex-initial ml-2 text-left text-[#191918] p-[2px]  text-xs">
        1000 record(s) found.
      </div>

      <div className="ml-1 mt-2 mr-1 min-h-[325px] max-h-[325px] h-[325px] border-1 overflow-x-hidden text-black">
        <div
          className={`text-left bg-[${theme?.colors?.persianGreen}] text-white border pl-2 `}
        >
          Attribute
        </div>
        <div>
          <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
            <TableHeader className=" bg-[#A0D9C1] text-[#00AF8F] text-xs  text-center font-bold">
              <TableColumn className="bg-[#A0D9C1]  text-[#00AF8F] text-xs text-center font-bold border-1 border-white first:rounded-none">
                <CheckboxGroup>
                  <Checkbox
                    name="selectCheckbox"
                    radius="none"
                    size="sm"
                    classNames={{
                      wrapper: "before:bg-[#FFFFFF] after:bg-[#00AF8F]",
                    }}
                  />
                </CheckboxGroup>
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1]  text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                Class
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                Sub Class
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                T.A.NO
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                VehicleId
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                MakeId
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1]  text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                Reg. Mark
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1]  text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                Chassis No.
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1]  text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                Model
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                Manu. Year
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                <span className="font-bold text-[#00AF8F]">*</span>PGV Weight
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1]  text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                Body Type
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1]  text-[#00AF8F] text-xs text-center font-bold border-1 border-white">
                Engine Type
              </TableColumn>
              <TableColumn className="bg-[#A0D9C1] text-[#00AF8F] text-xs text-center font-bold border-1 border-white last:rounded-none">
                First Reg. Date
              </TableColumn>
            </TableHeader>
            <TableBody className="text-xs">
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  <CheckboxGroup>
                    <Checkbox
                      name="selectCheckbox"
                      radius="none"
                      size="sm"
                      classNames={{ wrapper: "after:bg-[#00AF8F]" }}
                    />
                  </CheckboxGroup>
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]"></TableCell>
                <TableCell className="border-1 text-xs  border-greyBorder p-[5px]">
                  60146000
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  002283889
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  TG
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  KD8310
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  JT753YR1100072046
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  YXS10RAESBN
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  2001
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  0.00
                </TableCell>

                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  A
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  5
                </TableCell>
                <TableCell className="border-1 text-xs border-greyBorder p-[5px]">
                  02/08/2001
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className=" mt-2">
        <div className="flex flex-col-2  pt-1.5">
          <span className="text-[13px] text-black font-bold text-left pl-2 pt-2 w-[105px]">
            Attribute
          </span>
          <span className="text-[10.5px] text-black text-left pl-7">
            <Select
              items={lanes}
              labelPlacement="outside-left"
              className="w-[594px]"
              radius="none"
              size="sm"
              name="center"
              aria-label="center"
              variant="bordered"
              placeholder="Select"
              selectedKeys={subClass}
              onChange={(e) => {
                setSubClass(new Set(e.target.value.split(",")));
              }}
            >
              {(lanes) => (
                <SelectItem
                  key={lanes.value}
                  value={lanes.value}
                  className="text-[10px]"
                >
                  {lanes.value}
                </SelectItem>
              )}
            </Select>
          </span>
        </div>
      </div>
      <div className="justify-end pt-4 ">
        <Button
          className="bg-[#ffffff] float-left ml-2 rounded h-8"
          variant="bordered"
          type="submit"
          fond-bold
        >
          Back
        </Button>

        <Button
          className="bg-[#ffffff] float-right ml-2 rounded h-8"
          variant="bordered"
          type="submit"
          fond-bold
        >
          Save
        </Button>

        <Button
          className="text-[#00AF8F] border-teal-500 bg-[#d2fff4] mr-1 float-right rounded h-8"
          variant="bordered"
          type="submit"
          fond-bold
        >
          Export
        </Button>
      </div>
    </div>
  );
}

export default MaintainVehicleAttribute;
