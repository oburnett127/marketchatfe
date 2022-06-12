import { Meta, Story } from '@storybook/react';
import PostHeader from './PostHeader';

export default {
  title: 'Market Chat/PostHeader',
  component: PostHeader,
  argTypes: {},
  args: {},
};

const Template = (args) => <PostHeader {...args} />;

export const Default = Template.bind({});
