import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './stb-card-movie.styled';
import * as i from './stb-card-movie.interface';
import nullImage from '../../assets/images/null-image.png';

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
      <Link to={href}>
        <s.Title>{title}</s.Title>
      </Link>
    </s.Card>
  );
}

export default StbCardMovie;