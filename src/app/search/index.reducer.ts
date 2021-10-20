import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import * as action from './index.action';
import { Movie } from '../movies/index.interface';
import { initialState as initialStateMovies } from './index.state';
import { SearchState } from './index.interface';

export const searchAdapter = createEntityAdapter<Movie>({
  selectId: (model) => model.imdbID
});

const initialState = searchAdapter.getInitialState<SearchState>(initialStateMovies);
const moviesSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(action.fetchSearchMoviesAction.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(action.fetchSearchMoviesAction.fulfilled, (state, action) => {
      state.status = 'idle'
      state.page = action.meta.arg.page
      state.total = action.payload?.total ?? 0
      searchAdapter.upsertMany(state, action.payload?.movies ?? [])
    })
    .addCase(action.fetchSearchMoviesAction.rejected, (state, action) => {
      state.status = 'failed'
    })
    .addCase(action.fetchGlobalSearchMoviesAction.pending, (state, action) => {
      state.globalSearchAutocomplete.status = 'loading'
    })
    .addCase(action.fetchGlobalSearchMoviesAction.fulfilled, (state, action) => {
      state.globalSearchAutocomplete.status = 'idle'
      state.globalSearchAutocomplete.movies = action.payload?.movies ?? []
    })
    .addCase(action.fetchGlobalSearchMoviesAction.rejected, (state, action) => {
      state.globalSearchAutocomplete.status = 'failed'
    })
  },
})

export default moviesSlice.reducer