import { GET_LANEALL, RESCHEDULEAPPOINTMENT } from "../../../constants/urlConstants";
import { axiosGet, axiosPost } from "../../../utils/axiosInstance";

export const getLane = async () => {
    const response = await axiosGet(GET_LANEALL);
    return response;
  }

export const reschedule= async (reqData)=>{
    const response = await axiosPost(RESCHEDULEAPPOINTMENT,reqData);
    return response;
}
