import { Meta, Story } from '@storybook/react';
import About from './About';

export default {
  title: 'Market Chat/Pages/About',
  component: About,
  argTypes: {},
  args: {},
};

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
