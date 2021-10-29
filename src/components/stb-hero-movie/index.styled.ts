import tw from 'twin.macro';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Hero = styled.div.attrs({
  className: 'w-full bg-center bg-no-repeat bg-cover relative'
})<{ background: string }>`
  height: calc(100vh - 40vh);
  background-image: ${({ background }) => `linear-gradient(rgba(155, 89, 182, .55), rgba(155, 89, 182, .55)), url("${background}")`};

  > div:first-child {
    ${tw`h-full flex items-center`};

    > div {
      ${tw`w-1/2`};
    }
  }
`;

export const Title = styled.h3.attrs({
  className: 'font-bold text-white text-5xl'
})``;

export const Synopsis = styled.p.attrs({
  className: 'text-white text-base mt-4 mb-4'
})``;

export const WatchButton = styled(Link)`
  ${tw`text-white bg-red-600 hover:bg-red-700 px-4 py-3 rounded cursor-pointer uppercase`};
`;