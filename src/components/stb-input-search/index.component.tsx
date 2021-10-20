import React from 'react';
import * as s from './index.styled';
import * as i from './index.interface';

const StbInputSearch: React.FC<i.InputSearch> = (props) => {
  return (
    <form action="/search">
      <s.InputSearch>
        <s.Input
          name="q"
          type="text"
          className="py-2 px-4"
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.handleChange}
        />
        <s.Button type="submit">
          <s.SearchIcon />
        </s.Button>
      </s.InputSearch>
    </form>
  );
}

export default StbInputSearch;