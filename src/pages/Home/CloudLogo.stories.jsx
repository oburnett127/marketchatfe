import { Meta, Story } from '@storybook/react';
import CloudLogo from './CloudLogo';

export default {
  title: 'Market Chat/CloudLogo',
  component: CloudLogo,
  argTypes: {},
  args: {},
};

const Template = (args) => <CloudLogo {...args} />;

export const Default = Template.bind({});
