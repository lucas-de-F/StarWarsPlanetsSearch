import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { planet } from "../pages/types";
import { RootState } from "./store";
import { planetInterface, otherFilters } from "./types";

const initialState: planetInterface = {
  name: "",
  otherFilters: []
};

const FilterNameSlice = createSlice({
  name: "FilterName",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setFilters: (state: any, action: PayloadAction<otherFilters>) => {
      const id = state.otherFilters.length
      state.otherFilters.push({ id, ...action.payload})
    },
    removeFilters: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.otherFilters = state.otherFilters.filter((filter) => filter.id !== id)
    },
    applyAllSavedFilters: (state: planetInterface, action: PayloadAction<planet[] | any>) => {
      return action.payload.filter((planet: planet) => {
        return state.otherFilters.map(({ as, filter_option, value }) => {
          if(as === 'less') {
            return Number(planet[filter_option]) < value
          }
          if(as === 'greater') {
            return planet[filter_option] > value
          }
          return planet[filter_option] === value
        })
      })
    }
  },
});

export const { reducer } = FilterNameSlice
export const { setName, setFilters, removeFilters } = FilterNameSlice.actions