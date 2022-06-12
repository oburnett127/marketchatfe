import { Meta, Story } from '@storybook/react';
import Profile from './Profile';

export default {
  title: 'Market Chat/Pages/Profile',
  component: Profile,
  argTypes: {},
  args: {},
};

const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
