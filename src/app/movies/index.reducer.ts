import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import * as action from './index.action';
import { Movie, MoviesState } from './index.interface';
import { initialState as initialStateMovies } from './index.state';

export const moviesAdapter = createEntityAdapter<Movie>({
  selectId: (model) => model.imdbID
});

const initialState = moviesAdapter.getInitialState<MoviesState>(initialStateMovies);
const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(action.fetchMoviesAction.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(action.fetchMoviesAction.fulfilled, (state, action) => {
        state.status = 'idle'
        state.page = action.meta.arg.page
        state.total = action.payload?.total ?? 0
        moviesAdapter.upsertMany(state, action.payload?.movies ?? [])
      })
      .addCase(action.fetchMoviesAction.rejected, (state, action) => {
        state.status = 'failed'
      })
      .addCase(action.fetchMovieByIdAction.pending, (state, action) => {
        state.fullmovieById.status = 'loading'
        state.fullmovieById.fullmovie = null
      })
      .addCase(action.fetchMovieByIdAction.fulfilled, (state, action) => {
        state.fullmovieById.status = 'idle'
        state.fullmovieById.fullmovie = action.payload || null
      })
      .addCase(action.fetchMovieByIdAction.rejected, (state, action) => {
        state.fullmovieById.status = 'failed'
        state.fullmovieById.fullmovie = null
      })
  },
})

export default moviesSlice.reducer