import {
  Button, SelectItem, Select,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { getLaneCenterId } from "../examinationTimeSlot/service/timeLine.service";
import { ILane } from "../examinationTimeSlot/model/examTimeSlotModel";
import { addInspectionLaneService } from "./service/SearchInspectionLanesService";
import { getCentersAll } from "../login/service/login.service";

function AddInspectionLane(props) {
  const { addInspectionPopup, setAddInspectionPopup, centreId, centreName, selected } = props;
  const [laneType, setLaneType] = useState<string>("physical");
  const [laneId, setLaneId] = useState("");
  const [lane, setLane] = useState<string>("");
  const [lanes, setLanes] = useState<ILane[]>([]);
  const [description, setDescription] = useState(selected?.laneDescription ? selected?.laneDescription : "");
  const [centre, setCentre] = useState("");
  const handleClose = () => {
    setAddInspectionPopup(false);
  };
  const handleChangeLane = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLane(event.target.value);
  };
  useEffect(() => {
    if (centreId !== "" && centreId !== null) {
      loadLaneAll();
    }
  }, [centreId]);

  const data = {
    centreId: selected?.centreId ? selected?.centreId : centreId
  }
  const loadLaneAll = async () => {
    const response = await getLaneCenterId(data);
    setLanes(response.laneDetails);
  };
  const params = { status: "All" }
  const loadCentres = async () => {
    const response = await getCentersAll(params);
    const centre = response?.centres.find((centre) => centre.centreId === selected?.centreId);
    setCentre(centre?.centreCode || '');
  };
  useEffect(() => {
    loadCentres()
  }, [selected?.centreId])
  const addUpdateLane = async () => {
    const data = {
      id: selected?.laneId ? selected?.laneId : '',
      centreId: selected?.centreId ? selected?.centreId : centreId,
      laneType: laneType,
      laneName: laneType === 'virtual' ? laneId : lane,
      laneDescription: description,
      laneStatus: selected?.laneStatus ? selected?.laneStatus : true,
      physicalLaneId: selected?.laneId,
      userId: selected?.userId ? selected?.userId : localStorage.getItem('username')
    }
    const response = await addInspectionLaneService(data);
    if (response.httpStatusCode === 200) {
      setAddInspectionPopup(false);
    }
  }
  return (
    <div className="w-full h-full">
      <Modal
        size="xl"
        isOpen={addInspectionPopup}
        onClose={handleClose}
        radius="none"
        classNames={{
          base: "rounded-sm",
          body: "py-4",
          closeButton: " hover:bg-white/5 active:bg-white/20",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalBody>
                <div className="flex">
                  <div className="flex-initial text-[#00AF8F] mb-1 font-bold font-calibri text-sm">
                    Add Inspection Lane
                  </div>
                </div>
                <div>
                  <div className="flex flex-row font-calibri text-sm">
                    <span className="text-sm text-black font-bold text-left  mt-1 w-[120px]">
                      Centre
                    </span>
                    <span className="text-sm text-black ml-8 text-left mt-1 w-[185px]">
                      {centre ? centre : centreName}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row font-calibri text-sm">
                  <span className="text-sm text-black font-bold text-left mt-[5px] w-[120px]">
                    Type
                  </span>
                  <span className="text-sm w-full text-black text-left ml-12 mr-[6px]">
                    <Select
                      labelPlacement="outside-left"
                      radius="none"
                      size="sm"
                      name="laneType"
                      aria-label="laneType"
                      data-testid="laneType"
                      variant="bordered"
                      defaultSelectedKeys={"physical"}
                      selectedKeys={[selected?.laneType ? selected?.laneType : laneType]}
                      isDisabled={selected?.laneType ? true : false}
                      value={selected?.laneType ? selected?.laneType : laneType}
                      onChange={(e) =>
                        setLaneType(e.target.value)
                      }
                    >
                      <SelectItem
                        className="text-[10px]"
                        key="physical"
                        value="physical"
                      >
                        Physical Lane
                      </SelectItem>
                      <SelectItem
                        className="text-[10px]"
                        key="virtual"
                        value="virtual"
                      >
                        Virtual Lane
                      </SelectItem>
                    </Select>
                  </span>
                </div>
                <div
                  hidden={(selected?.laneType ?? laneType) === "physical"}
                >
                  <div className="flex flex-row font-calibri text-sm" >
                    <span className="text-sm text-black font-bold text-left  pt-1 w-[120px]">
                      Lane ID
                    </span>
                    <span className="text-sm w-full text-black text-left ml-12 mr-[6px]">
                      {
                        <Input
                          id="standard-basic"
                          radius="none"
                          variant="bordered"
                          size="sm"
                          name="laneID"
                          aria-label="laneID"
                          value={selected?.laneId ? selected?.laneName : laneId}
                          onValueChange={setLaneId}
                          isDisabled={selected?.laneId}
                          maxLength={15}
                        />
                      }
                    </span>
                  </div>
                </div>
                <div className="flex flex-col-2 font-calibri text-sm">
                  <span className="text-sm  text-black font-bold text-left  mt-[5px] w-[120px]">
                    Lane
                  </span>
                  <span className="text-sm w-full ml-12 text-black text-left mr-[6px]">
                    {(selected?.laneType ?? laneType) === "physical" ? (
                      <Input
                        id="standard-basic"
                        radius="none"
                        variant="bordered"
                        size="sm"
                        maxLength={15}
                        value={selected?.laneName ? selected?.laneName : lane}
                        isDisabled={selected?.laneName}
                        onValueChange={setLane}
                      />
                    ) : (
                      <Select
                        labelPlacement="outside-left"
                        radius="none"
                        size="sm"
                        classNames={{
                          trigger: `min-h-unit-2 h-8 rounded-sm`,
                        }}
                        name="lane"
                        aria-label="lane"
                        variant="bordered"
                        data-testid="lanedropdown"
                        selectedKeys={[selected?.laneId ? selected?.laneId : lane]}
                        value={selected?.laneId ? selected?.laneName : lane}
                        isDisabled={selected?.laneId}
                        onChange={handleChangeLane}>
                        {lanes?.length > 0 ? lanes?.map((lane) => (
                          <SelectItem key={lane.laneId} value={lane.laneId}>
                            {lane.laneName}
                          </SelectItem>
                        )) : []}
                      </Select>
                    )}
                  </span>
                </div>
                <div className="flex flex-row font-calibri">
                  <span className="text-sm text-black font-bold text-left pt-1 w-[120px]">
                    Description
                  </span>
                  <span className="text-sm w-full text-black text-left ml-12 mr-[6px]">
                    <Input
                      id="standard-basic"
                      radius="none"
                      variant="bordered"
                      size="sm"
                      maxLength={15}
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value)
                      }}
                    />
                  </span>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-white rounded-sm ml-2 font-bold text-sm border font-calibri border-[lightgray] hover:border-persianGreen hover:text-persianGreen"
                  type="submit"
                  size="sm"
                  radius="none"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  className=" bg-[#E0A435] text-white rounded-sm ml-1 font-bold font-calibri text-sm"
                  type="submit"
                  size="sm"
                  radius="none"
                  onClick={addUpdateLane}
                >
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
export default AddInspectionLane;
