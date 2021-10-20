import React from 'react';
import * as s from './index.styled';
import * as i from './index.interface';
import nullImage from '../../assets/images/null-image.png';

const StbMovieOverview: React.FC<i.MovieOverview> = (props) => {
  return (
    <s.MovieOverview className="flex">
      <div className="w-2/12">
        <s.Poster
          src={props.poster}
          alt={props.title}
          onError={(e: any)=> {e.target.onerror = null; e.target.src = nullImage }}
        />
      </div>
      <div className="py-2 px-8 bg-white w-10/12" style={{ border: '1px solid #BE123C' }}>
        <s.Title>{props.title}</s.Title>
        <s.Synopsis className="mb-4">{props.plot}</s.Synopsis>

        <div className="mb-4">
          <b>Year</b>
          <p>{props.year}</p>
        </div>

        <div className="mb-4">
          <b>Rated</b>
          <p>{props.rated}</p>
        </div>
        
        <div className="mb-4">
          <b>Released</b>
          <p>{props.released}</p>
        </div>

        <div className="mb-4">
          <b>Runtime</b>
          <p>{props.runtime}</p>
        </div>

        <div className="mb-4">
          <b>Genre</b>
          <p>{props.genre}</p>
        </div>

        <div className="mb-4">
          <b>Actors</b>
          <p>{props.actors}</p>
        </div>

        <div className="mb-4">
          <b>Writer</b>
          <p>{props.writer}</p>
        </div>
      </div>
    </s.MovieOverview>
  );
}

export default StbMovieOverview;