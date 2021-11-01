import tw from 'twin.macro';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Card = styled.div.attrs({
  role: 'stb-card-movie'
})``;

export const Poster = styled.img.attrs({
  role: 'stb-card-movie__poster'
})`
  ${tw`cursor-pointer w-full`}
`;

export const Link = styled(RouterLink).attrs({
  role: 'stb-card-movie__link'
})``;

export const Title = styled.h4.attrs({
  role: 'stb-card-movie__title'
})`
  ${tw`cursor-pointer text-base font-bold`}
`;

export const Release = styled.span.attrs({
  role: 'stb-card-movie__release'
})`
  ${tw`text-sm`}
`;