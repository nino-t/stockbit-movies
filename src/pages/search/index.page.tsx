import React, { useState } from 'react';
import { Lightbox } from 'react-modal-image';
import StbPlaylistVideos from '../../components/stb-playlist-videos/index.component';
import StbVideolistItem from '../../components/stb-videolist-item/index.compoent';
import AppLayout from '../../features/app-layout/index.feature';
import { PreviewImageObject } from '../beranda/index.page';

const SearchPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<PreviewImageObject | null>(null);

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

        <StbPlaylistVideos title={'Search results for: xxx'}>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_number, index) => (
              <StbVideolistItem
                id={'xxx'}
                poster={'https://m.media-amazon.com/images/M/MV5BYjdkZWFhNzctYmNhNy00NGM5LTg0Y2YtZWM4NmU2MWQ3ODVkXkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg'}
                title={'Stranger Things'}
                type={'Movie'}
                year={'2019'}
                handlePosterClicked={() => {
                  setOpenModal(true);
                  setPreviewImage({
                    title: 'Stranger Things',
                    image: 'https://m.media-amazon.com/images/M/MV5BYjdkZWFhNzctYmNhNy00NGM5LTg0Y2YtZWM4NmU2MWQ3ODVkXkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg'
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