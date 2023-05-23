import { createSlice } from "@reduxjs/toolkit";

const heroesInitialState = { heroes: [], isLoading: false, error: null };

export const heroesSlice = createSlice({
  name: "heroes",
  initialState: heroesInitialState,
});

export const heroesReducer = heroesSlice.reducer;
