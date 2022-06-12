import { Meta, Story } from '@storybook/react';
import SignUp from './SignUp';

export default {
  title: 'Market Chat/Pages/SignUp',
  component: SignUp,
  argTypes: {},
  args: {},
};

const Template = (args) => <SignUp {...args} />;

export const Default = Template.bind({});
