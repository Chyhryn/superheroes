import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  API_HEROES,
  API_HEROES_IMAGES,
  BACKEND_BASE_URL,
} from "../../utils/appKeys";

axios.defaults.baseURL = `${BACKEND_BASE_URL}`;

export const getHeroes = createAsyncThunk(
  "heroes/getHeroes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_HEROES}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getHeroById = createAsyncThunk(
  "heroes/getHeroById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_HEROES}/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addHero = createAsyncThunk(
  "heroes/addHero",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${API_HEROES}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateHero = createAsyncThunk(
  "heroes/updateHero",
  async (obj, thunkAPI) => {
    console.log("FORM-DATA: ", obj);
    try {
      const response = await axios.put(`${API_HEROES}/${obj.id}`, obj.data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteHeroImg = createAsyncThunk(
  "heroes/deleteHeroImg",
  async (obj, thunkAPI) => {
    try {
      const response = await axios.put(`${API_HEROES_IMAGES}/${obj.id}`, obj);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteHero = createAsyncThunk(
  "heroes/deleteHero",
  async (data, thunkAPI) => {
    try {
      const response = await axios.delete(`${API_HEROES}/${data}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
