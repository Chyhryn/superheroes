import { createSlice } from "@reduxjs/toolkit";
import {
  addHero,
  deleteHero,
  deleteHeroImg,
  getHeroById,
  getHeroes,
  updateHero,
} from "./operations";

const heroesInitialState = {
  heroes: [],
  activeHero: {},
  isLoading: false,
  shouldRedirect: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState: heroesInitialState,
  extraReducers: {
    [getHeroes.pending]: handlePending,
    [addHero.pending]: handlePending,
    [getHeroById.pending]: handlePending,
    [updateHero.pending]: handlePending,
    [deleteHeroImg.pending]: handlePending,
    [deleteHero.pending]: handlePending,

    [getHeroes.fulfilled](state, action) {
      state.heroes = action.payload;
      state.isLoading = false;
      state.shouldRedirect = false;
    },
    [addHero.fulfilled](state, action) {
      state.heroes = [...state.heroes, action.payload];
      state.isLoading = false;
      state.shouldRedirect = false;
    },
    [getHeroById.fulfilled](state, action) {
      state.activeHero = action.payload;
      state.isLoading = false;
      state.shouldRedirect = false;
    },
    [updateHero.fulfilled](state, action) {
      state.activeHero = { ...state.activeHero, ...action.payload };
      state.isLoading = false;
      state.shouldRedirect = false;
    },
    [deleteHeroImg.fulfilled](state, action) {
      state.activeHero = { ...state.activeHero, ...action.payload };
      state.isLoading = false;
      state.shouldRedirect = false;
    },
    [deleteHero.fulfilled](state) {
      state.activeHero = {};
      state.isLoading = false;
      state.shouldRedirect = true;
    },
  },
});

export const heroesReducer = heroesSlice.reducer;
