import { axiosPost } from "../../../utils/axiosInstance";
import { ADD_UNCONFIRMED_LIST_URL } from "../../../constants/urlConstants";

export const addUnConfirmedList = async (payloadData) => {
  const response = await axiosPost(ADD_UNCONFIRMED_LIST_URL, payloadData);
  return response;
};
