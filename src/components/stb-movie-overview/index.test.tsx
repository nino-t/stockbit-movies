import React from 'react';
import { render, screen } from '@testing-library/react';
import StbHeroWatch from './index.component';
import { MovieOverview } from './index.interface';

describe("stb-movie-overview component", () => {
  let initialProps: MovieOverview = {
    poster: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    title: 'Batman v Superman: Dawn of Justice',
    plot: 'Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.',
    year: 2016,
    rated: 'PG-13',
    released: '25 Mar 2016',
    runtime: '152 min',
    genre: 'Action, Adventure, Sci-Fi',
    actors: 'Ben Affleck, Henry Cavill, Amy Adams',
    writer: 'Chris Terrio, David S. Goyer, Bob Kane'
  }

  test('renders stb-movie-overview component correctly', () => {
    render(<StbHeroWatch {...initialProps} />);
    const titleElement = screen.getByText(initialProps.title);
    const plotElement = screen.getByText(initialProps.plot);
    const yearElement = screen.getByText(String(initialProps.year));
    const ratedElement = screen.getByText(initialProps.rated);
    const releasedElement = screen.getByText(initialProps.released);
    const runtimeElement = screen.getByText(initialProps.runtime);
    const genreElement = screen.getByText(initialProps.genre);
    const actorsElement = screen.getByText(initialProps.actors);
    const writerElement = screen.getByText(initialProps.writer);

    expect(titleElement).toBeInTheDocument();
    expect(plotElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
    expect(ratedElement).toBeInTheDocument();
    expect(releasedElement).toBeInTheDocument();
    expect(runtimeElement).toBeInTheDocument();
    expect(genreElement).toBeInTheDocument();
    expect(actorsElement).toBeInTheDocument();
    expect(writerElement).toBeInTheDocument();
  });
});
