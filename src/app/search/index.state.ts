import { SearchState } from './index.interface';

export const initialState: SearchState = {
  status: 'idle',
  page: 1,
  total: 0,
  globalSearchAutocomplete: {
    status: 'idle',
    movies: []
  }
}