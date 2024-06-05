import {
  GET_HEADLAMPCONFIG,
  START_INSPECTION_URL,
  HEAD_LAMP_TEST_CONFIGURATION_URL,
} from "../../../constants/urlConstants";
import { axiosGet, axiosPost } from "../../../utils/axiosInstance";

export const startInspection = async (params) => {
  const response = await axiosPost(START_INSPECTION_URL, params);
  return response;
};
export const getHeadlampConfig = async (inspectionId) => {
  const response = await axiosGet(`${GET_HEADLAMPCONFIG}/${inspectionId}`);
  return response;
};

export const headLampTestConfiguration = async (params) => {
  const response = await axiosPost(HEAD_LAMP_TEST_CONFIGURATION_URL, params);
  return response;
};
