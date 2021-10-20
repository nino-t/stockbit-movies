import { MoviesState } from './index.interface';

export const initialState: MoviesState = {
  status: 'idle',
  page: 1,
  total: 0,
  fullmovieById: {
    status: 'idle',
    fullmovie: null
  }
}