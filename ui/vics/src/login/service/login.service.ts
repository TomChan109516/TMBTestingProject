import { IP_URL, LOGIN_URL,GET_OHM_URL, GET_APPOINTMENT_URL, GET_ALL_UNCONFIRMED_LIST } from "../../constants/urlConstants";
import { axiosGet, axiosPost, axiosGetwithParam } from "../../utils/axiosInstance";

export const getstationdetils = async (ip) => {
  const response = await axiosGetwithParam(`${IP_URL}`, {clientip: ip});
  return response;
};

export const validateLogin = async (loginData) => {
  const response = await axiosPost(LOGIN_URL, loginData);
  return response;
};

export const validateohm = async (ohmData) => {
  const response = await axiosPost(GET_OHM_URL, ohmData);
  return response;
}
export const getAppointmentDetails = async (appointmentId) => {
  const response = await axiosGet(`${GET_APPOINTMENT_URL}/${appointmentId}`);
  return response;
};

export const getUnconfirmedList = async () => {
  const response = await axiosGet(GET_ALL_UNCONFIRMED_LIST);
  return response;
};