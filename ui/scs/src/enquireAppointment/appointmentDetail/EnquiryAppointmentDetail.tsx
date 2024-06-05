import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@nextui-org/react";
import ShowHistoryPopup from "./HistoryPopup";
import EnquiryAppointmentInfo from "./EnquiryAppointmentInfo";
import EnquiryVehicleParticular from "./EnquiryVehicleParticular";
import { saveAppointmentDetails } from "../state/enquiryAppointmentSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_APPOINTMENT_DETAIL,
  REPRINT_CERTIFICATE,
} from "../../constants/urlConstants";
import {
  axiosDelete,
  axiosGet,
  axiosPost,
  axiosGetPDF,
  axiosGetwithParam,
} from "../../utils/axiosInstance";
import DeletePopup from "./DeletePopup";
import CancelPopup from "./CancelPopup";

export default function EnquiryAppointmentDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const [HistoryPopup, setHistoryPopup] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [cancelConfirm, setCancelConfirm] = useState(false);
  const { enquiryAppointmentInfo } = useSelector(
    (state) => state.enquiryAppointment
  );

  const fetchAppointmentDetails = async () => {
    try {
      const response = await axiosGetwithParam(GET_APPOINTMENT_DETAIL, {
        appointmentNumber: params.appointmentId,
      });
      dispatch(saveAppointmentDetails(response));
    } catch (error) {
      console.error("Error fetching Appointment Details data:", error);
    }
  };
  useEffect(() => {
    fetchAppointmentDetails();
  }, []);

  const confirmDeleteAppointment = () => {
    setShowConfirmPopup(true);
  };
  const cancelAppointment = () => {
    setCancelConfirm(true);
  };
  const attachmentHandler = () => {
    navigate("/VehicleAttachment");
  };

  const handleAppointmentLetter = async () => {
    try {
      const response = await axiosGetPDF(
        REPRINT_CERTIFICATE + enquiryAppointmentInfo.appointmentNumber
      );
      const file = new Blob([response], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAmend = () => {
    navigate("/amendAttachment");
  };
  const handleHistoryPopup = () => {
    setHistoryPopup(true);
  };
  const closeHistoryPopup = (val) => {
    setHistoryPopup(val);
  };

  return (
    <>
      <div className="flex">
        <div className="flex-initial text-[#0a923d] p-[10px] ml-[15px] font-bold text-sm">
          Appointment Enquiry{">"} Appointment Detail
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[50%] p-[5px] pl-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Appointment Information
            </h5>
            <div className="min-h-[410px] max-h-[420px] h-[410px] overflow-x-hidden text-black">
              <EnquiryAppointmentInfo />
            </div>
          </h1>
        </div>
        <div className="w-[50%] p-[5px] pr-2 ">
          <h1>
            <h5 className="absolute -top-2 start-3 pl-[10px] pr-[10px] text-sm/[13px] text-[#00AF8F]">
              Vehicle particular
            </h5>
            <div className=" min-h-[410px] max-h-[420px] h-[410px] overflow-x-hidden text-black">
              <EnquiryVehicleParticular />
            </div>
          </h1>
        </div>
      </div>
      <div className="flex justify-end mr-2 gap-1 mt-[5px]">
        <Button
          type="reset"
          className="bg-[#FFFFFF] border-[#E42217] text-[#FF0000] font-bold rounded"
          size="sm"
          variant="bordered"
          onPress={confirmDeleteAppointment}
        >
          Delete Appointment
        </Button>
        {showConfirmPopup && (
          <DeletePopup
            showConfirmPopup={showConfirmPopup}
            setShowConfirmPopup={setShowConfirmPopup}
            title="Delete Appointment"
          />
        )}
        <Button
          type="reset"
          className="bg-[#B21807] text-[#FFFFFF] font-bold rounded"
          size="sm"
          onClick={cancelAppointment}
        >
          Cancel Appointment
        </Button>
        {cancelConfirm && (
          <CancelPopup
            cancelConfirm={cancelConfirm}
            setCancelConfirm={setCancelConfirm}
            title="Cancel Appointment"
          />
        )}
        <Button
          type="button"
          className="bg-[#F0FFFF] text-[#3EB489] border-[#75c3a5] font-bold rounded"
          size="sm"
          variant="bordered"
          onClick={attachmentHandler}
        >
          Attachment
        </Button>
        <Button
          type="button"
          className="bg-[#F0FFFF] text-[#3EB489] border-[#75c3a5] font-bold rounded"
          size="sm"
          variant="bordered"
          onClick={handleAppointmentLetter}
        >
          Appointment Letter
        </Button>
        <Button
          type="button"
          className="bg-[#F0FFFF] text-[#3EB489] border-[#75c3a5] font-bold rounded"
          size="sm"
          variant="bordered"
          onClick={handleHistoryPopup}
        >
          History
        </Button>
        <Button
          type="button"
          className="text-[#FFFFFF] bg-[#00AF8F] font-bold rounded"
          size="sm"
          onClick={() => {
            navigate("/rescheduleAppointment");
          }}
        >
          Reschedule
        </Button>
        <Button
          type="button"
          className="bg-[#00AF8F] text-[#FFFFFF] font-bold rounded"
          size="sm"
          onClick={handleAmend}
        >
          Amend
        </Button>
      </div>
      {HistoryPopup && (
        <ShowHistoryPopup
          HistoryPopup={HistoryPopup}
          closeHistoryPopup={closeHistoryPopup}
        ></ShowHistoryPopup>
      )}
    </>
  );
}
