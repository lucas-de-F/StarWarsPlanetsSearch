import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface otherFilters {
  id?: number;
  diameter: string;
  orbital_period: number;
  climate: string;
}
export interface planetInterface {
  name: string;
  otherFilters: otherFilters[] | []
}

// Define the initial state using that type
const initialState: planetInterface = {
  name: "oo",
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
    }
  },
});

export const { reducer } = FilterNameSlice
export const { setName, setFilters, removeFilters } = FilterNameSlice.actions