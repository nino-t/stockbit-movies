import { RootState } from '../store';
import { moviesAdapter } from './index.reducer';

export const {
  selectById: selectMovieById,
  selectIds: selectMovieIds,
  selectEntities: selectMovieEntities,
  selectAll: selectAllMovies,
  selectTotal: selectTotalMovies,
} = moviesAdapter.getSelectors((state: RootState) => state.movies)

export const selectAllMoviesStatus = (state: RootState) => state.movies.status
export const selectFullmovieById = (state: RootState) => state.movies.fullmovieById
export const selectFullmovieByIdStatus = (state: RootState) => state.movies.fullmovieById.status
export const selectFullmovieByIdMovie = (state: RootState) => state.movies.fullmovieById.fullmovie