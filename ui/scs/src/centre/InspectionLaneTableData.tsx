import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Switch,
} from "@nextui-org/react";
import { Edit } from "tabler-icons-react";
import AddInspectionLane from "./AddInspectionLane";
import { addInspectionLaneService } from "./service/SearchInspectionLanesService";

function InspectionLaneTableData(props) {
  const [addInspectionPopup, setAddInspectionPopup] = useState<boolean>(false);
  const { searchInspectionLaneTableData } = props;
  const [status, setStatus] = useState({});
  const [selected, setSelected] = useState({});
  useEffect(() => {
    const newStatus = {};
    searchInspectionLaneTableData.forEach((lane) => {
      newStatus[lane.laneId] = lane.laneStatus === true;
    });
    setStatus(newStatus);
  }, [searchInspectionLaneTableData]);
  const handleAddLane = (selected) => {
    setAddInspectionPopup(true);
    setSelected(selected);
  };
  const disableLane = async (selected) => {
    const newStatus = !status[selected?.laneId];
    setStatus((prevStatus) => ({
      ...prevStatus,
      [selected.laneId]: newStatus,
    }));
    const requestData = {
      id: selected?.laneId,
      centreId: "",
      laneName: "",
      laneType: "",
      laneDescription: "",
      physicalLaneId: "",
      laneStatus: newStatus ? true : false,
      LastRecordTransactionUserId:
        localStorage.getItem("username") !== ""
          ? localStorage.getItem("username")
          : "Admin",
    };
    await addInspectionLaneService(requestData);
  };
  return (
    <div className="mt-[30px] mr-1 ml-1 ">
      <div className="text-left bg-[#008366] text-white pl-2 font-calibri h-[30px]">
        Inspection Lane
      </div>
      <Table radius="none" shadow="sm" classNames={{ wrapper: "p-0" }}>
        <TableHeader className=" bg-[#AFDED2] text-tropicalRainForest text-sm  text-left font-bold">
          <TableColumn className="bg-[#AFDED2] text-tropicalRainForest text-sm text-left font-bold font-calibri border-1 border-white w-[220px] first:rounded-none">
            Lane Id
          </TableColumn>
          <TableColumn className="bg-[#AFDED2] text-tropicalRainForest text-sm text-left font-bold font-calibri border-1 border-white w-[200px]">
            Lane
          </TableColumn>
          <TableColumn className="bg-[#AFDED2] text-tropicalRainForest text-sm text-left font-bold font-calibri border-1 border-white w-[200px]">
            type
          </TableColumn>
          <TableColumn className="bg-[#AFDED2] text-tropicalRainForest text-sm text-left font-bold font-calibri border-1 border-white">
            Description
          </TableColumn>
          <TableColumn className="bg-[#AFDED2] text-tropicalRainForest text-sm text-left font-bold font-calibri border-1 border-white w-[90px]">
            Status
          </TableColumn>
          <TableColumn className="bg-[#AFDED2] text-tropicalRainForest text-sm text-left font-bold font-calibri border-1 border-white w-[90px] last:rounded-none">
            Action
          </TableColumn>
        </TableHeader>
        <TableBody>
          {searchInspectionLaneTableData?.map((searchInspectionLaneinfo) => (
            <TableRow key={searchInspectionLaneinfo.laneId}>
              <TableCell className="border-1 border-white text-sm text-left font-calibri width-[20px]">
                {searchInspectionLaneinfo.laneName}
              </TableCell>
              <TableCell className="border-1 border-white text-sm text-left font-calibri ">
                {searchInspectionLaneinfo.laneName}
              </TableCell>
              <TableCell className="border-1 border-white text-sm text-left font-calibri ">
                {searchInspectionLaneinfo.laneType}
              </TableCell>
              <TableCell className="border-1 border-white text-sm text-left font-calibri">
                {searchInspectionLaneinfo.laneDescription}
              </TableCell>
              <TableCell className="border-1 border-white text-sm text-left">
                <Switch
                  size="sm"
                  isSelected={status[searchInspectionLaneinfo.laneId]}
                  data-testid={`lane-switch-${searchInspectionLaneinfo.laneId}`}
                  onChange={() => {
                    disableLane(searchInspectionLaneinfo);
                  }}
                  classNames={{
                    wrapper:
                      "group-data-[selected=true]:bg-[#00AF8F] group:data-[pressed=true]:bg-[#00AF8F] bg-[red]",
                  }}
                />
              </TableCell>
              <TableCell className="border-1 border-white text-sm text-left font-calibri">
                <Edit
                  size={20}
                  strokeWidth={2}
                  className="bg-persianGreen text-white rounded-sm"
                  data-testid={`edit-button-${searchInspectionLaneinfo.laneId}`}
                  onClick={() => handleAddLane(searchInspectionLaneinfo)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {addInspectionPopup && (
        <AddInspectionLane
          addInspectionPopup={addInspectionPopup}
          setAddInspectionPopup={setAddInspectionPopup}
          selected={selected}
        />
      )}
    </div>
  );
}
export default InspectionLaneTableData;
