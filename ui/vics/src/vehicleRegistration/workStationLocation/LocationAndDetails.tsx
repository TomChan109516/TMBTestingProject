import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Input,
  Pagination,
  Select,
  SelectItem,
} from "@nextui-org/react";
import LocationInformationPopup from "./LocationInformationPopup";
import DeleteLocationinformation from "./DeleteLocationinformation";
import UpdateLocationinformation from "./UpdateLocationinformation";
import { getALLWorkstationLocation } from "./service/service";

const vehicleData = [
  {
    id: "1",
    code: "1",
    lane: "01",
    station: "A",
    name: "GF1A",
    equipment: "0",
    operationU: "Update",
    operationD: "Delete",
  },
  {
    id: "2",
    code: "1111",
    lane: "01",
    station: "A",
    name: "GF1A",
    equipment: "1",
    operationU: "Update",
    operationD: "Delete",
  },
  {
    id: "3",
    code: "2222",
    lane: "01",
    station: "B",
    name: "2222",
    equipment: "1",
    operationU: "Update",
    operationD: "Delete",
  },
  {
    id: "3",
    code: "2",
    lane: "01",
    station: "B",
    name: "GF1B",
    equipment: "0",
    operationU: "Update",
    operationD: "Delete",
  },
  {
    id: "3",
    code: "3",
    lane: "01",
    station: "C",
    name: "GF1C",
    equipment: "0",
    operationU: "Update",
    operationD: "Delete",
  },
  {
    id: "3",
    code: "4",
    lane: "01",
    station: "D",
    name: "GF1D",
    equipment: "0",
    operationU: "Update",
    operationD: "Delete",
  },
  {
    id: "3",
    code: "5",
    lane: "01",
    station: "E",
    name: "GF1E",
    equipment: "0",
    operationU: "Update",
    operationD: "Delete",
  },
  {
    id: "3",
    code: "6",
    lane: "02",
    station: "A",
    name: "GF2A",
    equipment: "1",
    operationU: "Update",
    operationD: "Delete",
  },
  {
    id: "3",
    code: "7",
    lane: "02",
    station: "B",
    name: "GF2B",
    equipment: "0",
    operationU: "Update",
    operationD: "Delete",
  },
  {
    id: "3",
    code: "8",
    lane: "02",
    station: "C",
    name: "GF2C",
    equipment: "0",
    operationU: "Update",
    operationD: "Delete",
  },
];

const button1 = [{ id: 1, name: "Search" }];
const button2 = [{ id: 2, name: "Add" }];
const button3 = [{ id: 3, name: "Update Camera" }];

