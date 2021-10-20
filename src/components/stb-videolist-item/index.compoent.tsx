import React from 'react';
import { Link } from 'react-router-dom';
import * as s from './index.styled';
import * as i from './index.interface';

const StbVideolistItem: React.FC<i.VideolistItem> = (props) => {
  return (
    <s.VideolistItem>
      <s.Poster
        src={props.poster}
        alt={props.title}
        onClick={props.handlePosterClicked}
      />
      <div className="py-2">
        <s.Year className="mb-1">{props.type}, {props.year}</s.Year>
        <Link to={`/v/${props.id}`}>
          <s.Title>{props.title}</s.Title>
        </Link>
      </div>
    </s.VideolistItem>
  );
}

export default StbVideolistItem;