import { configureStore } from "@reduxjs/toolkit";
import { heroesReducer } from "./heroes/slice";

export const store = configureStore({
  reducer: {
    heroes: heroesReducer,
  },
});
