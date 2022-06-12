import { Meta, Story } from '@storybook/react';
import PostSelect from './PostSelect';

export default {
  title: 'Market Chat/Post Select',
  component: PostSelect,
  argTypes: {},
  args: {},
};

const Template = (args) => <PostSelect {...args} />;

export const Default = Template.bind({});
