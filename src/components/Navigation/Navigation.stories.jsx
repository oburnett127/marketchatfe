import { Meta, Story } from '@storybook/react';
import Navigation from './Navigation';

export default {
  title: 'Market Chat/Navigation',
  component: Navigation,
  argTypes: {},
  args: {},
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
