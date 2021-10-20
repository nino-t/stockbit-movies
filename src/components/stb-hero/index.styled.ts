import styled from 'styled-components';

export const Hero = styled.div<{cover: string}>`
  width: 100%;
  height: calc(100vh - 300px);
  z-index: -1;

  background-image: ${(props) => `linear-gradient(rgba(155, 89, 182, .55), rgba(155, 89, 182, .55)), url("${props.cover}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

