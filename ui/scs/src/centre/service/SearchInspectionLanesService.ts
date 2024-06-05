import { ADD_UPDATELANE_API, SEARCHINSPECTIONLANE_API } from "../../constants/urlConstants"
import {axiosGetwithParam, axiosPost } from "../../utils/axiosInstance";

export const searchInspectionLanesService = async (params)=>{
 const response = await axiosGetwithParam(SEARCHINSPECTIONLANE_API,params);
 return response;
}

export const addInspectionLaneService = async (data)=>{
    const response = await axiosPost(ADD_UPDATELANE_API,data);
    return response;
}
