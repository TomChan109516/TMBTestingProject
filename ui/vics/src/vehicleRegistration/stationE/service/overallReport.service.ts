import { GET_OVERALLRESULT } from "../../../constants/urlConstants";
import { axiosGet } from "../../../utils/axiosInstance";

export const getOverallService = async (inspectionId) => {
  const response = await axiosGet(`${GET_OVERALLRESULT}/${inspectionId}`);
  return response;
};