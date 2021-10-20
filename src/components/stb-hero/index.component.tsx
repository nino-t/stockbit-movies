import React from 'react';
import * as s from './index.styled';
import * as i from './index.interface';

const StbHero: React.FC<i.Hero> = (props) => {
  return (
    <s.Hero cover={props.image} title={props.title}>
      {props.children}
    </s.Hero>
  );
}

export default StbHero;