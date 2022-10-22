import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '../components/MaterialUI/modal/Modal';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: any) => <Modal title={'Title'} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  open: true,
  children: 'Content',
};
