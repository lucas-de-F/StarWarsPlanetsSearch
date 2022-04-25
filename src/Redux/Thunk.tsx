import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { planet } from "../Components/types";
import { UsersState } from './types';

export const fetchPlanets = createAsyncThunk(
  'posts/getPosts',
  async (thunkAPI) => {
    const res = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then(
      (data) => data.json()
    )
    return res.results
  })

const initialState = {
  filtered: [],
  entities: [],
  loading: 'idle',
  index: 0,
} as UsersState

export const fetchPlanetsSlice = createSlice({
  name: 'fetchPlanetsSlice',
  initialState,
  reducers: {
    setFilteredPlanets: (state: any, action: PayloadAction<planet[]>) => {
      state.filtered = action.payload;
    },
    resetIndex: (state: any) => {
      state.index = 0
    },
    incrementIndex: (state: any): any => {
      // if (state.index <= state.filtered.length) {
      //   state.index = state.index + 1;
      // }
      // if (state.index === state.filtered.length) {
      //   state.index = 0
      // }
      if (state.index < state.filtered.length - 1) {
        state.index = state.index + 1
        return
      }
      if (state.index === state.filtered.length - 1) {
        state.index = 0
      }
    },
    decrementIndex: (state: any) => {
      if (state.index > 0) {
        state.index = state.index - 1
      }
      if (state.index === 0) {
        state.index = state.filtered.length - 1
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlanets.fulfilled, (state: any, { payload }: any) => {
      state.filtered = payload
      state.entities = payload
      state.loading = "idle";
    })
  },
})
export const { setFilteredPlanets, incrementIndex, decrementIndex, resetIndex } = fetchPlanetsSlice.actions
export const PlanetsSlice = fetchPlanetsSlice.reducer