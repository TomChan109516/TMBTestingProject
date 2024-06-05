import { APPOINTMENT_SEARCH_VEHICLE, GET_VEHICLECLASSSUBCLASS_URL, GET_VEHICLEMAKES_URL } from "../../constants/urlConstants";
import { axiosGet, axiosGetwithParam } from "../../utils/axiosInstance";

export const getVehicleClassSubClass =async (params)=>{
    const response = await axiosGet(`${GET_VEHICLECLASSSUBCLASS_URL}${params.status}`);
    return response;
}
export const getVehicleMake = async (params)=>{
    const response = await axiosGet(`${GET_VEHICLEMAKES_URL}${params.status}`);
    return response;
}
export const searchVehicle=async (params)=>{
    const response =await axiosGetwithParam(APPOINTMENT_SEARCH_VEHICLE,params);
    return response;
}