import { CREATEAPPOINTMENT_API, GET_EXAM_DATES, GET_EXAM_SLOTS, GET_LANEALL } from "../../constants/urlConstants";
import { axiosGet, axiosPost, axiosGetwithParam } from "../../utils/axiosInstance";

export const getExamDates = async (data) => {
  const response = await axiosGetwithParam(GET_EXAM_DATES, data);
  return response;
}

export const getTimeSlots = async (params) => {
  const response = await axiosGetwithParam(GET_EXAM_SLOTS,params);
  return response;
}

export const getLaneCenterId = async (data) => {
  const response = await axiosGetwithParam(GET_LANEALL, data);
  return response;
}

export const getCreateAppointment = async (data) => {
  const response = await axiosPost(CREATEAPPOINTMENT_API, data);
  return response;
}
