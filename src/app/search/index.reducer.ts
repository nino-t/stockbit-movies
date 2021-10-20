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
      .addCase(action.fetchSearchMoviesAction.fulfilled, searchAdapter.upsertMany)
  },
})

export default moviesSlice.reducer