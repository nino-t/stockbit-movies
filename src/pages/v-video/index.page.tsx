import React from 'react';
import heroVideos from '../../assets/images/hero-videos.png';
import StbHero from '../../components/stb-hero/index.component';
import StbMovieOverview from '../../components/stb-movie-overview/index.component';
import AppLayout from '../../features/app-layout/index.feature';

const VvideoPage: React.FC = () => {
  return (
    <AppLayout>
      <StbHero
        title={'Videos collection'}
        image={heroVideos}
      />

      <div className="container mx-auto mb-20" style={{ marginTop: '-200px' }}>
        <StbMovieOverview
          poster={'https://m.media-amazon.com/images/M/MV5BYTBiZjFlZDQtZjc1MS00YzllLWE5ZTQtMmM5OTkyNjZjMWI3XkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg'}
          title={'The Lego Movie'}
          plot={'An ordinary LEGO construction worker, thought to be the prophesied as, is recruited to join a quest to stop an evil tyrant from gluing the LEGO universe into eternal stasis.'}
          year={2014}
          rated={'PG'}
          released={'07 Feb 2014'}
          runtime={'100 min'}
          genre={'Animation, Adventure, Comedy'}
          actors={'Chris Pratt, Will Ferrell, Elizabeth Banks'}
          writer={'Phil Lord, Christopher Miller, Dan Hageman'} />
      </div>
    </AppLayout>
  );
}

export default VvideoPage;