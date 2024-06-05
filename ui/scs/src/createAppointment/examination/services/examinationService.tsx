import {
  GET_CENTRES_URI,
  GET_EXAM_CODES,
  GET_RECENTAPPOINTMENTS,
  GET_VEHICLEPARTICULARSBYID,
} from "../../../constants/urlConstants";
import { axiosGet } from "../../../utils/axiosInstance";

export const getVehicleParticularsById = async (params) => {
  const response = await axiosGet(`${GET_VEHICLEPARTICULARSBYID}${params}`);
  return response;
};
export const getCentersAll = async (params) => {
  const response = await axiosGet(`${GET_CENTRES_URI}${params.status}`);
  return response;
};
export const getRecentAppointmentsById = async (params) => {
  const response = await axiosGet(`${GET_RECENTAPPOINTMENTS}${params}`);
  return response;
};
export const getExamCodes = async (params) => {
  const response = await axiosGet(`${GET_EXAM_CODES}${params}`);
  return response;
};
