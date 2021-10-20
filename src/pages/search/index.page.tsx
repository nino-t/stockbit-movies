import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';
import { Lightbox } from 'react-modal-image';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchSearchMoviesAction } from '../../app/search/index.action';
import { selectAllSearchMovies, selectAllSearchMoviesPage, selectAllSearchMoviesStatus, selectTotalSearchMovies, selectTotalSearchMoviesInData } from '../../app/search/index.selector';
import StbPlaylistVideos from '../../components/stb-playlist-videos/index.component';
import StbVideolistItem from '../../components/stb-videolist-item/index.compoent';
import AppLayout from '../../features/app-layout/index.feature';
import { PreviewImageObject } from '../beranda/index.page';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const SearchPage: React.FC = (props) => {
  const query = useQuery();
  const dispatch = useAppDispatch();
  const keyword = query.get('q') || '';
  const status = useAppSelector(selectAllSearchMoviesStatus);
  const page = useAppSelector(selectAllSearchMoviesPage);
  const totalMovies = useAppSelector(selectTotalSearchMovies);
  const totalMoviesInData = useAppSelector(selectTotalSearchMoviesInData);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<PreviewImageObject | null>(null);
  const movies = useAppSelector(selectAllSearchMovies);

  useEffect(() => {
    dispatch(fetchSearchMoviesAction({ q: keyword, page: currentPage }));
  }, [dispatch, currentPage, keyword]);

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
    <AppLayout isHeaderTransparent={false}>
      <div className="container mx-auto py-12 pt-36">
        {
          openModal && previewImage &&
          <Lightbox
            medium={previewImage.image}
            large={previewImage.image}
            alt={previewImage.title}
            onClose={() => setOpenModal(false)}
          />
        }

        <StbPlaylistVideos title={`Search results for: ${keyword}`}>
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

export default SearchPage;