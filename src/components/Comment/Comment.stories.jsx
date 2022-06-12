import { Meta, Story } from '@storybook/react';
import Comment from './Comment';

export default {
  title: 'Market Chat/Comment',
  component: Comment,
  argTypes: {},
  args: {
    key: '1',
    comment: 'Hi',
    onHandleVote: null,
    onClickReply: null,
  },
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
