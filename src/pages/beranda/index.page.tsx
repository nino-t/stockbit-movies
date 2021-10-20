import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';
import { Lightbox } from 'react-modal-image';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchMoviesAction } from '../../app/movies/index.action';
import { selectAllMovies, selectAllMoviesPage, selectAllMoviesStatus, selectTotalMovies, selectTotalMoviesInData } from '../../app/movies/index.selector';
import batmanHero from '../../assets/images/batman-hero.jpeg';
import StbHeroWatch from '../../components/stb-hero-watch/index.component';
import StbHero from '../../components/stb-hero/index.component';
import StbPlaylistVideos from '../../components/stb-playlist-videos/index.component';
import StbVideolistItem from '../../components/stb-videolist-item/index.compoent';
import AppLayout from '../../features/app-layout/index.feature';

export interface PreviewImageObject {
  title: string
  image: string
}

const BerandaPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector(selectAllMovies);
  const page = useAppSelector(selectAllMoviesPage);
  const status = useAppSelector(selectAllMoviesStatus);
  const totalMovies = useAppSelector(selectTotalMovies);
  const totalMoviesInData = useAppSelector(selectTotalMoviesInData);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<PreviewImageObject | null>(null);

  useEffect(() => {
    dispatch(fetchMoviesAction({ q: null, page: currentPage }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    const isScrolling = (): void => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if ((scrollTop + clientHeight >= scrollHeight) && totalMovies < totalMoviesInData) {
        setCurrentPage(currentPage + 1);
      }      
    }  

    window.addEventListener('scroll', isScrolling);
    return () => window.removeEventListener('scroll', isScrolling);
  }, [currentPage, totalMovies, totalMoviesInData]);

  return (
    <AppLayout>
      <StbHero
        title={'Batman the dark knight'}
        image={batmanHero}
      >
        <div className="container mx-auto py-12 pt-40">
          <div className="w-2/5">
            <StbHeroWatch
              title={'Batman the dark knight'}
              synopsis={'A gang of criminals rob a Gotham City mob bank; the Joker manipulates them into murdering each other for a higher share until only he remains, escaping with the money. Batman, District Attorney Harvey Dent and Lieutenant Jim Gordon form an alliance to rid Gotham of organized crime.'}
            />
          </div>
        </div>
      </StbHero>

      {
        openModal && previewImage &&
          <Lightbox
            medium={previewImage.image}
            large={previewImage.image}
            alt={previewImage.title}
            onClose={() => setOpenModal(false)}
          />
      }

      <div className="container mx-auto py-12">
        <StbPlaylistVideos
          title={'Batman Movies'}>
          {
            movies.map((movie, index) => (
              <StbVideolistItem
                key={index}
                id={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                type={movie.Type}
                year={movie.Year}
                handlePosterClicked={() => {
                  setOpenModal(true);
                  setPreviewImage({
                    title: movie.Title,
                    image: movie.Poster
                  });
                }}
              />
            ))
          }
        </StbPlaylistVideos>
        {
          status === 'loading' &&
            <div className="flex justify-center items-center mt-10">
              <Spinner name="line-scale" fadeIn="none" />
            </div>
        }
      </div>
    </AppLayout>
  );
}

export default BerandaPage;