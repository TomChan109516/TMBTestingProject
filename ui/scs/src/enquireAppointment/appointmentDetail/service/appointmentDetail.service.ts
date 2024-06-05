import { ENQUIRE_HISTORY_API } from "../../../constants/urlConstants";
import { axiosGet } from "../../../utils/axiosInstance";

export const getEnquireHistory = async (data) => {
  const response = await axiosGet(ENQUIRE_HISTORY_API + `${data}`);
  return response;
};
