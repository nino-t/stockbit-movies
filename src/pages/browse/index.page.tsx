import React from 'react';
import AppLayout from '../../features/app-layout/index.feature';
import BrowseHeroLanding from '../../features/browse-hero-landing/index.feature';
import BatmanMovies from '../../features/batman-movies/index.feature';
import StbContainer from '../../components/stb-container/stb-container.component';

const BrowsePage: React.FC = () => {
  return (
    <AppLayout>
      <BrowseHeroLanding />
      <StbContainer>
        <BatmanMovies />
      </StbContainer>
    </AppLayout>
  );
}

export default BrowsePage;