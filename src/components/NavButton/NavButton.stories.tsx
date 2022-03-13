import { Meta, Story } from '@storybook/react';
import NavButton, { INavButtonProps } from './NavButton';

export default {
  title: 'Market Chat/Navigation Button',
  component: NavButton,
  argTypes: {},
  args: {
    to: '/',
  },
} as Meta;

const Template: Story<INavButtonProps> = (args) => (
  <NavButton {...args}>Press Me!</NavButton>
);

export const Default = Template.bind({});
