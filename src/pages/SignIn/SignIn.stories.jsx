import { Meta, Story } from '@storybook/react';
import SignIn from './SignIn';

export default {
  title: 'Market Chat/Pages/SignIn',
  component: SignIn,
  argTypes: {},
  args: {},
};

const Template = (args) => <SignIn {...args} />;

export const Default = Template.bind({});
