import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMoviesAction } from '../../app/movies/index.action';
import { selectAllMovies, selectAllMoviesPage, selectAllMoviesStatus, selectTotalMovies, selectTotalMoviesInData } from '../../app/movies/index.selector';
import StbCardMovie from '../../components/stb-card-movie/stb-card-movie.component';
import StbHeadingH3 from '../../components/stb-heading-h3/index.component';
import StbInfiniteScrollPagination from '../../components/stb-infinite-scroll-pagination/index.component';
import { ModalImageContext } from '../../contexts/modal-image-context/index.context';

const SearchMovies: React.FC = () => {
  const query = useQuery();
  const dispatch = useAppDispatch();
  const keyword = query.get('q') || '';
  const moviePage = useAppSelector(selectAllMoviesPage);
  const [page, setPage] = React.useState<number>(moviePage);
  const { previewImage } = React.useContext(ModalImageContext);

  React.useEffect(() => {
    dispatch(fetchMoviesAction({ q:keyword, page: page }));
  }, [dispatch, page, keyword]);

  const movies = useAppSelector(selectAllMovies);
  const status = useAppSelector(selectAllMoviesStatus);
  const total = useAppSelector(selectTotalMovies);
  const totalInResponse = useAppSelector(selectTotalMoviesInData);

  const loadMoreMovies = (nextpage: number): void => {
    setPage(nextpage);
  }

  const openPreviewImage = (image: string, alt: string): void => {
    previewImage(image, alt);
  }

  return (
    <React.Fragment>
      <div className="mt-10" />
      <StbHeadingH3>{`Search results for: ${keyword}`}</StbHeadingH3>
      <StbInfiniteScrollPagination
        status={status}
        total={total}
        currentPage={page}
        totalInResponse={totalInResponse}
        handleLoadMore={loadMoreMovies}
        containerClassname="grid grid-cols-5 gap-x-12 gap-y-6"
      >
        {
          movies.map((movie) => (
            <StbCardMovie
              key={movie.imdbID}
              id={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              release={movie.Year}
              href={`/watch?v=${movie.imdbID}`}
              handlePosterClicked={() => openPreviewImage(movie.Poster, movie.Title)}
            />
          ))
        }
      </StbInfiniteScrollPagination>
    </React.Fragment>
  );
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export default SearchMovies;
