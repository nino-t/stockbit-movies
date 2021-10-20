import React from 'react';
import * as s from './index.styled';
import * as i from './index.interface';

const StbHeroWatch: React.FC<i.HeroWatch> = (props) => {
  return (
    <s.HeroWatch>
      <s.Title className="mb-3">{props.title}</s.Title>
      <s.Synopsis className="mb-2">{props.synopsis}</s.Synopsis>
      <s.WatchButton type="button" className="py-3 px-4">
        WATCH TRAILER
      </s.WatchButton>
    </s.HeroWatch>
  );
}

export default StbHeroWatch;