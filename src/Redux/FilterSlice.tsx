import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { planetInterface, otherFilters } from "./types";

const initialState: planetInterface = {
  name: "",
  otherFilters: {}
};

const FilterNameSlice = createSlice({
  name: "FilterName",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setFilters: (state: any, action: PayloadAction<otherFilters>) => {
      state.otherFilters = {...action.payload}
    },
    removeFilters: (state) => {
      state.otherFilters = state.otherFilters = {}
    },
  },
});

export const { reducer } = FilterNameSlice
export const { setName, setFilters, removeFilters } = FilterNameSlice.actions