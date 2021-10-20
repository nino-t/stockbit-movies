import React from 'react';
import { render, screen } from '@testing-library/react';
import StbNav from './index.component';
import { Nav } from './index.interface';
import { BrowserRouter } from 'react-router-dom';

describe("stb-nav component", () => {
  let initialProps: Nav = {
    menus: [
      {
        label: 'Sign up',
        href: '/accounts/sign-up'
      },
      {
        label: 'Sign in',
        href: '/accounts/sign-in'
      }
    ]
  }

  test('renders stb-nav component correctly', () => {
    render(
      <BrowserRouter>
        <StbNav {...initialProps} />
      </BrowserRouter>
    );
    const menuElement = screen.getByText(initialProps.menus[0].label);
    expect(menuElement).toBeInTheDocument();
  });
});
