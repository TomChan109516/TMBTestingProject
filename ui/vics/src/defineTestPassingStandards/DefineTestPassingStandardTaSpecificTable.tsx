import React, { useState } from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHeader,
  TableColumn,
  Switch,
  cn,
  Pagination,
} from "@nextui-org/react";
import { Settings } from "tabler-icons-react";
import DisablePassingStandardTASpecificPopUp from "./DisablePassingStandardTASpecificPopUp";
import ReactivePassingStandardTaSpecificPopUp from "./ReactivePassingStandardTaSpecificPopUp";

const uservalidityPeriodData = [
  {
    id: "1",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "2",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "3",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "4",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "5",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "6",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "7",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "8",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "9",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "10",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "11",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "12",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "13",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "14",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "15",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "16",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
  {
    id: "17",
    TestType: "Smoke-Diesel",
    VehicleClass: "001",
    ManufactureDate: "1970-01-01 - 1989-12-31",
    FirstRegDate: "ALL",
    EffectivePeriod: "2018-05-05 - 2020-05-05",
    UpdateTime: "2019-06-27",
  },
];

function DefineTestPassingStandardTaSpecificTable() {
  const [pageSize] = useState(5);
  const [page, setPage] = useState(1);
  const [isDisablePassingStandardTASpecificPopUp, setIsDisablePassingStandardTASpecificPopUp] = useState(false);
  const [isReactivePassingStandardTaSpecificPopUp, setIsReactivePassingStandardTaSpecificPopUp] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const handleTASwitchChange = () => {
    if (isActive) {
      setIsDisablePassingStandardTASpecificPopUp(true);
    } else {
      setIsReactivePassingStandardTaSpecificPopUp(true);
    }
    setIsActive(!isActive);

  };

  return (
    <div>
      <div className="  w-full overflow-hidden ">
        <Table
          radius="none"
          shadow="sm"
          classNames={{ wrapper: "p-0 w-full overflow-hidden " }}
          bottomContent={
            <div className="flex w-full  justify-end pt- table-auto">
              {uservalidityPeriodData.length > 5 ? (
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  total={Math.ceil(uservalidityPeriodData.length / pageSize)}
                  classNames={{
                    wrapper: "gap-0  h-8  rounded-none border border-divider",
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
        >
          <TableHeader>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
              ID
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold ">
              Test Type
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold ">
              Vehicle Class
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold ">
              Manufacture Date
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
              First Reg. Date
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
              Effective Period
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
              Update Time
            </TableColumn>
            <TableColumn className="bg-darkgreen text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
              Status
            </TableColumn>
          </TableHeader>
          <TableBody>
            {uservalidityPeriodData
              .slice((page - 1) * pageSize, page * pageSize)
              .map((details, index) => {
                return (
                  <TableRow
                    data-testid="table-row"
                    key={details.id}
                    className="even:bg-lightblue odd:bg-fadedwhite font-calibri text-center"
                  >
                    <TableCell className="font-calibri font-bold text-sm text-center">
                      {details.id}
                    </TableCell>
                    <TableCell className="font-calibri font-bold text-sm text-center">
                      {details.TestType}
                    </TableCell>
                    <TableCell className="font-calibri font-bold text-sm text-center">
                      {details.VehicleClass}
                    </TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm">
                      {details.ManufactureDate}
                    </TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm">
                      {details.FirstRegDate}
                    </TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm">
                      {details.EffectivePeriod}
                    </TableCell>
                    <TableCell className="text-centerfont-calibri font-bold text-sm">
                      {details.UpdateTime}
                    </TableCell>
                    <TableCell className=" text-center font-calibri text-sm">
                      <div className="flex justify-center px-4">
                        <Switch
                          name="switch"
                          size="sm"
                          data-testId={`switch_element_${index}`}
                          startContent={<p>Active</p>}
                          endContent={<p>Disable</p>}
                          classNames={{
                            wrapper:
                              "h-[24px] bg-[#bf0e0b] overflow-visible   group-data-[selected=true]:bg-[#00AF8F] w-[80px] ",
                            thumb: cn(
                              "w-5 h-5 shadow-md",
                              "group-data-[hover=true]:border-primary",
                              "group-data-[selected=true]:ml-12",
                              "group-data-[pressed=true]:w-7",
                              "group-data-[selected]:group-data-[pressed]:ml-4"
                            ),
                          }}
                          value="switch"
                          onChange={
                            handleTASwitchChange
                          }
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
      </div>
      {isDisablePassingStandardTASpecificPopUp && (
        <DisablePassingStandardTASpecificPopUp setIsDisablePassingStandardTASpecificPopUp={setIsDisablePassingStandardTASpecificPopUp} />
      )}
      {isReactivePassingStandardTaSpecificPopUp && (
        <ReactivePassingStandardTaSpecificPopUp setIsReactivePassingStandardTaSpecificPopUp={setIsReactivePassingStandardTaSpecificPopUp} />
      )}
    </div>
  );
}

export default DefineTestPassingStandardTaSpecificTable;
