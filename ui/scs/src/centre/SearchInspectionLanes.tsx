/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  Button,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import AddInspectionLane from "./AddInspectionLane";
import InspectionLaneTableData from "./InspectionLaneTableData";
import { getCentersAll } from "../login/service/login.service";
import { getLaneCenterId } from "../examinationTimeSlot/service/timeLine.service";
import {
  saveExaminationCentres,
  saveLoader,
} from "../login/state/loginSlice"
import { ILane } from "../examinationTimeSlot/model/examTimeSlotModel";
import { saveSearchInspectionLaneResponse } from "./state/SearchInspectionLanesSlice";
import { searchInspectionLanesService } from "./service/SearchInspectionLanesService";
import { ICentres } from "../login/model/loginModel";

function SearchInspectionLanes() {
  const dispatch = useDispatch();
  const [laneId, setLaneId] = useState<string>("");
  const [lane, setLane] = useState<string>("");
  const [centreData, setCentreData] = useState<ICentres[]>([]);
  const [centreId, setCentreId] = useState<string>('');
  const [lanes, setLanes] = useState<ILane[]>([]);
  const [addInspectionPopup, setAddInspectionPopup] = useState<boolean>(false);
  const [centreName, setCentreName] = useState("");
  const [laneDetails, setLaneDetails] = useState([]);
  const handleCentreData = async (event: ChangeEvent<HTMLSelectElement>) => {
    setCentreId(event.target.value);
    const selectedCentre = centreData.find((centre) => centre.centreId === event.target.value);
    setCentreName(selectedCentre?.centreCode || '');
  };
  const handleChangeLane = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLane(event.target.value);
  };
  const handleAddLane = () => {
    setAddInspectionPopup(true);
  };
  const params = { status: "All" }
  const loadCentres = useCallback(async () => {
    dispatch(saveLoader(true));
    const response = await getCentersAll(params);
    setCentreData(response?.centres);
    dispatch(saveExaminationCentres(response));
    dispatch(saveLoader(false));
  }, [params]);
  useEffect(() => {
    loadCentres();
  }, []);
  const ResetbtnFunc = () => {
    setLane("");
    setLaneId("");
    setCentreId("");
    setCentreName("");
  };
  const data = {
    centreId: centreId,
  };
  const loadLaneAll = async () => {
    const response = await getLaneCenterId(data);
    setLanes(response?.laneDetails);
  };
  useEffect(() => {
    if (centreId !== "" && centreId !== null) {
      loadLaneAll();
    }
  }, [centreId, addInspectionPopup]);
  const searchInspectionLaneHandler = async () => {
    const searchData = {
      centreId: centreId,
      laneId: lane,
      laneName: laneId
    };
    const response = await searchInspectionLanesService(searchData);
    dispatch(saveSearchInspectionLaneResponse(response));
    setLaneDetails(response?.lanes)
  };
  return (
    <div>
      <div className="flex items-left text-tropicalRainForest ml-[15px] font-bold font-calibri text-sm">
        Inspection Lane
      </div>
      <div className="h-full mt-3">
        <h1 className="h-[136px] mr-2 ml-2">
          <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] font-calibri text-persianGreen">
            Searching Criteria
          </h5>
          <div className="grid grid-cols-2 gap-2 mt-[12px] text-sm/[13px] font-bold w-full font-calibri">
            <div className="grid grid-rows-2  grid-flow-col ml-6 mr-2">
              <div className="flex flex-row items-center">
                <div className="text-left text-nowrap text-sm">Centre</div>
                <div className="w-full ml-[37px] text-sm">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    name="centre"
                    data-testid="centre"
                    aria-label="centre"
                    variant="bordered"
                    isRequired
                    placeholder="Select"
                    selectedKeys={[centreId]}
                    value={centreId}
                    onChange={(e) => {
                      handleCentreData(e);
                    }}
                    className="bg-white">
                    {centreData?.map((centre) => (
                      <SelectItem
                        key={centre?.centreId}
                        value={centre.centreId}
                        className="text-sm">
                        {centre?.centreCode}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="flex flex-row items-center mt-1">
                <div className="text-left text-nowrap text-sm">Lane ID</div>
                <div className="w-full ml-8 text-sm">
                  <Input
                    id="standard-basic"
                    name="chassisno"
                    radius="none"
                    data-testid="laneId"
                    variant="bordered"
                    size="sm"
                    value={laneId}
                    onChange={(e) => { setLaneId(e.target.value) }}
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-rows-1 grid-flow-col">
              <div className="flex flex-row ">
                <div className="w-[15%] text-left items-center text-sm mt-2">Lane</div>
                <div className="w-[75%] ml-[30px] text-sm">
                  <Select
                    labelPlacement="outside-left"
                    radius="none"
                    size="sm"
                    name="Lane"
                    aria-label="centLaneer"
                    variant="bordered"
                    placeholder="Select"
                    isRequired
                    selectedKeys={[lane]}
                    value={lane}
                    onChange={handleChangeLane}>
                    {lanes?.map((lane) => (
                      <SelectItem key={lane.laneId} value={lane.laneId}>
                        {lane.laneName}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end  font-bold gap-1 mt-1 mr-4 ">
            <Button
              type="reset"
              className="bg-white rounded-sm text-sm hover:border-persianGreen hover:text-persianGreen"
              size="sm"
              radius="sm"
              variant="bordered"
              onClick={ResetbtnFunc}
            >
              Reset
            </Button>
            <Button
              type="button"
              className="bg-persianGreen text-white rounded-sm text-sm"
              size="sm"
              radius="sm"
              onClick={searchInspectionLaneHandler}
            >
              Search
            </Button>
          </div>
        </h1>
        <div className="flex justify-between mt-[10px]">
          <div className="justify-end">
            <Button
              type="button"
              className="bg-persianGreen text-white rounded-sm shadow-sm mr-2 font-bold text-sm"
              size="sm"
              onClick={handleAddLane}
            >
              Add Lane
            </Button>
          </div>
        </div>
        {addInspectionPopup && (
          <AddInspectionLane
            addInspectionPopup={addInspectionPopup}
            setAddInspectionPopup={setAddInspectionPopup}
            centreId={centreId}
            centreName={centreName}
          />
        )}
        <InspectionLaneTableData searchInspectionLaneTableData={laneDetails} />
      </div>
    </div>
  );
}
export default SearchInspectionLanes;