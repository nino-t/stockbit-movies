import React from 'react';
import AppLayout from '../../features/app-layout/index.feature';
import StbContainer from '../../components/stb-container/stb-container.component';
import SearchMovies from '../../features/search-movies/index.feature';

const SearchPage: React.FC = () => {
  return (
    <AppLayout isHeaderTransparent={false}>
      <StbContainer>
        <SearchMovies />
      </StbContainer>
    </AppLayout>
  );
}

export default SearchPage;