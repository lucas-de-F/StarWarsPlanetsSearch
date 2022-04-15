import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface planetInterface {
  name: string;
  population: number;
  diameter: number;
}

// Define the initial state using that type
const initialState: planetInterface = {
  name: "",
  population: 0,
  diameter: 0,
};

const FilterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDiameter: (state, action: PayloadAction<number>) => {
      state.diameter = action.payload;
    },
    setPopulation: (state, action: PayloadAction<number>) => {
      state.population = action.payload;
    },
  },
});

export const { reducer } = FilterSlice
export const { setName, setDiameter, setPopulation } = FilterSlice.actions