import React from 'react';
import { render, screen } from '@testing-library/react';
import StbNavbarBrand from './index.component';
import { BrowserRouter } from 'react-router-dom';

describe("stb-navbar-brand component", () => {
  test('renders stb-navbar-brand component correctly', () => {
    render(
      <BrowserRouter>
        <StbNavbarBrand logo={'/logo.png'} title={'MovieStock'} />
      </BrowserRouter>
    );
    const heroElement = screen.getByText('MovieStock');
    expect(heroElement).toBeInTheDocument();
  });
});
