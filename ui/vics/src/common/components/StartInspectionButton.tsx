import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { show } from "../../vehicleRegistration/state/ShowTabsSlice";
import { startInspection } from "../../vehicleRegistration/headLamp/service/headlamp.service";

function StartInspectionButton({ station, userId, laneId }) {
  const dispatch = useDispatch();
  const appointmentId = useSelector((state: any) => state.data.appointmentId);
  const appData = useSelector((state: any) => state.data.regdata);
  const dataLength = Object.keys(appData).length;

  useEffect(() => {}, [appData]);

  const inspectionData = {
    userID: userId,
    appointmentNumber: appointmentId,
    laneId: JSON.parse(laneId),
    stationId: station,
    InspectionID: appData.inspectionId,
  };
  const handleClick = async () => {
    if (station === "C") {
      const response = await startInspection(inspectionData);
      console.log(response);
    }
    dispatch(show());
  };

  return (
    <Button
      size="sm"
      radius="none"
      className={` ${
        dataLength !== 0 ? "bg-persianGreen" : "bg-darkGrey"
      } text-white font-calibri font-bold px-10  h-6 flex justify-start mt-3 ml-2`}
      onClick={dataLength !== 0 ? handleClick : ""}
    >
      <span className=" align-middle flex justify-center">
        Start Inspection
      </span>
    </Button>
  );
}

export default StartInspectionButton;
