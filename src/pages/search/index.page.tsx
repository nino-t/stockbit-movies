import React, { useState, useEffect } from 'react';
import { Lightbox } from 'react-modal-image';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchSearchMoviesAction } from '../../app/search/index.action';
import { selectAllSearchMovies } from '../../app/search/index.selector';
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
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<PreviewImageObject | null>(null);
  const movies = useAppSelector(selectAllSearchMovies);

  useEffect(() => {
    dispatch(fetchSearchMoviesAction(keyword));
  }, [dispatch, keyword]);

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
      </div>
    </AppLayout>
  );
}

export default SearchPage;