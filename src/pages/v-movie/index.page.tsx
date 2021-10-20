import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMovieByIdAction } from '../../app/movies/index.action';
import { selectAllMoviesStatus, selectFullmovieByIdMovie } from '../../app/movies/index.selector';
import heroVideos from '../../assets/images/hero-videos.png';
import StbHero from '../../components/stb-hero/index.component';
import StbMovieOverview from '../../components/stb-movie-overview/index.component';
import AppLayout from '../../features/app-layout/index.feature';

const VMoviePage: React.FC = () => {
  let { movieId } = useParams<{ movieId: string }>();
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectAllMoviesStatus)
  const movie = useAppSelector(selectFullmovieByIdMovie)

  useEffect(() => {
    dispatch(fetchMovieByIdAction(movieId))
  }, [dispatch, movieId])

  return (
    <AppLayout>
      <StbHero
        title={'Videos collection'}
        image={heroVideos}
      />

      {
        status === 'idle' && movie &&
          <div className="container mx-auto mb-20" style={{ marginTop: '-200px' }}>
            <StbMovieOverview
              poster={movie.Poster}
              title={movie.Title}
              plot={movie.Plot}
              year={Number(movie.Year)}
              rated={movie.Rated}
              released={movie.Released}
              runtime={movie.Runtime}
              genre={movie.Genre}
              actors={movie.Actors}
              writer={movie.Writer} />
          </div>
      }
    </AppLayout>
  );
}

export default VMoviePage;