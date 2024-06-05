import { ADDATTACHMENT, APPOINTMENTHISTORY_API, DELETE_APPOINTMENT, DELETE_ATTACHMENT, DOWNLOAD_ATTACHMENTFILE, VEHICLE_ATTACHMENT_SEARCH_API } from "../../constants/urlConstants";
import { axiosInstance, axiosPost, axiosGetwithParam, axiosGet, axiosPostwithParam, axiosPostQuery } from "../../utils/axiosInstance";


export const axiosPostDownload = async (url) => {
   const response = await axiosInstance.post( DOWNLOAD_ATTACHMENTFILE  );
    return response.data.data;
  
}

export const getVehicleAttachment = async (params) => {
    const response = await axiosGetwithParam(VEHICLE_ATTACHMENT_SEARCH_API, params);
    return response;
  }
 
  export const deleteAttachment = async (params) => {
    const response = await axiosPostQuery(DELETE_ATTACHMENT+`?chassisNumber=${params.chassisNumber}&fileName=${params.fileName}`);
    return response;
  }

  export const addAttachment = async (data) => {
    const headerConfig = {
      headers: {
        'Content-Type': 'Multipart/formData',
      },
    };
    
    const response = await axiosInstance.post(ADDATTACHMENT, data, headerConfig);
    return response;
  }

  export const getAppointmentHistory = async (params) => {
    const response = await axiosPostQuery(APPOINTMENTHISTORY_API + params);
    return response;
  }
  
