
import { GET_VEHICLESUBCLASS_URL } from "../../constants/urlConstants";
import {  axiosGetwithParam } from "../../utils/axiosInstance";


export const getSubClass = async (params) => {
    const response = await axiosGetwithParam(GET_VEHICLESUBCLASS_URL , params);
    return response;
}