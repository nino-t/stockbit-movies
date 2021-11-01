import React from 'react';
import * as s from './stb-card-movie.styled';
import * as i from './stb-card-movie.interface';
import nullImage from '../../assets/images/null-image.png';

/**
 * @name StbCardMovie
 * @description Component for showing detail movie in the card, and required to combine with grid for flex-box mechanism.
 * 
 * @component
 * @example
 * const args = {
 *   id: 'vdrandom1',
 *   title: 'Batman: The Dark Knight',
 *   release: '2008',
 *   poster: 'https://upload.wikimedia.org/wikipedia/id/8/8a/Dark_Knight.jpg',
 *   href: '/watch?v=vdrandom1',
 *   handlePosterClicked: () => {}
 * }
 * return (
 *   <StbCardMovie {...args} />
 * )
 */
const StbCardMovie: React.FC<i.StbCardMovieProps> = ({ poster, title, release, href, handlePosterClicked }) => {
  return (
    <s.Card>
      <s.Poster
        src={poster}
        alt={title}
        onClick={handlePosterClicked}
        onError={(e: any)=> {e.target.onerror = null; e.target.src = nullImage }}
      />
      <s.Release>{release}</s.Release>
      <s.Link to={href}>
        <s.Title>{title}</s.Title>
      </s.Link>
    </s.Card>
  );
}

export default StbCardMovie;