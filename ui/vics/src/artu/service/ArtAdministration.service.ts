import {
  ADDVEEPAIRING,
  ARTUTABLEDETAILS,
  ARTUTESTRESULTS,
  TOGGLECONNECTION_URL,
} from "../../constants/urlConstants";
import { axiosGet, axiosGetwithParam, axiosInstance, axiosPost } from "../../utils/axiosInstance";

export const addVeePairing = async (data) => {
  const response = await axiosInstance.post(ADDVEEPAIRING, data);
  return response;
};

export const toggleConnection = async ({ id, toggleStatus }) => {
  const response = await axiosPost(TOGGLECONNECTION_URL, {
    id,
    toggleStatus,
  });

  return response;
};

export const getArtuTable = async () => {
   const response = await axiosGet(ARTUTABLEDETAILS);
  return response;
};
export const getArtuTestResults = async (params) => {
  const response = await axiosGetwithParam( ARTUTESTRESULTS, params);
  return response;
};

