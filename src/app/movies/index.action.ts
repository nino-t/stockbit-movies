import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './index.api';

export const fetchMoviesAction = createAsyncThunk(
  `movies/fetchMovies`,
  async (args: api.FetchMoviesArgs) => {
    const response = await api.fetchMovies(args);
    return response
  }
)

export const fetchMovieByIdAction = createAsyncThunk(
  `movies/fetchMovieById`,
  async (id: string) => {
    const response = await api.fetchMovieById(id);
    return response
  }
)
