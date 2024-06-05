import { GET_ALL_WORK_STATION_LOCATION } from "../../../constants/urlConstants";
import { axiosGet } from "../../../utils/axiosInstance";

export const getALLWorkstationLocation = async (params) => {
    const response = await axiosGet(`${GET_ALL_WORK_STATION_LOCATION}/${params}`);
    return response;
  };