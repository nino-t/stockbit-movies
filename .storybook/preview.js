import React from "react";
import 'tailwindcss/dist/tailwind.min.css';
import { MemoryRouter } from "react-router";
import { addDecorator } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);