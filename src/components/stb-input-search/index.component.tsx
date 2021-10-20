import React from 'react';
import * as s from './index.styled';

const StbInputSearch: React.FC = (props) => {
  return (
    <form action="/search">
      <s.InputSearch>
        <s.Input
          name="q"
          type="text"
          placeholder="What do you want to watch?"
          className="py-2 px-4"
        />
        <s.Button type="submit">
          <s.SearchIcon />
        </s.Button>
      </s.InputSearch>
    </form>
  );
}

export default StbInputSearch;