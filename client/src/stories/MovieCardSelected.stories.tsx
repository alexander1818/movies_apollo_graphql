import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MovieCardSelected from '../components/movieCardSelected';

export default {
  title: 'Card/MovieCardSelected',
  component: MovieCardSelected,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MovieCardSelected>;

const Template: ComponentStory<typeof MovieCardSelected> = (args: any) => (
  <MovieCardSelected {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  // movie: movies[0],
};
