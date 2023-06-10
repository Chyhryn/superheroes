import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  updateHeroService,
  addHeroService,
  getHeroesService,
  getHeroByIdService,
  deleteHeroImgService,
  deleteHeroService,
  getHeroesListService,
} from "../../services/heroesServices";

export const getHeroes = createAsyncThunk(
  "heroes/getHeroes",
  async (_, thunkAPI) => {
    try {
      return await getHeroesService();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getHeroesList = createAsyncThunk(
  "heroes/getHeroesList",
  async (data, thunkAPI) => {
    try {
      return await getHeroesListService(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getHeroById = createAsyncThunk(
  "heroes/getHeroById",
  async (id, thunkAPI) => {
    try {
      return await getHeroByIdService(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addHero = createAsyncThunk(
  "heroes/addHero",
  async (data, thunkAPI) => {
    try {
      return await addHeroService(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateHero = createAsyncThunk(
  "heroes/updateHero",
  async (obj, thunkAPI) => {
    try {
      return await updateHeroService(obj.id, obj.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteHeroImg = createAsyncThunk(
  "heroes/deleteHeroImg",
  async (data, thunkAPI) => {
    try {
      return await deleteHeroImgService(data.id, data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteHero = createAsyncThunk(
  "heroes/deleteHero",
  async (id, thunkAPI) => {
    try {
      return await deleteHeroService(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
