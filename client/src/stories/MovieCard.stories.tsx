import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieCard, { TMovieType } from '../components/movieCard';
import { movies } from './stub';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card/MovieCard',
  component: MovieCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MovieCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieCard> = (args: any) => (
  <MovieCard
    movie={{
      posterPath: '',
      title: '',
      description: '',
      releaseDate: undefined,
    }}
    {...args}
  />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  // primary: true,
  // label: 'Button',
  // movie: movies[0],
};

export const Secondary = Template.bind({});
Secondary.args = {
  // label: 'Button',
  // movie: movies[0],
};

export const Large = Template.bind({});
Large.args = {
  // size: 'large',
  // label: 'Button',
  // movie: movies[0],
};

export const Small = Template.bind({});
Small.args = {
  // size: 'small',
  // label: 'Button',
  // movie: movies[0],
};
