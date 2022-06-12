import { Meta, Story } from '@storybook/react';
import PostPreview from './PostPreview';

export default {
  title: 'Market Chat/PostPreview',
  component: PostPreview,
  argTypes: {},
  args: {},
};

const Template = (args) => <PostPreview {...args} />;

export const Default = Template.bind({});
