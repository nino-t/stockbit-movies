import { MoviesState } from './index.interface';

export const initialState: MoviesState = {
  status: 'idle',
  fullmovieById: {
    status: 'idle',
    fullmovie: null
  }
}