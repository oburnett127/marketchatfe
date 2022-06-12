import { Meta, Story } from '@storybook/react';
import Footer from './Footer';

export default {
  title: 'Market Chat/Footer',
  component: Footer,
  argTypes: {},
  args: {},
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
