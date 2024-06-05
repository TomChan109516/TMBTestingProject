import { ADD_EXAM_CODE, SEARCH_MAINTAIN_EXAM_CODE } from "../../constants/urlConstants";
import { axiosGet, axiosGetwithParam, axiosPost } from "../../utils/axiosInstance";

export const getSearchExamCode =async (params)=>{
    const response = await axiosGetwithParam(SEARCH_MAINTAIN_EXAM_CODE,params);
    return response;
}
export const addExamCodes =async (data)=>{
    const response = await axiosPost(ADD_EXAM_CODE,data);
    return response;
}
