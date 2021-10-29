import React from 'react';
import backgroundImage from '../../assets/images/batman-hero.jpeg';
import StbHeroMovie from '../../components/stb-hero-movie/index.component';

const BrowseHeroLanding: React.FC = () => {
  return <StbHeroMovie
    title="Batman the dark knight"
    synopsis="A gang of criminals rob a Gotham City mob bank; the Joker manipulates them into murdering each other for a higher share until only he remains, escaping with the money. Batman, District Attorney Harvey Dent and Lieutenant Jim Gordon form an alliance to rid Gotham of organized crime."
    background={backgroundImage}
    watchButton={{
      label: 'WATCH NOW',
      href: '/watch?v=batman-the-dark-knight'
    }}
  />
}

export default React.memo(BrowseHeroLanding);