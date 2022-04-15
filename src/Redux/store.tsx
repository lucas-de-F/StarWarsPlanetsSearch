import { configureStore } from "@reduxjs/toolkit";
import { reducer as Filters } from "./FilterSlice";
import { PlanetsSlice } from './Thunk'

export const store = configureStore({
  reducer: {
    PlanetsSlice,
    planetFilter: Filters,
  },
});

export type RootState = ReturnType<typeof store.getState>