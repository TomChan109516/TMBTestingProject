import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PencilMinus } from "tabler-icons-react";
import { setData } from "../state/RegistrationDataSlice";
import { getAppointmentDetails } from "../../login/service/login.service";
import { saveLoader } from "../../login/state/loginSlice";
import RegistrationErrorPopUp from "./RegistrationErrorPopUp";

function AppointmentLayout({ heading }: { heading?: string }) {
  const dispatch = useDispatch();
  const appId = useSelector((state: any) => state.data.appointmentId);

  const [appointmentId, setAppointmentId] = useState("");
  const data = useSelector((state: any) => state.data.regdata);
  const station = JSON.parse(localStorage.getItem("station") || "{}");
  const lane = JSON.parse(localStorage.getItem("lane") || "{}");
  const [showApiError, setShowApiError] = useState<boolean>(false);
  const [apiErrorData, setApiErrorData] = useState<string>("");
  const formatSeatCapacity = `L:${data?.vehicleLowerSeatCapQuantity};U:${data?.vehicleUpperSeatCapQuantity};S:${data?.vehiclStandardCapQuantity}`;

  const closePopup = () => {
    setShowApiError(false);
  };

  const AppRegdata = async () => {
    try {
      dispatch(saveLoader(true));
      const response = await getAppointmentDetails(appointmentId);
      dispatch(setData({ regdata: response, appointmentId: appointmentId }));
      dispatch(saveLoader(false));
      setShowApiError(false);
    } catch (AxiosError) {
      dispatch(setData({ regdata: {}, appointmentId: appointmentId }));
      dispatch(saveLoader(false));
      setShowApiError(true);
      setApiErrorData(AxiosError.message);
    }
  };

  return (
    <div>
      {showApiError && (
        <RegistrationErrorPopUp
          showApiError={showApiError}
          closePopup={closePopup}
          apiErrorData={apiErrorData}
        ></RegistrationErrorPopUp>
      )}
      {heading && <div className="my-3 flex justify-start ml-3 font-bold">{heading}</div>}
      <div className="grid grid-cols-4 gap-0.5 text-innerInputTxt font-calibri w-full">
        <div className="flex ml-2">
          <div className="flex md:w-[40%] w-[30%] bg-persianGreen p-1 justify-center text-white">
            Appointment No.
          </div>
          <div className="flex flex-grow w-[60%] bg-lightGreen">
            <input
              className=" bg-lightGreen w-full font-calibri items-center justify-center font-bold text-center"
              value={appointmentId || appId}
              data-testid="appointmentId"
              onChange={(e) => setAppointmentId(e.target.value)}
            />{" "}
            <span className="bg-lightGreen mt-2 mx-1 mb-1 pr-1 rounded-[95%] border-2 border-persianGreen inline-flex items-center justify-center">
              <PencilMinus
                data-testid="pencilMinus"
                size={22}
                strokeWidth={3}
                className="text-persianGreen  font-bold font-calibri pl-2"
                onClick={() => {
                  AppRegdata();
                }}
              />
            </span>
          </div>
        </div>
        <div className="flex">
          <div className=" p-1 md:w-[40%] w-[30%] bg-persianGreen text-white">
            Reg. Mark
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold ">
            {data?.vehicleRegMarkNumber}
          </div>
        </div>
        <div className="flex">
          <div className=" p-1 md:w-[40%] w-[30%] bg-persianGreen text-white">
            Chassis No.
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold ">
            {data?.vehicleChasisNumber}
          </div>
        </div>
        <div className="flex mr-2">
          <div className=" p-1 md:w-[40%] w-[30%] bg-persianGreen text-white">
            Lane/Station
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold ">
            {data.inspectionId && `${lane}/${station}`}
          </div>
        </div>
        <div className="flex ml-2 ">
          <div className=" bg-persianGreen md:w-[40%] w-[30%] p-1 text-white">
            Date&Time
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold ">
            {data?.appointmentDate}
          </div>
        </div>
        <div className="flex">
          <div className=" p-1 bg-persianGreen md:w-[40%] w-[30%] text-white">
            Veh. Make
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold ">
            <p className="truncate absolute text-clip">
              {data?.vehicleMakeId}-{data?.vehicleMakeName}
            </p>
          </div>
        </div>
        <div className="flex">
          <div className=" p-1 bg-persianGreen md:w-[40%] w-[30%] text-white">
            Veh. Model
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold ">
            <p className="truncate">
              {data?.vehicleModelCode}-{data?.vehicleModelName}
            </p>
          </div>
        </div>
        <div className="flex mr-2">
          <div className=" p-1 bg-persianGreen md:w-[40%] w-[30%] text-white">
            Veh. ID
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold  ">
            <p className="truncate">{data?.vehicleId}</p>
          </div>
        </div>
        <div className="flex ml-2 ">
          <div className=" bg-persianGreen p-1 md:w-[40%] w-[30%] text-white">
            Exam. Code
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold ">
            {data?.examCode}
          </div>
        </div>
        <div className="flex">
          <div className=" p-1 bg-persianGreen md:w-[40%] w-[30%] text-white">
            Veh. Class
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold">
            <p className="truncate">{data?.vehicleClassId}</p>
          </div>
        </div>
        <div className="flex">
          <div className=" p-1 bg-persianGreen md:w-[40%] w-[30%] text-white">
            TA No.
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold ">
            {" "}
          </div>
        </div>
        <div className="flex mr-2">
          <div className=" p-1 bg-persianGreen md:w-[40%] w-[30%] text-white">
            Seating Cap
          </div>
          <div className="flex flex-grow  bg-lightGreen text-black text-md font-calibri items-center justify-center font-bold ">
            {data.vehicleLowerSeatCapQuantity ||
            data.vehicleUpperSeatCapQuantity ||
            data.vehiclStandardCapQuantity
              ? formatSeatCapacity
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentLayout;
