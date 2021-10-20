import styled from 'styled-components';

export const Nav = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 24px;
  }

  a {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  }
`;

