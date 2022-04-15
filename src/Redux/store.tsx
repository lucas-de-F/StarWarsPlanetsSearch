import { configureStore } from "@reduxjs/toolkit";
import { reducer as Filters } from "./FilterSlice";

export const store = configureStore({
  reducer: {
    // planets: reducer,
    planetFilter: Filters,
  },
});

export type RootState = ReturnType<typeof store.getState>