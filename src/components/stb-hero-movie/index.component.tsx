import React from 'react';
import * as s from './index.styled';
import * as i from './index.interface';

const StbHeroMovie: React.FC<i.StbHeroMovieProps> = ({ title, synopsis, background, watchButton, containerClassname = 'container mx-auto' }) => {
  const { label: watchButtonLabel, href: watchButtonHref }  = watchButton;
  return (
    <s.Hero background={background}>
      <div className={containerClassname}>
        <div>
          <s.Title>{title}</s.Title>
          <s.Synopsis>{synopsis}</s.Synopsis>
          <s.WatchButton to={watchButtonHref}>
            {watchButtonLabel}
          </s.WatchButton>
        </div>
      </div>
    </s.Hero>
  );
}

export default StbHeroMovie;