export default function LocationAndDetails() {
  const [pageSize, setPageSize] = useState("7");

  const [showLocationInformationPopup, setshowLocationInformationPopup] =
    useState(false);

  const handleLocationInformationPopup = () => {
    setshowLocationInformationPopup(true);
  };
  const closeLocationInformationPopup = (val) => {
    setshowLocationInformationPopup(val);
  };

  const [showDeleteLocationinformation, setshowDeleteLocationinformation] =
    useState(false);

  const handleDeleteLocationinformation = () => {
    setshowDeleteLocationinformation(true);
  };
  const closeDeleteLocationinformation = (val) => {
    setshowDeleteLocationinformation(val);
  };

  const [showUpdateLocationinformation, setshowUpdateLocationinformation] =
    useState(false);

  const handleUpdateLocationinformation = () => {
    setshowUpdateLocationinformation(true);
  };
  const closeUpdateLocationinformation = (val) => {
    setshowUpdateLocationinformation(val);
  };
useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    try {
      const response = await getALLWorkstationLocation("Active");
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <div className=" flex-col items-start grid grid-cols-6 gap-4 text-inputTxt ">
        <div className="  flex font-calibri font-bold ml-6 mt-2 justify-start text-[16px]">
          <p>Define Location And Details</p>
        </div>

        <div className="col-end-7 col-span-2 mr-5 grid justify-items-end">
          {button3.map((button) => (
            <Button
              size="sm"
              key={button.id}
              className="bg-persianGreen font-bold text-white m-3 w-auto md:w-[150px] lg:w-[120px] xl:w-[100px] h-8 mt-2 border-1.5 rounded p-1"
              radius="none"
            >
              {button.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-row  ">
        <div className="flex ml-8">
          {button2.map((button) => (
            <Button
              size="sm"
              key={button.id}
              className="bg-persianGreen font-bold text-white h-7 mt-3 rounded p-1"
              radius="none"
              onClick={handleLocationInformationPopup}
            >
              {button.name}
            </Button>
          ))}
        </div>

        <div className="flex mr-5 font-calibri">
          <span className=" ml-4 mt-3 text-small w-[100%] font-bold ">
            Location code
          </span>{" "}
          <Input
            size="sm"
            radius="none"
            variant="bordered"
            className="w-[100%] h-7 mt-2 "
            classNames={{ inputWrapper: "h-7 w-[100%] " }}
          ></Input>
        </div>

        <div className="flex mr-5 font-calibri">
          <span className="mr-2 ml-4 text-small mt-3 w-[100%] font-bold ">
            Location Name
          </span>{" "}
          <Input
            size="sm"
            radius="none"
            variant="bordered"
            className="w-[100%] h-7 mt-2"
            classNames={{ inputWrapper: "h-7 w-[100%] " }}
          ></Input>
        </div>

        <div className="flex mr-5 font-calibri">
          <span className="mr-2 ml-4 text-small mt-3 w-[100%] font-bold ">
            Lane No.
          </span>{" "}
          <Input
            size="sm"
            radius="none"
            variant="bordered"
            className="w-[100%] h-7 mt-2"
            classNames={{ inputWrapper: "h-7 w-[100%] " }}
          ></Input>
        </div>

        <div className="flex mr-5 font-calibri">
          <span className="mr-2 ml-4 text-small mt-3 w-[100%] font-bold ">
            Station
          </span>{" "}
          <Input
            size="sm"
            radius="none"
            variant="bordered"
            className="w-[100%] h-7 mt-2"
            classNames={{ inputWrapper: "h-7 w-[100%] " }}
          ></Input>
          <div className="">
            {button1.map((button) => (
              <Button
                size="sm"
                key={button.id}
                className="bg-persianGreen font-bold text-white m-3 w-auto md:w-[150px] lg:w-[120px] xl:w-[100px] h-8 mt-2 border-1.5 rounded p-1 ml-20"
                radius="none"
              >
                {button.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="m-8  mt-0">
        <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
          <TableHeader className="bg-tropicalrainforest ">
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              Location Code
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
              Lane NO.
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
              Station
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
              Location Name
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white">
              Equipment Type
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-1 border-white first:rounded-none last:rounded-none">
              Operation
            </TableColumn>
          </TableHeader>
          <TableBody>
            {vehicleData.map((details) => {
              return (
                <TableRow
                  key={details.id}
                  className="even:bg-[#e7fbf6] odd:bg-[#f9ffff] font-calibri text-center"
                >
                  <TableCell className="border-1 border-greyBorder font-bold text-sm">
                    {details.code}
                  </TableCell>
                  <TableCell className="border-1 border-greyBorder font-bold text-sm">
                    {details.lane}
                  </TableCell>
                  <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                    {details.station}
                  </TableCell>
                  <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                    {details.name}
                  </TableCell>
                  <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                    {details.equipment}
                  </TableCell>
                  <TableCell className="border-1 border-greyBorder font-bold  text-sm">
                    <a
                      style={{ color: "orange" }}
                      className="mr-4"
                      data-testid="update"
                      onClick={handleUpdateLocationinformation}
                    >
                      {" "}
                      {details.operationU}{" "}
                    </a>

                    <a onClick={handleDeleteLocationinformation}>
                      {" "}
                      {details.operationD}{" "}
                    </a>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="flex justify-between mt-[10px]">
          <div className=" flex flex-row ml-2  ">
            <div className=" text-sm mt-2 font-bold font-calibri  ">
              Showing 1 to {vehicleData.length} of 18 rows
            </div>
            <div className="ml-2 w-[70px] mt-1  ">
              <Select
                labelPlacement="outside-left"
                radius="none"
                size="sm"
                name="page"
                data-testid="pagination"
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
                variant="bordered"
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
            <span className="  inline-flex ml-2 mt-2 text-sm font-bold font-calibri">
              rows per page
            </span>
          </div>
          <div className=" justify-end mt-2">
            <Pagination
              isCompact
              showControls
              total={16}
              initialPage={1}
              classNames={{
                wrapper:
                  "gap-0 overflow-visible h-8  rounded-none border-[black]",
                item: "w-8 h-8 text-[12px] rounded-none text-[blue] font-bold",
                prev: "h-8 rounded-none",
                next: " h-8 rounded-none",
                cursor:
                  "bg-gradient-to-b shadow-lg from-[light blue] to-[light blue] rounded-none  text-white font-bold h-8 border-[black]",
              }}
            />
          </div>
        </div>
      </div>
      {showLocationInformationPopup && (
        <LocationInformationPopup
          showLocationInformationPopup={showLocationInformationPopup}
          closeLocationInformationPopup={closeLocationInformationPopup}
        ></LocationInformationPopup>
      )}

      {showDeleteLocationinformation && (
        <DeleteLocationinformation
          showDeleteLocationinformation={showDeleteLocationinformation}
          closeDeleteLocationinformation={closeDeleteLocationinformation}
        ></DeleteLocationinformation>
      )}

      {showUpdateLocationinformation && (
        <UpdateLocationinformation
          showUpdateLocationinformation={showUpdateLocationinformation}
          closeUpdateLocationinformation={closeUpdateLocationinformation}
        ></UpdateLocationinformation>
      )}
    </>
  );
}
