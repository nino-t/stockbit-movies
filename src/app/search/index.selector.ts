import { RootState } from '../store';
import { searchAdapter } from './index.reducer';

export const {
  selectById: selectSearchMovieById,
  selectIds: selectSearchMovieIds,
  selectEntities: selectSearchMovieEntities,
  selectAll: selectAllSearchMovies,
  selectTotal: selectTotalSearchMovies,
} = searchAdapter.getSelectors((state: RootState) => state.search)

export const selectAllSearchMoviesPage = (state: RootState) => state.search.page
export const selectAllSearchMoviesStatus = (state: RootState) => state.search.status
export const selectTotalSearchMoviesInData = (state: RootState) => state.search.total

export const selectGlobalSearchStatus = (state: RootState) => state.search.globalSearchAutocomplete.status
export const selectGlobalSearchMovies = (state: RootState) => state.search.globalSearchAutocomplete.movies