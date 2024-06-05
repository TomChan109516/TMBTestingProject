import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Pagination,
  Select,
  SelectItem,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  cn,
} from "@nextui-org/react";
import React, { useState } from "react";
import { Settings } from "tabler-icons-react";
import AddModifyDefectPopup from "./AddModifyDefectPopup";
import DisableDefectPopup from "./DisableDefectPopup";
import ReactiveDefectPopup from "./ReactivateDefectPopup";
const uservalidityPeriodData = [
  {
    id: "01",
    testType: "VI",
    locationName: "FRONT",
    updateTime: "2019-06-27",
  },
  {
    id: "02",
    testType: "VI",
    locationName: "OFFSIDE FRONT",
    updateTime: "2019-06-27",
  },
  {
    id: "03",
    testType: "VI",
    locationName: "OFFSIDE MIDDLE",
    updateTime: "2019-06-27",
  },
  {
    id: "04",
    testType: "VI",
    locationName: "OFFSIDE REAR",
    updateTime: "2019-06-27",
  },
  {
    id: "05",
    testType: "VI",
    locationName: "OFFSIDE UPPER",
    updateTime: "2019-06-27",
  },
  {
    id: "06",
    testType: "UCI",
    locationName: "OFFSIDE FRONT",
    updateTime: "2019-06-27",
  },
  {
    id: "07",
    testType: "UCI",
    locationName: "OFFSIDE MIDDLE",
    updateTime: "2019-06-27",
  },
  {
    id: "08",
    testType: "UCI",
    locationName: "OFFSIDE REAR",
    updateTime: "2019-06-27",
  },
];

function LocationDropDownEnglish() {
  const [showPopup, setShowPopup] = useState("");
  const [isDisableDefect, setIsDisableDefect] = useState(false);
  const [isReactivateDefect, setIsReactivateDefect] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const handleSwitchChange = () => {
    if (isActive) {
      setIsDisableDefect(true);
    } else {
      setIsReactivateDefect(true);
    }
    setIsActive(!isActive);
  };
  return (
    <div className="ml-8 mt-4 mb-10 mr-7 ">
      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0 " }}>
        <TableHeader>
          <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold first:rounded-none last:rounded-none">
            ID{" "}
            <Dropdown className="" role="Dropdown">
              <DropdownTrigger>
                <Button
                  className="text-white w-[1%]  bg-[#007E63]"
                  // variant="bordered"
                  size="sm"
                >
                  ⌵
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </TableColumn>
          <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold ">
            Test Type{" "}
            <Dropdown className="" role="Dropdown">
              <DropdownTrigger>
                <Button
                  className="text-white bg-[#007E63]"
                  // variant="bordered"
                  size="sm"
                >
                  ⌵
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </TableColumn>
          <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold ">
            Location Name{" "}
            <Dropdown className="" role="Dropdown">
              <DropdownTrigger>
                <Button
                  className="text-white bg-[#007E63]"
                  // variant="bordered"
                  size="sm"
                >
                  ⌵
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </TableColumn>
          <TableColumn className="bg-[#007E63]   text-white text-center text-sm font-bold ">
            Update Time{" "}
            <Dropdown className="" role="Dropdown">
              <DropdownTrigger>
                <Button
                  className="text-white bg-[#007E63]"
                  // variant="bordered"
                  size="sm"
                >
                  ⌵
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </TableColumn>
          <TableColumn className="bg-[#007E63]  text-white text-center text-sm font-bold ">
            Status{" "}
            <Dropdown className="" role="Dropdown">
              <DropdownTrigger>
                <Button
                  className="text-white bg-[#007E63]"
                  // variant="bordered"
                  size="sm"
                >
                  ⌵
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </TableColumn>
        </TableHeader>
        <TableBody>
          {uservalidityPeriodData.map((details) => {
            return (
              <TableRow
                key={details.id}
                className="even:bg-[#e7fbf6] odd:bg-[#f9ffff] font-calibri text-center"
              >
                <TableCell className=" font-calibri font-bold  text-sm    text-center  ">
                  {details.id}
                </TableCell>
                <TableCell className=" font-calibri font-bold  text-sm    text-center  ">
                  {details.testType}
                </TableCell>
                <TableCell className="   text-center  font-calibri font-bold text-sm">
                  {details.locationName}
                </TableCell>
                <TableCell className="   text-center  font-calibri   font-bold text-sm">
                  {details.updateTime}
                </TableCell>

                <TableCell className=" text-center font-calibri text-sm">
                  <div className="flex justify-center px-4">
                    <Switch
                      name="switch"
                      size="sm"
                      role="Switch"
                      placeholder="Active"
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
                          "h-[24px] bg-darkRed overflow-visible   group-data-[selected=true]:bg-tropicalrainforest w-[80px] ",
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
                      title='settings'
                      onClick={() => {
                        setShowPopup("add");
                      }}
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
            All 5 pages
          </div>
          <div className="ml-2 w-[60px] mt-1  ">
            <Select
              labelPlacement="outside-left"
              radius="none"
              size="sm"
              name="page"
              variant="bordered"
              role="select"
            >
              <SelectItem key="10" value="10">
                10{" "}
              </SelectItem>
              <SelectItem key="20" value="20">
                20{" "}
              </SelectItem>
              <SelectItem key="30" value="30">
                30{" "}
              </SelectItem>
              <SelectItem key="40" value="40">
                40{" "}
              </SelectItem>
              <SelectItem key="50" value="50">
                50{" "}
              </SelectItem>
            </Select>
          </div>
          <span className="  inline-flex ml-2 mt-2 font-[Claibri] text-sm font-bold">
            page
          </span>
        </div>
        <div className=" justify-end mt-2">
          <Pagination
            isCompact
            showControls
            role="pagination"
            total={16}
            initialPage={1}
            classNames={{
              wrapper: "gap-0 h-8  overflow-visiblerounded bg-[#ecfdf5] ",
              item: "w-8 h-8 text-[12px] rounded-none text-[] border font-bold  bg-transparent",
              prev: "h-8 rounded-none",
              next: " h-8 rounded-none",
              cursor:
                "bg-persianGreen shadow-lg from- to- rounded-none  text-[#f9ffff] font-bold h-8   ",
            }}
          />
        </div>
      </div>
      {showPopup && showPopup === "add" ? (
        <AddModifyDefectPopup
          onClose={() => {
            setShowPopup("");
          }}
        />
      ) : (
        ""
      )}
      {isDisableDefect && (
        <DisableDefectPopup setIsDisableDefect={setIsDisableDefect} />
      )}
      {isReactivateDefect && (
        <ReactiveDefectPopup setIsReactivateDefect={setIsReactivateDefect} />
      )}
    </div>
  );
}

export default LocationDropDownEnglish;
