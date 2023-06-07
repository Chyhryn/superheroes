import axios from "axios";
import {
  API_HEROES,
  API_HEROES_IMAGES,
  BACKEND_BASE_URL,
} from "../utils/appKeys";

axios.defaults.baseURL = `${BACKEND_BASE_URL}`;

export const getHeroesService = async () => {
  try {
    const response = await axios.get(`${API_HEROES}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getHeroByIdService = async (id) => {
  try {
    const response = await axios.get(`${API_HEROES}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addHeroService = async (data) => {
  try {
    const response = await axios.post(`${API_HEROES}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateHeroService = async (id, data) => {
  try {
    const response = await axios.put(`${API_HEROES}/${id}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteHeroImgService = async (id, data) => {
  try {
    const response = await axios.put(`${API_HEROES_IMAGES}/${id}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteHeroService = async (id) => {
  try {
    const response = await axios.delete(`${API_HEROES}/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
