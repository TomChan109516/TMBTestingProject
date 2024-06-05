import React, { useEffect, useState } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  Button,
  Input,
  TableRow,
  TableCell,
  Switch,
  cn,
} from "@nextui-org/react";
import EquipmentItemAndDetails from "./EquipmentItemAndDetails";
import { Settings } from "tabler-icons-react";
import { getEquipmentItemAndDetails } from "./service/service";
import ReActiveAndDisablePopup from "./ReActiveAndDisablePopup";
import ViewEditDeletePopup from "./ViewEditDeletePopup";
import { CSVLink } from 'react-csv';

const buttons = [{ id: 1, name: "Search" }];
const button = [{ id: 2, name: "Add" }, { id: 3, name: "Export" }];

export default function DefineEquipmentItemAndDetails() {
  const [showEquipmentItemAndDetails, setshowEquipmentItemAndDetails] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState(tableData);
  const [searchedEquimentNumber, setSearchedEquimentNumber] = useState();
  const [showModifyEquipmentDetails, setshowModifyEquipmentDetails] = useState(false);
  const [ModifyData, setModifyData] = useState([]);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [showReactive, setShowReactive] = useState(false)
  const [showDisable, setShowDisable] = useState(false)
  const [equipmentName, setEquipmentName] = useState("")
  const [equipmentNumber, setEquipmentNumber] = useState("")
  const [viewEditDeletePopup, setViewEditDeletePopup] = useState(false)

  const handleEquipmentItemAndDetails = () => {
    setModifyData([])
    setshowEquipmentItemAndDetails(true);
  };
  const closeEquipmentItemAndDetails = (value: boolean) => {
    setshowEquipmentItemAndDetails(value);
    setshowModifyEquipmentDetails(value)
  };

  useEffect(() => {
    getEquipmentDetails()
  }, []);

  const getEquipmentDetails = async () => {
    try {
      const response = await getEquipmentItemAndDetails();
      setTableData(response.searchMaintainEquipmentData)
      setFilteredData(response.searchMaintainEquipmentData)
    } catch (error) {
      console.log(error);
    }
  }


  const handleEquipmentNumber = (e) => {
    setSearchedEquimentNumber(e.target.value)
  }

  const modifyTableData = (modifyData) => {
    setModifyData(modifyData)
    setshowModifyEquipmentDetails(true)
  }

  const filterEuqimentAndHistroyItems = (value) => {
    const filteredList = tableData.filter((data: any) => data?.equipmentNumber === value)
    setFilteredData(filteredList)
  }

  const handleSwitchToggle = (equipmentNumber, equipmentName) => {
    setEquipmentName(equipmentName);
    setEquipmentNumber(equipmentNumber)
    setIsSwitchOn((isSwitchOn) => !isSwitchOn);

    if (!isSwitchOn) {
      setShowReactive(true)
      setShowDisable(false)
    } else {
      setShowDisable(true)
      setShowReactive(false)
    }
  }

  const handleViewEditDeletePopup = (data) => {
    setModifyData(data)
    setViewEditDeletePopup(true)
  }

  return (
    <>
      <div className="flex justify-between ml-0">
        <div className=" flex mt-4 ml-8 ">
          <div>
            <div className="font-bold">
              <p> Define Equipment Item And Details </p>
            </div>
            {button.map((button) => (
              (button.name === "Export" ? (<CSVLink
                key={button.name}
                data={filteredData}
                filename={"filtered-data.csv"}
                className="bg-persianGreen font-bold text-white h-8 mt-3 rounded p-1 pl-3 pr-3 float-left mr-4"
                target="_blank"
                data-testid={button.name}
              >
                {button.name}
              </CSVLink>) : <Button
                size="sm"
                key={button.id}
                className="bg-persianGreen font-bold text-white h-8 mt-3 rounded p-1 float-left mr-4"
                radius="none"
                data-testid={button.name}
                onClick={handleEquipmentItemAndDetails}
              >
                {button.name}
              </Button>)
            ))}
          </div>
        </div>

        <div className="flex  mt-6 mr-5">
          <div className="flex mt-5">
            <span className="mr-[15px] text-small mt-2 w-[100%] font-bold ">
              Equipment Number
            </span>{" "}
            <Input
              size="sm"
              radius="none"
              variant="bordered"
              className="w-[100%] h-7 mt-1"
              classNames={{ inputWrapper: "h-7 w-[100%] " }}
              data-testid="Equipment Number"
              onChange={(e) => handleEquipmentNumber(e)}
            ></Input>
            <div>
              {buttons.map((button) => (
                <Button
                  size="sm"
                  key={button.id}
                  className="bg-persianGreen font-bold text-white m-3 w-auto md:w-[150px] lg:w-[120px] xl:w-[100px] h-8 mt-1 border-1.5 rounded p-1"
                  radius="none"
                  name={button.name}
                  data-testid={button.name}
                  value={searchedEquimentNumber}
                  onClick={() => filterEuqimentAndHistroyItems(searchedEquimentNumber)}
                >
                  {button.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ml-8 mt-1 mb-10 mr-8 ">
        <Table data-testid="table" radius="none" classNames={{ wrapper: "p-0 " }}>
          <TableHeader>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
              ID
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-l-1 border-white">
              Equipment Number
            </TableColumn>

            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold ">
              Chinese Name
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold">
              Lane
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold  ">
              Station
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold  first:rounded-none last:rounded-none">
              Equipment Name
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-l-1 border-white first:rounded-none last:rounded-none">
              Status
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-l-1 border-white first:rounded-none last:rounded-none">
              Manage Maintanance Schedule
            </TableColumn>
            <TableColumn className="bg-[#007E63] text-white text-center text-sm font-bold border-l-1 border-white first:rounded-none last:rounded-none">
              Operation
            </TableColumn>
          </TableHeader>

          <TableBody>
            {filteredData.map((data: any) => <TableRow key={data?.id} className="border-b-1 border-l-1 border-r-1 border-greyBorder">
              <TableCell>{data?.id}</TableCell>
              <TableCell>{data?.equipmentNumber}</TableCell>
              <TableCell>{data?.chineseDescription}</TableCell>
              <TableCell>{data?.dynoRoomNoLaneNo}</TableCell>
              <TableCell>{data?.stationId}</TableCell>
              <TableCell>{data?.equipmentName}</TableCell>
              {data?.status === "I" ? <TableCell className="text-persianGreen">In-Service</TableCell> : <TableCell>Under-Repair</TableCell>}
              <TableCell>
                <Button className="bg-persianGreen text-white h-8 rounded p-2 pl-4 pr-4"
                  role="Edit Schedule"
                  data-testid="Edit Schedule"
                  onClick={() => handleViewEditDeletePopup(data)}
                >Edit Schedule</Button></TableCell>
              <TableCell><div className="flex gap-1 items-center justify-center font-calibri font-bold mb-2 h-2">
                <Switch
                  role="switch"
                  name="switch"
                  size="sm"
                  value="switch"
                  data-testid="switch"
                  startContent={<p className="text-white">Active</p>}
                  endContent={<p className="text-white">Disable</p>}
                  onChange={() => handleSwitchToggle(data?.equipmentNumber, data?.equipmentName)}
                  classNames={{
                    wrapper:
                      "h-[22px] bg-red overflow-visible  group-data-[selected=true]:bg-persianGreen w-20",
                    thumb: cn(
                      "w-5 h-5 shadow-md",
                      "group-data-[hover=true]:border-primary",
                      "group-data-[selected=true]:ml-12",
                      "group-data-[pressed=true]:w-7",
                      "group-data-[selected]:group-data-[pressed]:ml-4"
                    ),
                  }}
                />
                <Settings
                  data-testid="settings-icon"
                  size={18}
                  color="gray"
                  className="rounded-sm mt-[10px]"
                  onClick={() => modifyTableData(data)}
                />
              </div></TableCell>
            </TableRow>)}
          </TableBody>
        </Table>
      </div>


      {showEquipmentItemAndDetails && (
        <EquipmentItemAndDetails
          data-testid="addequipment-item-and-details"
          showPopUP={showEquipmentItemAndDetails}
          closeEquipmentItemAndDetails={closeEquipmentItemAndDetails}
          header="Add New Equipment"
          data={ModifyData}
        ></EquipmentItemAndDetails>
      )}
      {showModifyEquipmentDetails && (
        <EquipmentItemAndDetails
          data-testid="modifyequipment-item-and-details"
          showPopUP={showModifyEquipmentDetails}
          closeEquipmentItemAndDetails={closeEquipmentItemAndDetails}
          header="Modify New Equipment"
          data={ModifyData}
        ></EquipmentItemAndDetails>
      )}
      {showReactive && (<ReActiveAndDisablePopup
        setShowReactive={setShowReactive}
        setShowDisable={setShowDisable}
        setIsSwitchOn={setIsSwitchOn}
        isSwitchOn={isSwitchOn}
        equipmentName={equipmentName}
        equipmentNumber={equipmentNumber}
        header="Reactive Equipment"
        description="Do you confirm to reactivate this equipment?"
      ></ReActiveAndDisablePopup>)}

      {showDisable && (<ReActiveAndDisablePopup
        setShowDisable={setShowDisable}
        setShowReactive={setShowReactive}
        isSwitchOn={isSwitchOn}
        setIsSwitchOn={setIsSwitchOn}
        equipmentName={equipmentName}
        equipmentNumber={equipmentNumber}
        header="Disable Equipment"
        description="Do you confirm to disable this equipment?"
      ></ReActiveAndDisablePopup>)}
      {viewEditDeletePopup &&
        (<ViewEditDeletePopup
          setViewEditDeletePopup={setViewEditDeletePopup}
          ModifyData={ModifyData}
        >
        </ViewEditDeletePopup>)}
    </>
  );
}