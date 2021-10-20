import { createAsyncThunk } from '@reduxjs/toolkit';
import * as movieApi from '../movies/index.api';

export const fetchSearchMoviesAction = createAsyncThunk(
  `search/fetchSearchMovies`,
  async (args: movieApi.FetchMoviesArgs) => {
    const response = await movieApi.fetchMovies(args);
    return response
  }
)

export const fetchGlobalSearchMoviesAction = createAsyncThunk(
  `search/fetchGlobalSearchMovies`,
  async (args: movieApi.FetchMoviesArgs) => {
    const response = await movieApi.fetchMovies(args);
    return response
  }
)