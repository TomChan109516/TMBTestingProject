import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Chip } from "@nextui-org/react";
import { Search } from "tabler-icons-react";
import dayjs from "dayjs";

function NotesAndAlerts(props) {
  const { apiErrorMsg } = useSelector(
    (state) => state.createAppointment
  );
  const notesAlert=useSelector((state:{createAppointment: {notesAndAlerts: Array<string>}})=>state.createAppointment.notesAndAlerts)
  const  appointmentInfo=useSelector((state)=>state.enquiryAppointment?.enquiryAppointmentInfo);
  const { feature } = props;
  const notesAndAlerts1 = [
    `Original Appointment Date-${dayjs(appointmentInfo?.appointmentDate).format(
      "DD/MM/YYYY"
    )}; Time:${dayjs(appointmentInfo?.appointmentDate).format("HH:mm")}; Lane:${
      appointmentInfo?.laneId
    }`,
    `Vehicle Message`,
  ];
  console.log(notesAndAlerts1);

  const notesAndAlerts =
    feature === "reschedule" ? notesAndAlerts1 : notesAlert;
  const [showApiError, setShowApiError] = useState(false);
  useEffect(() => {
    if (notesAndAlerts.length === 0) {
      setShowApiError(true);
    }
  }, [notesAndAlerts]);

  return (
    <div>
      {showApiError === true ? (
        <div className="flex gap-4 p-4 ">
          <Chip color="default" className="text-[12px]">
            {!apiErrorMsg && !notesAndAlerts ? (
              "Network not reachable"
            ) : notesAndAlerts.length === 0 ? (
              "No Data Found"
            ) : (
              <span>{apiErrorMsg}</span>
            )}
          </Chip>
        </div>
      ) : (
        ""
      )}
      {notesAndAlerts && (
        <div
          className="text-[13px] text-left pl-2 mt-2 p-1 h-6 boxNotes"
          data-testid="notesAlert"
        >
          {feature === "reschedule" && notesAndAlerts.length % 2 === 0 ? (
            <div className="pr-2">
              <div className="float-left"> {notesAndAlerts} </div>
              <div className="float-right">
                {" "}
                <Search
                  size="15"
                  className="bg-[#00AF8F] text-white rounded-sm float-right"
                />
              </div>
            </div>
          ) : (
            notesAndAlerts
          )}
        </div>
      )}
    </div>
  );
}

export default NotesAndAlerts;
