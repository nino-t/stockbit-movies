import React from 'react';
import { render, screen } from '@testing-library/react';
import StbHeroWatch from './index.component';
import { HeroWatch } from './index.interface';

describe("stb-hero-watch component", () => {
  let initialProps: HeroWatch = {
    title: 'Batman the dark knight',
    synopsis: 'A gang of criminals rob a Gotham City mob bank; the Joker manipulates them into murdering each other for a higher share until only he remains, escaping with the money. Batman, District Attorney Harvey Dent and Lieutenant Jim Gordon form an alliance to rid Gotham of organized crime.'
  }

  test('renders stb-hero-watch component correctly', () => {
    render(<StbHeroWatch {...initialProps} />);
    const titleElement = screen.getByText(initialProps.title);
    const synopsisElement = screen.getByText(initialProps.synopsis);

    expect(titleElement).toBeInTheDocument();
    expect(synopsisElement).toBeInTheDocument();
  });
});
