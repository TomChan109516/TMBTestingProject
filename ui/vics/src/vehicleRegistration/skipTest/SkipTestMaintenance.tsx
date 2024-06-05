import React from "react";
import {
  Button,
  Select,
  SelectItem,
  Input,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  
  Switch,
  Pagination,
  cn,
} from "@nextui-org/react";
import { Settings } from "tabler-icons-react";
function SkipTestMaintenance() {
  const rows = [
    {
      Code: "001",
      Description: "Equipment error",
      Test_Type: "Non-Dyno",
      status: "Active",
    },
    {
      Code: "002",
      Description: "Vehicle not suitable to perform test",
      Test_Type: "Non-Dyno",
      status: "Paused",
    },
    {
      Code: "003",
      Description: "Equipment error",
      Test_Type: "Dyno",
      status: "Active",
    },
    {
      Code: "004",
      Description: "Vehicle not suitable to perform test",
      Test_Type: "Dyno",
      status: "Vacation",
    },
    {
      Code: "005",
      Description: "Exhuast failure",
      Test_Type: "Non-Dyno",
      status: "Vacation",
    },
    {
      Code: "006",
      Description: "Weather",
      Test_Type: "Non-Dyno",
      status: "Vacation",
    },
    {
      Code: "007",
      Description: "Tester absent",
      Test_Type: "Non-Dyno",
      status: "Vacation",
    },
  ];

  const columns = [
    {
      key: "code",
      label: "Code",
    },
    {
      key: "description",
      label: "Description",
    },
    {
      key: "test type",
      label: "Test Type",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];
  return (
    <>
      <div className=" flex font-calibri font-bold ml-8 mt-2 justify-start "
      data-testid="Skip Test Reason Maintenance">
        Skip Test Reason Maintenance
      </div>
      <div className="flex justify-center items-center font-calibri font-bold mt-2  ">
        <div className=" flex flex-1  ml-6">
          <Button
            className="bg-tropicalrainforest h-6 text-white "
            radius="none"
            size="sm"
            data-testid="Add Skip Test Reason"
          >
            Add Skip Test Reason
          </Button>
        </div>

        <div className=" w-[20%] flex justify-center items-center flex-1 ">
          <span className=" w-[30%] mr-2 ">Type Test</span>
          <Select
            size="none"
            radius="none"
            className="h-6 w-[35%]   "
            classNames={{ trigger: "h-6 min-h-unit-6 " }}
          >
            <SelectItem key={""} value={""}>
              {}
            </SelectItem>
          </Select>
        </div>

        <div className="w-[20%] flex justify-end items-end mr-4">
          <Input
            className=" min-h-unit-6  h-unit-6 bg-white   "
            classNames={{ inputWrapper: " min-h-unit-6 h-unit-6 " }}
            label="Description"
            labelPlacement="outside-left"
            variant="bordered"
            radius="none"
            type="text"
          />
        </div>
        <div className="w-[17%] flex justify-end items-end mr-2 ">
          <Input
            className=" min-h-unit-6  h-unit-6 bg-white bordered  "
            classNames={{ inputWrapper: " min-h-unit-6 h-unit-6 " }}
            label="Code"
            labelPlacement="outside-left"
            variant="bordered"
            radius="none"
            type="text"
          />
        </div>
        <div className=" w-[15%] flex justify-end items-end ">
          <Input
            className=" min-h-unit-6  h-unit-6 bg-white bordered  "
            classNames={{ inputWrapper: " min-h-unit-6 h-unit-6 " }}
            label="to"
            labelPlacement="outside-left"
            variant="bordered"
            radius="none"
            type="text"
          />
        </div>

        <div className="w-[9%] flex justify-end items-end mr-4 ">
          <Button
            className="w-[85%] bg-tropicalrainforest h-6 text-white "
            radius="none"
            size="sm"
          >
            Search
          </Button>
        </div>
      </div>

      <div>
        <Table
          className="font-calibri font-bold mt-4"
          radius="none"
          aria-label="Example table with dynamic content "
        >
          <TableHeader
            className="bg-tropicalrainforest font-calibri font-bold  "
            columns={columns}
          >
            {(column) => (
              <TableColumn
                radius="none"
                className="bg-green  first:rounded-none last:rounded-none font-calibri font-bold text-white items-center text-center justify-center h-8  "
                key={column.key}
              >
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody className="font-calibri font-bold">
            {rows.map((item, index) => (
              <TableRow
                key={index}
                className="boxNotes h-8 font-calibri font-bold"
              >
                <TableCell className="border-l-1 border-greyBorder font-calibri font-bold h-2">
                  {item.Code}
                </TableCell>
                <TableCell className="border-l-1 border-greyBorder font-calibri font-bold h-2">
                  {item.Description}
                </TableCell>
                <TableCell className="border-l-1 border-greyBorder font-calibri font-bold h-2">
                  {item.Test_Type}
                </TableCell>
                <TableCell className="border-l-1 w-[15%] border-greyBorder font-calibri font-bold h-2">
                  <div className="flex gap-1 items-center justify-center font-calibri font-bold mb-2 h-2">
                    <Switch
                      name="switch"
                      size="sm"
                      placeholder="Active"
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
                          "h-[22px] bg-[red] mt-2  group-data-[selected=true]:bg-[#00AF8F] w-20 ",
                        thumb: cn(
                          "w-6 h-6 border-1 shadow-sm",
                          "group-data-[hover=true]:",

                          "group-data-[selected=true]:ml-12",

                          "group-data-[pressed=true]:",
                          "group-data-[selected]:group-data-[pressed]:ml-12"
                        ),
                      }}
                      value="switch"
                    />

                    <Settings
                      size={18}
                      color="gray"
                      className="rounded-sm mt-[10px]"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-2 flex justify-between font-calibri font-bold">
          <div className="flex flex-auto justify-normal mt-2 ">
            <span className="w-[12%] ">All 10 pages</span>
            <Select
              size="none"
              radius="none"
              label="5"
              className="h-6 w-[7%] mt-1 "
              classNames={{ trigger: "h-6 min-h-unit-6 " }}
            >
              <SelectItem key={""} value={""}>
                {}
              </SelectItem>
            </Select>
            <span className="ml-2">page</span>
          </div>
          <div className="flex mt-4">
            <Pagination
              isCompact
              showControls
              page={""}
              total={10}
              classNames={{
                wrapper: "gap-0 overflow-visible h-8  rounded-none ",
                item: "w-8 h-6 text-small rounded-none bg-transparent ",
                prev: "rounded-none",
                next: "rounded-none",
                cursor:
                  "bg-gradient-to-b shadow-lg from-[#009b77] to-[#009b77] rounded-none  text-white font-bold h-5 ",
              }}
              initialPage={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SkipTestMaintenance;