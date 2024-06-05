/* eslint-disable no-useless-catch */
import axios from "axios";

const gateWayApiBaseUrl = window._env_.VICS_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: gateWayApiBaseUrl,
  headers: {
    "Content-type": "application/json",
  },
});

export const axiosPost = async (url, payloadData) => {
  try {
    const response = await axiosInstance.post(url, payloadData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosGet = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const axiosPostMessage = async (url, payloadData) => {
  try {
    const response = await axiosInstance.post(url, payloadData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosGetwithParam = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosPostwithParam = async (url, params = {}) => {
  try {
    const response = await axiosInstance.post(url, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosPostQuery = async (url) => {
  try {
    const response = await axiosInstance.post(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosPut = async (url, params) => {
  try {
    const response = await axiosInstance.put(url, params);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const axiosDelete = async (url, params) => {
  try {
    const response = await axiosInstance.delete(url, params);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const axiosGetPDF = async (url) => {
  try {
    const response = await axiosInstance.get(url, { responseType: "blob" });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const axiosPostDownload = async (url) => {
  try {
    const response = await axiosInstance.post(url, { responseType: "blob" });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
