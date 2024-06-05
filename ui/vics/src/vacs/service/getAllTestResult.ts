import { GET_ALL_TESTS_RESULT_URL } from "../../constants/urlConstants";
import { axiosGet } from "../../utils/axiosInstance";

export const getalltestresult = async (inspectionId) => {
  const response = await axiosGet(
    `${GET_ALL_TESTS_RESULT_URL}/${inspectionId}`
  );
  return response;
};
