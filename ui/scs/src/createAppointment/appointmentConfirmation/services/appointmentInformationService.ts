import { GET_APPOINTDETAILSBYID } from "../../../constants/urlConstants";
import { axiosGet } from "../../../utils/axiosInstance";

export const getAppointmentDetailsById = async (params) => {
    const response = await axiosGet(`${GET_APPOINTDETAILSBYID}${params}`);
    return response;
  };