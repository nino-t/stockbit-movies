import React, { useState } from 'react';
import { Lightbox } from 'react-modal-image';
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
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<PreviewImageObject | null>(null);

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

export default BerandaPage;