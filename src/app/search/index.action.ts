import { createAsyncThunk } from '@reduxjs/toolkit';
import * as movieApi from '../movies/index.api';

export const fetchSearchMoviesAction = createAsyncThunk(
  `search/fetchSearchMovies`,
  async (q: string) => {
    const response = await movieApi.fetchMovies(q);
    return response?.movies ?? []
  }
)