import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { planet } from "../pages/types";
import { RootState } from "./store";
import { planetInterface, otherFilters } from "./types";

const initialState: planetInterface = {
  name: "",
  otherFilters: []
};
// export interface otherFilters {
//   id?: number;
//   diameter: number;
//   orbital_period: number;
//   climate: string;
// }

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
    applyAllSavedFilters: (state: any, action: PayloadAction<planet[] | any>) => {
      const filterWithOtherFilters = state.otherFilters.forEach((filter: otherFilters) => {
        const filterByClimate = action.payload.filter((planet: planet) => planet.climate === filter.climate)
        const filterByOrbitalPeriod = filterByClimate.filter((planet: planet) => planet.climate === filter.climate) 
      })
      
    }
  },
});

export const { reducer } = FilterNameSlice
export const { setName, setFilters, removeFilters } = FilterNameSlice.actions