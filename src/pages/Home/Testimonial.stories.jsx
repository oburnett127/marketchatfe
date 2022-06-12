import { Meta, Story } from '@storybook/react';
import Testimonial from './Testimonial';

export default {
  title: 'Market Chat/Testimonial',
  component: Testimonial,
  argTypes: {},
  args: {},
};

const Template = (args) => <Testimonial {...args} />;

export const Default = Template.bind({});
