import {GET_ALL_MAINTAIN_EQUIPMENT_DATA} from "../../constants/urlConstants";
import { axiosGet } from "../../utils/axiosInstance";

export const getEquipmentItemAndDetails = async () => {
    const response = await axiosGet(GET_ALL_MAINTAIN_EQUIPMENT_DATA);
    return response;
  };