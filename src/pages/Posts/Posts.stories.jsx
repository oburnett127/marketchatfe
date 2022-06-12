import { Meta, Story } from '@storybook/react';
import Posts from './Posts';

export default {
  title: 'Market Chat/Pages/Posts',
  component: Posts,
  argTypes: {},
  args: {},
};

const Template = (args) => <Posts {...args} />;

export const Default = Template.bind({});
