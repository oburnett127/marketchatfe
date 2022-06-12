import { Meta, Story } from '@storybook/react';
import ReplyForm from './ReplyForm';

export default {
  title: 'Market Chat/Reply Form',
  component: ReplyForm,
  argTypes: {},
  args: {},
};

const Template = (args) => <ReplyForm {...args} />;

export const Default = Template.bind({});
