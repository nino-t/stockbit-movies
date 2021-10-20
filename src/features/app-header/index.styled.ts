import styled from 'styled-components';

export const AppHeader = styled.div<{isHeaderTransparent: boolean}>`
  z-index: 100;
  background: ${(props) => props.isHeaderTransparent === true ? 'transparent' : '#BE123C'};
`;