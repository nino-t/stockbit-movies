import { RootState } from '../store';
import { searchAdapter } from './index.reducer';

export const {
  selectById: selectSearchMovieById,
  selectIds: selectSearchMovieIds,
  selectEntities: selectSearchMovieEntities,
  selectAll: selectAllSearchMovies,
  selectTotal: selectTotalSearchMovies,
} = searchAdapter.getSelectors((state: RootState) => state.search)

export const selectAllSearchMoviesStatus = (state: RootState) => state.search.status