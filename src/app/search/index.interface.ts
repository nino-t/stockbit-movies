import { Movie } from '../movies/index.interface';

export interface SearchState {
  status: 'idle' | 'loading' | 'failed'
  page: number
  total: number,
  globalSearchAutocomplete: {
    status: 'idle' | 'loading' | 'failed'
    movies: Movie[]
  }
}