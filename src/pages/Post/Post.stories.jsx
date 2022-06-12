import { Meta, Story } from '@storybook/react';
import Post from './Post';

export default {
  title: 'Market Chat/Pages/Post',
  component: Post,
  argTypes: {},
  args: {},
};

const Template = (args) => <Post {...args} />;

export const Default = Template.bind({});
