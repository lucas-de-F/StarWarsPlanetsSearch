import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPlanets = createAsyncThunk(
  'posts/getPosts',
  async (thunkAPI) => {
    const res = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then(
    (data) => data.json()
  )
  return res.results
})

interface UsersState {
    entities: []
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  entities: [],
  loading: 'idle',
} as UsersState


export const fetchPlanetsSlice = createSlice({
    name: 'fetchPlanetsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPlanets.fulfilled, (state: any, { payload }: any) => {
            state.entities.push(...payload);
            state.loading = "idle";
        })
      },
  })
  
  export const PlanetsSlice = fetchPlanetsSlice.reducer