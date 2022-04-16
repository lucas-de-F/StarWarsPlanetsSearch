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
} as UsersState

export const fetchPlanetsSlice = createSlice({
    name: 'fetchPlanetsSlice',
    initialState,
    reducers: {
      setFilteredPlanets: (state: any, action: PayloadAction<planet[]>) => {
            state.filtered = action.payload;
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
  export const { setFilteredPlanets } = fetchPlanetsSlice.actions
  export const PlanetsSlice = fetchPlanetsSlice.reducer