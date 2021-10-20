import React from 'react';
import { render, screen } from '@testing-library/react';
import StbHero from './index.component';
import { Hero } from './index.interface';

describe("stb-hero component", () => {
  let initialProps: Hero = {
    title: 'Hello World',
    image: 'https://image.png'
  }

  test('renders stb-hero component correctly', () => {
    render(<StbHero {...initialProps} />);
    const heroElement = screen.getByTitle(initialProps.title);
    expect(heroElement).toBeInTheDocument();
  });
});
