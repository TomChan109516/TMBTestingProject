import { GET_CENTERSALL, GET_CENTRES_URI, LOGIN_URL} from "../../constants/urlConstants";
import { axiosGet, axiosPost } from "../../utils/axiosInstance";
import { ICentres } from "../model/loginModel";

export const getCenters = async () => {
  const response:ICentres = await axiosGet(GET_CENTRES_URI);
  return response;
}

export const validateLogin = async (loginData) => {
  const response = await axiosPost(LOGIN_URL, loginData);
  return response;
}

export const getCentersAll = async (params) => {
  const response = await axiosGet(`${GET_CENTRES_URI}${params.status}`);
  return response;
}
