import { Meta, Story } from '@storybook/react';
import Home from './Home';

export default {
  title: 'Market Chat/Pages/Home',
  component: Home,
  argTypes: {},
  args: {},
};

const Template = (args) => <Home {...args} />;

export const Default = Template.bind({});
