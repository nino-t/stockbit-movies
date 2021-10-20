import React from 'react';
import * as s from './index.styled';

const StbPlaylistVideos: React.FC<{ title: string }> = (props) => {
  return ( 
    <s.StbPlaylistVideos>
      <s.Heading className="mb-8">
        <s.Title>{props.title}</s.Title>
      </s.Heading>
      <s.Body className="grid grid-cols-5 gap-x-12 gap-y-6">
        {props.children}
      </s.Body>
    </s.StbPlaylistVideos>
  )
}

export default StbPlaylistVideos;