import React from 'react';
import { useLocation } from 'react-router-dom';
import AppLayout from '../../features/app-layout/index.feature';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMovieByIdAction } from '../../app/movies/index.action';
import StbLoading from '../../components/stb-loading/stb-loading.component';
import StbContainer from '../../components/stb-container/stb-container.component';
import { selectFullmovieByIdMovie, selectFullmovieByIdStatus } from '../../app/movies/index.selector';
import StbMovieOverview from '../../components/stb-movie-overview/index.component';

const WatchPage: React.FC = () => {
  const query = useQuery();
  const dispatch = useAppDispatch();
  const movieId = query.get('v') || '';  
  const movie = useAppSelector(selectFullmovieByIdMovie);
  const status = useAppSelector(selectFullmovieByIdStatus);

  React.useEffect(() => {
    dispatch(fetchMovieByIdAction(movieId))
  }, [dispatch, movieId]);

  return (
    <AppLayout isHeaderTransparent={false}>
      <div className="mb-32" />
      <StbContainer>
        <StbLoading isLoading={status === 'loading'} />
        {
          status === 'idle' &&
            <StbMovieOverview
              poster={movie?.Poster ?? ''}
              title={movie?.Title ?? ''}
              plot={movie?.Plot ?? ''}
              year={Number(movie?.Year ?? '')}
              rated={movie?.Rated ?? ''}
              released={movie?.Released ?? ''}
              runtime={movie?.Runtime ?? ''}
              genre={movie?.Genre ?? ''}
              actors={movie?.Actors ?? ''}
              writer={movie?.Writer ?? ''}
            />
        }
      </StbContainer>
    </AppLayout>
  );
}

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

export default WatchPage;