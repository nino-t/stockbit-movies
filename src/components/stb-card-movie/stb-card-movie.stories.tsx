import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StbCardMovie from './stb-card-movie.component';

export default {
  title: 'Components/stb-card-movie',
  decorators: [
    (Story) => (
      <div className="grid grid-cols-5 gap-x-12 gap-y-6">
        {Story()}
      </div>
    ),
  ],
  component: StbCardMovie,
  argTypes: {
    id: {
      description: 'Primary id of movie.<br />`required | type: string`'
    },
    title: {
      description: 'Title of movie.<br />`required | type: string`'
    },
    release: {
      description: 'Release year of movie.<br />`required | type: string`'
    },
    poster: {
      description: 'Poster image url of movie. If source is not valid or error on load, component will give the blank page poster.<br />`required | type: string`'
    },
    href: {
      description: 'Link url for movie detail.<br />`required | type: string`'
    },
    handlePosterClicked: {
      description: 'Event for clicked image poster.<br />`required | type: function void`'
    }
  }
} as ComponentMeta<typeof StbCardMovie>;

const Template: ComponentStory<typeof StbCardMovie> = (args) => (
  <StbCardMovie {...args} handlePosterClicked={action('poster-clicked')} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'movie1',
  title: 'Batman the dark knight',
  release: '2014',
  poster: 'test.png',
  href: '/watch?v=movie1'
};