import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './index.api';

export const fetchMoviesAction = createAsyncThunk(
  `movies/fetchMovies`,
  async () => {
    const response = await api.fetchMovies();
    return response?.movies ?? []
  }
)

export const fetchMovieByIdAction = createAsyncThunk(
  `movies/fetchMovieById`,
  async (id: string) => {
    const response = await api.fetchMovieById(id);
    return response
  }
)
